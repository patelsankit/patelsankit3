/*!
 * © 2026 Sankit Parasiya (https://github.com/patelsankit). All rights reserved.
 * Part of Sankit Parasiya's portfolio — not licensed for reuse.
 */
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { ImageResponse } from "next/og";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — ${profile.role}`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

const avatar = await readFile(join(process.cwd(), "src/assets/og-avatar.jpg"), "base64");

export default async function Image() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 80,
          background: "#fdfcfa",
          color: "#16161d",
          fontFamily: "sans-serif",
          backgroundImage: "radial-gradient(circle at 1px 1px, #e4e4ea 1.5px, transparent 0)",
          backgroundSize: "28px 28px",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 28 }}>
          <img
            src={`data:image/jpeg;base64,${avatar}`}
            width={132}
            height={132}
            alt=""
            style={{ borderRadius: 999, border: "6px solid #efeff3" }}
          />
          <div style={{ display: "flex", flexDirection: "column" }}>
            <div style={{ fontSize: 60, fontWeight: 700, letterSpacing: -2 }}>{profile.name}</div>
            <div style={{ fontSize: 30, color: "#3b5bdb" }}>{profile.role}</div>
          </div>
        </div>
        <div style={{ fontSize: 40, lineHeight: 1.3, maxWidth: 960, color: "#4a4a55" }}>
          {profile.tagline}
        </div>
        <div style={{ display: "flex", fontSize: 24, color: "#6b6b78" }}>
          React · Next.js · TypeScript · Tailwind CSS — {profile.location}
        </div>
      </div>
    ),
    size,
  );
}
