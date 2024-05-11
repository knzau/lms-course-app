import { ImageLoader, ImageLoaderProps } from "next/image";

export const GRID = "grid";
export const LIST = "list";
export const COURSES_PATH = "/course";

export const heroSection = {
	title: "Your Career is Stuck in Neutral?",
	subtitle: "Our experts accelerate your tech knowledge with up-dated and demanded skills.",
	image: "https://res.cloudinary.com/dvdzi0ei2/image/upload/f_auto,q_auto/v1/lms-app/home/i8ngiiwryta0mgbftp07",
	bgImage: "https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713042555/lms-app/home/hero-bg_subqgk.png",
	buttonText: "Explore Our Courses"
};

export const navMenuItems = { courses: "Courses", pricing: "Pricing", aboutUs: "About Us", contact: "Contact" };

export const brandsLinks = [
	{
		name: "Amazon",
		url: "https://www.amazon.com",
		icon: "/brands/amazon.svg"
	},
	{
		name: "Netflix",
		url: "https://www.netflix.com",
		icon: "/brands/netflix.svg"
	},
	{
		name: "Spotify",
		url: "https://www.spotify.com",
		icon: "/brands/spotify.svg"
	},
	{
		name: "Adobe",
		url: "https://www.adobe.com",
		icon: "/brands/adobe.svg"
	},
	{
		name: "Notion",
		url: "https://www.notion.so",
		icon: "/brands/notion.svg"
	},
	{
		name: "Zapier",
		url: "https://www.zapier.com",
		icon: "/brands/zapier.svg"
	},
	{
		name: "Zoom",
		url: "https://www.zoom.com",
		icon: "/brands/zoom.svg"
	}
];

interface CurriculumChapter {
	name: string;
	lessons: number;
	duration: string;
	topics: string[];
}

export interface Curriculum {
	courseName: string;
	description: string;
	chapters: CurriculumChapter[];
}

export interface Course {
	id: string;
	title: string;
	summary: string;
	description: string;
	thumbnail: string;
	createdBy: string;
	duration: string;
	level: string;
	skills: string[];
	students: string;
	rating: string;
	curriculum: Curriculum;
}

