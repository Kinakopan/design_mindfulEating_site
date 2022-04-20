import styled from 'styled-components';

const StyledTofuBox = styled.div`
background-color:${props=>props.color}; 
color:${props=>props.text_color};
`;

export default function TofuBox(){
  return <div>
    <div>
      <h2>Tofu</h2>
      <p>Tofu is an excellent source of protein in fact, it is a rare vegan choice that is a complete source of protein, which means it contains all nine amino acids</p>
    </div>

    <div>
      <img src="" />
    </div>

    <div>
      <p>Get the fresh tofu at your local market</p>
      <button src=""></button>
    </div>

  </div>
}