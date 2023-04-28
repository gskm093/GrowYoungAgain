import { Box, Card, CardActions, Grid, Stack, Typography } from '@mui/material';
import CommonHeading from '../common/CommonHeading';

const cards = [
	{
		title: 'VR RACING/DRIVING SIMULATOR',
		structure: 'PC/ CONSOLE/ ESPORTS',
		img: '/images/pz1.svg',
	},
	{
		title: 'FIRST PERSON SHOOTER',
		structure: 'PC/ CONSOLE/ ESPORTS',
		img: '/images/pz2.svg',
	},
	{
		title: 'FIRST PERSON SHOOTER',
		structure: 'PC/ CONSOLE/ ESPORTS',
		img: '/images/pz3.svg',
	},
	{
		title: 'POKER, CRAPS, STOLOMANIA ...',
		structure: 'RETRO ARCADE',
		img: '/images/pz4.svg',
	},
	{
		title: 'POKER, CRAPS, STOLOMANIA ...',
		structure: 'RETRO ARCADE',
		img: '/images/pz2.svg',
	},
	{
		title: 'POKER, CRAPS, STOLOMANIA ...',
		structure: 'RETRO ARCADE',
		img: '/images/pz4.svg',
	},
	{
		title: 'VR RACING/DRIVING SIMULATOR',
		structure: 'PC/ CONSOLE/ ESPORTS',
		img: '/images/pz1.svg',
	},
	{
		title: 'FIRST PERSON SHOOTER',
		structure: 'PC/ CONSOLE/ ESPORTS',
		img: '/images/pz3.svg',
	},
];

function Playzone() {
	return (
		<Box
			sx={{
				backgroundImage: {
					xs: 'url(/images/playzone/background.svg)',
					sm: 'url(/images/playzoneframe.svg)',
				},
				backgroundSize: '97vw auto',
				backgroundPosition: 'start',
				m: 2,
				borderRadius: 5,
				backgroundRepeat: 'no-repeat',
			}}
		>
			<Box
				sx={{
					m: 2,
					p: 5,
				}}
			>
				<CommonHeading
					imgName={'PLAY ZONE'}
					sub={'Get bombarded with our super vast game type collection'}
				/>
			</Box>
			<Box
				sx={{
					width: '100%',
					overflowX: 'auto',
					scrollBehavior: 'smooth',
				}}
			>
				<Stack
					direction={'row'}
					sx={{
						width: { xs: '800px', md: '100%' },
					}}
					spacing={2}
				>
					<Grid
						container
						spacing={2}
						sx={{
							px: 5,
						}}
					>
						{cards.map((card) => {
							return (
								<Grid item xs={3}>
									<Card
										sx={{
											height: { xs: 300, md: 400 },
											backgroundImage: `url(${card.img})`,
											backgroundSize: '60vh auto',
											objectFit: 'cover',
											backgroundPosition: 'center',
											borderRadius: 5,
										}}
									>
										<CardActions
											sx={{
												height: '100%',
												flexDirection: 'row',
												width: '100%',
												alignItems: 'end',
											}}
										>
											<Stack sx={{ m: 2 }}>
												<Typography
													variant='caption'
													color={'#FFE070'}
													sx={{
														textAlign: 'start',
													}}
												>
													{card?.structure}
												</Typography>
												<Typography variant='h6' color={'#FFFFFF'}>
													{card?.title}
												</Typography>
											</Stack>
										</CardActions>
									</Card>
								</Grid>
							);
						})}
					</Grid>
				</Stack>
			</Box>
		</Box>
	);
}

export default Playzone;
