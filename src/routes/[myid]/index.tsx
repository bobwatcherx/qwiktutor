import {component$} from '@builder.io/qwik'
import {
	useLocation,
	useEndpoint
} from '@builder.io/qwik-city'
export default component$(()=>{
	const location = useLocation()

	return(
		<div>
		my params is : {location.params.myid}
		</div>
		)
})