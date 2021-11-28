import React from 'react'
import { LogoProps } from 'types/api'
import { getAbsolutePath } from 'utils/getAbsolutePath'
import * as S from './styles'

const Logo = ({ url, alternativeText }: LogoProps) => (
  <S.LogoWrapper src={getAbsolutePath(url)} alt={alternativeText} />
)

export default Logo
