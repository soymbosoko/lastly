import { useRouter } from "next/router";
import { useEffect } from "react";

const exampleData = [
  
  {
    id: 1,
    firstname: "Azua",
    lastname: "",
    school: "NIT",
    job: "Student",
    alive: "true",
    items: [
        { id: 10, name: "laptop" },
        { id: 11, name: "bowwo of wotor" }
    ],
    height: 165,
    image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/487152863_1163883651847646_1136421365135816004_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=4HQWsGVH3dQQ7kNvgHv-QzD&_nc_oc=AdmtyN50v5phEyu3T7cNhUdmBUL3CKFQT9DtdkW4zeEXV28UANXLKqPqyoUI2BN5JIg&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wE-tUcVuR6tnVqW3Ca0cuqgadoFYU9JmsY-kvNG-cN0sw&oe=680D701F",
    Information:"once arrested by speeding in surron"
  },
  {
    id: 2,
    firstname: "Anand",
    lastname: "Altanhuyag",
    school: "NIT",
    job: "i guess he is our class leader ",
    alive: "true",
    items:[
        { id: 12, name: "powerbank"},
        { id: 13, name: "notebook"}
    ],
    height: 180,
    image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/487414287_1337941660688934_7198698032655817303_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=NJCC0MpVkgYQ7kNvgGCk4VV&_nc_oc=AdmFtJpLVWhR5_NwtyT-pnOctGHkt6UQk2tHJ8v7cjepbTP8kjhA6vmzOjhXZ4LpM4o&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGzpqyeTqhikpJv1FgXC8aoO6z-la8a8aKbTUweUfeg9Q&oe=680D9B29",
    Information:"bullied by duka " 
  },
  {
    id: 3,
    firstname: "Anduul",
    lastname: "Altankhaich",
    school: "NIT",
    job: "jobless",
    alive: "true",
    items:[
        { id: 14, name: "bike"},
        { id: 15, name: "wallet"}
    ],
    height: 150,
    image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/486489839_9075164655926730_2246351072282500646_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=_mAOcgHbyCkQ7kNvgHupmUy&_nc_oc=Adl5gMvvoi2R10YImSPPZBbHQtVQcI5TX4k8mg70ORPRfFBrLrbQ7teTjQoLAcVDJHg&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wEowRiiLZQlghHdVXq0zVMZM4jB_67PImS0vmCJkcnQcg&oe=680D98DB",
    Information:"blud was once shorter than her gf"
  },
  {
    
      id: 4,
      firstname: "Anar",
      lastname: "Batsukh",
      school: "NIT",
      job: " full time Developer",
      alive: "true",
      items:[
          { id: 16, name: "gf"},
          { id: 17, name: "sony camera"}
      ],
      height: 180,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/440492905_799944951755935_2902401354523021313_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=X6V5_iVNCFQQ7kNvgE-n8q7&_nc_oc=AdnVPV3L8MsIP0KSTn9gl36K8lJ-sIoWW72wltkJVo8JTiXi31FVFRrc5ygOazPv6LU&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wEW4PYCYuHXJVzAamKN_7gLxYw-QOQsK_V_sVLfmqPB-Q&oe=680D7E67",
      Information:"have a loving gf"
  },
  {
    id: 5,
    firstname: "Audaulet",
    lastname: "Nurbulsin",
    school: "NIT",
    job: "Pro ai user ",
    alive: "true",
    items: [
        { id: 10, name: "samsung phone " },
        { id: 11, name: "notebook" }
    ],
    height: 170,
    image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/487537683_539160289213583_4509517384723939223_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=9f807c&_nc_ohc=wA11q880jAIQ7kNvgFfUFOh&_nc_oc=Adljst2TV27Dkq2JaPuPevjolAH94wTYXJIiKCljp775_7q1NrNY0K9MrVQbNN4cxJo&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGfMi3AZBPqvMYBCPrHnp7hScNqGmyDT_O1MY9LM_D3Ag&oe=680D86B0",
    Information:" Kazackk"
  },
  {
      id: 6,
      firstname: "Aidan-anand",
      lastname: "Amar-Bayar",
      school: "NIT",
      job: "Pro roblox vollyball player",
      alive: "true",
      items:[
          { id: 12, name: "phone"},
          { id: 13, name: "airpod"}
      ],
      height: 180,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485612450_2411931255807515_3960326419431273623_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=9f807c&_nc_ohc=7R2JaQpPQSUQ7kNvgE7qLWm&_nc_oc=Adl0RBMdWhglA3HqAcN11tuWBeE-qWTl66-5o3KC_2QY3ZYUM4Ogn4NQ899l8FdOe7w&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGQXVDUJu1WT6ixIn3i4BMvhrqG3akOF00z85HzGkUXYA&oe=680D982B",
      Information:"blud have airpod"
  },
  {
      id: 7,
      firstname: "Batpurev",
      lastname: "Batmunkh",
      school: "NIT",
      job: "Unemployed",
      alive: "true",
      items:[
          { id: 14, name: "diet coke"},
          { id: 15, name: "surron"}
      ],
      height: 170,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485809975_1583762255650159_4699766430227776188_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=JnhVg557o7YQ7kNvgHCcZUL&_nc_oc=AdlFX6d3MkgPh_GkBjGH9IZAYYVMohZc1qMHEpC8CWw-Hp7gqaK4t69xxBvQuv_4UlQ&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wF2IEZpLTw_Od5k2VoaUrwaNuCZtM7XPfxGBDe18Lhgvw&oe=680D7885",
      Information:"he was once arrest by the police whit azua"
  },
  {
      id: 8,
      firstname: "Naran-erdene",
      lastname: "Narka",
      school: "NIT",
      job: "tennis player",
      alive: "true",
      items:[
          { id: 16, name: "10 bucks"},
          { id: 17, name: "phone"}
      ],
      height: 160,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/485834566_1086532766621986_254833270854177572_n.jpg?_nc_cat=101&ccb=1-7&_nc_sid=9f807c&_nc_ohc=ow2yUfH4oEQQ7kNvgEj2Fub&_nc_oc=AdmZ4pZgNGNhwsYmifok73-DH9XC4MpdMKbnJMCq848ObN96bNefj8FQG9MyBYAq4iw&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wFuaOVAf0TUIZaFKXnGOvmJTo0OzhA9ViNHvJhzvJvA0A&oe=680D868E",
      Information:"good table tennisser "
  },
  {
      id: 9,
      firstname: "Chigma",
      lastname: "Toivgo",
      school: "NIT",
      job: "Software Engineer Nerd",
      alive: "true",
      items:[
          { id: 14, name: "phone "},
          { id: 15, name: "kard"}
      ],
      height: 190,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/410707327_1146352443438314_3217084823957678644_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0024fc&_nc_ohc=E167G6xVghQQ7kNvgHGtFQy&_nc_oc=AdmouN4FTLvEFJPssQ-qnpfMr6anKaRXJObTFj6WXNzJpUPBJityobcpAOMg-1GU6xg&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wHiu2LdkWo5HK7Pq8uytI3B_3seiZSjekV-jaxjuoBwlw&oe=680D7532",
      Information:" good student"
  },
  {
      id: 10,
      firstname: "Soyombo",
      lastname: "Chingunjav",
      school: "NIT",
      job: "Homeless",
      alive: "true",
      items:[
          { id: 16, name: "wallet"},
          { id: 17, name: "phone"}
      ],
      height: 190,
      image:"https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/399965464_688080729965362_4239222055629405087_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=V18TRaNNAw8Q7kNvgGuuBV4&_nc_oc=AdmzgBLUeQHyKipvTDwR1Ow5-to8h5oiBbiVb2fvUyEjyEt1JPYFzLMXn-25kpi0DAc&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wESeRz-Wpijb5QGFpRuC4Z4LP7J3FLtQ4SlRqNBQOe9jQ&oe=680D8806",
      Information:"guygarghbaehrgbgberysyesuhdfhsbhskefsyksdh"
  },
      {
          id: 11,
          firstname: "Oyun-Bileg",
          lastname: "Oyka",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "Book" }
          ],
          height: 170,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/365505728_283558610934289_7470104976704425441_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0024fc&_nc_ohc=HjiNW0BIr8kQ7kNvgEgJOew&_nc_oc=AdnFDaetFava2tXoUWrGgweNz6ps1Q86vnfpzAUJmdyVOcrgBUwASTC4a4K_sdYawjA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wHPPlUvVxf3mf9ejTyPhzX9THpOYow0snjtSS_ir-iiCA&oe=680D6B5D",
          Information:"Azua's frend"
      },
      {
          id: 12,
          firstname: "minory",
          lastname: "Nguyen",
          school: "NIT",
          job: "Proffesional vape tester",
          alive: "true",
          items: [
              { id: 20, name: "vaporizer" },
              { id: 21, name: "Mac" },
              { id: 22, name: "Block"},
             
          ],
          height: 190,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/486404039_1159195992342026_6204245222037895766_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=9f807c&_nc_ohc=p35zZrrKFFMQ7kNvgHoI2u4&_nc_oc=Adli6OpuDouHzXi1xDTlaCG3uPJJLbhLbrqHkrRmAMEcgkJumPoJac6wmKSo3eZfj_A&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wHAOWd0WwUnlVDDKb0J2F3Yywq4s3N3P12-h-ot0TTT6Q&oe=680D7B76",
          Information:"skibidi"
      },
      {
          id: 13,
          firstname: "Tsomo",
          lastname: "Stolmon",
          school: "NIT",
          job: "class skipper",
          alive: "true",
          items: [
              { id: 20, name: "make up" },
              { id: 21, name: "another make up" }
          ],
          height: 160,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/486450658_633038826245746_6191676463860147912_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Bl2C-qdhFyEQ7kNvgFbV4CR&_nc_oc=Adn9yq8-4JMBiOPcPy3t_eXWu36SkR5IAA3kg_YoRqOt_PnyeHdSUalCXijpK2BZu5k&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wH2F5loSbU8VihBjdf_1q-zM7KRhSJC4vTAfs0F4Jn_Pw&oe=680D6B55",
          Information:"always carries green watar bottle"
      },
      {
          id: 14,
          firstname: "Serjmydag",
          lastname: "Serje",
          school: "NIT",
          job: " almost Developer",
          alive: "true",
          items: [
              { id: 20, name: "pink phone " },
              { id: 21, name: "pink water bottle" }
          ],
          height: 150,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/486519057_1192723862532106_2577025266018345647_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=9f807c&_nc_ohc=GU8TRjqVHycQ7kNvgF129oX&_nc_oc=Adm0Zm2AZkBlGxxElrd-fQbudTSwMQiAd0HjYnTK9ksFQBT4jMooswZDVMCZFsGqb2I&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGeFCAbDN6bhScq_-EzBQkkMTplRCvgqCaD-C_v7d8nLg&oe=680D6D60",
          Information:"his phone always got stolen"
      },
      {
          id: 15,
          firstname: "Esui",
          lastname: "Enkhbayar",
          school: "NIT",
          job: "full time roblox player",
          alive: "true",
          items: [
              { id: 20, name: "phone" },
              { id: 21, name: "idk" }
          ],
          height: 170,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/378117731_696473319055602_1423887977739422611_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0024fc&_nc_ohc=HGkEpaxs1QAQ7kNvgH_Kdut&_nc_oc=AdkmLMYBH7ytRLMn7CNSt8omZaXCllG8ZgR8Wcuhrf_l_2t-wKNIThPHZd9dojg5toE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wEwHRqxkRhBgmlHOgj6lF1TAktAbqaZdaSYjpdXk-fjMw&oe=680D77C4",
          Information:"freinds wit khulan"
      },
      {
          id: 16,
          firstname: "Gunsen",
          lastname: "Miyataro",
          school: "NIT",
          job: "full time tetr.io player",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "harry potter pen case" }
          ],
          height: 150,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/450832236_374727255318737_7662752942400443_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=0024fc&_nc_ohc=TZCDs3jReXUQ7kNvgGvRfJD&_nc_oc=AdkoNXXA37Pf3Q8vaP-blpVaRAF38GUam4Q6N5cswVgKNgfio6CM7B3H_XwMC-t4ycs&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wHymRYifRcXrDlAJTIXJYo_Z-Ftqnu9eq2ns3J0xFvEGQ&oe=68159BAB",
          Information:" loves genshin"
      },
      {
          id: 17,
          firstname: "Khulan",
          lastname: "IDK",
          school: "NIT",
          job: "Full time roblox player",
          alive: "true",
          items: [
              { id: 20, name: "Laptop" },
              { id: 21, name: "idk" }
          ],
          height: 170,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/419461829_960923814906227_3995096251535976376_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=HFnssKKPD5sQ7kNvgGk3YxH&_nc_oc=Adl4g6r5a64trO6AFuqpGBk4hXfO7KL-QX6bEWfWy5CpPaoGaBewfxG0t2sBEboNlmA&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wFQNgITfZGJpggXtQrfcfh1_T80fu-yJsowoLCN3uUifA&oe=680D941B",
          Information:"prends wit Esui"
      },
      {
          id: 18,
          firstname: "Telmuun",
          lastname: "",
          school: "NIT",
          job: "Gym goer",
          alive: "true",
          items: [
              { id: 20, name: "Vegies" },
              { id: 21, name: "apples" }
          ],
          height: 200,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/455901819_1280215723343683_2482028609821477391_n.jpg?_nc_cat=106&ccb=1-7&_nc_sid=0024fc&_nc_ohc=1lA3TDE7iNkQ7kNvgE6e_7u&_nc_oc=Adls7-Oy2xs4QZD6yn1gdylG8RfWb4zFwZ61nLtwhSmPUl6KgRBCuFO78yoPipCrWTE&_nc_ad=z-m&_nc_cid=0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wGzibTzmGIY6gmRkXIhAxsAgJG_Z9D7zpnY7Lm9XfSXXw&oe=680D73A0",
          Information:"won agianst teacher and got book"
      },
      {
          id: 19,
          firstname: "khantushig",
          lastname: "Ganhuyag",
          school: "NIT",
          job: "Developer",
          alive: "true",
          items: [
              { id: 20, name: "samsung fold phone" },
              { id: 21, name: "stalins hat" }
          ],
          height: 170,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/486236579_1179379106578337_4908828930556172698_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=9f807c&_nc_ohc=kuUYx3DRQI8Q7kNvgGPyoJV&_nc_oc=Adn42Emk34hHpPpQitJ4OoUlQF_XLMs3ourwKCi8QW3ngvGdVW8wFR3hz3Q2Kdao3X0&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wF3GG5jkWXU0XyrXxUtNlpPDdk7EX6h1TDfKicSVJMm6A&oe=680D9C31",
          Information:"bata and him agried to an no more war"
      },
      {
          id: 20,
          firstname: "Erkhes",
          lastname: "",
          school: "NIT",
          job: "football player",
          alive: "true",
          items: [
              { id: 20, name: "blue phone" },
              { id: 21, name: "Book" }
          ],
          height: 180,
          image: "https://scontent.fuln2-2.fna.fbcdn.net/v/t1.15752-9/384565699_1544775762727869_6450282628252374524_n.jpg?_nc_cat=104&ccb=1-7&_nc_sid=9f807c&_nc_ohc=Oy6U_zFDyxIQ7kNvgE3sm0b&_nc_oc=AdmRyFBp6vMpUqasiyV5Of0c66kJE2F6e1I-ct5F3Xoxu1Pkb7lTSB2MUho1cMt2GA8&_nc_zt=23&_nc_ht=scontent.fuln2-2.fna&oh=03_Q7cD1wFv_TKvbUuiMIZNXi4uRhGEGUqSSc7jhXob52au9fBm9Q&oe=680D9FD9",
          Information:"playes valorant"
      },
      {
        id: 20,
        firstname: "Temka",
        lastname: " Bagsh",
        school: "NIT",
        job: "front-end teacher, professional boxer",
        alive: "true",
        items: [
            { id: 20, name: "black and grey old fashion type shi converse " },
            { id: 21, name: "Duka" },
            { id: 22, name: "Khantushig"}
        ],
        height: 180,
        image: "https://tr.rbxcdn.com/180DAY-9d981631d8d158f0a6247fcde11886fe/420/420/Hat/Webp/noFilter",
        Information:"professional raft player"
    },
  ];
  import { useState } from "react";

  export default function Lab4() {
    const [count, setCount] = useState(false);
    const [name, setName] = useState("");
    const router = useRouter();
  
    const filter = exampleData.filter((item) =>
      item.firstname.toLowerCase().includes(name.toLowerCase())
    );
  
    return (
      <div className="min-h-screen bg-blue-50 flex flex-col items-center p-10 text-black">
        <button
        onClick={() => router.push('/')}
        className="absolute top-4 left-4 text-black-300 border border-black-400 px-4 py-2 rounded-lg shadow-md hover:bg-black-900 transition-all duration-300"
      >
        BACK
      </button>
        <input
          type="text"
          className="border border-gray-400 bg-white rounded-lg p-3 shadow-md mb-5 w-80 text-black text-lg"
          placeholder="Search by name..."
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

  
        <button
          className="bg-sky-500 text-black px-6 py-3 rounded-lg shadow-md hover:bg-sky-600 transition text-lg"
          onClick={() => setCount(!count)}
        >
          Change the way it looks
        </button>
  
        {}
        {filter.length === 0 ? (
          <p className="text-red-500 mt-5 text-xl">No student found</p>
        ) : (
          <div
            className={`mt-10 w-full max-w-[1400px] grid ${
              count
                ? "grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-8"
                : "grid-cols-1 gap-12"
            }`}
          >
            {filter.map((element, index) => (
              <div
                key={index}
                className={`bg-white shadow-2xl rounded-xl overflow-hidden w-full ${
                  count ? "w-80 h-[600px]" : "max-w-full"
                }`}
              >
                {}
                {!count && (
                  <div className="flex gap-6 p-4 w-full">
                    <img
                      src={element.image}
                      className="w-48 h-48 object-cover rounded-xl shadow-lg"
                      alt={element.firstname}
                    />
                    <div className="flex flex-col justify-center w-full">
                      <p className="text-2xl font-bold text-gray-800">
                        {element.firstname} {element.lastname}
                      </p>
                      <p className="text-lg text-gray-600 mt-2">Job: {element.job}</p>
                      <p className="text-lg text-gray-600">Height: {element.height}</p>
                      <div className="mt-5">
                        <p className="font-semibold text-lg">Items:</p>
                        <div className="flex flex-wrap gap-3 mt-3 justify-start">
                          {element.items.map((item, idx) => (
                            <span
                              key={idx}
                              className="bg-gray-300 text-gray-800 px-3 py-2 text-base rounded-md shadow-sm"
                            >
                              {item.name}
                            </span>
                          ))}
                        </div>
                      </div>
                    </div>
                  </div>
                )}
                {count && (
                  <div className="text-center w-full p-4">
                    <img
                      src={element.image}
                      className="w-48 h-48 object-cover rounded-xl mx-auto mb-6 shadow-lg"
                      alt={element.firstname}
                    />
                    <p className="text-2xl font-bold text-gray-800">
                      {element.firstname} {element.lastname}
                    </p>
                    <p className="text-lg text-gray-600 mt-2">Job: {element.job}</p>
                    <p className="text-lg text-gray-600">Height: {element.height}</p>
                    <div className="mt-5">
                      <p className="font-semibold text-lg">Items:</p>
                      <div className="flex flex-wrap gap-3 mt-3 justify-start">
                        {element.items.map((item, idx) => (
                          <span
                            key={idx}
                            className="bg-gray-300 text-gray-800 px-3 py-2 text-base rounded-md shadow-sm"
                          >
                            {item.name}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        )}
      </div>
    );
  }

  