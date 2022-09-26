import {
	component$,
	useStore,
	useContext,
	
}from '@builder.io/qwik'
import {Mycontext} from '../../routes/food/index'
export default component$(()=>{
	const state = useContext(Mycontext)
	return(
		<div>
		<h1>this context : {state.name}</h1>
		<h1>this context : {state.age}</h1>

		</div>
		)
})