"use client"

import { motion } from "framer-motion"
import { ExternalLink, Github } from "lucide-react"
import { Button } from "@/components/ui/button"

const projects = [
  {
    title: "Student Feedback Management System",
    description: "This project is a Student Feedback Management System developed using MySQL for database management and a web-based application for the frontend. The system was designed to automate and streamline the feedback process between students and their professors or courses. Below are the key highlights of the project",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS9Drevnd3m5nHVP9uHkNqk0Sdv0OAvJn_r7g&s",
    technologies: ["MYSQL", "PHP", "HTML", "CSS", "Javascript"],
    links: {
      github: "https://github.com/example",
      live: "https://example.com"
    }
  },
  {
    title: " Fake Product Identification System Using Blockchain Technology",
    description: "This project aims to combat the growing issue of counterfeit products by leveraging Blockchain Technology to ensure the authenticity of products. The system is designed to provide a transparent, immutable, and secure way of tracking the product’s journey from manufacturing to the end consumer",
    image: "https://repository-images.githubusercontent.com/642951378/59ae7fc8-023d-4493-873b-f58a5a1155d9",
    technologies: ["HTML", "CSS", "Python", "Blockchain", "Anaconda", "Machine Learning", "GitHub"],
    links: {
      github: "https://github.com/example",
      live: "https://example.com"
    }
  },
  {
    title: "Speech-Based Robotic Language Automation",
    description: "This project is focused on Speech-Based Robotic Language Automation, which utilizes speech recognition and natural language processing (NLP) to control robotic systems and automate tasks using voice commands. The system enables hands-free interaction with robotic systems, making it useful in a variety of applications such as smart homes, industrial automation, and healthcare robotics",
    image: "https://summalinguae.com/wp-content/uploads/2022/10/chatbot-speech-recognition.jpg",
    technologies: ["Machine Learning", "GitHub", "Pyhton", "NLP", "Jupyter", "text-to-Speech"],
    links: {
      github: "https://github.com/example",
      live: "https://example.com"
    }
  },
  {
    title: "LiFi (Light Fidelity) Communication System",
    description: "This project is focused on LiFi (Light Fidelity), an advanced wireless communication technology that uses visible light to transmit data. LiFi operates by modulating the intensity of light to encode data, which can then be decoded by a photodetector at the receiver end. It offers an innovative solution for high-speed internet and data transmission, providing a safer and more efficient alternative to traditional Wi-Fi.",
    image: "https://corpseed-main.s3.ap-south-1.amazonaws.com/corpseed/LIFI_Technology_Corpseed.png",
    technologies: ["LiFi Technology",
      "Wireless Communication",
      "Data Encoding and Decoding",
      "LED Transmitters",
      "Photodetectors",
      "Microcontroller Integration",
      "Signal Modulation Techniques",
      "Wireless Network Protocols",
      "Networking and Security",
      "High-Speed Data Transmission",
      "Smart Home/Office Integration",
      "Application Development"
    ],
    links: {
      github: "https://github.com/example",
      live: "https://example.com"
    }
  },
  {
    title: "Temperature-Based Fan Speed Controller Using ESP8266 NodeMCU",
    description: "This project involves the development of a Temperature-Based Fan Speed Controller, where the speed of a fan is automatically adjusted based on the ambient temperature. The system is powered by the ESP8266 NodeMCU microcontroller, which is responsible for reading temperature data from a sensor and controlling the fan's speed using PWM (Pulse Width Modulation).",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSKhEBbu2JCriDhuAZtvJeWO87vyqZ5N_YzEg&s",
    technologies: [
      "ESP8266 NodeMCU",
      "DHT11/DHT22 Temperature Sensor",
      "Pulse Width Modulation (PWM)",
      "Wi-Fi Connectivity",
      "Microcontroller Programming",
      "IoT (Internet of Things)",
      "Sensor Integration",
      "Temperature Sensing",
      "Web Interface Development",
      "HTML/CSS/JavaScript for UI",
      "Wireless Communication",
      "Energy-Efficient Systems",
      "Embedded Systems Design",
      "Hardware and Software Integration"
    ],
    links: {
      github: "https://github.com/example",
      live: "https://example.com"
    }
  },
]

export function ProjectGrid() {
  return (
    <div className="grid gap-8 md:grid-cols-2">
      {projects.map((project, index) => (
        <motion.div
          key={project.title}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: index * 0.1 }}
          className="group relative overflow-hidden rounded-lg border"
        >
          <div className="aspect-video overflow-hidden">
            <img
              src={project.image}
              alt={project.title}
              className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <div className="mb-4 flex items-start justify-between">
              <h3 className="text-2xl font-bold">{project.title}</h3>
              <div className="flex space-x-2">
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.links.github} target="_blank" rel="noopener noreferrer">
                    <Github className="h-5 w-5" />
                  </a>
                </Button>
                <Button variant="ghost" size="icon" asChild>
                  <a href={project.links.live} target="_blank" rel="noopener noreferrer">
                    <ExternalLink className="h-5 w-5" />
                  </a>
                </Button>
              </div>
            </div>
            <p className="mb-4 text-muted-foreground">{project.description}</p>
            <div className="flex flex-wrap gap-2">
              {project.technologies.map((tech) => (
                <span
                  key={tech}
                  className="rounded-full bg-secondary px-3 py-1 text-sm text-secondary-foreground"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  )
}