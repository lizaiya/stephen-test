<template>
  <div>
    <div>
      {{selected}}
    </div>
    <s-cascader :options="options" v-model="selected" @change="handleChange" separator="-" @active-item-change="handleItemChange"></s-cascader>
    <!-- @active-item-change="handleItemChange" -->

  </div>
</template>
<script>
import Cascader from './cascader'
import Test from './test'
let gdchildren=[
  {
                  value:'韶关',
                  children:[
                    {value:'武江'},
                    {value:'浈江'},
                    {value:'曲江'},
                    {value:'始兴'},
                    {value:'仁化'},
                    {value:'翁源'},
                    {value:'乳源'},
                    {value:'新丰'},
                    {value:'乐昌'},
                    {value:'南雄'},
                  ]
                },
                {
                  value:'深圳',
                  children:[
                    {value:'罗湖'},
                    {value:'福田'},
                    {value:'南山'},
                    {value:'宝安'},
                    {value:'龙岗'},
                    {value:'盐田'},
                  ]
                },
                {
                  value:'广州',
                  children:[
                    {value:'荔湾'},
                    {value:'越秀'},
                    {value:'海珠'},
                    {value:'天河'},
                    {value:'白云'},
                    {value:'黄埔'},
                    {value:'番禺'},
                    {value:'花都'},
                    {value:'南沙'},
                    {value:'增城'},
                    {value:'从化'},
                  ]
                },
                {value:'珠海'},
                {value:'汕头'},
                {value:'佛山'},
                {value:'江门'},
                {value:'湛江'},
                {value:'茂名'},
                {value:'肇庆'},
                {value:'惠州'},
                {value:'梅州'}
]
let ahchildren=[
  {
                  value:'芜湖',
                  children:[
                    {value:'瑶海'},
                    {value:'庐阳'},
                    {value:'蜀山'},
                    {value:'包河'},
                    {value:'长丰'},
                    {value:'肥东'},
                    {value:'肥西'},
                    {value:'庐江'},
                    {value:'巢湖'},
                  ]
                },
                {
                  value:'安庆',
                  children:[
                    {value:'迎江'},
                    {value:'大观'},
                    {value:'宜秀'},
                    {value:'怀宁'},
                    {value:'枞阳'},
                    {value:'潜山'},
                    {value:'太湖'},
                    {value:'宿松'},
                    {value:'望江'},
                    {value:'岳西'},
                  ]
                },
                {value:'蚌埠'},
                {value:'淮南'},
                {value:'马鞍山'},
                {value:'淮北'},
                {value:'铜陵'},
                {value:'黄山'},
                {value:'滁州'},
]
let jschildren=[
  {
                  value:'南京',
                  children:[
                    {value:'玄武'},
                    {value:'秦淮'},
                    {value:'建邺'},
                    {value:'鼓楼'},
                    {value:'浦口'},
                    {value:'栖霞'},
                    {value:'雨花'},
                    {value:'江宁'},
                    {value:'六合'},
                    {value:'溧水'},
                    {value:'高淳'},
                    {value:'梁溪'},
                  ]
                },
                {
                  value:'无锡',
                  children:[
                    {value:'梁溪'},
                    {value:'新吴'},
                    {value:'锡山'},
                    {value:'惠山'},
                    {value:'滨湖'},
                    {value:'江阴'},
                    {value:'宜兴'},
                  ]
                },
                {value:'徐州'},
                {value:'常州'},
                {value:'苏州'},
                {value:'南通'},
                {value:'连云港'},
                {value:'淮安'},
                {value:'盐城'},
                {value:'扬州'},
]
export default {
    name:'demo',
    components: {
        's-cascader':Cascader,
        's-test':Test,
    },
    data(){
      return {
        options:[
            {
              value:'广东',
              children:[]
              // children:gdchildren
            },
            {
              value:'安徽',
              children:[]
              //  children:ahchildren
            },
            {
              value:'江苏',
              children:[]
            //  children:jschildren
            }
        ],
        selected:[],

      }
    },
    methods:{
      handleChange(val){
        // console.log('change',val)
      },
      handleItemChange(val){
        console.log(val)
        // console.log('active-item-change',val);
        setTimeout(() => {
            if (val.indexOf('广东') > -1 && !this.options[0].children.length) {
              this.options[0].children = [{value: '广州',children:[{value:'白云区'}]}];
            }
            if (val.indexOf('安徽') > -1 && !this.options[1].children.length) {
              this.options[1].children = [{value: '安庆'}];
            }
            if (val.indexOf('江苏') > -1 && !this.options[2].children.length) {
              this.options[2].children = [{value: '南京'}];
            }
          // console.log( this.options[0])
        }, 300);
      }
    },

}
</script>

<style lang="scss" scoped>
</style>

