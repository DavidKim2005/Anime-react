import { Card } from 'react-bootstrap'
import { NavLink } from 'react-router-dom'

const Home: React.FC = () => {

    return (
        <>
            <NavLink to='/home' className='d-flex'>
                <Card style={{ width: '18rem' }} className='me-5'>
                    <Card.Img variant="top" src="https://i5.walmartimages.com/seo/Naruto-Shippuden-Group-Wall-Poster-14-725-x-22-375-Framed_610a9d46-3a64-4494-9d1e-84ec7de9f397.55882eea9b92b5f572c77d85ed58084d.jpeg" />
                    <Card.Body>
                        <Card.Title>Naruto</Card.Title>
                        <Card.Text>
                            Summary: "Naruto is a ninja-in-training whose wild antics amuse his teammates. But he's completely serious about one thing: becoming the world's greatest ninja!
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }}>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/61OPPMoRt7L._AC_UF1000,1000_QL80_.jpg" />
                    <Card.Body>
                        <Card.Title>Demon slayer</Card.Title>
                        <Card.Text>
                            The story takes place in Taishō era Japan, where a secret organization, known as the Demon Slayer Corps, has waged a longtime war against demons for centuries.
                        </Card.Text>
                    </Card.Body>
                </Card>
                <Card style={{ width: '18rem' }} className='ms-5'>
                    <Card.Img variant="top" src="https://m.media-amazon.com/images/I/81Btr7z7KIL._AC_UF894,1000_QL80_.jpg" />
                    <Card.Body>
                        <Card.Title>Tokyo revengers</Card.Title>
                        <Card.Text>
                        Summaries. Hanagaki Takemichi lives an unsatisfying life right up until his death. Waking up 12 years in the past, he reckons with the eventual fate.
                        </Card.Text>
                    </Card.Body>
                </Card>
            </NavLink>
        </>
    )
}

export default Home
