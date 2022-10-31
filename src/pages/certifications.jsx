import Head from 'next/head'

import { Card } from '@/components/Card'
import { Section } from '@/components/Section'
import { SimpleLayout } from '@/components/SimpleLayout'

function SpeakingSection({ children, ...props }) {
  return (
    <Section {...props}>
      <div className="space-y-16">{children}</div>
    </Section>
  )
}

function Appearance({ title, description, event, cta, href }) {
  return (
    <Card as="article">
      <Card.Title as="h3" href={href}>
        {title}
      </Card.Title>
      <Card.Eyebrow decorate>{event}</Card.Eyebrow>
      <Card.Description>{description}</Card.Description>
      <Card.Cta>{cta}</Card.Cta>
    </Card>
  )
}

export default function Speaking() {
  return (
    <>
      <Head>
        <title>Certifications - Mo Amin</title>
        <meta
          name="description"
          content="Certifications I've obtained in my SWE journey"
        />
      </Head>
      <SimpleLayout
        title="Certifications I've obtained in my SWE journey"
        intro="In the ever-changing world of software, I find it important to stay up to date with the latest technologies and tools available in the realm of development. Below is my working list of certifications geared towards the cloud."
      >
        <div className="space-y-20">
          <SpeakingSection title="Amazon Web Services">
            <Appearance
              href="https://aws.amazon.com/certification/certified-cloud-practitioner/"
              title="Certified Cloud Practitioner"
              description="This credential helps organizations identify and develop talent with critical knowledge related to implementing cloud initiatives. Earning AWS Certified Cloud Practitioner validates cloud fluency and foundational AWS knowledge."
              event="2022"
              cta="Explore Certification"
            />
            <Appearance
              href="https://aws.amazon.com/certification/certified-developer-associate/"
              title="AWS Certified Developer - Associate"
              description="AWS Certified Developer - Associate showcases knowledge and understanding of core AWS services, uses, and basic AWS architecture best practices, and proficiency in developing, deploying, and debugging cloud-based applications by using AWS."
              event="2021"
              cta="Explore Certification"
            />
          </SpeakingSection>
          {/* <SpeakingSection title="Podcasts">
            <Appearance
              href="#"
              title="Using design as a competitive advantage"
              description="How we used world-class visual design to attract a great team, win over customers, and get more press for Planetaria."
              event="Encoding Design, July 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Bootstrapping an aerospace company to $17M ARR"
              description="The story of how we built one of the most promising space startups in the world without taking any capital from investors."
              event="The Escape Velocity Show, March 2022"
              cta="Listen to podcast"
            />
            <Appearance
              href="#"
              title="Programming your company operating system"
              description="On the importance of creating systems and processes for running your business so that everyone on the team knows how to make the right decision no matter the situation."
              event="How They Work Radio, September 2021"
              cta="Listen to podcast"
            />
          </SpeakingSection> */}
        </div>
      </SimpleLayout>
    </>
  )
}
