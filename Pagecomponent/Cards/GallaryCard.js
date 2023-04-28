import { Box, Card, CardContent, Grid, Typography } from '@mui/material';
import { useState } from 'react';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
	root: {
		maxWidth: 345,
		backgroundColor: 'rgba(40, 51, 113, 1)',
		boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.3)',
		borderRadius: 10,
		transition: 'transform .2s', // Add transition effect on transform
		'&:hover': {
			transform: 'scale(1.05)', // Define the hover effect
			boxShadow: '0 0 10px 2px rgba(0, 0, 0, 0.5)', // Add a stronger shadow on hover
			opacity: 0.2,
		},
	},
});

function GallaryCard({ each }) {
	const [overlayVisible, setOverlayVisible] = useState(false);
	const classes = useStyles();
	return (
		<Grid item xs={3}>
			<Card
				className={classes.root}
				sx={{
					// width: '100%',
					height: { xs: 280, md: 400 },
					backgroundImage: `url(/images/${each?.img}` + `.svg)`,
					// backgroundColor: overlayVisible ? 'rgba(40, 51, 113, 0.91)' : 'none',
					backgroundSize: '80vh auto',
					backgroundPosition: 'center',
					// m: 2,
					borderRadius: 5,
					position: 'relative',
				}}
				onMouseEnter={() => {
					setOverlayVisible(true);
				}}
				onMouseLeave={() => {
					setOverlayVisible(false);
				}}
			>
				<Box
					sx={{
						opacity: overlayVisible ? 0.8 : 0,
						position: 'absolute',
					}}
				>
					<CardContent>
						<Typography variant='caption' color='#ffffff' sx={{ opacity: 1 }}>
							{each?.desc}
						</Typography>
					</CardContent>
				</Box>
			</Card>
		</Grid>
	);
}

export default GallaryCard;
