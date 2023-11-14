export const useColumn =[
    { field: 'id', headerName: 'ID', width: 70 },
    {field:"user", headerName:"User", width:350, renderCell:(params)=>{
        return(
            <div className="cellWithImg">
                <img className="cellImg" src={params.row.img} alt="avatar" />
                {params.row.username}
            </div>
        )
    }},

    {
        field:"email",
        headerName: "Email",
        width:300

    },
    {
        field:"age",
        headerName: "Age",
        width:200

    },
    {
        field:"status",
        headerName: "Status",
        width:250,
        renderCell:(params)=>{
            return(
                <div className={`cellWithStatus ${params.row.status}`}>{params.row.status}</div>
            )
        }

    },

 

]

export const userRows = [
    {
        id:1,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:2,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"passive",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:3,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:4,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"passive",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:5,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"pending",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:6,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:7,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"pending",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:8,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:9,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:10,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },

    {
        id:11,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:12,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:13,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:14,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
    {
        id:15,
        username:"Martine",
        img:"https://www.missnumerique.com/blog/wp-content/uploads/reussir-sa-photo-de-profil-michael-dam.jpg",
        status:"active",
        email:"martine@gmail.com",
        age:21
    },
]