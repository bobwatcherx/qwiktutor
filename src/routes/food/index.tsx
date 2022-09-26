import {
	component$,
	useStore,
	useContext,
	useContextProvider,
	createContext,
	useContextProvider
}from '@builder.io/qwik'
import Child from '../../components/child/index'

export const Mycontext = createContext("whatever")

export default component$(()=>{
	const initialstate = useStore({
		name:"agus",
		age:12
	})
	useContextProvider(Mycontext,initialstate)
	return(
		<div>
		this food.tsx
		------------
		<br/>
		<Child/>
		</div>
		)
})