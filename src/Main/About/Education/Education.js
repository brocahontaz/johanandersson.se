import React from 'react'

import './Education.css'

import Section from 'Main/About/components/Section'
import ExpItem from 'Main/About/components/ExpItem'
import LNU from 'assets/lnu.png'
import LTH from 'assets/lth_logo.jpg'

const experiences = [
  {
    location: 'Linnaeus University',
    city: 'Kalmar/Växjö',
    duration: '2016 - 2020',
    title: 'Bachelor of Science, Computer Science',
    description: 
    [
      'Software Development and Operations.',
    'Bachelor\'s degree in software development with a focus on DevOps.'
    ],
    lists: [
      {
        name: 'Courses year 1',
        items: 
        [
          'Introduction to Programming, 7.5 HP',
          'Web Technology 1, 7.5 HP',
          'Problem Solving and Programming, 7.5 HP',
          'Client-based Web Programming, 7.5 HP',
          'Software Technology, 7.5 HP',
          'Programming and Data Structures, 7.5 HP',
          'Individual Software Development Project, 7.5 HP',
          'System Administration 1, 7.5 HP'
        ]
      },
      {
        name: 'Courses year 2',
        items: 
        [
          'Object Oriented Analysis and Design using UML, 7.5HP',
          'System Administration 2, 7.5HP',
          'Software Testing, 7.5HP',
          'Database Theory, 7.5HP',
          'Software Engineering - Design, 15HP',
          'Server-based Web Programming, 7.5HP',
          'Web Technology 2, 7.5HP'
        ]
      },
      {
        name: 'Courses year 3',
        items: 
        [
          'Deployment Infrastructures, 7.5HP',
          'Internet Security, 7.5HP',
          'Continuous Delivery, 7.5HP',
          'Agile Development and Engineering Practices, 7.5HP',
          'Degree Project at Bachelor Level, 15HP',
          'Entreprenourship, 7.5HP',
          'Interactiondesign, 7.5HP'
        ]
      }
    ],
    icon: LNU
  },
  {
    location: 'LTH',
    city: 'Lund',
    duration: '2013 - 2015',
    title: 'Computer Science',
    description: 
    [
      ''
    ],
    lists: [
      {
        name: 'Completed Courses',
        items: 
        [
          'Communication Systems, 7.5HP',
          'Programming - First Course, 7.5HP',
          'Programming - Second Course, 7.5HP',
          'Interaction Design - Basic Course, 7.5HP',
          'Software Engineering Process - Methodology, 5.0HP',
          'Software Engineering Process - Soft Issues, 5.0HP',
          'Object-oriented Modelling and Design, 4.5HP',
          'Database Technology, 7.5HP',
          'Network Programming, 7.5HP',
          'Web Security, 4.0HP'
        ]
      }
    ],
    icon: LTH
  }
]

const Education = () =>
  <Section header='Education' headerSize='small'>
    <ul className='ExperienceList'>
      {experiences.map(experience => (
      <li key={experience.title + experience.company + experience.duration}>
        <ExpItem 
        title={experience.title} 
        icon={experience.icon} 
        location={experience.location} 
        city={experience.city} 
        duration={experience.duration} 
        description={experience.description} 
        lists={experience.lists}
        />
      </li>
      ))}
    </ul>
  </Section>

export default Education