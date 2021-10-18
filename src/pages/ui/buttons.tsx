import  React,{useState} from 'react';
import {Card,Button} from 'antd'
import './index.less'
import {PlusOutlined,SearchOutlined ,QuestionOutlined} from '@ant-design/icons';
interface IButtonProps {
}

const Buttons: React.FunctionComponent<IButtonProps> = (props) => {
  const [btn_loading,setLoading]=useState<boolean>(true)
  const [btn_size,setSize]=useState<'large' |'small' |'middle' | undefined>('large')
  return <div className="ButtonPage">
      <Card
      title='基础按钮'
      className='card'
      >
        <Button type='primary'>按钮</Button>
        <Button >按钮</Button>
        <Button type='primary' danger>按钮</Button>
        <Button type='dashed'>按钮</Button>
        <Button type='link'>按钮</Button>
      </Card>
      <Card
      title='带图标的按钮'
      className='card'
      >
        <Button type='primary' icon={<PlusOutlined />}>按钮</Button>
        <Button icon={<SearchOutlined/> } >按钮</Button>
        <Button type='primary' danger>按钮</Button>
        <Button type='dashed' icon={<QuestionOutlined />}>按钮</Button>
        <Button type='link'>按钮</Button>
      </Card>
      <Card
      title='带loading的按钮'
      className='card'
      >
        <Button loading={btn_loading} type='primary' icon={<PlusOutlined />}>按钮</Button>
        <Button loading={btn_loading} icon={<SearchOutlined/> } >按钮</Button>
        <Button loading={btn_loading} type='primary' danger>按钮</Button>
        <Button loading={btn_loading} type='dashed' icon={<QuestionOutlined />}>按钮</Button>
        <Button loading={btn_loading} type='link'>按钮</Button>
        <Button onClick={()=>{setLoading(!btn_loading)}}>切换</Button>
      </Card>
      <Card title='按钮组'>
        <Button.Group>
          <Button>1</Button>
          <Button>2</Button>
          <Button>3</Button>
          <Button>4</Button>
        </Button.Group>
      </Card>
      <Card title='按钮大小'>
        <Button.Group>
          <Button size={btn_size} onClick={()=>{setSize('large')}}>大</Button>
          <Button size={btn_size} onClick={()=>{setSize('large')}}>2</Button>
          <Button size={btn_size} onClick={()=>{setSize('small')}}>小</Button>
          <Button size={btn_size} onClick={()=>{setSize('middle')}}>中</Button>
        </Button.Group>
      </Card>
  </div>;
};

export default Buttons;
