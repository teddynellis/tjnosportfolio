import { useState } from "react";
import { 
  Folder, 
  FileText, 
  ArrowLeft, 
  ArrowRight, 
  RotateCw, 
  Search,
  ExternalLink,
  BarChart3,
  Lightbulb
} from "lucide-react";

const PROJECTS = [
  {
    id: "route-relief",
    name: "Route Relief",
    title: "Route Relief: Deciphering the Invisible Drivers of Transit Chaos",
    description: "Construction isn't just a street-level inconvenience; it's a hidden driver of transit disruption. In dense urban environments like NYC and NJ, excavation and utility work are the root causes of systemic delays, reroutes, and commuter anxiety.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBzyfzLY87mlJk5KuycpBIBbNP7mJ4gjdZggfj2SHWxJVdR1y7_tagjFFrQgpcHDDYRxLyn9bnuEQZ7nYNN_p6F0RoIsScg8awP9GoNVr7P2-QPjEtvlr99jDncxeiYwTiCc_4-6IgBLvuOBJJL_kIislju_NhaHKjpy35Nm5qqQuspq01Wp0DqTeiGlj6VhC3OZCVhMMa4r1VyvyCj0irgu8TKio56-dgtuYdGN0e-RsQLbnSnATIjVNWst4GucFSCrrKvgzA7v7nT",
    caption: "Fig 1.1: Subsurface correlation visualization for the NYC transit grid.",
    sections: [
      {
        title: "01 / The Narrative Provocation",
        subtitle: "Deciphering the Invisible Drivers of Transit Chaos",
        content: "Headline: Route Relief— Deciphering the Invisible Drivers of Transit Chaos.\nPhilosophy: \"Construction isn't just a street-level inconvenience; it's a hidden driver of transit disruption. In dense urban environments like NYC and NJ, excavation and utility work are the root causes of systemic delays, reroutes, and commuter anxiety. We reimagined the transit app not as a mere tracker, but as a real-time translation layer that bridges the gap between construction activity and human decision-making.\""
      },
      {
        title: "02 / The Discovery Engine (The \"Zoom In\")",
        subtitle: "Macro-to-Micro Infrastructure Intelligence",
        content: "The Intent: The system is architected to focalize the \"Invisible City.\" We treat the sprawling urban transit network as the macro view, focalizing instantly when subsurface construction interferes with rail infrastructure.\n\nThe Experience: When a user encounters a delay, the interface performs a cinematic zoom—moving from a high-level transit map into a \"Dimensional Layer\" that explains the why. By focalizing on the specific utility exposure or structural risk causing the slowdown, we reward the \"Curious Wanderer\" with transparency, transforming a moment of frustration into one of informed control."
      },
      {
        title: "03 / Focal Recovery (The \"Snap Back\")",
        subtitle: "The Elastic Reset to Action",
        content: "The Logic: In a fast-paced transit environment, deep immersion must be balanced with asymmetrical pacing. While the \"Zoom\" provides the necessary context for a delay, the recovery must be instantaneous.\n\nThe Impact: We engineered an Elastic Reset that allows users to acknowledge the construction cause and immediately \"Snap Back\" to an actionable reroute. This focal recovery ensures that the commuter can transition from \"Information Gathering\" to \"Execution\" in under three taps, maintaining a streamlined flow that mirrors the high-velocity nature of NYC/NJ commutes."
      },
      {
        title: "04 / The Invisible Narrator (Progressive Disclosure)",
        subtitle: "Communicating through Infrastructure",
        content: "The Hierarchy: We utilized progressive disclosure to manage the cognitive load of complex construction data. Information is revealed in layers—from \"At-site clarity\" to \"Long-term transparency\"—ensuring the user is never overwhelmed.\n\nThe Narrative Bridge: By using strong, action-oriented typography and evocative visual cues (such as live project timelines and detour visualizations), we guide the user through the transit ecosystem. This \"Choreographed Guidance\" nudges the commuter toward the most efficient path, making the navigation feel like a natural extension of their journey rather than a technical hurdle."
      }
    ],
    glossary: {
      title: "The \"Glossary of Craft\"",
      items: [
        { term: "Subsurface Correlation", definition: "Describing how street-level excavation directly impacts the structural integrity and signal systems of rail corridors." },
        { term: "Dimensional Transparency", definition: "Providing commuters with the 'why' behind a delay by revealing the hidden interaction between utilities and transit." },
        { term: "Elastic Rerouting", definition: "The ability for the user to 'snap' from a point of disruption to a new, validated travel path instantly." },
        { term: "Cognitive Extension", definition: "Framing the app as a tool that reduces the 'active searching' required by commuters during unexpected cancellations." }
      ]
    },
    visualEnrichment: {
      title: "Visual Enrichment for your \"Deep & Rich\" Phase",
      content: "Based on your Sprint 9 goals, here is how you can apply your visual focus to the Route Relief identity:\n\nVisual Suggestion: For your Poster Design, use a minimalistic typeface that \"evokes the straightforward nature\" of the MTA while using \"minimalistic text\" to let the \"image be the draw\".\n\nThe \"Atmospheric\" Zoom: In your Figma Prototype, when a user taps a construction-affected station, use a depth-of-field effect (blurring the surrounding map) to make the \"Construction Cause\" card feel like it is physically moving closer to the user.\n\nSticker Identity: Ensure your \"lighthearted stickers\" reflect the \"identity of the city,\" creating a tactile brand experience that exists outside the digital screen."
    },
    techStack: "React 18, Tailwind CSS, Three.js, and Custom Shaders.",
    behanceUrl: "https://www.behance.net/gallery/248956963/Route-Relief-Train-App"
  },
  {
    id: "fringe-clouds",
    name: "Fringe in the Clouds",
    title: "The Fringe Cloud — Architecting the Invisible City",
    description: "The Edinburgh Fringe is an organism of 3,000 shows across 300 venues. It is a beautiful, overwhelming chaos. We didn't want to build just another map; we wanted to create a 'Cloud'—a digital layer that acts as a cognitive extension of the city itself.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuBHAVkuQ4NqqVGyi1HhK-CGYxmbu_mrZrl6G0kRyce2cSw2fK0LLekRYOQM3Z-KzcWAQgZx-9Sxmk16-Ljh2oACx7HZMxRSq7uNGe3fTKw1OetmJETNZJ1L3sXQmv0kU-oFq60wnzXDHk34vlFmo4i_1HzKun7Ki9Jg_-1XnzXv6oMMa7wVA_ljfE96UMRuy0wQfQH0bGa15o8pFRFU184mSe5wFJE_SgH8-QIyfWXRTAakrNAciFFrQlUtm7wyafRYKTDt5uZga8XT",
    caption: "Fig 2.1: Particle system representing global edge node distribution.",
    sections: [
      {
        title: "01 / The Narrative Provocation",
        subtitle: "Architecting the Invisible City",
        content: "Headline: The Fringe Cloud — Architecting the Invisible City.\nPhilosophy: \"The Edinburgh Fringe is an organism of 3,000 shows across 300 venues. It is a beautiful, overwhelming chaos. We didn't want to build just another map; we wanted to create a 'Cloud'—a digital layer that acts as a cognitive extension of the city itself. By streamlining the massive data of the festival into a fluid interface, we allow the user to stop being a 'tourist' and start being a 'participant' in the Fringe’s unfolding story.\""
      },
      {
        title: "02 / The Discovery Engine (The \"Zoom In\")",
        subtitle: "Macro-to-Micro Urbanism",
        content: "The Intent: We treated the city of Edinburgh as the \"Macro\" view. The interface is designed to focalize as the user moves from the \"Cloud\" (the high-level schedule) into the \"Core\" (the specific venue).\n\nThe Experience: When a user selects a show, the flow performs a cinematic zoom—moving from the sprawling geometry of the festival into the intimate specifics of a hidden venue. This creates a sensation of Digital Deep-Diving, where the complexity of the city expands to reveal the \"Granular Nuance\" of the performance. The user isn't just navigating a list; they are descending into a layer of the city that was previously hidden."
      },
      {
        title: "03 / Focal Recovery (The \"Snap Back\")",
        subtitle: "The Elastic Return to the Horizon",
        content: "The Logic: Because wandering the Fringe is an exhausting physical experience, the digital experience must be the opposite. After exploring a venue or a show’s details, the user requires an Elastic Reset.\n\nThe Impact: The return path is engineered for Instantaneous Orientation. A single gesture snaps the user back to the \"Cloud\" horizon. This high-velocity reset ensures that even when the user is physically lost in the winding Wynds of Edinburgh, their digital orientation remains anchored. It’s a \"Focal Recovery\" that turns the entire city back into a manageable, 2D plane."
      },
      {
        title: "04 / The Invisible Narrator (Progressive Disclosure)",
        subtitle: "Curating the Chaos",
        content: "The Hierarchy: We utilized progressive disclosure as a filter for the festival’s noise. The Fringe Cloud doesn't dump 3,000 shows on the screen; it \"nudges\" the user through a curated hierarchy of text and visual weight.\n\nThe Narrative Bridge: By using strong, action-oriented typography and rhythmic visual cues, we guide the \"Curious Wanderer\" toward sub-topics—such as nearby \"Street Events\" or \"Hidden Gems.\" The flow is choreographed to feel like a conversation with a local guide, where the next discovery is always just one intuitive zoom away."
      }
    ],
    glossary: {
      title: "The \"Glossary of Craft\"",
      items: [
        { term: "Urban Choreography", definition: "Describing how the digital flow mirrors the physical movement of people through the Royal Mile." },
        { term: "Cognitive Extension", definition: "Framing the app as a tool that 'thinks' for the user so they can spend more time enjoying the art." },
        { term: "Focal Horizon", definition: "The high-level 'Cloud' view that provides a constant sense of place within the chaotic festival schedule." },
        { term: "Dimensional Archive", definition: "Treating the internship data and show history as a deep-layered library the user can inhabit." }
      ]
    },
    visualEnrichment: {
      title: "Visual Enrichment for the \"Deep & Rich\" Phase",
      content: "Since this project involves the city of Edinburgh, your visual layer can lean heavily into Environmental Depth.\n\nVisual Suggestion: During the \"Zoom In,\" imagine the 2D map subtly tilting into a 3D isometric view of the streets. This sells the \"Macro-to-Micro\" logic perfectly.\n\nThe \"Fringe\" Atmosphere: Use a \"Digital Fog\" or soft lighting around the venues to mimic the atmospheric, often rainy, vibe of the city. This turns a \"UI map\" into a \"Cinematic Atmosphere.\"\n\nThe \"Snap\" Visual: When they reset to the horizon, the 3D buildings should \"flatten\" back into the cloud in one seamless, elastic motion."
    },
    techStack: "Next.js, WebGL, Rust/Wasm, and Framer Motion.",
    behanceUrl: "https://www.behance.net/gallery/243420935/The-Fringe-Cloud-Edinburgh-Internship-2025"
  },
  {
    id: "momentum",
    name: "Momentum",
    title: "anything else.",
    description: "Interaction design is often treated as a series of static states connected by fades. We approached this prototype as a study in kinetics. Our goal was to strip away the 'digital' feel and replace it with a sense of weight, momentum, and elasticity.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDQxhoEZte6vzfCvq5WSkzpkeO0kORY-_0o19XnfFiU64nMJPb5tMmLv9k105aKvXtYuFl0RygomCbjX8PWeM-5lUttvUiRHrPAabyR295Xr-gARn1Ooqu9voYESRR2s_9SElL1XrLM6qPFvhoMGFoXC11wz6Rx296G_3M8Hz4KsEwdwqpeT-N2Lshml3xWMdaUYGgDNqgI48mHMT_87DFS38_v6GjWMAtCJEwzxRQOOx9sYWQxjGC2-kmfDIvrs7BZqCftLK2r5gpe",
    caption: "Fig 3.1: The 'Flow' timeline interface with adaptive translucency.",
    sections: [
      {
        title: "01 / The Narrative Provocation",
        subtitle: "anything else.",
        content: "Headline: anything else.\nPhilosophy: \"Interaction design is often treated as a series of static states connected by fades. We approached this prototype as a study in kinetics. Our goal was to strip away the 'digital' feel and replace it with a sense of weight, momentum, and elasticity. We engineered a flow where the user doesn't just tap a screen; they set a system in motion—creating a bridge between human intent and machine response.\""
      },
      {
        title: "02 / The Discovery Engine (The \"Zoom In\")",
        subtitle: "Focalized Expansion",
        content: "The Intent: The prototype serves as a dynamic canvas. We wanted the 'Zoom In' to feel like a microscopic exploration of data.\n\nThe Experience: When the user interacts with an element, the interface doesn't just open; it focalizes. We choreographed a 'Macro-to-Micro' expansion where the information blooms from the point of contact. This cinematic expansion rewards the user's touch by revealing 'Granular Detail' that remains hidden in the high-level view. It’s an exercise in Progressive Immersivity, where the interface grows deeper as the user’s curiosity intensifies."
      },
      {
        title: "03 / Focal Recovery (The \"Snap Back\")",
        subtitle: "The Kinetic Reset",
        content: "The Logic: To prevent the fluidity of the zoom from feeling sluggish, we implemented a high-tension Elastic Reset.\n\nThe Impact: When the user exits a section, the 'Snap Back' provides a burst of Instantaneous Orientation. By utilizing an asymmetrical pacing—slow for the zoom, rapid for the return—we created a tactile 'Snap' that signals a successful reset. This focal recovery ensures that the prototype feels responsive and light, allowing the user to oscillate between detail and perspective without friction."
      },
      {
        title: "04 / The Invisible Narrator (Choreographed Direction)",
        subtitle: "The Logic of Proximity",
        content: "The Hierarchy: We used progressive disclosure not just to hide info, but to guide the eye through 'Visual Momentum'.\n\nThe Narrative Bridge: Through the use of strong text placement and high-contrast visuals, we created a silent path for the user to follow. The wording of sub-topics acts as a 'Nudge,' inviting the user to wander through the prototype’s capabilities. Every transition is a 'Choreographed Event' where the next logical step is highlighted through motion and weight, making the navigation feel like an intuitive dance rather than a manual task."
      }
    ],
    glossary: {
      title: "The \"Glossary of Craft\"",
      items: [
        { term: "Kinetic Architecture", definition: "Describing the app as a structure built on the laws of physics (gravity, inertia, elasticity)." },
        { term: "Tactile Fluidity", definition: "The sensation that the digital elements have a physical texture or 'grip' when the user interacts with them." },
        { term: "Bifurcated Motion", definition: "Describing the intentional split between the 'Discovery' speed (slow/fluid) and the 'Recovery' speed (fast/snappy)." },
        { term: "Negative Friction", definition: "A state where the interface is so streamlined that it actually pulls the user forward into discovery." }
      ]
    },
    visualEnrichment: {
      title: "Visual Enrichment for the \"Deep & Rich\" Phase",
      content: "Since this project is a 'pure' prototype, your visual layer should focus on Subtle Realism.\n\nVisual Suggestion: Implement Dynamic Shadows. As an element zooms in, its shadow should grow softer and larger, suggesting it is physically moving closer to the user’s eye.\n\nMaterial Feedback: Use Micro-Haptics (if possible) or visual 'shakes' and 'bounces' during the Snap Back. This sells the 'Elastic' feeling.\n\nChromatic Abberation: During the highest speed of the 'Snap,' a tiny bit of chromatic aberration (color splitting) on the edges of the boxes can make the motion feel more intense and 'tech-focused,' like the Tendril Alien study."
    },
    techStack: "SolidJS, GSAP, PixiJS, and Figma API Integration.",
    behanceUrl: "https://www.behance.net/gallery/214138819/Interaction-Design-Prototype"
  },
  {
    id: "snake-clouds",
    name: "Glippy Companion",
    title: "Glippy Companion: Engineering Discipline Through Digital Empathy",
    description: "Most financial tools treat impulse spending as a data point. We reimagined it as a biological consequence. By bridging the gap between digital transactions and emotional resonance, we created Glippy—a companion that transforms the user flow from a passive utility into a high-stakes narrative.",
    image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDq92Pbzs4NZa5K_Czggjns4P5W8qtC2OdT5cIiRRoIXCHcOnRBNN9meNJw2z8xuQIK-7da1gTH8cZJ5ljmTtLHv3e5HKgnuA0TJir1F6jnAlpaP8935JHjN5CcjoHUDoFim0x80h85Ya_L-d8IGenHOosXQgZ3JvspTcP0y9GWv8H8LIYlhwXVq2Lso027d1FIw3_oGt1JnkFH5yPNY3nAG_IHjQMgBx1F_LqjbdwGKViXb0stOXNVkUmPs7WXyiaIMMZwO204GncU",
    caption: "Fig 4.1: The 'Intimate Reality' of the Glippy companion's state.",
    sections: [
      {
        title: "01 / The Narrative Provocation",
        subtitle: "Engineering Discipline Through Digital Empathy",
        content: "Headline: Glippy — Engineering Discipline Through Digital Empathy.\nPhilosophy: \"Most financial tools treat impulse spending as a data point. We reimagined it as a biological consequence. By bridging the gap between digital transactions and emotional resonance, we created Glippy—a companion that transforms the user flow from a passive utility into a high-stakes narrative. We chose a path of radical streamlined efficiency so that the user’s only focus remains on the living, breathing impact of their financial choices.\""
      },
      {
        title: "02 / The Discovery Engine (The \"Zoom In\")",
        subtitle: "Macro-to-Micro Dimensionality",
        content: "The Intent: The Glippy interface is designed as a focalized ecosystem. At the macro level, the user manages their financial health with effortless precision. However, when an impulse trigger occurs, the flow is designed to focalize instantly on the companion.\n\nThe Experience: The transition acts as a cinematic zoom, moving from the abstract 'Perspective' of a bank statement into the 'Intimate Reality' of the companion’s state. As the information expands, the user descends into the sub-topics of their spending habits, guided by the visceral visual feedback of the companion’s health. This \"Zoom\" ensures the user isn't just looking at a screen; they are inhabiting the consequence."
      },
      {
        title: "03 / Focal Recovery (The \"Snap Back\")",
        subtitle: "The Elastic Reset",
        content: "The Logic: Because the \"Zoom In\" to the companion’s wounded state is intentionally heavy and immersive, we engineered a high-velocity return path. Once the user acknowledges the spending trigger and engages with the corrective flow, the interface provides an Elastic Reset.\n\nThe Impact: This \"Snap Back\" allows for Instantaneous Orientation. By providing a rapid return to the macro financial view, we ensure the user never feels \"trapped\" by the guilt-mechanic. Instead, the snap back acts as a focal recovery, placing the user back in a position of power and clarity, ready to make a more disciplined choice."
      },
      {
        title: "04 / The Invisible Narrator (Progressive Disclosure)",
        subtitle: "Choreographed Guidance",
        content: "The Hierarchy: We utilized progressive disclosure to navigate the user through the fallout of an impulse purchase. Rather than dumping all financial data at once, Glippy nudges the user through a series of \"Dimensional Layers.\"\n\nThe Narrative Bridge: Strong visuals of the companion’s distress act as the primary navigator, while strong, evocative copy guides the user toward sub-topics—such as spending categories or savings goals. By using text placement that rewards \"curious wandering\" within the app's history, we lead the user to discover why the companion is hurt, making the path to financial discipline feel like an intuitive personal journey rather than a forced lecture."
      }
    ],
    glossary: {
      title: "The \"Glossary of Craft\"",
      items: [
        { term: "Asymmetrical Pacing", definition: "The contrast between the jarring, slow 'descent' into the companion’s hurt state and the lightning-fast 'snap' back to the dashboard." },
        { term: "Dimensional Navigation", definition: "Treating Glippy not as an app icon, but as a layer that exists over and within the user's other financial tools." },
        { term: "Focalize", definition: "How the camera 'zooms' into the companion's eyes to induce empathy during a spending event." },
        { term: "Spatial Architecture", definition: "Building a UI where the companion feels like it has 'Ancestry' in the user's phone, moving between the background and the foreground based on the user's intent." }
      ]
    },
    visualEnrichment: {
      title: "Moving Toward the \"Rich & Deep\" Visuals",
      content: "As you move into your next phase, you can now apply the Atmospheric Perspective we discussed.\n\nVisual Suggestion: When the user \"Zooms\" into the wounded Glippy, consider a heavy Gaussian blur on the financial data behind it. This makes the companion feel \"closer\" to the user's face, increasing the emotional weight of the compositions.\n\nThe \"Snap\" Visual: When they hit return, use a motion blur that makes the companion seem to \"recede\" into the background of the phone, settling back into its home position with a slight, elastic overshoot."
    },
    techStack: "PyTorch, React-Three-Fiber, WebSocket, and Redis.",
    behanceUrl: "https://www.behance.net/gallery/225795039/Glippy-Companion-Tamagotchi"
  }
];

