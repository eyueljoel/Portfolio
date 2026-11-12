export const profile = {
  name: 'Eyuel Cherenet',
  title: 'Software Developer | Full-Stack Web | ERP & Business Systems',
  headline: 'Building web applications, ERP systems and digital solutions that make business operations simpler.',
  taglines: [
    'Software Developer',
    'Laravel & PHP Developer',
    'ERP & HR Systems Builder',
    'Full-Stack React Developer',
  ],
  bio: 'IT student at Haramaya University and aspiring software developer with hands-on experience developing web applications, ERP systems, HR & payroll management modules, and business process automation.',
  email: 'joelcherenet@gmail.com',
  phone: '+251 905 109 193',
  location: 'Ethiopia',
  timezone: 'EAT (UTC+3)',
  availability: 'Open to internships & junior roles',
  cvUrl: '/Eyuel_Cherenet_CV.pdf',
  stackStrip: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'React', 'Node.js', 'Express', 'Git', 'Linux', 'Flutter'],
  heroScene: {
    colors: {
      core: '#6366f1',
      coreEmissive: '#4338ca',
      shell: '#22d3ee',
      particles: '#a5b4fc',
      orbit: '#22d3ee',
      keyLight: '#c084fc',
      fillLight: '#22d3ee',
    },
  },
  ccnaCertified: false, // Set to true when the official CCNA certification is held
  social: {
    github: 'https://github.com/eyueljoel',
    linkedin: 'https://www.linkedin.com/in/eyuel-cherenet-82b000412',
    telegram: 'https://t.me/YOELyehu',
    instagram: 'https://instagram.com/joel_chosen',
    facebook: 'https://facebook.com/eyuelcherenet',
  },
}

// Backward-compatibility alias
export const personalInfo = profile

export const aboutCards = [
  {
    icon: 'GraduationCap',
    title: 'Haramaya University',
    description: 'Pursuing B.Sc. in Information Technology (2023 – Present) with coursework in software engineering, database systems, and networking.',
    color: 'blue',
  },
  {
    icon: 'Briefcase',
    title: 'Tewos Company Intern',
    description: 'Completed software developer internship contributing to production HR & Payroll ERP modules, payroll calculation, and team Git workflows.',
    color: 'purple',
  },
  {
    icon: 'Layers',
    title: 'Full-Stack & ERP',
    description: 'Practical backend and frontend development using Laravel, PHP, MySQL, React, Node.js, and RESTful API integrations.',
    color: 'indigo',
  },
  {
    icon: 'Shield',
    title: 'Networking Coursework',
    description: 'Completed Cisco Networking Academy: Introduction to Networks (CCNA v7 ITN) covering routing, subnetting, and switching fundamentals.',
    color: 'violet',
  },
]

