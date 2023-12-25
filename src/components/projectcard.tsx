import Card from '@mui/material/Card';
import { CardActionArea } from '@mui/material';

type pcprops = {
    jpg: string,
    title: string,
    tech: string,
    body: string[]
}

export default function projectcard(props: pcprops) {
    return (
        <Card sx={{
            borderRadius: '10px',
            maxWidth: '600px'
        }}>
            <CardActionArea sx={{
                paddingX: '14px',
                paddingY: '10px'
            }}>
                <div className='m-1'>
                    <h1 className='mb-auto font-bold text-2xl'>{props.title}</h1>
                    <div className='w-16 rounded bg-violet-300 h-1'></div>

                    <h1 className='m-1'><b>Technology Used:</b> {props.tech}</h1>
                    <div className='my-3'>
                        <ul style={{ listStyleType: 'disc', marginLeft: '1.5em' }}>
                            {props.body.map((item, index) => (
                                <li key={index}>{item}</li>
                            ))}
                        </ul>
                    </div>
                </div>

                <img src={props.jpg} alt={props.title + ' img'} />

            </CardActionArea>
        </Card>
    );
}