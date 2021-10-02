import {
  Container,
  Flex,
} from '../common';
import { FloatingButton } from '../common'

const PreviewElements = () => {
  return(
    <Container>
      <Flex row wrap>
        <button className="boxed-btn">Download CV</button>
        <button className="boxed-btn3">Download CV</button>
        <button className="boxed-btn-12">Download CV</button>
        <button className="boxed-btn3-green-2">Download CV</button>
      </Flex>
      <Flex row wrap>
        <FloatingButton
          elmId="contact-us-btn"
          styleClass="icon4"
          icon={"icon-envelope-open"}
        />
        <FloatingButton
          elmId="contact-us-btn"
          styleClass="icon5"
          icon={"fa fa-linkedin"}
        />
        <FloatingButton
          elmId="contact-us-btn"
          styleClass="icon5"
          icon={"fa fa-twitter"}
        />
        <FloatingButton
          elmId="contact-us-btn"
          styleClass="icon5"
          icon={"fa fa-facebook"}
        />
      </Flex>
    </Container>
  )
}

export default PreviewElements;