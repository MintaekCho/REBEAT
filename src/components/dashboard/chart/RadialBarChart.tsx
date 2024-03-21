import { ResponsiveRadialBar } from '@nivo/radial-bar';

export default function RadialBarChart({ data }: { data: any }) {
    return (
        <ResponsiveRadialBar
            data={data}
            maxValue={100}
            endAngle={360}
            innerRadius={0.15}
            padding={0.2}
            cornerRadius={45}
            margin={{ top: 20, right: 250, bottom: 60, left: 20 }}
            colors={{ scheme: 'pastel1' }}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 1]],
            }}
            enableTracks={false}
            enableRadialGrid={false}
            enableCircularGrid={false}
            radialAxisStart={null}
            circularAxisOuter={null}
            labelsTextColor={{ theme: 'labels.text.fill' }}
            legends={[]}
        />
    );
}
