const Index = () => {
    return (
        <div className="max-w-7xl mx-auto p-4 sm:p-6 lg:p-8">
            <header className="shadow-md rounded-lg p-6 mb-4 bg-[#15181D] flex flex-col justify-center items-center">
                <img src="https://raw.githubusercontent.com/SAWARATSUKI/KawaiiLogos/refs/heads/main/React/React.png"
                    className="w-40" />
                <h1 className="text-3xl font-bold text-center text-secondary mt-4">React.js on GitHub Pages</h1>
            </header>
            <main className="space-y-5">
                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 text-secondary">CLONE REPOSITORY</h2>
                    <ol className="list-decimal pl-6 text-white mb-4">
                        <li><code className="bg-[#1C232B] px-1 rounded">git clone https://github.com/RevanSP/REACT-GHPAGES-EXAMPLE.git</code></li>
                        <li><code className="bg-[#1C232B] px-1 rounded">cd REACT-GHPAGES-EXAMPLE</code></li>
                        <li><code className="bg-[#1C232B] px-1 rounded">npm install</code></li>
                    </ol>
                </section>
                <section className="shadow-md rounded-lg p-6 bg-[#15181D]">
                    <h2 className="text-2xl font-semibold mb-4 text-secondary">HOSTING ON GITHUB PAGES</h2>
                    <ol className="list-decimal pl-6 text-white mb-4">
                        <li>Change <code className="bg-[#1C232B] px-1 rounded">base: &apos;/repository-name/&apos;</code>from <code className="bg-[#1C232B] px-1 rounded">vite.config.js</code></li>
                        <pre className="p-4 rounded-md text-sm overflow-x-auto">
                            {`import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/repository-name/', // Change 'repository-name' with your repository name
})`}
                        </pre>
                        <li>Create a repo on GitHub and push this code from your repository.</li>
                        <li>Follow these steps:</li>
                        <ol className="list-disc pl-6 text-white">
                            <li>Open your terminal and navigate to your project folder.</li>
                            <li>Initialize a new Git repository if you haven&apos;t already:</li>
                            <code className="bg-[#1C232B] px-1 rounded">git init</code>
                            <li>Run the following command to add all your changes:</li>
                            <code className="bg-[#1C232B] px-1 rounded">git add .</code>
                            <li>Commit your changes with a message describing the changes:</li>
                            <code className="bg-[#1C232B] px-1 rounded">git commit -m &quot;Your commit message&quot;</code>
                            <li>Create or rename your branch to `main` (if it’s not already named `main`):</li>
                            <code className="bg-[#1C232B] px-1 rounded">git branch -M main</code>
                            <li>If you haven&apos;t connected your local repository to GitHub, you can do so by running:</li>
                            <code className="bg-[#1C232B] px-1 rounded">git remote add origin
                                https://github.com/your-username/your-repository.git</code>
                            <li>Push your changes to GitHub:</li>
                            <code className="bg-[#1C232B] px-1 rounded">git push -u origin main</code>
                            <li>Deploy or Host your project to GitHub Pages:</li>
                            <code className="bg-[#1C232B] px-1 rounded">npm run deploy</code>
                        </ol>
                    </ol>
                </section>
            </main>
            <footer className="mt-12 text-center text-gray-600">
                <p>ReiiV. All rights reserved.</p>
            </footer>
        </div>
    );
};

export default Index;