import { Box } from '@mui/material';
import CommonCarousal from '../common/CommonCarousal';
import Carousalcards from './Carouselcards';
import Carouselcard from './Carouselcard';

function HeadingCards({ cards = [] }) {
	/**
	 * It will returns a horizontal scroll slider
	 */
	return (
		<Box>
			{/* <CommonCarousal cards={cards} /> */}
			<Carousalcards cards={cards}/>
			{/* <Carouselcard /> */}
			
		</Box>
	);
}

export default HeadingCards;
