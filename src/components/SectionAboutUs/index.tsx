import Container from 'components/Container'
import Heading from 'components/Heading'
import ProfileCard from 'components/ProfileCard'
import React from 'react'
import { SectionAboutUsProps } from 'types/api'
import * as S from './styles'

const SectionAboutUs = ({ title, authors }: SectionAboutUsProps) => (
  <Container>
    <Heading reverseColor>{title}</Heading>

    <S.Content>
      {authors.map(({ name, description, photo, role, socialLinks }) => (
        <ProfileCard
          key={name}
          name={name}
          role={role}
          photo={photo}
          socialLinks={socialLinks}
          description={description}
        />
      ))}
    </S.Content>
  </Container>
)

export default SectionAboutUs
