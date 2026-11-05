// Minimal Ollama client with NO request timeout (Node's fetch gives up after 5 min when requests queue behind other jobs).
// Server: OLLAMA_URL env (default http://localhost:11434).
import http from "node:http";
const u = new URL(process.env.OLLAMA_URL ?? "http://localhost:11434");
export function generate(body) {
  return new Promise((resolve, reject) => {
    const data = JSON.stringify(body);
    const req = http.request({ hostname: u.hostname, port: u.port, path: "/api/generate", method: "POST", headers: { "Content-Type": "application/json", "Content-Length": Buffer.byteLength(data) } }, (res) => {
      let s = ""; res.setEncoding("utf8"); res.on("data", (c) => (s += c)); res.on("end", () => { try { resolve(JSON.parse(s)); } catch (e) { reject(e); } });
    });
    req.on("error", reject); req.setTimeout(0); req.write(data); req.end();
  });
}
