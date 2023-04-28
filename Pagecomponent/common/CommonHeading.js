import { Stack, Typography } from '@mui/material';

function CommonHeading({ imgName, sub }) {
	/**
	 * It will return a responsive box that has image and a title 
	 */
	return (
		<Stack justifyContent={'center'}>
			<img src={`/images/${imgName}.svg`} height={40} alt={'play zone'} />
			{sub ? (
				<Typography
					variant='caption'
					color={'white'}
					sx={{
						textAlign: 'center',
					}}
				>
					{sub}
				</Typography>
			) : (
				''
			)}
		</Stack>
	);
}

export default CommonHeading;
