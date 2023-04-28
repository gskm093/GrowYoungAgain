import { Box, Stack } from '@mui/material';
import CommonHeading from '../common/CommonHeading';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function ExperienceQrew() {
	/**
	 * We have declared the screen size according to devices
	 */
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const tablet = useMediaQuery(theme.breakpoints.only('sm'));
	const desktop = useMediaQuery(theme.breakpoints.up('md'));

	return (
		<Box
			sx={{
				background:
					'linear-gradient(180deg, #070812 0%, rgba(19, 24, 52, 0.85) 33.22%, #070812 99.02%)',
			}}
		>
			<Box pt={5}>
				<CommonHeading
					imgName={'EXPQlogo'}
					sub={'Get a fully immersive 3600 view of QREW'}
				/>
			</Box>
			<Stack
				sx={{
					backgroundImage: 'url(/images/Expzone/frame.png)',
					backgroundSize: 'cover',
					backgroundPosition: 'center',
					minHeight: '100vh',
					width: '100%',
					objectFit: 'cover',
					justifyContent: 'center',
					alignItems: 'center',
					mt: { xs: -15, md: 0 },
				}}
			>
				<Box
					sx={{
						width: { xs: '100%', md: '70%' },
						px: '20px',
						margin: '0 auto',
					}}
				>
					{desktop && (
						<iframe
							src='/images/sample.mp4'
							style={{
								width: '100%',
								height: '500px',
								border: 'none',
								borderRadius: 10,
							}}
							autoplay='false'
							muted='true'
						/>
					)}
					{mobile && (
						<iframe
							src='/images/sample.mp4'
							style={{
								width: '100%',
								height: '300px',
								border: 'none',
								borderRadius: 10,
							}}
							autoplay='false'
							muted='true'
						/>
					)}
					{tablet && (
						<iframe
							src='/images/sample.mp4'
							style={{
								width: '100%',
								height: '300px',
								border: 'none',
								borderRadius: 10,
							}}
							autoplay='false'
							muted='true'
						/>
					)}
				</Box>
			</Stack>
		</Box>
	);
}

export default ExperienceQrew;
