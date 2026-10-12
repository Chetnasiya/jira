import { getCurrent } from "@/features/auth/queries"
import { EditWorkspaceForm } from "@/features/workspaces/components/edit-workspace-form";
import { getWorkspace } from "@/features/workspaces/queries";
import { redirect } from "next/navigation";



const WorkspaceIdPage = async ({ params }: { params: { workspaceId: string } }) => {
    const user = await getCurrent();
    if(!user) redirect("/sign-in")
        
    const initialValues = await getWorkspace({ workspaceId: params.workspaceId })
    
    return (
        <div>
            <EditWorkspaceForm initialValues={initialValues} />
        </div>
    )
}

export default WorkspaceIdPage