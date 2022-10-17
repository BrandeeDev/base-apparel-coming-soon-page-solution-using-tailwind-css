/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./*.{html,js,css}"],
    theme: {
        extend: {
            fontFamily: {
                josefin: ['Josefin Sans', 'sans-serif']
            },
            colors: {
                heading: {
                    0: '#CE9898',
                    1: '#423A3A',
                },
                text:{
                    content:'#CE9898',
                },
                gradient_bg:{
                    start:'#FFFFFF',
                    end:'#FFF4F4',
                },
                gradient_btn:{
                    start:'#F8BFBF',
                    end:'#EE8B8B'

                },
                email_color:{
                    input:'#423A3A',
                    error:'#F96464',
                }


            }
        },
    },
    plugins: [],
}