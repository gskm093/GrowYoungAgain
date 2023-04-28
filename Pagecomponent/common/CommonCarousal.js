import {
	Box,
	Card,
	CardActions,
	CardContent,
	Stack,
	Typography,
} from '@mui/material';

function CommonCarousal({ cards }) {
	/**
	 * It will returns a horizontal scroll slider
	 */
	return (
		<Box
			sx={{
				width: '100%',
				overflowX: 'auto',
				scrollBehavior: 'smooth',
			}}
			mt={2}
		>
			<Stack
				direction={'row'}
				sx={{
					width: { xs: '800px', md: '100%' },
				}}
				spacing={2}
			>
				{cards?.map((card) => (
					<Card
						sx={{
							width: '100%',
							height: 300,
							backgroundImage: `url(${card?.image})`,
							backgroundSize: { xs: '900px', sm: '115vw auto' },
							backgroundPosition: 'center',
							borderRadius: 5,
							objectFit: 'cover',
						}}
					>
						<CardContent
							sx={{
								width: '100%',
								display: 'flex',
								justifyContent: 'center',
							}}
						>
							<Stack
								sx={{
									border: '1px solid #3AAA67',
									borderRadius: 10,
									backgroundColor: '#3AAA67',
									mt: -7,
									width: '80%',
								}}
							>
								<Typography
									sx={{ p: 2, mt: 3, textAlign: 'center' }}
									color={'#ffffff'}
								>
									{card?.time}
								</Typography>
							</Stack>
						</CardContent>
						<CardActions
							sx={{
								flexDirection: 'column',
								alignItems: 'center',
								justifyContent: 'end',
								height: 220,
							}}
						>
							<Typography
								variant='h5'
								color={'white'}
								sx={{
									wordSpacing: '5px',
								}}
							>
								{card?.title}
							</Typography>
							<Typography variant='subtitle2' color={'white'}>
								{card?.subTitle}
							</Typography>
						</CardActions>
					</Card>
				))}
			</Stack>
		</Box>

		// </Carousel>
	);
}

export default CommonCarousal;