export const courseDetails = [
	{
		title: "UI/UX Design",
		id: "ui_ux_design",
		createdBy: "Jessica Gonzalez",
		summary: "Learn HTML, CSS, JavaScript, React & more to become a web developer",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320866/lms-app/home/courses/Image-7_gbysiw.png",
		description:
			"Master the art of creating intuitive user interfaces (UI) and enhancing user experiences (UX). This course is an enticing opportunity for individuals seeking a fulfilling career without prior experience or a degree. Unleash your creativity, drive innovation, and make a lasting impact in the digital landscape as a UI/UX designer. Learn design principles, wireframing, prototyping, and usability testing techniques.",
		level: "intermediate",
		duration: "2-4 months",
		language: "taught in English",
		students: "5000",
		rating: "4.8/5",
		skills: [
			"User Research",
			"Wireframing",
			"Prototyping",
			"Usability Testing",
			"Interaction Design",
			"Visual Design",
			"Information Architecture",
			"Accessibility",
			"Design Thinking",
			"Design Systems"
		],
		curriculum: {
			courseName: "UI/UX Design",
			description:
				"This comprehensive UI/UX Design course will equip you with the necessary skills to create user-centric digital experiences. From user research and wireframing to visual design and prototyping, you'll learn the entire design process.",
			chapters: [
				{
					name: "Introduction to UI/UX Design",
					lessons: 2,
					duration: "3 hours",
					topics: ["What is UI/UX Design?", "The Importance of User-Centered Design"]
				},
				{
					name: "User Research",
					lessons: 4,
					duration: "8 hours",
					topics: ["User Personas", "User Interviews", "Usability Testing", "Competitive Analysis"]
				},
				{
					name: "Design Principles and Wireframing",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Design Thinking",
						"UI Design Principles",
						"Wireframing Tools",
						"Low-Fidelity Wireframes",
						"High-Fidelity Wireframes",
						"Responsive Design"
					]
				},
				{
					name: "Visual Design",
					lessons: 5,
					duration: "10 hours",
					topics: ["Color Theory", "Typography", "Iconography", "Design Systems", "Branding and Style Guides"]
				},
				{
					name: "Prototyping and Usability Testing",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Prototyping Tools",
						"Interactive Prototypes",
						"Usability Testing Methods",
						"Iterating Based on Feedback"
					]
				}
			]
		}
	},
	{
		id: "mobile_app_development",
		title: "Mobile App Development",
		createdBy: "Alex Nguyen",
		students: "3000",
		rating: "4.6/5",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320863/lms-app/home/courses/Image-4_bwy985.png",
		summary:
			"Build cross-platform mobile apps for iOS and Android using React Native and Flutter. Learn core skills like UI/UX design, APIs, databases, and more.",
		description:
			"Build modern, responsive mobile apps for both iOS and Android platforms. In this course, you'll learn to develop high-quality, user-friendly mobile applications using cutting-edge technologies like React Native and Flutter. Gain hands-on experience with popular development tools and frameworks, and master the art of creating seamless user experiences on mobile devices.",
		level: "intermediate",
		duration: "3-6 months",
		language: "taught in English",
		skills: [
			"React Native",
			"Flutter",
			"Swift",
			"Kotlin",
			"Xcode",
			"Android Studio",
			"UI/UX Design",
			"APIs",
			"Database Integration",
			"Testing and Deployment"
		],
		curriculum: {
			courseName: "Mobile App Development",
			description:
				"Learn how to build modern, responsive mobile apps for both iOS and Android platforms. This course covers React Native and Flutter, as well as essential app development concepts like UI/UX design, APIs, and testing.",
			chapters: [
				{
					name: "Introduction to Mobile App Development",
					lessons: 3,
					duration: "5 hours",
					topics: [
						"Mobile App Development Landscape",
						"Native vs. Cross-Platform Development",
						"Setting up the Development Environment"
					]
				},
				{
					name: "React Native Fundamentals",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Introduction to React Native",
						"React Native Components",
						"Navigation and Routing",
						"State Management with Redux",
						"Styling and Animations",
						"Deploying React Native Apps"
					]
				},
				{
					name: "Flutter Development",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Introduction to Flutter",
						"Dart Programming Language",
						"Flutter Widgets and UI",
						"State Management with Provider",
						"Networking and APIs",
						"Deploying Flutter Apps"
					]
				},
				{
					name: "UI/UX Design for Mobile Apps",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Mobile UI/UX Design Principles",
						"Responsive and Adaptive Design",
						"Accessibility in Mobile Apps",
						"User Experience Testing"
					]
				},
				{
					name: "App Development Best Practices",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"APIs and Data Integration",
						"Performance Optimization",
						"Security and Privacy",
						"Testing and Deployment"
					]
				}
			]
		}
	},
	{
		id: "graphic_design_for_beginners",
		title: "Graphic Design for Beginners",
		createdBy: "Emily Williams",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320861/lms-app/home/courses/Image-2_osreud.png",
		summary:
			"Learn the fundamentals of graphic design and create visually stunning designs, tailored for beginners who want to unlock their creativity and develop essential design skills.",
		description:
			"Learn the fundamentals of graphic design and create visually stunning designs. This course is tailored for beginners who want to unlock their creativity and develop essential design skills. Explore color theory, typography, layout design, and branding principles. Master industry-standard tools like Adobe Photoshop, Illustrator, and InDesign to create captivating graphics for both digital and print media.",
		students: "2000",
		rating: "4.5/5",
		level: "beginner",
		duration: "1-2 months",
		language: "taught in English",
		skills: [
			"Color Theory",
			"Typography",
			"Layout Design",
			"Branding",
			"Adobe Photoshop",
			"Adobe Illustrator",
			"Adobe InDesign",
			"Vector Graphics",
			"Raster Graphics",
			"Print Design"
		],
		curriculum: {
			courseName: "Mobile App Development",
			description:
				"Learn how to build modern, responsive mobile apps for both iOS and Android platforms. This course covers React Native and Flutter, as well as essential app development concepts like UI/UX design, APIs, and testing.",
			chapters: [
				{
					name: "Introduction to Mobile App Development",
					lessons: 3,
					duration: "5 hours",
					topics: [
						"Mobile App Development Landscape",
						"Native vs. Cross-Platform Development",
						"Setting up the Development Environment"
					]
				},
				{
					name: "React Native Fundamentals",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Introduction to React Native",
						"React Native Components",
						"Navigation and Routing",
						"State Management with Redux",
						"Styling and Animations",
						"Deploying React Native Apps"
					]
				},
				{
					name: "Flutter Development",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Introduction to Flutter",
						"Dart Programming Language",
						"Flutter Widgets and UI",
						"State Management with Provider",
						"Networking and APIs",
						"Deploying Flutter Apps"
					]
				},
				{
					name: "UI/UX Design for Mobile Apps",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Mobile UI/UX Design Principles",
						"Responsive and Adaptive Design",
						"Accessibility in Mobile Apps",
						"User Experience Testing"
					]
				},
				{
					name: "App Development Best Practices",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"APIs and Data Integration",
						"Performance Optimization",
						"Security and Privacy",
						"Testing and Deployment"
					]
				}
			]
		}
	},
	{
		id: "advanced_javascript",
		title: "Advanced JavaScript",
		createdBy: "David Chen",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320863/lms-app/home/courses/Image-4_bwy985.png",
		summary:
			"Master advanced JavaScript concepts like prototypes, closures, asynchronous programming, and more to become a highly skilled developer",
		description:
			"Dive deep into the advanced features and concepts of the JavaScript language. This course is designed for experienced developers who want to take their JavaScript skills to the next level. Explore cutting-edge ES6+ syntax, asynchronous programming, closures, prototypes, object-oriented programming, functional programming, and design patterns. Optimize your code for performance and learn testing and debugging techniques.",
		students: "1000",
		rating: "4.7/5",
		level: "advanced",
		duration: "2-3 months",
		language: "taught in English",
		skills: [
			"ES6+ Syntax",
			"Asynchronous Programming",
			"Closures",
			"Prototypes",
			"Object-Oriented Programming",
			"Functional Programming",
			"Design Patterns",
			"Performance Optimization",
			"Testing",
			"Debugging"
		],
		curriculum: {
			courseName: "Advanced JavaScript",
			description:
				"Take your JavaScript skills to the next level with this advanced course. You'll dive deep into ES6+ syntax, explore functional programming, and learn best practices for writing performant, maintainable code.",
			chapters: [
				{
					name: "ES6+ Syntax and Features",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"ES6 Overview",
						"Arrow Functions and Template Literals",
						"Destructuring and Spread/Rest Operators",
						"Classes and Modules"
					]
				},
				{
					name: "Asynchronous Programming",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Callbacks and Promises",
						"Async/Await",
						"Event Loop and Concurrency",
						"Asynchronous Patterns and Libraries"
					]
				},
				{
					name: "Functional Programming",
					lessons: 5,
					duration: "10 hours",
					topics: [
						"Pure Functions and Immutability",
						"Higher-Order Functions",
						"Closures and Currying",
						"Composition and Pipelining",
						"Functional Programming Libraries"
					]
				},
				{
					name: "Object-Oriented Programming",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Prototypes and Inheritance",
						"Object Creation Patterns",
						"Design Patterns",
						"ES6 Classes and Inheritance"
					]
				},
				{
					name: "Performance and Testing",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"JavaScript Engine and Optimization",
						"Code Linting and Formatting",
						"Unit Testing with Jest",
						"End-to-End Testing with Cypress"
					]
				}
			]
		}
	},
	{
		id: "data_science_fundamentals",
		title: "Data Science Fundamentals",
		createdBy: "Sarah Lee",
		summary: "Gain essential skills in data analysis, machine learning, and data visualization.",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320862/lms-app/home/courses/Image-3_m3l1so.png",
		description:
			"Gain essential skills in data analysis, machine learning, and data visualization. This course provides a solid foundation for aspiring data scientists or professionals seeking to enhance their data-driven decision-making abilities. Learn Python programming, data manipulation with NumPy and Pandas, visualization techniques with Matplotlib and Seaborn, and machine learning models using Scikit-learn.",
		students: "5000",
		rating: "4.8/5",
		level: "intermediate",
		duration: "4-6 months",
		language: "taught in English",
		skills: [
			"Python",
			"NumPy",
			"Pandas",
			"Matplotlib",
			"Seaborn",
			"Scikit-learn",
			"Machine Learning",
			"Supervised Learning",
			"Unsupervised Learning",
			"Data Visualization"
		],
		curriculum: {
			courseName: "Data Science Fundamentals",
			description:
				"Gain a solid foundation in data science by learning Python programming, data manipulation, visualization, and machine learning techniques. This course will prepare you for a career in data analysis or machine learning.",
			chapters: [
				{
					name: "Introduction to Data Science",
					lessons: 3,
					duration: "6 hours",
					topics: ["What is Data Science?", "Data Science Workflows", "Python for Data Science"]
				}
			]
		}
	},
	{
		id: "front_end_web_development",
		title: "Front-End Web Development",
		createdBy: "Mike Johnson",
		summary:
			"Master HTML, CSS, JavaScript, and popular front-end frameworks like React and Vue to build responsive web apps.",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320861/lms-app/home/courses/Image-1_sqntts.png",
		description:
			"Master HTML, CSS, JavaScript, and popular front-end frameworks like React and Vue. This comprehensive course will equip you with the skills and knowledge to build modern, responsive, and interactive web applications. Learn the latest front-end development techniques, including React, Redux, Webpack, and Babel. Optimize your web applications for performance and create stunning user interfaces.",
		students: "5000",
		rating: "4.8/5",
		level: "intermediate",
		duration: "3-6 months",
		language: "taught in English",
		skills: [
			"HTML5",
			"CSS3",
			"JavaScript",
			"React",
			"Vue.js",
			"Redux",
			"Webpack",
			"Babel",
			"Responsive Design",
			"Performance Optimization"
		],
		curriculum: {
			courseName: "Front-End Web Development",
			description:
				"Master the art of building modern, responsive, and interactive web applications. This course covers HTML, CSS, JavaScript, React, and other popular front-end frameworks and tools.",
			chapters: [
				{
					name: "HTML and CSS Fundamentals",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"HTML Structure and Semantics",
						"CSS Selectors and Styling",
						"Responsive Web Design",
						"CSS Frameworks (Bootstrap, Bulma)"
					]
				},
				{
					name: "JavaScript Essentials",
					lessons: 5,
					duration: "10 hours",
					topics: [
						"JavaScript Syntax and Data Types",
						"DOM Manipulation",
						"Events and Event Handling",
						"Asynchronous JavaScript (Promises, Async/Await)",
						"Modern JS Features (ES6+)"
					]
				},
				{
					name: "React Fundamentals",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Introduction to React",
						"React Components and JSX",
						"State and Props",
						"React Hooks",
						"React Router",
						"Redux for State Management"
					]
				},
				{
					name: "Front-End Tools and Frameworks",
					lessons: 5,
					duration: "10 hours",
					topics: [
						"Webpack and Babel",
						"Vue.js",
						"Angular",
						"Performance Optimization",
						"Testing and Deployment"
					]
				},
				{
					name: "Front-End Projects",
					lessons: 3,
					duration: "6 hours",
					topics: [
						"Building a Responsive Website",
						"Creating a Single Page Application",
						"Deploying a Front-End Application"
					]
				}
			]
		}
	},
	{
		id: "digital_marketing",
		title: "Digital Marketing",
		createdBy: "Jane Doe",
		summary: "Explore the latest digital marketing strategies and tactics to grow your online presence.",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320861/lms-app/home/courses/Image_f7alpf.png",
		description:
			"Explore the latest digital marketing strategies and tactics to grow your online presence. This course covers a wide range of digital marketing channels, including search engine optimization (SEO), social media marketing, email marketing, content marketing, pay-per-click (PPC) advertising, influencer marketing, conversion rate optimization, and marketing automation. Learn how to effectively leverage these tools to reach your target audience and drive business growth.",
		students: "3000",
		rating: "4.6/5",
		level: "intermediate",
		duration: "2-4 months",
		language: "taught in English",
		skills: [
			"Search Engine Optimization (SEO)",
			"Social Media Marketing",
			"Email Marketing",
			"Content Marketing",
			"Google Analytics",
			"Pay-Per-Click (PPC) Advertising",
			"Influencer Marketing",
			"Conversion Rate Optimization",
			"Marketing Automation",
			"Copywriting"
		],
		curriculum: {
			courseName: "Digital Marketing",
			description:
				"Explore the latest digital marketing strategies and tactics to grow your online presence. This course covers a wide range of digital marketing channels, including search engine optimization (SEO), social media marketing, email marketing, content marketing, pay-per-click (PPC) advertising, influencer marketing, conversion rate optimization, and marketing automation. Learn how to effectively leverage these tools to reach your target audience and drive business growth.",
			chapters: [
				{
					name: "Introduction to Digital Marketing",
					lessons: 3,
					duration: "6 hours",
					topics: [
						"What is Digital Marketing?",
						"Digital Marketing Landscape",
						"Setting Marketing Goals and Objectives"
					]
				},
				{
					name: "Search Engine Optimization (SEO)",
					lessons: 5,
					duration: "10 hours",
					topics: ["On-Page SEO", "Off-Page SEO", "Keyword Research", "Technical SEO", "Local SEO"]
				},
				{
					name: "Social Media Marketing",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Social Media Platforms",
						"Content Strategy",
						"Paid Social Advertising",
						"Social Media Monitoring and Analytics"
					]
				},
				{
					name: "Email Marketing and Content Marketing",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Email Marketing Fundamentals",
						"Email Automation and Segmentation",
						"Content Marketing Strategy",
						"Creating Engaging Content"
					]
				},
				{
					name: "Paid Advertising and Analytics",
					lessons: 5,
					duration: "10 hours",
					topics: [
						"Pay-Per-Click (PPC) Advertising",
						"Google Ads",
						"Facebook Ads",
						"Conversion Rate Optimization",
						"Web Analytics and Reporting"
					]
				}
			]
		}
	},
	{
		id: "web_design_fundamentals",
		title: "Web Design Fundamentals",
		createdBy: "John Smith",
		summary: "Gain essential skills in web design including HTML/CSS, responsive design, and more.",
		thumbnail:
			"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320865/lms-app/home/courses/Image-5_dd6kae.png",
		description:
			"Learn HTML, CSS, JavaScript, React & more to become a web developer. This beginner-friendly course will provide you with a solid foundation in web development. Start by mastering HTML, CSS, and JavaScript – the building blocks of the web. Then, dive into React, a popular JavaScript library for creating dynamic user interfaces. Explore responsive design, web accessibility, version control with Git, and deployment techniques.",
		students: "2000",
		rating: "4.7/5",
		level: "beginner",
		duration: "1-3 months",
		language: "taught in English",
		skills: [
			"HTML",
			"CSS",
			"JavaScript",
			"React",
			"Responsive Design",
			"Web Accessibility",
			"Git",
			"npm",
			"Debugging",
			"Deployment"
		],
		curriculum: {
			courseName: "Web Design Fundamentals",
			description:
				"Learn HTML, CSS, JavaScript, React & more to become a web developer. This beginner-friendly course will provide you with a solid foundation in web development. Start by mastering HTML, CSS, and JavaScript – the building blocks of the web. Then, dive into React, a popular JavaScript library for creating dynamic user interfaces. Explore responsive design, web accessibility, version control with Git, and deployment techniques.",
			chapters: [
				{
					name: "Introduction to Web Development",
					lessons: 3,
					duration: "6 hours",
					topics: [
						"Understanding the Web",
						"Web Development Fundamentals",
						"Development Tools and Environment Setup"
					]
				},
				{
					name: "HTML and CSS",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"HTML Structure and Elements",
						"CSS Selectors and Styling",
						"Layouts and Positioning",
						"Responsive Web Design",
						"CSS Frameworks (Bootstrap, Bulma)",
						"CSS Preprocessors (Sass, Less)"
					]
				},
				{
					name: "JavaScript Fundamentals",
					lessons: 5,
					duration: "10 hours",
					topics: [
						"JavaScript Syntax and Data Types",
						"Functions and Scope",
						"DOM Manipulation",
						"Events and Event Handling",
						"Asynchronous JavaScript"
					]
				},
				{
					name: "React.js",
					lessons: 6,
					duration: "12 hours",
					topics: [
						"Introduction to React",
						"React Components and JSX",
						"State and Props",
						"React Hooks",
						"React Router",
						"Redux for State Management"
					]
				},
				{
					name: "Web Development Best Practices",
					lessons: 4,
					duration: "8 hours",
					topics: [
						"Web Accessibility",
						"Version Control with Git",
						"Testing and Debugging",
						"Deployment and Performance Optimization"
					]
				}
			]
		}
	}
];

