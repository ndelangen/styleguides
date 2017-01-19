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
  S,
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
  primary: "#19B5FE"
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

const Small = styled.span`
  font-size: 4.3rem;
`;

const Ol = styled.ol`
  text-align: left;
  list-style-position: outside;
  padding: 0px;
  margin: 0 0 0 20px;
  list-style-type: decimal;
`;
const Li = styled.li`
  font-size: 2.22rem;

  & + & {
    margin-top: 10px;
  }
`;

const Important = styled.span`
  color: white;
`;

const RoundedCorners_Outer = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const RoundedCorners_Inner = styled.div`
  margin: -10px;
`;
const RoundedCorners = ({ children }) => <RoundedCorners_Outer><RoundedCorners_Inner>{children}</RoundedCorners_Inner></RoundedCorners_Outer>;

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
                    <Image src={assets.me_jpg} display="block" width="100%"/>
                    <Heading size={6} fit textColor="black" textFont="primary" margin="0px auto 40px">
                      Norbert de Langen
                    </Heading>

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
                      <Image src={assets.cypress_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
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
                  <Heading size={2} caps fit textColor="white" textFont="primary">
                    Who am I?
                  </Heading>

                  <Heading size={5} textColor="black" textFont="primary" textAlign="left">
                    What have I worked on?
                  </Heading>
                  <Text textAlign="left" textSize="2.2rem">Hema, BCC, Wehkamp</Text>
                  <Text textAlign="left" textSize="2.2rem">Heineken, PON, Mammoet</Text>
                  <Hr/>
                  <Text textAlign="left" textSize="2.2rem">SourceJS (core), NPM (docs), Webpack (docs)...</Text>

                  <Heading size={5} textColor="black" textFont="primary" margin="40px auto 0" textAlign="left">
                    What do I do now?
                  </Heading>
                  <Text textAlign="left" textSize="2.2rem">ING - stockexchange webapplication</Text>
                  <Hr/>
                  <Text textAlign="left" textSize="2.2rem">Improving DX with webpack & Jest & Cypress</Text>
                </Fill>
              </Layout>
            </Slide>
            <Slide transition={["slide"]} bgImage={assets.city_jpg} bgDarken={0.75}>
              <Heading size={5} caps fit textColor="tertiary">
                before we begin..
              </Heading>
              <Appear>
                <Heading size={1} caps fit textColor="primary">
                  What's your interpretation of the word 'styleguide'?
                </Heading>
              </Appear>
              <Appear>
                <Heading size={1} caps fit textColor="primary">
                  Who here has ever created one?
                </Heading>
              </Appear>
            </Slide>
            <Slide transition={["slide"]} bgImage={assets.city_jpg} bgDarken={0.75}>
              <Heading size={5} caps fit textColor="tertiary">
                Naming things.
              </Heading>
                <Heading size={1} fit textColor="primary">
                  <Important>What we ARE talking about:<br/></Important>
                  UI Library, Pattern Library, Portfolio, UI Framework
                </Heading>
                <Hr/>
                <Heading size={1} fit textColor="primary">
                  <Important>What we are NOT talking about:<br/></Important>
                  Brand Styleguide, Code Styleguide, Design Styleguide
                </Heading>
            </Slide>
            <Slide transition={["slide"]} bgImage={assets.city_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary">
                So.. styleguides
              </Heading>
              <Appear><div>
                <Heading size={1} caps fit textColor="tertiary">
                  I can't just start talking about them
                </Heading>
                <Heading size={1} caps fit textColor="primary">
                  We need context
                </Heading></div>
              </Appear>
            </Slide>
            <Slide transition={["zoom", "fade"]} bgColor="transparent">
              <Heading caps fit margin={"0 0 20px 0"}>The context: the project</Heading>
              <RoundedCorners>
                <Layout>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{padding: "50px 20px"}}>
                      Code
                    </Heading>
                  </Fill>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{padding: "50px 20px"}}>
                      Deployment
                    </Heading>
                  </Fill>
                </Layout>
                <Layout>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{padding: "50px 20px"}}>
                      Documentation
                    </Heading>
                  </Fill>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{padding: "50px 20px"}}>
                      Tests
                    </Heading>
                  </Fill>
                </Layout>
              </RoundedCorners>
            </Slide>
            <Slide transition={["slide"]} bgColor="black">
              <BlockQuote>
                <Quote><Small>Outdated documentation is worse then no documentation</Small></Quote>
                <Cite>some random developer on linkedin</Cite>
              </BlockQuote>
            </Slide>
            <Slide transition={["spin"]} bgColor="black">
              <BlockQuote>
                <Quote><Small>The single source of truth is the source-code</Small></Quote>
                <Cite>person behind a keyboard</Cite>
              </BlockQuote>
            </Slide>
            <Slide transition={["slide"]} bgImage={assets.city_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary">
                So.. styleguides
              </Heading>
              <Appear><div>
                <Heading size={1} caps fit textColor="tertiary" margin={"0 0 10px 0"}>
                  What purpose do they have?
                </Heading>
                <Heading size={1} caps fit textColor="primary">
                  <Appear><span>Documentation&nbsp;&nbsp;&nbsp;</span></Appear>
                  <Appear><span>Tests&nbsp;&nbsp;&nbsp;</span></Appear>
                  <Appear><span>Dev environment</span></Appear>
                </Heading>
                <Heading size={1} caps fit textColor="white">
                  <Appear><span>Early feedback&nbsp;&nbsp;</span></Appear>
                  <Appear><span>Accept environment&nbsp;&nbsp;&nbsp;</span></Appear>
                  <Appear><span>Recruitment</span></Appear>
                </Heading></div>
              </Appear>
            </Slide>

            <Slide bgColor="transparent">
              <Layout>
                <Fill>
                  <Heading size={4} caps>Classical</Heading>
                </Fill>
                <Fill>
                  <Heading size={4} caps>Modern</Heading>
                </Fill>
              </Layout>
              <RoundedCorners>
                <Layout>
                  <Fill style={{margin: "10px 10px 0 10px", padding: "30px 40px", background: "white"}}>
                      <Ol>
                        <Li>Demonstrates markup</Li>
                        <Li>Hard to keep up to date</Li>
                        <Li>Useful as reference</Li>
                        <Li>Often remote / static reference</Li>
                      </Ol>
                  </Fill>
                  <Fill style={{margin: "10px 10px 0 10px", padding: "30px 40px", background: "white"}}>
                      <Ol>
                        <Li>Renders examples from code</Li>
                        <Li>Stays up to date automagicly</Li>
                        <Li>Useful during development, testing</Li>
                        <Li>Always part of your own project</Li>
                      </Ol>
                  </Fill>
                </Layout>
                <Layout>
                  <Fill style={{margin: "0 10px 10px 10px", padding: "30px 40px", background: "silver"}}>
                      <Ol>
                        <Li>Bootstrap</Li>
                        <Li>Foundation</Li>
                        <Li>Material UI</Li>
                      </Ol>
                  </Fill>
                  <Fill style={{margin: "0 10px 10px 10px", padding: "30px 40px", background: "silver"}}>
                      <Ol>
                        <Li>React Styleguidist (React)</Li>
                        <Li>Pattern Lab (PHP)</Li>
                        <Li>Source JS (JS)</Li>
                        <Li>Storybook (React)</Li>
                      </Ol>
                  </Fill>
                </Layout>
              </RoundedCorners>
            </Slide>

            <Slide transition={["fade"]} bgColor="rgba(0,0,0,0.4)">
              <BlockQuote>
                <Quote><Small>In a <Important>modern development</Important> project Styleguides facilitate developing UI components in <Important>isolation</Important>.</Small></Quote>
                <Cite>the person giving this presentation</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["fade"]} bgColor="rgba(0,0,0,0.4)">
              <BlockQuote>
                <Heading size={5} textColor="primary">By crafting your components and their API's in isolation, the <Important>quality and reuse potential</Important> of your UI investment is dramatically improved. You will be falling into the <Important>"pit of success"</Important> conforming to best-practices that also make your job faster and easier, and importantly - <Important>more fun</Important>.</Heading>
                <Cite>anonymous</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={["slide", "spin"]} bgColor="primary">
              <Heading caps fit size={1} textColor="tertiary">
                Smooth
              </Heading>
              <Heading caps fit size={1} textColor="secondary">
                Combinable Transitions
              </Heading>
            </Slide>

          </Deck>
        </Spectacle>
      </Root>
    );
  }
}
