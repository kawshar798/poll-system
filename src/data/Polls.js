const polls = [
   {
    id:'23423',
    title:'What is your favorite Programming language',
    creted:new Date(),
    description:'There are lot of popular programing language available.Among them what is your favorite',
    options:[
        {
            id:'12321',value:'C Programing',vote:0
        },
        {
            id:'123213w',value:'Java Programing',vote:0
        },
        {
            id:'123212ee',value:'PHP Programing',vote:0
        },
        {
            id:'123221',value:'C++ Programing',vote:0
        },
    ],
    totalVote:0,
    opinions:[]
   },
   {
    id:'2342d3',
    title:'What is your favorite Framework in frontend',
    creted:new Date(),
    description:'There are lot of popular frontend framework available.Among them what is your favorite',
    options:[
        {
            id:'s12321',value:'React',vote:0
        },
        {
            id:'e123213w',value:'Boostratp',vote:0
        },
        {
            id:'w123212ee',value:'Vue',vote:0
        },
        {
            id:'t123221',value:'Angular',vote:0
        },
    ],
    totalVote:0,
    opinions:[]
   }
]
export default polls;