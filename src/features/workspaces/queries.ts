import { Query } from "node-appwrite";
import { DATABASE_ID, MEMBERS_ID, WORKSPACES_ID } from "@/config";
import { createSessionClient } from "@/lib/appwrite";
import { Workspace } from "./types";


export const getWorkspaces = async () => {
        const { databases, account } = await createSessionClient();

        const user = await account.get();

        const members = await databases.listDocuments(
            DATABASE_ID,
            MEMBERS_ID,
            [
                Query.equal("userId", user.$id)
            ]
        );

        if(members.total === 0){
            return  { documents: [], total:0 }
        }

        const workspaceIds = members.documents.map((member) => member.workspaceId);
        
        const workspaces = await databases.listDocuments<Workspace>(
            DATABASE_ID,
            WORKSPACES_ID,
            [
                Query.orderDesc("$createdAt"),
                Query.contains("$id", workspaceIds)
            ],
        );

        return workspaces;
}

interface GetWorkspaceProps {
    workspaceId: string;
}

export const getWorkspace = async ({ workspaceId }: GetWorkspaceProps) => {
    const { databases, account } = await createSessionClient();

    const user = await account.get();

    const member = await databases.listDocuments(
        DATABASE_ID,
        MEMBERS_ID,
        [
            Query.equal("userId", user.$id),
            Query.equal("workspaceId", workspaceId)
        ]
    );

    if (member.total === 0) {
        throw new Error("Unauthorized");
    }

    const workspace = await databases.getDocument<Workspace>(
        DATABASE_ID,
        WORKSPACES_ID,
        workspaceId
    );

    return workspace;
}
