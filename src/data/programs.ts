import programMlt from "@/assets/program-mlt.jpg";
import programRadiology from "../assets/program-radiology.webp";
import programCardiac from "@/assets/program-cardiac.jpg";
import programDialysis from "@/assets/program-dialysis.jpg";
import programOt from "../assets/program-ot.webp";
import programEmergency from "@/assets/program-emergency.png";

export interface Program {
  slug: string;
  title: string;
  duration: string;
  type: string;
  image: string;
  description: string;
  details: {
    overview: string;
    eligibility: string;
    career: string[];
    subjects: string[];
  };
}

export const programs: Program[] = [
  {
    slug: "bsc-medical-laboratory-technology",
    title: "BSc Medical Laboratory Technology",
    duration: "3 Years",
    type: "BSc",
    image: programMlt,
    description:
      "Hands-on training in pathology, microbiology, biochemistry, and diagnostic testing for modern clinical laboratories.",
    details: {
      overview:
        "The BSc Medical Laboratory Technology program prepares students to support accurate diagnosis through clinical testing and laboratory analysis. The course combines theory, lab practice, and hospital exposure so students become confident with sample processing, quality standards, and modern diagnostic workflows.",
      eligibility:
        "10+2 with Physics, Chemistry, and Biology from a recognized board. Science stream is preferred.",
      career: [
        "Medical Laboratory Technologist",
        "Pathology Lab Technician",
        "Microbiology Lab Assistant",
        "Blood Bank Technologist",
        "Quality Control Executive",
        "Diagnostic Centre Supervisor",
      ],
      subjects: [
        "Human Anatomy and Physiology",
        "Clinical Biochemistry",
        "Microbiology",
        "Hematology",
        "Histopathology",
        "Immunology and Serology",
        "Clinical Pathology",
        "Laboratory Management",
      ],
    },
  },
  {
    slug: "bsc-radiology-imaging-technology",
    title: "BSc Radiology and Imaging Technology",
    duration: "3 Years",
    type: "BSc",
    image: programRadiology,
    description:
      "Career-focused preparation in X-ray, CT, MRI, and imaging procedures with real clinical exposure.",
    details: {
      overview:
        "This program trains students to work with diagnostic imaging systems used across hospitals and scan centres. Students learn patient positioning, image acquisition, radiation safety, and equipment handling through a balanced mix of classroom learning and supervised practical training.",
      eligibility:
        "10+2 with Physics, Chemistry, and Biology or Mathematics from a recognized board.",
      career: [
        "Radiology Technologist",
        "X-ray Technician",
        "CT Scan Technician",
        "MRI Technologist",
        "Imaging Centre Executive",
        "Radiology Department Assistant",
      ],
      subjects: [
        "Radiographic Physics",
        "Human Anatomy and Physiology",
        "X-ray Techniques",
        "CT Imaging",
        "MRI Basics",
        "Ultrasound Principles",
        "Radiation Protection",
        "Digital Imaging Systems",
      ],
    },
  },
  {
    slug: "bsc-cardiac-care-technology",
    title: "BSc Cardiac Care Technology",
    duration: "3 Years",
    type: "BSc",
    image: programCardiac,
    description:
      "Specialized learning in cardiac diagnostics, ECG, echo, cath lab support, and critical monitoring.",
    details: {
      overview:
        "The Cardiac Care Technology program builds the clinical and technical skills needed in cardiology departments and critical care settings. Students gain practical knowledge in cardiovascular assessment, diagnostic procedures, and patient monitoring used in both emergency and routine cardiac care.",
      eligibility:
        "10+2 with Physics, Chemistry, and Biology from a recognized board.",
      career: [
        "Cardiac Care Technologist",
        "ECG Technician",
        "Echocardiography Assistant",
        "Cath Lab Technician",
        "ICU Monitoring Technician",
        "Cardiology Department Assistant",
      ],
      subjects: [
        "Cardiovascular Anatomy",
        "Electrocardiography",
        "Echocardiography",
        "Cardiac Catheterization Support",
        "Critical Care Monitoring",
        "Pharmacology Basics",
        "Medical Ethics",
        "Cardiac Emergency Care",
      ],
    },
  },
  {
    slug: "bsc-dialysis-technology",
    title: "BSc Dialysis Technology",
    duration: "3 Years",
    type: "BSc",
    image: programDialysis,
    description:
      "Professional training in renal care, dialysis procedures, machine handling, and patient monitoring.",
    details: {
      overview:
        "This program is designed for students who want to work in nephrology units and dialysis centres. The course covers kidney-related disorders, dialysis equipment, infection control, and patient care during pre-dialysis, intra-dialysis, and post-dialysis stages.",
      eligibility:
        "10+2 with Physics, Chemistry, and Biology from a recognized board.",
      career: [
        "Dialysis Technologist",
        "Hemodialysis Technician",
        "Renal Care Assistant",
        "Nephrology Unit Technician",
        "Dialysis Centre Coordinator",
        "Patient Care Executive",
      ],
      subjects: [
        "Renal Anatomy and Physiology",
        "Principles of Dialysis",
        "Dialysis Equipment Handling",
        "Water Treatment Systems",
        "Infection Control",
        "Patient Monitoring",
        "Emergency Procedures in Dialysis",
        "Nephrology Basics",
      ],
    },
  },
  {
    slug: "bsc-operation-theatre-technology",
    title: "BSc Operation Theatre Technology",
    duration: "3 Years",
    type: "BSc",
    image: programOt,
    description:
      "Operating room training focused on surgical assistance, sterile technique, instrumentation, and theatre management.",
    details: {
      overview:
        "The Operation Theatre Technology program prepares students to assist surgical teams before, during, and after procedures. It emphasizes operation theatre protocols, sterilization, surgical instruments, anesthesia support, and coordinated patient handling in high-pressure clinical environments.",
      eligibility:
        "10+2 with Physics, Chemistry, and Biology from a recognized board.",
      career: [
        "Operation Theatre Technologist",
        "Surgical Assistant",
        "Anesthesia Assistant",
        "OT Sterilization Technician",
        "Recovery Room Assistant",
        "Theatre Operations Coordinator",
      ],
      subjects: [
        "Surgical Instruments and Equipment",
        "Sterilization Techniques",
        "Operation Theatre Procedures",
        "Anesthesia Technology Basics",
        "Infection Prevention",
        "Patient Positioning",
        "Postoperative Care",
        "Hospital OT Management",
      ],
    },
  },
  {
    slug: "diploma-emergency-care-technology",
    title: "Diploma in Emergency Care Technology",
    duration: "2 Years",
    type: "Diploma",
    image: programEmergency,
    description:
      "Fast-paced emergency medicine support training in trauma response, first aid, triage, and ambulance care.",
    details: {
      overview:
        "This diploma program builds the practical skills required to support emergency departments, trauma units, and ambulance services. Students learn rapid assessment, life-saving basics, communication under pressure, and frontline patient support for urgent medical situations.",
      eligibility:
        "10+2 from a recognized board. Science background is preferred.",
      career: [
        "Emergency Care Technician",
        "Trauma Care Assistant",
        "Ambulance Technician",
        "Emergency Ward Assistant",
        "First Response Support Staff",
        "Disaster Response Assistant",
      ],
      subjects: [
        "Basic Life Support",
        "Trauma Management",
        "Emergency Pharmacology Basics",
        "Patient Triage",
        "Ambulance and Pre-Hospital Care",
        "Disaster Management",
        "Emergency Documentation",
        "Infection Control",
      ],
    },
  },
];
