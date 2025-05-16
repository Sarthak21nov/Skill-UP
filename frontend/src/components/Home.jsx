import React from 'react'
import '../index.css'
import { Heading } from '@radix-ui/themes'
import { Box } from '@radix-ui/themes'
import { Card, Inset, Text, Strong} from '@radix-ui/themes'
import classNames from "classnames";
import { Accordion } from "radix-ui";
import { ChevronDownIcon } from "@radix-ui/react-icons";
import HomeCard from './HomeCard'
import finance from '../assets/finance.avif'
import DataScience from '../assets/What-is-data-science-2.jpg'
import tenth from '../assets/images.png'
import FSDev from '../assets/Guide_to_Full_Stack_Development_000eb0b2d0.jpg'
import WebDev from '../assets/download (1).jpeg'
import Cloud from '../assets/Cloud-Computing-Basics.avif'
import twelth from '../assets/CBSE-12th-Class-Syllabus.jpg'
import devOps from '../assets/7602.1513404277.png'
import cyberSec from '../assets/360_F_245636933_kY23ohGptK5t6n8wGSXIgLgVXWeHJRct.jpg'
import AIML from '../assets/324bs_ArtificialIntelligenceMachineLearning.webp'

function Home() {

  const AccordionItem = React.forwardRef(
	({ children, className, ...props }, forwardedRef) => (
		<Accordion.Item
			className={classNames(
				"mt-px overflow-hidden first:mt-0 first:rounded-t last:rounded-b focus-within:relative focus-within:z-10 focus-within:shadow-[0_0_0_2px] focus-within:shadow-mauve12",
				className,
			)}
			{...props}
			ref={forwardedRef}
		>
			{children}
		</Accordion.Item>
	),
    );

    const AccordionTrigger = React.forwardRef(
        ({ children, className, ...props }, forwardedRef) => (
            <Accordion.Header className="flex">
                <Accordion.Trigger
                    className={classNames(
                        "group flex h-[45px] flex-1 cursor-default items-center justify-between bg-mauve1 px-5 text-[15px] leading-none text-violet11 shadow-[0_1px_0] shadow-mauve6 outline-none hover:bg-mauve2",
                        className,
                    )}
                    {...props}
                    ref={forwardedRef}
                >
                    {children}
                    <ChevronDownIcon
                        className="text-violet10 transition-transform duration-300 ease-[cubic-bezier(0.87,_0,_0.13,_1)] group-data-[state=open]:rotate-180"
                        aria-hidden
                    />
                </Accordion.Trigger>
            </Accordion.Header>
        ),
    );

    const AccordionContent = React.forwardRef(
        ({ children, className, ...props }, forwardedRef) => (
            <Accordion.Content
                className={classNames(
                    "overflow-hidden bg-mauve2 text-[15px] text-mauve11 data-[state=closed]:animate-slideUp data-[state=open]:animate-slideDown",
                    className,
                )}
                {...props}
                ref={forwardedRef}
            >
                <div className="px-5 py-[15px]">{children}</div>
            </Accordion.Content>
        ),
    );  

    const FinanceDescription = "Finance studies introduce students to the fundamentals of money management, including budgeting, saving, investing, and understanding credit. It helps build financial literacy, enabling informed decisions about spending and planning for the future. Learners explore key concepts like interest rates, financial institutions, and economic principles that shape personal and global financial systems."

    const DSDescription = "Data Science focuses on extracting insights from data using statistical methods, programming, and analytical tools. It involves data collection, cleaning, visualization, and modeling to solve real-world problems. Students explore Python, data handling, and basic machine learning concepts to understand trends, patterns, and predictions in diverse domains."

    const tenthDescription = "The curriculum introduces foundational knowledge in IT, PCM, English and Hindi including basics of digital devices, internet usage, word processing, spreadsheets, and presentations. It also includes programming fundamentals, database management, and employability skills like communication and entrepreneurship, aiming to build a strong base for technical and soft skills development."

    const FSDescription = "Full Stack Development combines frontend and backend web technologies. Learners work with HTML, CSS, JavaScript, and frameworks like React for UI, while exploring Node.js, databases, and APIs for backend services. It promotes an understanding of complete web application architecture and deployment processes."

    const WebDevDesc = "Web Development introduces the creation of websites and web apps using HTML, CSS, and JavaScript. It covers layout design, styling, interactivity, and basic hosting. Students learn how to build responsive and user-friendly interfaces, making them capable of developing functional and aesthetic web pages."

    const cloudDesc = "Cloud Computing covers the basics of internet-based computing, allowing access to data and applications over the web. Students learn about cloud services (IaaS, PaaS, SaaS), virtualization, storage, and security. It enhances understanding of scalable IT solutions used by modern enterprises."

    const twelthDesc = "It focuses on advanced programming concepts, data structures, and database management. Topics include Python, MySQL, file handling, data visualization, and cybersecurity. Learners also gain exposure to networking, data management, and working on real-life problem-solving through projects."

    const devOpsDesc = "DevOps integrates software development and IT operations to improve collaboration and automate workflows. Students explore version control (Git), CI/CD pipelines, containerization with Docker, and basic scripting. It promotes a culture of continuous integration, testing, and delivery for efficient software lifecycle management."

    const cyberSecDev = "Cyber Security teaches methods to protect systems, networks, and data from cyber threats. Learners understand encryption, malware, firewalls, phishing, and ethical hacking basics. It emphasizes safe digital practices, risk management, and awareness of current cyber laws and policies."

    const AIMLDesc = "AI/ML explores intelligent systems that mimic human behavior. Students learn about data, algorithms, and models that enable machines to recognize patterns, make decisions, and improve over time. Topics include supervised learning, classification, and real-life AI applications in daily life."

  return (
    <section id='home' className='w-full min-h-[50vh] z-1'>
       <div className='md:grid md:grid-cols-2 flex flex-col'>
            <div className='flex justify-center items-center col-span-1'>
                <img src='https://www.transparentpng.com/thumb/student/ECcMj8-student-png.png' loading='lazy' className='m-4 mt-10'/>
            </div>
            <div className='flex justify-center items-center col-span-1 m-2'>
                <p className='text-6xl font-bold text-center p-4'>Level up <br/>Your Skills and, <br/> Unlock your Future <br/>with us.</p>
            </div>
        </div> 
       
       <Heading size="7" className='text-center m-7 text-3xl'>Why Choose Skill Up?</Heading>

       <div className='md:grid md:grid-cols-2 flex flex-col m-4'>
            <div className='col-span-1 flex justify-center items-center m-3'>
                <Box maxWidth="450px">
                    <Card size="3">
                        <Inset clip="padding-box" side="top" pb="current"/>
                        <Text as="p" size="3">
                            <ul>
                                <li>🔍 Discover the best learning resources curated from across the internet</li>
                                <li>🎥 Access top-rated video lectures and tutorials from trusted educators</li>
                                <li>📚 Find the most effective online courses tailored to your goals and skill level</li>
                            </ul>
                        </Text>
                    </Card>
                </Box>
            </div>
            <div className='col-span-1 flex justify-center items-center m-3'>
                <Accordion.Root
                    className="w-[500px] rounded-md bg-mauve6 shadow-[0_2px_10px] shadow-black/5 border-2 solid shadow-xl"
                    type="single"
                    defaultValue="item-1"
                    collapsible
                >
                    <AccordionItem value="item-1">
                        <AccordionTrigger>What is Skill Up?</AccordionTrigger>
                        <AccordionContent>
                            Skill Up is a platform designed to help learners discover the best online resources, including video lectures, courses, and tutorials, all curated to accelerate their learning journey.
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-2">
                        <AccordionTrigger>Self Tracking Feature?</AccordionTrigger>
                        <AccordionContent>
                            The website will keep on tacking the student progress, with the help of monitoring and lectures and regular tests based on the topics for better analysis of the student. 
                        </AccordionContent>
                    </AccordionItem>

                    <AccordionItem value="item-3">
                        <AccordionTrigger>Is Skill Up free to use?</AccordionTrigger>
                        <AccordionContent>
                            Yes! Our platform is completely free to explore. We believe quality education should be accessible to everyone, anytime, anywhere.
                        </AccordionContent>
                    </AccordionItem>
                </Accordion.Root>
            </div>
       </div>

       <Heading size="7" className='text-center mt-[50px] text-3xl animation-popup'>Get Ready to Master Skills and Ace in Examinations</Heading>

       <div className='justify-evenly flex flex-wrap m-10'>
            <HomeCard image={finance} alt="Finance" title="Finance" description={FinanceDescription}/>
            <HomeCard image={DataScience} alt="Data Science" title="Data Science" description={DSDescription}/>
            <HomeCard image={tenth} alt="Class 10th" title="Class 10th" description={tenthDescription}/>
            <HomeCard image={FSDev} alt="FULL STACK" title="Full Stack Development" description={FSDescription}/>
            <HomeCard image={WebDev} alt="Web Development" title="Web Development" description={WebDevDesc}/>
            <HomeCard image={Cloud} alt="Cloud Computing" title="Cloud Computing" description={cloudDesc}/>
            <HomeCard image={twelth} alt="Class 12th" title="Class 12th" description={twelthDesc}/>
            <HomeCard image={devOps} alt="DevOps" title="Devops" description={devOpsDesc}/>
            <HomeCard image={cyberSec} alt="Cyber Security" title="Cyber Security" description={cyberSecDev}/>
            <HomeCard image={AIML} alt="AI & ML" title="Artificial Development and Machine Learning" description={AIMLDesc}/>
       </div>

    </section>
  )
}

export default Home