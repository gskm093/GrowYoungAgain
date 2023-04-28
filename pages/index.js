import { Box } from '@mui/material';
import Navbar from '../Pagecomponent/Nav/Navbar';
import Heading from '../Pagecomponent/Heading';
import Playzone from '../Pagecomponent/Zones/Playzone';
import Dinezone from '../Pagecomponent/Zones/Dinezone';
import Partyzone from '../Pagecomponent/Zones/Partyzone';
import ExperienceQrew from '../Pagecomponent/Zones/ExperienceQrew';
import Gallary from '../Pagecomponent/Zones/Gallary';
import Footer from '../Pagecomponent/Footer';
import DinezoneTest from '../Pagecomponent/Zones/DinezoneTest';

export default function Home() {
	/**
	 * This component holds all the component and it is the root page
	 */
	return (
		<Box>
			<Navbar />
			<Heading />
			<Playzone />
			<Dinezone />
			<Partyzone />
			<ExperienceQrew />
			<Gallary />
			<Footer />
		</Box>
	);
}
