import React from 'react'
import * as S from './styles'

export const Layout = () => {
	return (
		<>
			<S.HeaderNav />
			<S.Content />
			<S.Footer
				info={{
					date: `${new Date('06 02 2022')}`, //add mask for date
					title: 'Girlfrend of the month',
					tag: ['card', 'Zelenogradsk'],
					author: 'Arun',
				}}
			/>
		</>
	)
}
