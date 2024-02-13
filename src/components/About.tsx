import { Accordion } from "react-bootstrap"
import { NavLink } from "react-router-dom"

const About: React.FC = () => {
    return (
        <NavLink to='/about'>
            <Accordion flush>
                <Accordion.Item eventKey="0">
                    <Accordion.Header>About Naruto</Accordion.Header>
                    <Accordion.Body>
                        Naruto[a] is a Japanese manga series written and illustrated by Masashi Kishimoto. It tells the story of Naruto Uzumaki, a young ninja who seeks recognition from his peers and dreams of becoming the Hokage, the leader of his village. The story is told in two parts: the first is set in Naruto's pre-teen years (volumes 1–27), and the second in his teens (volumes 28–72). The series is based on two one-shot manga by Kishimoto: Karakuri (1995), which earned Kishimoto an honorable mention in Shueisha's monthly Hop Step Award the following year, and Naruto (1997).
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="1">
                    <Accordion.Header>About Demon Slayer</Accordion.Header>
                    <Accordion.Body>
                    Demon Slayer: Kimetsu no Yaiba (鬼滅の刃, Kimetsu no Yaiba, rgh. "Blade of Demon Destruction")[4] is a Japanese manga series written and illustrated by Koyoharu Gotouge. It was serialized in Shueisha's shōnen manga magazine Weekly Shōnen Jump from February 2016 to May 2020, with its chapters collected in 23 tankōbon volumes. It has been published in English by Viz Media and simultaneously on the Manga Plus platform by Shueisha. It follows teenage Tanjiro Kamado, who strives to become a Demon Slayer after his family was slaughtered and his younger sister, Nezuko, is turned into a demon.
                    </Accordion.Body>
                </Accordion.Item>
                <Accordion.Item eventKey="2">
                    <Accordion.Header>About Tokyo Revengers</Accordion.Header>
                    <Accordion.Body>
                    Tokyo Revengers (Japanese: 東京卍リベンジャーズ[a], Hepburn: Tōkyō Ribenjāzu) is a Japanese manga series written and illustrated by Ken Wakui. It was serialized in Kodansha's shōnen manga magazine Weekly Shōnen Magazine from March 2017 to November 2022, with its chapters collected in 31 tankōbon volumes. The story follows Takemichi Hanagaki, a 26-year-old temp worker with a gloomy life, who learns that his ex-girlfriend, Hinata Tachibana, has died in a dispute involving the Tokyo Manji Gang. The next day, while returning from a part-time job, Takemichi gets pushed off the subway platform by someone. As he is about to be hit, he jumps twelve years back in time, to the year he was dating Hinata. Finding that out, he makes the decision to do everything to prevent her death.
                    </Accordion.Body>
                </Accordion.Item>
            </Accordion>
        </NavLink>
    )
}

export default About