export const coursesSection = {
	title: "Learn by Practice",
	description: "Explore our top courses to boost your skills and career",
	buttonText: "View All Courses",
	courses: courseDetails
};

export const benefitsSection = {
	title: "Turbocharge Your Future",
	description: "Access top-rated courses, expert instructors, and earn industry-recognized certificates",
	benefits: [
		{
			icon: "/icons/assigning.svg",
			title: "Assigning",
			description: `Develop <strong>practical projects</strong> assigned during the course that can prove your skills on your curriculum and portfolio. Showcasing your abilities to potential employers.`
		},
		{
			icon: "/icons/updating.svg",
			title: "Updating",
			description: `<p>Our courses are currently updated with the <strong>latest content</strong> in the technology industry. We connect with the required resources, trends, and preserved practices.</p>`
		},
		{
			icon: "/icons/mentoring.svg",
			title: "Mentoring",
			description: `<p>Experience <strong>personalized</strong> mentoring with industry experts. Achieve your goals, in career advancement or personal growth. Contact our support to start your journey!</p>`
		}
	]
};

export const featuresSection = {
	title: "Where to Learn and Grow?",
	description: "If you're on a mission to grow, the SkillBridge is your launchpad!",
	img: "https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713490261/lms-app/home/qte3wl6kcrcnq1g9xajt.png",
	features: [
		`<p>Our program is tailored for technology areas for learners willing to <b>explore and buster their skills</b>.</p>`,
		`<p>Students must be <b>fluent in English</b> to ensure smooth communication and engagement.</p>`,
		`<p>Stay ahead of the curve with access to the latest industry developments and emerging technologies.</p>`,
		`<p>No specific background or proficiency is required. <strong>We don’t ask about your grades</strong>. If you’re curious and excited for the tech, you’re a perfect fit!</p>`
	]
};

