
const paths = {
    authenticate: "/api/auth",
    airtime:{
        info:"/api/topup/info/",
        topup:"/api/topup/exec/",
    },
    data:{
        info:"/api/datatopup/info/",
        topup:"/api/datatopup/exec/",
    },
    status: "/api/topup/log/byref/"
}

module.exports = { paths };