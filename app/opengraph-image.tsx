import { gunzipSync } from "node:zlib";
import { ImageResponse } from "next/og";
import { OG_SANS, OG_SERIF } from "./og-fonts";

export const alt = "Синемалогія: Револьвер — cinema.vision";
export const size = { width: 1664, height: 928 };
export const contentType = "image/png";

const paper = "#f3eee2";
const ink = "#242019";
const lapis = "#274fa8";
const sienna = "#a94d2f";
const ochre = "#c99a32";

function fontData(base64: string): ArrayBuffer {
  return Uint8Array.from(gunzipSync(Buffer.from(base64, "base64"))).buffer as ArrayBuffer;
}

export default function OpenGraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          position: "relative",
          backgroundColor: paper,
          fontFamily: "Sans",
          color: ink,
        }}
      >
        <div style={{ position: "absolute", left: 116, top: 300, display: "flex", flexDirection: "column" }}>
          <div style={{ display: "flex", fontSize: 50, lineHeight: 1, color: lapis }}>cinema.vision</div>
          <div style={{ display: "flex", marginTop: 34, fontSize: 44, lineHeight: 1, letterSpacing: 10.5 }}>СИНЕМАЛОГІЯ</div>
          <div style={{ display: "flex", marginTop: 22, marginLeft: -6, fontFamily: "Serif", fontSize: 162, lineHeight: 1, color: sienna }}>РЕВОЛЬВЕР</div>
          <div style={{ display: "flex", alignItems: "center", marginTop: 30, fontSize: 36, lineHeight: 1, letterSpacing: 7 }}>
            <span>НЕЗАБАРОМ</span>
            <span style={{ display: "flex", width: 12, height: 12, borderRadius: 6, backgroundColor: ochre, margin: "0 26px" }} />
            <span>VISION CINEMA</span>
          </div>
        </div>
        <div style={{ position: "absolute", left: 1150, top: 270, width: 410, height: 410, display: "flex" }}>
          <div style={{ position: "absolute", left: 0, top: 0, width: 410, height: 410, borderRadius: 205, border: `2px solid ${ochre}` }} />
          <div style={{ position: "absolute", left: 42, top: 42, width: 326, height: 326, borderRadius: 163, border: `2px solid ${ochre}` }} />
          <div style={{ position: "absolute", left: 100, top: 100, width: 210, height: 210, borderRadius: 105, backgroundColor: ochre }} />
        </div>
      </div>
    ),
    {
      ...size,
      fonts: [
        { name: "Sans", data: fontData(OG_SANS), weight: 400, style: "normal" },
        { name: "Serif", data: fontData(OG_SERIF), weight: 400, style: "normal" },
      ],
    },
  );
}
