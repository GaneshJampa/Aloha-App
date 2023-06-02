import { Activity, Category, Highlight } from "@/types/types";

export async function getHighlights(): Promise<any> {
    const response = await fetch(`${process.env.API_URL}/v1/highlights`);
    const data: Highlight[] = await response.json();
    return data;
}

export async function getCategories(): Promise<any> {
    const response = await fetch(`${process.env.API_URL}/v1/categories`);
    const data: Category[] = await response.json();
    return data;
}

export async function getActivities(activity: string): Promise<any> {
    const response = await fetch(`${process.env.API_URL}/v1/activities/${activity}`);
    const data: Activity = await response.json();
    return data;
}
