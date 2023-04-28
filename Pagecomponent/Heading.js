import { Box, Button, IconButton, Stack, Typography } from '@mui/material';
import LocalPhoneIcon from '@mui/icons-material/LocalPhone';
import HeadingCards from './Cards/HeadingCards';
import CommonHeading from './common/CommonHeading';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Heading() {
	/**
	 * We have declared the screen size according to devices
	 */
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const desktopTablet = useMediaQuery(theme.breakpoints.up('sm'));

	return (
		<Box
			sx={{
				backgroundImage: {
					sm: 'url(/heading-background.png)',
					xs: 'url(/mobile-background.png)',
				},
				backgroundSize: '115vw auto',
				backgroundPosition: 'center',
				repeat: 'no-repeat',
				minHeight: '100vh',
				width: '100%',
				overflow: 'hidden',
				objectFit: 'cover',
				opacity: 1,
				marginTop: { xs: -15, sm: -15, md: 0 },
			}}
		>
			<Stack
				sx={{
					marginTop: { xs: 25, sm: 26, md: 15 },
				}}
			>
				<Stack
					direction={'row'}
					sx={{ color: 'white', ml: { xs: 0, sm: 10 }, pt: 2 }}
					alignItems={'center'}
				>
					<IconButton sx={{ color: 'white' }}>
						<LocalPhoneIcon />
					</IconButton>
					<Typography>+91-9556266574, +91-9556266575</Typography>
				</Stack>
				<Stack
					justifyContent={'center'}
					sx={{ mt: { sm: 12, xs: 4 }, width: '100%' }}
				>
					<CommonHeading imgName={'QRE'} />
					{desktopTablet && (
						<img src='/images/GYA.svg' height={120} alt={'Name'} />
					)}
					{mobile && (
						<img
							src='/images/mobile-text.svg'
							height={300}
							width={'100%'}
							alt={'Name'}
						/>
					)}

					<Stack direction={'row'} justifyContent={'center'}>
						<Button
							variant='contained'
							sx={{
								backgroundColor: '#D90280',
							}}
						>
							BOOK YOUR TABLE *
						</Button>
					</Stack>
					<Typography
						variant='caption'
						sx={{ textAlign: 'center', color: 'rgba(121, 138, 237, 1)', mt: 2 }}
					>
						*Table booking is only applicable for 21 year old or elder
					</Typography>
					<Box my={2}>
						<HeadingCards />
					</Box>
				</Stack>
			</Stack>
		</Box>
	);
}

export default Heading;
