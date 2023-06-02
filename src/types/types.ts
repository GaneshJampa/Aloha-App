export interface Highlight {
    title:       string;
    description: string;
    image:       string;
}

export interface Category {
    name:       string;
    activities: [
        {
            title: string
        }
    ]
}

export interface Activity {
    name: string;
    description: string;
    image: string;
    activities: [
        {
            name: string;
        }
    ];
}