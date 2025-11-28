import React from 'react';
import { MugenLogo } from './MugenLogo';

export const MugenTextLogo = () => (
    <div className="flex flex-col items-start leading-none">
        <div className="flex items-center gap-2">
            <MugenLogo className="h-12 w-12 bg-purple-50" />
            <div className="flex flex-col">
                <span className="font-bold text-2xl tracking-widest text-white uppercase font-mono">Mugen Media</span>
                <span className="text-red-600 text-[10px] font-bold tracking-[0.3em] uppercase">Be Seen. Be Chosen.</span>
            </div>
        </div>
    </div>
);
