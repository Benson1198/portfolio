import React from 'react'

const QuickInfo = () => {
    return (
        <div>
            <h2 >Quick Info</h2>

            <table className="table-auto border border-slate-500">
                <thead>
                    <tr>
                        <th className='text-center'>Quick Info</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className="border border-slate-700">Name</td>
                        <td className="border border-slate-700">Benson P Xavier</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Born</td>
                        <td className="border border-slate-700">1st Jan, 1998</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Education</td>
                        <td className="border border-slate-700">B.Tech</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Alma mater</td>
                        <td className="border border-slate-700">National Institute Of Technology, Raipur</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Nationality</td>
                        <td className="border border-slate-700">Indian</td>
                    </tr>
                    <tr>
                        <td className="border border-slate-700">Occupation</td>
                        <td className="border border-slate-700">Software Developer</td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}

export default QuickInfo