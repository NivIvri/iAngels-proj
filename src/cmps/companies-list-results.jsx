import React from 'react'
import { CompaniePreviewResult } from './companie-preview-results'


export function CompaniesList({addNewCompanie, companies }) {
    return (<div className='list-results'>
        {companies.map((companie, idx) => {
            return <CompaniePreviewResult addNewCompanie={addNewCompanie}key={idx} companie={companie} idx={idx} />
        }
        )}
    </div>
    )
}
