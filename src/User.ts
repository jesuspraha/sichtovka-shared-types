export type UserRole = "User" | "Accountant" | "Manager" | "Admin";

export type User = {
    id: number;
    username: string;
    full_name?: string | null;
    is_active: boolean;
    email?: string | null;

    created_at?: string | null; // ISO datetime
    updated_at?: string | null; // ISO datetime

    sazbah?: number | null;
    sazbakm?: number | null;
    procentomat?: number | null;
    nakladyh?: number | null;
    procentozisk?: number | null;

    deleted: boolean;
    vozidla_id?: number | null;

    role: UserRole;
};
