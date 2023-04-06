import { Store } from "tauri-plugin-store-api";

const db = new Store("settings.conf");

if (!(await db.length())) {
  await Promise.all([
    db.set("jsoneditor", {}),
    db.set("hashes", ""),
    db.set("pinned", []),
    db.set("theme", "dark"),
    db.set("epoch", {}),
  ]);
  await db.save();
}

if (import.meta.env.DEV) {
  (window as any).db = db;
}
export { db };
