import React from 'react'

const QuickInfo = () => {
    return (
        <div className='pl-6 '>
            <h2 >Quick Info</h2>

            <table className="table-auto border border-slate-500">
                <thead>
                    <tr>
                        <th className='text-center'>Quick Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">Indiana</td>
                        <td className="border border-slate-700">Indianapolis</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Ohio</td>
                        <td className="border border-slate-700">Columbus</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Michigan</td>
                        <td className="border border-slate-700">Detroit</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuickInfo

{/* <table className='table-auto'>
                <thead>
                    <tr>
                        <th colspan="2">Quick Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr><th scope="row">Name</th><td>Benson P Xavier</td></tr>
                    <tr><th scope="row">Born</th><td><time datetime="1998-01-01 08:50">1 January, 1998</time></td></tr>
                    <tr><th scope="row">Education</th><td>B.Tech</td></tr>
                    <tr><th scope="row">Alma mater</th><td>National Institute Of Technology, Raipur</td></tr>
                    <tr><th scope="row">Nationality</th><td>Indian</td></tr>
                    <tr><th scope="row">Occupation</th><td>Software Developer</td></tr>
                </tbody>
            </table> */}