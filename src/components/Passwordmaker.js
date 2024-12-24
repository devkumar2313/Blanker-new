import React, { Component } from 'react';
import {ReactComponent as YourSvg2} from './replace-svgrepo-com.svg'
export class Passwordmaker extends Component {
    static displayName = Passwordmaker.name;

    constructor(props) {
        super(props);
        this.state = { value: 'god', long: '', Password: '', word: '',content:0,copy1:false,replace:false,email:false,wifi:false,fun:false,minValue:true,};
        this.Makeid = this.Makeid.bind(this);
        
    }

    Makeid() {
        if(this.state.minValue == true){
        var result = '' 
        var characters = this.state.word;
        var charactersLength = characters.length;
        if(this.state.content == 1){
            for (var i = 0; i < this.state.long; i++) {
                if(this.state.long > 9){
                    if(i <= 6){
                        var subselect = characters.substring(0,52)
                        var subselectLength = subselect.length
                     }
                     else if (i == 8){
                         var subselect = characters.substring(62,66)
                        var subselectLength = subselect.length
                     }
                     else{
                         var subselect = characters.substring(52,62)
                        var subselectLength = subselect.length
                     }

                }
                else{
                    if(i <= 4){
                        var subselect = characters.substring(0,52)
                        var subselectLength = subselect.length
                     }
                     else if (i == 6){
                         var subselect = characters.substring(62,66)
                        var subselectLength = subselect.length
                     }
                     else{
                         var subselect = characters.substring(52,62)
                        var subselectLength = subselect.length
                     }
                }
               

                result += subselect.charAt(Math.floor(Math.random() *
                    subselectLength));
            }

        }
        if(this.state.content == 2){
            for (var i = 0; i < this.state.long; i++) {
                if(this.state.long > 9){
                    if(i <= 6){
                        var subselect1 = characters.substring(0,52)
                        var subselect2 = characters.substring(66,92)
                        var subselect = subselect1 + subselect2
                        var subselectLength = subselect.length
                     }
                     else if (i == 8){
                         var subselect = characters.substring(62,66)
                        var subselectLength = subselect.length
                     }
                     else{
                         var subselect1 = characters.substring(52,62)
                         var subselect2 = characters.substring(66,92)
                         var subselect = subselect1 + subselect2
                        var subselectLength = subselect.length
                     }

                }
                else{
                    if(i <= 4){
                        var subselect1 = characters.substring(0,52)
                        var subselect2 = characters.substring(66,92)
                        var subselect = subselect1 + subselect2
                        var subselectLength = subselect.length
                     }
                     else if (i == 6){
                         var subselect = characters.substring(62,66)
                        var subselectLength = subselect.length
                     }
                     else{
                         var subselect1 = characters.substring(52,62)
                         var subselect2 = characters.substring(66,92)
                         var subselect = subselect1 + subselect2
                        var subselectLength = subselect.length
                     }
                }
                

                result += subselect.charAt(Math.floor(Math.random() *
                    subselectLength));
            }

        }
       
        
        if(this.state.content == 3){
            for (var i = 0; i < this.state.long; i++) {
                if(this.state.long > 9){
                    if(i <= 6){
                        var subselect1 = characters.substring(0,52)
                        var subselect2 = characters.substring(66,92)
                        var  subselect3 = characters.substring(92,-1)
                        var subselect = subselect1 + subselect2 + subselect3
                        var subselectLength = subselect.length
                     }
                     else if (i == 8){
                         var subselect = characters.substring(62,66)
                        var subselectLength = subselect.length
                     }
                     
                     else{
                         var subselect1 = characters.substring(52,62)
                         var subselect2 = characters.substring(66,92)
                         var  subselect3 = characters.substring(92,-1)
                        var subselect = subselect1 + subselect2 + subselect3
                        var subselectLength = subselect.length
                     }
     

                }
                else{
                    if(i <= 4){
                        var subselect1 = characters.substring(0,52)
                        var subselect2 = characters.substring(66,92)
                        var  subselect3 = characters.substring(92,140)
                        var subselect = subselect1 + subselect2 + subselect3
                        var subselectLength = subselect.length
                     }
                     else if (i == 6){
                         var subselect = characters.substring(62,66)
                        var subselectLength = subselect.length
                     }
                     
                     else{
                         var subselect1 = characters.substring(52,62)
                         var subselect2 = characters.substring(66,92)
                         var  subselect3 = characters.substring(92,140)
                        var subselect = subselect1 + subselect2 + subselect3
                        var subselectLength = subselect.length
                     }
     
                }
                
                result += subselect.charAt(Math.floor(Math.random() *
                    subselectLength));
            }

        }
       
        this.setState({ Password: result,replace:true });

        }
        
    }


