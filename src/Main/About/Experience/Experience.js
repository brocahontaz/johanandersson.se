import React from 'react'

import './Experience.css'

import Section from 'Main/About/components/Section'
import ExpItem from 'Main/About/components/ExpItem'
import Sensative from 'assets/sensative.png'
import Doktor from 'assets/doktor.png'

const experiences = [
  {
    location: 'Doktor.se Nordic AB',
    city: 'Stockholm / Remote',
    duration: '2022-07-04 - now',
    title: 'DevSecOps Engineer',
    description: [''],
    lists: [
      {
        name: 'Technologies & Tools',
        items: ['AWS', 'Terraform', 'Kubernetes', 'Helm', 'FluxCD', 'Node.js', 'Bash', 'Github Actions']
      }
    ],
    icon: Doktor
  },
  {
    location: 'Sensative AB',
    city: 'Lund',
    duration: '2020-09-02 - 2022-07-01',
    title: 'DevOps Engineer',
    description: ['Working with a wide range of technologies and tools, with a main focus on, and responsibility of, the underlying infrastructure.',
    'Daily work include implementation and operation of Kubernetes, Docker resources, building custom CLI tools, servers, pipelines, scalability and automation.'],
    lists: [
      {
        name: 'Technologies & Tools',
        items: ['Kubernetes', 'Helm', 'Docker', 'Node.js', 'Bash', 'Ansible', 'Terraform', 'Gitlab CI/CD', 'Openstack']
      }
    ],
    icon: Sensative
  },
  {
    location: 'Sensative AB',
    city: 'Lund',
    duration: 'Jan 2020 - June 2020',
    title: 'Thesis Worker',
    description: ['Degree project with focus a on DevOps. Migration of infrastructure to a full-scale Kubernetes cluster.', 
    'Implemented and configured a Kubernetes cluster with dynamic allocation of resources, such as load balancers and volumes, in the underlying OpenStack system when deploying new applications. Implemented the possibility of deploying several instances, separated by namespaces, as well as autogeneration of TLS certificates to the various instances.',
    'Used techniques / tools such as Terraform, Ansible, rke and Helm. The latter was used to enable more dynamic deployments, as well as reducing redundancy in the configuration files.'],
    icon: Sensative
  },
]

const Experience = () =>
  <Section header='Experience' headerSize='small'>
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

export default Experience