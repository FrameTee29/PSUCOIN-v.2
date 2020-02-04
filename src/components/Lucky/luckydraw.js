import styled from 'styled-components';
import Link from 'next/link';
const Container = styled.div`
    display:flex;
    width:1300px;
    height:800px;
    background: linear-gradient(to top,#532576, #181433);
    flex-direction:column;
    justify-content:space-around;
    align-items: center;
    border-radius: 10px;
    font-family:'Roboto-Black';

    .ContainerHead{
        display:flex;
        width:1100px;
        height:180px;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        color:white;
        font-size:50px;
        background: linear-gradient(to top,purple, #532576);
        border-radius:20px;
    }
    .BoxCoin{
           font-size:25px ;
    }
    .AmountCoin{
        font-size:40px;
        color:#e830e2
    }
    .ResultNumber{
        display:flex;
        width:1100px;
        height:300px;
        justify-content:space-around;
        align-items: center;
        border-radius:20px;
        background: linear-gradient(to bottom,purple, purple);
        font-family:'Kanit-Bold';
    }
    .GuessNumber{
        display:flex;
        width:1100px;
        height:200px;
        border-radius:20px;
        flex-direction:column;
        background: linear-gradient(to bottom,purple, #532576);
        justify-content:space-evenly;
        align-items: center;
        
    }
    .infoNumber3{
        display:flex;
        width:250px;
        height:200px;
        background: linear-gradient(to bottom, #ff005d ,#ff005d);
        border-radius:20px;
        border-color:#1b1536;
        border-style: solid;
        border-width: 3px;
        color:white;
        flex-direction:column;
        justify-content:center;
        align-items: center;
    }
    .infoNumber2{
        display:flex;
        width:250px;
        height:200px;
        background: linear-gradient(to bottom, #ff0000 ,#ff0000);
        border-radius:20px;
        border-color:#1b1536;
        border-style: solid;
        border-width: 3px;
        color:white;
        flex-direction:column;
        justify-content:center;
        align-items: center;
        
    }
    .BoxNumber3{
        display:flex;
        justify-content:space-around;
        width:825px;
        
    }
    .BoxNumber2{
        display:flex;
        justify-content:space-around;

    }
    .twoNumber{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        width:270px;
        height:280px;
        font-size:30px;
        color:white;
        align-items: center;

    }
    .threeNumber{
        display:flex;
        flex-direction:column;
        justify-content:space-around;
        width:820px;
        height:280px;
        font-size:30px;
        color:white;
        align-items: center;

    }
    .inputNumber{
        text-align:center;
        width:200px;
        height:50px;
        font-size:50px;
    }
    .btn2{
        width:200px;

    }
`
const Luckydraw = () => {
    return (
        <Container>
            <div className="ContainerHead">
                PSU COIN
                <div className="BoxCoin">
                    <span className="AmountCoin" >1,000 </span><span>PSU COIN</span>
                </div>
            </div>
            <div className="ResultNumber">
                <div className="threeNumber">
                    <div>เลข 3 ตัว</div>
                    <div className="BoxNumber3">
                        <div className="infoNumber3">
                            <div>
                                รางวัลที่ 1
                            </div>
                            <div>
                                089
                            </div>
                        </div>
                        <div className="infoNumber3">
                            <div>
                                รางวัลที่ 2
                            </div>
                            <div>
                                470
                            </div>
                        </div>
                        <div className="infoNumber3">
                            <div>
                                รางวัลที่ 3
                            </div>
                            <div>
                                694
                            </div>
                        </div>
                    </div>
                </div>
                <div className="twoNumber">
                    <div>เลข 2 ตัว</div>
                    <div className="BoxNumber2">
                        <div className="infoNumber2">
                        <div>
                                รางวัลที่ 3
                            </div>
                            <div>
                                45
                            </div>
                        </div>
                    </div>
                </div>




            </div>
            <div className="GuessNumber">

                    <input className="inputNumber" type="text" />
                    <button  type="button" class="btn btn-danger btn2">Confirm</button>

            </div>



        </Container>
    )
}

export default Luckydraw;