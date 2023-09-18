import { LineChart as LChart, Line, XAxis, YAxis } from 'recharts';

const LineChart = () => {

    const studentData = [
        { id: 1, name: 'Alice', math: 85, physics: 75, chemistry: 88 },
        { id: 2, name: 'Bob', math: 78, physics: 82, chemistry: 90 },
        { id: 3, name: 'Charlie', math: 92, physics: 88, chemistry: 78 },
        { id: 4, name: 'David', math: 88, physics: 79, chemistry: 85 },
        { id: 5, name: 'Eva', math: 76, physics: 91, chemistry: 72 },
        { id: 6, name: 'Frank', math: 95, physics: 87, chemistry: 91 },
        { id: 7, name: 'Grace', math: 82, physics: 78, chemistry: 89 },
        { id: 8, name: 'Helen', math: 89, physics: 92, chemistry: 84 },
        { id: 9, name: 'Ivy', math: 91, physics: 86, chemistry: 93 },
        { id: 10, name: 'Jack', math: 87, physics: 90, chemistry: 80 },
      ];      
      

    return (
        <div>
            <LChart width={800} height={400} data={studentData}>
                <XAxis dataKey="name"/>
                <YAxis/>
                <Line dataKey="math" stroke="red"></Line>
                <Line dataKey="physics" stroke='yellow'></Line>
                <Line dataKey="chemistry"></Line>
            </LChart>
        </div>
        
    );
    
};

export default LineChart;