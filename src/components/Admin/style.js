import styled from "styled-components";


export const Container = styled.header`
background: var(--amarelo);
box-shadow: 0px 0px 15px -5px;
height: 9.5rem;


#pikachu{
    img{
        width: 9.5rem;
        position: absolute;
   left: 5rem;
   top:0.2rem;
    }
}
#longin{
   position: absolute;
   right: 5rem;
   top:3.5rem;
   list-style:none;
    display: inline-block;
    img{
    height: 3rem;
 
    }
    a{
    text-align: center;
    padding-bottom: 1rem;
    color: white;
    font-weight:bold;
    font-size: 1.0rem;
    text-decoration: none;
    transition: filter 0.2;
    text-decoration: none;
}}


`
export const Content = styled.nav`

max-width: 1120px;
margin: 0 auto;
justify-content: space-between;
text-align: center;



`
export const TextoNav = styled.div`
    
text-align: center;



li{
    list-style:none;
    display: inline-block;
    
}

a{
    
    text-align: center;
    padding: 1.8rem;
    color: white;
    font-weight:bold;
    font-size: 1.3rem;
    text-decoration: none;
    transition: filter 0.2;
    
    
}
a:hover{
    filter: brightness(0.9);
}

#nova{
    text-align: initial;
}




`
export const BntInput = styled.div`
button{

}
input{}

`