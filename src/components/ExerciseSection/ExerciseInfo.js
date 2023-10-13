import Card from '../Card';
import {getExerciseData} from '../../services/exerciseData';
import SectionTitle from '../SectionTitle';
import ExerciseLabel from './ExerciseLabel';

const ExerciseInfo = () => {
    const exercises = getExerciseData();
    return (
        <Card width="20vw" height="30vh">
        <SectionTitle>Exercício</SectionTitle>
            {exercises.map(exercise => (
                <div key={exercise.name}>
                    <ExerciseLabel exerciseName={exercise.name} />
                    <p>{exercise.description}</p>
                </div>
            ))}
        </Card>
    );
};

export default ExerciseInfo;
