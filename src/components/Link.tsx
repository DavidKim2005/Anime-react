import { Card } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const Link: React.FC = () => {
    return (
        <NavLink to='/link'>
            <Card className="mb-3">
                <Card.Body>
                    <Card.Title>Naruto Fans</Card.Title>
                    <Card.Text>
                        <a href="https://www.justwatch.com/in/tv-show/naruto">Click to watch!</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card>
                <Card.Body>
                    <Card.Title>Demon slayer Fans</Card.Title>
                    <Card.Text>
                        <a href="https://www.justwatch.com/in/tv-show/demon-slayer-kimetsu-no-yaiba">Click to watch!</a>
                    </Card.Text>
                </Card.Body>
            </Card>
            <Card className="mt-3">
                <Card.Body>
                    <Card.Title>Tokyo revengers Fans</Card.Title>
                    <Card.Text>
                        <a href="https://www.justwatch.com/in/tv-show/tokyo-revengers">Click to watch!</a>
                    </Card.Text>
                </Card.Body>
            </Card>
        </NavLink>
    )
}

export default Link