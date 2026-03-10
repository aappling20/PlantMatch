import { useState } from "react";

const injectStyles = () => {
  if (document.getElementById("pm-styles")) return;
  const link = document.createElement("link");
  link.rel = "stylesheet";
  link.href = "https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,400;1,600&family=Jost:wght@300;400;500;600&display=swap";
  document.head.appendChild(link);
  const style = document.createElement("style");
  style.id = "pm-styles";
  style.innerHTML = `
    *,*::before,*::after{box-sizing:border-box;margin:0;padding:0}
    :root{
      --cream:#f4efe6;--dark:#1c2b1d;--moss:#3b5c3d;--sage:#6e9470;
      --leaf:#a8c5a0;--mist:#e4ede1;--gold:#b8924a;--bark:#4a3728;--white:#fdfaf5;
    }
    body{font-family:'Jost',sans-serif;background:var(--cream);color:var(--dark)}
    h1,h2,h3,h4{font-family:'Cormorant Garamond',serif}
    @keyframes fadeUp{from{opacity:0;transform:translateY(28px)}to{opacity:1;transform:translateY(0)}}
    @keyframes fadeIn{from{opacity:0}to{opacity:1}}
    @keyframes float{0%,100%{transform:translateY(0) rotate(0deg)}50%{transform:translateY(-14px) rotate(5deg)}}
    @keyframes bounce{0%,100%{transform:translateX(-50%) translateY(0)}50%{transform:translateX(-50%) translateY(7px)}}
    @keyframes scaleIn{from{opacity:0;transform:scale(0.94)}to{opacity:1;transform:scale(1)}}
    @keyframes slideR{from{transform:translateX(-14px);opacity:0}to{transform:translateX(0);opacity:1}}

    .pm-btn{font-family:'Jost',sans-serif;font-weight:500;letter-spacing:0.09em;text-transform:uppercase;border:none;cursor:pointer;border-radius:50px;transition:background .22s,transform .18s,box-shadow .22s}
    .pm-btn:hover{transform:translateY(-2px)}
    .btn-primary{background:var(--moss);color:white;padding:.95rem 2.8rem;font-size:.88rem;box-shadow:0 4px 22px rgba(59,92,61,.32)}
    .btn-primary:hover{background:var(--dark);box-shadow:0 8px 30px rgba(28,43,29,.3)}
    .btn-outline{background:transparent;color:var(--moss);border:1.5px solid var(--moss);padding:.75rem 2rem;font-size:.82rem}
    .btn-outline:hover{background:var(--moss);color:white}
    .btn-ghost{background:transparent;color:var(--bark);padding:.7rem 1.4rem;font-size:.82rem}
    .btn-ghost:hover{background:var(--mist);color:var(--moss)}

    /* NAV */
    .navbar{position:fixed;top:0;left:0;right:0;z-index:200;display:flex;align-items:center;justify-content:space-between;padding:0 2.4rem;height:62px;background:rgba(244,239,230,.92);backdrop-filter:blur(14px);border-bottom:1px solid rgba(110,148,112,.18)}
    .navbar-logo{font-family:'Cormorant Garamond',serif;font-size:1.55rem;font-weight:700;letter-spacing:.03em;color:var(--moss);cursor:pointer;display:flex;align-items:center;gap:.35rem}
    .navbar-logo .accent{color:var(--gold);font-style:italic}

    /* HERO */
    .hero{min-height:100vh;display:flex;flex-direction:column;align-items:center;justify-content:center;position:relative;overflow:hidden;background:linear-gradient(155deg,#e6efe2 0%,#f4efe6 45%,#ede8db 100%);padding-top:62px}
    .blob{position:absolute;border-radius:50%;filter:blur(70px);opacity:.28;pointer-events:none}
    .b1{width:550px;height:550px;background:#a8c5a0;top:-120px;left:-120px}
    .b2{width:420px;height:420px;background:#c9a84c55;bottom:-100px;right:-80px}
    .b3{width:280px;height:280px;background:#6e9470;top:38%;left:55%}
    .hero-leaf{position:absolute;font-size:3.5rem;opacity:.1;pointer-events:none;user-select:none;animation:float 7s ease-in-out infinite}
    .hero-content{position:relative;z-index:2;text-align:center;padding:2rem 1.5rem;max-width:680px;animation:fadeUp .85s ease both}
    .eyebrow{font-size:.72rem;letter-spacing:.22em;text-transform:uppercase;color:var(--sage);margin-bottom:1.1rem;font-weight:500}
    .hero-title{font-size:clamp(3.8rem,9vw,6.5rem);font-weight:700;line-height:1;color:var(--dark)}
    .hero-title em{color:var(--moss);font-style:italic}
    .hero-sub{font-size:1.08rem;color:var(--bark);line-height:1.75;margin:1.5rem auto 2.8rem;font-weight:300;max-width:460px}
    .cta-row{display:flex;gap:1rem;justify-content:center;flex-wrap:wrap}
    .hero-scroll{position:absolute;bottom:1.8rem;left:50%;font-size:.68rem;letter-spacing:.16em;text-transform:uppercase;color:var(--sage);display:flex;flex-direction:column;align-items:center;gap:.45rem;animation:bounce 2.5s ease-in-out infinite}

    /* ABOUT */
    .about{background:var(--dark);color:var(--mist);padding:5rem 2rem;text-align:center}
    .about h2{font-size:2.4rem;color:var(--leaf);margin-bottom:1rem}
    .about p{max-width:540px;margin:0 auto;line-height:1.85;font-size:.97rem;font-weight:300;color:#c0d4bc}
    .about-cards{display:flex;justify-content:center;gap:2rem;margin-top:3rem;flex-wrap:wrap}
    .about-card{background:rgba(255,255,255,.04);border:1px solid rgba(168,197,160,.18);border-radius:16px;padding:1.8rem 1.4rem;width:160px;text-align:center}
    .about-card-icon{font-size:2rem;margin-bottom:.75rem}
    .about-card-label{font-size:.78rem;font-weight:400;letter-spacing:.07em;color:var(--leaf);text-transform:uppercase}

    /* QUIZ */
    .quiz-page{min-height:100vh;padding:80px 1.5rem 3rem;display:flex;flex-direction:column;align-items:center;justify-content:center;background:linear-gradient(170deg,#edf3e9 0%,#f4efe6 100%)}
    .quiz-shell{background:var(--white);border-radius:24px;box-shadow:0 8px 48px rgba(28,43,29,.1);padding:3rem 3.5rem;max-width:580px;width:100%;animation:scaleIn .4s ease both}
    .progress-bar{height:4px;background:var(--mist);border-radius:8px;margin-bottom:2.2rem;overflow:hidden}
    .progress-fill{height:100%;background:linear-gradient(90deg,var(--sage),var(--moss));border-radius:8px;transition:width .4s ease}
    .step-label{font-size:.7rem;letter-spacing:.18em;text-transform:uppercase;color:var(--sage);margin-bottom:.6rem;font-weight:500}
    .question{font-size:1.85rem;font-weight:600;line-height:1.25;color:var(--dark);margin-bottom:.5rem}
    .question em{color:var(--moss);font-style:italic}
    .hint{font-size:.83rem;color:#8a9e88;margin-bottom:2rem;font-weight:300}
    .options{display:flex;flex-direction:column;gap:.75rem;margin-bottom:2.2rem}
    .option{display:flex;align-items:center;gap:1rem;padding:1rem 1.3rem;border-radius:12px;border:1.5px solid var(--mist);background:white;cursor:pointer;transition:border-color .2s,background .2s,transform .15s;animation:slideR .3s ease both;font-family:'Jost',sans-serif}
    .option:hover{border-color:var(--sage);background:var(--mist);transform:translateX(4px)}
    .option.sel{border-color:var(--moss);background:#eaf2ea}
    .radio{width:20px;height:20px;border-radius:50%;border:2px solid var(--leaf);flex-shrink:0;display:flex;align-items:center;justify-content:center;transition:border-color .2s}
    .option.sel .radio{border-color:var(--moss)}
    .radio-dot{width:10px;height:10px;border-radius:50%;background:var(--moss);opacity:0;transition:opacity .2s}
    .option.sel .radio-dot{opacity:1}
    .opt-icon{font-size:1.3rem}
    .opt-text{font-size:.95rem;font-weight:400;color:var(--dark)}
    .quiz-nav{display:flex;justify-content:space-between;align-items:center}
    .quiz-counter{font-size:.78rem;color:#a0b09e;letter-spacing:.1em}

    /* RESULTS */
    .results-page{min-height:100vh;padding:90px 2rem 4rem;background:linear-gradient(160deg,#f0f5ed 0%,#f4efe6 100%)}
    .results-header{text-align:center;margin-bottom:2.8rem;animation:fadeUp .6s ease both}
    .results-title{font-size:clamp(2.4rem,5vw,3.5rem);font-weight:700;color:var(--dark)}
    .results-title em{color:var(--moss);font-style:italic}
    .results-sub{font-size:.95rem;color:var(--bark);margin-top:.6rem;font-weight:300}
    .retake{margin-top:1rem;font-size:.78rem;color:var(--sage);cursor:pointer;text-decoration:underline;letter-spacing:.05em;background:none;border:none;font-family:'Jost',sans-serif}

    /* FILTER */
    .filter-bar{display:flex;gap:.5rem;flex-wrap:wrap;justify-content:center;max-width:1100px;margin:0 auto 2rem}
    .chip{font-family:'Jost',sans-serif;font-size:.75rem;font-weight:500;letter-spacing:.07em;text-transform:uppercase;padding:.45rem 1.1rem;border-radius:50px;cursor:pointer;border:1.5px solid var(--leaf);background:white;color:var(--moss);transition:all .2s}
    .chip:hover,.chip.active{background:var(--moss);color:white;border-color:var(--moss)}

    /* CARDS */
    .grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(230px,1fr));gap:1.4rem;max-width:1100px;margin:0 auto}
    .plant-card{background:var(--white);border-radius:20px;overflow:hidden;cursor:pointer;box-shadow:0 2px 20px rgba(28,43,29,.08);transition:transform .22s,box-shadow .22s;animation:fadeUp .5s ease both;position:relative}
    .plant-card:hover{transform:translateY(-6px);box-shadow:0 12px 40px rgba(28,43,29,.16)}
    .card-img{width:100%;height:175px;display:flex;align-items:center;justify-content:center;font-size:4.5rem;background:linear-gradient(135deg,#c8dfc4,#e4ede1)}
    .card-match{position:absolute;top:12px;right:12px;background:var(--moss);color:white;font-size:.7rem;font-weight:600;letter-spacing:.07em;padding:.28rem .7rem;border-radius:50px}
    .card-rank{position:absolute;top:12px;left:12px;background:var(--gold);color:white;font-size:.7rem;font-weight:600;letter-spacing:.07em;padding:.28rem .6rem;border-radius:50px}
    .card-body{padding:1.2rem 1.3rem 1.4rem}
    .card-name{font-size:1.35rem;font-weight:600;color:var(--dark);margin-bottom:.12rem}
    .card-latin{font-size:.75rem;font-style:italic;color:var(--sage);margin-bottom:.75rem}
    .card-tags{display:flex;flex-wrap:wrap;gap:.35rem;margin-bottom:.8rem}
    .tag{font-size:.65rem;font-weight:500;letter-spacing:.07em;text-transform:uppercase;padding:.22rem .6rem;border-radius:50px;background:var(--mist);color:var(--moss)}
    .card-icons{display:flex;gap:1.2rem}
    .icon-item{display:flex;align-items:center;gap:.3rem;font-size:.75rem;color:#7a8f78}
    .icon-item span:first-child{font-size:1rem}

    /* POPUP */
    .overlay{position:fixed;inset:0;z-index:300;background:rgba(28,43,29,.55);backdrop-filter:blur(6px);display:flex;align-items:center;justify-content:center;padding:1rem;animation:fadeIn .25s ease both}
    .popup{background:var(--white);border-radius:28px;max-width:680px;width:100%;max-height:90vh;overflow-y:auto;position:relative;animation:scaleIn .3s ease both;box-shadow:0 24px 80px rgba(28,43,29,.25)}
    .popup::-webkit-scrollbar{width:5px}
    .popup::-webkit-scrollbar-thumb{background:var(--leaf);border-radius:8px}
    .popup-hero{width:100%;height:240px;background:linear-gradient(135deg,#b8d4b2,#daebd6);display:flex;align-items:center;justify-content:center;font-size:7rem;border-radius:28px 28px 0 0;position:relative}
    .close-btn{position:absolute;top:1rem;right:1rem;width:36px;height:36px;border-radius:50%;background:rgba(255,255,255,.88);border:none;cursor:pointer;font-size:1.1rem;display:flex;align-items:center;justify-content:center;transition:background .2s,transform .2s}
    .close-btn:hover{background:white;transform:scale(1.1)}
    .match-badge{position:absolute;bottom:1rem;left:1.5rem;background:var(--moss);color:white;font-family:'Jost',sans-serif;font-size:.78rem;font-weight:600;letter-spacing:.06em;padding:.38rem 1rem;border-radius:50px}
    .popup-body{padding:2rem 2.2rem 2.5rem}
    .popup-name{font-size:2.4rem;font-weight:700;color:var(--dark);margin-bottom:.2rem}
    .popup-latin{font-size:1rem;font-style:italic;color:var(--sage);margin-bottom:1.4rem}
    .popup-desc{font-size:.95rem;line-height:1.8;color:var(--bark);font-weight:300;margin-bottom:1.8rem}
    .stats-grid{display:grid;grid-template-columns:repeat(2,1fr);gap:.9rem;margin-bottom:2rem}
    .stat{background:var(--mist);border-radius:14px;padding:1rem 1.2rem;display:flex;align-items:center;gap:.8rem}
    .stat-icon{font-size:1.5rem}
    .stat-label{font-size:.65rem;text-transform:uppercase;letter-spacing:.1em;color:var(--sage);margin-bottom:.12rem}
    .stat-val{font-size:.9rem;font-weight:500;color:var(--dark)}
    .section-title{font-size:1.5rem;font-weight:600;color:var(--dark);margin-bottom:1rem;padding-bottom:.5rem;border-bottom:1.5px solid var(--mist)}
    .care-steps{display:flex;flex-direction:column;gap:.75rem}
    .care-step{display:flex;gap:1rem;align-items:flex-start}
    .care-num{width:26px;height:26px;border-radius:50%;flex-shrink:0;background:var(--moss);color:white;display:flex;align-items:center;justify-content:center;font-size:.7rem;font-weight:600;margin-top:.1rem}
    .care-text{font-size:.9rem;line-height:1.7;color:var(--bark);font-weight:300}
    .popup-tags{display:flex;flex-wrap:wrap;gap:.5rem;margin-top:1.5rem}
  `;
  document.head.appendChild(style);
};

