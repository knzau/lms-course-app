import { ImageLoader, ImageLoaderProps } from "next/image";

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

export const coursesSection = {
	title: "Learn by Practice",
	description: "Explore our top courses to boost your skills and career",
	buttonText: "View All Courses",
	courses: [
		{
			title: "Web Design Fundamentals",
			id: "web-design-fundamentals",
			description: "Learn HTML, CSS, JavaScript, React & more to become a web developer",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320865/lms-app/home/courses/Image-5_dd6kae.png",
			createdBy: "Created by John Smith",
			duration: "1-3 months",
			level: "Beginner",
			students: "3500+",
			rating: "4.8/5"
		},
		{
			title: "Front-End Web Development",
			id: "front-end-web-development",
			description:
				"Develop front-end web skills with HTML, CSS and JavaScript to build responsive websites and web apps",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320861/lms-app/home/courses/Image-1_sqntts.png",
			createBy: "Created by John Smith",
			duration: "1-3 months",
			level: "Beginner",
			students: "3000+",
			rating: "4.7/5"
		},
		{
			id: "digital-marketing",
			title: "Digital Marketing",
			description: "Explore the latest digital marketing strategies and tactics to grow your online presence",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320861/lms-app/home/courses/Image_f7alpf.png",
			createdBy: "Created by Jane Doe",
			duration: "2-4 months",
			level: "Intermediate",
			students: "2800+",
			rating: "4.6/5"
		},
		{
			id: "data-science-fundamentals",
			title: "Data Science Fundamentals",
			description: "Gain essential skills in data analysis, machine learning, and data visualization",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320862/lms-app/home/courses/Image-3_m3l1so.png",
			createdBy: "Created by Sarah Lee",
			duration: "4-6 months",
			level: "Intermediate",
			students: "3900+",
			rating: "4.8/5"
		},
		{
			id: "advanced-javascript",
			title: "Advanced JavaScript",
			description: "Dive deep into the advanced features and concepts of the JavaScript language",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320863/lms-app/home/courses/Image-4_bwy985.png",
			createdBy: "Created by David Chen",
			duration: "2-3 months",
			level: "Advanced",
			students: "2100+",
			rating: "4.9/5"
		},
		{
			id: "graphic-design-beginners",
			title: "Graphic Design for Beginners",
			description: "Learn the fundamentals of graphic design and create visually stunning designs",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320861/lms-app/home/courses/Image-2_osreud.png",
			createdBy: "Created by Emily Williams",
			duration: "1-2 months",
			level: "Beginner",
			students: "1800+",
			rating: "4.5/5"
		},
		{
			id: "mobile-app-development",
			title: "Mobile App Development",
			description: "Build modern, responsive mobile apps for both iOS and Android platforms",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320863/lms-app/home/courses/Image-4_bwy985.png",
			createdBy: "Created by Alex Nguyen",
			duration: "3-6 months",
			level: "Intermediate",
			students: "3700+",
			rating: "4.7/5"
		},
		{
			id: "ui-ux-design",
			title: "UI/UX Design",
			description: "Develop user-centered design skills and create intuitive, visually appealing interfaces",
			thumbnail:
				"https://res.cloudinary.com/dvdzi0ei2/image/upload/v1713320866/lms-app/home/courses/Image-7_gbysiw.png",
			createdBy: "Created by Jessica Gonzalez",
			duration: "2-4 months",
			level: "Intermediate",
			students: "2500+",
			rating: "4.8/5"
		}
	]
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
		label: "Art & Humanitiess"
	}
];

export interface CourseFilter {
	id: string;
	label: string;
}
export const coursesFilterOptions = {
	category: [
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
