import React from "react";

import {motion} from "framer-motion";

import Timeline from "@mui/lab/Timeline";
import TimelineItem from "@mui/lab/TimelineItem";
import TimelineSeparator from "@mui/lab/TimelineSeparator";
import TimelineConnector from "@mui/lab/TimelineConnector";
import TimelineContent from "@mui/lab/TimelineContent";
import TimelineDot from "@mui/lab/TimelineDot";

export default function OutlinedTimeline() {
  return (
    <div className="border-b border-neutral-900 pb-4">
      <motion.h1
        whileInView={{ opacity: 1, y: 0 }}
        initial={{ opacity: 0, y: -100 }}
        transition={{ duration: 0.5 }}
        className="my-20 text-center  text-4xl"
      >
        Timeline
      </motion.h1>

      <Timeline position="alternate">
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}
            >
              <h2>Graphics Head</h2>
              <h3>March 2023</h3>
              <p>
              Oversaw designing strategies for Techvista 2022-23. Led a team to effectively promote the festival, significantly boosting participation and engagement through innovative designing posters and flex for campaigns and initiatives.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration:1}}>
              <h2>Event Head - WEB AVATAR</h2>
              <h3>1st March 2023</h3>
              <p>
              Organized and led the Web Designing event, "Web Avatar", during Techvista 2022-23. Managed event planning, coordination, and execution, ensuring a seamless and engaging experience for participants.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}>
              <h2>V Search</h2>
              <h3>3rd March 2023</h3>
              <p>
              Participated in the V-Search research paper presentation competition, presenting a paper that was subsequently published in the journal Vijanan 2023.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration:1}}>
              <h2>Research Publication in IJNRD</h2>
              <h3>10th July 2023</h3>
              <p>
              Published a research paper on fake news detection using logistic regression in the International Journal of Novel Research and Development (IJNRD).
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}>
              <h2>NAAC Committee Volunteer</h2>
              <h3>Sept 2023 - March 2024</h3>
              <p>
              Contributed to the NAAC accreditation process by creating a detailed 3D model of the college. Utilized advanced modeling techniques to accurately represent campus infrastructure, enhancing the institution's presentation and evaluation.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration:1}}>
              <h2>AAVISHKAR (Zonal Round, Mumbai 1 Zone)</h2>
              <h3>9th December 2023</h3>
              <p>
              Presented at Aavishkar PG Level at the 18th Aavishkar Inter-Collegiate/Institute/Department Research Convention (Zonal Round), organized by the University of Mumbai at Lala Lajpat Rai College of Commerce and Economics, Mahalaxmi, Mumbai on December 9, 2023, for Mumbai I zone.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}>
              <h2>Course Instructor - Blender 3D</h2>
              <h3>Jan 2024 - March 2024</h3>
              <p>
              Conducted a Value Added Course on Blender 3D, teaching students the fundamentals and advanced techniques of 3D modeling. Developed course materials and provided hands-on training to enhance participants' skills in Blender 3D.
              </p>
            </motion.div>
          </TimelineContent>

          
        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration:1}}>
              <h2>Event Head - Escape Room ("Locked in Time")</h2>
              <h3>15th March 2024</h3>
              <p>
              Hosted the Escape Room event, "Locked in Time", at Techvista 2023-24. Directed the creation and implementation of challenging puzzles and immersive scenarios, providing participants with a memorable and engaging experience.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="secondary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
            initial={{ opacity: 0, x: 100 }}
            transition={{ duration: 1 }}>
              <h2>Anchor - TechNext 2024 Symposium</h2>
              <h3>20th April & 4th May 2024</h3>
              <p>
              Anchored the TechNext 2024 symposium, effectively engaging the audience and ensuring the smooth flow of events. Delivered presentations and facilitated discussions, contributing to the symposium's success.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" color="primary" />
            <TimelineConnector />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
            whileInView={{ opacity: 1, x:0 }}
            initial={{ opacity: 0, x: -100 }}
            transition={{duration:1}}>
              <h2>Internship at VSIT</h2>
              <h3>15th May 2024</h3>
              <p>
              Successfully completed an internship, receiving a completion letter from the college.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
        <TimelineItem>
          <TimelineSeparator>
            <TimelineDot variant="outlined" />
          </TimelineSeparator>


          <TimelineContent>
            <motion.div
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: 100 }}
             transition={{ duration: 1 }}>
              <h2>Letter of Recommendation</h2>
              <h3>15th May 2024</h3>
              <p>
              Obtained a Letter of Recommendation from the principal for outstanding academic 
              and extracurricular achievements.
              </p>
            </motion.div>
          </TimelineContent>


        </TimelineItem>
      </Timeline>
    </div>
  );
}
