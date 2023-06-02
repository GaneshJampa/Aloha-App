import { Activity, Category, Highlight } from "@/types/types";

export async function getHighlights(): Promise<any> {
    try {
        const response = await fetch(`${process.env.API_URL}/v1/highlights`);
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data: Highlight[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error retrieving highlights:', error);
        throw error;
    }
}

export async function getCategories(): Promise<any> {
    try {
        const response = await fetch(`${process.env.API_URL}/v1/categories`);
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data: Category[] = await response.json();
        return data;
    } catch (error) {
        console.error('Error retrieving highlights:', error);
        throw error;
    }
}

export async function getActivities(activity: string): Promise<any> {
    try {
        const response = await fetch(`${process.env.API_URL}/v1/activities/${activity}`);
        if (!response.ok) {
            throw new Error(`Something went wrong`);
        }
        const data: Activity = await response.json();
        return data;
    } catch (error) {
        console.error('Error retrieving highlights:', error);
        throw error;
    }
}
