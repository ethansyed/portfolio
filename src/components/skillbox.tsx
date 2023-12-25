import Paper from '@mui/material/Paper';

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
            <h1 className='font-bold mt-auto text-sm'>
                {props.text}
            </h1>

        </Paper>
    );
}



