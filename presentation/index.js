// Import React
import React from "react";

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
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Import custom component
import Interactive from "../assets/interactive";

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

console.log(assets);

const theme = createTheme({
  primary: "#55F081"
});

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={theme}>
        <Deck transition={["zoom", "slide"]} transitionDuration={500} progress={"number"}>
          <Slide transition={["zoom"]} bgColor="primary">
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
          <Slide transition={["slide"]} notes="You can even put notes on your slide. How awesome is that?">
          <Layout>
            <Fill>
              <div style={{ marginRight: "40px"}}>
                <Image src={assets.me_jpg} display="block" margin="0px auto 40px" width="100%"/>

                <div style={{ display: "inline-block"}}>
                  <Image src={assets.js_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                  <Image src={assets.git_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                </div>
                <div style={{ display: "inline-block"}}>
                  <Image src={assets.webpack_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                  <Image src={assets.babel_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                  <Image src={assets.grunt_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                  <Image src={assets.gulp_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                </div>
                <Image src={assets.jest_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                <Image src={assets.cypress_png} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                |
                <Image src={assets.angularjs_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                <Image src={assets.react_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                |
                <Image src={assets.postcss_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                <Image src={assets.sass_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
                <Image src={assets.styledcomponents_svg} display="inline-block" margin="0px 10px 10px 0" height="32px"/>
              </div>

            </Fill>
            <Fill>
              <Heading size={2} caps fit textColor="black" textFont="primary">
                Who am I?
              </Heading>

              <Heading size={5} fit textColor="white" textFont="primary">
                What have I worked on?
              </Heading>
              <Text textAlign="left">Hema, BCC, Wehkamp</Text>
              <Text textAlign="left">Heineken, PON, Mammoet</Text>
              <Text textAlign="left">SourceJS (core), NPM (docs), Webpack (docs), ...</Text>

              <Heading size={5} fit textColor="white" textFont="primary" margin="40px auto 0">
                What do I do now?
              </Heading>
              <Text textAlign="left">ING</Text>
              <Text textAlign="left">Improving DX with webpack & Jest & Cypress</Text>
            </Fill>
          </Layout>

          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary" notes="<ul><li>talk about that</li><li>and that</li></ul>">
            <CodePane
              lang="jsx"
              source={assets.deck_example}
              margin="20px auto"
            />
          </Slide>
          <Slide transition={["slide"]} bgImage={assets.city_jpg} bgDarken={0.75}>
            <Appear fid="1">
              <Heading size={1} caps fit textColor="primary">
                Full Width
              </Heading>
            </Appear>
            <Appear fid="2">
              <Heading size={1} caps fit textColor="tertiary">
                Adjustable Darkness
              </Heading>
            </Appear>
            <Appear fid="3">
              <Heading size={1} caps fit textColor="primary">
                Background Imagery
              </Heading>
            </Appear>
          </Slide>
          <Slide transition={["zoom", "fade"]} bgColor="primary">
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
    );
  }
}
