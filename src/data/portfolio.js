export const personalInfo = {
  name: 'Eyuel Cherenet',
  taglines: ['Software Developer','Problem Solver','Cisco Certified','Network Engineer','Full-Stack Learner'],
  bio: "I'm a 21-year-old IT student with a deep passion for software development, networking, and cybersecurity. I love turning complex problems into elegant solutions.",
  email: 'joelcherenet@gmail.com',
  phone: '+251 905 109 193',
  location: 'Addis Ababa, Ethiopia',
  age: 21,
  availability: 'Open to Opportunities',
  social: {
    github: 'https://github.com/eyueljoel',
    linkedin: 'https://www.linkedin.com/in/eyuel-cherenet-82b000412',
    telegram: 'https://t.me/YOELyehu',
    facebook: 'https://facebook.com/eyuelcherenet',
  },
  cvUrl: '/Eyuel_Cherenet_CV.pdf',
}

export const aboutCards = [
  { icon: 'GraduationCap', title: 'IT Student', description: 'Pursuing a B.Sc. in Information Technology with focus on software engineering and networking.', color: 'blue' },
  { icon: 'Shield', title: 'Cisco Certified', description: 'Completed CCNA certification covering routing, switching, and network fundamentals.', color: 'purple' },
  { icon: 'Code2', title: 'Developer', description: 'Building real-world projects in C++, Java, and web technologies with clean, efficient code.', color: 'indigo' },
  { icon: 'Target', title: 'Problem Solver', description: 'Passionate about algorithmic thinking, data structures, and finding creative solutions.', color: 'violet' },
]

export const skills = {
  programming: [
    { name: 'C++', level: 85, icon: '⚡' }, { name: 'C', level: 80, icon: '🔧' },
    { name: 'Java', level: 75, icon: '☕' }, { name: 'JavaScript', level: 70, icon: '🌐' },
    { name: 'HTML & CSS', level: 88, icon: '🎨' },
  ],
  networking: [
    { name: 'CCNA Fundamentals', level: 90, icon: '🌐' }, { name: 'Subnetting', level: 85, icon: '🔢' },
    { name: 'Routing Protocols', level: 80, icon: '🔀' }, { name: 'Switching', level: 78, icon: '🔌' },
    { name: 'Network Security', level: 72, icon: '🛡️' },
  ],
  databases: [
    { name: 'MySQL', level: 75, icon: '🗄️' }, { name: 'SQLite', level: 70, icon: '📦' },
    { name: 'Database Design', level: 72, icon: '📐' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 82, icon: '🐙' }, { name: 'VS Code', level: 90, icon: '💻' },
    { name: 'Cisco Packet Tracer', level: 88, icon: '📡' }, { name: 'Linux', level: 65, icon: '🐧' },
  ],
  soft: [
    { name: 'Teamwork', level: 92, icon: '🤝' }, { name: 'Communication', level: 88, icon: '💬' },
    { name: 'Leadership', level: 80, icon: '🎯' }, { name: 'Fast Learner', level: 95, icon: '🚀' },
    { name: 'Problem Solving', level: 90, icon: '🧩' },
  ],
}

export const projects = [
  { id:1, title:'CCNA Network Lab', category:'networking', description:'Comprehensive Cisco CCNA lab simulations covering VLANs, OSPF, EIGRP, ACLs, and network security using Packet Tracer.', tech:['Cisco Packet Tracer','OSPF','EIGRP','VLANs','ACLs'], github:'https://github.com/eyueljoel', demo:null, featured:true, color:'blue' },
  { id:2, title:'Inventory Management System', category:'cpp', description:'Full-featured inventory system in C++ with file I/O, CRUD operations, search/filter, and a clean console UI.', tech:['C++','File I/O','OOP','Data Structures'], github:'https://github.com/eyueljoel', demo:null, featured:true, color:'purple' },
  { id:3, title:'Smart Library Management', category:'cpp', description:'Library system with book tracking, member management, borrowing/return, and overdue fine calculation in C++.', tech:['C++','OOP','Linked Lists','File Handling'], github:'https://github.com/eyueljoel', demo:null, featured:false, color:'indigo' },
  { id:4, title:'Cryptography Project', category:'security', description:'Implementation of Caesar cipher, Vigenère cipher, and RSA encryption/decryption algorithms in C++.', tech:['C++','Cryptography','Algorithms','Mathematics'], github:'https://github.com/eyueljoel', demo:null, featured:true, color:'violet' },
  { id:5, title:'Wi-Fi Indoor Navigation', category:'research', description:'Wi-Fi positioning system for indoor navigation using RSSI fingerprinting and trilateration algorithms.', tech:['Python','Wi-Fi RSSI','Trilateration','Machine Learning'], github:'https://github.com/eyueljoel', demo:null, featured:true, color:'green' },
  { id:6, title:'Portfolio Website', category:'web', description:'This portfolio — built with React and Tailwind CSS featuring dark mode, AOS animations, and glassmorphism design.', tech:['React','Tailwind CSS','Vite','Supabase'], github:'https://github.com/eyueljoel', demo:'#', featured:true, color:'blue' },
]

