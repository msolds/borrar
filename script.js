(() => {
  const storageKey = "aula-devops-progreso-v1";
  const checks = [...document.querySelectorAll(".progress-check")];
  const progressFill = document.querySelector("#progress-fill");
  const progressPercent = document.querySelector("#progress-percent");
  const progressCaption = document.querySelector("#progress-caption");
  const progressBar = document.querySelector(".progress-track");
  const totalChecks = checks.length;

  function readProgress() {
    try {
      const saved = JSON.parse(localStorage.getItem(storageKey) || "{}");
      return saved && typeof saved === "object" ? saved : {};
    } catch {
      return {};
    }
  }

  let savedProgress = readProgress();
  checks.forEach((check) => {
    check.checked = savedProgress[check.dataset.progress] === true;
  });

  function updateProgress() {
    const checkedCount = checks.filter((check) => check.checked).length;
    const percent = totalChecks ? Math.round((checkedCount / totalChecks) * 100) : 0;
    progressFill.style.width = `${percent}%`;
    progressPercent.textContent = `${percent}%`;
    progressCaption.textContent = checkedCount === totalChecks
      ? "¡Has completado todas las actividades!"
      : `${checkedCount} de ${totalChecks} criterios marcados.`;
    progressBar.setAttribute("aria-valuenow", String(percent));
    savedProgress = Object.fromEntries(checks.map((check) => [check.dataset.progress, check.checked]));
    try {
      localStorage.setItem(storageKey, JSON.stringify(savedProgress));
    } catch {
      progressCaption.textContent = "No se pudo guardar; puedes continuar sin guardar el progreso.";
    }
  }

  checks.forEach((check) => check.addEventListener("change", updateProgress));
  updateProgress();

  document.querySelector("#reset-progress").addEventListener("click", () => {
    checks.forEach((check) => { check.checked = false; });
    try {
      localStorage.removeItem(storageKey);
    } catch {
      progressCaption.textContent = "No se pudo borrar el progreso guardado en este navegador.";
    }
    updateProgress();
  });

  const answers = {
    secrets: {
      correct: "b",
      explanation: "Correcto: revoca o rota la clave cuanto antes y evalúa qué pudo acceder a ella. Eliminar el archivo actual no elimina necesariamente el secreto del historial."
    },
    user: {
      correct: "b",
      explanation: "Correcto: un usuario no privilegiado reduce las acciones disponibles para un proceso comprometido. No sustituye las actualizaciones ni otras medidas."
    },
    port: {
      correct: "b",
      explanation: "Correcto: EXPOSE es documentación de la imagen. El mapeo del puerto, la red y la plataforma determinan quién puede llegar al servicio."
    }
  };

  document.querySelectorAll(".quiz").forEach((form) => {
    form.addEventListener("submit", (event) => {
      event.preventDefault();
      const quiz = answers[form.dataset.quiz];
      const feedback = form.querySelector(".quiz-feedback");
      const selected = form.querySelector('input[type="radio"]:checked');
      if (!selected) {
        feedback.className = "quiz-feedback incorrect";
        feedback.textContent = "Selecciona una respuesta antes de comprobar.";
        return;
      }
      const isCorrect = selected.value === quiz.correct;
      feedback.className = `quiz-feedback ${isCorrect ? "correct" : "incorrect"}`;
      feedback.textContent = isCorrect
        ? quiz.explanation
        : `No exactamente. ${quiz.explanation}`;
    });
  });

  document.querySelectorAll(".copy-button").forEach((button) => {
    button.addEventListener("click", async () => {
      const originalLabel = button.textContent;
      try {
        await navigator.clipboard.writeText(button.dataset.copy);
        button.textContent = "Copiado";
      } catch {
        button.textContent = "Copia manual";
      }
      window.setTimeout(() => { button.textContent = originalLabel; }, 1800);
    });
  });

  const navLinks = [...document.querySelectorAll(".nav-link")];
  const sections = navLinks.map((link) => document.querySelector(link.getAttribute("href"))).filter(Boolean);
  if ("IntersectionObserver" in window) {
    const observer = new IntersectionObserver((entries) => {
      const visible = entries.filter((entry) => entry.isIntersecting).sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];
      if (!visible) return;
      navLinks.forEach((link) => {
        const active = link.getAttribute("href") === `#${visible.target.id}`;
        link.classList.toggle("active", active);
        if (active) link.setAttribute("aria-current", "location");
        else link.removeAttribute("aria-current");
      });
    }, { rootMargin: "-20% 0px -65% 0px", threshold: [0, 0.2, 0.5] });
    sections.forEach((section) => observer.observe(section));
  }
})();
