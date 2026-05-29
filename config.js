// ALL editable content lives here. Rob edits only this file.
// Never put CSS rules, HTML structure, or JS logic in this file.
const DECK_CONFIG = {

  // ── GLOBAL ─────────────────────────────────────────────────────────────────
  meta: {
    client:   "JB Hi-Fi Business",
    partner:  "Salesforce",
    date:     "2026",
    audience: "JB Hi-Fi B2B Leadership Team",
    challenge: '"Learn our business and tell us how to get better."',
    logos: {
      client:  "https://www.jbhifi.business/Themes/BPDTHEME01/theme-client-updates/img/logos/logo.svg",
      partner: "https://upload.wikimedia.org/wikipedia/commons/thumb/f/f9/Salesforce.com_logo.svg/1280px-Salesforce.com_logo.svg.png"
    },
    password: "jbhifi2026"  // Change this to update the access password
  },

  // ── SLIDES ─────────────────────────────────────────────────────────────────
  slides: [

    // ─── S0: TITLE ───────────────────────────────────────────────────────────
    {
      id:       "s0",
      type:     "title",
      subtitle: "Executive Briefing — How to get better",
      metaItems: [
        { label: "Challenge", value: "“Learn our business &amp; tell us how to get better”" },
        { label: "Date",      value: "2026 · Executive Session" },
        { label: "Audience",  value: "JB Hi-Fi B2B Leadership Team" }
      ]
    },

    // ─── S0b: AGENDA ─────────────────────────────────────────────────────────
    {
      id:    "s0b",
      type:  "agenda",
      topbarLabel: "Agenda",
      kicker: "Today's session",
      title:  "What we'll <span class=\"hl\">cover</span>",
      slideN: "—",
      leftItems: [
        { title: "What we observed",            sub: "The end-to-end manual journey — findings from ridealongs across sales, service, marketing and leadership", accent: "var(--jb-green)", bg: "var(--off-white)" },
        { title: "The honest conversation",      sub: "You've outgrown your foundation — what that means and why it's a growth opportunity, not a problem",     accent: "var(--text-2)",  bg: "" },
        { title: "Three goals. One flywheel.",   sub: "How AI productivity, customer satisfaction and revenue growth reinforce each other on the path to $1B",   accent: "var(--jb-yellow)", bg: "" },
        { title: "Three horizons to $1B",        sub: "Recommendations across quick wins (0–90 days), tactical (3–9 months) and strategic (9–18 months)",       accent: "var(--black)",   bg: "" }
      ],
      rightItems: [
        { title: "Deeper dive",                     sub: "Tactical and strategic recommendations in detail — what each capability unlocks and why it matters",                                          accent: "var(--jb-green)",  bg: "" },
        { title: "Your turn — prioritise together", sub: "Interactive urgency vs business value exercise — place opportunities, identify game changers, set priority order",                            accent: "var(--jb-yellow)", bg: "rgba(255,236,14,0.04)" },
        { title: "North star &amp; next steps",     sub: "Vision statement, committed actions with named owners, and the follow-up brief Salesforce will deliver in 7 days",                          accent: "var(--jb-green)",  bg: "var(--off-white)" }
      ],
      sessionFormat: "2 hours total &nbsp;·&nbsp; First 60 min: findings &amp; recommendations &nbsp;·&nbsp; Final 40 min: prioritisation exercise &amp; commitments &nbsp;·&nbsp; Interactive throughout"
    },

    // ─── S1: COVER ───────────────────────────────────────────────────────────
    {
      id:       "s1",
      type:     "cover",
      topbarLabel: "Confidential · Executive Briefing · 2026",
      eyebrow:  "Executive Briefing · 2026",
      headline: "Learn your<br>business.<br><em>Get better.</em>",
      goals: [
        { title: "Revenue Growth",       sub: "Scale to $1 billion" },
        { title: "Customer Satisfaction", sub: "From reactive to proactive" },
        { title: "AI Productivity",       sub: "Give time back to your people" }
      ]
    },

    // ─── S2: FINDINGS ────────────────────────────────────────────────────────
    {
      id:    "s2",
      type:  "findings",
      topbarLabel: "What we observed",
      kicker: "Ridealong findings",
      title:  "The end-to-end <span class=\"hl\">manual</span> journey",
      slideN: "02",
      metrics: [
        { value: "595s",        label: "To handle one email service case",          source: "Observed · Service ridealong · pg.35" },
        { value: "4,500+",      label: "Manual reports maintained by finance",       source: "Observed · Reporting findings · pg.45" },
        { value: "$80K→$500K",  label: "Pipeline inflation from multi-option quotes", source: "Observed · BDM ridealong · pg.45" },
        { value: "~Never",      label: "GP approvals rejected — yet delay every deal", source: "Observed · Inside sales · pg.19" }
      ],
      painColumns: [
        {
          label:  "Sales &amp; quoting",
          colour: "#1A4A6E",
          items: [
            "Opportunity creation takes <span class=\"n\">5–10 min</span>",
            "SKU creation up to <span class=\"n\">24+ hrs</span>",
            "BDMs tracking accounts in <span class=\"n\">Excel</span>",
            "Forecasting described as <span class=\"n\">broken</span>",
            "Multi-option quotes inflate pipeline"
          ]
        },
        {
          label:  "Service &amp; cases",
          colour: "#014D01",
          items: [
            "<span class=\"n\">240s</span> copy-pasting per case",
            "6 systems to handle one order",
            "Identity verified manually via Excel",
            "Supplier calls for every delivery ETA",
            "Cherry-pick routing — not skills-based"
          ]
        },
        {
          label:  "Marketing",
          colour: "#6A5200",
          items: [
            "Two-step sign-up causing <span class=\"n\">drop-off</span>",
            "One-size-fits-all emails",
            "No marketing-to-sales linkage",
            "Manual EDM production",
            "Duplicate accounts from data conflicts"
          ]
        },
        {
          label:  "Leadership &amp; data",
          colour: "#3D1470",
          items: [
            "No BDM-specific dashboards",
            "Forecasting <span class=\"n\">distrusted</span> by leadership",
            "CRMA abandoned, RI pilot failed",
            "No pipeline health or velocity view",
            "$500M → $1B with no systemic support"
          ]
        }
      ]
    },

    // ─── S3: INFLECTION ──────────────────────────────────────────────────────
    {
      id:    "s3",
      type:  "inflection",
      topbarLabel: "The honest conversation",
      kicker: "The honest conversation",
      title:  "You've outgrown your <span class=\"hl\">foundation</span>",
      slideN: "03",
      quote: "You built a <strong>$500M B2B business</strong> on this platform. That growth has created complexity that is now a ceiling — not a failure. The question isn't whether to address it. It's <strong>how to accelerate toward $1B</strong> rather than interrupt the journey.",
      was: {
        label: "Where you are",
        items: [
          "Managed packages adding debt",
          "Heavy customisation blocking upgrades",
          "Data Cloud blocked by org complexity",
          "AgentForce limited by data silos",
          "CRMA &amp; RI pilots failed to land"
        ]
      },
      now: {
        label: "Where you're going",
        items: [
          "Clean org — built for scale",
          "Data Cloud unifying all customer data",
          "AgentForce automating manual work",
          "Trusted forecasting &amp; reporting",
          "Platform for a $1B business"
        ]
      },
      footnote: "The detailed platform migration path will be addressed in a separate technical session. Today is about the opportunity.",
      visual: {
        from:  "$500M",
        mid:   "Growth inflection point",
        to:    "$1B",
        label: "The opportunity ahead"
      }
    },

    // ─── S4: FLYWHEEL ────────────────────────────────────────────────────────
    {
      id:    "s4",
      type:  "flywheel",
      topbarLabel: "The narrative",
      kicker: "The narrative",
      title:  "Three goals. <span class=\"hl\">One flywheel.</span>",
      slideN: "04",
      steps: [
        {
          drawerId: "drawer-ai",
          title:    "AI Productivity — give time back to your people",
          desc:     "Eliminate the 595-second case workflows, spreadsheet pipelines, and approval loops that never reject. AgentForce handles the manual. Your people handle the human."
        },
        {
          drawerId: "drawer-csat",
          title:    "Customer Satisfaction — faster, smarter, more personal",
          desc:     "When reps aren't copy-pasting, they're present. When agents have full customer context instantly, every interaction feels effortless. Reactive becomes proactive."
        },
        {
          drawerId: "drawer-rev",
          title:    "Revenue Growth — scale to $1B with the same team",
          desc:     "A rep who spends less time on admin closes more. A quote in seconds wins the deal. A pipeline you trust drives better forecasting and faster growth."
        }
      ],
      cta: "<strong>Each step reinforces the next.</strong> This is the flywheel — not three separate initiatives. Every quick win feeds the cycle toward $1B.",
      diagram: {
        centerValue: "$1B",
        centerLabel: "Target",
        tagTop:    "AI Productivity",
        tagRight:  "Customer<br>Satisfaction",
        tagBottom: "Revenue Growth"
      }
    },

    // ─── S5: HORIZONS OVERVIEW ───────────────────────────────────────────────
    {
      id:    "s5",
      type:  "horizons",
      topbarLabel: "Recommendations",
      kicker: "Recommendations",
      title:  "Three horizons to <span class=\"hl\">$1B</span>",
      slideN: "05",
      columns: [
        {
          badge:     "Horizon 1 — Quick wins (0–90 days)",
          badgeClass:"hb1",
          colClass:  "rc1",
          title:     "Fix the friction — today",
          sub:       "Revenue &amp; Productivity",
          items: [
            "Simplify opportunity creation — screen flow, essential fields only",
            "Remove sub-8% GP approval — eliminates 1hr deal delays",
            "Resolve SCV audio &amp; login technical issues",
            "Skills-based case routing replacing cherry-pick",
            "BDM-specific dynamic dashboards with personal pipeline view",
            "Quote expiry automation — end manual individual emails"
          ]
        },
        {
          badge:     "Horizon 2 — Tactical (3–9 months)",
          badgeClass:"hb2",
          colClass:  "rc2",
          title:     "Automate &amp; connect",
          sub:       "CSAT &amp; Revenue",
          items: [
            "AgentForce quoting — natural language, business rules enforced",
            "Einstein Conversation Insights — auto-capture calls, update opps",
            "Service AI assist — Customer 360 on case open, ETA automated",
            "Marketing Cloud segmentation — behavioural, not broadcast",
            "Unified onboarding — single sign-up, data-driven branching",
            "Pipeline Intelligence — trusted forecasting replacing Excel"
          ]
        },
        {
          badge:     "Horizon 3 — Strategic (9–18 months)",
          badgeClass:"hb3",
          colClass:  "rc3",
          title:     "Platform for $1B",
          sub:       "Strategic transformation",
          items: [
            "Data Cloud — unified customer, product &amp; fulfilment data",
            "Agentic SDR — non-ICP leads handled end-to-end autonomously",
            "Agentic service — autonomous resolution for common cases",
            "Connected retail agent experience across all B2B channels",
            "Predictive revenue intelligence — deal scoring &amp; upsell triggers",
            "Clean org migration — platform built for scale"
          ]
        }
      ]
    },

    // ─── S6: HORIZONS DEEP (most complex — last) ─────────────────────────────
    {
      id:    "s6",
      type:  "horizons_deep",
      topbarLabel: "Deeper dive",
      kicker: "Deeper dive",
      title:  "All three <span class=\"hl\">horizons</span>",
      slideN: "06",
      columns: [
        {
          badge:     "Quick wins · 0–90 days",
          badgeClass:"hb1",
          items: [
            {
              drawerId: "dqw-opp",
              title:    "Simplify opportunity creation",
              desc:     "Screen flow capturing only essential fields — cuts opportunity creation from 5–10 min down to under 60 seconds.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dqw-gp",
              title:    "Remove GP approval bottleneck",
              desc:     "Sub-8% GP approvals are almost never rejected yet delay every deal by up to 1hr. Remove or auto-approve to reclaim that time instantly.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dqw-scv",
              title:    "Fix SCV technical issues",
              desc:     "Audio save failures, login dropouts and phone type unavailability are breaking rep workflows daily. Resolve these as immediate remediations.",
              tags: [{ label: "Productivity", cls: "rtag-b" }, { label: "CSAT", cls: "rtag-y" }]
            },
            {
              drawerId: "dqw-dash",
              title:    "BDM dynamic dashboards",
              desc:     "Replace group-level dashboards with personal pipeline views. Each BDM sees their own MTD, YTD, and opportunity health — no more Frankenstein reports.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dqw-route",
              title:    "Skills-based case routing",
              desc:     "Replace cherry-pick with intelligent routing based on agent skills and availability. Faster resolution, fairer workload distribution.",
              tags: [{ label: "CSAT", cls: "rtag-y" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dqw-quote",
              title:    "Quote expiry automation",
              desc:     "Automate expiry reminders and follow-ups. Ends the manual process where individual reps send emails one-by-one to chase expiring quotes.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Productivity", cls: "rtag-b" }]
            }
          ]
        },
        {
          badge:     "Tactical · 3–9 months",
          badgeClass:"hb2",
          items: [
            {
              drawerId: "dtac-quote",
              title:    "AgentForce quoting agent",
              desc:     "Reps describe a quote in natural language. The agent builds it, applies business rules, and presents for review — in seconds, not 5–10 minutes.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dtac-conv",
              title:    "Conversation Intelligence",
              desc:     "Every call transcribed, summarised and written back to the opportunity. Next steps auto-populated. Leadership gets coaching signals without manual reporting.",
              tags: [{ label: "Productivity", cls: "rtag-b" }, { label: "Revenue", cls: "rtag-g" }]
            },
            {
              drawerId: "dtac-service",
              title:    "Service AI assist — Customer 360",
              desc:     "When a case opens, an internal agent retrieves customer identity, order history and delivery ETAs from integrated systems — eliminating the 595-second journey.",
              tags: [{ label: "CSAT", cls: "rtag-y" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dtac-mktg",
              title:    "Behavioural marketing segmentation",
              desc:     "Replace broadcast with data-driven journeys triggered by purchase behaviour and engagement signals. Pipeline contribution measurable for the first time.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "CSAT", cls: "rtag-y" }]
            },
            {
              drawerId: "dtac-onboard",
              title:    "Unified onboarding journey",
              desc:     "Replace the two-step drop-off prone sign-up with a single flow using data-driven branching. Onboarding done by the platform, not the team manually.",
              tags: [{ label: "CSAT", cls: "rtag-y" }, { label: "Revenue", cls: "rtag-g" }]
            },
            {
              drawerId: "dtac-pipe",
              title:    "Pipeline Intelligence",
              desc:     "Trusted forecasting replacing Excel. Leadership gets a pipeline they can actually believe — with deal health scores and velocity signals built in.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Productivity", cls: "rtag-b" }]
            }
          ]
        },
        {
          badge:     "Strategic · 9–18 months",
          badgeClass:"hb3",
          items: [
            {
              drawerId: "dstr-dc",
              title:    "Data Cloud — the unified foundation",
              desc:     "Unify customer data from Salesforce, Excel, the product app, fulfilment systems and all other sources into a single Customer 360. The foundation that makes every AI capability more accurate.",
              tags: [{ label: "AI Foundation", cls: "rtag-d" }, { label: "Revenue", cls: "rtag-g" }]
            },
            {
              drawerId: "dstr-sdr",
              title:    "Agentic SDR — autonomous lead handling",
              desc:     "Non-ICP leads qualified, nurtured and handed off by an AI agent. Your BDMs focus on deals that matter. The agent manages everything below the threshold.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "AgentForce", cls: "rtag-d" }]
            },
            {
              drawerId: "dstr-rev",
              title:    "Predictive revenue intelligence",
              desc:     "Deal scoring, churn risk signals, upsell propensity and next best action — in the rep's workflow. A pipeline leadership can actually trust, built on unified data.",
              tags: [{ label: "Revenue", cls: "rtag-g" }, { label: "Data Cloud", cls: "rtag-d" }]
            },
            {
              drawerId: "dstr-agentic",
              title:    "Agentic service — autonomous resolution",
              desc:     "Common case types resolved end-to-end by AI agents — no human in the loop for routine requests. Reps handle escalations and relationships.",
              tags: [{ label: "CSAT", cls: "rtag-y" }, { label: "Productivity", cls: "rtag-b" }]
            },
            {
              drawerId: "dstr-cleanorg",
              title:    "Clean org — the platform for $1B",
              desc:     "A structured migration removes managed package debt, unlocks full Data Cloud and AgentForce capability, and sets the technical foundation for doubling the business.",
              tags: [{ label: "Strategic", cls: "rtag-d" }, { label: "$1B platform", cls: "rtag-y" }]
            }
          ]
        }
      ]
    },

    // ─── S7: MATRIX ──────────────────────────────────────────────────────────
    {
      id:    "s7",
      type:  "matrix",
      topbarLabel: "Prioritise together · 1 of 2",
      kicker: "Your turn — prioritise together",
      title:  "Urgency vs <span class=\"hl\">business value</span>",
      slideN: "07",
      axisY: "← Low urgency · High urgency →",
      axisX: "← Low value · High value →",
      quadrants: {
        tl: { label: "Quick fixes",     sub: "High urgency · Low value" },
        tr: { label: "🏆 Game changers", sub: "High urgency · High value" },
        bl: { label: "Reassess",         sub: "Low urgency · Low value" },
        br: { label: "Strategic future", sub: "Low urgency · High value" }
      },
      backlog: [
        { id: "op1",  label: "Fix opportunity form",              q: "s" },
        { id: "op2",  label: "Remove GP approval bottleneck",     q: "s" },
        { id: "op3",  label: "Fix SCV audio &amp; login issues",  q: "v" },
        { id: "op4",  label: "BDM dynamic dashboards",            q: "s" },
        { id: "op5",  label: "AgentForce quoting agent",          q: "s" },
        { id: "op6",  label: "Service AI assist — Customer 360",  q: "v" },
        { id: "op7",  label: "Conversation Intelligence",         q: "s" },
        { id: "op8",  label: "Data Cloud — unified foundation",   q: "d" },
        { id: "op9",  label: "Predictive revenue intelligence",   q: "d" },
        { id: "op10", label: "Behavioural marketing",             q: "m" },
        { id: "op11", label: "Skills-based case routing",         q: "v" },
        { id: "op12", label: "Quote expiry automation",           q: "s" },
        { id: "op13", label: "Pipeline Intelligence",             q: "d" },
        { id: "op14", label: "Agentic SDR",                       q: "d" },
        { id: "op15", label: "Unified onboarding journey",        q: "m" }
      ]
    },

    // ─── S7b: PRIORITIES ─────────────────────────────────────────────────────
    {
      id:    "s7b",
      type:  "priorities",
      topbarLabel: "Prioritise together · 2 of 2",
      kicker: "Step 2 — order your game changers",
      title:  "What matters <span class=\"hl\">most?</span>",
      slideN: "7b"
    },

    // ─── S8: NORTH STAR ──────────────────────────────────────────────────────
    {
      id:    "s8",
      type:  "north_star",
      topbarLabel: "Where we go from here",
      kicker: "Where we go from here",
      title:  "North star &amp; <span class=\"hl\">next steps</span>",
      slideN: "08",
      vision: "A JB Hi-Fi commercial organisation where <strong>every rep, marketer and service agent</strong> is equipped with the right insight at the right moment &mdash; powered by unified data and autonomous AI &mdash; so the team that built a $500M business <strong>can build a $1B one</strong>.",
      actions: [
        {
          title: "Confirm top priorities from today",
          sub:   "Named owners, clear next action from the prioritisation exercise",
          owner: "Both",
          ownerClass: "own-b"
        },
        {
          title: "Salesforce follow-up brief within 7 days",
          sub:   "Detailed recommendations with Horizon 1 action plan",
          owner: "Salesforce",
          ownerClass: "own-sf"
        },
        {
          title: "Technical platform session — separate booking",
          sub:   "Clean org path, Data Cloud architecture, timeline &amp; investment",
          owner: "Salesforce",
          ownerClass: "own-sf"
        },
        {
          title: "Horizon 1 delivery begins",
          sub:   "First items scoped and scheduled — results visible in 90 days",
          owner: "Both",
          ownerClass: "own-b"
        }
      ],
      closing: {
        label:    "The closing question",
        question: "“What would make this feel like a genuinely different kind of partnership?”",
        sub:      "We know the relationship hasn't always been at its best. We're asking you to define what better looks like — and committing to deliver it."
      },
      commit: "<strong>Salesforce commits:</strong> A written follow-up brief within 7 days covering your confirmed priorities, Horizon 1 action plan, and a proposed agenda for the technical platform session."
    },

    // ─── S9impl: IMPLEMENTATION PLAN (placeholder) ───────────────────────────
    {
      id:    "s9impl",
      type:  "placeholder",
      topbarLabel: "Implementation plan",
      kicker: "Roadmap",
      title:  "Implementation <span class=\"hl\">plan</span>",
      slideN: "09",
      banner: {
        eyebrow: "Coming soon",
        heading: "Implementation plan",
        text: "Detailed roadmap to be confirmed following today's prioritisation exercise.<br>Salesforce will include this in the follow-up brief within 7 days."
      },
      columns: [
        { label: "Horizon 1 · 0–90 days", accent: "var(--jb-green)", accentColor: "var(--jb-green)", title: "Quick wins &amp; remediation", sub: "To be populated following prioritisation exercise", tbc: "Workstream detail TBC" },
        { label: "Horizon 2 · 3–9 months", accent: "var(--text-2)", accentColor: "var(--text-2)",   title: "Automate &amp; connect",       sub: "To be populated following prioritisation exercise", tbc: "Workstream detail TBC" },
        { label: "Horizon 3 · 9–18 months", accent: "var(--black)", accentColor: "var(--black)",    title: "Platform for $1B",             sub: "To be populated following prioritisation exercise", tbc: "Workstream detail TBC" }
      ],
      note: "This slide will be fully populated in the Salesforce follow-up brief · Priorities confirmed in today's session will drive the sequencing"
    },

    // ─── S10: THANK YOU ──────────────────────────────────────────────────────
    {
      id:    "s10",
      type:  "thankyou",
      topbarLabel: "JB Hi-Fi Business × Salesforce · 2026",
      heading: "Thank you",
      subtext: "Together toward $1B",
      footer:  "Follow-up brief within 7 days &nbsp;·&nbsp; JB Hi-Fi B2B Executive · 2026 &nbsp;·&nbsp; Confidential"
    }

  ],

  // ── DRAWERS ────────────────────────────────────────────────────────────────
  drawers: {

    // ─── FLYWHEEL DRAWERS ─────────────────────────────────────────────────────

    "drawer-ai": {
      kicker: "Step 1 of 3 — The flywheel",
      title:  "AI Productivity",
      image:  {
        src: "./assets/images/scaling-ai.png",
        alt: "Scaling AI — Revenue Growth vs Cost of Teams"
      },
      sections: [
        {
          label: "The opportunity",
          content: [
            { type: "paragraph", text: "Right now, your commercial teams spend a significant portion of their day on work that should be automated — copy-pasting customer details, manually dialling suppliers, building quotes field by field, and updating records after every call." },
            { type: "paragraph", text: "<strong>AgentForce changes this.</strong> AI agents handle the routine, contextual, and repetitive — giving your people back the time to do the work only humans can do." },
            { type: "paragraph", text: "As your business moves from <strong>Teams</strong> to <strong>Human + Agent Teams</strong>, revenue growth continues to accelerate while the cost of scaling flattens. The gap between the two curves is your efficiency gain." }
          ]
        },
        {
          label: "What we observed at JB Hi-Fi",
          content: [
            {
              type: "stat-row",
              stats: [
                { value: "595s",     label: "To handle one email service case across 6 systems" },
                { value: "240s",     label: "Copy-pasting per case — avoidable with automation" },
                { value: "~Never",   label: "GP approvals rejected — yet every deal waits up to 1hr" },
                { value: "5–10 min", label: "To create a single opportunity" }
              ]
            }
          ]
        },
        {
          label: "What AgentForce can do",
          content: [
            {
              type: "bullet-list",
              items: [
                "Autonomous case resolution — customer identity, history &amp; ETAs on case open",
                "Quoting agent — builds and validates quotes from natural language",
                "Approval automation — auto-approve low-risk thresholds, eliminating 1hr delays",
                "Call transcription + opportunity update — zero manual logging",
                "Agentic SDR — non-ICP leads handled end-to-end without rep involvement"
              ]
            }
          ]
        }
      ]
    },

    "drawer-csat": {
      kicker: "Step 2 of 3 — The flywheel",
      title:  "Customer Satisfaction",
      imageStyle: "flex-direction:column;gap:20px;align-items:flex-start;padding:40px;",
      imageHtml: `
        <div style="width:100%;display:flex;flex-direction:column;gap:12px;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:8px;">The shift</div>
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:16px;font-weight:700;color:var(--pain-red);margin-bottom:8px;">Reactive</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Customer calls.<br>Rep searches 6 systems.<br>Customer waits.<br>Data is wrong.</div>
            </div>
            <div style="font-size:28px;color:var(--rule);">→</div>
            <div style="padding:20px;background:var(--white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:16px;font-weight:700;color:var(--jb-green);margin-bottom:8px;">Proactive</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Customer contacts.<br>360 view surfaces instantly.<br>Agent resolves in seconds.<br>Rep focuses on relationship.</div>
            </div>
          </div>
          <div style="margin-top:24px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--jb-yellow);">
              <div style="font-family:'Comfortaa',sans-serif;font-size:22px;font-weight:700;color:var(--black);margin-bottom:4px;">6</div>
              <div style="font-size:11px;color:var(--text-2);">Systems toggled to handle one case today</div>
            </div>
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--jb-yellow);">
              <div style="font-family:'Comfortaa',sans-serif;font-size:22px;font-weight:700;color:var(--black);margin-bottom:4px;">1</div>
              <div style="font-size:11px;color:var(--text-2);">Unified view with Salesforce Service AI assist</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The shift: reactive to proactive",
          content: [
            { type: "paragraph", text: "When your people aren't copy-pasting between systems, they're present. When agents surface full customer context the moment a call arrives, every interaction feels effortless — not like the customer is starting from scratch every time." },
            { type: "paragraph", text: "<strong>The goal is to move from reactive service to proactive, personalised engagement</strong> — knowing what a customer needs before they ask, and delivering it without friction." }
          ]
        },
        {
          label: "What we observed",
          content: [
            {
              type: "bullet-list",
              items: [
                "Reps toggle between Salesforce, Excel, webform, product app and fulfilment app for one case",
                "Customer identity verified manually via Excel — no unified view on case open",
                "Delivery ETAs require calling suppliers directly — the customer waits",
                "One-size-fits-all marketing emails — no behavioural segmentation",
                "Two-step sign-up causing measurable drop-off at onboarding"
              ]
            }
          ]
        },
        {
          label: "The future state",
          content: [
            {
              type: "bullet-list",
              items: [
                "Customer 360 on case open — identity, history, orders, all in one place",
                "Real-time ETA lookups from integrated supplier and fulfilment systems",
                "Behavioural marketing — journeys triggered by what customers actually do",
                "Unified onboarding — single sign-up with data-driven journey branching",
                "Next best action surfaced in rep workflow during every interaction"
              ]
            }
          ]
        }
      ]
    },

    "drawer-rev": {
      kicker: "Step 3 of 3 — The flywheel",
      title:  "Revenue Growth",
      imageStyle: "flex-direction:column;gap:24px;align-items:flex-start;padding:40px;",
      imageHtml: `
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:4px;">The target</div>
        <div style="width:100%;display:flex;flex-direction:column;gap:12px;">
          <div style="display:flex;align-items:center;gap:16px;">
            <div style="flex:1;padding:20px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);text-align:center;opacity:0.5;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:48px;font-weight:700;color:var(--text-2);line-height:1;">$500M</div>
              <div style="font-size:12px;color:var(--text-3);margin-top:6px;">Current platform ceiling</div>
            </div>
            <div style="font-size:32px;color:var(--jb-yellow);">→</div>
            <div style="flex:1;padding:20px;background:var(--off-white);border:2px solid var(--jb-yellow);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:48px;font-weight:700;color:var(--black);line-height:1;">$1B</div>
              <div style="font-size:12px;color:var(--text-2);margin-top:6px;font-weight:600;">The opportunity ahead</div>
            </div>
          </div>
        </div>
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-top:8px;">Revenue leaks we found</div>
        <div style="display:grid;grid-template-columns:1fr 1fr;gap:10px;width:100%;">
          <div style="padding:16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--pain-red);">
            <div style="font-family:'Comfortaa',sans-serif;font-size:20px;font-weight:700;color:var(--black);margin-bottom:6px;">$80K→$500K</div>
            <div style="font-size:11px;color:var(--text-2);line-height:1.4;">Pipeline inflation from multi-option quoting — forecasts can't be trusted</div>
          </div>
          <div style="padding:16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--pain-red);">
            <div style="font-family:'Comfortaa',sans-serif;font-size:20px;font-weight:700;color:var(--black);margin-bottom:6px;">4,500+</div>
            <div style="font-size:11px;color:var(--text-2);line-height:1.4;">Manual reports maintained by finance — decision-making delayed by guesswork</div>
          </div>
          <div style="padding:16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--jb-yellow);">
            <div style="font-family:'Comfortaa',sans-serif;font-size:20px;font-weight:700;color:var(--black);margin-bottom:6px;">Broken</div>
            <div style="font-size:11px;color:var(--text-2);line-height:1.4;">Forecasting done entirely in Excel — leadership can't trust the numbers</div>
          </div>
          <div style="padding:16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--jb-yellow);">
            <div style="font-family:'Comfortaa',sans-serif;font-size:20px;font-weight:700;color:var(--black);margin-bottom:6px;">24+ hrs</div>
            <div style="font-size:11px;color:var(--text-2);line-height:1.4;">New SKU creation delays — deals lost while waiting for products to be listed</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The $1B target",
          content: [
            { type: "paragraph", text: "JB Hi-Fi Business is targeting <strong>$1B in revenue — doubling from $500M today</strong>. That kind of growth doesn't come from doing the same things faster. It comes from fundamentally changing how the commercial organisation operates." },
            { type: "paragraph", text: "When AI productivity frees up rep time and customer satisfaction improves retention and upsell rates, the revenue impact compounds." }
          ]
        },
        {
          label: "How the platform unlocks $1B",
          content: [
            {
              type: "bullet-list",
              items: [
                "Trusted pipeline intelligence — accurate forecasting replaces the broken Excel model",
                "AgentForce quoting — deals closed faster when quotes take seconds not 5–10 minutes",
                "Predictive revenue intelligence — deal scoring, churn signals and upsell triggers in the rep workflow",
                "Agentic SDR — non-ICP leads handled autonomously, BDMs focused on high-value opportunities",
                "Data Cloud — unified customer data enabling cross-sell and personalisation at scale"
              ]
            }
          ]
        }
      ]
    },

    // ─── QUICK WIN DRAWERS ────────────────────────────────────────────────────

    "dqw-opp": {
      kicker: "Quick win · 0–90 days",
      title:  "Simplify opportunity creation",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;">Before vs after</div>
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);">
              <div style="font-family:'Comfortaa',sans-serif;font-size:32px;font-weight:700;color:var(--pain-red);margin-bottom:8px;">5–10 min</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Creating a new opportunity today — dozens of mandatory fields, slow form, high friction</div>
            </div>
            <div style="font-size:28px;color:var(--jb-yellow);">→</div>
            <div style="padding:20px;background:var(--white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-family:'Comfortaa',sans-serif;font-size:32px;font-weight:700;color:var(--jb-green);margin-bottom:8px;">&lt; 60s</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Guided screen flow capturing only what matters — rep focused on the customer, not the form</div>
            </div>
          </div>
          <div style="margin-top:24px;padding:16px 20px;background:var(--off-white);border-radius:var(--radius);border-left:3px solid var(--jb-yellow);">
            <div style="font-size:13px;color:var(--text-2);line-height:1.7;">Observed directly during ridealong: the current opportunity form has too many mandatory fields and is the primary source of friction reported by BDMs and inside sales reps.</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The fix",
          content: [
            { type: "paragraph", text: "Replace the current opportunity form with a Salesforce Screen Flow — a guided, step-by-step process that captures only the fields essential for creation. Remaining fields can be populated post-creation." },
            { type: "paragraph", text: "<strong>This is a configuration change, not a development project.</strong> It can be scoped, built, and deployed within weeks." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Reclaimed selling time for every BDM and inside sales rep",
                "Reduces drop-off where reps avoid creating opportunities due to form friction",
                "Cleaner data quality — only relevant fields captured at creation",
                "Foundation for future AI-assisted opportunity creation"
              ]
            }
          ]
        }
      ]
    },

    "dqw-gp": {
      kicker: "Quick win · 0–90 days",
      title:  "Remove GP approval bottleneck",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;">The paradox</div>
          <div style="padding:32px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);text-align:center;">
            <div style="font-family:'Comfortaa',sans-serif;font-size:48px;font-weight:700;color:var(--black);margin-bottom:8px;">~Never</div>
            <div style="font-size:14px;color:var(--text-2);margin-bottom:24px;">GP approvals below 8% are rejected</div>
            <div style="font-size:32px;color:var(--pain-red);margin-bottom:8px;">Yet every deal waits</div>
            <div style="font-size:14px;color:var(--text-2);">Up to 1 hour for approval — sometimes requiring Teams follow-ups</div>
          </div>
          <div style="margin-top:20px;display:grid;grid-template-columns:1fr 1fr;gap:12px;">
            <div style="padding:16px;background:var(--off-white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--pain-red);">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--pain-red);margin-bottom:6px;">Current</div>
              <div style="font-size:13px;color:var(--text-2);line-height:1.5;">Manual approval required. Deal waits. Rep chases via Teams. Customer loses confidence.</div>
            </div>
            <div style="padding:16px;background:var(--off-white);border:1px solid var(--jb-green);border-radius:var(--radius);border-bottom:2px solid var(--jb-green);">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--jb-green);margin-bottom:6px;">Recommended</div>
              <div style="font-size:13px;color:var(--text-2);line-height:1.5;">Auto-approve sub-8% GP. Flag for review only when truly exceptional. Deals move instantly.</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The finding",
          content: [
            { type: "paragraph", text: "During ridealongs, the GP approval process was identified as one of the most frustrating bottlenecks for the inside sales team. Quotes with gross profit below 8% trigger an approval workflow — but this threshold is almost <strong>never rejected</strong>." },
            { type: "paragraph", text: "The approval adds up to an hour of delay on every affected deal, often requiring the rep to manually follow up via Teams to chase a decision." }
          ]
        },
        {
          label: "Options",
          content: [
            {
              type: "bullet-list",
              items: [
                "Auto-approve all sub-8% GP quotes (remove the gate entirely)",
                "Raise the threshold — only require approval below a lower floor (e.g. 4%)",
                "Deploy an Approval Agent that processes in seconds rather than hours"
              ]
            }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Immediate deal velocity improvement — no configuration complexity",
                "Rep time reclaimed from chasing approvals",
                "Customer experience improvement — faster quote responses"
              ]
            }
          ]
        }
      ]
    },

    "dqw-scv": {
      kicker: "Quick win · 0–90 days",
      title:  "Fix SCV technical issues",
      imageStyle: "padding:40px;flex-direction:column;gap:16px;align-items:flex-start;",
      imageHtml: `
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:4px;">Issues observed</div>
        <div style="width:100%;display:flex;flex-direction:column;gap:10px;">
          <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--pain-red);border-radius:var(--radius);">
            <div style="font-size:13px;font-weight:600;color:var(--black);margin-bottom:4px;">Audio settings not saving</div>
            <div style="font-size:12px;color:var(--text-2);line-height:1.45;">Save button on audio settings does not consistently activate. Default audio output inconsistent between home and office environments.</div>
          </div>
          <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--pain-red);border-radius:var(--radius);">
            <div style="font-size:13px;font-weight:600;color:var(--black);margin-bottom:4px;">Login dropouts during orders</div>
            <div style="font-size:12px;color:var(--text-2);line-height:1.45;">Users get logged out of SCV when processing orders or quotes — potentially when multiple browser tabs open with Salesforce.</div>
          </div>
          <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--pain-red);border-radius:var(--radius);">
            <div style="font-size:13px;font-weight:600;color:var(--black);margin-bottom:4px;">Phone types unavailable</div>
            <div style="font-size:12px;color:var(--text-2);line-height:1.45;">Soft and desk phone types listed as unavailable. Long authentication times — agents must log into the phone system a second time.</div>
          </div>
          <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--pain-red);border-radius:var(--radius);">
            <div style="font-size:13px;font-weight:600;color:var(--black);margin-bottom:4px;">Email word limit errors</div>
            <div style="font-size:12px;color:var(--text-2);line-height:1.45;">Intermittent word limit errors when copy-pasting content into emails from case feed.</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "Why this matters",
          content: [
            { type: "paragraph", text: "These are not cosmetic issues. Each one interrupts a rep's workflow during a live customer interaction — degrading the customer experience and frustrating the team daily." },
            { type: "paragraph", text: "<strong>These should be the first items scoped and resolved</strong> — they are remediations of existing investment, not new capability." }
          ]
        },
        {
          label: "Recommended actions",
          content: [
            {
              type: "bullet-list",
              items: [
                "Scope remediation services with Salesforce support — partner to diagnose and resolve",
                "Investigate multi-tab session management as root cause of login dropouts",
                "Consider moving Omni component from footer to sidebar",
                "Resolve soft/desk phone availability configuration",
                "Address long authentication times"
              ]
            }
          ]
        }
      ]
    },

    "dqw-dash": {
      kicker: "Quick win · 0–90 days",
      title:  "BDM dynamic dashboards",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;">The problem with group-level dashboards</div>
          <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);margin-bottom:16px;">
            <div style="font-size:13px;color:var(--text-2);line-height:1.7;"><strong style="color:var(--black);">What exists today:</strong> Dashboards sit at the group level. BDMs cannot filter by their own Team Role. They can't see MTD and YTD combined. They Frankenstein reports together to understand their own pipeline.</div>
          </div>
          <div style="padding:20px;background:var(--off-white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
            <div style="font-size:13px;color:var(--text-2);line-height:1.7;"><strong style="color:var(--black);">What it should be:</strong> Each BDM opens Salesforce and sees their own business — MTD vs YTD vs target, pipeline health, deals at risk, top opportunities closing this week. No report building required.</div>
          </div>
          <div style="margin-top:20px;padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);border-bottom:2px solid var(--jb-yellow);">
            <div style="font-family:'Comfortaa',sans-serif;font-size:22px;font-weight:700;color:var(--black);margin-bottom:4px;">4,500+</div>
            <div style="font-size:12px;color:var(--text-2);">Manual reports maintained by the finance team today — a symptom of dashboards that don't serve the people who need them</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The fix",
          content: [
            { type: "paragraph", text: "Build dynamic Salesforce dashboards using the \"running user\" feature — each BDM sees their own data without a separate dashboard per person. One dashboard template, personalised automatically." },
            { type: "paragraph", text: "<strong>This is a reporting configuration task</strong>, not a complex build. Can be delivered as part of Horizon 1." }
          ]
        },
        {
          label: "What to include",
          content: [
            {
              type: "bullet-list",
              items: [
                "MTD and YTD sales vs target — individual view",
                "Open pipeline by stage with deal health indicators",
                "Top opportunities closing this month",
                "Activity summary — calls, meetings, emails this week",
                "Opportunities at risk (no activity in X days)"
              ]
            }
          ]
        }
      ]
    },

    "dqw-route": {
      kicker: "Quick win · 0–90 days",
      title:  "Skills-based case routing",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:start;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--pain-red);margin-bottom:10px;">Cherry-pick today</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.6;">Agents manually select from the queue. Experienced agents take easy cases. New agents avoid complex ones. Load is uneven. Resolution times vary wildly.</div>
            </div>
            <div style="padding-top:40px;font-size:24px;color:var(--rule);">→</div>
            <div style="padding:20px;background:var(--white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;letter-spacing:0.12em;text-transform:uppercase;color:var(--jb-green);margin-bottom:10px;">Skills-based tomorrow</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.6;">Omni-Channel routes cases to the right agent based on skills, availability and capacity. Fair, fast, consistent.</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The fix",
          content: [
            { type: "paragraph", text: "Enable Salesforce Omni-Channel skills-based routing — cases are automatically assigned to the best-available agent based on defined skill sets and current workload." },
            { type: "paragraph", text: "The team was noted as researching moving to skills-based routing. This is the right direction and can be configured within existing Salesforce Service Cloud." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Faster case resolution — right case to right agent first time",
                "Fairer workload distribution across the team",
                "Better training outcomes — agents build expertise in their skill area",
                "Leadership visibility of queue health and agent capacity"
              ]
            }
          ]
        }
      ]
    },

    "dqw-quote": {
      kicker: "Quick win · 0–90 days",
      title:  "Quote expiry automation",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="padding:28px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);text-align:center;margin-bottom:20px;">
            <div style="font-size:14px;color:var(--text-2);margin-bottom:16px;">Current process</div>
            <div style="display:flex;flex-direction:column;gap:10px;text-align:left;">
              <div style="padding:10px 14px;background:var(--off-white);border-radius:4px;font-size:12px;color:var(--text-2);">1. Rep checks quote list manually for expiring quotes</div>
              <div style="padding:10px 14px;background:var(--off-white);border-radius:4px;font-size:12px;color:var(--text-2);">2. Rep writes individual email to each customer</div>
              <div style="padding:10px 14px;background:var(--off-white);border-radius:4px;font-size:12px;color:var(--text-2);">3. Rep updates Salesforce manually after each send</div>
              <div style="padding:10px 14px;background:rgba(200,0,26,0.06);border:1px solid rgba(200,0,26,0.2);border-radius:4px;font-size:12px;color:var(--pain-red);font-weight:600;">Time lost: repeated for every expiring quote, every day</div>
            </div>
          </div>
          <div style="padding:20px;background:var(--off-white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
            <div style="font-size:13px;color:var(--text-2);line-height:1.6;"><strong style="color:var(--jb-green);">Automated:</strong> Salesforce triggers a notification email X days before expiry. Rep sees a task to follow up. Activity is logged automatically. Zero manual admin.</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The fix",
          content: [
            { type: "paragraph", text: "Build a simple Salesforce Flow triggered when a quote's expiry date is approaching. The flow sends a templated notification email and creates a follow-up task for the rep — all automatically." },
            { type: "paragraph", text: "<strong>This is a low-effort, high-impact automation</strong> — a standard Salesforce Flow pattern that can be built and deployed quickly." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Eliminates daily manual email process for every rep",
                "No quotes fall through the cracks due to missed follow-up",
                "Activity automatically logged — no manual record updates",
                "Foundation for more sophisticated quote lifecycle automation"
              ]
            }
          ]
        }
      ]
    },

    // ─── TACTICAL DRAWERS ─────────────────────────────────────────────────────

    "dtac-quote": {
      kicker: "Tactical · 3–9 months",
      title:  "AgentForce quoting agent",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:36px;font-weight:700;color:var(--pain-red);margin-bottom:8px;">5–10 min</div>
              <div style="font-size:12px;color:var(--text-2);">Manual quoting today</div>
            </div>
            <div style="font-size:28px;color:var(--jb-yellow);">→</div>
            <div style="padding:20px;background:var(--white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:36px;font-weight:700;color:var(--jb-green);margin-bottom:8px;">Seconds</div>
              <div style="font-size:12px;color:var(--text-2);">AgentForce quoting</div>
            </div>
          </div>
          <div style="margin-top:20px;padding:20px;background:var(--off-white);border-radius:var(--radius);border-left:3px solid var(--jb-yellow);">
            <div style="font-size:13px;color:var(--text-2);line-height:1.7;">"Create a quote for Compass Group — HP laptops, 50 units, standard pricing, delivery to Melbourne CBD." The agent builds it, checks the product catalog, applies pricing rules, and presents it for rep review.</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "AgentForce Quoting allows reps to describe a quote in natural language. The agent autonomously builds it using unified transaction data, your product catalog, approved pricing rules, and business logic." },
            { type: "paragraph", text: "Errors, compliance and pricing approval checks happen automatically — the rep reviews and approves, not builds from scratch." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Dramatically reduces time per quote — reps selling, not building",
                "Fewer errors — business rules enforced by the agent, not manual entry",
                "Faster deal cycles — customers get quotes sooner",
                "Scales without adding headcount as quote volumes grow toward $1B"
              ]
            }
          ]
        }
      ]
    },

    "dtac-conv": {
      kicker: "Tactical · 3–9 months",
      title:  "Conversation Intelligence",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;">What happens after every call today vs tomorrow</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--pain-red);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;color:var(--pain-red);margin-bottom:6px;">TODAY</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Rep manually summarises the call. Logs notes in Salesforce. Updates next steps. Sets follow-up task. Often done hours later — or not at all.</div>
            </div>
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--jb-green);border-left:3px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;color:var(--jb-green);margin-bottom:6px;">WITH CONVERSATION INTELLIGENCE</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Call automatically transcribed and summarised. Key signals (objections, next steps, risks) extracted. Opportunity record updated. Follow-up task created. Zero manual effort.</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "Einstein Conversation Insights captures every call, generates an AI summary, extracts deal signals, and writes them back to the Salesforce opportunity — automatically." },
            { type: "paragraph", text: "Sales Coach layer gives leaders visibility into call quality and coaching opportunities without sitting on calls." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Eliminates post-call admin — reps move immediately to the next conversation",
                "Pipeline data is always current — no lag between call and Salesforce",
                "Leadership visibility into deal health based on actual conversations",
                "Coaching insights at scale without manager time investment"
              ]
            }
          ]
        }
      ]
    },

    "dtac-service": {
      kicker: "Tactical · 3–9 months",
      title:  "Service AI assist — Customer 360",
      imageStyle: "padding:40px;flex-direction:column;gap:16px;align-items:flex-start;",
      imageHtml: `
        <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:4px;">595 seconds → under 60</div>
        <div style="width:100%;display:flex;flex-direction:column;gap:8px;">
          <div style="padding:12px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:var(--radius);font-size:12px;color:var(--text-2);"><strong style="color:var(--pain-red);">Today:</strong> Outlook → webform → Excel → product app → fulfilment app → Salesforce → supplier call. 595 seconds for one case.</div>
          <div style="padding:12px 14px;background:rgba(2,135,3,0.05);border:1px solid rgba(2,135,3,0.2);border-radius:var(--radius);font-size:12px;color:var(--text-2);"><strong style="color:var(--jb-green);">With AI assist:</strong> Case opens. Agent auto-retrieves customer 360, order history, delivery ETAs. Rep sees everything they need. No system-switching required.</div>
          <div style="margin-top:8px;display:grid;grid-template-columns:1fr 1fr;gap:10px;">
            <div style="padding:14px;background:var(--white);border:1px solid var(--rule);border-bottom:2px solid var(--jb-yellow);border-radius:var(--radius);">
              <div style="font-family:'Comfortaa',sans-serif;font-size:22px;font-weight:700;color:var(--black);margin-bottom:4px;">6</div>
              <div style="font-size:11px;color:var(--text-2);">Systems accessed for one case today</div>
            </div>
            <div style="padding:14px;background:var(--white);border:1px solid var(--jb-green);border-bottom:2px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-family:'Comfortaa',sans-serif;font-size:22px;font-weight:700;color:var(--jb-green);margin-bottom:4px;">1</div>
              <div style="font-size:11px;color:var(--text-2);">Unified view with Service AI assist</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "An internal AgentForce agent automatically runs on case open — retrieving customer identity, order history, delivery ETAs from integrated systems, and surfacing a suggested resolution. The rep sees everything they need without leaving Salesforce." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Eliminates system-switching — 6 systems down to 1 view",
                "Dramatically reduces average case handling time",
                "Customer experience improves — faster, more accurate service",
                "Foundation for fully autonomous case resolution in Horizon 3"
              ]
            }
          ]
        }
      ]
    },

    "dtac-mktg": {
      kicker: "Tactical · 3–9 months",
      title:  "Behavioural marketing segmentation",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:start;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;color:var(--pain-red);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.1em;">Broadcast today</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Same email to all customers. No segmentation. Generic content. Low engagement. Marketing contribution to pipeline unmeasurable.</div>
            </div>
            <div style="padding-top:30px;font-size:24px;color:var(--rule);">→</div>
            <div style="padding:20px;background:var(--white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;color:var(--jb-green);margin-bottom:10px;text-transform:uppercase;letter-spacing:0.1em;">Behavioural tomorrow</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">Journeys triggered by what customers actually do. Purchase behaviour, portal activity, quote history. Right message at the right moment.</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "Replace broadcast marketing with data-driven journeys built in Marketing Cloud — triggered by real customer behaviour like recent purchases, portal logins, quote activity, and engagement signals." },
            { type: "paragraph", text: "For the first time, marketing contribution to revenue pipeline becomes measurable." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Higher engagement — messages timed to customer intent signals",
                "Measurable pipeline contribution from marketing activity",
                "Reduced unsubscribes from irrelevant broadcast emails",
                "Foundation for personalisation at scale as Data Cloud matures"
              ]
            }
          ]
        }
      ]
    },

    "dtac-onboard": {
      kicker: "Tactical · 3–9 months",
      title:  "Unified onboarding journey",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);margin-bottom:16px;">
            <div style="font-size:11px;font-weight:700;color:var(--pain-red);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Current: two-step drop-off</div>
            <div style="font-size:12px;color:var(--text-2);line-height:1.6;">Customers hit a two-step sign-up process. Drop-off occurs at step 2. Manual onboarding completed by the team. Duplicate accounts created from conflicting information sources. Generic welcome emails sent.</div>
          </div>
          <div style="padding:20px;background:var(--off-white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
            <div style="font-size:11px;font-weight:700;color:var(--jb-green);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Future: single sign-up, data-driven branching</div>
            <div style="font-size:12px;color:var(--text-2);line-height:1.6;">One frictionless sign-up. Marketing Cloud journey branches based on customer type, behaviour and intent signals. Onboarding is personalised and automated end-to-end.</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "Unify the B2B onboarding process — a single sign-up that feeds into a Marketing Cloud journey, branching based on the customer's segment, product interest and engagement signals." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Reduces drop-off at sign-up — fewer lost customers at the first hurdle",
                "Eliminates manual onboarding team effort for standard customers",
                "Cleaner customer data from the start — reduces duplicate accounts",
                "Personalised first impression — right content for each customer type"
              ]
            }
          ]
        }
      ]
    },

    "dtac-pipe": {
      kicker: "Tactical · 3–9 months",
      title:  "Pipeline Intelligence",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="padding:24px;background:var(--white);border:1px solid var(--rule);border-radius:var(--radius);margin-bottom:16px;">
            <div style="font-family:'Comfortaa',sans-serif;font-size:32px;font-weight:700;color:var(--pain-red);margin-bottom:8px;">Broken</div>
            <div style="font-size:13px;color:var(--text-2);line-height:1.7;">Forecasting described by leadership as "broken" — entirely manual, done in Excel, with low trust in the numbers. Expected delivery dates often missing or inaccurate. CRMA abandoned. Revenue Intelligence pilot failed.</div>
          </div>
          <div style="padding:24px;background:var(--off-white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
            <div style="font-family:'Comfortaa',sans-serif;font-size:32px;font-weight:700;color:var(--jb-green);margin-bottom:8px;">Trusted</div>
            <div style="font-size:13px;color:var(--text-2);line-height:1.7;">Pipeline Intelligence built on clean Salesforce data — deal scores, velocity signals, at-risk flags. Leadership makes decisions on numbers they believe. No Excel required.</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "Einstein Pipeline Inspection and Opportunity Scoring provide leaders with an AI-powered view of their pipeline — deal health scores, close probability, velocity indicators, and at-risk flags — all built from Salesforce activity data." },
            { type: "paragraph", text: "Unlike the CRMA and RI attempts, this is built on the core Sales Cloud data model — no heavy customisation required." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Forecasting leadership can trust — no more Excel models",
                "At-risk deals surfaced before they're lost",
                "Coaching conversations grounded in data, not instinct",
                "Foundation for the full $1B growth trajectory to be tracked in real time"
              ]
            }
          ]
        }
      ]
    },

    // ─── STRATEGIC DRAWERS ────────────────────────────────────────────────────

    "dstr-dc": {
      kicker: "Strategic · 9–18 months",
      title:  "Data Cloud — the unified foundation",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;">From data silos to Customer 360</div>
          <div style="display:flex;flex-direction:column;gap:8px;margin-bottom:20px;">
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">Salesforce CRM — partial customer view</div>
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">Excel — customer identity &amp; tiers</div>
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">JB product app — product &amp; SKU data</div>
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">Fulfilment app — orders &amp; delivery</div>
            <div style="padding:6px 0;text-align:center;font-size:18px;color:var(--rule);">↓</div>
            <div style="padding:14px;background:var(--off-white);border:2px solid var(--jb-green);border-radius:var(--radius);font-size:13px;font-weight:600;color:var(--jb-green);text-align:center;">One unified Customer 360 — in Salesforce</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "Salesforce Data Cloud unifies customer data from every source — Salesforce, Excel, the product app, the fulfilment application, and any other system — into a single, real-time Customer 360 profile." },
            { type: "paragraph", text: "This is the <strong>data foundation that makes every other AI capability more accurate</strong> — AgentForce, Predictive Intelligence, and behavioural marketing all become significantly more powerful when grounded in unified data." }
          ]
        },
        {
          label: "Why it requires the clean org path",
          content: [
            {
              type: "bullet-list",
              items: [
                "The current org's managed package complexity limits Data Cloud integration depth",
                "A clean org migration is the prerequisite — addressed in the technical platform session",
                "The investment unlocks the full $1B platform capability"
              ]
            }
          ]
        }
      ]
    },

    "dstr-sdr": {
      kicker: "Strategic · 9–18 months",
      title:  "Agentic SDR",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:start;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;color:var(--pain-red);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">Today</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">BDMs handle all leads regardless of fit. Non-ICP accounts consume time that should go to high-value opportunities. Manual prospecting, manual qualification, manual outreach.</div>
            </div>
            <div style="padding-top:30px;font-size:24px;color:var(--rule);">→</div>
            <div style="padding:20px;background:var(--white);border:1px solid var(--jb-green);border-top:3px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-size:11px;font-weight:700;color:var(--jb-green);text-transform:uppercase;letter-spacing:0.1em;margin-bottom:10px;">With Agentic SDR</div>
              <div style="font-size:12px;color:var(--text-2);line-height:1.5;">AI agent qualifies, nurtures and hands off non-ICP leads end-to-end. BDMs focus entirely on high-value accounts. Pipeline quality improves. Team scales without headcount.</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "An AgentForce SDR agent handles the full lifecycle of non-ICP leads — initial qualification, nurture sequences, objection handling, and handoff to a human BDM when the lead meets defined criteria." },
            { type: "paragraph", text: "BDMs are freed to focus entirely on high-value accounts, significantly increasing their capacity for quality pipeline." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "BDMs focused on deals that move the needle toward $1B",
                "No leads fall through — agent handles the long tail consistently",
                "Scales revenue capacity without proportional headcount growth",
                "Requires Data Cloud unified data for personalised agent interactions"
              ]
            }
          ]
        }
      ]
    },

    "dstr-rev": {
      kicker: "Strategic · 9–18 months",
      title:  "Predictive revenue intelligence",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="font-size:11px;font-weight:700;letter-spacing:0.16em;text-transform:uppercase;color:var(--text-3);margin-bottom:16px;">What intelligence surfaces in the rep's workflow</div>
          <div style="display:flex;flex-direction:column;gap:10px;">
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--jb-green);border-radius:var(--radius);">
              <div style="font-size:12px;font-weight:600;color:var(--black);margin-bottom:4px;">Deal scoring</div>
              <div style="font-size:11px;color:var(--text-2);">AI-predicted close probability based on activity patterns, engagement signals and historical data</div>
            </div>
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--pain-red);border-radius:var(--radius);">
              <div style="font-size:12px;font-weight:600;color:var(--black);margin-bottom:4px;">Churn risk signals</div>
              <div style="font-size:11px;color:var(--text-2);">Customers showing disengagement patterns flagged before they churn — prompting proactive outreach</div>
            </div>
            <div style="padding:14px 16px;background:var(--white);border:1px solid var(--rule);border-left:3px solid var(--jb-yellow);border-radius:var(--radius);">
              <div style="font-size:12px;font-weight:600;color:var(--black);margin-bottom:4px;">Upsell propensity</div>
              <div style="font-size:11px;color:var(--text-2);">Next best action and product recommendations surfaced in rep workflow based on purchase patterns</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "Built on Data Cloud unified data, Predictive Revenue Intelligence surfaces deal scores, churn risk signals, upsell propensity and next best actions directly in the rep's Salesforce workflow." },
            { type: "paragraph", text: "Leadership gets a pipeline they can actually trust — with real predictive signals rather than rep gut-feel stage updates." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Forecast accuracy improves significantly — AI-predicted close vs manual stage",
                "At-risk deals surfaced weeks earlier — more time to recover them",
                "Upsell opportunities identified systematically across the customer base",
                "Leadership confidence in the numbers — foundation for $1B planning"
              ]
            }
          ]
        }
      ]
    },

    "dstr-agentic": {
      kicker: "Strategic · 9–18 months",
      title:  "Agentic service",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="padding:24px;background:var(--off-white);border:1px solid var(--rule);border-radius:var(--radius);margin-bottom:16px;">
            <div style="font-size:14px;color:var(--text-2);line-height:1.7;margin-bottom:16px;">Common case types that can be resolved autonomously — with no human in the loop:</div>
            <div style="display:flex;flex-direction:column;gap:8px;">
              <div style="padding:10px 14px;background:var(--white);border:1px solid var(--jb-green);border-radius:4px;font-size:12px;color:var(--text-2);">✓ Delayed order status enquiries — agent fetches ETA and responds</div>
              <div style="padding:10px 14px;background:var(--white);border:1px solid var(--jb-green);border-radius:4px;font-size:12px;color:var(--text-2);">✓ Standard product availability checks</div>
              <div style="padding:10px 14px;background:var(--white);border:1px solid var(--jb-green);border-radius:4px;font-size:12px;color:var(--text-2);">✓ Invoice copy requests</div>
              <div style="padding:10px 14px;background:var(--white);border:1px solid var(--jb-green);border-radius:4px;font-size:12px;color:var(--text-2);">✓ Account and contact updates</div>
              <div style="padding:10px 14px;background:var(--white);border:1px solid var(--rule);border-radius:4px;font-size:12px;color:var(--text-3);">↗ Complex cases escalated seamlessly to human agents</div>
            </div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "What it does",
          content: [
            { type: "paragraph", text: "AgentForce autonomous service agents resolve common case types end-to-end — from receiving the request to fetching data, making decisions, and communicating with the customer — without any human involvement." },
            { type: "paragraph", text: "Complex or sensitive cases are escalated to human agents with full context already populated." }
          ]
        },
        {
          label: "Impact",
          content: [
            {
              type: "bullet-list",
              items: [
                "Significant reduction in average handling time across the service team",
                "24/7 service capability for common request types — no agent required",
                "Human agents focused on complex, high-value interactions",
                "Cost-to-serve reduction as volume scales toward $1B"
              ]
            }
          ]
        }
      ]
    },

    "dstr-cleanorg": {
      kicker: "Strategic · 9–18 months",
      title:  "Clean org — the platform for $1B",
      imageStyle: "padding:40px;flex-direction:column;gap:20px;align-items:flex-start;",
      imageHtml: `
        <div style="width:100%;">
          <div style="display:grid;grid-template-columns:1fr auto 1fr;gap:16px;align-items:center;">
            <div style="padding:20px;background:var(--white);border:1px solid var(--rule);border-top:3px solid var(--pain-red);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:36px;font-weight:700;color:var(--text-2);margin-bottom:8px;">$500M</div>
              <div style="font-size:12px;color:var(--text-3);">Current platform ceiling</div>
            </div>
            <div style="font-size:28px;color:var(--jb-yellow);">→</div>
            <div style="padding:20px;background:var(--off-white);border:2px solid var(--jb-yellow);border-radius:var(--radius);text-align:center;">
              <div style="font-family:'Comfortaa',sans-serif;font-size:36px;font-weight:700;color:var(--black);margin-bottom:8px;">$1B</div>
              <div style="font-size:12px;color:var(--text-2);font-weight:600;">Clean org platform</div>
            </div>
          </div>
          <div style="margin-top:20px;display:flex;flex-direction:column;gap:8px;">
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">✗ Managed packages adding technical debt</div>
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">✗ Heavy customisation blocking upgrades</div>
            <div style="padding:10px 14px;background:rgba(200,0,26,0.05);border:1px solid rgba(200,0,26,0.15);border-radius:4px;font-size:12px;color:var(--text-2);">✗ Data Cloud and AgentForce constrained by org complexity</div>
            <div style="padding:8px 0;text-align:center;font-size:14px;color:var(--rule);">↓</div>
            <div style="padding:10px 14px;background:rgba(2,135,3,0.05);border:1px solid rgba(2,135,3,0.2);border-radius:4px;font-size:12px;color:var(--jb-green);">✓ Structured migration — clean, scalable, future-ready</div>
          </div>
        </div>
      `,
      sections: [
        {
          label: "The context",
          content: [
            { type: "paragraph", text: "JB Hi-Fi has built a $500M business on this Salesforce platform. That growth has created layers of customisation and managed packages that are now acting as a ceiling — limiting the ability to adopt Data Cloud, AgentForce, and modern Salesforce capabilities at full depth." },
            { type: "paragraph", text: "<strong>This is a growth signal, not a failure.</strong> A structured clean org migration removes the debt and sets the technical foundation for doubling the business." }
          ]
        },
        {
          label: "What a clean org unlocks",
          content: [
            {
              type: "bullet-list",
              items: [
                "Full Data Cloud integration — unified Customer 360 without constraints",
                "AgentForce at full capability — agents grounded in clean, unified data",
                "Faster platform upgrades — no managed package conflicts",
                "Predictive Intelligence built on trustworthy data foundations"
              ]
            }
          ]
        },
        {
          label: "Note",
          content: [
            { type: "paragraph", text: "The detailed migration path, timeline and investment will be covered in a separate technical platform session — this is flagged for that conversation, not resolved today." }
          ]
        }
      ]
    }

  } // end drawers

}; // end DECK_CONFIG
