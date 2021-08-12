import Head from 'next/head'
import AppsIcon from "@material-ui/icons/Apps"
import IconButton from '@material-ui/core/IconButton';
import Tooltip from '@material-ui/core/Tooltip';
import Search from "../components/Search";


export default function Home() {
  return (
    <div className="flex flex-col justify-between min-h-screen">
      <Head>
        <title>Google | Clone</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className="font-sans flex flex-col">
        <div className="flex justify-end px-4 py-2 items-center min-w-13 mb-14">
            <div className="flex items-center justify-between">
                <a className="text-black text-opacity-87 pr-3 text-sm hover:underline" href="#">
                    Gmail
                </a>
                <a className="text-black text-opacity-87 pr-5 text-sm hover:underline" href="#">
                    Images
                </a>
                <div className="pr-2">
                    <Tooltip title="Google apps" placement="bottom">
                        <IconButton aria-label="Google apps" size="medium">
                            <AppsIcon fontSize="medium"/>
                        </IconButton>
                    </Tooltip>
                </div>
                <button className="rounded text-white bg-buttonPrimary px-6 py-2 text-sm font-medium hover:bg-buttonSecondary hover:shadow-buttonShadow">Sign in</button>
            </div>

        </div>
        <Search/>
      </main>

      <footer className="flex flex-col bg-gray-100 items-center justify-center w-full text-sm">
          <div className="flex items-center justify-start pl-8 border-b border-gray-200 w-full h-12">
              <p className="text-gray-500">Nigeria</p>
          </div>
          <div className="flex items-center flex-col md:flex-row md:justify-between px-10 w-full md:h-12 flex-wrap">
              <div className="flex items-center gap-8 mb-4 md:m-0 mt-4">
                  <p className="text-gray-500"><a href="#" className="hover:underline">About</a></p>
                  <p className="text-gray-500"><a href="#" className="hover:underline">Advertising</a></p>
                  <p className="text-gray-500"><a href="#" className="hover:underline">Business</a></p>
                  <p className="text-gray-500 hidden md:block"><a href="#" className="hover:underline">How Search works</a></p>
              </div>
              <div className="flex items-center gap-8 md:m-0 mb-4">
                  <p className="text-gray-500"><a href="#" className="hover:underline">Privacy</a></p>
                  <p className="text-gray-500"><a href="#" className="hover:underline">Terms</a></p>
                  <p className="text-gray-500"><a href="#" className="hover:underline">Settings</a></p>
              </div>
          </div>
      </footer>
    </div>
  )
}
