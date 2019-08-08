import React from 'react'
import { Card, Icon, Avatar } from 'antd';

const { Meta } = Card;
const loginflag = false
const CardCom = (props) => {
  const actions = [<Icon type="setting" />, <Icon type="edit" />, <Icon type="ellipsis" />]
  return (
     <Card
      style={{ width: 300,margin:'0 auto' }}
      cover={
        <img style={{height:160}}
          alt="example"
          src="https://gw.alipayobjects.com/zos/rmsportal/JiqGstEfoWAOHiTxclqi.png"
        />
      }
      actions={loginflag ? actions : null}
    >
      <Meta
        avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
        title="Card title"
        description="This is the description"
      />
    </Card>
  )
}
export default CardCom