export const testimonialsSection = {
	title: "What Students Are Saying",
	testimonials: [
		{
			name: "Sarah Williams",
			title: "UI Designer at Facebook",
			comment: `"The UI/UX Design course was exactly what I needed to kickstart my career as a designer. I landed my dream job at Facebook after completing the program."`
		},
		{
			name: "John Doe",
			title: "Software Engineer at Amazon",
			comment: `"The full-stack web development program was very intensive but worth it. I learned so many valuable skills that helped me get hired at Amazon."`
		},
		{
			name: "David Kim",
			title: "Android Developer at Google",
			comment: `"The mobile app development course was very hands-on and I enjoyed building real apps. I'm now living my dream as an Android developer at Google."`
		},
		{
			name: "Emily Lee",
			title: "UI Design Intern at Microsoft",
			comment: `"I'm currently interning as a UI Designer at Microsoft thanks to the skills I gained from the UI/UX Design course. The instructors were really knowledgeable and supportive."`
		}
	]
};
export const myLoader = ({ src, width, quality }: ImageLoaderProps) => {
	return `${src}?w=${width}&q=${quality || 75}`;
};

export const pricingPlanSection = {
	title: "Unlock Your Career Potential",
	description: "Cutting-Edge Courses to Gain In-Demand Skills and Accelerate Your Professional Growth.",
	plans: [
		{
			title: "Free",
			description: "Get your course started fast, free forever.",
			pricing: "$0",
			bills: "for unlimited members",
			ctaButton: "Get Started Free",
			featuresTitle: "Free features:",
			features: [
				"Access to selected free courses.",
				"Limited course materials and resources.",
				"Basic Community support",
				"No Certificate on completion",
				"Ad-supported platform."
			]
		},
		{
			title: "Professional+",
			description: "For serious learners looking to advance their careers.",
			pricing: "$79",
			bills: "per month",
			ctaButton: "Buy Professional+",
			featuresTitle: "All Professional+ features:",
			features: [
				"Unlimited access to all courses.",
				"Unlimited course materials and resources.",
				"Priority support from instructors.",
				"Certificate on completion",
				"Ad-free platform.",
				"Access to exclusive Professional+ community forums.",
				"Early access to new courses and updates."
			]
		}
	]
};

