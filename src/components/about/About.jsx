import React from 'react';
import './About.css';
import Image from '../../assets/avatar-2.svg';
import Resume from '../../assets/resume.pdf';
import AboutBox from './AboutBox';

const About = () => {
    const downloadResume = async () => {
        window.open(Resume, '_blank');
    }


    return (
        <section className="about container section" id="about">
            <h2 className="section__title">About Me </h2>

            <div className="about__container grid">
                <img src={Image} alt="" className='about__img' />

                <div className="about__data grid">
                    <div className="about__info">
                        <p className="about__description">
                        <p><b> That Time I Got Reincarnated as a Data Scientist!</b></p>

I still remember the day it happened. One moment, I was just lazzy cat, a budding data analyst working tirelessly on dashboards and reports. The next moment, I found myself waking up in a completely new reality—one where I was no longer just a data analyst but something more… something greater.<br></br>

It all started on an ordinary Monday morning. My laptop was open, Power BI was running, and I was knee-deep in optimizing a dashboard for Projects. As usual, I was juggling SQL queries and visualization tweaks. But just as I was about to hit “Refresh,” my screen flickered. At first, I thought it was a power cut. But then, everything around me dissolved into lines of code, numbers, and swirling data points.<br></br>

When I opened my eyes, I wasn't in my tiny office anymore. I was standing inside a vast, endless grid of data streams—charts floated in mid air, SQL queries were written in glowing letters, and a massive neural network pulsed in the distance like the beating heart of this strange, digital realm.<br></br>
A deep voice echoed around me:<p><i> “Welcome, Yashodatta. You have been chosen. Your journey as a Data Scientist begins now.”</i></p>
<i>“What? Wait—what happened to being a Data Analyst?”</i> I blurted out.<br></br>

The voice chuckled. <i>“That was your tutorial level. Now, you must master the art of true data science.”</i><br></br>

Before I could ask any more questions, my hands began to glow. A notification appeared in front of me, listing my new "technologies":

<br></br>
                    
                        <ul className="about__list">
                            <li>"dataAnalysis": ["Pandas", "NumPy", "Matplotlib", "SciPy"],</li>
                            <li>"machineLearning": ["Scikit-learn", "TensorFlow", "Keras"],</li>
                            <li>"deepLearning": ["ANN", "CNN", "LSTM"],</li>
                            <li>"computerVision": ["OpenCV"],</li>
                            <li>"nlp": ["NLP", "LLM2"],</li>
                            <li>"timeSeries": ["Time Series Analysis"],</li>
                            <li>"databases": ["MySQL", "ChromaDB"],</li>
                            <li>"biTools": ["Power BI", "Excel", "Tableau"],</li>
                            <li>"llmFrameworks": ["LangChain"],</li>
                            <li>"appDevelopment": ["Streamlit"]</li>
                         </ul>
I took a deep breath. This wasn't a dream—this was real. Somehow, I had been given the chance to level up beyond my six-month experience and become something more. If this was my new life, I was going to make the most of it.<br></br>

And so, my journey as a Data Scientist began.
                        </p>
                       
                        <button className="btn" onClick={downloadResume}>Donwload CV</button>
                    </div>

                    {/* <div className="about__skills grid">
                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Development</h3>
                                <span className="skills__number">90%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage development">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">UI/UX Design</h3>
                                <span className="skills__number">80%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage ui__design">

                                </span>
                            </div>
                        </div>

                        <div className="skills__data">
                            <div className="skills__titles">
                                <h3 className="skills__name">Photography</h3>
                                <span className="skills__number">60%</span>
                            </div>

                            <div className="skills__bar">
                                <span className="skills__percentage photography">

                                </span>
                            </div>
                        </div>
                    </div> */}
                </div>
            </div>

            <AboutBox />
        </section>
    )
}

export default About