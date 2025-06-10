import {
    mobile,
    backend,
    creator,
    web,
    javascript,
    typescript,
    html,
    css,
    reactjs,
    redux,
    tailwind,
    nodejs,
    mongodb,
    git,
    figma,
    docker,
    meta,
    starbucks,
    tesla,
    shopify,
    carrent,
    jobit,
    tripguide,
    threejs,
    baiwei,
    nio,
    queensland,
    vidaxl,
    python,
    java,
    excel,
    powerbi,
    tableau,
    sql,
    vida_proj,
    nio_proj
  } from "../assets";
  
  export const navLinks = [
    {
      id: "about",
      title: "About",
    },
    {
      id: "work",
      title: "Work",
    },
    {
      id: "contact",
      title: "Contact",
    },
  ];
  
  const services = [
    {
      title: "Web Developer",
      icon: web,
    },
    {
      title: "Excel Expert",
      icon: mobile,
    },
    {
      title: "PowerBI Developer",
      icon: backend,
    },
    {
      title: "Database Engineer",
      icon: creator,
    },
  ];
  
  const technologies = [
    {
      name: "Excel",
      icon: excel,
    },
    {
      name: "SQL",
      icon: sql,
    },
    {
      name: "Power BI",
      icon: powerbi,
    },
    {
      name: "Python",
      icon: python,
    },
    {
      name: "Tableau",
      icon: tableau,
    },
    {
      name: "HTML 5",
      icon: html,
    },
    {
      name: "CSS 3",
      icon: css,
    },
    {
      name: "Javascript",
      icon: javascript,
    },
    {
      name: "Java",
      icon: java,
    },
    {
      name: "React",
      icon: reactjs,
    },
    {
      name: "git",
      icon: git,
    }
    // {
    //   name: "figma",
    //   icon: figma,
    // },
    // {
    //   name: "docker",
    //   icon: docker,
    // },
  ];
  
  const experiences = [
    {
      title: "Data Analyst",
      company_name: "Budweiser",
      icon: baiwei,
      iconBg: "#383E56",
      date: "Dec 2023 - Jan 2025",
      points: [
        "Collecting and cleaning data from various sources to ensure data integrity and accuracy for analysis.",
        "Performing exploratory data analysis (EDA) to identify trends, patterns, and insights that can drive business decisions.",
        "Creating and maintaining dashboards and reports to provide regular updates to stakeholders and management teams.",
        "Using statistical methods and machine learning techniques to analyze complex datasets and provide actionable insights.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "VidaXL",
      icon: vidaxl,
      iconBg: "#E6DEDD",
      date: "May 2022 - Oct 2023",
      points: [
        "Developing and maintaining web applications using React.js and other related technologies.",
        "Collaborating with cross-functional teams including designers, product managers, and other developers to create high-quality products.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
    {
      title: "Data Analyst",
      company_name: "NIO",
      icon: nio,
      iconBg: "#383E56",
      date: "May 2020 - March 2022",
      points: [
        "Collaborating with cross-functional teams to understand business needs and deliver data-driven solutions.",
        "Designing and conducting A/B tests to evaluate the effectiveness of marketing strategies or product changes.",
        "Automating repetitive data processes to streamline workflows and improve efficiency within the team.",
        "Providing ad-hoc analysis to support decision-making processes and answer business-related questions.",
      ],
    },
    {
      title: "Network Administrator",
      company_name: "Queensland Ltd",
      icon: queensland,
      iconBg: "#E6DEDD",
      date: "Jun 2015 - Dec 2019",
      points: [
        "Visualizing data through charts, graphs, and infographics to communicate findings effectively to non-technical audiences.",
        "Monitoring key performance indicators (KPIs) to assess business performance and identify areas for improvement.",
        "Implementing responsive design and ensuring cross-browser compatibility.",
        "Participating in code reviews and providing constructive feedback to other developers.",
      ],
    },
  ];
  
  const testimonials = [
    {
      testimonial:
        "Chenzhong is an outstanding data analyst who consistently transforms complex data into strategic insights, contributing significantly to our decision-making processes.",
      name: "William Li",
      designation: "CEO",
      company: "NIO",
      image: "https://randomuser.me/api/portraits/women/4.jpg",
    },
    {
      testimonial:
        "Chenzhong has a rare ability to turn numbers into actions. Their insights helped us uncover opportunities we didn’t even know existed.",
      name: "Gerjan den Hartog",
      designation: "China CEO",
      company: "VidaXL",
      image: "https://randomuser.me/api/portraits/men/5.jpg",
    },
    {
      testimonial:
        "Working with Chenzhong means knowing your data is in expert hands—accurate, insightful, and always aligned with the bigger picture.",
      name: "Lisa Liu",
      designation: "Data Department Manager",
      company: "VidaXL",
      image: "https://randomuser.me/api/portraits/women/6.jpg",
    },
  ];
  
  const projects = [
    {
      name: "NIO Customer Profile",
      description:
        "This project focuses on building user profiles to predict the likelihood of car purchases. By analyzing user information such as age, income, occupation, location, and past purchasing behavior, we aim to identify key factors that influence car-buying decisions. The model helps businesses target potential customers more accurately and improve marketing strategies through data-driven insights.",
      tags: [
        {
          name: "SQL",
          color: "blue-text-gradient",
        },
        {
          name: "Python",
          color: "green-text-gradient",
        },
        {
          name: "Tableau",
          color: "pink-text-gradient",
        },
      ],
      image: nio_proj,
      source_code_link: "https://github.com/",
    },
    {
      name: "VidaXL Retail Report",
      description:
        "This project aims to analyze customer behavior in the retail industry using data-driven techniques. Common analytical methods include RFM (Recency, Frequency, Monetary) analysis to segment customers based on their purchasing patterns, as well as cohort analysis, basket analysis, and sales trend forecasting. These insights help businesses better understand customer value, improve retention strategies, optimize product offerings, and drive revenue growth.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Excel",
          color: "pink-text-gradient",
        },
      ],
      image: vida_proj,
      source_code_link: "https://github.com/",
    },
    {
      name: "SIT Student Data Monitor",
      description:
        "This project involves analyzing student enrollment data to generate comprehensive reports for academic planning and decision-making. Key metrics include enrollment trends across semesters, demographic breakdowns, program popularity, and retention rates. The analysis helps school administrators identify patterns, allocate resources effectively, and improve student engagement strategies.",
      tags: [
        {
          name: "Power BI",
          color: "blue-text-gradient",
        },
        {
          name: "SQL",
          color: "green-text-gradient",
        },
        {
          name: "Python",
          color: "pink-text-gradient",
        },
      ],
      image: tripguide,
      source_code_link: "https://github.com/",
    },
  ];
  
  export { services, technologies, experiences, testimonials, projects };