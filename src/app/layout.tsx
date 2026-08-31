import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Barlow_Condensed } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const barlowCondensed = Barlow_Condensed({
  variable: "--font-barlow-condensed",
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

export const metadata: Metadata = {
  title: "Meridian — Release Intelligence",
  description:
    "Every release, every stakeholder, one source of truth. Meridian connects your deployment pipeline to business outcomes in real time.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  const contract = `<!--
IMPECCABLE CONTRACT | seed e00bad6c | challenger vernacular-ephemera-boarding-pass-and-gate-board
THESIS: Every release is a departure — two panels refuse the SaaS hero: a boarding pass manifest left, a live gate board right. No centered hero, no feature grid.
OWN-WORLD: Near-black panels #0f0f11/#16161e. Cream #f0eeeb. Alert red #e84040, success green #22c55e. Barlow Condensed for labels, Geist Mono for all data, Geist Sans for prose.
STORY: Visitor reads the boarding pass in five seconds, watches the board tick live, understands the product, clicks Request Access.
FIRST VIEWPORT: Two equal columns, 100dvh. Left: boarding pass with version/gate/metrics + primary CTA bottom-right. Right: live departure board, 6 rows, status auto-updating every 3.5s.
FORM: Challenger wins both axes vs assigned Soviet Constructivist. Raised by Lowicz (z-depth), Akari (light-as-state), WebGL (system-alive motion). Code-led build.
FINISH: unreviewed and undocumented is unfinished; this build ends with the finish review, the verdict, DESIGN.md, and every shipping raster carrying its provenance.
-->`;

  return (
    <html
      lang="fr"
      className={`${geistSans.variable} ${geistMono.variable} ${barlowCondensed.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-ground text-cream">
        <span
          aria-hidden="true"
          style={{ display: "none" }}
          dangerouslySetInnerHTML={{ __html: contract }}
        />
        {children}
      </body>
    </html>
  );
}
