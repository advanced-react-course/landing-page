import React from 'react'
import { LogoPropsProps } from 'types/api'
import { getAbsolutePath } from 'utils/getAbsolutePath'
import * as S from './styles'

const Logo = ({ url, alternativeText }: LogoPropsProps) => (
  <S.LogoWrapper src={getAbsolutePath(url)} alt={alternativeText} />
)

export default Logo
