import { BiDotsVerticalRounded } from 'react-icons/bi'


export const headCells = [
    {
        id: 'Incident',
        numeric: false,
        disablePadding: true,
        label: 'Incident',
    },
    {
        id: 'Description',
        numeric: false,
        disablePadding: false,
        label: 'Description',
    },
    {
        id: 'Priority',
        numeric: true,
        disablePadding: false,
        label: 'Priority',
    },
    {
        id: 'Severity',
        numeric: true,
        disablePadding: false,
        label: 'Severity',
    },
    {
        id: 'Consulting_Client',
        numeric: true,
        disablePadding: false,
        label: 'Consulting Client',
    },
    {
        id: 'Assigned_to',
        numeric: true,
        disablePadding: false,
        label: 'Assigned to',
    },
    {
        id: 'SLA_End_time',
        numeric: true,
        disablePadding: false,
        label: 'SLA End Time',
    },
    {
        id: 'Status',
        numeric: true,
        disablePadding: false,
        label: 'Status',
    },
    {
        id: 'Attachments',
        numeric: true,
        disablePadding: false,
        label: 'Attachments',
    },
];

function createData(Incident, Description, Priority, Severity, Consulting_Client, Assigned_to, SLA_EndTime, Status, Attachments) {
    return {
        Incident,
        Description,
        Priority,
        Severity,
        Consulting_Client,
        Assigned_to,
        SLA_EndTime,
        Status,
        Attachments
    };
}

export const rows = [
    createData('INC221-1', 'Lorem ipsum dolor set amet', 1, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
    createData('INC221-2', 'Lorem ipsum dolor set amet', 2, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
    createData('INC221-3', 'Lorem ipsum dolor set amet', 3, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
    createData('INC221-4', 'Lorem ipsum dolor set amet', 4, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
    createData('INC221-5', 'Lorem ipsum dolor set amet', 5, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved'),
    createData('INC221-6', 'Lorem ipsum dolor set amet', 6, 'High', 'Consulting Firm', 'Maria Roselia', 'June 28,2022 14:00', 'Resolved')
];