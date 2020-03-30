import React, {Component} from 'react'
import "./jinrimiaosha.scss"

class MiaoSha extends Component {
    constructor() {
        super()
        this.state = {
            daojishi: ['00', '00', '00'] //表示倒计时的时分秒
        }
    }

    componentDidMount() {
        let miaoshaTime = this.props.endTime - this.props.startTime
        setInterval(() => {
            miaoshaTime -= 1000
            //将事件戳转日期时间
            let time = this.formatTime(new Date(miaoshaTime));
            //console.log(time);
            //将time 的时间值保存到 state
            this.setState({
                daojishi: time
            })
        }, 1000)
    }

//时间戳转日期
    formatTime = (data) => {
        let time = data / 1000
        const s = Math.floor(time % 60);
        const m = Math.floor(time / 60 % 60);
        const h = Math.floor(time / 60 / 60 % 24);
        return [h, m, s].map(this.addZero);
    }
    addZero = (n) => {
        if (n > 9) {
            return n
        }
        else {
            return "0" + n
        }
    }

    //渲染
    render() {
        let {miaoshaList} = this.props
        let {daojishi} = this.state
        return (
            <div className="jinri-con">
                <div className="miaosha">
                    今日秒杀
                    <span>{daojishi[0]}</span>
                    <span>{daojishi[1]}</span>
                    <span>{daojishi[2]}</span>
                    <span className="more">更多好货</span>
                </div>
                <div className='miaosha1'>
                    {
                        miaoshaList.map((item,index)=>{
                        return(
                        <div className="neir" key={index}>
                        <div className="biqiang">必抢</div>
                        <img src={item.image_url} alt={item.item_id}/>
                        <div className="name">{item.item_short_name}</div>
                        <div>money</div>
                        </div>
                        )
                    })
                    }
                </div>
            </div>
        )
    }
}
export default MiaoSha