export const faqsSection = {
	title: "Frequently Asked Questions",
	faqs: [
		{
			question: "Can I enroll in multiple courses at once?",
			answer: "Absolutely! You can enroll in multiple courses simultaneously and access them at your convenience."
		},
		{
			question: "What kind of support can I expect from instructors?",
			answer: "Our instructors are always available to help."
		},
		{
			question: "Are the courses self-paced or do they have specific start and end dates?",
			answer: "All our courses are self-paced and can be started anytime."
		},
		{
			question: "Are there any prerequisites for the courses?",
			answer: "There are no prerequisites for most of our courses. However, some advanced courses may require fundamental knowledge of the topic. Course descriptions specify any prerequisites if applicable."
		},
		{
			question: "Can I download the course materials for offline access?",
			answer: "Yes, you can download course materials like videos, docs and other files for offline access through our mobile apps."
		}
	],
	moreQuestions: `<span>Still you have any questions? Contact our Team via <a href="https://www.support@skillbridge.com">support@skillbridge.com</a></span>`
};

export const footerSections = {
	logo: [{ icon: "/footer/skillbridge_logo-vertical.svg", label: "", link: "/" }],
	courses: [
		{ icon: "", label: "Courses", link: "/courses" },
		{ icon: "", label: "Software", link: "/software" },
		{ icon: "", label: "Business", link: "/business" },
		{ icon: "", label: "Art & Humanites", link: "/art_humanities" }
	],
	company: [
		{ icon: "", label: "Company", link: "/company" },
		{ icon: "", label: "About us", link: "/about_us" },
		{ icon: "", label: "Pricing", link: "/pricing" },
		{ icon: "", label: "Contact", link: "/contact" }
	],
	support: [
		{ icon: "", label: "Support", link: "" },
		{ icon: "/footer/mail.svg", label: "hello@skillbridge.com", link: "/" },
		{ icon: "/footer/phone.svg", label: "+91 91813 23 2309", link: "/" },
		{ icon: "/footer/location_pin.svg", label: "4517 Washington Ave. Manchester Kentucky 39495", link: "/" }
	],
	socialIcons: [
		{ icon: "/footer/fb.svg", label: "", link: "https://www.facebook.com" },
		{ icon: "/footer/twitter.svg", label: "", link: "https://www.twitter.com" },
		{
			icon: "/footer/linkedin.svg",
			label: "",
			link: "https://www.linkedin.com"
		}
	]
};

