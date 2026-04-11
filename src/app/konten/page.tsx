"use client";
import { useState, useMemo } from "react";
import DATA from "./data";
import type { ContentItem } from "./data";

// ─── Helpers ──────────────────────────────────────────────────────────────────
function formatDate(dateStr: string) {
  const d = new Date(dateStr);
  return d.toLocaleDateString("id-ID", { day: "numeric", month: "short" });
}

function copyToClipboard(text: string, cb: () => void) {
  navigator.clipboard.writeText(text).then(cb).catch(() => {});
}

function buildJsonString(item: ContentItem) {
  return JSON.stringify({ prefix: item.prefix, slides: item.slides }, null, 2);
}

// ─── Card Component ───────────────────────────────────────────────────────────
function ContentCard({ item }: { item: ContentItem }) {
  const [open, setOpen] = useState(false);
  const [copiedJson, setCopiedJson] = useState(false);
  const [copiedCaption, setCopiedCaption] = useState(false);

  const isDigital = item.slot === "pagi";

  const handleCopyJson = () => {
    copyToClipboard(buildJsonString(item), () => {
      setCopiedJson(true);
      setTimeout(() => setCopiedJson(false), 1800);
    });
  };

  const handleCopyCaption = () => {
    copyToClipboard(item.caption, () => {
      setCopiedCaption(true);
      setTimeout(() => setCopiedCaption(false), 1800);
    });
  };

  return (
    <div
      style={{
        background: "var(--surface)",
        border: "1px solid var(--border)",
        borderRadius: 16,
        marginBottom: 12,
        overflow: "hidden",
        transition: "border-color 0.2s",
      }}
    >
      {/* Header */}
      <div
        onClick={() => setOpen((v) => !v)}
        style={{
          padding: "16px",
          cursor: "pointer",
          display: "flex",
          alignItems: "center",
          gap: 12,
        }}
      >
        {/* Day badge */}
        <div
          style={{
            flex: "0 0 44px",
            height: 44,
            borderRadius: 12,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            justifyContent: "center",
            fontWeight: 700,
            fontSize: 14,
            lineHeight: 1,
            background: isDigital ? "var(--accent-digital-bg)" : "var(--accent-ai-bg)",
            color: isDigital ? "var(--accent-digital)" : "var(--accent-ai)",
          }}
        >
          <span style={{ fontSize: 9, fontWeight: 500, opacity: 0.7, marginBottom: 2 }}>
            {isDigital ? "🌅" : "🌙"}
          </span>
          {item.day}
        </div>

        {/* Info */}
        <div style={{ flex: 1, minWidth: 0 }}>
          <div
            style={{
              fontSize: 14,
              fontWeight: 700,
              whiteSpace: "nowrap",
              overflow: "hidden",
              textOverflow: "ellipsis",
            }}
          >
            {item.projectTitle}
          </div>
          <div style={{ display: "flex", gap: 8, marginTop: 4, alignItems: "center", flexWrap: "wrap" }}>
            <span
              style={{
                fontSize: 10,
                padding: "2px 8px",
                borderRadius: 8,
                fontWeight: 600,
                background: isDigital ? "var(--accent-digital-bg)" : "var(--accent-ai-bg)",
                color: isDigital ? "var(--accent-digital)" : "var(--accent-ai)",
              }}
            >
              {item.topic}
            </span>
            <span style={{ fontSize: 11, color: "var(--text2)" }}>{formatDate(item.date)}</span>
          </div>
        </div>

        {/* Chevron */}
        <span
          style={{
            fontSize: 18,
            color: "var(--text2)",
            transition: "transform 0.3s",
            transform: open ? "rotate(180deg)" : "none",
            flex: "0 0 auto",
          }}
        >
          ›
        </span>
      </div>

      {/* Body */}
      {open && (
        <div style={{ padding: "0 16px 16px" }}>
          {/* JSON */}
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text2)", margin: "16px 0 8px", fontWeight: 600 }}>
            JSON Slides
          </div>
          <textarea
            readOnly
            value={buildJsonString(item)}
            style={{
              width: "100%",
              minHeight: 180,
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--text)",
              fontFamily: "JetBrains Mono, monospace",
              fontSize: 11,
              lineHeight: 1.5,
              padding: 14,
              resize: "vertical",
              outline: "none",
            }}
          />

          {/* Caption */}
          <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: "1.5px", color: "var(--text2)", margin: "16px 0 8px", fontWeight: 600 }}>
            Caption IG
          </div>
          <textarea
            readOnly
            value={item.caption}
            style={{
              width: "100%",
              minHeight: 100,
              background: "var(--bg)",
              border: "1px solid var(--border)",
              borderRadius: 10,
              color: "var(--text)",
              fontFamily: "DM Sans, sans-serif",
              fontSize: 13,
              lineHeight: 1.6,
              padding: 14,
              resize: "vertical",
              outline: "none",
            }}
          />

          {/* Buttons */}
          <div style={{ display: "flex", gap: 8, marginTop: 12, flexWrap: "wrap" }}>
            <button
              onClick={handleCopyJson}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                borderRadius: 10,
                border: "none",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                background: copiedJson ? "var(--accent-digital)" : "var(--surface2)",
                color: copiedJson ? "#000" : "var(--text)",
              }}
            >
              {copiedJson ? "✓ Copied!" : "📋 Copy JSON"}
            </button>
            <button
              onClick={handleCopyCaption}
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 6,
                padding: "10px 20px",
                borderRadius: 10,
                border: "none",
                fontFamily: "DM Sans, sans-serif",
                fontSize: 13,
                fontWeight: 600,
                cursor: "pointer",
                transition: "all 0.2s",
                background: copiedCaption ? "var(--accent-digital)" : "var(--surface2)",
                color: copiedCaption ? "#000" : "var(--text)",
              }}
            >
              {copiedCaption ? "✓ Copied!" : "✍️ Copy Caption"}
            </button>
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────
export default function KontenPage() {
  const [filter, setFilter] = useState<"all" | "pagi" | "malam">("all");
  const [search, setSearch] = useState("");

  const filtered = useMemo(() => {
    return DATA.content.filter((item) => {
      if (filter === "pagi" && item.slot !== "pagi") return false;
      if (filter === "malam" && item.slot !== "malam") return false;
      if (search.trim()) {
        const q = search.toLowerCase();
        return (
          item.projectTitle.toLowerCase().includes(q) ||
          item.topic.toLowerCase().includes(q) ||
          item.category.toLowerCase().includes(q)
        );
      }
      return true;
    });
  }, [filter, search]);

  const digitalCount = DATA.content.filter((i) => i.slot === "pagi").length;
  const malamCount = DATA.content.filter((i) => i.slot === "malam").length;

  return (
    <>
      <style>{`
        :root {
          --bg: #0c0c10;
          --surface: #141418;
          --surface2: #1c1c22;
          --border: rgba(255,255,255,0.06);
          --text: #e4e4e8;
          --text2: #8a8a96;
          --accent-digital: #10b981;
          --accent-ai: #8b5cf6;
          --accent-digital-bg: rgba(16,185,129,0.1);
          --accent-ai-bg: rgba(139,92,246,0.1);
        }
        * { margin: 0; padding: 0; box-sizing: border-box; }
        body {
          font-family: 'DM Sans', 'Inter', sans-serif;
          background: var(--bg);
          color: var(--text);
          line-height: 1.6;
          min-height: 100vh;
        }
        textarea { box-sizing: border-box; }
        button { font-family: inherit; }
        .filter-btn-active-all {
          background: rgba(255,255,255,0.08) !important;
          color: #fff !important;
          border-color: rgba(255,255,255,0.15) !important;
        }
        .filter-btn-active-digital {
          background: var(--accent-digital-bg) !important;
          color: var(--accent-digital) !important;
          border-color: var(--accent-digital) !important;
        }
        .filter-btn-active-malam {
          background: var(--accent-ai-bg) !important;
          color: var(--accent-ai) !important;
          border-color: var(--accent-ai) !important;
        }
      `}</style>

      {/* Header */}
      <div style={{ padding: "32px 20px 20px", borderBottom: "1px solid var(--border)", background: "linear-gradient(180deg,#16161e 0%,var(--bg) 100%)" }}>
        <div style={{ fontSize: 11, textTransform: "uppercase", letterSpacing: 3, color: "var(--text2)", marginBottom: 6 }}>
          Content Plan @dinarww
        </div>
        <h1 style={{ fontSize: 24, fontWeight: 800, marginBottom: 4 }}>
          {DATA.content.length} Carousel — 1 Bulan
        </h1>
        <p style={{ fontSize: 13, color: "var(--text2)" }}>
          Pagi: Digital Product &nbsp;•&nbsp; Malam: AI Bisnis
        </p>
      </div>

      {/* Stats */}
      <div style={{ display: "flex", gap: 8, padding: "16px 20px", overflowX: "auto" }}>
        {[
          { num: digitalCount, label: "Digital Product", color: "var(--accent-digital)" },
          { num: malamCount, label: "AI Bisnis", color: "var(--accent-ai)" },
          { num: DATA.content.length, label: "Total Konten", color: "var(--text)" },
          { num: 30, label: "Hari", color: "var(--text)" },
        ].map((s) => (
          <div
            key={s.label}
            style={{
              flex: "0 0 auto",
              padding: "12px 16px",
              background: "var(--surface)",
              borderRadius: 12,
              border: "1px solid var(--border)",
              minWidth: 110,
            }}
          >
            <div style={{ fontSize: 22, fontWeight: 800, color: s.color }}>{s.num}</div>
            <div style={{ fontSize: 11, color: "var(--text2)", marginTop: 2 }}>{s.label}</div>
          </div>
        ))}
      </div>

      {/* Search */}
      <div style={{ padding: "8px 20px 0" }}>
        <input
          type="text"
          placeholder="Cari topik, judul..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          style={{
            width: "100%",
            padding: "12px 16px",
            borderRadius: 12,
            border: "1px solid var(--border)",
            background: "var(--surface)",
            color: "var(--text)",
            fontSize: 14,
            outline: "none",
            fontFamily: "inherit",
          }}
        />
      </div>

      {/* Filters */}
      <div style={{ display: "flex", gap: 8, padding: "12px 20px", flexWrap: "wrap" }}>
        {(["all", "pagi", "malam"] as const).map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={
              filter === f
                ? f === "all"
                  ? "filter-btn-active-all"
                  : f === "pagi"
                  ? "filter-btn-active-digital"
                  : "filter-btn-active-malam"
                : ""
            }
            style={{
              padding: "8px 16px",
              borderRadius: 20,
              border: "1px solid var(--border)",
              background: "transparent",
              color: "var(--text2)",
              fontSize: 13,
              fontWeight: 500,
              cursor: "pointer",
              transition: "all 0.2s",
            }}
          >
            {f === "all" ? `Semua (${DATA.content.length})` : f === "pagi" ? `🌅 Pagi — Digital (${digitalCount})` : `🌙 Malam — AI (${malamCount})`}
          </button>
        ))}
      </div>

      {/* List */}
      <div style={{ padding: "8px 20px 40px" }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 20px", color: "var(--text2)", fontSize: 14 }}>
            Konten tidak ditemukan.
          </div>
        ) : (
          filtered.map((item, i) => <ContentCard key={`${item.day}-${item.slot}-${i}`} item={item} />)
        )}
      </div>
    </>
  );
}
