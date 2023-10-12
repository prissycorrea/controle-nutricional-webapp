import DateToday from './DateToday';
import Card from '../Card';
import ProgressBar from './ProgressBar';
import { getDietInfo } from '../../services/dietData';
import {ReactComponent as CalendarIcon} from '../../images/icons/calendar-icon.svg';
import InsertButton from '../InsertButton';
import styled from '@emotion/styled';

const ConsumeInfoContainer = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    gap: 20px;
    width: 100%;
`;

const DateContainer = styled.div`
    display: flex;

    justify-content: space-between;
    flex-direction: column;
    width: 40%;
`;

const DateButtonContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    gap: 20px;
`;

const DateConsumeContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
`;

const ProgressContainer = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    width: 40%;
`;

const ProgressTitle = styled.span`
    color: #EFEEEE;
    font-weight: 500;
    font-size: 1.1em;
    margin-bottom: 5px;
    margin-top: 20px;
`;

function ConsumeInfo() {
    const diet = getDietInfo();
    return (
        <Card width="70vw" height="35vh">
            <ConsumeInfoContainer>
                <DateContainer>
                    <DateButtonContainer>
                        <DateToday icon={<CalendarIcon />} />
                        <InsertButton>Inserir refeição</InsertButton>
                    </DateButtonContainer>
                    <DateConsumeContainer>
                        <ProgressTitle>Calorias</ProgressTitle>
                        <ProgressBar consumed={diet.consumedCalories} total={diet.totalCalories} height="50px"/>
                    </DateConsumeContainer>
                </DateContainer>
                <ProgressContainer>
                    <ProgressTitle>Carboidratos</ProgressTitle>
                    <ProgressBar consumed={diet.consumedCarbohydrates} total={diet.totalCarbohydrates} />
                    <ProgressTitle>Proteínas</ProgressTitle>
                    <ProgressBar consumed={diet.consumedProteins} total={diet.totalProteins} />
                    <ProgressTitle>Gorduras</ProgressTitle>
                    <ProgressBar consumed={diet.consumedFats} total={diet.totalFats} />
                    <ProgressTitle>Fibras</ProgressTitle>
                    <ProgressBar consumed={diet.consumedFibers} total={diet.totalFibers} />
                </ProgressContainer>
            </ConsumeInfoContainer>
        </Card>
    );
}

export default ConsumeInfo;

