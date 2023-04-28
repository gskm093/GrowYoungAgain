import {
	Box,
	Button,
	Card,
	CardActions,
	CardContent,
	IconButton,
	Stack,
	Typography,
} from '@mui/material';

import React, { useState } from 'react';

import Slider from 'react-slick';

import ArrowBackIcon from '@mui/icons-material/ArrowBack';

import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import { Circle } from '@mui/icons-material';

const Carousalcards = ({ cards }) => {
	const [imageIndex, setImageIndex] = useState(0);
	const theme = useTheme();

	const NextArrow = ({ onClick }) => {
		return (
			<Stack
				sx={{
					backgroundColor: '#fff',
					position: 'absolute',
					cursor: 'pointer',
					zIndex: '10',
					right: { xs: '17%', sm: '8%', md: '7%' },
					top: '40%',
					borderRadius: 2,
					p: 1,
				}}
				onClick={onClick}
			>
				<ArrowForwardIcon />
			</Stack>
		);
	};

	const PrevArrow = ({ onClick }) => {
		return (
			<Stack
				sx={{
					backgroundColor: '#fff',
					position: 'absolute',
					cursor: 'pointer',
					zIndex: '10',
					left: { xs: '17%', sm: '8%', md: '7%' },
					top: '40%',
					borderRadius: 2,
					p: 1,
				}}
				onClick={onClick}
			>
				<ArrowBackIcon />
			</Stack>
		);
	};

	const settings = {
		infinite: true,
		lazyLoad: true,
		speed: 500,
		slidesToShow: 3,
		slidesToScroll: 4,
		centerMode: true,
		centerPadding: '0px',
		nextArrow: <NextArrow onClick={undefined} />,
		prevArrow: <PrevArrow onClick={undefined} />,
		beforeChange: (current, next) => setImageIndex(next),
		// dots: true,
		responsive: [
			{
				breakpoint: 1024,
				settings: {
					slidesToShow: 3,
					initialSlide: 2,
					infinite: true,
					dots: true,
					infinite: true,
					lazyLoad: true,
					speed: 500,
					slidesToScroll: 4,
					centerMode: true,
					centerPadding: '0px',
					nextArrow: <NextArrow onClick={undefined} />,
					prevArrow: <PrevArrow onClick={undefined} />,
					beforeChange: (current, next) => setImageIndex(next),
					// dots: true,
				},
			},

			{
				breakpoint: 600,
				settings: {
					slidesToShow: 3,
					initialSlide: 2,
					infinite: true,
					dots: true,
					infinite: true,
					lazyLoad: true,
					speed: 500,
					slidesToScroll: 4,
					centerMode: true,
					centerPadding: '0px',
					nextArrow: <NextArrow onClick={undefined} />,
					prevArrow: <PrevArrow onClick={undefined} />,
					beforeChange: (current, next) => setImageIndex(next),
					// dots: true,
				},
			},

			{
				breakpoint: 480,

				settings: {
					slidesToShow: 3,
					initialSlide: 2,
					infinite: true,
					dots: true,
					infinite: true,
					lazyLoad: true,
					speed: 500,
					slidesToScroll: 4,
					centerMode: true,
					centerPadding: '0px',
					nextArrow: <NextArrow onClick={undefined} />,
					prevArrow: <PrevArrow onClick={undefined} />,
					beforeChange: (current, next) => setImageIndex(next),
					// dots: true,
				},
			},
		],
	};

	const cardContents = [
		{
			time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
			desc: 'Get bombarded with our super vast game type collection',
			title: 'FLAT 50% OFF ON ALL DRINKS',
			img: '/images/framebg.svg',
		},

		{
			time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
			desc: 'Get bombarded with our super vast game type collection',
			title: 'FLAT 50% OFF ON ALL DRINKS',
			img: '/images/framebg.svg',
		},

		{
			time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
			desc: 'Get bombarded with our super vast game type collection',
			title: 'FLAT 50% OFF ON ALL DRINKS',
			img: '/images/framebg.svg',
		},

		{
			time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
			desc: 'Get bombarded with our super vast game type collection',
			title: 'FLAT 50% OFF ON ALL DRINKS',
			img: '/images/framebg.svg',
		},

		{
			time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
			desc: 'Get bombarded with our super vast game type collection',
			title: 'FLAT 50% OFF ON ALL DRINKS',
			img: '/images/framebg.svg',
		},

		{
			time: 'SATURDAY & SUNDAY, 5:00PM - 6:00 PM',
			desc: 'Get bombarded with our super vast game type collection',
			title: 'FLAT 50% OFF ON ALL DRINKS',
			img: '/images/framebg.svg',
		},
	];

	const tablet = useMediaQuery(theme.breakpoints.only('sm'));
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	// const desktop = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<>
			<Box mt={{ md: 3, sm: 2, xs: 0 }} sx={{ p: 2 }} mx={'-80px'}>
				<Slider {...settings}>
					{cardContents.map((e, idx) => (
						<Card
							key={idx + 1}
							sx={
								idx === imageIndex
									? {
											transform: mobile
												? 'scale(1,0.8)'
												: tablet
												? 'scale(1,0.9)'
												: 'scale(1,1.10)',
											transition: 'transform 300ms',
											borderRadius: '10%',
											height: { xs: 260, sm: 230, md: 300, lg: 300 },
											backgroundSize: { xs: '110vh', sm: '100vw' },
											backgroundImage: `url('${e.img}')`,
											objectFit: 'contain',
											backgroundPosition: 'center',
											backgroundRepeat: 'no-repeat',
											p: 2,
									  }
									: {
											transform: mobile
												? 'scale(0.9,0.6)'
												: tablet
												? 'scale(0.9,0.7)'
												: 'scale(0.98,0.88)',
											transition: 'transform 300ms',
											borderRadius: '10%',
											height: { xs: 260, sm: 230, md: 300, lg: 290 },
											backgroundSize: { xs: '110vh', sm: '100vw' },
											backgroundImage: `url('${e.img}')`,
											objectFit: 'cover',
											backgroundPosition: 'center',
											backgroundRepeat: 'no-repeat',
											// p: 2,
									  }
							}
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
										mt: { xs: -8.44, sm: -6.44 },
										width: { xs: '100%', sm: '90%' },
									}}
								>
									<Typography
										sx={{
											p: { xs: 2, sm: 1 },
											mt: { xs: 5, sm: 3 },
											textAlign: 'center',
											fontSize: { xs: '10px', sm: '16px' },
										}}
										color={'#ffffff'}
									>
										{e?.time}
									</Typography>
								</Stack>
							</CardContent>
							<CardActions
								sx={{
									height: { xs: '60%', sm: '70%', md: '78%' },
									flexDirection: 'row',
									width: '100%',
									alignItems: 'end',
									justifyContent: 'center',
								}}
							>
								<Stack>
									<Typography
										variant='h6'
										color={'#FFEFFF'}
										sx={{
											textAlign: 'center',
											fontSize: { xs: '12px', sm: '18px', md: '20px' },
										}}
									>
										{e?.title}
									</Typography>
									<Typography
										variant='subtitle1'
										color={'#FFFFFF'}
										sx={{
											textAlign: 'center',
											fontSize: { xs: '10px', sm: '14px', md: '20px' },
										}}
									>
										{e?.desc}
									</Typography>
								</Stack>
							</CardActions>
						</Card>
					))}
				</Slider>
			</Box>
			<Stack
				direction={'row'}
				justifyContent={'center'}
				alignItems={'center'}
				sx={{
					width: '100%',
					p: 2,
				}}
			>
				{cardContents?.map((e, index) => {
					return (
						// <IconButton size='small' sx={{backgroundColor:'#fff'}}>
						index === imageIndex ? (
							<Circle
								sx={{
									color: 'white',
									fontSize: '16px',
									mx: '2px',
								}}
							/>
						) : (
							<Circle
								sx={{
									color: 'white',
									fontSize: '10px',
								}}
							/>
						)
						// </IconButton>
					);
				})}
			</Stack>
		</>
	);
};

export default Carousalcards;
