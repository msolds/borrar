"""Aplicación mínima para el laboratorio de despliegue seguro."""

from flask import Flask, jsonify

app = Flask(__name__)


@app.get("/")
def index():
    return jsonify(message="Laboratorio Flask listo", status="ok")


@app.get("/healthz")
def healthcheck():
    return jsonify(status="healthy"), 200


if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)
