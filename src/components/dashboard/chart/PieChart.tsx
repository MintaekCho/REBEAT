import { ResponsivePie } from '@nivo/pie';
import React from 'react';

export default function PieChart({ data }: { data: any }) {
    return (
        <ResponsivePie
            data={data}
            margin={{ top: 20, right: 80, bottom: 110, left: 80 }}
            startAngle={-90}
            endAngle={90}
            innerRadius={0.88}
            cornerRadius={45}
            activeOuterRadiusOffset={8}
            borderColor={{
                from: 'color',
                modifiers: [['darker', 0.2]],
            }}
            enableArcLinkLabels={false}
            arcLinkLabelsSkipAngle={9}
            arcLinkLabelsTextColor="#333333"
            arcLinkLabelsOffset={-2}
            arcLinkLabelsThickness={2}
            arcLinkLabelsColor={{ from: 'color' }}
            enableArcLabels={false}
            arcLabelsRadiusOffset={0.6}
            arcLabelsSkipAngle={7}
            arcLabelsTextColor={{
                from: 'color',
                modifiers: [['darker', 2]],
            }}
            defs={[
                {
                    id: 'dots',
                    type: 'patternDots',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    size: 4,
                    padding: 1,
                    stagger: true,
                },
                {
                    id: 'lines',
                    type: 'patternLines',
                    background: 'inherit',
                    color: 'rgba(255, 255, 255, 0.3)',
                    rotation: -45,
                    lineWidth: 6,
                    spacing: 10,
                },
            ]}
            fill={[

                {
                    match: {
                        id: 'scala',
                    },
                    id: 'lines',
                },

            ]}
            legends={[]}
        />
    );
}
