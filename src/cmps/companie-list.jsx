import React from 'react'
import { CompaniePreview } from './companie-preview'


export function CompanieList({ companies }) {
    return (<>
        {companies.map((companie, idx) => {
                return<tr> <CompaniePreview key={idx} companie={companie} idx={idx} />
            </tr>
        }
        )}
    </>
    )
}

