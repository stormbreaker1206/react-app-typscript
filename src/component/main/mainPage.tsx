import React from 'react';
import './main.css'

export interface MessageProps {
    welcome: string;

};

export function Message({welcome}: MessageProps) {

    return (
        <div className="App">
            <header className="App-header">

                <p>
                    {welcome}
                </p>

            </header>
        </div>
    );

}