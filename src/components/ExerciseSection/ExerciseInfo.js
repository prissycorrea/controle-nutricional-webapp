import Card from '../Card';
import {getExerciseData} from '../../services/exerciseData';
import SectionTitle from '../SectionTitle';

const ExerciseInfo = () => {
    const exercise = getExerciseData();
    return (
        <Card width="20vw" height="30vh">
        <SectionTitle>Exercício</SectionTitle>
            <h2>{exercise.name}</h2>
            <p>{exercise.description}</p>
        </Card>
    );
};

export default ExerciseInfo;