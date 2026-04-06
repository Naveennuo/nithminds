import { GraduationCap, Cloud, Code, Database, Cog, LineChart, Users, MessageSquare } from 'lucide-react';
import { Link } from 'react-router-dom';

export function Training() {
  const categories = [
    {
      title: "Cloud Training",
      icon: <Cloud className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "AWS", description: "Essential cloud skills including AWS architecture, EC2, S3, VPC, IAM, and cloud security" },
        { name: "Azure", description: "Core services, architecture, security, and deployment strategies for Microsoft Azure" },
        { name: "GCP", description: "Master Google Cloud Platform development, design, and secure cloud solution management" }
      ]
    },
    {
      title: "DevOps Training",
      icon: <Cog className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "AWS DevOps", description: "Master both DevOps and AWS concepts with hands-on training" },
        { name: "Azure DevOps", description: "Comprehensive training in DevOps practices using Azure platform" }
      ]
    },
    {
      title: "Data Science & AI",
      icon: <LineChart className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Machine Learning", description: "Master ML algorithms, Python, and AI under experienced professionals" },
        { name: "Artificial Intelligence", description: "Deep Learning, Neural Networks (CNN & RNN), Python, and TensorFlow" },
        { name: "Hadoop", description: "Hadoop MapReduce, Clusters, HDFS, and Ecosystem training" },
        { name: "Spark", description: "Real-time data processing with Spark Streaming, RDD, Spark SQL, and ML libraries" }
      ]
    },
    {
      title: "Web Development",
      icon: <Code className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Python Django", description: "Full-stack development with database management, REST APIs, and responsive design" },
        { name: "Angular JS", description: "MVC, dependency injection, and single page web development" },
        { name: "React JS", description: "Transform your skills into an expert Front End Developer" },
        { name: "MERN Stack", description: "MongoDB, Express.js, React, and Node.js full-stack development" },
        { name: "MEAN Stack", description: "MongoDB, Express.js, Angular, and Node.js complete training" }
      ]
    },
    {
      title: "Database",
      icon: <Database className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Oracle", description: "Core fundamentals of SQL and PL/SQL for robust database management" },
        { name: "MySQL", description: "Relational database management systems and structured query language" },
        { name: "MongoDB", description: "NoSQL database architecture, document-oriented modeling, and querying" }
      ]
    },
    {
      title: "Software Testing",
      icon: <GraduationCap className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Manual Testing", description: "Master Software Testing Life Cycle (STLC), test case design, and bug reporting" },
        { name: "Selenium", description: "Automation testing with Core Java, WebDriver, TestNG, and Cucumber" },
        { name: "ETL Testing", description: "Data lifecycle testing from extraction to loading into data warehouses" },
        { name: "API Testing", description: "Postman and Rest Assured for performance, security, and data integrity validation" },
        { name: "Cypress", description: "Modern web testing for JavaScript frameworks like React and Angular" },
        { name: "Playwright", description: "Fast and reliable end-to-end testing for web applications" }
      ]
    },
    {
      title: "Programming",
      icon: <Code className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Python", description: "Core syntax, data structures, OOPs, file handling, and web integration" },
        { name: "R Programming", description: "Statistical computing, data visualization, and predictive modeling" },
        { name: "C Programming", description: "Procedural programming, memory management, and Data Structures" },
        { name: "Java", description: "Core Java to J2EE frameworks like Spring, Hibernate, and RESTful Services" },
        { name: ".NET", description: "C# fundamentals to advanced ASP.NET Core and Entity Framework" }
      ]
    },
    {
      title: "Data Warehousing",
      icon: <Database className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Snowflake", description: "Cloud data warehousing, data sharing, and multi-cluster warehouses" },
        { name: "Informatica", description: "ETL and data integration using PowerCenter" },
        { name: "Azure Data Factory", description: "Scalable cloud-based ETL and data integration solutions" }
      ]
    },
    {
      title: "Data Analytics & BI",
      icon: <LineChart className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Power BI", description: "Data storytelling, DAX formulas, Power Query, and advanced data modeling" },
        { name: "Tableau", description: "Transform raw data into actionable business insights with interactive dashboards" }
      ]
    },
    {
      title: "Soft Skills Training",
      icon: <MessageSquare className="size-12 text-[#0049ad]" />,
      courses: [
        { name: "Cross Cultural Collaboration", description: "Bridge communication gaps and build mutual trust in global teams" },
        { name: "Negotiation Skills", description: "Master persuasion and value creation in complex deals" },
        { name: "Manager as a Coach", description: "Transform supervisors into supportive mentors" },
        { name: "Team Management", description: "Delegation, conflict resolution, and strategic decision-making" },
        { name: "Manager Effectiveness", description: "Emotional intelligence, conflict resolution, and strategic delegation" },
        { name: "Managing Conflict", description: "Transform workplace disagreements into opportunities for growth" },
        { name: "Effective Communication", description: "Interpersonal skills, emotional intelligence, and professional presence" },
        { name: "Effective Presentation Skills", description: "Transform technical experts into compelling communicators" }
      ]
    }
  ];

  return (
    <div className="w-full">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-[#0049ad] to-[#21a9f9] py-16 lg:py-24">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h1 className="font-['Montserrat:ExtraBold',sans-serif] font-extrabold text-white text-[48px] lg:text-[70px] mb-6">
            Training Programs
          </h1>
          <p className="font-['Montserrat:Medium',sans-serif] font-medium text-white/90 text-[20px] lg:text-[28px] max-w-3xl mx-auto">
            Corporate and College Training in Technical and Soft Skills
          </p>
        </div>
      </section>

      {/* Training Categories */}
      <section className="py-16 lg:py-24 bg-white">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px]">
          <div className="space-y-16">
            {categories.map((category, index) => (
              <div key={index}>
                <div className="flex items-center gap-4 mb-8">
                  <div className="bg-[#daf4ff] rounded-full p-4">
                    {category.icon}
                  </div>
                  <h2 className="font-['Poppins:ExtraBold',sans-serif] text-[#002548] text-[32px] lg:text-[40px]">
                    {category.title}
                  </h2>
                </div>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {category.courses.map((course, idx) => (
                    <div key={idx} className="bg-[#f8fcff] rounded-lg p-6 hover:shadow-lg transition-shadow">
                      <h3 className="font-['Poppins:Bold',sans-serif] text-[#0049ad] text-[20px] mb-3">
                        {course.name}
                      </h3>
                      <p className="font-['Poppins:Regular',sans-serif] text-[#515151] text-[16px] leading-relaxed">
                        {course.description}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-[#0049ad] to-[#21a9f9]">
        <div className="max-w-[1440px] mx-auto px-6 lg:px-[120px] text-center">
          <h2 className="font-['Poppins:ExtraBold',sans-serif] text-white text-[36px] lg:text-[48px] mb-6">
            Ready to Upskill Your Team?
          </h2>
          <Link 
            to="/contact"
            className="inline-block bg-white text-[#0049ad] px-10 py-4 rounded-full font-['Poppins:SemiBold',sans-serif] text-[20px] hover:shadow-lg transition-shadow"
          >
            Enroll Now
          </Link>
        </div>
      </section>
    </div>
  );
}
