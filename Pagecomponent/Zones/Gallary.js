import { Box, Button, Grid, Stack } from '@mui/material';
import CommonHeading from '../common/CommonHeading';
import InstagramIcon from '@mui/icons-material/Instagram';
import GallaryCard from '../Cards/GallaryCard';

const socialHandles = [
	{ title: '@qrew.ae' },
	{ title: '@qrew.ae' },
	{ title: '@qrew.ae' },
];

const cards = [
	{
		img: 'cd1',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd2',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd3',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd4',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd5',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd6',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd7',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
	{
		img: 'cd8',
		desc: 'Lorem ipsum dolor sit amet consectetur. Auctor sit tellus eu enim urna. Nam facilisi lacinia fermentum neque. Pellentesque sed diam sed phasellus diam ut quis.Lorem pharetra pharetra vulputate velit.Adipiscing neque eget laoreet nibh ac sed sed morbi. Nulla enim justo et...',
	},
];

function Gallary() {
	return (
		<Box
			sx={{
				backgroundImage: 'url(/images/Partyzonebg.svg)',
				backgroundSize: 'cover',
				backgroundRepeat: 'no-repeat',
			}}
		>
			<CommonHeading imgName={'gallary'} />

			<Stack
				direction={'row'}
				spacing={{ xs: 1, md: 2 }}
				justifyContent={'center'}
				sx={{ width: '100%', mt: 2, px: 1 }}
			>
				{socialHandles?.map((each) => {
					return (
						<Button
							variant='outlined'
							startIcon={<InstagramIcon />}
							size='small'
							sx={{
								color: '#FFFFFF',
								borderColor: 'rgba(255, 255, 255, 0.27)',
								backgroundColor: 'rgba(255, 255, 255, 0.27)',
								borderRadius: 10,
								fontSize: { xs: 12, md: 16 },
							}}
						>
							{each?.title}
						</Button>
					);
				})}
			</Stack>

			<Box
				sx={{
					p: { xs: 0, md: 10 },
					Px: { xs: 5, md: 0 },
				}}
			>
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
							width: { xs: '1000px', md: '100%' },
						}}
						spacing={2}
					>
						<Grid container spacing={2} sx={{ marginTop: 1 }}>
							{cards?.map((each, index) => {
								return <GallaryCard key={index} each={each} />;
							})}
						</Grid>
					</Stack>
				</Box>
			</Box>
		</Box>
	);
}

export default Gallary;
