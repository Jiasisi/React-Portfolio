import React from 'react';

export default function Card(props) {
    return(
        <div class='container'>
            <div class='card '>
                <img class='card-img-top' src={props.image} alt='Card1'></img>
                <div class='card-body'>
                    <h5 class='card-title'>{props.name}</h5>
                    <a class='card-text' href={props.link}>Deployed Link</a>
                    
                    <a class='card-text' href={props.repo}><small class="text-muted">GitHub repository</small></a>

                </div>
            </div>

        </div>
    )
}