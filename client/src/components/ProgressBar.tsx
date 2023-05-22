import Progress from '@ramonak/react-progress-bar';

function ProgressBar(props: { progress: number }) {
    return (
        <Progress
            completed={props.progress}
            borderRadius="2px"
            labelSize="12px"
            width="100px"
            bgColor="#000091"
        />
    );
}

export { ProgressBar };
