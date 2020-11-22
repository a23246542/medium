import { createGlobalStyle } from 'styled-components';

export const ResetStyle = createGlobalStyle`
  body {
    margin: 0;
    padding: 0;
    /* color: green; */
    font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen',
      'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue',
      sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    html, body, div, span, applet, object, iframe,
    h1, h2, h3, h4, h5, h6, p, blockquote, pre,
    a, abbr, acronym, address, big, cite, code,
    del, dfn, em, img, ins, kbd, q, s, samp,
    small, strike, strong, sub, sup, tt, var,
    b, u, i, center,
    dl, dt, dd, ol, ul, li,
    fieldset, form, label, legend,
    table, caption, tbody, tfoot, thead, tr, th, td,
    article, aside, canvas, details, embed,
    figure, figcaption, footer, header, hgroup,
    menu, nav, output, ruby, section, summary,
    time, mark, audio, video {
      margin: 0;
      padding: 0;
      border: 0;
      /* font-size: 100%; */
      font: inherit;
      vertical-align: baseline;
    }
    /* HTML5 display-role reset for older browsers */
    article, aside, details, figcaption, figure,
    footer, header, hgroup, menu, nav, section {
      display: block;
    }
    body {
      line-height: 1;
    }
    ol, ul {
      list-style: none;
    }
    blockquote, q {
      quotes: none;
    }
    blockquote:before, blockquote:after,
    q:before, q:after {
      content: '';
      content: none;
    }
    table {
      border-collapse: collapse;
      border-spacing: 0;
    }
  }`;


  export const GlobalStyle = createGlobalStyle`
    html,body{
      width: 100%;
      height: 100%;
      scroll-behavior: smooth;
    }

    body {
      color: rgba(0,0,0,.65);
      font-size: 14px;
      font-family: -apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Hiragino Sans GB","Microsoft YaHei","Helvetica Neue",Helvetica,Arial,sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol";
      line-height: 1.5;
      -webkit-font-feature-settings: "tnum","tnum";
      font-feature-settings: "tnum","tnum"
  }

    *,:after,:before {
    -webkit-box-sizing: border-box;
    box-sizing: border-box;


    [tabindex="-1"]:focus {
        outline: none!important
    }

    hr {
        -webkit-box-sizing: content-box;
        box-sizing: content-box;
        height: 0;
        overflow: visible
    }

    h1,h2,h3,h4,h5,h6 {
        margin-top: 0;
        margin-bottom: .5em;
        color: rgba(0,0,0,.85);
        font-weight: 500
    }

    p {
        margin-top: 0;
        margin-bottom: 1em
    }

    abbr[data-original-title],abbr[title] {
        text-decoration: underline;
        -webkit-text-decoration: underline dotted;
        text-decoration: underline dotted;
        border-bottom: 0;
        cursor: help
    }

    address {
        margin-bottom: 1em;
        font-style: normal;
        line-height: inherit
    }

    input[type=number],input[type=password],input[type=text],textarea {
        -webkit-appearance: none
    }

    dl,ol,ul {
        margin-top: 0;
        margin-bottom: 1em
    }

    ol ol,ol ul,ul ol,ul ul {
        margin-bottom: 0
    }

    dt {
        font-weight: 500
    }

    dd {
        margin-bottom: .5em;
        margin-left: 0
    }

    blockquote {
        margin: 0 0 1em
    }

    dfn {
        font-style: italic
    }

    b,strong {
        font-weight: bolder
    }

    small {
        font-size: 80%
    }

    sub,sup {
        position: relative;
        font-size: 75%;
        line-height: 0;
        vertical-align: baseline
    }

    sub {
        bottom: -.25em
    }

    sup {
        top: -.5em
    }

    a {
        color: #ec7259;
        text-decoration: none;
        background-color: transparent;
        outline: none;
        cursor: pointer;
        -webkit-transition: color .3s;
        transition: color .3s;
        -webkit-text-decoration-skip: objects
    }

    a:hover {
        color: #fa9e87
    }

    a:active {
        color: #c75342
    }

    a:active,a:hover {
        text-decoration: none;
        outline: 0
    }

    a[disabled] {
        color: rgba(0,0,0,.25);
        cursor: not-allowed;
        pointer-events: none
    }

    code,kbd,pre,samp {
        font-size: 1em;
        font-family: "SFMono-Regular",Consolas,"Liberation Mono",Menlo,Courier,monospace
    }

    pre {
        margin-top: 0;
        margin-bottom: 1em;
        overflow: auto
    }

    figure {
        margin: 0 0 1em
    }

    img {
        vertical-align: middle;
        border-style: none
    }

    svg:not(:root) {
        overflow: hidden
    }

    [role=button],a,area,button,input:not([type=range]),label,select,summary,textarea {
        -ms-touch-action: manipulation;
        touch-action: manipulation
    }

    table {
        border-collapse: collapse
    }

    caption {
        padding-top: .75em;
        padding-bottom: .3em;
        color: rgba(0,0,0,.45);
        text-align: left;
        caption-side: bottom
    }

    th {
        text-align: inherit
    }

    button,input,optgroup,select,textarea {
        margin: 0;
        color: inherit;
        font-size: inherit;
        font-family: inherit;
        line-height: inherit
    }

    button,input {
        overflow: visible
    }
}

`;