    render() {
        const handleChange3=(e)=>{
            if(e.target.value < 8 && e.target.value > 0){
                this.setState({minValue:false})
            }
            else{
                this.setState({minValue:true})
            }

        }
        

        return (
            <>
            <div className={`content ${this.state.content === 0 ? "fade-in" : "fade-out"}`}>
                {this.state.content == 0 &&
               <div class="relative h-full w-full bg-slate-950">
           <div class="absolute top-0 z-[-2] h-screen w-screen bg-[#000000] bg-[radial-gradient(#ffffff33_1px,#00091d_1px)] bg-[size:20px_20px]">
           <section class='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
           <div class=" text-white max-w-3xl mx-auto  mt-7 ">
             
 
           
<h1 class="text-3xl font-extrabold dark:text-white">For What<small class="ms-2 font-semibold text-gray-500 dark:text-gray-400">Work You Want Password from Us:</small></h1>



<ul class="mt-5 grid w-full gap-6 md:grid-cols-2">
    <li>
        <input onClick={()=>{
            this.setState({content:1,
                word:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890%$#@"
            })
        }} type="radio" id="hosting-small" name="hosting" value="hosting-small" class="hidden peer"  />
        <label for="hosting-small" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">Characters included like: <span className='text-gray-800 font-semibold'>ABCDabcd1234%$#@</span></div>
                <div class="w-full">For Email and Websites</div>
            </div>
            {/* ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890%$#@ */}
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input onClick={()=>{
            this.setState({content:2,
                 word:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890%$#@<>/=:|\)(?][!~{}₹^&*-+_` */"

            })
        }} type="radio" id="hosting-big" name="hosting" value="hosting-big" class="hidden peer"/>
        <label for="hosting-big" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">
            <div class="block">
                <div class="w-full text-lg font-semibold">Characters Included AddOn: + <span className='text-gray-800 font-semibold'>{`(<>/%$#@)`}</span></div>
                <div class="w-full">For Wifi and other unforeseen combination </div>
            </div>
            {/* ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:|\)(?][%$#@!~{}₹^&*-+_` */}
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
    <li>
        <input onClick={()=>{
            this.setState({content:3,
                word:'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890%$#@<>/=:|\)(?][!~₹^&*-+_♀♂☹☺☻〠ヅツ㋡웃유üÜシッ㋛͟ꑇꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡ⍢⍣⍤⍥⍨⍩ὃὕὣѶӪӫ℀৳≝≄`'
            })
        }} type="radio" id="hosting-different" name="hosting" value="hosting-different" class="hidden peer" />
        <label for="hosting-different" class="inline-flex items-center justify-between w-full p-5 text-gray-500 bg-white border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-400 dark:bg-gray-800 dark:hover:bg-gray-700">                           
            <div class="block">
                <div class="w-full text-lg font-semibold">Characters Included AddOn: + <span className='text-gray-800 font-semibold'>{`(♀♂☹☺☻〠ヅ웃유)`}</span></div>
                <div class="w-full">For Fun</div>
            </div>
            {/* Characters Included:ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:|\)(?][%$#@!~₹^&*-+_♀♂☹☺☻〠ヅツ㋡웃유üÜシッ㋛͟ꑇꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡ⍢⍣⍤⍥⍨⍩ὃὕὣѶӪӫ℀৳≝≄` */}
            <svg class="w-5 h-5 ms-3 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 14 10">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5h12m0 0L9 1m4 4L9 9"/>
            </svg>
        </label>
    </li>
</ul>


               
                    {/* <h1>Please Choose For What Work You Want Password from Below Options:</h1> */}
                
                {/* <form>
                    <div className='options1'>
                <label>Password for email and Website Signup then click this:-</label>
                <input type='radio' name='user' value='he2' onClick={() => {
                    this.setState({
                        word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/='
                       
                    })
                        }}></input>
                        </div>
                    <div className='options1'>
                <label>Password for Wifi and other security reason then click this:-</label>
                <input type='radio' name='user' value='he3' onClick={() => {
                    this.setState({
                        word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:|\)(?][%$#@!~`₹^&*-+_
                      
                    })
                        }}></input>
                        </div>
                    <div className='options1'>
                <label for='ho'>Password for one time use because Password's Some characters not found on keyboard then click this:-</label>
                <input type='radio' id='ho' name='user' value='he4' onClick={() => {
                    this.setState({
                        word: 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890<>/=:|\)(?][%$#@!~`₹^&*-+_♀♂☹☺☻〠ヅツ㋡웃유üÜシッ㋛͟ꑇꐕꌇꌈꉕꈋꈌꆛꆜꃼ☠☃〲〴ϡ⍢⍣⍤⍥⍨⍩ὃὕὣѶӪӫ℀৳≝≄'
                       
                    })
                        }}></input>
                        </div>
                    <div className='passwordsize'>
                    <label>Password size:</label>
                    <input type='number' onChange={(e) => {
                        this.setState({
                            long: e.target.value
                        })
                        }}></input>
                    </div>
                </form>
                <div className='he2'>
                    <h4> Click Generate button to create your password:</h4>

                    <button onClick={this.Makeid}>Generate</button>
                </div>
                <div className='password'>
                    <h3> Your password:</h3>
                </div>
                    <div className='password1'>
                    <h2>{this.state.Password}</h2>
                </div>
                <div className='passwordbutton'>
                    <button onClick={this.Makeid}>Change</button>
                    <button onClick={() => { navigator.clipboard.writeText(this.state.Password) }}>COPY</button>
               </div>
               
                <p> *if you does not like this password then click on the Change button</p> */}
                </div>
                </section>
                
                </div>
                </div>
                }
                </div>

                <div className={`content ${this.state.content === 1 ? "fade-in" : "fade-out"}`}>
          {this.state.content === 1 && 
          <>
          <div class="absolute h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%,-z_2)]">
          <section class='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
          <div class=" text-white max-w-3xl mx-auto  mt-7 text-center ">
         
<h1 class="mb-4 text-3xl font-extrabold text-gray-600 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome</span> Buddy lets make it-</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">So you want password for using in email,for this please provide this below parameter a value:</p>


<div className='flex items-center justify-center text-white mt-5'>
    

{this.state.minValue && 
<>
<label for="helper-text" class="block text-1xl md:text-1.5xl font-medium text-white dark:text-white">Length of Password{`(>8): `}</label>
<input type='text' id='error' value={this.state.long} onChange={(e)=>{
    this.setState({long:e.target.value,replace:false})
    handleChange3(e)
}} aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ml-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex-5,7,8" autoFocus/>

</>}

{!this.state.minValue &&
<>
<label for="helper-text" class="-mr-8 mb-7 block text-1xl md:text-1.5xl font-medium text-white dark:text-white">Length of Password{`(>8)`} : </label>
<div>
<input type="text" id="error" value={this.state.long} onChange={(e)=>{
    this.setState({long:e.target.value,replace:false})
    handleChange3(e)
}} class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 ml-4  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" aria-describedby="helper-text-explanation" placeholder="ex-5,7,8" autoFocus></input>
<p class="pl-4 mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, god!</span> Please Input value more than 8.</p>
</div>
</>
}

</div>
<p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>


     
            <button onClick={this.Makeid} class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                {!this.state.replace && <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Generate
</span>}
{
    this.state.replace &&
    <> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Replace
    </span>
    <YourSvg2 class="ml-2 w-4 h-4 me-2" />
    </>
}

</button>


<h1 class="text-1xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
           
            <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            
        </h1>
        <div className='flex justify-center'>
        <h3 className="text-xl font-semibold mt-3 text-center">{`Generated Result -->  `} </h3>
        
        <label className=" ml-4 mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md">
        <p className=" stroke-emerald-400 font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double text-1xl">{this.state.Password || "No result yet"}</p>
       
        <button onClick={()=>{
                this.setState({copy1:true})
                setTimeout(() => {this.setState({
                copy1:false})},2000)
                navigator.clipboard.writeText(this.state.Password)}} class="-mb-5 mt-3  text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy1 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy1 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
       
        </label>
        
      
        </div>
        
    

          {/* <div className='passwordsize'>
          <label>Password size:</label>
          <input type='number' onChange={(e) => {
              this.setState({
                  long: e.target.value
              })
              }}></input>
          </div> */}
         
                {/* <p className='text-gray-500 dark:text-gray-400'> *if you does not like this password then click on the Change button</p> */}
                
                </div>
                </section>
                <footer id='footer' className=' text-white text-xl'>
                                <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
                                <div className='head'>
                                   <h3>*if you does not like current password then you have ability to change by clicking on replace button.</h3>
                                        
                                     
        
                                    </div>
                                </section>
                            </footer>
                </div> 

                </div>
          </>
          
          
          }
        </div>

        <div className={`content ${this.state.content === 2 ? "fade-in" : "fade-out"}`}>
          {this.state.content === 2 && 

<>
<div class="absolute h-full w-full bg-slate-950">
<div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%,-z_2)]">
<section class='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
<div class=" text-white max-w-3xl mx-auto  mt-7 text-center ">

<h1 class="mb-4 text-3xl font-extrabold text-gray-600 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome</span> Buddy lets make it-</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">So you want password for securing Wi-Fi,for this provide please this below parameter a value:</p>


<div className='flex items-center justify-center text-white mt-5'>

{this.state.minValue && 
<>
<label for="helper-text" class="block text-1xl md:text-1.5xl font-medium text-white dark:text-white">Length of Password{`(>8): `}</label>
<input type='text' value={this.state.long} onChange={(e)=>{
    this.setState({long:e.target.value,replace:false})
    handleChange3(e)
}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ml-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex-5,7,8" autoFocus/>

</>}

{!this.state.minValue &&
<>
<label for="helper-text" class="-mr-8 mb-7 block text-1xl md:text-1.5xl font-medium text-white dark:text-white">Length of Password{`(>8)`} : </label>
<div>
<input type="text" id="error" value={this.state.long} onChange={(e)=>{
    this.setState({long:e.target.value,replace:false})
    handleChange3(e)
}} class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 ml-4  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="ex-5,7,8" autoFocus></input>
<p class="pl-4 mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, god!</span> Please Input value more than 8.</p>
</div>
</>
}

</div>
<p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>



  <button onClick={this.Makeid} class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
      {!this.state.replace && <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Generate
</span>}
{
this.state.replace &&
<> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Replace
</span>
<YourSvg2 class="ml-2 w-4 h-4 me-2" />
</>
}

</button>


<h1 class="text-1xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
 
  <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
  
</h1>
<div className='flex justify-center'>
<h3 className="text-xl font-semibold mt-3 text-center">{`Generated Result -->  `} </h3>

<label className=" ml-4 mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md">
<p className=" stroke-emerald-400 font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double text-1xl">{this.state.Password || "No result yet"}</p>

<button onClick={()=>{
      this.setState({copy1:true})
      setTimeout(() => {this.setState({
      copy1:false})},2000)
      navigator.clipboard.writeText(this.state.Password)}} class="-mb-5 mt-3  text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
  {!this.state.copy1 && <span id="default-message" class="inline-flex items-center">
          <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
              <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
          </svg>
          <span class="text-xs font-semibold">Copy</span>
      </span>}
      
      {this.state.copy1 && <span id="success-message" class="inline-flex items-center">
          <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
          </svg>
          <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
      </span>}
      
  </button>

</label>


</div>



{/* <div className='passwordsize'>
<label>Password size:</label>
<input type='number' onChange={(e) => {
    this.setState({
        long: e.target.value
    })
    }}></input>
</div> */}

      {/* <p className='text-gray-500 dark:text-gray-400'> *if you does not like this password then click on the Change button</p> */}
      
      </div>
      </section>
      <footer id='footer' className=' text-white text-xl'>
                      <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
                      <div className='head'>
                         <h3>*if you does not like current password then you have ability to change by clicking on replace button.</h3>
                              
                           

                          </div>
                      </section>
                  </footer>
      </div> 

      </div>
</>

          
          }
        </div>

        <div className={`content ${this.state.content === 3 ? "fade-in" : "fade-out"}`}>
          {this.state.content === 3 && 
          <>
          <div class="absolute h-full w-full bg-slate-950">
          <div class="absolute bottom-0 left-0 right-0 top-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%,-z_2)]">
          <section class='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
          <div class=" text-white max-w-3xl mx-auto  mt-7 text-center ">
         
<h1 class="mb-4 text-3xl font-extrabold text-gray-600 dark:text-white md:text-5xl lg:text-6xl"><span class="text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400">Welcome</span> Buddy lets make it-</h1>
<p class="text-lg font-normal text-gray-500 lg:text-xl dark:text-gray-400">So you want password for using in fun-related area,for this please provide this below parameter a value:</p>


<div className='flex items-center justify-center text-white mt-5'>
    
{this.state.minValue && 
<>
<label for="helper-text" class="block text-1xl md:text-1.5xl font-medium text-white dark:text-white">Length of Password{`(>8)`} : </label>
<input type='text' value={this.state.long} onChange={(e)=>{
    this.setState({long:e.target.value,replace:false})
    handleChange3(e)
}} id="helper-text" aria-describedby="helper-text-explanation" class="bg-gray-50 border border-gray-300 text-gray-900  text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500  ml-4 p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex-5,7,8" autoFocus/>

</>}

{!this.state.minValue &&
<>
<label for="helper-text" class="-mr-8 mb-7 block text-1xl md:text-1.5xl font-medium text-white dark:text-white">Length of Password{`(>8): `}</label>
<div>
<input type="text" id="error" value={this.state.long} onChange={(e)=>{
    this.setState({long:e.target.value,replace:false})
    handleChange3(e)
}} class="bg-red-50 border border-red-500 text-red-900 placeholder-red-700 text-sm rounded-lg focus:ring-red-500 dark:bg-gray-700 focus:border-red-500 ml-4  p-2.5 dark:text-red-500 dark:placeholder-red-500 dark:border-red-500" placeholder="ex-5,7,8" autoFocus></input>
<p class="pl-4 mt-2 text-sm text-red-600 dark:text-red-500"><span class="font-medium">Oh, god!</span> Please Input value more than 8.</p>
</div>
</>
}


</div>
<p id="helper-text-explanation" class="mt-2 text-sm text-gray-500 dark:text-gray-400">We’ll never share your details. Read our <a href="#" class="font-medium text-blue-600 hover:underline dark:text-blue-500">Privacy Policy</a>.</p>


     
            <button onClick={this.Makeid} class="relative inline-flex items-center justify-center p-0.5 mt-4 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-green-400 to-blue-600 group-hover:from-green-400 group-hover:to-blue-600 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-green-200 dark:focus:ring-green-800">
                {!this.state.replace && <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
Generate
</span>}
{
    this.state.replace &&
    <> <span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
    Replace
    </span>
    <YourSvg2 class="ml-2 w-4 h-4 me-2" />
    </>
}

</button>


<h1 class="text-1xl font-bold text-gray-900 leading-tight mb-2 pb-4 relative">
           
            <span class="absolute bottom-0 left-0 w-full h-1 bg-gradient-to-r from-purple-500 to-pink-500"></span>
            
        </h1>
        <div className='flex justify-center'>
        <h3 className="text-xl font-semibold mt-3 text-center">{`Generated Result -->  `} </h3>
        
        <label className=" ml-4 mt-2 p-2 bg-white border border-gray-300 rounded-lg shadow-md">
        <p className=" stroke-emerald-400 font-semibold text-gray-900 underline dark:text-white decoration-blue-500 decoration-double text-1xl">{this.state.Password || "No result yet"}</p>
       
        <button onClick={()=>{
                this.setState({copy1:true})
                setTimeout(() => {this.setState({
                copy1:false})},2000)
                navigator.clipboard.writeText(this.state.Password)}} class="-mb-5 mt-3  text-gray-900 dark:text-gray-400 hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-600 dark:hover:bg-gray-700 rounded-lg py-2 px-2.5 inline-flex items-center justify-center bg-white border-gray-200 border">
            {!this.state.copy1 && <span id="default-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 18 20">
                        <path d="M16 1h-3.278A1.992 1.992 0 0 0 11 0H7a1.993 1.993 0 0 0-1.722 1H2a2 2 0 0 0-2 2v15a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2Zm-3 14H5a1 1 0 0 1 0-2h8a1 1 0 0 1 0 2Zm0-4H5a1 1 0 0 1 0-2h8a1 1 0 1 1 0 2Zm0-5H5a1 1 0 0 1 0-2h2V2h4v2h2a1 1 0 1 1 0 2Z"/>
                    </svg>
                    <span class="text-xs font-semibold">Copy</span>
                </span>}
                
                {this.state.copy1 && <span id="success-message" class="inline-flex items-center">
                    <svg class="w-3 h-3 text-blue-700 dark:text-blue-500 me-1.5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 12">
                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 5.917 5.724 10.5 15 1.5"/>
                    </svg>
                    <span class="text-xs font-semibold text-blue-700 dark:text-blue-500">Copied</span>   
                </span>}
                
            </button>
       
        </label>
        
      
        </div>
        
    

          {/* <div className='passwordsize'>
          <label>Password size:</label>
          <input type='number' onChange={(e) => {
              this.setState({
                  long: e.target.value
              })
              }}></input>
          </div> */}
         
                {/* <p className='text-gray-500 dark:text-gray-400'> *if you does not like this password then click on the Change button</p> */}
                
                </div>
                </section>
                <footer id='footer' className=' text-white text-xl'>
                                <section className='max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between'>
                                <div className='head'>
                                   <h3>*if you does not like current password then you have ability to change by clicking on replace button.</h3>
                                        
                                     
        
                                    </div>
                                </section>
                            </footer>
                </div> 

                </div>
          </>
          
          }
        </div>



                


                </>
        );
    }

}