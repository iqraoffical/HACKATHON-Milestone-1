// // Define Resume Object structure
// interface Resume {
//   name: string;
//   title: string;
//   email: string;
//   phone: string;
//   website: string;
//   education: string[];
//   experience: string[];
//   skills: string[];
// }

// // Resume data
// const resumeData: Resume = {
//   name: "Iqra",
//   title: "Full-Stack Web Developer",
//   email: "ABCDEF@gmail.com",
//   phone: "+123456789",
//   website: "https://ABCForexample.com",
//   education: [
//     "Diploma In Information Technology- XYZ University (2020-2024)",
//     "Certified:Web designing and Engineering Certificate(2022)",
//   ],
//   skills: ["HTML", "CSS", "JavaScript", "TypeScript", "React", "Node.js"],
//   experience: [
//     "Sublime Project Website (2022)",
//     "Herbal Products website(2024)",
//   ],
// };

// // Function to update resume info dynamically
// function updateResume(resume: Resume) {
//   document.getElementById("name")!.textContent = resume.name;
//   document.getElementById("title")!.textContent = resume.title;
//   document.getElementById("email")!.textContent = resume.email;
//   document.getElementById("phone")!.textContent = resume.phone;
//   document.getElementById("website")!.setAttribute("href", resume.website);
//   document.getElementById("website")!.textContent = resume.website;

//   const educationList = document.getElementById("education-list")!;
//   educationList.innerHTML = "";
//   resume.education.forEach((edu) => {
//     const li = document.createElement("li");
//     li.textContent = edu;
//     educationList.appendChild(li);
//   });
//   const skillsList = document.getElementById("skills-list")!;
//   skillsList.innerHTML = "";
//   resume.skills.forEach((skill) => {
//     const li = document.createElement("li");
//     li.textContent = skill;
//     skillsList.appendChild(li);
//   });

//   const experienceList = document.getElementById("experience-list")!;
//   experienceList.innerHTML = "";
//   resume.experience.forEach((exp) => {
//     const li = document.createElement("li");
//     li.textContent = exp;
//     experienceList.appendChild(li);
//   });
// }

// // Button click event to update resume info
// document.getElementById("updateResume")!.addEventListener("click", () => {
//   updateResume(resumeData);
// document.getElementById ("downloadResume") ! .addEventListener("click", () =>{
//   downloadResume (downloadResume)
// }
// });
// Import jsPDF for PDF generation (if you're using it via npm)
// import jsPDF from 'jspdf';

// Interface to define the structure of the form inputs
interface ResumeData {
  name: string;
  title: string;
  email: string;
  phone: string;
  website: string;
  education: string[];
  skills: string[];
  experience: string[];
}

// Get all input elements from the DOM
const nameInput = document.getElementById('name') as HTMLInputElement;
const titleInput = document.getElementById('title') as HTMLInputElement;
const emailInput = document.getElementById('email') as HTMLInputElement;
const phoneInput = document.getElementById('phone') as HTMLInputElement;
const websiteInput = document.getElementById('website') as HTMLInputElement;

// Get lists for education, skills, and experience
const educationList = document.getElementById('education-list') as HTMLUListElement;
const skillsList = document.getElementById('skills-list') as HTMLUListElement;
const experienceList = document.getElementById('experience-list') as HTMLUListElement;

// Get buttons
const updateResumeBtn = document.getElementById('updateResume') as HTMLButtonElement;
const downloadResumeBtn = document.getElementById('downloadResume') as HTMLButtonElement;

// Function to extract data from the form inputs
function getResumeData(): ResumeData {
  const education: string[] = Array.from(educationList.querySelectorAll('input')).map(input => input.value);
  const skills: string[] = Array.from(skillsList.querySelectorAll('input')).map(input => input.value);
  const experience: string[] = Array.from(experienceList.querySelectorAll('input')).map(input => input.value);

  return {
      name: nameInput.value,
      title: titleInput.value,
      email: emailInput.value,
      phone: phoneInput.value,
      website: websiteInput.value,
      education,
      skills,
      experience,
  };
}

// Function to update the resume with the inputted data
function updateResume(): void {
  const resumeData = getResumeData();

  // Update the text content in the HTML elements dynamically
  document.querySelector('h1')!.textContent = resumeData.name;
  document.querySelector('p')!.textContent = resumeData.title;

  // Update other sections (education, skills, experience) here if needed
  // You can loop through the arrays and update their corresponding elements
}

// Function to generate a PDF of the resume (optional: using jsPDF)
function downloadResumeAsPDF(): void {
  const resumeData = getResumeData();

  // Example using jsPDF (if installed)
  // const doc = new jsPDF();
  // doc.text(`Name: ${resumeData.name}`, 10, 10);
  // doc.text(`Title: ${resumeData.title}`, 10, 20);
  // doc.text(`Email: ${resumeData.email}`, 10, 30);
  // doc.text(`Phone: ${resumeData.phone}`, 10, 40);
  // doc.text(`Website: ${resumeData.website}`, 10, 50);

  // Save the generated PDF
  // doc.save('resume.pdf');
}

// Event Listeners for updating and downloading resume
updateResumeBtn.addEventListener('click', updateResume);
downloadResumeBtn.addEventListener('click', downloadResumeAsPDF);
