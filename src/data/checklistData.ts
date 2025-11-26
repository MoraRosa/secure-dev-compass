export interface ChecklistItemData {
  id: string;
  title: string;
  description: string;
  category: string;
  priority: "high" | "medium" | "low";
}

export const checklistData: ChecklistItemData[] = [
  // Security
  {
    id: "sec-1",
    title: "Implement HTTPS/TLS encryption",
    description: "Ensure all data in transit is encrypted using TLS 1.2 or higher for secure communication.",
    category: "Security",
    priority: "high",
  },
  {
    id: "sec-2",
    title: "Input validation and sanitization",
    description: "Validate and sanitize all user inputs to prevent injection attacks (SQL, XSS, etc.).",
    category: "Security",
    priority: "high",
  },
  {
    id: "sec-3",
    title: "Implement authentication and authorization",
    description: "Use secure authentication methods (OAuth 2.0, JWT) and role-based access control (RBAC).",
    category: "Security",
    priority: "high",
  },
  {
    id: "sec-4",
    title: "Password security standards",
    description: "Enforce strong password policies and use secure hashing algorithms (bcrypt, Argon2).",
    category: "Security",
    priority: "high",
  },
  {
    id: "sec-5",
    title: "Rate limiting and DDoS protection",
    description: "Implement rate limiting to prevent abuse and protect against denial-of-service attacks.",
    category: "Security",
    priority: "medium",
  },
  {
    id: "sec-6",
    title: "Security headers configuration",
    description: "Configure security headers (CSP, HSTS, X-Frame-Options) to protect against common attacks.",
    category: "Security",
    priority: "medium",
  },
  
  // Compliance
  {
    id: "comp-1",
    title: "GDPR compliance for EU users",
    description: "Implement data protection measures, consent mechanisms, and data portability for EU users.",
    category: "Compliance",
    priority: "high",
  },
  {
    id: "comp-2",
    title: "Data retention policies",
    description: "Define and implement clear data retention and deletion policies based on regulations.",
    category: "Compliance",
    priority: "high",
  },
  {
    id: "comp-3",
    title: "Cookie consent and tracking",
    description: "Implement proper cookie consent mechanisms compliant with GDPR and CCPA.",
    category: "Compliance",
    priority: "medium",
  },
  {
    id: "comp-4",
    title: "Audit logging",
    description: "Maintain comprehensive audit logs for compliance and security monitoring.",
    category: "Compliance",
    priority: "medium",
  },
  
  // Privacy
  {
    id: "priv-1",
    title: "Data encryption at rest",
    description: "Encrypt sensitive data stored in databases using AES-256 or equivalent encryption.",
    category: "Privacy",
    priority: "high",
  },
  {
    id: "priv-2",
    title: "Privacy policy and terms of service",
    description: "Create clear, comprehensive privacy policies and terms of service accessible to users.",
    category: "Privacy",
    priority: "high",
  },
  {
    id: "priv-3",
    title: "Data minimization",
    description: "Collect only the minimum necessary data required for your application's functionality.",
    category: "Privacy",
    priority: "medium",
  },
  {
    id: "priv-4",
    title: "User data access and deletion",
    description: "Provide users with ability to access, download, and delete their personal data.",
    category: "Privacy",
    priority: "high",
  },
  
  // Architecture
  {
    id: "arch-1",
    title: "Microservices or modular architecture",
    description: "Design application with modular, loosely coupled components for scalability.",
    category: "Architecture",
    priority: "medium",
  },
  {
    id: "arch-2",
    title: "API versioning strategy",
    description: "Implement proper API versioning to manage changes without breaking existing clients.",
    category: "Architecture",
    priority: "medium",
  },
  {
    id: "arch-3",
    title: "Database design and normalization",
    description: "Design normalized database schemas with proper indexing and relationships.",
    category: "Architecture",
    priority: "medium",
  },
  {
    id: "arch-4",
    title: "Caching strategy",
    description: "Implement appropriate caching layers (Redis, CDN) for performance optimization.",
    category: "Architecture",
    priority: "low",
  },
  {
    id: "arch-5",
    title: "Error handling and logging",
    description: "Implement comprehensive error handling and centralized logging system.",
    category: "Architecture",
    priority: "medium",
  },
  
  // Payment & Legal
  {
    id: "pay-1",
    title: "PCI DSS compliance",
    description: "If handling payment cards, ensure PCI DSS compliance or use certified payment processors.",
    category: "Payment",
    priority: "high",
  },
  {
    id: "pay-2",
    title: "Secure payment processing",
    description: "Never store credit card details; use tokenization and secure payment gateways.",
    category: "Payment",
    priority: "high",
  },
  {
    id: "legal-1",
    title: "HIPAA compliance (if applicable)",
    description: "For healthcare applications, implement HIPAA-compliant data handling and storage.",
    category: "Legal",
    priority: "high",
  },
  {
    id: "legal-2",
    title: "Accessibility compliance (WCAG)",
    description: "Ensure application meets WCAG 2.1 AA standards for accessibility.",
    category: "Legal",
    priority: "medium",
  },
];

export const categories = [
  { name: "Security", color: "hsl(199 89% 48%)" },
  { name: "Compliance", color: "hsl(142 76% 36%)" },
  { name: "Privacy", color: "hsl(217 91% 60%)" },
  { name: "Architecture", color: "hsl(38 92% 50%)" },
  { name: "Payment", color: "hsl(0 84% 60%)" },
  { name: "Legal", color: "hsl(280 80% 55%)" },
];
