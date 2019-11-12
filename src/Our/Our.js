import React from 'react'
import './Our.css'
// 头像
import AVATAR1 from '../static/UNADJUSTEDNONRAW_thumb_b5.jpg'
import AVATAR2 from '../static/UNADJUSTEDNONRAW_thumb_c7.jpg'
const datas = [{
  heapic: AVATAR2,
  name: '张超',
  discript: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
}, {
  heapic: AVATAR1,
  name: '刘小钗',
  discript: '描述信息描述信息描述信息描述信息描述信息描述信息描述信息'
}]
const Our = React.forwardRef((props, ref) => (
  <div className="our_wrap">
    {
      datas.map((item, index) => (
        <div className="our_main">
          <p className="our_name">{item.name}</p>
          <div style={{ backgroundImage: `url(${item.heapic})` }} className="our_album" alt="个人头像" />
          <div className="our_discript">{item.discript}</div>
        </div>
      ))
    }
  </div>
))

export default Our
