import React,{useState} from 'react';
import {Card,Modal,Button}from 'antd'
import './index.less'
interface IModalsProps {
}

const Modals: React.FunctionComponent<IModalsProps> = (props) => {
  const [modalVisbel,setVisble]=useState({
    modal1:false,
    modal2:false,
    modal3:false,
    modal4:false
  })
  let {modal1,modal2,modal3,modal4}=modalVisbel
  
  let handleOpen=(modalName:'modal1'|'modal2'|'modal3'|'modal4')=>{
    const config={
      modal1:false,
    modal2:false,
    modal3:false,
    modal4:false
    }
    config[modalName]=true
    setVisble(config);
  }
  let handleClose=(modalName:'modal1'|'modal2'|'modal3'|'modal4')=>{
    const config={
      modal1:false,
    modal2:false,
    modal3:false,
    modal4:false
    }
    config[modalName]=false
    setVisble(config);
  }
  const handleState=(state:'success'|'info'|'error'|'warning')=>{
    Modal[state]({
      title:state,content: state+'出现了'
    })
  }
  return <div className='modalpage'>
      <Card className='card'>
        <Button onClick={()=>{handleOpen('modal1')}}>模态框显示</Button>
        <Button onClick={()=>handleOpen('modal2')}>不忘初心</Button>
      </Card>
      <Card className='card'>
        <Button onClick={()=>handleState('success')}>成功</Button>
        <Button onClick={()=>handleState('info')}>信息</Button>
        <Button onClick={()=>handleState('warning')}>警告</Button>
        <Button onClick={()=>handleState('error')}>错误</Button>
      </Card>
      <Modal title='one 模态框' visible={modal1}
      onCancel={()=>{handleClose('modal1')
      }}
      >

      </Modal>
      <Modal
      title='没有页脚'
      visible={modal2}
      onCancel={()=>{handleClose('modal2')}}
      footer={null}
      ></Modal>
  </div> ;
};

export default Modals;
   