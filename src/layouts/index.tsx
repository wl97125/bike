import * as React from 'react';
import {Layout} from 'antd';
import NavLeft from '@/component/NavLeft';
const {Sider,Header,Content,Footer} =Layout
interface I_layoutProps {
}

const _layout: React.FunctionComponent<I_layoutProps> = (props) => {
  return <Layout className="_layout">
     <Sider style={{height:'100vh'}}
     width={200}
     collapsedWidth={0}
     breakpoint={'lg'}
     >
       <NavLeft/>
     </Sider>
      <Content>
        <Header style={{background:'#fff',textAlign:'right'}}>标题栏</Header>
        <Content style={{minHeight:'60vh',border:'1px solid #000',margin:'12px'}}>
      {props.children}
       </Content>
      <Footer style={{textAlign:'center',color:'#ccc'}}>
        建议使用Chorme 打开 &copy;2020 wlwlwlw
      </Footer>
      </Content>
  </Layout> ;
};

export default _layout;
