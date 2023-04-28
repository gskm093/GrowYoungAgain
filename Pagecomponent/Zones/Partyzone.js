import { Box, Button, Stack } from '@mui/material';
import CommonCarousal from '../common/CommonCarousal';
import CommonHeading from '../common/CommonHeading';
import Carousalcards from '../Cards/Carouselcards';
import HeadingCards from '../Cards/HeadingCards';

const cards = [
	{
		time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
		title: 'FLAT 50% OFF ON ALL DRINKS',
		subTitle: 'Get bombarded with our super vast game type collection',
		image: '/images/framebg.svg',
	},
	{
		time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
		title: 'FLAT 50% OFF ON ALL DRINKS',
		subTitle: 'Get bombarded with our super vast game type collection',
		image: '/images/framebg.svg',
	},
	{
		time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
		title: 'FLAT 50% OFF ON ALL DRINKS',
		subTitle: 'Get bombarded with our super vast game type collection',
		image: '/images/framebg.svg',
	},
];

function Partyzone() {
	return (
		<Box
			sx={{
				backgroundImage: 'url(/images/Partyzonebg.svg)',
				backgroundSize: 'cover',
				p: { xs: 0, md: 10 },
				py: { xs: 5, md: 4 },
				backgroundRepeat: 'no-repeat',
			}}
		>
			<CommonHeading
				imgName={'partyzonelogo'}
				sub={'Get bombarded with our super vast game type collection'}
			/>
			{/* <CommonCarousal cards={cards} /> */}
			<Stack
				justifyContent={'center'}
				sx={{
					mt: 4,
					ml: {xs:'0px',md:'-98px'},
					width: {xs:'100%',md:'100vw'},
					overflow:'hidden'
					
				}}
			>
				<Carousalcards />
			</Stack>
			<Stack
				sx={{
					width: '100%',
					alignItems: 'center',
					justifyContent: 'center',
					mt: { xs: 3, md: 5 },
					px: { xs: 2, md: 0 },
				}}
			>
				<Button
					variant='contained'
					size='large'
					sx={{
						backgroundColor: '#FFFFFF',
						color: 'black',
						borderRadius: 5,
						display: 'flex',
					}}
				>
					BOOK A PARTY
				</Button>
			</Stack>
		</Box>
	);
}

export default Partyzone;
