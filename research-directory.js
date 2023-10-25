const data = [
    { name: "AI and machine learning", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/ai-and-machine-learning" },
    { name: "Computer Graphics and Animation", link: "" },
    { name: "crowdsourcing", link: "" },
    { name: "decision support systems", link: "" },
    { name: "digital content creation", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/digital-content-creation" },
    { name: "digital games", link: "" },
    { name: "digital libraries and archives", link: "" },
    { name: "driving simulators", link: "" },
    { name: "drones", link: "" },
    { name: "eye-tracking", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/eye-tracking" },
    { name: "haptics", link: "" },
    { name: "human-building interaction", link: "" },
    { name: "internet of things", link: "" },
    { name: "motion capture / tracking", link: "" },
    { name: "photogrammetry", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/photogrammetry" },
    { name: "physical computing", link: "" },
    { name: "projection mapping", link: "" },
    { name: "robotics", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/robotics" },
    { name: "Sensors", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/sensors" },
    { name: "social media", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/social-media" },
    { name: "software dev tools", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/software-dev-tools" },
    { name: "Spatial and Immersive Audio", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/spatial-and-immersive-audio" },
    { name: "Virtual and Augmented Reality", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/virtual-and-augmented-reality" },
    { name: "visualization", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/visualization" },
    { name: "voice assistants", link: "" },
    { name: "wearable computing", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/wearable-computing" },
    { name: "web and mobile apps", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/technology/web-and-mobile-apps" },
    { name: "case studies", link: "" },
    { name: "community engagement", link: "" },
    { name: "content analysis", link: "" },
    { name: "cross-cultural comparison", link: "" },
    { name: "Data Science", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/data-science" },
    { name: "ethnography", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/ethnography" },
    { name: "experiments", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/experiments" },
    { name: "field studies", link: "" },
    { name: "focus groups", link: "" },
    { name: "Historical and Archival Research", link: "" },
    { name: "human-centered design (HCD)", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/human-centered-design" },
    { name: "interviews", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/interviews" },
    { name: "lab studies", link: "" },
    { name: "movement research", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/movement-research" },
    { name: "observation", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/observation" },
    { name: "participatory design", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/participatory-design" },
    { name: "practice-based work", link: "" },
    { name: "psychophysical", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/psychophysical" },
    { name: "qualitative methods", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/qualitative-methods" },
    { name: "quantitative methods", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/quantitative-methods" },
    { name: "simulation", link: "" },
    { name: "speculative design", link: "" },
    { name: "surveys", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/surveys" },
    { name: "theory", link: "" },
    { name: "think-aloud", link: "" },
    { name: "Usability Evaluation", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/usability-evaluation" },
    { name: "UX and Interface Design", link: "" },
    { name: "architecture", link: "" },
    { name: "assistive tech", link: "" },
    { name: "communication", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/communication" },
    { name: "community building", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/community-building" },
    { name: "construction", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/construction" },
    { name: "creativity", link: "" },
    { name: "design", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/design" },
    { name: "History and Cultural Heritage", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/methods/historical-and-archival-research" },
    { name: "Education and Training", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/education-and-training" },
    { name: "engineering", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/engineering" },
    { name: "future of work", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/future-of-work" },
    { name: "gaming", link: "" },
    { name: "Health and Wellness", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/health-and-wellness" },
    { name: "humanities", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/humanities" },
    { name: "information systems", link: "" },
    { name: "infrastructure", link: "" },
    { name: "journalism", link: "" },
    { name: "Library and Information Science", link: "" },
    { name: "Linguistics and Language", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/linguistics-and-language" },
    { name: "manufacturing", link: "" },
    { name: "media", link: "" },
    { name: "Military", link: "" },
    { name: "Music and Sound", link: "" },
    { name: "outdoors", link: "" },
    { name: "Performing Arts", link: "" },
    { name: "Policy and Politics", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/policy-and-politics" },
    { name: "Race and Equity", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/race-and-equity" },
    { name: "search and rescue", link: "" },
    { name: "Security and Privacy", link: "https://hci.icat.vt.edu/content/hci_icat_vt_edu/en/tags.html?tag=hci_icat_vt_edu:hci-research-directory/application/security-and-privacy" },
    { name: "storytelling", link: "" },
    { name: "transportation", link: "" },
    { name: "visual arts", link: "" },
    { name: "Aaron Ansell", link: "https://hci.icat.vt.edu/research-directory/people/aaron-ansell.html" },
    { name: "Abby Walker", link: "https://hci.icat.vt.edu/research-directory/people/abby-walker.html" },
    { name: "Abiola Akanmu", link: "https://hci.icat.vt.edu/research-directory/people/abiola-akanmu.html" },
    { name: "Andrea Kavanaugh", link: "https://hci.icat.vt.edu/research-directory/people/andrea-kavanaugh.html" },
    { name: "Bo Ji", link: "https://hci.icat.vt.edu/research-directory/people/bo-ji.html" },
    { name: "Brendan David-John", link: "https://hci.icat.vt.edu/research-directory/people/brendan-david-john.html" },
    { name: "Brook Kennedy", link: "https://hci.icat.vt.edu/research-directory/people/brook-kennedy.html" },
    { name: "Carlos Evia", link: "https://hci.icat.vt.edu/research-directory/people/carlos-evia.html" },
    { name: "Chreston Miller", link: "https://hci.icat.vt.edu/research-directory/people/chreston-miller.html" },
    { name: "Chris Brown", link: "https://hci.icat.vt.edu/research-directory/people/chris-brown.html" },
    { name: "Corinne Guimont", link: "" },
    { name: "David Franusich", link: "" },
    { name: "David Hicks", link: "" },
    { name: "Dawei Zhou", link: "" },
    { name: "Doug Bowman", link: "" },
    { name: "Rafael Patrick", link: "" },
    { name: "Dylan Losey", link: "" },
    { name: "Ed Fox", link: "" },
    { name: "Ed Gitre", link: "" },
    { name: "Eiman Elgewely", link: "" },
    { name: "Eugenia Rho", link: "" },
    { name: "Farrokh Jazizadeh", link: "" },
    { name: "James D. Ivory", link: "" },
    { name: "Jerald Thomas", link: "" },
    { name: "Jessica Taylor", link: "" },
    { name: "Joe Gabbard", link: "" },
    { name: "Justin Perkinson", link: "" },
    { name: "Kurt Luther", link: "" },
    { name: "Meaghan A. Dee", link: "" },
    { name: "Meredith Drum", link: "" },
    { name: "Mike Horning", link: "" },
    { name: "Myounghoon Jeon", link: "" },
    { name: "Nathan Lau", link: "" },
    { name: "Nazila Roofigari-Esfahan", link: "" },
    { name: "Netta Gurari", link: "" },
    { name: "Nicholas F. Polys", link: "" },
    { name: "Patrick Finley", link: "" },
    { name: "Paul Quigley", link: "" },
    { name: "Philip Agee", link: "" },
    { name: "Qin Zhu", link: "" },
    { name: "Rebecca Faust", link: "" },
    { name: "Reza Barkhi", link: "" },
    { name: "Rodrigo Sarlo", link: "" },
    { name: "Ruichuan Zhang", link: "" },
    { name: "Sang Won Lee", link: "" },
    { name: "Scott McCrickard", link: "" },
    { name: "Shaddi Hasan", link: "" },
    { name: "Shahabedin Shahab", link: "" },
    { name: "Sol Lim", link: "" },
    { name: "Sunwook Kim", link: "" },
    { name: "Tanner Upthegrove", link: "" },
    { name: "Todd Ogle", link: "" },
    { name: "Xinghua Gao", link: "" },
    { name: "Yalong Yang", link: "" },
    { name: "Yan Chen", link: "" },
    { name: "Zach Duer", link: "" }
];