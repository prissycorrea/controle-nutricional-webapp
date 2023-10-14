import Card from '../Card';
import {getExerciseData} from '../../services/exerciseData';
import SectionTitle from '../SectionTitle';
import ExerciseLabel from './ExerciseLabel';
import styled from '@emotion/styled';
import MoreButton from './MoreButton';
import InsertButton from '../InsertButton';

const ExerciseContainer = styled.div`
    align-items: space-around;
    display: flex;
    height: 100%;
    justify-content: space-between;
    margin-top: 25px;
    width: 80%;
`;

const ExerciseInfo = () => {
    const exercises = getExerciseData().slice(0, 2);
    return (
        <Card width="20vw" height="30vh">
        <SectionTitle>Exercício</SectionTitle>
        <ExerciseContainer>
            {exercises.map(exercise => (
                    <div key={exercise.name}>
                        <ExerciseLabel 
                            exerciseName={exercise.name} 
                            completedDuration={exercise.completedDuration} 
                            plannedDuration={exercise.plannedDuration} 
                        />
                    </div>
                ))}
            <MoreButton />
        </ExerciseContainer>
        <InsertButton>Inserir exercício</InsertButton>
        </Card>
    );
};

export default ExerciseInfo;
