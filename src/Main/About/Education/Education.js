import React from 'react'

import './Education.css'

import Section from 'Main/About/components/Section'
import ExpItem from 'Main/About/components/ExpItem'
import LNU from 'assets/lnu.png'

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
          'Introduction to Programming | 1dv021 | 7.5 HP',
          'Web Technology 1 | 1me321 | 7.5 HP',
          'Problem Solving and Programming | 1dv506 | 7.5 HP',
          'Client-based Web Programming | 1dv022 | 7.5 HP',
          'Software Technology | 1dv600 | 7.5 HP',
          'Programming and Data Structures | 1dv507 | 7.5 HP',
          'Individual Software Development Project | 1dv430 | 7.5 HP',
          'System Administration 1 | 1dv031 | 7.5 HP'
        ]
      },
      {
        name: 'Courses year 2',
        items: []
      },
      {
        name: 'Courses year 3',
        items: []
      }
    ],
    icon: LNU
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