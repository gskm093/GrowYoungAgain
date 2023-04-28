import { Box, Divider, Grid, Hidden, Stack, Typography } from '@mui/material';
import YouTubeIcon from '@mui/icons-material/YouTube';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';

const List = [
	{
		title: 'Address',
		add: 'Unit - 8 , DAV-OUAT Guest House Road, Gopabandhu Nagar,Adjacent to DAV Unit-8,Bhubaneswar - 751008',
	},
	{
		title: 'Company',
		links: [
			'About us',
			'Careers',
			'For partners',
			'Teams',
			'Privacy policy',
			'Unsubscribe',
		],
	},
	{
		title: 'Explore',
		links: ['Blogs', 'Spices', 'Sitemap', 'Exports'],
	},
	{
		title: 'Quick links',
		links: [
			'Basic Spices',
			'Whole spices',
			'Ready-Mix Spices',
			'Pasta & Vernicilli',
		],
	},
	{ title: 'Contact us', add: '(91) 9556266575, inquiries@gmail.com' },
];
function Footer() {
	return (
		<>
			<Stack
				spacing={2}
				sx={{
					background:
						'linear-gradient(180deg, rgba(11, 13, 32, 0) 0%, #212553 100%)',
					backgroundSize: 'cover',
					p: { xs: 5, md: 10 },
					backgroundRepeat: 'no-repeat',
				}}
			>
				<Grid container spacing={5}>
					{List?.map((each) => {
						return (
							<>
								{each.title === 'Address' || each.title === 'Contact us' ? (
									<Grid item xs={12} md={3} sm={3}>
										<Stack alignItems={{ xs: 'center', sm: 'flex-start' }}>
											<Box sx={{ width: '100%' }}>
												<Typography
													variant='h6'
													color={'#FFFFFF'}
													sx={{ textAlign: { xs: 'center', sm: 'start' } }}
												>
													{each?.title}
												</Typography>
												<Stack width={'100%'}>
													<Typography
														variant='text'
														color={'#FFFFFF'}
														sx={{
															textAlign: { xs: 'center', sm: 'start' },
														}}
													>
														{each?.add}
													</Typography>
												</Stack>
											</Box>
										</Stack>
									</Grid>
								) : (
									<Grid item xs={12} md={3} sm={3}>
										<Stack
											alignItems={{ xs: 'center', sm: 'flex-start' }}
											sx={{ width: '100%' }}
										>
											<Typography variant='h6' color={'#FFFFFF'}>
												{each?.title}
											</Typography>
											<Box>
												{each?.links?.map((e) => {
													return (
														<Stack spacing={6}>
															<Typography
																variant='text'
																size='small'
																sx={{
																	width: 200,
																	color: 'white',
																	py: 0.5,
																	textAlign: { xs: 'center', sm: 'start' },
																}}
															>
																{e}
															</Typography>
														</Stack>
													);
												})}
											</Box>
										</Stack>
									</Grid>
								)}
							</>
						);
					})}
				</Grid>
				<Stack sx={{ mt: 2 }}>
					<Divider
						orientation='horizontal'
						sx={{
							bgcolor: 'white',
						}}
					/>
				</Stack>
				<Grid container direction={{ xs: 'column-reverse', sm: 'row' }}>
					<Grid item xs={12} md={4}>
						<Stack
							sx={{
								width: '100%',
							}}
						>
							<img src='/images/Logo.svg' height={160} alt={'Logo'} />
							<Hidden smUp>
								<Box
									sx={{
										color: '#FFFFFF',
										textAlign: 'center',
										pt: { xs: 5, md: 0 },
									}}
								>
									© 2022 All Rights Reserved. Designed by Smartters Studio
								</Box>
							</Hidden>
						</Stack>
					</Grid>
					<Grid item xs={12} md={8}>
						<Grid container height={'100%'} spacing={1}>
							<Grid item xs={12} md={6} height={'100%'}>
								<Stack
									direction={'row'}
									alignItems='center'
									justifyContent={'center'}
									sx={{ height: '100%', color: '#FFFFFF' }}
								>
									<Stack
										spacing={{ xs: 2, sm: 10 }}
										direction={'row'}
										sx={{
											my: { xs: 0, sm: 0 },
										}}
									>
										<Typography variant='caption'>Terms</Typography>
										<Typography variant='caption'>Privacy</Typography>
										<Typography variant='caption'>Cookies</Typography>
									</Stack>
								</Stack>
							</Grid>
							<Grid item xs={12} md={6} height={'100%'}>
								<Stack
									direction={'row'}
									alignItems={{ sm: 'center' }}
									justifyContent={'center'}
									sx={{ height: '100%', color: '#FFFFFF' }}
								>
									<Stack
										spacing={{ xs: 2.5, sm: 1 }}
										direction={'row'}
										width={'100%'}
										justifyContent='center'
										sx={{
											my: { xs: 3, sm: 0 },
										}}
									>
										<Stack
											justifyContent={'center'}
											alignItems={'center'}
											sx={{
												border: '2px solid #ffffff',
												height: { xs: '2rem', sm: '3rem' },
												width: { xs: '2rem', sm: '3rem' },
												borderRadius: '50%',
											}}
										>
											<YouTubeIcon />
										</Stack>
										<Stack
											justifyContent={'center'}
											alignItems={'center'}
											sx={{
												border: '2px solid #ffffff',
												height: { xs: '2rem', sm: '3rem' },
												width: { xs: '2rem', sm: '3rem' },
												borderRadius: '50%',
											}}
										>
											<InstagramIcon />
										</Stack>
										<Stack
											justifyContent={'center'}
											alignItems={'center'}
											sx={{
												border: '2px solid #ffffff',
												height: { xs: '2rem', sm: '3rem' },
												width: { xs: '2rem', sm: '3rem' },
												borderRadius: '50%',
											}}
										>
											<LinkedInIcon />
										</Stack>
										<Stack
											justifyContent={'center'}
											alignItems={'center'}
											sx={{
												border: '2px solid #ffffff',
												height: { xs: '2rem', sm: '3rem' },
												width: { xs: '2rem', sm: '3rem' },
												borderRadius: '50%',
											}}
										>
											<FacebookIcon />
										</Stack>
										<Stack
											justifyContent={'center'}
											alignItems={'center'}
											sx={{
												border: '2px solid #ffffff',
												height: { xs: '2rem', sm: '3rem' },
												width: { xs: '2rem', sm: '3rem' },
												borderRadius: '50%',
											}}
										>
											<TwitterIcon />
										</Stack>
									</Stack>
								</Stack>
							</Grid>
						</Grid>
					</Grid>
				</Grid>
				<Hidden smDown>
					<Box
						sx={{
							color: '#FFFFFF',
							textAlign: 'center',
							pt: { sm: 10, md: 0 },
						}}
					>
						© 2022 All Rights Reserved. Designed by Smartters Studio
					</Box>
				</Hidden>
			</Stack>
		</>
	);
}

export default Footer;
