import React from 'react';
import './App.css';

import Card from './components/Card/index'

function App() {
  return (
    <div className="App">
      hello world

        <Card
            title={"意图信息"}
            style={{marginTop: '12px'}}
            bordered={false}
            extra={<button>我是按钮啊</button>}
        >
            <div>
                transition
                <br/>
                n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>n 内容children
                <br/>
            内容children
            </div>
        </Card>
    </div>
  )
}

export default App;
