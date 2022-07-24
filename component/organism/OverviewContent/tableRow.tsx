import Cx from 'classnames';
interface TableRowProps{
    title ? : string;
    Categori ? : string;
    Item ? : number;
    Price ? : number;
    Status ? : string;
    Photo : 'overview-1' | 'overview-2' | 'overview-3' | 'overview-4' ;
}
export default function TableRow(props : TableRowProps) {
    const {title,Categori,Item,Price,Status,Photo} = props;
    const ClassStatus = Cx({
        "float-start icon-status" : true,
        'pending' : Status === 'Pending',
        'success' : Status === 'Success',
        'failed' : Status === 'Failed',
    })
  return (
              <tr className="align-middle">
                    <th scope="row">
                        <img className="float-start me-3 mb-lg-0 mb-3" src={`/img/${Photo}.png`}
                           width={80} height={60} alt=""/>
                        <div className="game-title-header">
                            <p className="game-title fw-medium text-start color-palette-1 m-0">{title}</p>
                            <p className="text-xs fw-normal text-start color-palette-2 m-0">{Categori}</p>
                         </div>
                    </th>
                    <td>
                      <p className="fw-medium color-palette-1 m-0">{Item} Gold</p>
                    </td>
                    <td>
                      <p className="fw-medium text-start color-palette-1 m-0">{Price}</p>
                    </td>
                    <td>
                    <div>
                         <span className={ClassStatus}></span>
                         <p className="fw-medium text-start color-palette-1 m-0 position-relative">
                            {Status}</p>
                         </div>
                    </td>
                </tr>
  )
}
