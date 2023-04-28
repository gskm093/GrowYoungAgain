import {
	Box,
	Button,
	Card,
	CardActions,
	Stack,
	Typography,
} from '@mui/material';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

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
];

function DinezoneTest() {
	/**
	 * We have declared the screen size according to devices
	 */
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const tablet = useMediaQuery(theme.breakpoints.only('sm'));
	const desktop = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<>
			<Box px={5} position={'relative'} left={0} top={0}>
				<Box px={5} position={'absolute'} left={0} top={0}>
					<img
						src='/images/dinezone/backgroundtab.svg'
						height={'auto'}
						width={'100%'}
						alt='bg'
					/>
					<Stack
						spacing={2}
						width={'100%'}
						height={'auto'}
						alignItems={'center'}
						justifyContent={'center'}
						position={'absolute'}
						left={0}
						top={0}
					>
						<Stack
							direction={{ md: 'row', sm: 'column' }}
							alignItems={'center'}
							height={'100%'}
							sx={{
								paddingBottom: { md: 30, xs: 0 },
							}}
						>
							<Stack
								direction={'row'}
								sx={{ width: { md: '40%', xs: '100%' } }}
							>
								<Stack
									spacing={2}
									justifyContent={'center'}
									alignItems={'center'}
								>
									{desktop && (
										<img
											src='/images/Dinezonelogo.svg'
											height={200}
											alt={'Dine zone'}
											style={{ marginTop: 35 }}
										/>
									)}
									{mobile && (
										<Stack direction={'row'} alignItems={'center'} spacing={2}>
											<img
												src='/images/Dinezonelogo.svg'
												height={80}
												alt={'Dine zone'}
											/>
											<Box>
												<Button
													size='small'
													variant='contained'
													sx={{
														backgroundColor: '#D90280',
														borderRadius: 10,
													}}
												>
													View MENU
												</Button>
											</Box>
										</Stack>
									)}
									{tablet && (
										<Stack direction={'row'} alignItems={'center'} spacing={2}>
											<img
												src='/images/Dinezonelogo.svg'
												height={80}
												alt={'Dine zone'}
											/>
											<Box>
												<Button
													size='small'
													variant='contained'
													sx={{
														backgroundColor: '#D90280',
														borderRadius: 10,
													}}
												>
													View MENU
												</Button>
											</Box>
										</Stack>
									)}
									<Typography
										variant='body1'
										sx={{
											textAlign: 'ce',
											width: { md: '75%', sm: '80%', xs: '100%' },
											px: 2,
										}}
										color={'#FFFFFF'}
									>
										Lorem ipsum dolor sit amet consectetur. At ultrices neque
										nisl vitae tristique tincidunt sit arcu. Proin nunc sed sem
										nibh mattis urna fames.{' '}
									</Typography>

									{desktop && (
										<Button
											variant='contained'
											sx={{
												backgroundColor: '#D90280',
											}}
										>
											BROWSE OUR MENU
										</Button>
									)}
								</Stack>
							</Stack>
							<Stack sx={{ width: { md: '50%', xs: '100%' } }}>
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
										pt={5}
									>
										{cards?.map((card) => (
											<Card
												sx={{
													width: '70%',
													height: 300,
													backgroundImage: `url(${card?.img})`,
													backgroundSize: 'auto auto',
													backgroundPosition: 'center',
													p: 2,
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
													<Stack>
														<Typography
															variant='caption'
															color={'#FFE070'}
															sx={{
																textAlign: 'start',
															}}
														>
															{card?.structure}
														</Typography>
														<Typography
															variant='h6'
															color={'#FFFFFF'}
															sx={{ fontSize: 18 }}
														>
															{card?.title}
														</Typography>
													</Stack>
												</CardActions>
											</Card>
										))}
									</Stack>
								</Box>
							</Stack>
						</Stack>
					</Stack>
				</Box>
			</Box>
		</>
		// <Stack
		// 	sx={{
		// 		backgroundImage: {
		// 			xs: 'url(/images/dinezone/background.svg)',
		// 			md: 'url(/images/Dinezonebg.svg)',
		// 		},
		// 		backgroundSize: '100%',
		// 		p: { xs: 0, md: 1 },
		// 		backgroundRepeat: 'no-repeat',
		// 		alignItems: { xs: 'stretch', md: 'center' },
		// 		justifyContent: { xs: 'flex-start', md: 'center' },
		// 	}}
		// >
		// 	<Stack spacing={2}>
		// 		<Stack
		// 			direction={{ md: 'row', sm: 'column' }}
		// 			alignItems={'center'}
		// 			height={'100%'}
		// 			sx={{ paddingBottom: { md: 30, xs: 0 } }}
		// 		>
		// 			<Stack direction={'row'} sx={{ width: { md: '40%', xs: '100%' } }}>
		// 				<Stack spacing={2} justifyContent={'center'} alignItems={'center'}>
		// 					{desktop && (
		// 						<img
		// 							src='/images/Dinezonelogo.svg'
		// 							height={200}
		// 							alt={'Dine zone'}
		// 							style={{ marginTop: 35 }}
		// 						/>
		// 					)}
		// 					{mobile && (
		// 						<Stack direction={'row'} alignItems={'center'} spacing={2}>
		// 							<img
		// 								src='/images/Dinezonelogo.svg'
		// 								height={80}
		// 								alt={'Dine zone'}
		// 							/>
		// 							<Box>
		// 								<Button
		// 									size='small'
		// 									variant='contained'
		// 									sx={{
		// 										backgroundColor: '#D90280',
		// 										borderRadius: 10,
		// 									}}
		// 								>
		// 									View MENU
		// 								</Button>
		// 							</Box>
		// 						</Stack>
		// 					)}
		// 					{tablet && (
		// 						<Stack direction={'row'} alignItems={'center'} spacing={2}>
		// 							<img
		// 								src='/images/Dinezonelogo.svg'
		// 								height={80}
		// 								alt={'Dine zone'}
		// 							/>
		// 							<Box>
		// 								<Button
		// 									size='small'
		// 									variant='contained'
		// 									sx={{
		// 										backgroundColor: '#D90280',
		// 										borderRadius: 10,
		// 									}}
		// 								>
		// 									View MENU
		// 								</Button>
		// 							</Box>
		// 						</Stack>
		// 					)}
		// 					<Typography
		// 						variant='body1'
		// 						sx={{
		// 							textAlign: 'ce',
		// 							width: { md: '75%', sm: '80%', xs: '100%' },
		// 							px: 2,
		// 						}}
		// 						color={'#FFFFFF'}
		// 					>
		// 						Lorem ipsum dolor sit amet consectetur. At ultrices neque nisl
		// 						vitae tristique tincidunt sit arcu. Proin nunc sed sem nibh
		// 						mattis urna fames.{' '}
		// 					</Typography>

		// 					{desktop && (
		// 						<Button
		// 							variant='contained'
		// 							sx={{
		// 								backgroundColor: '#D90280',
		// 							}}
		// 						>
		// 							BROWSE OUR MENU
		// 						</Button>
		// 					)}
		// 				</Stack>
		// 			</Stack>
		// 			<Stack sx={{ width: { md: '50%', xs: '100%' } }}>
		// 				<Box
		// 					sx={{
		// 						width: '100%',
		// 						overflowX: 'auto',
		// 						scrollBehavior: 'smooth',
		// 					}}
		// 				>
		// 					<Stack
		// 						direction={'row'}
		// 						sx={{
		// 							width: { xs: '800px', md: '100%' },
		// 						}}
		// 						spacing={2}
		// 						pt={5}
		// 					>
		// 						{cards?.map((card) => (
		// 							<Card
		// 								sx={{
		// 									width: '70%',
		// 									height: 300,
		// 									backgroundImage: `url(${card?.img})`,
		// 									backgroundSize: 'auto auto',
		// 									backgroundPosition: 'center',
		// 									p: 2,
		// 									borderRadius: 5,
		// 								}}
		// 							>
		// 								<CardActions
		// 									sx={{
		// 										height: '100%',
		// 										flexDirection: 'row',
		// 										width: '100%',
		// 										alignItems: 'end',
		// 									}}
		// 								>
		// 									<Stack>
		// 										<Typography
		// 											variant='caption'
		// 											color={'#FFE070'}
		// 											sx={{
		// 												textAlign: 'start',
		// 											}}
		// 										>
		// 											{card?.structure}
		// 										</Typography>
		// 										<Typography
		// 											variant='h6'
		// 											color={'#FFFFFF'}
		// 											sx={{ fontSize: 18 }}
		// 										>
		// 											{card?.title}
		// 										</Typography>
		// 									</Stack>
		// 								</CardActions>
		// 							</Card>
		// 						))}
		// 					</Stack>
		// 				</Box>
		// 			</Stack>
		// 		</Stack>
		// 	</Stack>
		// </Stack>
	);
}

export default DinezoneTest;
