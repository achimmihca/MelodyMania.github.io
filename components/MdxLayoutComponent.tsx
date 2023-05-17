// @ts-ignore
const MdxLayoutComponent: any = ({ children }) =>
{
    return (
        <div className="mdx-content">
            <div className="section">
                <div className="container">
                    <div className="row justify-content-center">
                        <div className="col-lg-6">
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MdxLayoutComponent;