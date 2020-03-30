import React,{Component} from "react"
import {Link} from "react-router-dom"
import axios from "axios"
import "./index.scss"
import Bimai from "../../component/common/main/bimai"
import Mainlunbo from "../../component/common/main/mainlunbo"
import MiaoSha from '../../component/common/main/miaosha'

class Main extends Component {
    constructor() {
        super();
        this.state = {
            bimaiList: [],
            bimaiNav:[
                {"id":1,"group_id":28797,"name":"畅销尖货",activeType:true},
                {"id":2,"group_id":28798,"name":"春夏必备",activeType:false},
                {"id":3,"group_id":28799,"name":"低价精选",activeType:false},
                {"id":4,"group_id":28800,"name":"当季热卖",activeType:false}
            ],
            lunboList:[],
            miaoshaList:[],
            nowTime:0,//现在的时间戳
            endTime:0//结束的事件戳

        }
    }
     componentDidMount(){
        this.getBiMaiData(2897)
         //获取轮播数据
         this.getLunboData()
         //获取秒杀数据
         this.getMaoShaData()

     }
     //轮播数据
     getLunboData=()=>{
        axios.get("aladdin/get_batch_data?codes=[%22%E4%B8%B4%E6%97%B6%22,%22chajian%22,%22newhome_10icon_one_img2%22,%22newhome_10icon_one_img1%22,%22new_Home_4navs_180105_1%22,%22Home_seckill%22]&version=&app_channel=wap&plat=wap&access_token=&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c\"")
            .then(res=>{
                this.setState(
                    {
                        lunboList:res.data.data.chajian.datas
                    }
                )
            })

    }
    //秒杀数据
    getMaoShaData=()=>{
        axios.get("activity/specials/info?count=8&code=Home_flashSale__Top_Img&stock_code=&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
            .then(res=>{
                this.setState({
                    miaoshaList:res.data.data.specials_item_v_o_s,
                    nowTime:res.data.data.now,
                    endTime:res.data.data.specials_time_ranges[0].end
                })
            })
    }
     //必买数据
     getBiMaiData=(group_id)=>{
         console.log(group_id);
         let bimaiNav=this.state.bimaiNav
         for (var i=0;i<bimaiNav.length;i++){
             bimaiNav[i].activeType=false
             if (bimaiNav[i].group_id===group_id) {
                 bimaiNav[i].activeType=true
             }
         }
         this.setState({
             bimaiNav:bimaiNav
         })
         axios.get("item/ws/group_list?current_page=1&page_size=9&group_id="+group_id+"&device_id=646b29c0-6d74-11ea-9bcd-c53527f03e1c")
             .then(res=>{
                 console.log(res);
                 this.setState({
                     bimaiList:res.data.data.item_list
                 })
             })
     }
     render(){
         const {bimaiList,bimaiNav,lunboList,miaoshaList,nowTime,endTime} = this.state;
         return (
             <div className="main-con">
                 <div className="main-img"><img alt="gonglue" src="https://image.watsons.com.cn//upload/d05b93ca.png"/></div>
                 <div className="main-img"><img alt="美妆嘉年华" src="https://image.watsons.com.cn//upload/61fbcc3d.gif"/></div>
                 {
                     nowTime !==0 && endTime!==0?
                         <MiaoSha miaoshaList={miaoshaList} nowTime={nowTime} endTime={endTime}/>:""
                 }
                 <div className="main-img"><img alt="必买爆款" src="https://image.watsons.com.cn//upload/998a3a0c.jpg"/></div>
                 <ul className="bimai-nav">
                     {
                         bimaiNav.map(item=>(<li key={item.id}
                                                 className={item.activeType?"active":""}
                                                 onClick={this.getBiMaiData.bind(this,item.group_id)}>
                             {item.name}

                         </li>))
                     }
                 </ul>
                 {/*必买爆款*/}
                 <Bimai  bimaiList={bimaiList}/>
                 {/*轮播*/}
                 <Mainlunbo lunboList={lunboList}/>
                 <Link to="/list">
                     <img className="hufu" src="https://image.watsons.com.cn//upload/6b197213.jpg" alt="护肤会场"/>
                 </Link>
             </div>
         )

     }
}
export default Main