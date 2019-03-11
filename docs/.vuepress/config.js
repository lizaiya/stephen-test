module.exports = {
    title: 'Stephen-ui',
    description: '一个好用的框架',
    themeConfig:{  
        sidebar:[
            {
                title: '入门',
                /* collapsable: false, */
                children: [
                    '/install/',
                    '/get-started/',
                ]
              },
           
            {
                title: '组件',
                children: [
                    '/components/button'
                ]
              },
            
            
        ]
    }
  }