import {
	component$,
	useStore,
	useWatch$,
	useMount$,
	useClientEffect$
} from '@builder.io/qwik'

export default component$(()=>{
	const state = useStore({
		age:20,
		doublecounter:0
	})
	// useWatch$(({track})=>{
	// 	track(state,'age')
	// 	state.doublecounter =  state.age * 20
	// })
	// useMount$(()=>{
	// 	state.age = 500
	// })
	useClientEffect$(()=>{
		const timer = setInterval(()=>{
			state.age++
		},500)
		return ()=>{
			clearInterval(timer)
		}
	})
	return(
		<div>
		watch example
		-------<br/>
		
		real : {state.age}
		<br/>
		</div>
		)
})