// Import React
import React from "react";
import styled from "styled-components";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../../components/dummy/interactive";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

const load = (context) => {
  return context.keys().reduce((result, key) => {
    return Object.assign(
      result,
      {
        [key.replace("./", "").replace(".", "_")]: context(key)
      }
    );
  }, {});
};
const assets = load(require.context("../assets"));
preloader(assets);

const theme = createTheme({
  primary: "deepskyblue"
});

const Hr = styled.hr`
  height: 0;
  margin: 10px 0;
  border: 0;
  border-bottom: 1px dashed rgba(0,0,0,0.4);
`;
const Group = styled.div`
  display: inline-block;
  padding: 0 10px;
`;

const Root = styled.div`
  position: absolute;
  height: 100%;
  min-height: 100vh;
  width: 100%;
  min-width: 100vw;
  background: url("${assets.pattern_png}"),
    radial-gradient(ellipse at center, rgba(0,0,0,0) 0%,rgba(0,0,0,0.45) 100%);;
`;

export default class Presentation extends React.Component {
  render() {
    return (
      <Root>
        <Spectacle theme={theme}>
          <Deck transition={["slide", "spin"]} transitionDuration={500} progress={"number"}>
            <Slide bgColor="transparent">
              <Heading size={1} fit caps lineHeight={1} textColor="black">
                Styleguides
              </Heading>
              <Heading size={1} fit caps>
                in a modern front-end
              </Heading>
              <Heading size={1} fit caps textColor="black">
                What role does it have and how to set it up
              </Heading>
            </Slide>
            <Slide bgColor="transparent"
              notes="You can even put notes on your slide. How awesome is that?"
            >
              <Layout>
                <Fill style={{maxWidth: "40%"}}>
                  <div style={{ marginRight: "40px"}}>
                    <Image src={assets.me_jpg} display="block" margin="0px auto 40px" width="100%"/>

                    <Group>
                      <Image src={assets.js_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.git_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                    </Group>
                    <Group>
                      <Image src={assets.webpack_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.babel_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.grunt_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.gulp_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                    </Group>
                    <Group>
                      <Image src={assets.jest_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.cypress_png} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                    </Group>
                    <Group>
                      <Image src={assets.angularjs_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.react_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                    </Group>
                    <Group>
                      <Image src={assets.postcss_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.cssmodules_png} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.styledcomponents_png} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                      <Image src={assets.sass_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                    </Group>
                  </div>
                </Fill>
                <Fill>
                  <Heading size={2} caps fit textColor="black" textFont="primary">
                    Who am I?
                  </Heading>

                  <Heading size={5} textColor="white" textFont="primary" textAlign="left">
                    What have I worked on?
                  </Heading>
                  <Text textAlign="left" textSize="2.2rem">Hema, BCC, Wehkamp</Text>
                  <Text textAlign="left" textSize="2.2rem">Heineken, PON, Mammoet</Text>
                  <Hr/>
                  <Text textAlign="left" textSize="2.2rem">SourceJS (core), NPM (docs), Webpack (docs)...</Text>

                  <Heading size={5} textColor="white" textFont="primary" margin="40px auto 0" textAlign="left">
                    What do I do now?
                  </Heading>
                  <Text textAlign="left" textSize="2.2rem">ING - beleggen webapplicatie</Text>
                  <Hr/>
                  <Text textAlign="left" textSize="2.2rem">Improving DX with webpack & Jest & Cypress</Text>
                </Fill>
              </Layout>

            </Slide>
            <Slide transition={["slide"]} bgImage={assets.city_jpg} bgDarken={0.75}>
              <Appear fid="1">
                <Heading size={1} caps fit textColor="primary">
                  So.. styleguides
                </Heading>
              </Appear>
              <Appear fid="2"><div>
                <Heading size={1} caps fit textColor="tertiary">
                  I can't just start talking about them
                </Heading>
                <Heading size={1} caps fit textColor="primary">
                  We need context
                </Heading></div>
              </Appear>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="transparent" notes="<ul><li>talk about that</li><li>and that</li></ul>">
              <CodePane
                lang="jsx"
                source={assets.deck_example}
                margin="20px auto"
              />
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="transparent">
              <Heading caps fit>Flexible Layouts</Heading>
              <Layout>
                <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Left
                  </Heading>
                </Fill>
                <Fill>
                  <Heading size={4} caps textColor="secondary" bgColor="white" margin={10}>
                    Right
                  </Heading>
                </Fill>
              </Layout>
            </Slide>
            <Slide transition={["slide"]} bgColor="black">
              <BlockQuote>
                <Quote>Wonderfully formatted quotes</Quote>
                <Cite>Ken Wheeler</Cite>
              </BlockQuote>
            </Slide>
            <Slide transition={["spin", "zoom"]} bgColor="tertiary">
              <Heading caps fit size={1} textColor="primary">
                Inline Markdown
              </Heading>
              <Markdown>
                {`
  ![Markdown Logo](${assets.markdown_png})

  You can write inline images, [Markdown Links](http://commonmark.org), paragraph text and most other markdown syntax
  * Lists too!
  * With ~~strikethrough~~ and _italic_
  * And lets not forget **bold**
                `}
              </Markdown>
            </Slide>
            <Slide transition={["slide", "spin"]} bgColor="primary">
              <Heading caps fit size={1} textColor="tertiary">
                Smooth
              </Heading>
              <Heading caps fit size={1} textColor="secondary">
                Combinable Transitions
              </Heading>
            </Slide>
            <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
              <List>
                <Appear><ListItem>Inline style based theme system</ListItem></Appear>
                <Appear><ListItem>Autofit text</ListItem></Appear>
                <Appear><ListItem>Flexbox layout system</ListItem></Appear>
                <Appear><ListItem>React-Router navigation</ListItem></Appear>
                <Appear><ListItem>PDF export</ListItem></Appear>
                <Appear><ListItem>And...</ListItem></Appear>
              </List>
            </Slide>
            <Slide transition={["slide"]} bgColor="primary">
              <Heading size={1} caps fit textColor="tertiary">
                Your presentations are interactive
              </Heading>
              <Interactive/>
            </Slide>
            <Slide transition={["spin", "slide"]} bgColor="tertiary">
              <Heading size={1} caps fit lineHeight={1.5} textColor="primary">
                Made with love in Seattle by
              </Heading>
              <Link href="http://www.formidablelabs.com"><Image width="100%" src={assets.formidable_svg}/></Link>
            </Slide>
          </Deck>
        </Spectacle>
      </Root>
    );
  }
}
