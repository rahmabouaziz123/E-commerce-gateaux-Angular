import { Product } from './product';


export const PRODUCTS: Product[]=
// [

//   {

//       reference : "prod01",

//       name: "Monica Side Wingback Chair, Pink",

//       stockQte : 20,

//       unitPrice:200.500,

//       image :"pinkChair.png",

//       category : "Chairs",
//       description:"",
//       starts:"",

//       comments: [

//           {

//               rating: 5,

//               comment: 'I think its great. Great value for the price',

//               date: '2020-12-31T20:38:28.547094Z'

//           },

//           {

//               rating: 4,

//               comment: 'Its sturdy, color is great, and smaller like we wanted. ',

//               date: '2021-09-25T14:07:13.556094Z'

//           },

//           {

//               rating: 3,

//               comment: ' It looks as expected as in the image.',

//               date: '2022-06-13T05:33:09.348884Z'

//           }

//       ]

//   },

//   {

//       reference : "prod02",

//       name: "Mainstays Wood Rectangle Coffee Table",

//       stockQte : 50,

//       unitPrice:120.750,

//       image :"coffeTable1.png",

//       category : "Tables",
//       description:"",
//       starts:"",

//       comments: [

//           {

//               rating: 5,

//               comment: 'I think its great. Great value for the price',

//               date: '2020-12-31T20:38:28.547094Z'

//           },

//           {

//               rating: 4,

//               comment: 'Its sturdy, color is great, and smaller like we wanted. ',

//               date: '2021-09-25T14:07:13.556094Z'

//           }

//       ]

//   },

//   {

//       reference : "prod03",

//       name: "Kinley Lounge Arm Chair, Navy",

//       stockQte : 70,

//       unitPrice:350.000,

//       image :"blueChair.png",

//       category : "Chairs",
//       description:"",
//       starts:"",

//       comments: [

//           {

//               rating: 5,

//               comment: 'I think its great. Great value for the price',

//               date: '2020-12-31T20:38:28.547094Z'

//           },

//           {

//               rating: 3,

//               comment: ' It looks as expected as in the image.',

//               date: '2022-06-13T05:33:09.348884Z'

//           }

//       ]

//   },

  

//   {

//       reference : "prod04",

//       name: "Noble House Wood Coffee Table",

//       stockQte : 35,

//       unitPrice:240.000,

//       image :"coffeTable2.png",

//       category : "Tables",
//       description:"",
//       starts:"",

//       comments: [

//           {

//               rating: 5,

//               comment: 'I think its great. Great value for the price',

//               date: '2020-12-31T20:38:28.547094Z'

//           },

//           {

//               rating: 4,

//               comment: 'Its sturdy, color is great, and smaller like we wanted. ',

//               date: '2021-09-25T14:07:13.556094Z'

//           },

//           {

//               rating: 3,

//               comment: ' It looks as expected as in the image.',

//               date: '2022-06-13T05:33:09.348884Z'

//           }

//       ]

//   }

// ]


