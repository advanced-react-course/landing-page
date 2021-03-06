import Button from 'components/Button'
import Container from 'components/Container'
import Logo from 'components/Logo'
import React from 'react'
import { HeaderProps, LogoPropsProps } from 'types/api'
import { gaEvent } from 'utils/ga'
import { getAbsolutePath } from 'utils/getAbsolutePath'
import * as S from './styles'

const onClick = () =>
  gaEvent({ action: 'click', category: 'cta', label: 'hero button' })

type Props = {
  logo: LogoPropsProps
  header: HeaderProps
}

const SectionHero = ({ logo, header }: Props) => (
  <S.Wrapper>
    <Container>
      <Logo {...logo} />

      <S.Content>
        <S.TextBlock>
          <S.Title>{header.title}</S.Title>
          <S.Description>{header.description}</S.Description>
          <S.ButtonWrapper>
            <Button href={header.button.url} onClick={onClick} wide>
              {header.button.label}
            </Button>
          </S.ButtonWrapper>
        </S.TextBlock>

        <S.Image
          src={getAbsolutePath(header.image.url)}
          alt={header.image.alternativeText}
        />
      </S.Content>
    </Container>
  </S.Wrapper>
)

export default SectionHero
