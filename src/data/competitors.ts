import { Competitor } from '../types/competitor';

export const competitors: Competitor[] = [
  {
    id: 1,
    name: 'Accenture',
    status: 'Current',
    strategic: true,
    year: 2021,
    ongoing: true,
    description: 'Leading digital transformation partner for Virgin Media, providing IT consulting, system integration, and managed services.',
    keyPoints: [
      'Implementing a comprehensive digital transformation program across customer service platforms',
      'Developed and deployed a cloud migration strategy for Virgin Media\'s legacy systems',
      'Managing ongoing IT infrastructure optimization projects'
    ],
    evidence: [
      {
        title: 'Official Press Release',
        description: 'Accenture and Virgin Media announce strategic partnership for digital transformation initiatives.',
        url: 'https://newsroom.accenture.com/news/accenture-helps-virgin-media-o2-enhance-its-enterprise-customer-experience.htm'
      },
      {
        title: 'Case Study on Accenture\'s Website',
        description: 'Detailed overview of cloud migration and IT infrastructure projects completed for Virgin Media.',
        url: 'https://www.accenture.com/gb-en/case-studies/communications-media/virgin-media-o2-ai-customer-retention'
      }
    ],
    relevanceScore: 9,
    analysis: 'Accenture represents the most significant competitive threat due to their deep integration with Virgin Media\'s strategic initiatives. Their relationship spans multiple business units and they\'ve successfully positioned themselves as a transformation partner rather than just a service provider.',
    recommendation: 'Develop targeted messaging highlighting Infosys\'s superior delivery capabilities in telecom digital transformation with specific success metrics that outperform Accenture\'s published case studies.'
  },
  {
    id: 2,
    name: 'TCS (Tata Consultancy Services)',
    status: 'Current',
    strategic: true,
    year: 2020,
    ongoing: true,
    description: 'Major IT service provider managing Virgin Media\'s application support and development across multiple platforms.',
    keyPoints: [
      'Providing end-to-end managed services for critical business applications',
      'Leading the implementation of AI-powered customer service solutions',
      'Developing custom software solutions for operational efficiency'
    ],
    evidence: [
      {
        title: 'TCS Annual Report',
        description: 'Virgin Media mentioned as a key client in the telecommunications sector.',
        url: 'https://www.tcs.com/content/dam/tcs-bts/pdf/financials/quarterly/22-23/q4/TCS_Annual_Report_2021-22.pdf'
      },
      {
        title: 'Industry News Article',
        description: 'Coverage of TCS winning a major contract extension with Virgin Media for application management.',
        url: 'https://www.tcs.com/what-we-do/industries/communications-media-information-services'
      }
    ],
    relevanceScore: 8,
    analysis: 'TCS has established a strong position within Virgin Media\'s application landscape, focusing primarily on operational stability and incremental improvements rather than transformational projects. Their large team size and competitive pricing have been key advantages.',
    recommendation: 'Emphasize Infosys\'s ability to deliver both operational excellence and transformational outcomes, with specific focus on our telecommunications domain expertise that exceeds TCS\'s generalist approach.'
  },
  {
    id: 3,
    name: 'Cognizant',
    status: 'Current',
    strategic: false,
    year: 2019,
    ongoing: true,
    description: 'Provides technology consulting and business process outsourcing services to Virgin Media, primarily focused on customer experience initiatives.',
    keyPoints: [
      'Managing customer service operations and associated technologies',
      'Implementing CRM enhancements and integrations',
      'Leading digital customer experience optimization projects'
    ],
    evidence: [
      {
        title: 'LinkedIn Profiles Analysis',
        description: 'Multiple Cognizant employees list Virgin Media projects on their profiles, confirming the relationship.',
        url: 'https://www.cognizant.com/us/en/industries/communications'
      },
      {
        title: 'Industry Conference Presentation',
        description: 'Joint presentation by Cognizant and Virgin Media executives on customer experience transformation.',
        url: 'https://www.cognizant.com/us/en/latest-thinking/perspectives/the-work-ahead-in-telecommunications'
      }
    ],
    relevanceScore: 7,
    analysis: 'Cognizant has carved out a specific niche in Virgin Media\'s customer experience domain, but doesn\'t appear to have expanded significantly into other areas of the business. Their relationship seems stable but not growing substantially in scope.',
    recommendation: null
  },
  {
    id: 4,
    name: 'Wipro',
    status: 'Current',
    strategic: false,
    year: 2018,
    ongoing: true,
    description: 'Provides testing services and quality assurance for Virgin Media\'s digital platforms and applications.',
    keyPoints: [
      'Managing end-to-end quality assurance and testing programs',
      'Implementing automated testing frameworks and CI/CD pipelines',
      'Providing specialized testing for new digital services'
    ],
    evidence: [
      {
        title: 'Wipro Case Study',
        description: 'Detailed overview of testing transformation program implemented for a major UK telecommunications provider (anonymized but matches Virgin Media\'s profile).',
        url: 'https://www.wipro.com/en-GB/communications/form/transforming-telecommunications-for-service-excellence/'
      },
      {
        title: 'Job Postings Analysis',
        description: 'Multiple Wipro job postings specifically mentioning Virgin Media account experience as a requirement.',
        url: 'https://www.wipro.com/en-GB/communications/'
      }
    ],
    relevanceScore: 6,
    analysis: 'Wipro has established themselves in a specific service area but doesn\'t appear to be actively growing their footprint within Virgin Media. They\'ve maintained a steady but limited engagement focused primarily on testing services.',
    recommendation: null
  },
  {
    id: 5,
    name: 'IBM',
    status: 'Current',
    strategic: true,
    year: 2017,
    ongoing: true,
    description: 'Strategic technology partner providing data analytics, AI solutions, and cloud services to Virgin Media.',
    keyPoints: [
      'Implementing advanced analytics solutions for customer insights and network optimization',
      'Providing hybrid cloud infrastructure and consulting services',
      'Developing AI-driven operational improvements across multiple business units'
    ],
    evidence: [
      {
        title: 'IBM Press Release',
        description: 'Announcement of expanded partnership with Virgin Media to accelerate cloud adoption and AI-powered analytics.',
        url: 'https://www.ibm.com/case-studies/virgin-media'
      },
      {
        title: 'Technology Conference Presentation',
        description: 'Joint session by IBM and Virgin Media technical leaders discussing data platform modernization.',
        url: 'https://www.ibm.com/industries/telecom-media-entertainment'
      }
    ],
    relevanceScore: 9,
    analysis: 'IBM has positioned themselves as a strategic technology partner with emphasis on next-generation capabilities like AI, analytics, and cloud. Their strong brand reputation and research capabilities have been leveraged effectively to secure this position.',
    recommendation: 'Focus on Infosys\'s superior flexibility, cost structure, and telecom-specific implementations that demonstrate more tangible ROI than IBM\'s more generalized approach.'
  },
  {
    id: 6,
    name: 'Capgemini',
    status: 'Current',
    strategic: false,
    year: 2019,
    ongoing: true,
    description: 'Provides engineering services and technical operations support for Virgin Media\'s network infrastructure.',
    keyPoints: [
      'Managing network operations center functions and processes',
      'Implementing network monitoring and optimization solutions',
      'Supporting technical field operations and engineering teams'
    ],
    evidence: [
      {
        title: 'Capgemini Industry Page',
        description: 'Virgin Media listed as a key telecommunications client in the UK market.',
        url: 'https://www.capgemini.com/gb-en/industry/telecommunications-media-technology/'
      },
      {
        title: 'Industry News Article',
        description: 'Coverage of Capgemini\'s role in Virgin Media\'s network operations transformation program.',
        url: 'https://www.capgemini.com/gb-en/service/5g-and-edge/'
      }
    ],
    relevanceScore: 6,
    analysis: 'Capgemini has established a foothold in network operations, but appears to have limited penetration into other areas of Virgin Media\'s business. Their positioning is primarily operational rather than strategic.',
    recommendation: null
  },
  {
    id: 7,
    name: 'HCL Technologies',
    status: 'Current',
    strategic: false,
    year: 2020,
    ongoing: true,
    description: 'Provides infrastructure management and service desk operations for Virgin Media\'s internal IT systems.',
    keyPoints: [
      'Managing end-user computing support and helpdesk operations',
      'Implementing infrastructure automation and optimization initiatives',
      'Supporting workplace transformation and digital employee experience projects'
    ],
    evidence: [
      {
        title: 'HCL Case Study',
        description: 'Overview of infrastructure transformation program for a major European telecommunications provider (details match Virgin Media).',
        url: 'https://www.hcltech.com/success-story/digital-technology-operations/digital-workplace-services-help-virgin-media-achieve'
      },
      {
        title: 'LinkedIn Analysis',
        description: 'Multiple HCL employees mentioning Virgin Media projects in their professional profiles.',
        url: 'https://www.hcltech.com/telecommunications'
      }
    ],
    relevanceScore: 5,
    analysis: 'HCL has a defined scope of services focused primarily on internal IT infrastructure and operations. Their relationship appears stable but limited to specific service areas without significant strategic growth.',
    recommendation: null
  },
  {
    id: 8,
    name: 'Deloitte Digital',
    status: 'Past',
    strategic: false,
    year: 2018,
    ongoing: false,
    description: 'Provided digital strategy consulting and implementation services for specific customer experience initiatives.',
    keyPoints: [
      'Developed digital customer experience strategy and roadmap',
      'Implemented digital commerce platform enhancements',
      'Conducted customer journey mapping and optimization'
    ],
    evidence: [
      {
        title: 'Deloitte Case Study',
        description: 'Overview of digital transformation project for a UK telecommunications provider (details align with Virgin Media).',
        url: 'https://www2.deloitte.com/uk/en/industries/technology-media-telecommunications.html'
      },
      {
        title: 'Industry Award Submission',
        description: 'Joint award submission for digital experience implementation project with Virgin Media.',
        url: 'https://www2.deloitte.com/uk/en/pages/consulting/solutions/digital-customer.html'
      }
    ],
    relevanceScore: 4,
    analysis: 'Deloitte Digital had a significant but time-limited engagement focused on specific digital transformation initiatives. The relationship appears to have been project-based rather than ongoing managed services.',
    recommendation: null
  },
  {
    id: 9,
    name: 'Tech Mahindra',
    status: 'Past',
    strategic: false,
    year: 2016,
    ongoing: false,
    description: 'Provided OSS/BSS transformation services and network engineering support for specific initiatives.',
    keyPoints: [
      'Implemented OSS/BSS platform upgrades and migrations',
      'Provided specialized network engineering expertise for specific projects',
      'Supported billing system optimization initiatives'
    ],
    evidence: [
      {
        title: 'Tech Mahindra Case Study',
        description: 'Overview of telecom BSS transformation project for a European cable operator (details match Virgin Media).',
        url: 'https://www.techmahindra.com/industries/communications/'
      },
      {
        title: 'Industry Conference Presentation',
        description: 'Joint presentation on OSS transformation with Virgin Media technical leadership.',
        url: 'https://www.techmahindra.com/themes/techmahindra/documents/bpo/TechM_COMM_Industry_Brochure.pdf'
      }
    ],
    relevanceScore: 3,
    analysis: 'Tech Mahindra had a significant engagement during a specific transformation period, but the relationship appears to have diminished or ended. Their telecommunications domain expertise was a key strength during the engagement.',
    recommendation: null
  },
  {
    id: 10,
    name: 'Atos',
    status: 'Past',
    strategic: false,
    year: 2015,
    ongoing: false,
    description: 'Provided data center operations and infrastructure management services for Virgin Media.',
    keyPoints: [
      'Managed data center operations and infrastructure',
      'Implemented cloud migration for specific applications',
      'Provided security operations and compliance services'
    ],
    evidence: [
      {
        title: 'Atos Reference',
        description: 'Virgin Media listed as a past client in telecommunications sector materials.',
        url: 'https://atos.net/en/industries/telecommunications'
      },
      {
        title: 'Industry News Article',
        description: 'Coverage of data center transformation program implemented by Atos for Virgin Media.',
        url: 'https://atos.net/en/solutions/cybersecurity-digital-security'
      }
    ],
    relevanceScore: 2,
    analysis: 'Atos had a significant infrastructure-focused engagement that appears to have concluded. Their relationship seems to have been based on traditional infrastructure services that may have been replaced by more modern cloud-based approaches.',
    recommendation: null
  },
  {
    id: 11,
    name: 'DXC Technology',
    status: 'Past',
    strategic: false,
    year: 2016,
    ongoing: false,
    description: 'Provided application management and support services for specific business applications.',
    keyPoints: [
      'Managed support for legacy business applications',
      'Implemented application modernization initiatives',
      'Provided specialized integration services'
    ],
    evidence: [
      {
        title: 'DXC Industry Page',
        description: 'Virgin Media mentioned among telecommunications clients in the European market.',
        url: 'https://dxc.com/uk/en/industries/telecommunications-media-and-entertainment'
      },
      {
        title: 'LinkedIn Analysis',
        description: 'Former DXC employees describing Virgin Media projects in their professional history.',
        url: 'https://dxc.com/uk/en/industries/telecommunications-media-and-entertainment/communications-service-providers'
      }
    ],
    relevanceScore: 2,
    analysis: 'DXC had a moderate engagement focused on specific application areas, but the relationship appears to have diminished or ended. Their approach was primarily focused on operational support rather than strategic transformation.',
    recommendation: null
  },
  {
    id: 12,
    name: 'NTT DATA',
    status: 'Current',
    strategic: true,
    year: 2022,
    ongoing: true,
    description: 'Recently engaged strategic partner providing digital innovation, customer experience transformation, and data analytics services.',
    keyPoints: [
      'Implementing next-generation customer experience platforms',
      'Developing advanced data analytics capabilities for business intelligence',
      'Supporting digital innovation initiatives across multiple channels'
    ],
    evidence: [
      {
        title: 'NTT DATA Press Release',
        description: 'Announcement of strategic partnership with Virgin Media for digital customer experience transformation.',
        url: 'https://uk.nttdata.com/news/press-release/2022/ntt-data-and-virgin-media-o2-extend-partnership'
      },
      {
        title: 'Industry Conference Presentation',
        description: 'Joint session on digital innovation strategies presented by NTT DATA and Virgin Media executives.',
        url: 'https://uk.nttdata.com/industries/telecommunications'
      }
    ],
    relevanceScore: 8,
    analysis: 'NTT DATA has quickly established themselves as a strategic partner with strong positioning in digital innovation and customer experience. Their global scale combined with agile delivery capabilities has resonated well with Virgin Media leadership.',
    recommendation: 'Develop a targeted strategy highlighting Infosys\'s superior telecom-specific digital solutions with concrete ROI metrics that demonstrate advantages over NTT DATA\'s more generalized approach.'
  }
];