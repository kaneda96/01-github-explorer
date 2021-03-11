const repositoryName= 'unform2';
import {RepositoryItem} from './RepositoryItem'

const repository ={
    name: 'unform',
    description:'Form in React',
    link: 'https://www.msn.com/pt-br/noticias/brasil/lula-fui-v%C3%ADtima-da-maior-mentira-jur%C3%ADdica-em-500-anos/vi-BB1esqGS?ocid=msedgntp',
}

export function RepositoryList(){
    return(
        <section className="repository-list">
            <h1>Lista de repositórios</h1>

            <ul>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
               <RepositoryItem repository={repository}/>
            </ul>
        </section>
    )
}