import styled from 'styled-components';


const Cont = styled.div`
  background-color: #E0E8FD;
  border-radius: 20px;
  box-shadow: #A2B0D3 1.95px 1.95px 2.6px;
  padding: 1em
`;

const Question = styled.input`
  border-radius: 20%;
  appearance: none;
  transition: 0.2s all linear;
  color: #EF7F63

`;

export default function Questions(
  txt="",
  id="",
  btName="",
){

  return <Cont>
    <Question type="radio" id={id} name={btName} value={txt}></Question>
    <label for={id}></label>
  </Cont>
}