export const courseCategories = [
	{
		value: "software",
		label: "Software"
	},
	{
		value: "business",
		label: "Business"
	},
	{
		value: "art_humanities",
		label: "Art & Humanities"
	}
];

export interface CourseFilter {
	id: string;
	label: string;
}
export const coursesFilterOptions = {
	subject: [
		{ id: "software", label: "Software" },
		{ id: "business", label: "Business" },
		{ id: "art_humanities", label: "Art & Humanities" },
		{ id: "healthcare", label: "Healthcare" },
		{ id: "data", label: "Data" },
		{ id: "marketing", label: "Marketing" }
	],

	level: [
		{ id: "beginner", label: "Beginner" },
		{ id: "intermediate", label: "Intermediate" },
		{ id: "advanced", label: "Advanced" }
	],

	rating: [
		{ id: "5stars", label: "5 stars" },
		{ id: "4stars", label: "4 stars" },
		{ id: "3stars", label: "3 stars" }
	],

	duration: [
		{ id: "1-3months", label: "1 - 3 months" },
		{ id: "3-6months", label: "3 - 6 months" },
		{ id: "5-8months", label: "5 - 8 months" },
		{ id: "9months+", label: "9 months+" }
	],

	skills: [
		{ id: "web_development", label: "Web Development" },
		{ id: "programming", label: "Programming" },
		{ id: "design", label: "Design" },
		{ id: "business", label: "Business" },
		{ id: "marketing", label: "Marketing" },
		{ id: "performance_optimization", label: "Performance Optimization" },
		{ id: "debugging", label: "Debugging" },
		{ id: "accessibility", label: "Accessibility" },
		{ id: "responsive_design", label: "Responsive Design" },
		{ id: "async_javascript", label: "Asynchronous JavaScript" },
		{ id: "user_experience_design", label: "User Experience Design" },
		{ id: "frameworks", label: "Frameworks" },
		{ id: "databases", label: "Databases" },
		{ id: "api", label: "API" },
		{ id: "layout_design", label: "Layout Design" },
		{ id: "advertising", label: "Advertising" },
		{ id: "audience_targeting", label: "Audience Targeting" },
		{ id: "content_strategy", label: "Content Strategy" }
	]
};