export const projectCategories = [
  { id:'all', label:'All Projects' }, { id:'web', label:'Web Dev' },
  { id:'cpp', label:'C++ Projects' }, { id:'networking', label:'Networking' },
  { id:'security', label:'Security' }, { id:'research', label:'Research' },
]

export const timeline = [
  { year:'2023 – Present', title:'B.Sc. Information Technology', organization:'University — Ethiopia', description:'Studying software engineering, networking, databases, algorithms, and cybersecurity.', type:'education', icon:'GraduationCap', tags:['Software Engineering','Networking','Databases','Algorithms'] },
  { year:'2024', title:'Cisco CCNA Certification', organization:'Cisco Networking Academy', description:'Completed CCNA covering network fundamentals, routing & switching, IP connectivity, and network security.', type:'certification', icon:'Award', tags:['CCNA','Routing','Switching','Network Security'] },
  { year:'2024', title:'Advanced C++ Programming', organization:'Self-Study & University', description:'Deep-dived into OOP, data structures, algorithms, and system-level programming.', type:'learning', icon:'Code2', tags:['C++','OOP','Data Structures','Algorithms'] },
  { year:'2024', title:'Web Development Journey', organization:'Self-Study', description:'Learned HTML, CSS, JavaScript, and React. Built multiple projects including this portfolio.', type:'learning', icon:'Globe', tags:['HTML','CSS','JavaScript','React'] },
  { year:'2023', title:'Started IT Journey', organization:'University Enrollment', description:'Began formal education in IT, discovering passion for software development and networking.', type:'milestone', icon:'Rocket', tags:['IT Fundamentals','Programming Basics','Networking Basics'] },
]

export const services = [
  { icon:'Globe', title:'Web Development', description:'Building responsive, modern websites using React, HTML, CSS, and JavaScript.', color:'blue', features:['Responsive Design','React Applications','Modern UI/UX','Performance Optimization'] },
  { icon:'Network', title:'Network Configuration', description:'Designing and configuring VLANs, routing protocols, and security policies using Cisco tools.', color:'purple', features:['VLAN Setup','Routing Protocols','Network Security','Troubleshooting'] },
  { icon:'Palette', title:'UI/UX Design', description:'Creating clean, intuitive interfaces with modern design principles.', color:'indigo', features:['Wireframing','Prototyping','Design Systems','Accessibility'] },
  { icon:'BookOpen', title:'Programming Tutoring', description:'Teaching C, C++, Java, and web technologies to beginners and intermediate learners.', color:'violet', features:['C/C++ Basics','OOP Concepts','Algorithm Design','Code Review'] },
  { icon:'Database', title:'Database Design', description:'Designing efficient schemas, writing optimized SQL queries, and implementing data solutions.', color:'green', features:['Schema Design','SQL Queries','Normalization','Data Modeling'] },
  { icon:'Shield', title:'Cybersecurity Basics', description:'Implementing security measures, network hardening, and cybersecurity best practices.', color:'orange', features:['Network Hardening','Security Audits','Best Practices','Threat Analysis'] },
]

export const testimonials = [
  { name:'Prof. Abebe Tadesse', role:'IT Department Head', organization:'University', avatar:'AT', text:'Eyuel is one of the most dedicated students I have taught. His ability to grasp complex networking concepts and apply them practically is remarkable.', rating:5, color:'blue' },
  { name:'Dawit Haile', role:'Senior Software Engineer', organization:'Tech Company', avatar:'DH', text:'Working with Eyuel was a great experience. He brings fresh ideas, learns incredibly fast, and writes clean, well-structured code. A true problem solver.', rating:5, color:'purple' },
  { name:'Sara Bekele', role:'Classmate & Study Partner', organization:'University', avatar:'SB', text:'Eyuel has an exceptional ability to explain difficult concepts clearly. He helped our entire study group understand networking and C++ programming.', rating:5, color:'indigo' },
]

export const stats = [
  { value:6, suffix:'+', label:'Projects Completed', icon:'FolderOpen' },
  { value:15, suffix:'+', label:'Technologies Learned', icon:'Code2' },
  { value:2, suffix:'', label:'Certifications', icon:'Award' },
  { value:500, suffix:'+', label:'Coding Hours', icon:'Clock' },
]

export const blogPosts = [
  { id:1, title:'Understanding OSPF Routing Protocol', excerpt:'A deep dive into how OSPF works, its areas, LSAs, and how to configure it on Cisco routers.', date:'May 2025', readTime:'5 min read', category:'Networking', tags:['OSPF','Cisco','Routing'], color:'blue' },
  { id:2, title:'C++ OOP: From Basics to Advanced', excerpt:'Exploring OOP in C++ — classes, inheritance, polymorphism, and design patterns.', date:'April 2025', readTime:'8 min read', category:'Programming', tags:['C++','OOP','Design Patterns'], color:'purple' },
  { id:3, title:'Getting Started with React', excerpt:'My journey learning React — components, hooks, state management, and building my first real app.', date:'March 2025', readTime:'6 min read', category:'Web Dev', tags:['React','JavaScript','Frontend'], color:'indigo' },
]
