import { motion } from "framer-motion"
import {useRef} from 'react'
import {useState} from 'react'
import "./contact.scss"
import emailjs from '@emailjs/browser';
export default function Contact() {
    const ref = useRef();
    const [error, setError] = useState(false);
    const [success, setSuccess] = useState(false);

    const variants = {
        initial:{
            y:500,
            opacity:0
        },
        animate:{
            y:0,
            opacity:1,
            transition:{
                duration:0.5,
                staggerChildren: 0.1,
            }
        }
    }

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs
          .sendForm('service_m9ycpyu', 'template_nxzu6kb', ref.current, {
            publicKey: 'r-2lm_0x8PNNvdHK5',
          })
          .then(
            () => {
              setSuccess(true);
            },
            () => {
              setError(true);
            },
          );
      };
    
  return (
    <motion.div className="contact" variants={{variants}} initial="initial" whileInView="animate">
        <motion.div className="textContainer">
            <motion.h1>Let's work together</motion.h1>
            <motion.div className="item">
                <h2>Mail</h2>
                <span>khoalvd2412@gmail.com</span>
            </motion.div>
            <motion.div className="item">
                <h2>Address</h2>
                <span>Quang Trung, Go Vap district, HCM, VN</span>
            </motion.div>
            <motion.div className="item">
                <h2>Phone</h2>
                <span>+84 968 368 595</span>
            </motion.div>
        </motion.div>
        <div className="formContainer">
            <motion.div className="phoneSVG" initial={{opacity:1}} whileInView={{opacity:0}} transition={{delay:3, duration:1}}>
                <svg fill="#000000" width="400px" height="400px" viewBox="0 0 64 64" version="1.1" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">

                <g id="_x32_5_attachment"/>

                <g id="_x32_4_office"/>

                <g id="_x32_3_pin"/>

                <g id="_x32_2_business_card"/>

                <g id="_x32_1_form"/>

                <g id="_x32_0_headset"/>

                <g id="_x31_9_video_call"/>

                <g id="_x31_8_letter_box"/>

                <g id="_x31_7_papperplane">

                <g>

                <g>

                <motion.path
                initial ={{pathLength:0}}
                whileInView={{pathLength:1}}
                transition={{duration: 3}}
                d="M62.9891,2.5618c-0.0765-0.5779-0.6611-0.9805-1.2299-0.8401L7.4043,15.2065c-0.3535,0.0879-0.6318,0.3608-0.7256,0.7129     s0.0112,0.7275,0.2744,0.9795l13.9343,13.3583l-2.7649,17.1495c-0.1079,0.6712,0.4969,1.2576,1.1582,1.1445l18.0805-3.1324     l17.1832,9.6988c0.1523,0.0859,0.3218,0.1289,0.4917,0.1289c0.1523,0,0.3047-0.0347,0.4453-0.1045     c0.2969-0.1475,0.5015-0.4331,0.5459-0.7617l6.9639-51.5542C63.0031,2.7372,63.0007,2.6487,62.9891,2.5618z M9.647,16.7109     L56.8914,4.9902L22.2545,28.7978L9.647,16.7109z M36.9146,43.4663l-16.5942,2.875l2.4995-15.5054L58.8633,6.0615L36.9146,43.4663     z M54.2427,52.6504l-15.3231-8.6492l21.4231-36.509L54.2427,52.6504z"/>

                <motion.path 
                initial ={{pathLength:0}}
                whileInView={{pathLength:1}}
                transition={{duration: 2}}
                d="M14.4438,51.6099l-4.6948,5.209c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573     c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6948-5.209c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121     C15.4463,51.1675,14.8135,51.2002,14.4438,51.6099z"/>

                <motion.path 
                initial ={{pathLength:0}}
                whileInView={{pathLength:1}}
                transition={{duration: 2}}
                d="M5.9478,29.0562l-4.6909,5.2085c-0.3696,0.4106-0.3364,1.043,0.0742,1.4126c0.1909,0.1719,0.4302,0.2568,0.6685,0.2568     c0.2739,0,0.5459-0.1113,0.7437-0.3311l4.6909-5.2085c0.3696-0.4106,0.3364-1.043-0.0742-1.4126     C6.9487,28.6128,6.3179,28.6455,5.9478,29.0562z"/>

                <motion.path 
                initial ={{pathLength:0}}
                whileInView={{pathLength:1}}
                transition={{duration: 2}}
                d="M40.8164,55.4331l-4.6909,5.2051c-0.3701,0.4102-0.3369,1.0425,0.0732,1.4121c0.1909,0.1724,0.4307,0.2573,0.6689,0.2573     c0.2734,0,0.5459-0.1113,0.7432-0.3306l4.6909-5.2051c0.3701-0.4102,0.3369-1.0425-0.0732-1.4121     C41.8188,54.9907,41.186,55.0234,40.8164,55.4331z"/>

                </g>

                </g>

                </g>

                <g id="_x31_6_laptop"/>

                <g id="_x31_5_connection"/>

                <g id="_x31_4_phonebook"/>

                <g id="_x31_3_classic_telephone"/>

                <g id="_x31_2_sending_mail"/>

                <g id="_x31_1_man_talking"/>

                <g id="_x31_0_date"/>

                <g id="_x30_9_review"/>

                <g id="_x30_8_email"/>

                <g id="_x30_7_information"/>

                <g id="_x30_6_phone_talking"/>

                <g id="_x30_5_women_talking"/>

                <g id="_x30_4_calling"/>

                <g id="_x30_3_women"/>

                <g id="_x30_2_writing"/>

                <g id="_x30_1_chatting"/>

                </svg>
            </motion.div>
            {/* before 0 after 1 */}
            <motion.form initial={{opacity:0}} whileInView={{opacity:1}} transition={{delay: 4, duration:1}} ref={ref} onSubmit={sendEmail}>
                <input type="text" required placeholder="Name" name="from_name"/>
                <input type="email" required placeholder="Email" name="email"/>
                <textarea rows={8} placeholder="Message" name="message"></textarea>
                <button className="text-white bg-gradient-to-r from-purple-500 to-pink-500 hover:bg-gradient-to-l focus:ring-4 focus:outline-none focus:ring-purple-200 dark:focus:ring-purple-800 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2">Submit</button>
                {error && "Error"}
                {success && "Success"}
            </motion.form>
        </div>
    </motion.div>
  )
}
