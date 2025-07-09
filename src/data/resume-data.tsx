import { GitHubIcon, LinkedInIcon, GoogleScholarIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Phuriwat Angkoondittaphong",
  initials: "PA",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok/",
  about:
    "A Researcher in Deep Learning.",
  summary:
    "A freshly graduate computer science student who passionate in expanding sets of knowledge in the world. \
    Currently, I'm working on federated learning on medical image.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55622586?s=400&v=4",
  contact: {
    email: "phuriwat.boat@gmail.com",
    tel: null,
    social: [
      {
        name: "GitHub",
        url: "https://github.com/ACitronella",
        icon: GitHubIcon,
      },
      {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/phuriwat-angkoondittaphong/",
        icon: LinkedInIcon,
      },
      {
        name: "Google Scholar",
        url: "https://scholar.google.com/citations?user=qhZU2FoAAAAJ",
        icon: GoogleScholarIcon,
      },
    ],
  },
  research:[
    {
      title: "Low-Budget Deep Active Learning on Eyelid Localization",
      company: "Faculty of Information and Communication Technology, Mahidol University",
      badges: ["Low-Budget Deep Active Learning", "Keypoint Localization"],
      description: 
        "Performed experiments on high frame rate videos of patients with abnormal blinking. My work emphasized on implement active learning algorithms in order to select representative data and aimed to reduce data required to be annotated by ophthalmologists."
    },
    {
      title: "Noise-Robust Mosquito Wingbeat Sound Event Detection",
      company: "Faculty of ICT, Mahidol University and BSCC, University of Bremen",
      badges: ["Polyphonic Sound Event Detection", "Mosquito Classification", "Noise-robust Sound Event Detection"],
      description: "Utilized mosquito wing beat sound to conduct experiments on a designed and implemented noise-robust sound event detection model. The model was trained on environmental noise, in which some portion had been overlayed realistically with mosquito’s wing beat sound, then predicted when and which species and sex of mosquitoes were present in the given audio."
    },
    {
      title: "Normal-Pressure Hydrocephalus (NPH) Detection",
      company: "Faculty of Information and Communication Technology, Mahidol University",
      badges: ["Image Segmentaion", "Weak Supervised Learning"],
      description: "Experimented on CT scans using segmentation and classification models to detect the brain disease. Designed a pipeline that can be trained using weakly supervised data, which does not require clinical annotation. The designed pipeline has more sensitivity than radiologist and thus could be used as a screening tool which reduce time for the physicians and the patients."
    },
    {
      title: "Foot Pad Dermatitis (FPD) Severity Identifier", 
      company: "Faculty of Information and Communication Technology, Mahidol University",
      badges: ["Image Segmentaion", "Image Classification"],
      description: "Designed a pipeline that receives duck feet images and identifies the severity of FPD in each foot. Maximized the accuracy by using ensemble technique and transfer learning."
    }
  ],
  education: [
    {
      faculty: "Faculty of Information and Communication Technology",
      school: "Mahidol University",
      degree: "Bachelor of Science in Information and Communication Technology",
      major: "Major in Computer Science (First Class Honours)",
      start: "2020",
      end: "2024",
      thesis_title: "MosWing: A Noise-Robust Mosquito Wingbeat Detection Model",
      thesis_advisor: "Asst. Prof. Dr. Akara Supratak",
      thesis_link: "documents/MUICT_SP2023_02_MosquitoSED.pdf",
      edu_link: "https://www.ict.mahidol.ac.th/",
      advisor_link: "https://akaraspt.github.io/"
    },
  ],
  works: [
    {
      company: "Faculty of Information and Communication Technology, Mahidol University", // Faculty of Information and Communication Technology, Mahidol University is too long
      link: "https://www.ict.mahidol.ac.th/",
      badges: [],
      title: "Research Assistant",
      start: "2024",
      end: "Now",
      description: "See more detail in Research Project.",
    },
    {
      company: "Faculty of Information and Communication Technology, Mahidol University", // Faculty of Information and Communication Technology, Mahidol University is too long
      link: "https://www.ict.mahidol.ac.th/",
      badges: [],
      title: "Student Research Assistant",
      start: "2021",
      end: "2024",
      description: "Worked on Low-Budget Deep Active Learning on Eyelid Localization, Noise-Robust Mosquito Wingbeat Sound Event Detection, Noise-Robust Mosquito Wingbeat Sound Event Detection, Foot Pad Dermatitis (FPD) Severity Identifier. See more detail in Research Project.",
    },
    {
      company: "BotNoi Group",
      link: "https://botnoigroup.com/",
      badges: [],
      title: "Backend Developer Internship",
      start: "2020",
      end: "2021",
      description:
        "Implemented a general dashboard for the company's chat bots showing statistical information, such as the amount of active users, the amount of messages, user retention rate over a specific time period.",
    },
  ],
  publications: [
    {
      authors: "Dittapong Songsaeng, Poonsuta Nava-apisak, Jittsupa Wongsripuemtet, Siripra Kingchan, Phuriwat Angkoondittaphong, Phattaranan Phawaphutanon, and Akara Supratak",
      title: "The Diagnostic Accuracy of Artificial Intelligence in Radiological Markers of Normal-Pressure Hydrocephalus (NPH) on Non-Contrast CT Scans of the Brain",
      link: "https://www.mdpi.com/2075-4418/13/17/2840",
      badges: [
        "Medical Image Processing", "Normal Pressure Hydrocephalus", "Weak Supervision", "NPH Classification"
      ],
      description: "Published in Diagnostics.",
    },
    {
      authors: "Akara Supratak, Siripra Kingchan, Phuriwat Angkoondittaphong, Poonsuta Nava-apisak, Jittsupa Wongsripuemtet, Thanapon Noraset, Worapan Kusakunniran, Peter Haddawy, and Dittapong Songsaeng",
      title: "Normal Pressure Hydrocephalus Classification using Weakly-Supervised Local Feature Extraction Algorithm",
      link: undefined,
      badges: [
        "Medical Image Processing", "Normal Pressure Hydrocephalus", "Weak Supervision", "NPH Classification"
      ],
      description: "Published in Computers in Biology and Medicine.",
    },
    {
      authors: "Akara Supratak, Phuriwat Angkoondittaphong, Napahatai Sittirit, Watsaporn Pornwatanacharoen, Pimkwan Jaru-ampornpan, and Thanapon Noraset",
      title: "A Long-Term Active Learning Framework for Eyelid Keypoint Detection in High-Frame-Rate Blinking Videos",
      link: "https://papers.ssrn.com/sol3/papers.cfm?abstract_id=5090626",
      badges: ["Active Learning", "Keypoint Detection", "High-Frame-Rate Videos", "Blink Analysis"],
      description: "Preprinted on SSRN.",
    }
  ],

  skills: [
    "Python",
    "TensorFlow",
    "Pytorch",
    "Deep Learning",
    "Image Classification",
    "Image Segmentation",
    "Sound Event Detection",
    "Deep Active Learning",
    "Federated Learning",
  ],

  presentations: [
    {
      title: "CAN'T IT TRAIN FASTER?",
      event: "Super AI Eng: Research Track Lightning Talk",
      authors: "Phuriwat Angkoondittaphong",
      badges: ["PyTorch", "Heterogeneous Computing"],
      description: "General tips and trick for using CPUs and GPUs for training deep learning model effieciently.",
      slide_link: "https://docs.google.com/presentation/d/1Rtwgy13bx2I4iOff5jSOyyXWRFKk6aX2MXoLi2Toej4/edit?usp=sharing",
      event_link: "https://superai.aiat.or.th/",
      date: "7 May 2025"
    },
    {
      title: "MosWing: a Noise-Robust Mosquito Wingbeat Detection Model",
      event: "Young Raising Star of Science 2024 in STT50",
      authors: "Phuriwat Angkoondittaphong, Napahatai Sittirit, Danaidech Ardsamai, Akara Supratak",
      badges: ["Polyphonic Sound Event Detection", "Mosquito Classification", "Noise-robust Sound Event Detection"],
      description: "More detail in Noise-Robust Mosquito Wingbeat Sound Event Detection in Research Project section.",
      slide_link: "presentations/yrss24/YRSS - slides.pdf",
      event_link: "https://stt50.scisoc.or.th/",
      date: "26 Nov 2024"
    },
    {
      title: "Finding Semantic-preserved Representation of Knowledge in Description Logic Ontologies: Preliminary Results in RiceDO and TreatO",
      event: "JAIST-Thai Symposium 2024 Toward Next Generation Generative AI and Beyond",
      authors: "Phuriwat Angkoondittaphong, ReaLearn Lab",
      badges: ["Representation Learning", "Hierachy Aware Knowledge Base Embedding"],
      description: "An attempt for apply Embed2Reason (E2R), which is designed for embed knowledge base ALC into vector space, on RiceDO and TreatO which are EL Ontologies.",
      slide_link: "presentations/jaist/workshop_quantum_emb_thaiweek.pdf",
      event_link: "https://www.jaist.ac.jp/event/jaist-thai-week/2024/",
      date: "13 Sep 2024"
    },
  ],
  articles: [
    {
      title: "วิธีคร็อปรูปขั้นเทพ(?) ด้วยคณิตศาสตร์",
      platform: "เพจเฟสบุ๊ค คณิตศาสตร์อย่างที่ควรจะเป็น",
      article_link: "https://mathasitis.ghost.io/seam-carving/",
      platform_link: "https://www.facebook.com/mathasitis",
      badges: ["Seam Carving"],
      date: "10 May 2025",
    },
    {
      title: "คอมพิวเตอร์สุ่มเลขไม่เป็น",
      platform: "เพจเฟสบุ๊ค คณิตศาสตร์อย่างที่ควรจะเป็น",
      article_link: "https://mathasitis.ghost.io/how-computer-random/",
      platform_link: "https://www.facebook.com/mathasitis",
      badges: ["Random Number Generator"],
      date: "21 Feb 2025",
    },
    {
      title: "Who said Python is easy? (The Importance of Type Hinting in Python Programming)",
      platform: "Medium",
      article_link: "https://medium.com/@acitronella/who-said-python-is-easy-the-importance-of-type-hinting-in-python-programming-33457e2e95cd",
      platform_link: "https://medium.com/",
      badges: ["Python", "Type Hinting"],
      date: "10 May 2023",
      
    }
  ]
  // projects: [
    // {
      // title: "88SandBox Line LIFF",
      // techStack: [
        // "React.JS",
        // "TypeScript",
        // "PostgeSQL",
        // "Line LIFF",
        // "Heroku",
        // "GCP",
      // ],
      // description: "Implemented Line LIFF for 88Sandbox's event.",
      
    // },
    // {
      // title: "TEDx Mahidol University 2024",
      // techStack: [

      // ],
      // description: "Developed web application for TEDx Mahidol.",
      
    // }
  // ],
} as const;
