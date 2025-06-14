import { Tilt } from "react-tilt"
import { motion } from "framer-motion"
import { styles } from "../styles"
import { github } from "../assets"
import { SectionWrapper } from "../hoc"
import { projects } from "../constants"
import { fadeIn,textVariant } from "../utils/motion"


const ProjectCard = ({index,name,description,tags,image}) =>{

  return (
    <motion.div variants={fadeIn("up","spring",index * 0.5,0.75)}>
      <Tilt options={{max:45,scale:1,speed:450}} className="bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full">
        <div className="relative w-full h-[230px]">
          <img src={image} alt={name} className="w-full h-full object-cover rounded-2xl" />
        </div>
        <div className="mt-5">
          <h3 className="text-white font-bold text-[24px]">{name}</h3>
          <p className="mt-2 text-secondary text-[14px]">{description}</p>
        </div>
        <div className="mt-4 flex flex-warp gap-2">
          {tags.map((tag) => {
            return (
              <p key={tag.name} className={`text-[14px] ${tag.color}`}>#{tag.name}</p>
            )
          })}
        </div>
      </Tilt>
    </motion.div>
  )
}

const Works = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText} text-center`}>
          My Works
        </p>
        <h2 className={`${styles.sectionHeadText} text-center`}>
          Projects
        </h2>
      </motion.div>

      <div className="w-full flex">
        <motion.p variants={fadeIn("","",0.1,1)} className="mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]">
            Folling Projects are some real examples I did in my previous jobs. most of them are screenshots of my dashboards and also some python and SQL code for ETL or machine learning.
        </motion.p>
      
      </div>

      <div className="mt-20 flex flex-wrap gap-7">
        {projects.map((project,index) => {
          return (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          )
        })}  
      </div>  
    </>
  )
}

export default SectionWrapper(Works,"");