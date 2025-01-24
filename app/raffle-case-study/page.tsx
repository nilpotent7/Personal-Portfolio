import '@/app/raffle-case-study/page.scss'
import Image from 'next/image'
import ScrollToTop from '@/components/scrollToTop'
import { Tweet } from 'react-tweet'

export const metadata = {
    title: 'Raffle System | Case Study',
    description: 'Designed & developed a cross chain raffle system for ERC-721 tokens, that facilitated over 100k ticket purchases.',
    image: '/raffleCS.webp'
}

export default function RaffleCaseStudy() {
    return <>
        <section className='raffleIntro'>
            <h1>A Raffle System</h1>
            <img src='/raffle.webp' alt='Raffle Cards' height={2635} width={1600} style={{aspectRatio: '2635/1600' }}/>
            <div className='introBox'>
                <p>Designed & developed a cross chain raffle system for ERC-721 tokens, that facilitated over 100k ticket purchases.</p>
            </div>
        </section>
        <div className='caseStudyWrapper'>
            <section>
                <h3 style={{marginTop: '0'}}>Whoopdoop Labs • 2023</h3>
                <p>
                    Whoopsie Doopsies is a collection with a total volume of over 800 ETH. As part of their 2023 Roadmap, they planned to develop a Raffle System similar to the one that Metawin.com has been dominating with, in the space for years. My task was to develop a system that automates the management of raffles while minimizing network costs and providing the same level of utility as the competitor.
                </p>
                <h3>THE PROBLEM</h3>
                <p>
                    Metawin.com utilizes on-chain random number generation through ChainLink Upkeep, which incurs significant network fees and increases operational costs per raffle.
                </p>
                <h3>THE VISION</h3>
                <p>
                    Using an automated off-chain service that initiates a process for each raffle and closes it at the designated time and provides the Smart Contract an off-chain but cryptographically secure random seed. Moreover, dropping the gas costs even further to a single penny by maximizing utilization of an L2 chain. 
                </p>
            </section>
            <section>
                <h4 style={{marginTop: '4rem'}}>Breakdown</h4>
                <h2 style={{marginTop: '0'}}>Smart Contracts</h2>
                <p>
                    A Smart Contract logs the current discount qualifiers by tracking the wallets that hold certain NFTs on the mainnet. A few more contracts are responsible for token bridging & NFT Wrapping/Unwrapping. For the Raffle Contract, the admin wallets have the right to start and close raffles. Starting a raffle requires various parameters while closing a raffle requires a random seed. When users purchase an entry, the contract stores the number of entries bought as ranges (represented by lower and upper bounds) along with the buyer&apos;s address in an array.
                </p>
                <Image src='/raffleSC.svg' alt='Smart Contract Code' width={5928} height={2424} style={{ aspectRatio: '5928/2424', width: '100%', height: '100%' }}/>
                <p className='caption'>Smart Contract Snippet</p>
                <h3>WINNER SELECTION</h3>
                <p>
                    Upon invoking the close raffle function, a cryptographically secure random number is generated and used as a seed to determine the winning entry. The winning entry can be found in the entry record using a simple binary search. This mechanism ensures scalability with a Big O complexity of O(log n) and keeps gas fees low.
                </p>
            </section>
            <section>
                <h2>Managing Raffles</h2>
                <p>
                    Raffles can be managed through a private Discord bot. Upon a request to start a raffle, the Discord bot promptly sends a transaction and includes all the necessary parameters provided with the command. Once the designated time frame for the raffle has elapsed, the Discord bot automatically triggers another transaction to close the ongoing raffle. Moreover, the Discord bot offers a range of additional commands that allow the admin to inquire about ongoing or ended raffles, as well as check the status of a specific raffle.
                </p>
                <Image src='/discord.webp' alt='Discord Command to start a Raffle' width={3388} height={796} style={{ aspectRatio: '3388/796', width: '100%', height: '100%', marginTop: '20px' }}/>
                <p className='caption' style={{marginTop: '10px'}}>Discord Bot to Manage Raffles</p>
            </section>
            <section>
                <h2>Web Interface</h2>
                <p>
                    The web features a beautiful user interface that allows users to seamlessly interact with the contracts, while also providing many other off-chain quality-of-life features. The site provides a complete ecosystem of features for the project. For instance, Claiming Royalties, Claiming V2 NFTs or essential bridging actions.
                </p>
                <Image src='/Connect.webp' alt='Connect Wallet Widget' width={3659} height={952} style={{ aspectRatio: '3659/952', width: '100%', height: '100%', marginTop: '20px' }}/>
                <p className='caption' style={{marginTop: '10px'}}>Connect Wallet Widget</p>
                <Image src='/RaffleInfo.png' alt='Raffle Detail Page' width={4280} height={3992} style={{ aspectRatio: '4280/3992', width: '100%', height: '100%', borderRadius: '12px', marginTop: '20px' }}/>
                <p className='caption' style={{marginTop: '10px'}}>Raffle Details/Purchase Page</p>
                <Image src='/labeledOngoing.webp' alt='A Labeled Raffle Card of an Ongoing Raffle' width={1856} height={1600} style={{ aspectRatio: '1856/1600', width: '60%', height: '60%' }}/>
                <p className='caption'>Raffle in &quot;Ongoing&quot; State</p>
                <Image src='/labeledEnded.webp' alt='A Labeled Raffle Card of an Ended Raffle' width={1856} height={1600} style={{ aspectRatio: '1856/1600', width: '60%', height: '60%' }}/>
                <p className='caption'>Raffle in &quot;Ended&quot; State</p>
                <Image src='/bridge.png' alt='Unwrap widget to bridge NFTs to the mainnet' width={2050} height={1941} style={{ aspectRatio: '2050/1941', width: '100%', height: '100%' }}/>
                <p className='caption'>Asset Bridge Widget</p>
                <Image src='/unwrap.png' alt='Asset bridging widget from Eth mainnet to Nova' width={2694} height={1368} style={{ aspectRatio: '2694/1368', width: '100%', height: '100%' }}/>
                <p className='caption'>Unwrap Widget</p>
            </section>
            <section>
                <h2>User Suggestions & Features</h2>
                <p>
                    The community has been very supportive of the project and has provided valuable feedback. Many of the features were continually developed in an agile manner based upon users feedback. For instance, during the initial release, users expressed concerns about the additional gas costs associated with ERC-20 based raffles. To purchase an entry, users had to perform two separate transactions: one to allow ERC-20 spending to the contract and another to interact with the Raffle Contract. To address this issue, I implemented a central widget that enables users to grant an allowance to the Raffle Contract. This improvement eliminates the need for users to repeatedly grant allowances if sufficient allowance has already been provided. This was later updated to ERC-2612 permit extension for ERC 20. In later updates, the widget provides utility of displaying the user&apos;s balance of Eth & ERC 20 on both chains.
                </p>
                <Image src='/Allowance.webp' alt='ERC-20 Allowance Widget' width={3635} height={406} style={{ aspectRatio: '3635/406', width: '100%', height: '100%', marginTop: '20px' }}/>
                <p className='caption' style={{marginTop: '10px'}}>ERC-20 Allowance Widget</p>
            </section>
            <section>
                <h2>Summary</h2>
                <p>
                    The system paired with the user-friendly web interface contributed to a seamless and enjoyable user experience. With few trials, errors & especially with the user feedback, the system was driven in the right direction that it is now. The overwhelmingly positive feedback from the community validates the system&apos;s effectiveness and value.
                </p>
                <Image src='/map.svg' alt='System Map' width={1004} height={780} style={{ aspectRatio: '1004/780', width: '100%', height: '100%', marginTop: '20px' }}/>
                <p className='caption'>System Map</p>
            </section>
            <section>
                <h2>Community Feedback</h2>
                <p>
                    The feedback received for the current system has been overwhelmingly positive. Moreover, the system effectively provides raffles with a comparable level of utility to other competitors. While also minimizing operational costs to a significant extent, resulting in a highly cost-efficient solution.
                </p>
                <Tweet id="1652529266414829570" />
                <Tweet id="1769562345783566376" />
                <Tweet id="1669807525657559040" />

                <Tweet id="1652143403550003200" />
                <Tweet id="1677813481662193664" />
                <Tweet id="1672055295927898112" />
                <Tweet id="1698955981357772889" />
            </section>
        </div>
        <ScrollToTop />
    </>
}
