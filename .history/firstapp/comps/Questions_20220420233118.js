import styled from 'styled-components';


const Cont = styled.form`
  background-color: #E0E8FD;
  border-radius: 20px;
  box-shadow: #A2B0D3 5px 5px 1px;
  padding: 1em;
  margin: 2em;
`;

// const Question = styled.input`
//   border-radius: 20%;
//   appearance: none;
//   transition: 0.2s all linear;
//   color: #EF7F63

// `;

export default function Questions({
  txt="", 
  id=""
  

}){

  return <Cont>
    
    <label for={id}><input type="radio" id={id} name="radio button" value={txt}/>{txt}</label>

    {/* <input type="radio" id={id2} name={btName} value={txt2}/>
    <label for={id2}>{txt2}</label>

    <input type="radio" id={id3} name={btName} value={txt3}/>
    <label for={id3}>{txt3}</label> */}
  </Cont>
}