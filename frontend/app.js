/*
 * Mock "Bonvoy Assistant" (Agentforce Service Agent) for the Marriott demo.
 *
 * Presenter controls
 *   - Click a suggestion chip, OR type anything and press Enter: the script always advances,
 *     so a typo on stage never breaks the story.
 *   - Press "R" (outside the text box) or the ↺ button to reset the whole page.
 */
(function () {
  const cfg = window.DEMO_CONFIG || { MODE: "mock", agentDelay: 1100 };

  // ---------------- Live mode: load real Embedded Messaging ----------------
  if (cfg.MODE === "live") {
    document.body.classList.add("live-agent");
    const s = document.createElement("script");
    s.src = cfg.live.bootstrapJs;
    s.onload = function () {
      try {
        embeddedservice_bootstrap.settings.language = "en_US";
        embeddedservice_bootstrap.init(cfg.live.orgId, cfg.live.deploymentName, cfg.live.siteUrl, {
          scrt2URL: cfg.live.scrt2Url
        });
      } catch (e) { console.error("Embedded Messaging failed to load", e); }
    };
    document.body.appendChild(s);
    return;
  }

  // ---------------- Mock mode ----------------
  const $ = (id) => document.getElementById(id);
  const chat = $("chat"), body = $("chat-body"), suggest = $("chat-suggest");
  const form = $("chat-form"), input = $("chat-text");
  const delay = (ms) => new Promise((r) => setTimeout(r, ms));
  const D = cfg.agentDelay || 1100;

  const CASE_NO = "00031847";
  let step = 0, busy = false;

  function scroll() { body.scrollTop = body.scrollHeight; }

  function addMsg(kind, html, who) {
    const el = document.createElement("div");
    el.className = "msg " + kind;
    el.innerHTML = (who ? `<div class="who">${who}</div>` : "") + html;
    body.appendChild(el); scroll();
    return el;
  }

  async function typing(ms) {
    const t = document.createElement("div");
    t.className = "typing"; t.innerHTML = "<i></i><i></i><i></i>";
    body.appendChild(t); scroll();
    await delay(ms || D);
    t.remove();
  }

  async function actionCard(title, rows, ms) {
    const el = document.createElement("div");
    el.className = "action-card";
    el.innerHTML = `<div class="ac-title"><span class="spin"></span>${title}</div>` +
      rows.map(([k, v]) => `<div class="ac-row"><span>${k}</span><span>${v}</span></div>`).join("");
    el.querySelectorAll(".ac-row").forEach((r) => (r.style.opacity = 0));
    body.appendChild(el); scroll();
    const rs = el.querySelectorAll(".ac-row");
    for (const r of rs) { await delay((ms || 1400) / rs.length); r.style.opacity = 1; scroll(); }
    el.querySelector(".spin").outerHTML = '<span class="check">✓</span>';
  }

  function chips(list) {
    suggest.innerHTML = "";
    list.forEach((txt) => {
      const b = document.createElement("button");
      b.className = "chip"; b.type = "button"; b.textContent = txt;
      b.onclick = () => userSays(txt);
      suggest.appendChild(b);
    });
    input.placeholder = list[0] ? `e.g. “${list[0]}”` : "Type a message…";
  }

  function countUp(el, from, to, ms) {
    const start = performance.now();
    function tick(now) {
      const p = Math.min(1, (now - start) / ms);
      el.textContent = Math.round(from + (to - from) * p).toLocaleString("en-US");
      if (p < 1) requestAnimationFrame(tick);
    }
    requestAnimationFrame(tick);
  }

  // ---------------- The story ----------------
  const script = [
    // 0 — greeting (runs on open)
    async () => {
      await typing(700);
      addMsg("bot", "Hi Lauren 👋 I’m the Bonvoy Assistant. I can see you’re signed in as a <strong>Platinum Elite</strong> member. What can I help with today?", "Bonvoy Assistant");
      chips(["I'm missing points from my stay in Austin last week"]);
    },

    // 1 — lookup the Austin stay
    async () => {
      await typing(700);
      addMsg("bot", "Sorry about that — let me check your stay records right now.", "Bonvoy Assistant");
      await actionCard("Looking up stay records", [
        ["Guest profile", "Lauren Bailey · #284671903"],
        ["Property system (PMS)", "Folio JWA-558213 found"],
        ["Stay", "JW Marriott Austin · Sep 22–25"],
        ["Rate code", "Eligible (Corporate)"],
      ], 1800);
      await typing();
      addMsg("bot", "Found it. Your <strong>3 nights at JW Marriott Austin</strong> qualify, but the credit didn’t post because the reservation was under your company’s travel profile. Would you like me to add the nights and points to your account now?", "Bonvoy Assistant");
      chips(["Yes, please"]);
    },

    // 2 — credit the stay
    async () => {
      await typing(600);
      await actionCard("Crediting missing stay", [
        ["Qualifying nights", "+3"],
        ["Base points", "+5,630"],
        ["Platinum Elite bonus (50%)", "+2,820"],
        ["Total points", "+8,450"],
      ], 1600);
      // Update the page behind the chat
      const row = $("row-austin");
      row.classList.remove("missing"); row.classList.add("resolved");
      $("austin-nights").innerHTML = '3 <span class="pill pill-ok">Credited</span>';
      $("austin-pts").textContent = "+8,450";
      countUp($("pts-header"), 142380, 150830, 1200);
      countUp($("pts-body"), 142380, 150830, 1200);
      $("pts-body").classList.add("flash");
      $("nights-count").textContent = "50";
      $("nights-bar").style.width = (50 / 75 * 100).toFixed(1) + "%";
      await typing();
      addMsg("bot", "All set! <strong>3 nights and 8,450 points</strong> are now in your account, and you’re just 25 nights from Titanium Elite. I’ve emailed you a confirmation. Anything else?", "Bonvoy Assistant");
      chips(["Also my Ritz-Carlton Kyoto stay. I booked it on a travel site"]);
    },

    // 3 — Kyoto: needs a human → hand off with full context
    async () => {
      await typing(700);
      await actionCard("Checking Kyoto stay", [
        ["Property system (PMS)", "Stay found · Sep 12–14"],
        ["Booking channel", "Third-party travel site"],
        ["Policy check", "Needs rate review by the hotel"],
      ], 1500);
      await typing();
      addMsg("bot", "Stays booked through third-party sites usually need the hotel to confirm the rate, so I’ll connect you with a Guest Care specialist. I’ll pass along everything we’ve covered so you <strong>won’t have to repeat yourself</strong>.", "Bonvoy Assistant");
      await actionCard("Handing off to a specialist", [
        ["Case", CASE_NO + " · Missing Stay"],
        ["Conversation summary", "Attached"],
        ["Routing", "Platinum Elite Guest Care"],
      ], 1300);
      addMsg("system", "Connecting you with Tom, Guest Care Specialist…");
      chips(["Thanks!"]);
    },

    // 4 — Tom (the human associate) takes over
    async () => {
      const head = document.querySelector(".chat-head");
      head.classList.add("human");
      document.querySelector(".bot-ava").textContent = "T";
      $("chat-title").textContent = "Tom · Guest Care";
      $("chat-sub").textContent = "Marriott Bonvoy Platinum Elite Support";
      addMsg("system", "Tom joined the chat");
      await typing(1600);
      addMsg("human", "Hi Lauren, this is Tom. I can see our full conversation and your Kyoto booking. I’ve sent the confirmation to the hotel, and they’ll verify the rate within 24 hours. Your points will post automatically once they do. Thanks for being a Platinum Elite member!", "Tom · Guest Care");
      const row = $("row-kyoto");
      row.classList.remove("missing"); row.classList.add("pending");
      $("kyoto-nights").innerHTML = '<span class="pill pill-info">Under review</span>';
      $("kyoto-pts").innerHTML = '<span class="muted">Case ' + CASE_NO + "</span>";
      chips(["That was easy, thank you!"]);
    },

    // 5 — wrap
    async () => {
      await typing(1000);
      addMsg("human", "My pleasure. Enjoy your next stay! 🛎️", "Tom · Guest Care");
      addMsg("system", "Chat ended · Case " + CASE_NO + " · Transcript emailed to lauren.bailey@example.com");
      chips([]);
      input.placeholder = "Chat ended";
    },
  ];

  async function run(i) {
    if (!script[i] || busy) return;
    busy = true;
    try { await script[i](); } finally { busy = false; }
  }

  function userSays(text) {
    if (busy || step >= script.length - 1) return;
    addMsg("user", text.replace(/</g, "&lt;"), "Lauren");
    suggest.innerHTML = "";
    input.value = "";
    step += 1;
    run(step);
  }

  function openChat() {
    chat.classList.add("open");
    $("chat-launcher").style.display = "none";
    if (step === 0 && !body.children.length) run(0);
    setTimeout(() => input.focus(), 250);
  }

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    const t = input.value.trim() || (suggest.querySelector(".chip") || {}).textContent;
    if (t) userSays(t);
  });
  $("chat-launcher").onclick = openChat;
  $("open-chat-cta").onclick = openChat;
  document.querySelectorAll("[data-open-chat]").forEach((a) => (a.onclick = (e) => { e.preventDefault(); openChat(); }));
  $("nav-help").onclick = (e) => { e.preventDefault(); openChat(); };
  $("chat-close").onclick = () => { chat.classList.remove("open"); $("chat-launcher").style.display = "flex"; };
  $("chat-reset").onclick = () => location.reload();
  document.addEventListener("keydown", (e) => {
    if ((e.key === "r" || e.key === "R") && document.activeElement !== input) location.reload();
  });
})();
