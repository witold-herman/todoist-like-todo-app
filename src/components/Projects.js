import React, {useState} from 'react';
import {useProjectsValue, useSelectedProjectValue} from "../context";
import {IndyvidualProject} from "./IndyvidualProject";

export const Projects = ({activeValue = null}) => {
    const [active, setActive] = useState(activeValue);
    const {setSelectedProject} = useSelectedProjectValue();
    const {projects} = useProjectsValue();

    return (
        projects && projects.map(project => (
            <li
                key={project.projectId}
                data-testid='project-action'
                className={active === project.projectId
                    ? 'active sidebar__project'
                    : 'sidebar__project'}
                onClick={() => {
                    setActive(project.projectId);
                    setSelectedProject(project.projectId);
                }}
            >
                <IndyvidualProject project={project}/>
            </li>
        ))
    )
};
