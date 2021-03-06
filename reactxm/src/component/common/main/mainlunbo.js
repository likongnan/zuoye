import React,{Component} from  "react"
//轮播版本引入
// import Swiper from "swiper/dist/js/swiper.min.js"
// import './mainswiper.scss'
import Swiper from 'swiper/dist/js/swiper.min.js';
import 'swiper/dist/css/swiper.min.css';
import './mainswiper.scss'
class Mainlunbo extends Component{
//     componentDidMount(){
//         new Swiper('.swiper-container',{
//             loop:true,
//             autoplay:1000,
//             observer:true,//数据是异步的
//             observeParents:true,
//             // 如果需要分页器
//             pagination: '.swiper-pagination',
//             // 如果需要前进后退按钮
//             nextButton: '.swiper-button-next',
//             prevButton: '.swiper-button-prev',
//         })
//     }
//     render(){
//         let {lunboList} = this.props;
//         console.log(lunboList);
//         return (
//             <div className="swiper-container">
//                 <div className="swiper-wrapper">
//                     {
//                         lunboList.map((item)=>(
//                             <div className="swiper-slide" key={item.id}>
//                                 <img src={item.image_url} alt={item.id}/>
//                             </div>
//                         ))
//                     }
//                 </div>
//                 <div className="swiper-pagination"></div>
//                 <div className="swiper-button-prev"></div>
//                 <div className="swiper-button-next"></div>
//             </div>
//         )
//     }
// }
    componentDidMount(){
        new Swiper('.swiper-container',{
            loop:true,
            autoplay:1000,
            observer:true,//数据是异步的
            observeParents:true,
            // 如果需要分页器
            pagination: '.swiper-pagination',
            // 如果需要前进后退按钮
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
        })
    }
    render(){
        let {lunboList} = this.props;
        console.log(lunboList);
        return (
            <div className="swiper-container">
                <div className="swiper-wrapper">
                    {
                        lunboList.map((item)=>(
                            <div className="swiper-slide" key={item.id}>
                                <img src={item.image_url} alt={item.id}/>
                            </div>
                        ))
                    }
                </div>
                <div className="swiper-pagination"></div>
                <div className="swiper-button-prev"></div>
                <div className="swiper-button-next"></div>
            </div>
        )

    }
}
export default Mainlunbo
