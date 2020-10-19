document.addEventListener("DOMContentLoaded", function (e) {
    var page_number =1;
    var next_btn= document.querySelector('.tab .buttons #next_btn');
    var prev_btn= document.querySelector('.tab .buttons #prev_btn');
    var pages = document.querySelectorAll('#registration-form .tab-body li')
    var headings= document.querySelectorAll('#registration-form .tab-header li')



    pages[0].classList.add('active')
    headings[0].classList.add('active')
    prev_btn.style.display="none"


    next_btn.addEventListener('click',(e)=>go_to_page(++page_number))

    prev_btn.addEventListener('click',(e)=>go_to_page(--page_number))
    
    //form event listeners
    document.getElementById('education_level').addEventListener('change',function (event) {
        var value=event.target.value;
        var education =document.getElementById('other_education_level');
        if(value==="other"){
            education.disabled=false;
        }else{
            education.value="";                        
            education.disabled=true;            
        }
    })



    //Creating tabbed menu 
    headings.forEach((heading ,index)=>{
        heading.addEventListener('click',(e)=>{
           page_number=index+1
           go_to_page(page_number)
        })
    })



    function go_to_page(page){
        headings.forEach(function (heading) {
            heading.classList.remove('active')     
        })
        pages.forEach(function (page) {
            page.classList.remove('active')     
        })
        if(page>1){
            prev_btn.style.display="inline-block";
        }else{
            prev_btn.style.display="none";
        }
        try {
            headings[page-1].classList.add('active')
            pages[page-1].classList.add('active')
        } catch (error) {
            console.log("error resolved")
        }
    }


});