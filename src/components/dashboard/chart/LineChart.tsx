import React from 'react';
import { ResponsiveLine } from '@nivo/line'

export default function LineChart({data}: {data: any[]}) {
    console.log(data);
    return (
        <ResponsiveLine
            data={data}
            margin={{ top: 50, right: 110, bottom: 80, left: 60 }}
            xScale={{ type: 'linear' }}
            yScale={{
                type: 'linear',
                min: 'auto',
                max: 'auto',
                stacked: true,
                reverse: false,
            }}
            yFormat=" >-.2f"
            axisTop={null}
            axisRight={null}
            axisBottom={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'transportation',
                legendOffset: 36,
                legendPosition: 'middle',
                truncateTickAt: 0,
            }}
            axisLeft={{
                tickSize: 5,
                tickPadding: 5,
                tickRotation: 0,
                legend: 'count',
                legendOffset: -40,
                legendPosition: 'middle',
                truncateTickAt: 0,
            }}
            enableGridY={false}
            lineWidth={6}
            pointSize={10}
            pointColor={{ theme: 'background' }}
            pointBorderWidth={2}
            pointBorderColor={{ from: 'serieColor' }}
            pointLabelYOffset={-6}
            enableTouchCrosshair={true}
            useMesh={true}
            legends={[]}
        />
    );
}
