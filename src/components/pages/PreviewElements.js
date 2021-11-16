/* eslint-disable no-unused-vars */
/* eslint-disable react/button-has-type */
import {
  Container,
  Flex,
  FloatingButton,
  Content,
  TextInput,
  SelectInput,
  TextArea,
} from '../common';

const PreviewElements = () => (
  <Content className="container py-5">
    <Content>
      <TextInput
        title="Skill name:"
        placeholder="Skill name"
        icon="icon-eye"
      />
    </Content>
    <Content>
      <SelectInput
        title="Skill name:"
        placeholder="Skill name"
        options={['one', 'two', 'three']}
      />
    </Content>
    <Content>
      <TextArea
        title="Skill name:"
        placeholder="Skill description"
      />
    </Content>
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
        icon="icon-envelope-open"
      />
      <FloatingButton
        elmId="contact-us-btn"
        styleClass="icon5"
        icon="fa fa-linkedin"
      />
      <FloatingButton
        elmId="contact-us-btn"
        styleClass="icon5"
        icon="fa fa-twitter"
      />
      <FloatingButton
        elmId="contact-us-btn"
        styleClass="icon5"
        icon="fa fa-facebook"
      />
    </Flex>
  </Content>
);

export default PreviewElements;
