import "./Categories.css";
let Cat_list =['Bicycle','calculator','clothing','Lab Coat','Study Table','Electronics' ,'sports','Footwear','Stationary'];



function Categories(props){
    return(
        
        <div className="cat">
            
            
                <span>All Categories</span>
                {
                    Cat_list&&Cat_list.length >0 &&
                    Cat_list.map((item,index)=>{
                        return (
                            <span onClick={()=> props.handleCategory && props.handleCategory(item)} key={index}>{item}</span>
                        );

                    })
                }
            </div>

        
    );
}
export default Categories;