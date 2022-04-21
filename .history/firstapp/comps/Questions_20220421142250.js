import styled from 'styled-components';


const Cont = styled.form`
  background-color: #E0E8FD;
  border-radius: 20px;
  box-shadow: #A2B0D3 5px 5px 1px;
  padding: 2em;
  margin: 2em;
`;

// const Question = styled.input`
//   border-radius: 20%;
//   appearance: none;
//   transition: 0.2s all linear;
//   color: #EF7F63

// `;

const Button = styled.button`
  background-color: #ef7f63;
  border: none;
  border-radius: 20%;
  color: white;
  padding: 0 1em 0 1em;


`;

export default function Questions({
  txt="", txt2="", txt3="",
  id="", id2="", id3="",
  
  
}){

  return <Cont>
    <div>
    <input type="radio" id={id} name="radio button" value={txt}/>
    <label for={id}>{txt}</label>
    </div>
    
  
    <br/>

    <div>
    <input type="radio" id={id2} name="radio button" value={txt2}/>
    <label for={id2}>{txt2}</label>
    </div>

    <br/>
    
    <div>
    <input type="radio" id={id3} name="radio button" value={txt3}/>
    <label for={id3}>{txt3}</label>
    </div>

    <Button type='submit'>Go</Button>

  
  </Cont>
}