// ─── DATA ─────────────────────────────────────────────────────────────────────

const QUESTIONS = [
  {
    id:"skill", question:"What's your experience with plants?", hint:"Be honest — there's a perfect plant for every level!",
    options:[
      {value:"beginner",label:"Beginner — I've killed a cactus",icon:"🌱"},
      {value:"intermediate",label:"Intermediate — I keep a few alive",icon:"🌿"},
      {value:"advanced",label:"Advanced — practically a botanist",icon:"🌳"},
    ],
  },
  {
    id:"light", question:"How much natural light does your space get?", hint:"Think about the room where the plant will actually live",
    options:[
      {value:"low",label:"Low light — north-facing or shady",icon:"🌑"},
      {value:"medium",label:"Moderate — bright but indirect",icon:"🌤"},
      {value:"high",label:"Bright & sunny — south or west windows",icon:"☀️"},
    ],
  },
  {
    id:"water", question:"How often are you willing to water?", hint:"Pick your real habit, not your aspirational one",
    options:[
      {value:"rarely",label:"Once every 2–3 weeks or less",icon:"🏜️"},
      {value:"weekly",label:"About once a week",icon:"💧"},
      {value:"frequent",label:"Multiple times a week — I love it",icon:"🚿"},
    ],
  },
  {
    id:"time", question:"How much time do you want to spend on care?", hint:"Includes pruning, fertilising, repotting",
    options:[
      {value:"minimal",label:"Minimal — set and forget",icon:"😌"},
      {value:"moderate",label:"A few minutes here and there",icon:"🕐"},
      {value:"lots",label:"I love tending my plants",icon:"🧑‍🌾"},
    ],
  },
  {
    id:"location", question:"Where will your plant live?", hint:"This affects light, temperature, and humidity needs",
    options:[
      {value:"indoor",label:"Indoors — apartment or house",icon:"🏠"},
      {value:"outdoor",label:"Outdoors — garden or balcony",icon:"🌳"},
      {value:"both",label:"Both — I'll move it around",icon:"🔄"},
    ],
  },
  {
    id:"pets", question:"Do you have pets or young children?", hint:"Some plants are toxic if chewed",
    options:[
      {value:"yes",label:"Yes — safety is a priority",icon:"🐾"},
      {value:"no",label:"No — no worries there",icon:"✅"},
    ],
  },
  {
    id:"size", question:"What size plant are you looking for?", hint:"Consider the space you have available",
    options:[
      {value:"small",label:"Small — desk or shelf sized",icon:"🪴"},
      {value:"medium",label:"Medium — floor plant, knee height",icon:"🌿"},
      {value:"large",label:"Large — statement piece, fills a corner",icon:"🌴"},
    ],
  },
];

