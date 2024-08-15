import { GitHubIcon, LinkedInIcon, XIcon } from "@/components/icons";

export const RESUME_DATA = {
  name: "Phuriwat Angkoondittaphong",
  initials: "PA",
  location: "Bangkok, Thailand",
  locationLink: "https://www.google.com/maps/place/Bangkok/",
  about:
    "CS Student with background in Deep Learning",
  summary:
    "A computer science student undergrad who passionate in deep learning research. Currently, I'm focusing on low-budget deep active learning and hopefully someday I will learn category theory.",
  avatarUrl: "https://avatars.githubusercontent.com/u/55622586?s=400&v=4",
  personalWebsiteUrl: "https://google.com",
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
      // {
        // name: "X",
        // url: "https://x.com/BartoszJarocki",
        // icon: XIcon,
      // },
    ],
  },
  research:[
    {
      title: "Low-budget deep active learning on abnormally blink data set",
      company: "Faculty of ICT, Mahidol University",
      badges: ["Low-budget deep active learning", "Keypoint Localization"],
      description: 
        "Performed experiments on high frame rate videos of patients with abnormal blinking. Emphasized low-budget active learning on keypoint detection tasks using contrastive learning and sequence encoding. Aimed to reduce data that is required to be annotated by ophthalmologists."
    },
    {
      title: "Mosquito wing beat sound event detection",
      company: "Bremen Spatial Cognition Center at University of Bremen",
      badges: ["Polyphonic Sound Event Detection", "Mosquito Classification", "Noise-robust Sound Event Detection"],
      description: "Utilized mosquito wing beat sound to conduct experiments on a designed and implemented noise-robust sound event detection model. The model was trained on environmental noise, in which some portion had been overlayed realistically with mosquito’s wing beat sound, then predicted when and which species and sex of mosquitoes were present in the given audio."
    },
    {
      title: "Normal-Pressure Hydrocephalus (NPH) detection from CT scan images",
      company: "Faculty of ICT, Mahidol University",
      badges: ["Image segmentaion", "Weak supervision"],
      description: "Experimented on CT scans using segmentation and classification models to detect the brain disease. Designed a pipeline that can be trained using weakly supervised data, which does not require clinical annotation. The designed pipeline has more sensitivity than radiologist and thus could be used as a screening tool which reduce time for the physicians and the patients."
    },
    {
      title: "Foot pad dermatitis (FPD) severity identifier", 
      company: "Faculty of ICT, Mahidol University",
      badges: ["Image segmentaion", "Image classification"],
      description: "Designed a pipeline that receives duck feet images and identifies the severity of dermatitis in each foot. Maximized the accuracy by using ensemble technique and transfer learning."
    }
  ],
  education: [
    {
      school: "Faculty of ICT, Mahidol University",
      degree: "Bachelor's Degree in ICT, Major in Computer Science",
      start: "2020",
      end: "Present",
    },
  ],
  work: [
    {
      company: "BotNoi Group",
      link: "https://botnoigroup.com/",
      badges: ["Internship"],
      title: "Backend Developer Internship",
      start: "2020",
      end: "2021",
      description:
        "Implemented a general dashboard for the company's chat bots showing statistical information, such as the amount of active users, the amount of messages, user retention rate over a specific time period. Tech: Google Cloud Platform, Heroku, PostgraSQL, and MongoDB.",
    },
  ],
  publications: [
    {
      authors: "Songsaeng D, Nava-apisak P, Wongsripuemtet J, Kingchan S, Angkoondittaphong P, Phawaphutanon P, Supratak A",
      title: "The Diagnostic Accuracy of Artificial Intelligence in Radiological Markers of Normal-Pressure Hydrocephalus (NPH) on Non-Contrast CT Scans of the Brain",
      link: "https://www.mdpi.com/2075-4418/13/17/2840",
      badges: [
        "Medical Image Processing", "Normal Pressure Hydrocephalus", "Weak Supervision", "NPH Classification"
      ],
      description: "Published in Diagnostics",
    },
    {
      authors: "Supratak A, Kingchan S, Angkoondittaphong P, Nava-apisak P, Wongsripuemtet J, Noraset T, Kusakunniran W, Songsaeng D",
      title: "Normal Pressure Hydrocephalus Classification using Weakly-Supervised Local Feature Extraction Algorithm",
      link: undefined,
      badges: [
        "Medical Image Processing", "Normal Pressure Hydrocephalus", "Weak Supervision", "NPH Classification"
      ],
      description: "To be published in Artificial Intelligence in Medicine",
    }
  ],

  skills: [
    "Python",
    "TensorFlow",
    "Pytorch",
    "Machine Learning",
    "Sound Event Detection",
    "Image Classification",
    "Image Segmentation",
    "Deep Active Learning",
    
  ],
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
