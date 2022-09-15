import React from 'react'
import * as S from './styles'
import {ReactComponent as SearchIcon} from '../../assets/icons/search.svg'


export const SearchForm = () => {
  return (
    <S.Form>
      <S.Input type="search" placeholder='Enter date of photo' />
      <S.Submit> <SearchIcon/> </S.Submit>
    </S.Form>
  )
}