const PLANTS = [
  {
    id:1,name:"Snake Plant",latin:"Sansevieria trifasciata",emoji:"🪴",
    tags:["Low maintenance","Air purifying","Drought tolerant"],
    skill:["beginner","intermediate","advanced"],light:["low","medium","high"],water:["rarely","weekly"],
    time:["minimal","moderate"],location:["indoor","both"],pets:["no"],size:["medium","large"],
    desc:"The snake plant is practically indestructible — it thrives on neglect, tolerates deep shade, and only needs watering every few weeks. Its architectural upright leaves add bold structure to any room.",
    stats:{water:"Every 2–6 weeks",light:"Low to bright indirect",humidity:"Low to average",temp:"60–80°F"},
    care:["Water only when the top 2 inches of soil are completely dry — overwatering is the only real threat.","Place in any light condition; it tolerates dark corners but prefers indirect bright light.","Fertilise once in spring and once in summer with a balanced liquid fertiliser.","Repot every 2–3 years or when roots push out of the drainage holes.","Wipe leaves with a damp cloth occasionally to keep them dust-free and glossy."],
  },
  {
    id:2,name:"Pothos",latin:"Epipremnum aureum",emoji:"🍃",
    tags:["Trailing vines","Fast growing","Very forgiving"],
    skill:["beginner","intermediate"],light:["low","medium"],water:["weekly"],
    time:["minimal","moderate"],location:["indoor","both"],pets:["no"],size:["small","medium"],
    desc:"Pothos is the ultimate beginner plant — its trailing vines cascade beautifully from shelves and hanging baskets. It droops slightly when thirsty, making it almost impossible to neglect.",
    stats:{water:"Every 1–2 weeks",light:"Low to medium indirect",humidity:"Average",temp:"65–85°F"},
    care:["Water when the top inch of soil feels dry — the leaves droop slightly when thirsty.","Provide bright indirect light for fastest growth and most vibrant variegation.","Propagate easily by snipping a node just below a leaf and placing in water.","Feed monthly in spring and summer with diluted balanced fertiliser.","Trim leggy vines to encourage bushier, fuller growth."],
  },
  {
    id:3,name:"Monstera",latin:"Monstera deliciosa",emoji:"🌿",
    tags:["Statement plant","Iconic leaves","Tropical"],
    skill:["intermediate","advanced"],light:["medium","high"],water:["weekly"],
    time:["moderate"],location:["indoor","both"],pets:["no"],size:["large"],
    desc:"The monstera's split leaves have become synonymous with interior design. Given space and bright indirect light, it grows into a dramatic statement piece that transforms any room into a tropical retreat.",
    stats:{water:"Every 1–2 weeks",light:"Bright indirect",humidity:"High preferred",temp:"65–85°F"},
    care:["Water thoroughly when the top 2 inches of soil are dry, then let it drain completely.","Provide bright indirect light — avoid harsh direct sun which scorches the leaves.","Support with a moss pole to encourage larger, more fenestrated leaves.","Mist leaves or use a humidifier to mimic its tropical origins.","Dust leaves regularly and wipe with neem oil to deter pests."],
  },
  {
    id:4,name:"ZZ Plant",latin:"Zamioculcas zamiifolia",emoji:"🌱",
    tags:["Near-indestructible","Low light","Glossy leaves"],
    skill:["beginner","intermediate"],light:["low","medium"],water:["rarely"],
    time:["minimal"],location:["indoor"],pets:["no"],size:["medium"],
    desc:"The ZZ plant stores water in its rhizomes, making it extraordinarily drought tolerant. Its glossy dark leaves stay beautiful with almost zero effort — thriving in offices and low-light rooms.",
    stats:{water:"Every 2–4 weeks",light:"Low to medium indirect",humidity:"Low to average",temp:"65–79°F"},
    care:["Water sparingly — every 2–4 weeks, allowing soil to dry completely between waterings.","Thrives in low light and does well under fluorescent office lighting.","Avoid overwatering at all costs; root rot is the only real risk.","Fertilise lightly once or twice a year — it doesn't need much.","Wipe the glossy leaves occasionally to keep them shining."],
  },
  {
    id:5,name:"Spider Plant",latin:"Chlorophytum comosum",emoji:"🌾",
    tags:["Pet-safe","Air purifying","Easy care"],
    skill:["beginner","intermediate"],light:["low","medium","high"],water:["weekly"],
    time:["minimal","moderate"],location:["indoor","both"],pets:["yes"],size:["small","medium"],
    desc:"One of the rare houseplants completely safe for cats, dogs, and children. Spider plants produce cascading 'spiderettes' you can propagate — one plant turns into a whole collection.",
    stats:{water:"Every 1–2 weeks",light:"Indirect any level",humidity:"Average",temp:"60–80°F"},
    care:["Water regularly but allow the top inch to dry between waterings.","Tolerates a wide range of light; bright indirect is ideal.","Snip baby spiderettes and root them in water to propagate new plants.","Feed monthly during spring and summer with diluted all-purpose fertiliser.","Remove brown tips with scissors — try filtered water to reduce tip browning."],
  },
  {
    id:6,name:"Boston Fern",latin:"Nephrolepis exaltata",emoji:"🌿",
    tags:["High humidity","Lush foliage","Pet-safe"],
    skill:["intermediate","advanced"],light:["medium"],water:["frequent"],
    time:["lots","moderate"],location:["indoor","both"],pets:["yes"],size:["medium"],
    desc:"Boston ferns are lush, dramatic, and reward attentive care with an explosion of arching fronds. They thrive in humidity and consistent moisture — ideal for bathrooms or kitchens.",
    stats:{water:"2–3 times a week",light:"Bright indirect",humidity:"High — mist often",temp:"60–75°F"},
    care:["Keep the soil consistently moist — never let it dry out completely.","Mist daily or place on a pebble tray with water to maintain high humidity.","Provide bright indirect light; avoid direct sun which scorches fronds.","Fertilise every two weeks in spring and summer with balanced liquid feed.","Remove yellowing fronds at the base to keep the plant full and healthy."],
  },
  {
    id:7,name:"Succulents",latin:"Various genera",emoji:"🌵",
    tags:["Drought tolerant","Colourful","Compact"],
    skill:["beginner","intermediate"],light:["high","medium"],water:["rarely"],
    time:["minimal"],location:["indoor","outdoor","both"],pets:["no"],size:["small"],
    desc:"Succulents store water in their fleshy leaves — perfect for travellers or those who forget. Their incredible diversity of shapes and colours turns any windowsill into a miniature garden.",
    stats:{water:"Every 2–3 weeks",light:"Bright direct or indirect",humidity:"Low",temp:"60–80°F"},
    care:["Use well-draining cactus mix and a pot with drainage holes to prevent rot.","Place in the brightest light available — a sunny south or west-facing window is ideal.","Water deeply but infrequently, letting the soil dry completely between waterings.","Fertilise once in spring with a diluted cactus fertiliser.","Outdoors, protect from heavy rain to avoid overwatering."],
  },
  {
    id:8,name:"Peace Lily",latin:"Spathiphyllum wallisii",emoji:"🌸",
    tags:["Flowering","Air purifying","Low light"],
    skill:["beginner","intermediate"],light:["low","medium"],water:["weekly"],
    time:["moderate"],location:["indoor"],pets:["no"],size:["medium"],
    desc:"Peace lilies are one of the few flowering plants that thrive in low light. Their elegant white blooms appear in spring and summer, and they droop when thirsty — an unmistakable signal to water.",
    stats:{water:"Once a week",light:"Low to medium indirect",humidity:"Average to high",temp:"65–80°F"},
    care:["Water when the plant droops slightly — it communicates its needs clearly.","Place in low to medium indirect light; avoid direct sun which bleaches leaves.","Mist occasionally to boost humidity and encourage blooming.","Fertilise monthly in spring and summer with a bloom-boosting fertiliser.","Repot in spring when roots begin circling the bottom of the pot."],
  },
  {
    id:9,name:"Rubber Plant",latin:"Ficus elastica",emoji:"🌳",
    tags:["Bold statement","Fast growing","Structural"],
    skill:["intermediate","advanced"],light:["medium","high"],water:["weekly"],
    time:["moderate"],location:["indoor","both"],pets:["no"],size:["large"],
    desc:"With large, glossy leaves in deep burgundy or bright green, the rubber plant makes an instant architectural statement. It grows quickly and can become a magnificent indoor tree.",
    stats:{water:"Every 1–2 weeks",light:"Bright indirect",humidity:"Average",temp:"60–85°F"},
    care:["Water when the top inch of soil is dry — reduce watering in winter.","Place in bright indirect light for richest leaf colour and fastest growth.","Wipe leaves with a damp cloth monthly to keep them dust-free.","Pinch off growing tips to encourage branching and a fuller silhouette.","Fertilise every two weeks in spring and summer; stop in autumn and winter."],
  },
  {
    id:10,name:"Aloe Vera",latin:"Aloe barbadensis miller",emoji:"🪴",
    tags:["Medicinal","Drought tolerant","Outdoor-friendly"],
    skill:["beginner","intermediate"],light:["high","medium"],water:["rarely"],
    time:["minimal"],location:["indoor","outdoor","both"],pets:["no"],size:["small","medium"],
    desc:"Aloe vera is beauty, medicine cabinet, and statement plant in one. Its gel soothes sunburns and cuts, it thrives in bright sunny spots with minimal water, and its spiky silhouette adds drama to any space.",
    stats:{water:"Every 3 weeks",light:"Bright direct or indirect",humidity:"Low",temp:"55–80°F"},
    care:["Allow the soil to dry completely between waterings — once every 3 weeks is often enough.","Plant in cactus or succulent mix with excellent drainage.","Position in the brightest spot available; loves direct sun on a warm windowsill.","Move outdoors in summer; bring back inside before first frost.","Harvest gel by slicing a lower leaf close to the stem and squeezing out the clear gel."],
  },
];

