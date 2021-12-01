import styled from "styled-components";

export const Container = styled.header`
background: var(--amarelo);

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