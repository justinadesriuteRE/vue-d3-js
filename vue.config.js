module.exports = {
    devServer: {
        port: 9000,
        headers: {
            'X-Custom-Foo': 'bar',
            "Access-Control-Allow-Origin": "*",
            "Access-Control-Allow-Methods": "GET, POST, PUT, DELETE, PATCH, OPTIONS",
            "Access-Control-Allow-Headers": "*"
        }
    }
}

// module.exports = {
//     baseUrl: process.env.NODE_ENV === 'production'
//       ? '/vue-d3-js/'
//       : '/'
//   }
