import img1 from '../images/eng.jpg'
import img2 from '../images/med.jpg'
import img3 from '../images/fin.jpg'
import img8 from '../images/8.png'
import img9 from '../images/9.png'
import img10 from '../images/10.png'
import img11 from '../images/11.jpg'
import img12 from '../images/12.jpg'
 export const CollegeClasses=[
    {
        id:1,
        course:'Engineering',
        img:img1,
        subcourse:[
            {
                id:1,
                course_name:'Machine Learning',
                books:[],
                videos:[],
                notes:[]
            },
            {
                id:3,
                course_name:'Networking',
                books:[],
                videos:[],
                notes:[]
            },
            {
                id:4,
                course_name:'Data Structure and Algorithms',
                books:[],
                videos:[],
                notes:[]
            },
        ]
    },
    {
        id:2,
        course:'Medical',
        img:img2,
        subcourse:[
            {
                id:1,
                course_name:'Human Anatomy',
                books:[],
                videos:[],
                notes:[]
            },
            {
                id:2,
                course_name:'Plant Anatomy',
                books:[],
                videos:[],
                notes:[]
            }
        ]
    },
    {
        id:3,
        course:'Finance',
        img:img3,
        subcourse:[
            {
                id:1,
                course_name:'Finance_lecture_1',
                books:[],
                videos:[],
                notes:[]
            },
            {
                id:2,
                course_name:'Finance_lecture_2',
                books:[],
                videos:[],
                notes:[]
            },
        ]
    }
]


export const SchoolClasses=[
    {
        id:1,
        course:'Class 8',
        img:img8,
        subcourse:[]
    },
    {
        id:2,
        course:'Class 9',
        img:img9,
        subcourse:[]
    },
    {
        id:3,
        course:'Class 10',
        img:img10,
        subcourse:[]
    },
    {
        id:4,
        course:'Class 11',
        img:img11,
        subcourse:[]
    },
    {
        id:5,
        course:'Class 12',
        img:img12,
        subcourse:[]
    },
]