export function FileExplorer() {
  const [activeProjectId, setActiveProjectId] = useState(PROJECTS[0].id);
  // @ts-ignore
  const activeProject = PROJECTS.find(p => p.id === activeProjectId) || PROJECTS[0];

  return (
    <div className="flex flex-col h-full bg-white">
      {/* Explorer Toolbar */}
      <div className="h-10 bg-[#e0e3e6] border-b border-[#717784]/20 flex items-center px-4 gap-6 shrink-0">
        <div className="flex items-center gap-4 text-[#414752]">
          <button className="flex items-center gap-1 hover:text-[#005fac] transition-colors">
            <ArrowLeft size={18} />
            <span className="text-[13px] font-medium">Back</span>
          </button>
          <button className="flex items-center gap-1 hover:text-[#005fac] transition-colors opacity-50">
            <ArrowRight size={18} />
          </button>
          <RotateCw size={16} className="ml-2 cursor-pointer hover:rotate-180 transition-transform duration-500" />
        </div>
        
        <div className="flex-grow flex items-center bg-white rounded border border-[#c0c7d4] px-3 py-1 text-[#414752] text-[12px] shadow-[inset_0_1px_2px_rgba(0,0,0,0.05)]">
          <Folder size={14} className="mr-2 text-[#005fac]" />
          C:\Users\Teddy\Documents\Portfolio\Case_Studies\{activeProject.name.replace(/ /g, '_')}
        </div>

        <div className="w-48 flex items-center bg-white rounded border border-[#c0c7d4] px-3 py-1 text-[#717784] text-[12px]">
          <Search size={14} className="mr-2" />
          Search
        </div>
      </div>

      <div className="flex flex-grow overflow-hidden">
        {/* Sidebar */}
        <aside className="w-64 bg-[#eceef1] border-r border-[#c0c7d4]/30 flex flex-col shrink-0">
          <div className="p-4 space-y-6">
            <div>
              <h3 className="text-[11px] font-bold text-[#414752] uppercase tracking-widest mb-4">Projects</h3>
              <ul className="space-y-1">
                {PROJECTS.map((item) => {
                  const isActive = item.id === activeProjectId;
                  return (
                    <li key={item.id}>
                      <button 
                        onClick={() => setActiveProjectId(item.id)}
                        className={`w-full flex items-center gap-3 px-3 py-2 rounded-r-lg transition-all text-left ${
                          isActive 
                            ? 'bg-gradient-to-r from-[#005fac]/20 to-transparent border-l-4 border-[#005fac] text-[#005fac] font-bold' 
                            : 'hover:bg-[#e0e3e6] text-[#414752]'
                        }`}
                      >
                        <FileText size={16} />
                        <span className="text-[13px]">{item.name}</span>
                      </button>
                    </li>
                  );
                })}
              </ul>
            </div>

            <div>
              <h3 className="text-[11px] font-bold text-[#414752] uppercase tracking-widest mb-4">Categories</h3>
              <div className="flex flex-wrap gap-2">
                <span className="px-2 py-1 bg-[#d3e5f1] text-[#566771] rounded text-[10px] font-bold border border-[#b7c9d5]">UX DESIGN</span>
                <span className="px-2 py-1 bg-[#6afe9c] text-[#005228] rounded text-[10px] font-bold border border-[#4ae183]">RESEARCH</span>
                <span className="px-2 py-1 bg-[#e0e3e6] text-[#414752] rounded text-[10px] font-bold border border-[#c0c7d4]">URBAN TECH</span>
              </div>
            </div>
          </div>

          <div className="mt-auto p-4 bg-[#e0e3e6]/50 border-t border-[#c0c7d4]">
            <div className="flex items-center gap-2 mb-2">
              <RotateCw size={14} className="text-[#005fac] animate-spin" />
              <span className="text-[11px] font-bold text-[#191c1e]">Syncing...</span>
            </div>
            <div className="h-2 w-full bg-[#eceef1] rounded-full overflow-hidden border border-[#c0c7d4]/30">
              <div className="h-full w-2/3 bg-[#006d36] candy-cane-fill" />
            </div>
          </div>
        </aside>

        {/* Main Content Area */}
        <main className="flex-grow overflow-y-auto bg-white p-12 scroll-smooth" key={activeProjectId}>
          <div className="max-w-4xl mx-auto">
            {/* Editorial Header */}
            <header className="mb-12">
              <div className="flex items-center gap-4 mb-6">
                <div className="h-[1px] flex-grow bg-[#c0c7d4]" />
                <span className="text-[#005fac] font-bold italic tracking-tighter">2024 Case Study</span>
                <div className="h-[1px] flex-grow bg-[#c0c7d4]" />
              </div>
              <h1 className="text-5xl font-bold text-[#191c1e] mb-6 leading-tight">{activeProject.title}</h1>
              <p className="text-xl text-[#414752] leading-relaxed max-w-2xl">
                {activeProject.description}
              </p>
            </header>

            {/* Feature Image */}
            <div className="relative group mb-16 rounded-xl overflow-hidden shadow-2xl border border-[#c0c7d4]/30">
              <img 
                src={activeProject.image}
                alt={activeProject.name}
                className="w-full h-[400px] object-cover transition-transform duration-700 group-hover:scale-105"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/60 to-transparent">
                <p className="text-white italic text-[13px] opacity-90">{activeProject.caption}</p>
              </div>
            </div>

            {/* Structured Content */}
            <div className="space-y-20 mb-20">
              {activeProject.sections.map((section: any, idx: number) => (
                <div key={idx} className="grid grid-cols-1 md:grid-cols-[1fr_2fr] gap-8">
                  <div className="space-y-2">
                    <h2 className="text-xl font-black text-[#005fac] uppercase tracking-tighter italic">{section.title}</h2>
                    {section.subtitle && (
                      <p className="text-[12px] font-bold text-[#717784] uppercase tracking-widest">{section.subtitle}</p>
                    )}
                  </div>
                  <div className="space-y-4">
                    {section.content.split('\n\n').map((para: string, pIdx: number) => (
                      <p key={pIdx} className="text-[#414752] leading-relaxed text-lg italic first-letter:text-3xl first-letter:font-bold first-letter:mr-1 first-letter:float-left">
                        {para}
                      </p>
                    ))}
                  </div>
                </div>
              ))}
            </div>

            {/* Glossary Section */}
            {activeProject.glossary && (
              <div className="mb-20 p-10 bg-[#f8f9fa] border-2 border-dashed border-[#c0c7d4] rounded-3xl">
                <h2 className="text-3xl font-bold text-[#191c1e] mb-8">{activeProject.glossary.title}</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  {activeProject.glossary.items.map((item: any, idx: number) => (
                    <div key={idx} className="space-y-2">
                      <h4 className="font-bold text-[#005fac] text-lg underline decoration-wavy decoration-[#005fac]/30">{item.term}</h4>
                      <p className="text-[#414752] text-sm leading-relaxed">{item.definition}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Visual Enrichment */}
            {activeProject.visualEnrichment && (
              <div className="mb-20 space-y-6">
                <div className="flex items-center gap-4">
                  <h2 className="text-2xl font-bold text-[#191c1e]">{activeProject.visualEnrichment.title}</h2>
                  <div className="h-[1px] flex-grow bg-[#c0c7d4]" />
                </div>
                <div className="bg-gradient-to-br from-[#005fac] to-[#003d6d] p-10 rounded-3xl text-white shadow-2xl">
                   {activeProject.visualEnrichment.content.split('\n\n').map((para: string, pIdx: number) => (
                     <p key={pIdx} className="mb-4 last:mb-0 leading-relaxed font-medium opacity-90">
                       {para}
                     </p>
                   ))}
                </div>
              </div>
            )}

            {/* Call to Action */}
            <div className="bg-[#f2f4f7] rounded-2xl p-8 border border-[#c0c7d4] flex items-center justify-between">
              <div>
                <h3 className="text-xl font-bold text-[#191c1e] mb-2">Detailed Tech Stack</h3>
                <p className="text-[#414752] text-[13px]">{activeProject.techStack}</p>
              </div>
              <button 
                onClick={() => {
                  if (activeProject.behanceUrl && activeProject.behanceUrl !== "#") {
                    window.open(activeProject.behanceUrl, '_blank');
                  }
                }}
                className="bg-[#005fac] hover:bg-[#0078d7] text-white px-6 py-3 rounded-full font-bold shadow-lg transition-all scale-100 active:scale-95 flex items-center gap-2"
              >
                View Behance Page <ExternalLink size={18} />
              </button>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}