[
    {
        "reference" : "prod01",
        "name": "Cream Cake",
        "stockQte" : 20,
        "unitPrice":200,
        "image" :"images/c1.png",
        "category" : "Gâteaux à la pâte levée",
        "description": "Découvrez notre irrésistible Cream Cake, un délice gourmand alliant une texture onctueuse et des saveurs riches. Parfait pour égayer vos moments.",
        "starts":"⭐⭐⭐⭐⭐",
        "comments": [
        {
            "rating": 5,
            "comment": "Délicieux et moelleux ! Les gâteaux de vous sont une explosion de saveurs.",
            "date": "2022-06-13T05:33:09.348884Z"
        },
        {
            "rating": 4,
            "comment": "J'ai commandé le gâteau au chocolat pour une fête et tout le monde était impressionné. ",
            "date": "2022-06-13T05:33:09.348884Z"
        },
        {
            "rating":3,
            "comment": "Une expérience gustative exceptionnelle ! Les gâteaux de vous sont de véritables œuvres d'art comestibles.",
            "date": "2022-06-13T05:33:09.348884Z"
        }
        ]
    },
    {
        "reference" : "prod02",
        "name": "Choco Cake",
        "stockQte" : 50,
        "unitPrice":100,
        "image" :"images/c2.png",
        "category" : "Gâteaux à la pâte levée",
        "description": "Succombez à notre Choco Cake exquis, une fusion parfaite de chocolat intense et de moelleux. Une expérience divine pour les amateurs de chocolat.",
        "starts":"⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Le service client est également impeccable, ce qui rend l'ensemble de l'expérience d'achat très agréable",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 4,
                "comment": "Excellente présentation et goût exquis ! Les gâteaux sont non seulement visuellement attrayants ",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    },
    {
        "reference" : "prod03",
        "name": "Slice Cake",
        "stockQte" : 70,
        "unitPrice":120,
        "image" :"images/c3.png",
        "category" : "gateau au chocolat",
        "description": " Dégustez notre Slice Cake délicieusement parfumé, une harmonie parfaite entre moelleux et saveurs subtiles. Un plaisir à chaque bouchée.",
        "starts":"⭐⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Service exceptionnel et gâteaux de qualité supérieure. ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 3,
                "comment": " J'ai essayé le gâteau caramel beurre salé, et c'était une expérience gustative inégalée'.",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    }, 
    {
        "reference" : "prod04",
        "name": "Fruit Cake",
        "stockQte" : 35,
        "unitPrice":130,
        "image" :"images/c4.png",
        "category" : "ateau au chocolat",
        "description": "Explorez notre Fruit Cake riche en saveurs, une symphonie de fruits frais et de textures moelleuses. Une expérience gustative équilibrée et délicieuse.",
        "starts":"⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Un grand bravo à vous pour ses gâteaux exceptionnels",
                "date": "17/05/2023"
            },
            {
                "rating": 4,
                "comment": "Les gâteaux de vous sont une révélation pour les amateurs de desserts. ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 3,
                "comment": " Les gâteaux de vous sont devenus ma solution go-to pour toutes les occasions spéciales'.",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    },

    {
        "reference" : "prod05",
        "name": "Brown Cake",
        "stockQte" : 35,
        "unitPrice":110,
        "image" :"images/c5.png",
        "category" : "ateau au chocolat",
        "description": "Savourez notre Brown Cake exquis, une fusion parfaite de chocolat riche et de notes subtiles. Un délice irrésistible pour les amateurs de chocolat.",
        "starts":"⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Une véritable symphonie de saveurs sait comment créer des gâteaux qui émerveillent",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 4,
                "comment": "J'ai essayé le gâteau caramel beurre salé, et c'était une expérience gustative inégalée ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 3,
                "comment": " Délicieux et moelleux ! Les gâteaux de vous sont une explosion de saveurs.",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    },

    {
        "reference" : "prod06",
        "name": "Slice Cake",
        "stockQte" : 35,
        "unitPrice":115,
        "image" :"images/c6.png",
        "category" : "Gâteau marbré",
        "description": "Découvrez notre Slice Cake délicieusement moelleux, garni de saveurs exquises. Une tranche de bonheur à partager lors de chaque occasion spéciale.",
        "starts":"⭐⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Les gâteaux de vous sont devenus ma solution go-to pour toutes les occasions spéciales.",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 4,
                "comment": "Une véritable symphonie de saveurs ! sait comment créer des gâteaux qui émerveillent.. ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating":3,
                "comment": "  J'ai essayé le gâteau caramel beurre salé, et c'était une expérience gustative inégalée.",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    },

    {
        "reference" : "prod07",
        "name": "Fruit Cake",
        "stockQte" : 35,
        "unitPrice":200,
        "image" :"images/c7.png",
        "category" : "Gâteau marbré",
        "description": "Notre Fruit Cake, une explosion de saveurs fruitées dans chaque bouchée. Parfait mélange de douceur pour égayer tous vos moments gourmands.",
        "starts":"⭐⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Délicieux et moelleux ! Les gâteaux de vous sont une explosion de saveurs. ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 4,
                "comment": "J'ai commandé le gâteau au chocolat pour une fête et tout le monde était impressionné. ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 3,
                "comment": " Les gâteaux de vous sont mes préférés ! La variété de saveurs est incroyable.",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    },
    {
        "reference" : "prod08",
        "name": "Choco Cake",
        "stockQte" : 35,
        "unitPrice":125,
        "image" :"images/c8.png",
        "category" : "Gâteaux à la pâte levée",
        "description": "Délectez-vous avec notre irrésistible Choco Cake, une symphonie de chocolat pur. Un plaisir exquis qui ravira les amateurs de chocolat à chaque dégustation.",
        "starts":"⭐⭐⭐⭐",
        "comments": [
            {
                "rating": 5,
                "comment": "Délicieux et moelleux ! Les gâteaux de vous sont une explosion de saveurs. ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 4,
                "comment": "Excellente présentation et goût exquis ! Les gâteaux sont non seulement visuellement attrayants ",
                "date": "2022-06-13T05:33:09.348884Z"
            },
            {
                "rating": 3,
                "comment": " Une valeur sûre pour les amateurs de gâteaux de qualité",
                "date": "2022-06-13T05:33:09.348884Z"
            }
        ]
    }

];