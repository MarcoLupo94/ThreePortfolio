import { CoolLink } from "@/components/atoms/CoolLink"

export default function Error() {
  return   <>
            <span className="background back-1"></span>
            <span className="background back-2"></span>
            <div
                style={{
                    height: '100%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    flexDirection: 'column'
                }}
            >
                <h1> 404 Page Not Found :(</h1>
                <CoolLink
                    routerLinkx
                    link={"/"}
                    text={'Back To Home Page :)'}
                />
            </div>
        </>
}
