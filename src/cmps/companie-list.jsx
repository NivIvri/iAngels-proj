import React from 'react'
import { CompaniePreview } from './companie-preview'


export function CompanieList({ companies }) {
    return (<>
        {companies.map((companie, idx) => {
                return<tr key={companie._id}><CompaniePreview key={companie._id} companie={companie} idx={idx} />
            </tr>
        }
        )}
    </>
    )
}

