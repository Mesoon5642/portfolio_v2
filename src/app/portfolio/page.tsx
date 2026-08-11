import Image from "next/image"
import ask485 from "../../../public/portfolio/ask485.png"
import p5_ml from "../../../public/portfolio/p5-ml.png"
import p4_pokemon from "../../../public/portfolio/p4-pokemon.png"

export default function PortfolioPage(){
    return (
        <div>
            <div className="text-center my-10">
                <a style={{borderStyle: "ridge"}}className="bg-violet-950 inline-block border-8 border-emerald-500 p-5 text-3xl text-pink-400 underline underline-offset-4" download href="/portfolio/MLSResume.pdf">Resume Link</a>
            </div>
            <div className="text-xl bold underline underline-offset-4 text-center my-5">
                Projects:
            </div>
            <div className="mx-5 flex items-center text-center flex-col">
                <div className="mx-2">
                    <h1 className="text-emerald-500">EECS 485 P4-P5: MapReduce and Web Search Engine</h1>
                    <ul className="list-disc list-inside">
                        <li className="my-2">Utilized Python multithreading and a MapReduce framework to build an efficient document analysis pipeline.</li>
                        <li className="my-2">Constructed an indexing API on top of document analysis results using Python Networking and Flask to quickly deliver data to a search engine frontend.</li>
                        <li className="my-2">Designed a search frontend to pull links at scale from a SQL Database using Python and Flask.</li>
                    </ul>
                </div>
                <div className="mx-2">
                    <Image 
                            src={ask485}
                            alt="search web interface"
                            className="static mb-2 border-20 border-violet-600 object-contain"
                            style={{borderStyle: "ridge"}}
                    />
                </div>
                <p className="text-emerald-500 mb-2">Caption: The web interface for the search model</p>
            </div>
            <hr className="my-5 mx-2"/>
            <div className="mx-5 flex items-center text-center flex-col">
                <div className="mx-2">
                    <h1 className="text-emerald-500">EECS 280 P5: Machine Learning</h1>
                    <ul className="list-disc list-inside">
                        <li className="my-2">Built an efficient Binary Search Tree data structure using recursion for search to store values in a Map.</li>
                        <li className="my-2">Implemented a Map data structure to easily query through large datasets.</li>
                        <li className="my-2">Created a Bag of Words machine learning model to classify forum posts by category based on category word frequency.</li>
                    </ul>
                </div>
                <div className="mx-2">
                    <Image 
                            src={p5_ml}
                            alt="machine learning test data"
                            className="static mb-2 border-20 border-violet-600 object-contain"
                            style={{borderStyle: "ridge"}}
                    />
                </div>
                <p className="text-emerald-500 mb-2">Caption: Some of the test data ran through the model</p>
            </div>
            <hr className="my-5 mx-2"/>
            <div className="mx-5 flex items-center text-center flex-col">
                <div className="mx-2">
                    <h1 className="text-emerald-500">EECS 281 P4: Pokémon Traveling Salesperson Problem (TSP)</h1>
                    <ul className="list-disc list-inside">
                        <li className="my-2">Engineered a Minimum Spanning Tree algorithm between a set of Pokémon nodes</li>
                        <li className="my-2">Coded a Nearest Neighbor TSP algorithm to quickly find a non-optimal TSP route between Pokémon nodes</li>
                        <li className="my-2">Devised an Optimal TSP algorithm using a Branch and Bound framework to find an optimal TSP route between Pokémon nodes</li>
                    </ul>
                </div>
                <div className="mx-2">
                    <Image 
                            src={p4_pokemon}
                            alt="pokémon TSP data"
                            className="static mb-2 border-20 border-violet-600 object-contain"
                            style={{borderStyle: "ridge"}}
                    />
                </div>
                <p className="text-emerald-500 mb-2">Caption: Some (cropped) optimal TSP output. The top line is total path length, the bottom line is the path between node indexes.</p>
            </div>
            {/* <div style={{borderStyle: "ridge"}} className="bold p-2 lg:mx-5 text-center my-5 border-2 border-violet-600">
                Note: I am aware of my lack of personal projects beyond internships and class, and am working to remedy it as much as possible! Stay tuned, and check this page and my blog frequently :).
            </div> */}
        </div>
    )
}