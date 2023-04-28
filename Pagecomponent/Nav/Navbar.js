import {
	Box,
	Button,
	Hidden,
	IconButton,
	InputAdornment,
	Stack,
	TextField,
	Toolbar,
} from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import { styled } from '@mui/material/styles';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import MenuIcon from '@mui/icons-material/Menu';

/**
 * Here we are defining a custom search field
 */
const SearchField = styled(TextField)({
	'& .MuiOutlinedInput-root': {
		color: '#51598B',
		'& fieldset': {
			borderColor: '#7C8DEE',
			borderRadius: '20px',
			color: '#51598B',
		},
		'&:hover fieldset': {
			borderColor: '#7C8DEE',
		},
		'&.Mui-focused fieldset': {
			borderColor: '#7C8DEE',
		},
	},
	'& .MuiInputAdornment-root': {
		color: '#51598B',
	},
});

const menuOptions = ['Menu', 'contact', 'about', 'our store', 'book table'];

function Navbar() {
	/**
	 * We have declared the screen size according to devices
	 */
	const theme = useTheme();
	const mobile = useMediaQuery(theme.breakpoints.only('xs'));
	const tablet = useMediaQuery(theme.breakpoints.only('sm'));
	const desktop = useMediaQuery(theme.breakpoints.up('md'));
	return (
		<>
			<Stack
				sx={{
					position: 'fixed',
					left: 0,
					top: 0,
					width: '100%',
					height: 100,
					zIndex: 100,
				}}
			>
				<Stack
					sx={{
						position: 'fixed',
						left: 0,
						top: 0,
						width: '100%',
						height: 110,
					}}
				>
					{desktop && (
						<img
							src='/images/Navbar/desktop-bg.svg'
							alt='desktop-nav'
							height={'100%'}
							width={'auto'}
						/>
					)}
					{tablet && (
						<img
							src='/images/Navbar/tablet-bg.svg'
							alt='desktop-nav'
							height={'100%'}
							width={'100%'}
						/>
					)}
					{mobile && (
						<img
							src='/images/Navbar/mobile-bg.svg'
							alt='desktop-nav'
							height={100}
							width={'100%'}
						/>
					)}
				</Stack>
				<Hidden smUp>
					<Toolbar
						sx={{
							height: '100%',
							width: '100%',
							display: 'flex',
							alignItems: 'center',
							justifyContent: 'space-between',
						}}
					>
						<Stack direction={'row'}>
							<IconButton
								size='large'
								edge='start'
								aria-label='menu'
								sx={{ mr: 2 }}
							>
								<MenuIcon sx={{ color: '#FFFFFF' }} />
							</IconButton>
							<Box
								sx={{
									height: { xs: 40, sm: 60 },
								}}
							>
								<img src='/images/Logo.svg' height={'100%'} alt={'Logo'} />
							</Box>
						</Stack>
						<Button
							variant='outlined'
							sx={{
								borderColor: '#FFFFFF',
								color: '#FFFFFF',
								borderRadius: 5,
							}}
						>
							OUR STORE
						</Button>
					</Toolbar>
				</Hidden>
				<Hidden smDown>
					<Stack
						direction={'row'}
						justifyContent={'space-between'}
						alignItems={'center'}
						sx={{
							width: '100%',
							height: 100,
							px: 10,
							zIndex: 1,
						}}
					>
						<Stack direction={'row'} alignItems={'center'} spacing={4}>
							<img src='/images/Logo.svg' height={60} alt={'Logo'} />
							<SearchField
								InputProps={{
									startAdornment: (
										<InputAdornment position='start'>
											<SearchIcon color='#7C8DEE' />
										</InputAdornment>
									),
								}}
								size={'small'}
								sx={{
									minWidth: 150,
								}}
								placeholder={'Search for products'}
							/>
						</Stack>
						<Stack direction={'row'} spacing={2}>
							{menuOptions.map((option) => {
								return (
									<Button
										variant={
											option === 'our store'
												? 'outlined'
												: option === 'book table'
												? 'contained'
												: 'text'
										}
										size='small'
										sx={{
											color: '#ffffff',
											height: '50px',
											backgroundColor: option === 'book table' ? '#D90280' : '',
										}}
									>
										{option}
									</Button>
								);
							})}
						</Stack>
					</Stack>
				</Hidden>
			</Stack>
		</>
	);
}

export default Navbar;
