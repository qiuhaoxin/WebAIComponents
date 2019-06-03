const {BABEL_ENV,NODE_ENV}=process.env;

const cjs = BABEL_ENV === 'cjs' || NODE_ENV === 'test';
module.exports={
	presets:[
        [
           "@babel/env",
           {
           	   targets:{
	               chrome:'60',
	               firefox:'67',
	               safari:'11.1',
	               edge:'17',
	           }
           }
        ],
        "@babel/react",
        "react-app",
	],
	plugins:[
       cjs && '@babel/transform-modules-commonjs',
	].filter(Boolean)
}