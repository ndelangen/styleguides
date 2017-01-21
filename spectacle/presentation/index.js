// Import React
import React from 'react';
import styled, { keyframes } from 'styled-components';

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  Deck,
  Fill,
  Heading,
  Image,
  Layout,
  Quote,
  Slide,
  Spectacle,
  Table,
  Text
} from 'spectacle';

// Import image preloader util
import preloader from 'spectacle/lib/utils/preloader';

// Import theme
import createTheme from 'spectacle/lib/themes/default';

// Import custom component
// import Interactive from "../../components/dummy/interactive";

// Require CSS
require('normalize.css');
require('spectacle/lib/themes/default/index.css');

const load = (context) => {
  return context.keys().reduce((result, key) => {
    return Object.assign(
      result,
      {
        [key.replace('./', '').replace('.', '_')]: context(key)
      }
    );
  }, {});
};
const assets = load(require.context('../assets'));
preloader(assets);

const theme = createTheme({
  primary: '#19B5FE'
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

const Th = styled.th`
  font-size: 1.8rem;
  text-align: left;
  padding: 10px 30px 10px 20px;
`;
const Tr = styled.tr`
  &:nth-child(even) {
    background-color: rgba(0,0,0,0.17);
  }
`;
const Td = styled.td`
  font-size: 1.8rem;
  padding: 10px 10px 10px 20px;
  &:first-child {
    text-align: left;
  }
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

const fadeIn = keyframes`
  from {
    opacity: 0;
  }
  to {
    opacity: 1;
  }
`;
const Iframe = styled.iframe`
  width: calc(100vw);
  position: relative;
  height: calc(100vh - 107px);
  border: 0;
  margin-top: -22px;
  animation: ${fadeIn} .4s linear;
  animation-delay: .3s;
  background: white;
`;

const Button = styled.button`
  border: 2px solid white;
  display: inline-block;
  background: transparent;
  color: white;
  padding: 20px 40px;
  border-radius: 30px;
  font-size: 20px;
`;
class LazyIframe extends React.Component {
  constructor(props) {
    super(props);
    const instance = this;

    instance.state = {
      display: false
    };

    instance.show = () => {
      instance.setState({ display: true });
    };
  }
  render() {
    const { src } = this.props;
    const { display } = this.state;
    return display ? (
      <Iframe src={src} />
    ) : (
      <Button title={src} onClick={this.show}>click to load</Button>
    );
  }
}

const Important = styled.span`
  color: white;
`;

const RoundedCornersOuter = styled.div`
  border-radius: 10px;
  overflow: hidden;
`;
const RoundedCornersInner = styled.div`
  margin: -10px;
`;
const RoundedCorners = ({ children }) => <RoundedCornersOuter><RoundedCornersInner>{children}</RoundedCornersInner></RoundedCornersOuter>;

export default class Presentation extends React.Component {
  render() {
    return (
      <Root>
        <Spectacle theme={theme}>
          <Deck transition={['slide', 'spin']} transitionDuration={800} progress={'number'}>
            <Slide bgColor="transparent">
              <Heading size={1} fit caps lineHeight={1} textColor="black">Styleguides</Heading>
              <Heading size={1} fit caps>in a modern front-end</Heading>
              <Heading size={1} fit caps textColor="black">What role does it have and how to set it up</Heading>
            </Slide>
            <Slide
              bgColor="transparent"
              notes="You can even put notes on your slide. How awesome is that?"
            >
              <Layout>
                <Fill style={{ maxWidth: '40%' }}>
                  <div style={{ marginRight: '40px' }}>
                    <Image src={assets.me_jpg} display="block" width="100%" />
                    <Heading size={6} fit textColor="black" textFont="primary" margin="0px auto 40px">Norbert de Langen</Heading>

                    <Group>
                      <Image src={assets.js_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.git_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                    </Group>
                    <Group>
                      <Image src={assets.webpack_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.babel_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.grunt_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.gulp_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                    </Group>
                    <Group>
                      <Image src={assets.jest_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.cypress_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                    </Group>
                    <Group>
                      <Image src={assets.angularjs_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.react_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                    </Group>
                    <Group>
                      <Image src={assets.postcss_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.cssmodules_png} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.styledcomponents_png} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                      <Image src={assets.sass_svg} display="inline-block" margin="0px 10px 10px 0" height="32px" />
                    </Group>
                  </div>
                </Fill>
                <Fill>
                  <Heading size={2} caps fit textColor="white" textFont="primary">Who am I?</Heading>

                  <Heading size={5} textColor="black" textFont="primary" textAlign="left">What have I worked on?</Heading>
                  <Text textAlign="left" textSize="2.2rem">Hema, BCC, Wehkamp</Text>
                  <Text textAlign="left" textSize="2.2rem">Heineken, PON, Mammoet</Text>
                  <Hr />
                  <Text textAlign="left" textSize="2.2rem">SourceJS (core), NPM (docs), Webpack (docs)...</Text>

                  <Heading size={5} textColor="black" textFont="primary" margin="40px auto 0" textAlign="left">What do I do now?</Heading>
                  <Text textAlign="left" textSize="2.2rem">ING - stockexchange webapplication</Text>
                  <Hr />
                  <Text textAlign="left" textSize="2.2rem">Improving DX with webpack & Jest & Cypress</Text>
                </Fill>
              </Layout>
            </Slide>
            <Slide transition={['slide']} bgImage={assets.startline_jpg} bgDarken={0.75}>
              <Heading size={5} caps fit textColor="tertiary">before we begin..</Heading>
              <Appear>
                <Heading size={1} caps fit textColor="primary">What&apos;s your interpretation of the word &apos;styleguide&apos;?</Heading>
              </Appear>
              <Appear>
                <Heading size={1} caps fit textColor="primary">Who here has ever created one?</Heading>
              </Appear>
            </Slide>
            <Slide transition={['slide']} bgImage={assets.notebook_jpg} bgDarken={0.75}>
              <Heading size={5} caps fit textColor="tertiary">Naming things.</Heading>
              <Heading size={1} fit textColor="primary"><Important>What we ARE talking about:<br /></Important>UI Library, Pattern Library, Portfolio, UI Framework</Heading>
              <Hr />
              <Heading size={1} fit textColor="primary"><Important>What we are NOT talking about:<br /></Important>Brand Styleguide, Code Styleguide, Design Styleguide</Heading>
            </Slide>
            <Slide transition={['slide']} bgImage={assets.library_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary">So.. styleguides</Heading>
              <Appear><div>
                <Heading size={1} caps fit textColor="tertiary">I can&apos;t just start talking about them</Heading>
                <Heading size={1} caps fit textColor="primary">We need context</Heading></div>
              </Appear>
            </Slide>
            <Slide transition={['zoom', 'fade']} bgColor="transparent">
              <Heading caps fit margin={'0 0 20px 0'}>The context: the project</Heading>
              <RoundedCorners>
                <Layout>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{ padding: '50px 20px' }}>Code</Heading>
                  </Fill>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{ padding: '50px 20px' }}>Deployment</Heading>
                  </Fill>
                </Layout>
                <Layout>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{ padding: '50px 20px' }}>Documentation</Heading>
                  </Fill>
                  <Fill>
                    <Heading size={6} caps textColor="secondary" bgColor="white" margin={10} style={{ padding: '50px 20px' }}>Tests</Heading>
                  </Fill>
                </Layout>
              </RoundedCorners>
            </Slide>
            <Slide transition={['slide']} bgColor="black">
              <BlockQuote>
                <Quote><Small>Outdated documentation is worse then no documentation</Small></Quote>
                <Cite>some random developer on linkedin</Cite>
              </BlockQuote>
            </Slide>
            <Slide transition={['spin']} bgColor="black">
              <BlockQuote>
                <Quote><Small>The single source of truth is the source-code</Small></Quote>
                <Cite>person behind a keyboard</Cite>
              </BlockQuote>
            </Slide>
            <Slide transition={['slide']} bgImage={assets.architecture1_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary">So.. styleguides</Heading>
              <Appear><div>
                <Heading size={1} caps fit textColor="tertiary" margin={'0 0 10px 0'}>What purpose do they have?</Heading>
                <Heading size={1} caps fit textColor="primary">
                  <Appear><span>Documentation&nbsp;&nbsp;&nbsp;</span></Appear>
                  <Appear><span>∙&nbsp;&nbsp;Tests&nbsp;&nbsp;&nbsp;</span></Appear>
                  <Appear><span>∙&nbsp;&nbsp;Dev environment</span></Appear>
                </Heading>
                <Heading size={1} caps fit textColor="white">
                  <Appear><span>Early feedback&nbsp;&nbsp;</span></Appear>
                  <Appear><span>∙&nbsp;&nbsp;Accept environment&nbsp;&nbsp;&nbsp;</span></Appear>
                  <Appear><span>∙&nbsp;&nbsp;Recruitment</span></Appear>
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
                  <Fill style={{ margin: '10px 10px 0 10px', padding: '30px 40px', background: 'white' }}>
                    <Ol>
                      <Li>Demonstrates markup</Li>
                      <Li>Hard to keep up to date</Li>
                      <Li>Useful as reference</Li>
                      <Li>Often remote / static reference</Li>
                    </Ol>
                  </Fill>
                  <Fill style={{ margin: '10px 10px 0 10px', padding: '30px 40px', background: 'white' }}>
                    <Ol>
                      <Li>Renders examples from code</Li>
                      <Li>Stays up to date automagicly</Li>
                      <Li>Useful during development, testing</Li>
                      <Li>Always part of your own project</Li>
                    </Ol>
                  </Fill>
                </Layout>
                <Layout>
                  <Fill style={{ margin: '0 10px 10px 10px', padding: '30px 40px', background: 'silver' }}>
                    <Ol>
                      <Li>Bootstrap</Li>
                      <Li>Foundation</Li>
                      <Li>Material UI</Li>
                    </Ol>
                  </Fill>
                  <Fill style={{ margin: '0 10px 10px 10px', padding: '30px 40px', background: 'silver' }}>
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

            <Slide transition={['fade']} bgColor="rgba(0,0,0,0.4)">
              <BlockQuote>
                <Quote><Small>In a <Important>modern development</Important> project Styleguides facilitate developing UI components in <Important>isolation</Important>.</Small></Quote>
                <Cite>the person giving this presentation</Cite>
              </BlockQuote>
            </Slide>

            <Slide transition={['fade']} bgColor="rgba(0,0,0,0.4)">
              <BlockQuote>
                <Heading size={5} textColor="primary">By crafting your components and their API&apos;s in isolation, the <Important>quality and reuse potential</Important> of your UI investment is dramatically improved. You will be falling into the <Important>&quot;pit of success&quot;</Important> conforming to best-practices that also make your job faster and easier, and importantly - <Important>more fun</Important>.</Heading>
                <Cite>anonymous</Cite>
              </BlockQuote>
            </Slide>

            <Slide bgColor="transparent">
              <Heading caps fit size={1} textColor="tertiary">Let&apos;s build a styleguide</Heading>
              <Heading caps fit size={1} textColor="secondary">How hard can it be?</Heading>
            </Slide>

            <Slide transition={['slide']} bgImage={assets.checklist_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary" margin={'0 0 30px 0'}>What features do we want?</Heading>
              <Heading size={1} caps fit textColor="tertiary">
                <Appear><span>Display in isolation&nbsp;&nbsp;</span></Appear>
                <Appear><span>∙&nbsp;&nbsp;Responsive utils</span></Appear>
              </Heading>
              <Heading size={1} caps fit textColor="primary">
                <Appear><span>Search&nbsp;&nbsp;</span></Appear>
                <Appear><span>∙&nbsp;&nbsp;Categorisation</span></Appear>
              </Heading>
            </Slide>

            <Slide transition={['slide']} bgImage={assets.present_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary" margin={'0 0 30px 0'}>We want more !</Heading>
              <Heading size={1} caps fit textColor="tertiary">
                <Appear><span>Easy to add examples&nbsp;&nbsp;</span></Appear>
                <Appear><span>∙&nbsp;&nbsp;Tweak data and state</span></Appear>
              </Heading>
              <Heading size={1} caps fit textColor="primary">
                <Appear><span>Reload on save&nbsp;&nbsp;</span></Appear>
                <Appear><span>∙&nbsp;&nbsp;Hot Module Replacement</span></Appear>
              </Heading>
              <Heading size={1} caps fit textColor="tertiary">
                <Appear><span>Support the JS tooling you&apos;re using</span></Appear>
              </Heading>
            </Slide>

            <Slide transition={['slide']} bgImage={assets.cake_jpg} bgDarken={0.75}>
              <Heading size={1} caps fit textColor="primary" margin={'0 0 30px 0'}>We want MOOAAR !!</Heading>
              <Heading size={1} caps fit textColor="tertiary">
                <Appear><span>Generate to static&nbsp;&nbsp;</span></Appear>
                <Appear><span>∙&nbsp;&nbsp;Good performance at scale</span></Appear>
              </Heading>
              <Heading size={1} caps fit textColor="primary">
                <Appear><span>Easy to add / write extentions & middleware</span></Appear>
              </Heading>
            </Slide>

            <Slide bgColor="transparent">
              <Heading caps fit size={1} textColor="tertiary">Let&apos;s use a styleguide platform / generator</Heading>
              <Heading caps fit size={1} textColor="secondary">How hard can it be?</Heading>
            </Slide>

            <Slide bgColor="transparent">
              <Heading caps fit size={1} textColor="tertiary">107 different solution for 1 problem</Heading>
              <Image src={assets.githubstyleguidegenerators_png} display="block" style={{ maxHeight: '80vh', maxWidth: '100%' }} />
            </Slide>

            <Slide bgImage={assets.choice_jpg} transition={['slide']} bgDarken={0.75}>
              <Heading caps fit size={1} textColor="tertiary">Let&apos;s just take a look at a few</Heading>
              <Heading caps fit size={1} textColor="primary">Find out if it fits your team and product</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <Heading size={1} textColor="tertiary">SourceJS</Heading>
              <Heading size={6} textColor="tertiary">Living Styleguide Platform</Heading>
              <Heading size={6} textColor="secondary">SourceJS.com</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <LazyIframe src="http://localhost:8080" />
              <Heading caps size={6} textColor="tertiary">SourceJS - showcase</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <Heading size={1} textColor="tertiary">React Style Guide</Heading>
              <Heading size={6} textColor="secondary">ow.ly/Ucqn30007ig</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <LazyIframe src="http://pocotan001.github.io/react-styleguide-generator/#!/Buttons" />
              <Heading caps size={6} textColor="tertiary">React Style Guide - showcase</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <Heading size={1} textColor="tertiary">React StyleGuidist</Heading>
              <Heading size={6} textColor="secondary">ow.ly/Z2ux30007an</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <LazyIframe src="http://react-styleguidist.js.org/" />
              <Heading caps size={6} textColor="tertiary">React StyleGuidist - showcase</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <Heading size={1} textColor="tertiary">React Storybook</Heading>
              <Heading size={6} textColor="secondary">ow.ly/t8VC300075n</Heading>
            </Slide>

            <Slide bgColor="transparent" transition={['fade']} maxWidth={'calc(100vw)'} maxHeight={'calc(100vh)'} margin={'0'}>
              <LazyIframe src="http://necolas.github.io/react-native-web/storybook/?selectedKind=Components&selectedStory=ActivityIndicator&full=0&down=1&left=1&panelRight=1&downPanel=kadirahq%2Fstorybook-addon-actions%2Factions-panel" />
              <Heading caps size={6} textColor="tertiary">React Storybook - showcase</Heading>
            </Slide>

            <Slide bgColor="transparent" maxWidth={'calc(100vw - 200px)'} maxHeight={'calc(100vh - 200px)'} margin={'0'}>
              <RoundedCorners>
                <Table bgColor="tertiary" style={{ margin: '10px', borderCollapse: 'collapse' }}>
                  <Tr>
                    <Th />
                    <Th>SourceJS</Th>
                    <Th>React Style Guide</Th>
                    <Th>React StyleGuidist</Th>
                    <Th>React Storybook</Th>
                  </Tr>
                  <Tr>
                    <Td>Documentation</Td>
                    <Td>🏆</Td>
                    <Td>✅</Td>
                    <Td>😕</Td>
                    <Td>😕</Td>
                  </Tr>
                  <Tr>
                    <Td>Components</Td>
                    <Td>✅</Td>
                    <Td>✅</Td>
                    <Td>✅</Td>
                    <Td>🏆</Td>
                  </Tr>
                  <Tr>
                    <Td>Organisation</Td>
                    <Td>🏆</Td>
                    <Td>😕</Td>
                    <Td>😕</Td>
                    <Td>✅</Td>
                  </Tr>
                  <Tr>
                    <Td>Technology Freedom</Td>
                    <Td>✅</Td>
                    <Td>❌</Td>
                    <Td>❌</Td>
                    <Td>❌</Td>
                  </Tr>
                  <Tr>
                    <Td>Dev Experience</Td>
                    <Td>✅</Td>
                    <Td>😕</Td>
                    <Td>✅</Td>
                    <Td>✅</Td>
                  </Tr>
                  <Tr>
                    <Td>Extendable</Td>
                    <Td>✅</Td>
                    <Td>❌</Td>
                    <Td>❌</Td>
                    <Td>✅</Td>
                  </Tr>
                  <Tr>
                    <Td>Deployable</Td>
                    <Td>😕</Td>
                    <Td>😕</Td>
                    <Td>✅</Td>
                    <Td>✅</Td>
                  </Tr>
                  <Tr>
                    <Td>Active / Hot</Td>
                    <Td>😕</Td>
                    <Td>😕</Td>
                    <Td>✅</Td>
                    <Td>🏆</Td>
                  </Tr>
                </Table>
              </RoundedCorners>
            </Slide>
            <Slide bgColor="transparent">
              <Heading size={5} caps fit textColor="tertiary">Code anyone?</Heading>
              <Appear>
                <Heading size={1} fit textColor="secondary"><Important>You pick a one,</Important> I&apos;ll start a styleguide from scratch</Heading>
              </Appear>
            </Slide>
          </Deck>
        </Spectacle>
      </Root>
    );
  }
}
