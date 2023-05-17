import BackToHomeNavigationSection from "./BackToHomeNavigationSection";

// @ts-ignore
const MdxLayoutComponent: any = ({ children }) =>
{
    return (
        <>
            <BackToHomeNavigationSection title={ `Melody Mania` }/>
            <div className="mdx-content navbar-padding-top">
                <div className="section px-5">
                    <div className="container">
                        <div className="row justify-content-center">
                            <div className="col-lg-6">
                                {children}
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MdxLayoutComponent;