export const experience = [
  {
    period: 'June 29, 2024 – August 29, 2024',
    role: 'Software Developer Intern',
    company: 'Tewos Company',
    location: 'Ethiopia',
    description: 'Collaborative software development internship focusing on enterprise web applications, HR & Payroll ERP modules, and client systems.',
    responsibilities: [
      'Contributed to the development and enhancement of an HR and Payroll Management System using Laravel, PHP, and MySQL.',
      'Worked on payroll processing logic, employee record management, and department workflows.',
      'Investigated and resolved bugs across existing ERP modules, collaborating through Git and GitHub.',
      'Participated in restaurant POS and e-commerce application development tasks.',
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Git', 'REST APIs'],
  },
]

export const timeline = [
  {
    year: 'June 2024 – Aug 2024',
    title: 'Software Developer Intern',
    organization: 'Tewos Company',
    description: 'Contributed to an enterprise HR & Payroll Management System in Laravel and MySQL, working on payroll processing and employee records.',
    type: 'milestone',
    icon: 'Briefcase',
    tags: ['Laravel', 'PHP', 'MySQL', 'Git', 'ERP Modules'],
  },
  {
    year: '2023 – Present',
    title: 'B.Sc. Information Technology',
    organization: 'Haramaya University, Ethiopia',
    description: 'Focused academic studies in software development, relational databases, data structures, and computer networking.',
    type: 'education',
    icon: 'GraduationCap',
    tags: ['Software Engineering', 'Databases', 'Web Dev', 'Algorithms'],
  },
  {
    year: '2024',
    title: 'Cisco Networking Academy Coursework',
    organization: 'Cisco Networking Academy',
    description: 'Introduction to Networks (CCNA v7 ITN) covering IPv4/IPv6 subnetting, packet tracing, routing basics, and switch configurations.',
    type: 'learning',
    icon: 'Award',
    tags: ['CCNA v7 ITN', 'Subnetting', 'Packet Tracer', 'TCP/IP'],
  },
]

export const featuredProject = {
  id: 'tewoshr',
  title: 'TewosHR: HR & Payroll Management System',
  category: 'ERP & Business',
  featured: true,
  color: 'indigo',
  stack: ['Laravel', 'PHP', 'MySQL', 'JavaScript', 'Bootstrap/Tailwind'],
  summary: 'Enterprise HR and payroll application covering employee records, payroll calculation, attendance tracking, and ERP modules developed during internship at Tewos Company.',
  role: 'Software Developer Intern at Tewos Company (June 29 to August 29)',
  highlights: [
    'Contributed to core payroll processing computation and employee information modules.',
    'Assisted in data modeling and database migrations in MySQL.',
    'Improved existing ERP modules, refactored backend logic, and resolved functional bugs.',
    'Maintained version-controlled feature branches utilizing Git/GitHub.',
  ],
  github: 'https://github.com/eyueljoel',
  demo: null,
  codeSnippet: `// Laravel Payroll Calculation Service Snippet
namespace App\\Services;

class PayrollService
{
    public function computeNetSalary(Employee $employee, array $allowances, array $deductions): float
    {
        $gross = $employee->basic_salary + array_sum($allowances);
        $taxable = max(0, $gross - $employee->tax_exemptions);
        $tax = $this->calculateIncomeTax($taxable);
        
        return round($gross - ($tax + array_sum($deductions)), 2);
    }
}`,
}

export const projects = [
  {
    id: 1,
    title: 'TewosHR: HR & Payroll Management System',
    category: 'erp',
    featured: true,
    description: 'Full-featured HR and payroll system with employee directory, automated salary calculations, deduction auditing, and ERP workflows.',
    longDescription: 'Developed during internship at Tewos Company. An enterprise-grade management tool covering employee data tracking, monthly payroll generation, tax deductions, and organizational role structures using Laravel and MySQL.',
    features: [
      'Contributed to employee onboarding and active records management',
      'Implemented payroll calculation routines with custom allowances and deductions',
      'Designed normalized MySQL schemas for employee contracts and payslips',
      'Collaborated within an agile team workflow using Git version control'
    ],
    tech: ['Laravel', 'PHP', 'MySQL', 'JavaScript'],
    github: 'https://github.com/eyueljoel',
    demo: null,
    color: 'indigo',
    codeSnippet: featuredProject.codeSnippet,
  },
  {
    id: 2,
    title: 'Restaurant POS & Ordering System',
    category: 'web',
    featured: true,
    description: 'Interactive restaurant point-of-sale system managing food categories, dynamic table orders, and checkout receipts.',
    longDescription: 'A modern web application built with React and Node.js for restaurant operations. Provides digital menu browsing, table assignment, order status tracking (Pending/Kitchen/Served), and invoice calculation with MySQL persistence.',
    features: [
      'Interactive menu catalog with dynamic categorization and stock availability',
      'Order dispatch system linking active orders directly to restaurant tables',
      'Express.js RESTful API endpoints with structured JSON schemas',
      'Real-time total and tax computation at checkout'
    ],
    tech: ['React', 'Node.js', 'Express.js', 'MySQL'],
    github: 'https://github.com/eyueljoel',
    demo: null,
    color: 'blue',
    codeSnippet: `// Node/Express Order Checkout Handler
app.post('/api/orders/checkout', async (req, res) => {
  const { tableId, items, paymentMethod } = req.body;
  const total = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  
  const [result] = await db.query(
    'INSERT INTO orders (table_id, total_amount, payment_method, status) VALUES (?, ?, ?, "PAID")',
    [tableId, total, paymentMethod]
  );
  res.json({ success: true, orderId: result.insertId, total });
});`,
  },
  {
    id: 3,
    title: 'Library Management System',
    category: 'web',
    featured: false,
    description: 'Comprehensive digital library system built with React, Vite, Express.js, and MySQL for book and member circulation.',
    longDescription: 'Web application automating library tracking. Manages book catalogs, borrower memberships, issue/return cycles, and overdue return policies with full CRUD capabilities.',
    features: [
      'Book catalog search by ISBN, title, and author with live filter state',
      'Automated due date computation and return verification',
      'Express.js backend with MySQL connection pooling',
      'Clean responsive user interface built with Vite and Tailwind CSS'
    ],
    tech: ['React', 'Vite', 'Express.js', 'MySQL'],
    github: 'https://github.com/eyueljoel',
    demo: null,
    color: 'purple',
    codeSnippet: `// Express Route for Book Circulation
router.post('/borrow', async (req, res) => {
  const { bookId, memberId, dueDate } = req.body;
  await db.query('UPDATE books SET available = 0 WHERE id = ?', [bookId]);
  await db.query('INSERT INTO circulations (book_id, member_id, due_date) VALUES (?, ?, ?)', [bookId, memberId, dueDate]);
  res.status(200).json({ message: 'Book issued successfully' });
});`,
  },
  {
    id: 4,
    title: 'Student Information Management System',
    category: 'web',
    featured: false,
    description: 'Web portal for academic records, course enrollment, semester grade reporting, and student profiles.',
    longDescription: 'A database-driven web application tailored for educational institutions. Facilitates student record archiving, course registration, semester GPA computation, and teacher assignment.',
    features: [
      'Relational database architecture normalized to 3NF',
      'Student profile management with academic status indicators',
      'Secure data validation preventing duplicate enrollment',
      'Grade report generation with automated GPA calculations'
    ],
    tech: ['PHP', 'MySQL', 'HTML5', 'CSS3', 'JavaScript'],
    github: 'https://github.com/eyueljoel',
    demo: null,
    color: 'green',
    codeSnippet: `// Student Enrollment Validator
function registerCourse($conn, $studentId, $courseId) {
    $stmt = $conn->prepare("SELECT id FROM enrollments WHERE student_id = ? AND course_id = ?");
    $stmt->bind_param("ii", $studentId, $courseId);
    $stmt->execute();
    if ($stmt->get_result()->num_rows > 0) {
        return false; // Already enrolled
    }
    $ins = $conn->prepare("INSERT INTO enrollments (student_id, course_id, status) VALUES (?, ?, 'ACTIVE')");
    $ins->bind_param("ii", $studentId, $courseId);
    return $ins->execute();
}`,
  },
  {
    id: 5,
    title: 'Console Inventory Management System',
    category: 'desktop',
    featured: false,
    description: 'Fast, binary file-backed inventory management software implemented in modern C++ with OOP architecture.',
    longDescription: 'High-performance command-line application built in C++. Implements custom memory structures, file serialization, low-stock threshold warnings, and transaction logs.',
    features: [
      'Binary file I/O operations with zero data corruption',
      'Fast indexed search by SKU and product category',
      'Stock replenishment alerts triggered automatically',
      'Object-oriented architecture with clean class separation'
    ],
    tech: ['C++', 'File I/O', 'OOP', 'Data Structures'],
    github: 'https://github.com/eyueljoel',
    demo: null,
    color: 'violet',
    codeSnippet: `// C++ Binary Serialization
void Product::serialize(std::ofstream& stream) const {
    stream.write(reinterpret_cast<const char*>(this), sizeof(Product));
}`,
  },
  {
    id: 6,
    title: 'File Encryption & Security Utility',
    category: 'desktop',
    featured: false,
    description: 'Desktop application developed in Visual Basic demonstrating file encryption algorithms and access authentication.',
    longDescription: 'A security tool built with Visual Basic providing file locking, cryptographic key hashing, and user credential authentication for sensitive document protection.',
    features: [
      'Symmetric cryptographic file transformation',
      'Password protection with hash validation',
      'Clean desktop GUI with file selection dialogs',
      'Decryption verification ensuring complete file recovery'
    ],
    tech: ['Visual Basic', 'Cryptography', 'File Security', 'Desktop GUI'],
    github: 'https://github.com/eyueljoel',
    demo: null,
    color: 'orange',
    codeSnippet: `' Visual Basic File Transform Routine
Private Sub EncryptStream(ByVal inputPath As String, ByVal key As String)
    Dim rawBytes() As Byte = File.ReadAllBytes(inputPath)
    For i As Integer = 0 To rawBytes.Length - 1
        rawBytes(i) = rawBytes(i) Xor Asc(key(i Mod key.Length))
    Next
    File.WriteAllBytes(inputPath & ".enc", rawBytes)
End Sub`,
  },
]

export const projectCategories = [
  { id: 'all', label: 'All Projects' },
  { id: 'erp', label: 'ERP & Business' },
  { id: 'web', label: 'Web Applications' },
  { id: 'desktop', label: 'Desktop & Systems' },
]

// Honest, grouped skills with proficiency levels (not fake percentages)
export const skillGroups = [
  {
    category: 'Primary Stack',
    highlight: true,
    skills: [
      { name: 'Laravel', level: 'Strong', icon: '⚡' },
      { name: 'PHP', level: 'Strong', icon: '🐘' },
      { name: 'MySQL', level: 'Strong', icon: '🗄️' },
      { name: 'JavaScript', level: 'Strong', icon: '🌐' },
      { name: 'React', level: 'Comfortable', icon: '⚛️' },
      { name: 'Node.js & Express', level: 'Comfortable', icon: '🟢' },
    ],
  },
  {
    category: 'Frontend & UI',
    skills: [
      { name: 'HTML5 & CSS3', level: 'Strong', icon: '🎨' },
      { name: 'Tailwind CSS', level: 'Comfortable', icon: '💅' },
      { name: 'REST APIs Integration', level: 'Comfortable', icon: '🔌' },
      { name: 'Responsive Web Design', level: 'Strong', icon: '📱' },
    ],
  },
  {
    category: 'Programming Languages',
    skills: [
      { name: 'Java', level: 'Comfortable', icon: '☕' },
      { name: 'Python', level: 'Comfortable', icon: '🐍' },
      { name: 'C++', level: 'Comfortable', icon: '⚙️' },
      { name: 'Visual Basic', level: 'Comfortable', icon: '💻' },
      { name: 'Dart / Flutter', level: 'Learning', icon: '💙' },
    ],
  },
  {
    category: 'Tools & Environments',
    skills: [
      { name: 'Git & GitHub', level: 'Strong', icon: '🐙' },
      { name: 'VS Code', level: 'Strong', icon: '💻' },
      { name: 'Linux / Ubuntu', level: 'Comfortable', icon: '🐧' },
      { name: 'Windows', level: 'Strong', icon: '🪟' },
      { name: 'Cisco Packet Tracer', level: 'Comfortable', icon: '📡' },
    ],
  },
]

// Legacy skills object mapping for backward-compatibility
export const skills = {
  programming: [
    { name: 'Laravel & PHP', level: 88, icon: '🐘' },
    { name: 'JavaScript & React', level: 82, icon: '🌐' },
    { name: 'MySQL & Databases', level: 85, icon: '🗄️' },
    { name: 'Node.js & Express', level: 75, icon: '🟢' },
    { name: 'HTML5 & CSS3', level: 90, icon: '🎨' },
    { name: 'C++ & Systems', level: 78, icon: '⚡' },
    { name: 'Java & Python', level: 72, icon: '☕' },
  ],
  networking: [
    { name: 'Introduction to Networks (CCNA v7 ITN)', level: 85, icon: '🌐' },
    { name: 'IPv4 / IPv6 Subnetting', level: 85, icon: '🔢' },
    { name: 'TCP/IP Architecture', level: 80, icon: '🔀' },
    { name: 'Packet Tracer Simulation', level: 82, icon: '📡' },
  ],
  databases: [
    { name: 'MySQL', level: 85, icon: '🗄️' },
    { name: 'Database Normalization', level: 82, icon: '📐' },
    { name: 'SQL Query Optimization', level: 78, icon: '⚡' },
  ],
  tools: [
    { name: 'Git & GitHub', level: 88, icon: '🐙' },
    { name: 'VS Code', level: 92, icon: '💻' },
    { name: 'Linux & Ubuntu', level: 75, icon: '🐧' },
  ],
  soft: [
    { name: 'Collaborative Development', level: 90, icon: '🤝' },
    { name: 'Problem Solving & Debugging', level: 92, icon: '🧩' },
    { name: 'Fast Learner', level: 95, icon: '🚀' },
    { name: 'Clear Technical Communication', level: 88, icon: '💬' },
  ],
}

export const services = [
  {
    icon: 'Globe',
    title: 'Full-Stack Web Development',
    description: 'Engineering responsive, database-driven web applications using Laravel, PHP, React, and Node.js.',
    color: 'blue',
    features: ['Laravel & PHP Backends', 'React Frontend Interfaces', 'MySQL Database Integration', 'RESTful API Development'],
  },
  {
    icon: 'Layers',
    title: 'ERP & Business Systems',
    description: 'Building and customizing ERP modules, employee management, and business process automation.',
    color: 'purple',
    features: ['HR & Employee Records', 'Payroll Computation Logic', 'Workflow Management', 'Legacy Codebase Refactoring'],
  },
  {
    icon: 'Database',
    title: 'Database Architecture & MySQL',
    description: 'Designing normalized relational databases, crafting efficient queries, and managing schema migrations.',
    color: 'indigo',
    features: ['3NF Relational Schemas', 'Query & Index Optimization', 'Data Integrity Constraints', 'Migrations & Seeds'],
  },
  {
    icon: 'Code2',
    title: 'API Integration & Backend',
    description: 'Designing secure JSON REST APIs, connecting third-party services, and building backend services.',
    color: 'violet',
    features: ['RESTful Endpoint Design', 'Request Validation & Auth', 'JSON Data Serialization', 'Error Handling & Logging'],
  },
]

export const stats = [
  { value: 6, suffix: '+', label: 'Projects Built', icon: 'FolderOpen' },
  { value: 1, suffix: '', label: 'Production Internship', icon: 'Briefcase' },
  { value: 10, suffix: '+', label: 'Technologies & Tools', icon: 'Code2' },
]

export const blogPosts = [
  {
    id: 1,
    title: 'Building Scalable HR & Payroll Systems with Laravel and MySQL',
    excerpt: 'Key lessons learned while developing ERP and payroll calculation modules: database design, transactions, and business rules.',
    date: 'August 2024',
    readTime: '6 min read',
    category: 'ERP & Backend',
    tags: ['Laravel', 'PHP', 'MySQL', 'ERP'],
    color: 'indigo',
    content: `### Lessons from Developing TewosHR
Developing enterprise software like an HR and Payroll management system requires strict attention to calculation precision, data consistency, and role-based permissions.

### Handling Accurate Payroll Computations
In Laravel, encapsulating payroll algorithms inside dedicated Service classes keeps controllers clean and allows repeatable testing:
\`\`\`php
public function computeNetSalary(Employee $employee, array $allowances, array $deductions): float
{
    $gross = $employee->basic_salary + array_sum($allowances);
    $taxable = max(0, $gross - $employee->tax_exemptions);
    $tax = $this->calculateIncomeTax($taxable);
    return round($gross - ($tax + array_sum($deductions)), 2);
}
\`\`\`

### Database Transactions
When executing monthly payroll disbursements across multiple tables (salaries, deductions, ledger entries), wrapping calls in DB transactions prevents partial writes:
\`\`\`php
DB::transaction(function () use ($payrollData) {
    // Process payslips safely
});
\`\`\``,
  },
  {
    id: 2,
    title: 'Restaurant POS System Architecture: Connecting React and Node.js',
    excerpt: 'How to structure order status lifecycles, table management, and real-time checkout with Express and MySQL.',
    date: 'July 2024',
    readTime: '5 min read',
    category: 'Full-Stack Web',
    tags: ['React', 'Node.js', 'Express', 'MySQL'],
    color: 'blue',
    content: `### Order Lifecycle Management
In a restaurant point-of-sale system, orders progress through discrete states: Pending -> Kitchen -> Served -> Paid. Ensuring status transitions are validated on the backend guarantees order consistency.`,
  },
  {
    id: 3,
    title: 'Relational Database Design Principles for Modern Business Systems',
    excerpt: 'Normalizing schemas to 3NF, establishing foreign key integrity, and indexing queries for fast search performance.',
    date: 'June 2024',
    readTime: '5 min read',
    category: 'Databases',
    tags: ['MySQL', 'Database Design', 'SQL'],
    color: 'purple',
    content: `### Why 3NF Matters in Production
Proper database normalization eliminates update anomalies and data duplication, ensuring that employee and payroll records remain strictly consistent across business cycles.`,
  },
]
