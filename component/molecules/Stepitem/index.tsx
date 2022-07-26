interface StepItemProps{
    icon : 'step1' | 'step2' | 'step3';
    Judul ? : string;
    desc1 ? : string;
    desc2 ? : string;
}
export default function StepItems( props : StepItemProps) {
    const {icon,Judul,desc1,desc2} = props;
  return (
            <div className="col-lg-4">
                <div className="card feature-card border-0">
                    <img src={`/icon/${icon}.svg`} alt='step 1' className="mb-30" width={80} height={80}/>
                <p className="fw-semibold text-2xl mb-2 color-palette-1">{Judul}</p>
                <p className="text-lg color-palette-1 mb-0">{desc1}<br/>
                            {desc2}</p>
                </div>
            </div>
  )
}
