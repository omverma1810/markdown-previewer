import React, { Component } from 'react';
import './App.css';
import marked from 'marked';

const initialState = `
   This is a paragraph
   
   **This is a bolded text**
   
   > Block Quotes!
   
   # Heading
   ## Heading 2
   
   - list item 1
   - list item 2
   - list item 3
   
   [Visit my website](http://www.omverma.ml/)
   
   This is an inline 
   \`<div></div>\`
   
   This is a block of code
   \`\`\`
     let x = 1;
     let y = 2;
     let z = x + y;
   \`\`\`
   
   ![React](https://upload.wikimedia.org/wikipedia/commons/a/a7/React-icon.svg)
`;


export default class App extends Component {
    state = {
        text: initialState
    }

    handleChange = (e) => {
        this.setState({
            text: e.target.value
        })
    }
    render() {
        const { text } = this.state

        const markdown = marked(text, { breaks: true });
        return (
            <div>
                <h2 className="text-center">Convert Your Markdown</h2>
                <div className="row">
                    <div className="col-2, text-center">
                        <h6>Enter Your Markdown:</h6>
                        <textarea id="editor" value={text} onChange={this.handleChange} />
                    </div>
                    <h6 className="text-center">See The Result:</h6>
                    <div className="col-2, preview, p-3">
                        <div className="preview" dangerouslySetInnerHTML = {{__html: markdown}} id="preview" />
                    </div>
                </div>
                <a id="name" href="http://www.omverma.ml/">-  Om Verma</a>
            </div>
        );
    }
}