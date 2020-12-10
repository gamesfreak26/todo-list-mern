import styled from 'styled-components'

export const Item = styled.div `
	list-style-type: none;
`

export const StrikedItem = styled(Item) `
	text-decoration: line-through;
	color: ${props => props.color ? props.color : "red"};
`