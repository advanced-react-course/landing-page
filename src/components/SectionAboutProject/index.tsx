import Container from 'components/Container'
import Heading from 'components/Heading'
import React from 'react'
import { SectionAboutProjectProps } from 'types/api'
import { getAbsolutePath } from 'utils/getAbsolutePath'
import * as S from './styles'

const SectionAboutProject = ({
  title,
  description,
  image
}: SectionAboutProjectProps) => (
  <S.Wrapper>
    <Container>
      <S.Container>
        <S.Image
          src={getAbsolutePath(image.url)}
          loading="lazy"
          alt={image.alternativeText}
        />

        <div>
          <Heading>{title}</Heading>
          <S.Text dangerouslySetInnerHTML={{ __html: description }} />
        </div>
      </S.Container>
    </Container>
  </S.Wrapper>
)

export default SectionAboutProject
