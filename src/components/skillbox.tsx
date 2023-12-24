import Paper from '@mui/material/Paper';
import reactsvg from '../assets/react.svg'
import Typography from '@mui/material/Typography';

type sbprops = {
    svg: string,
    text: string
}

//props: sbprops

export default function skillbox(props: sbprops) {
    return (
        <Paper
            elevation={2}
            sx={{
                width: '120px',
                height: '120px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center', // Vertical centering
                alignItems: 'center', // Horizontal centering
                borderRadius: '10px',
                padding: '5px',
                backgroundColor: '#FAFAFA'
            }}
        >
            <img className='mt-auto' width={70} src={props.svg} alt="React Logo" />
            <Typography
                fontWeight={'bold'}
                color={'black'}
                sx={{
                    marginTop: 'auto',

                }}
            >
                {props.text}
            </Typography>

        </Paper>
    );
}