function scorePlant(plant, answers) {
  const checks = ["skill","light","water","time","location","pets","size"];
  let score = 0;
  checks.forEach(k => { if (answers[k] && plant[k].includes(answers[k])) score++; });
  return Math.round((score / checks.length) * 100);
}

// ─── COMPONENTS ───────────────────────────────────────────────────────────────

function Navbar({ page, onHome }) {
  return (
    <nav className="navbar">
      <div className="navbar-logo" onClick={onHome}>
        <span>🌿</span>Plant<span className="accent">Match</span>
      </div>
      {page !== "home" && (
        <button className="pm-btn btn-ghost" onClick={onHome}>← Home</button>
      )}
    </nav>
  );
}

function HomePage({ onStart }) {
  return (
    <div>
      <section className="hero">
        <div className="blob b1"/><div className="blob b2"/><div className="blob b3"/>
        {[{top:"18%",left:"8%",d:"0s"},{top:"65%",left:"5%",d:"1.5s"},{top:"22%",right:"7%",d:"0.8s"},{top:"70%",right:"9%",d:"2s"}].map((s,i)=>(
          <div key={i} className="hero-leaf" style={{...s,animationDelay:s.d}}>
            {["🌿","🍃","🌱","🪴"][i]}
          </div>
        ))}
        <div className="hero-content">
          <p className="eyebrow">Your personal plant guide</p>
          <h1 className="hero-title">Find Your<br/><em>Perfect Plant</em></h1>
          <p className="hero-sub">Answer 7 quick questions about your lifestyle, space, and experience. We'll match you with plants that will actually thrive in your home.</p>
          <div className="cta-row">
            <button className="pm-btn btn-primary" onClick={onStart}>Take the Quiz →</button>
          </div>
        </div>
        <div className="hero-scroll"><span>scroll</span><span>↓</span></div>
      </section>

      <section className="about">
        <h2>How It Works</h2>
        <p>PlantMatch asks the right questions to pair you with plants that suit your real lifestyle — not just your wishlist.</p>
        <div className="about-cards">
          {[{icon:"📝",label:"Take the Quiz"},{icon:"🔍",label:"Get Matched"},{icon:"🌿",label:"Learn & Grow"},{icon:"❤️",label:"Save Favourites"}].map(c=>(
            <div key={c.label} className="about-card">
              <div className="about-card-icon">{c.icon}</div>
              <div className="about-card-label">{c.label}</div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

function QuizPage({ onComplete }) {
  const [step, setStep] = useState(0);
  const [answers, setAnswers] = useState({});
  const [key, setKey] = useState(0);

  const q = QUESTIONS[step];
  const sel = answers[q.id];

  const next = () => {
    if (!sel) return;
    if (step < QUESTIONS.length - 1) { setStep(s=>s+1); setKey(k=>k+1); }
    else onComplete(answers);
  };
  const back = () => { if (step>0){setStep(s=>s-1);setKey(k=>k+1);} };

  return (
    <div className="quiz-page">
      <div className="quiz-shell" key={key}>
        <div className="progress-bar">
          <div className="progress-fill" style={{width:`${((step+1)/QUESTIONS.length)*100}%`}}/>
        </div>
        <p className="step-label">Question {step+1} of {QUESTIONS.length}</p>
        <h2 className="question">{q.question}</h2>
        <p className="hint">{q.hint}</p>
        <div className="options">
          {q.options.map((o,i)=>(
            <div key={o.value} className={`option${sel===o.value?" sel":""}`}
              style={{animationDelay:`${i*0.07}s`}}
              onClick={()=>setAnswers(p=>({...p,[q.id]:o.value}))}>
              <div className="radio"><div className="radio-dot"/></div>
              <span className="opt-icon">{o.icon}</span>
              <span className="opt-text">{o.label}</span>
            </div>
          ))}
        </div>
        <div className="quiz-nav">
          <button className="pm-btn btn-ghost" onClick={back} style={{visibility:step===0?"hidden":"visible"}}>← Back</button>
          <span className="quiz-counter">{step+1} / {QUESTIONS.length}</span>
          <button className="pm-btn btn-primary" onClick={next}
            style={{opacity:sel?1:0.4,cursor:sel?"pointer":"not-allowed",padding:".75rem 2rem"}}>
            {step===QUESTIONS.length-1?"See Results →":"Next →"}
          </button>
        </div>
      </div>
    </div>
  );
}

function PlantPopup({ plant, match, onClose }) {
  return (
    <div className="overlay" onClick={onClose}>
      <div className="popup" onClick={e=>e.stopPropagation()}>
        <div className="popup-hero">
          <span>{plant.emoji}</span>
          <button className="close-btn" onClick={onClose}>✕</button>
          <div className="match-badge">⭐ {match}% match</div>
        </div>
        <div className="popup-body">
          <h2 className="popup-name">{plant.name}</h2>
          <p className="popup-latin">{plant.latin}</p>
          <p className="popup-desc">{plant.desc}</p>
          <div className="stats-grid">
            {[{icon:"💧",label:"Watering",val:plant.stats.water},{icon:"☀️",label:"Light",val:plant.stats.light},{icon:"💨",label:"Humidity",val:plant.stats.humidity},{icon:"🌡️",label:"Temperature",val:plant.stats.temp}].map(s=>(
              <div key={s.label} className="stat">
                <span className="stat-icon">{s.icon}</span>
                <div><div className="stat-label">{s.label}</div><div className="stat-val">{s.val}</div></div>
              </div>
            ))}
          </div>
          <h3 className="section-title">Care Guide</h3>
          <div className="care-steps">
            {plant.care.map((c,i)=>(
              <div key={i} className="care-step">
                <div className="care-num">{i+1}</div>
                <p className="care-text">{c}</p>
              </div>
            ))}
          </div>
          <div className="popup-tags">
            {plant.tags.map(t=><span key={t} className="tag">{t}</span>)}
          </div>
        </div>
      </div>
    </div>
  );
}

function ResultsPage({ answers, onRetake }) {
  const [popup, setPopup] = useState(null);
  const [filter, setFilter] = useState("all");

  const ranked = PLANTS
    .map(p=>({...p,match:scorePlant(p,answers)}))
    .sort((a,b)=>b.match-a.match);

  const filtered = ranked.filter(p => {
    if (filter==="all") return true;
    if (filter==="pet-safe") return p.pets.includes("yes");
    if (filter==="low light") return p.light.includes("low");
    if (filter==="low water") return p.water.includes("rarely");
    if (filter==="beginner") return p.skill.includes("beginner");
    return true;
  });

  return (
    <div className="results-page">
      <div className="results-header">
        <p className="eyebrow">Your personalised results</p>
        <h1 className="results-title">Your Plant <em>Matches</em></h1>
        <p className="results-sub">
          Ranked by compatibility — your top match is <strong>{ranked[0]?.name}</strong> at {ranked[0]?.match}%
        </p>
        <button className="retake" onClick={onRetake}>↩ Retake the quiz</button>
      </div>

      <div className="filter-bar">
        {["all","beginner","pet-safe","low light","low water"].map(f=>(
          <button key={f} className={`chip${filter===f?" active":""}`} onClick={()=>setFilter(f)}>{f}</button>
        ))}
      </div>

      <div className="grid">
        {filtered.map((plant,i)=>(
          <div key={plant.id} className="plant-card" style={{animationDelay:`${i*0.06}s`}} onClick={()=>setPopup(plant)}>
            <div className="card-img">{plant.emoji}</div>
            <div className="card-match">{plant.match}%</div>
            {filter==="all" && i<3 && <div className="card-rank">#{i+1}</div>}
            <div className="card-body">
              <div className="card-name">{plant.name}</div>
              <div className="card-latin">{plant.latin}</div>
              <div className="card-tags">{plant.tags.slice(0,2).map(t=><span key={t} className="tag">{t}</span>)}</div>
              <div className="card-icons">
                <div className="icon-item"><span>💧</span><span>{plant.stats.water.split(" ").slice(0,3).join(" ")}</span></div>
                <div className="icon-item"><span>☀️</span><span>{plant.stats.light.split(" ").slice(0,2).join(" ")}</span></div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {popup && <PlantPopup plant={popup} match={popup.match} onClose={()=>setPopup(null)}/>}
    </div>
  );
}

// ─── APP ──────────────────────────────────────────────────────────────────────

export default function App() {
  injectStyles();
  const [page, setPage] = useState("home");
  const [answers, setAnswers] = useState(null);

  return (
    <div>
      <Navbar page={page} onHome={()=>setPage("home")}/>
      {page==="home" && <HomePage onStart={()=>setPage("quiz")}/>}
      {page==="quiz" && <QuizPage onComplete={ans=>{setAnswers(ans);setPage("results");}}/>}
      {page==="results" && <ResultsPage answers={answers} onRetake={()=>setPage("quiz")}/>}
    </div>
  );
}