export const subscriptionComponent = {
	title: "Subscribe for Professional+",
	description: "Get unlimited course materials and resources.",
	buttonPro: "Buy Professional+",
	proFeatures: ["Starting $79 per month", "Cancel anytime"],
	proBenefits: [
		"Unlimited access to all courses",
		"Download Materials Resources",
		"Certificate of completion",
		"Learn Practical Assignments"
	],
	buttonFree: "Get Started Free",
	freeFeatures: "Get this top-rated picks of this course and basic community support."
};

const courseCurricula = [
	{
		courseName: "UI/UX Design",
		description:
			"This comprehensive UI/UX Design course will equip you with the necessary skills to create user-centric digital experiences. From user research and wireframing to visual design and prototyping, you'll learn the entire design process.",
		chapters: [
			{
				name: "Introduction to UI/UX Design",
				lessons: 2,
				duration: "3 hours",
				topics: ["What is UI/UX Design?", "The Importance of User-Centered Design"]
			},
			{
				name: "User Research",
				lessons: 4,
				duration: "8 hours",
				topics: ["User Personas", "User Interviews", "Usability Testing", "Competitive Analysis"]
			},
			{
				name: "Design Principles and Wireframing",
				lessons: 6,
				duration: "12 hours",
				topics: [
					"Design Thinking",
					"UI Design Principles",
					"Wireframing Tools",
					"Low-Fidelity Wireframes",
					"High-Fidelity Wireframes",
					"Responsive Design"
				]
			},
			{
				name: "Visual Design",
				lessons: 5,
				duration: "10 hours",
				topics: ["Color Theory", "Typography", "Iconography", "Design Systems", "Branding and Style Guides"]
			},
			{
				name: "Prototyping and Usability Testing",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"Prototyping Tools",
					"Interactive Prototypes",
					"Usability Testing Methods",
					"Iterating Based on Feedback"
				]
			}
		]
	},

	{
		courseName: "Graphic Design for Beginners",
		description:
			"This beginner-friendly course will introduce you to the fundamental concepts and tools of graphic design. From color theory to typography, you'll learn how to create visually appealing designs for various media.",
		chapters: [
			{
				name: "Introduction to Graphic Design",
				lessons: 2,
				duration: "3 hours",
				topics: ["What is Graphic Design?", "The Role of a Graphic Designer"]
			},
			{
				name: "Color Theory and Typography",
				lessons: 5,
				duration: "10 hours",
				topics: [
					"Color Fundamentals",
					"Color Schemes and Palettes",
					"Typography Basics",
					"Combining Fonts",
					"Typographic Hierarchy"
				]
			},
			{
				name: "Design Principles and Layout",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"Design Elements and Principles",
					"Layout and Composition",
					"Grid Systems",
					"Branding and Identity Design"
				]
			},
			{
				name: "Adobe Creative Suite",
				lessons: 6,
				duration: "12 hours",
				topics: [
					"Introduction to Adobe Photoshop",
					"Working with Layers and Selections",
					"Vector Graphics with Adobe Illustrator",
					"Typography with Adobe InDesign",
					"Print and Digital Design with Adobe InDesign",
					"Exporting and File Formats"
				]
			},
			{
				name: "Design Projects and Portfolio",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"Logo Design",
					"Brochure and Print Design",
					"Social Media Graphics",
					"Building a Design Portfolio"
				]
			}
		]
	},
	{
		courseName: "Advanced JavaScript",
		description:
			"Take your JavaScript skills to the next level with this advanced course. You'll dive deep into ES6+ syntax, explore functional programming, and learn best practices for writing performant, maintainable code.",
		chapters: [
			{
				name: "ES6+ Syntax and Features",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"ES6 Overview",
					"Arrow Functions and Template Literals",
					"Destructuring and Spread/Rest Operators",
					"Classes and Modules"
				]
			},
			{
				name: "Asynchronous Programming",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"Callbacks and Promises",
					"Async/Await",
					"Event Loop and Concurrency",
					"Asynchronous Patterns and Libraries"
				]
			},
			{
				name: "Functional Programming",
				lessons: 5,
				duration: "10 hours",
				topics: [
					"Pure Functions and Immutability",
					"Higher-Order Functions",
					"Closures and Currying",
					"Composition and Pipelining",
					"Functional Programming Libraries"
				]
			},
			{
				name: "Object-Oriented Programming",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"Prototypes and Inheritance",
					"Object Creation Patterns",
					"Design Patterns",
					"ES6 Classes and Inheritance"
				]
			},
			{
				name: "Performance and Testing",
				lessons: 4,
				duration: "8 hours",
				topics: [
					"JavaScript Engine and Optimization",
					"Code Linting and Formatting",
					"Unit Testing with Jest",
					"End-to-End Testing with Cypress"
				]
			}
		]
	},
	{
		courseName: "Data Science Fundamentals",
		description:
			"Gain a solid foundation in data science by learning Python programming, data manipulation, visualization, and machine learning techniques. This course will prepare you for a career in data analysis or machine learning.",
		chapters: [
			{
				name: "Introduction to Data Science",
				lessons: 3,
				duration: "6 hours",
				topics: ["What is Data Science?", "Data Science Workflows", "Python for Data Science"]
			}
		]
	}
];
