import '@/app/articles/neural-networks/page.scss'
import ScrollToTop from '@/components/scrollToTop'
import ModelViewer from '@/components/modelViewer'
import Image from 'next/image'
import Link from "next/link"

export const metadata = {
    metadataBase: new URL("https://nilpotent.vercel.app"),
    title: 'Machine Learning Case Study | Behroz Khan',
    description: 'A comprehensive case study into machine learning, learning algorithms, and best practices.',
    openGraph: {
        title: 'Machine Learning Case Study | Behroz Khan',
        description: 'A comprehensive case study into machine learning, learning algorithms, and best practices.',
        type: 'website',
        images: [
            {
                url: '/CaseStudies/NeuralNetworks/OpenGraph.png',
                width: 1024,
                height: 1024,
            },
        ],
    },
  }

export default function NeuralNetworkCaseStudy() {
    return <>
        <section className='intro' style={{ marginTop: '2rem' }}>
            <h1>Machine Learning</h1>
            <Image src='/CaseStudies/NeuralNetworks/CoverArt.png' alt='Neural Networks Cover Art' height={2028} width={1080} style={{aspectRatio: '2028/1080', marginTop: '4rem' }}/>
            <div className='introBox'>
                <p>A detailed beginner&apos;s guide to Machine Learning</p>
            </div>
        </section>
        <div className='caseStudyWrapper'>
            <section>
                <h3 style={{marginTop: '0'}}>Reinventing the Wheel</h3>
                <p>
                    Building things from scratch teaches you a lot of &apos;under the hood&apos; details, which you would have otherwise. These little details are invaluable for a deeper understanding. Here&apos;s what I learnt by implementing entire Neural Network model, using only Python & its library Numpy.
                </p>
                <h5 style={{marginTop: '2rem'}}>August 2023</h5>
                <h3 style={{marginBottom: '0.5rem', marginTop: '0'}}>THE PROJECT</h3>
                <p>
                    Using only Python & NumPy, I&apos;ve implemented a Neural Network, and trained it to recognize Handwritten Digits from MNIST Dataset. It reached <b>94.8% accuracy</b> within 4 minutes of training.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    Another Neural Network is trained to recognize English alphabets, from a custom dataset with 48 typeface variations, 2 size variations per typeface, and 27 uppercase & lowercase English alphabets. It reached <b>75.5% accuracy</b> within 30 minutes of training.
                </p>
                <h3>THE ARTICLE</h3>
                <p>
                    Many resources demand a strong Calculus background for getting started with Machine Learning. While its certainly helpful, its not a strict requirement in my opinion. The key concepts of Calculus used in Machine Learning, can indeed be explained without a deeper Calculus background.
                </p>
                <p>
                    With this Case Study, I aim to explain what I learnt in an effective & simple manner.
                </p>
            </section>
            <section>

                <h4 style={{marginTop: '4rem'}}>Breakdown</h4>
                <h2 style={{marginTop: '0'}}>Understanding Neural Networks</h2>
                <p style={{marginTop: '0.5rem'}}> Before we get into the details, let&apos;s define some fundamental concepts from Machine Learning. </p>

                <h3>FUNCTIONS</h3>
                <p>
                    A function can be described as an operation applied to an input. The result of the operation is the output of the function.
                </p>
                <p>
                    Everything can be described as a function. The images on your screen, the sounds you hear, fourier transform, mathematical multiplication, and more.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/MathFunction.png' alt='Polynomial as a Function' width={1662} height={117} style={{ aspectRatio: '1662/117', width: '100%', height: '100%' }}/>
                <p className='caption'>Polynomial as a Function</p>


                <h3>NEURAL NETWORKS</h3>
                <p>
                    Neural networks are composed of interconnected neurons (also known as perceptrons). These neurons are the foundation of machine learning. The more neurons a network has, the more capable it is to learn complexity. (I&apos;ll expand on it later)
                </p>
                <Image src='/CaseStudies/NeuralNetworks/NeuralNetwork.png' alt='Sample Neural Network' width={1920} height={696} style={{ aspectRatio: '1920/696', width: '100%', height: '100%' }}/>
                <p className='caption'>Sample Neural Network</p>

                <h3>THE NEURON</h3>
                <p>
                    Neurons can basically be defined as a function, that takes multiple input values, and produces a single output.
                    Each connection to the neuron has an associated weight, determining its importance (influence towards the output). Additionally, neurons also consist of a bias value, which shifts the output. The result is then passed through an activation function, which yields the neuron&apos;s final output.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/NeuronFunction.png' alt='Neuron as a Function' width={1662} height={117} style={{ aspectRatio: '1662/117', width: '100%', height: '100%' }}/>
                <p className='caption'>Neuron as a Function</p>

                <p style={{marginTop:'1rem'}}>
                    Common activation functions are <b>Sigmoid</b>, <b>Tanh</b>, and <b>ReLU</b>. This will be explained in detail later. For now, you can think of the activation function as sensitivity of the neuron.
                </p>
            </section>
            <section>
                <h2>Function Approximators</h2>
                <p>
                    Neural Networks are essentially function approximators. Given a set of sample data (input & output), and without knowing the definition of the function, you can train a sufficient neural network to approximate it.
                    Different types of functions require different structures of neural networks. A <b>Linear Function</b> can be learnt by a single-layer neural network, but it cannot learn a non-linear function, because the network itself only performs linear calculations.
                    The best example of this phenomenon is the OR and XOR functions.
                </p>
                <p style={{marginTop: '1rem'}}>
                    A single layer neural network can easily learn the OR function.
                </p>

                <Image src='/CaseStudies/NeuralNetworks/ORFunction.png' alt='Neural Network learns OR Function' width={2515} height={1119} style={{ aspectRatio: '2515/1119', width: '100%', height: '100%' }}/>
                <p className='caption'>Neural Network & OR Function</p>

                <p style={{marginTop: '1rem'}}>
                    However, the same network won&apos;t be able to learn the XOR function, since its not <b>Linearly Separable</b>. A network with 2 layers can learn it, since the second layer introduces non-linearity to the network.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/XORFunction.png' alt='Neural Network learns XOR Function' width={2515} height={1119} style={{ aspectRatio: '2515/1119', width: '100%', height: '100%' }}/>
                <p className='caption'>Neural Network & XOR Function</p>
            </section>
            <section>
                <h2>Activation functions</h2>
                <p>
                    Activation functions are a core part of neural networks. As explained earlier, non-linearity is important in a network, so that it can approximate functions with increased complexity. Activation functions are the best way to add non-linearity to a neural network. The most commonly used activation functions are:
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Activation.png' alt='Common Activation Functions' width={1116} height={503} style={{ aspectRatio: '1116/503', width: '100%', height: '100%' }}/>
                <p className='caption'>Common Activation Functions</p>

                <Image src='/CaseStudies/NeuralNetworks/ActivationPlot.png' alt='Graph of Activation Functions Network' width={2880} height={1080} style={{ aspectRatio: '1920/696', width: '100%', height: '100%' }}/>
                <p className='caption'>Graph of Activation Functions</p>

                <h3 style={{marginTop: '1rem'}}>SOFTMAX FUNCTION</h3>
                <p>
                    Softmax is a unique activation function. It converts continuous values into a probability distribution, which is used for classification Neural Networks and Transformers for predictions.
                </p>
            </section>
            <section>
                <h4 style={{marginTop: '4rem'}}>Optimizers</h4>
                <h2 style={{marginTop: '0'}}>The Learning in Machine Learning</h2>
                <p>
                    We can finally explore how a neural network actually learns. Consider a single-layered neural network with one input which can be mathematically defined as: (F(x) = wx + b)
                </p>
                <Image src='/CaseStudies/NeuralNetworks/NeuronFunction2.png' alt='Neural Network Function' width={1662} height={187} style={{ aspectRatio: '1662/187', width: '100%', height: '100%' }}/>
                <p className='caption'>Neural Network as a Function</p>

                <p style={{marginTop: '1rem'}}>
                    Given a list of sample inputs & their corresponding outputs (the dataset), without knowing the function, our goal is to tweak the parameters weight (w) and bias (b) such that function&apos;s ouput matches given output. In this simple example, we can treat the parameters as unknowns, and manually solve the equation. But we need a systematic approach, which scales well with larger neural networks.
                </p>
                <p style={{marginTop: '1rem'}}>
                    Instead, lets use a <b>state space</b>, which is a fancy word for plotting all possible combinations of weights & biases for analysis.
                    Plotting weight on X-axis and bias on Y-axis, we get the following graph:
                </p>
                <Image src='/CaseStudies/NeuralNetworks/StateSpace.png' alt='Empty State Space' width={1920} height={975} style={{ aspectRatio: '1920/975', width: '100%', height: '100%' }}/>
                <p className='caption'>Empty State Space</p>

                <p style={{marginTop: '1rem'}}>
                        Now, we can fill the graph with a quantity known as <b>loss</b>. It can be defined as the difference in the output of the network and the desired output. Usually <b>Mean Squared Error</b> is used as a loss function. If we plot the loss for each combination of weights & biases, we get the following state space:
                </p>
                <ModelViewer/>
                <p style={{marginTop: '1rem'}}>
                    In this 3D representation of all possibilities, we can see a landscape with a distinct &quot;valley&quot; in blue. This represents the target values, that yield the least error. With that combination, we get the best approximation.
                    We cannot use this analysis technique for larger networks, especially when involving multiple layered neural networks, because we would need hyper dimensional space to visualize this. The question then becomes, how do we represent this technique mathematically.
                </p>
                <p style={{marginTop: '1rem'}}>
                    Thats where Optimizers come in. These are functions which find the most optimal parameter values, that yield the best approximation.
                </p>
            </section>
            <section>
                <h2>Stochastic Gradient Descent</h2>
                <p>
                    The most common optimizer is Stochastic Gradient Descent (or SGD). Instead of analyzing all possibilities (the entire state space), SGD only calculates the <b>slope</b> at the current position. This is given by the derivative of our function.
                    Derivative of a function is basically the slope of that function, and tells us how the output will change, with respect to a change in our inputs.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Derivative.png' alt="Neural Network Function&apos;s Derivative" width={1662} height={194} style={{ aspectRatio: '1662/194', width: '100%', height: '100%' }}/>
                <p className='caption'>Neural Network Function&apos;s Derivative</p>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '2rem', marginTop: '2rem'}}>
                    <div style={{width: '50%'}}>
                        <video src='/CaseStudies/NeuralNetworks/SGD.mp4' autoPlay loop muted playsInline width={1000} height={1000} style={{ aspectRatio: '1', width: '100%', height: '100%' }}/>
                        <p className='caption'>Stochastic Gradient Descent</p>
                    </div>
                    <div style={{width: '50%'}}>
                        <Image src='/CaseStudies/NeuralNetworks/SGD.gif' alt='SGD Approximating an Image' width={369} height={369} style={{ aspectRatio: '1', width: '100%', height: '100%' }}/>
                        <p className='caption'>SGD Approximating an Image</p>
                    </div>
                </div>
            </section>

            <section>
                <h2>Adam Optimizer</h2>
                <p>
                    Adam optimizer is an advanced optimization algorithm, which improves upon SGD by adopting momentum gradient descent. Instead of stepping exactly the same amount in each time, it accumulates momentum from previous iterations. Adam optimizer is among the fastest optimizers.
                </p>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                    <div style={{width: '50%'}}>
                        <video src='/CaseStudies/NeuralNetworks/Adam.mp4' autoPlay loop muted playsInline width={1000} height={1000} style={{ aspectRatio: '1', width: '100%', height: '100%' }}/>
                        <p className='caption'>Adam Optimizer</p>
                    </div>
                    <div style={{width: '50%'}}>
                        <Image src='/CaseStudies/NeuralNetworks/Adam.gif' alt='Adam Approximating an Image' width={369} height={369} style={{ aspectRatio: '1', width: '100%', height: '100%' }}/>
                        <p className='caption'>Adam Approximating an Image</p>
                    </div>
                </div>
            </section>

            <section style={{marginTop: '4rem'}}>
                <div style={{ width: '100%', display: 'flex', flexDirection: 'row', gap: '2rem'}}>
                    <div style={{width: '60%'}}>
                        <h2>Evolution</h2>
                        <p>
                            Another, but relatively uncommon technique, is the evolutionary algorithm, inspired by biological evolution. In each iteration, multiple samples of the current function are created, and are called a <b>generation</b> combined.
                            Each sample is then <b>mutated</b>, which means its parameters are randomly tweaked. The best sample from the generation is found by finding the one with minimal loss, which is selected for next iteration.
                        </p>
                    </div>
                    <div style={{width: '40%', marginTop: '2rem'}}>
                        <video src='/CaseStudies/NeuralNetworks/Evolution.mp4' autoPlay loop muted playsInline width={1000} height={1000} style={{ aspectRatio: '1', width: '100%', height: '100%' }}/>
                        <p className='caption'>Evolutionary Optimizer</p>
                    </div>
                </div>
            </section>

            <section>
                <h2 style={{marginTop: '4rem'}}>Optimizing the Optimizers</h2>
                <p>
                    Lets discuss some standard techniques, which optimize the learning of the Neural Network, either in terms of learning speed, efficiency, or accuracy.
                </p>

                <h3>EPOCHS AND BATCHES</h3>
                <p>
                    Traditionally, a neural network is trained multiple times on the entire dataset. Each iteration is called an Epoch. The faster the loss is decreased, the faster the network learns.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Vanilla.png' alt="Traditional Training Approach" width={1920} height={1000} style={{ aspectRatio: '1920/1000', width: '100%', height: '100%' }}/>
                <p className='caption'>Traditional Training Approach</p>

                <p style={{marginTop: '0.5rem'}}>
                    Alternatively, the dataset can be divided into set of batches, and the neural network can be trained on each batch, one at a time. Per iteration, the loss function is calculated only across the current batch. This is much faster than the traditional approach.
                    The state-space changes per iteration (changing the landscape). The landscape in each batch has different local minimums (small valleys, but more elevated than the global minimum valley). But as all of the batches are optimized, the differences are cancelled out, and the SGD is determined to converge to the global minimum, without getting stuck in local minimums.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    This requires an alternative optimizer, Mini-Batch Gradient Descent (MBGD). I won&apos;t go into the details, but it takes into account the loss of only the current batch to calculate the gradients. 
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Batches.gif' alt="Changing State-Space over Batches" width={893} height={500} style={{ aspectRatio: '893/500', width: '100%', height: '100%' }}/>
                <p className='caption'>Changing State-Space over Batches</p>
                <p style={{marginTop: '0.5rem'}}>
                    This approach focuses on convergence rather than speed. It ensure that a sufficient Neural Network will always converge to global minimum, instead of getting stuck. Its actually slower than traditional approach but more stable.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Batched.png' alt="Training on Batches of Input" width={1920} height={956} style={{ aspectRatio: '1920/956', width: '100%', height: '100%' }}/>
                <p className='caption'>Training on Batches of Input</p>

                <h3>LEARNING RATE</h3>
                <p>
                    As discussed earlier, SGD computes the gradient of the neuron&apos;s function, and steps in that direction with a discrete step. This step is called the learning rate.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    If we decrease the learning rate over time, the network will, theoretically, be able to fine-tune the details of the function we&apos;re trying to approximate.
                    Decay too fast, the network will not be able to reach sufficient accuracy in expected time.
                    Decaying too quick, the network will keep overshooting the optimal values.
                    The commonly used decay functions are step decay, exponential decay, polynomial decay, cosine annealing, etc.
                    Since we&apos;re using a larger learning rate in the beginning, the neural network converges faster.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Decay.png' alt="Different Decay Functions" width={1920} height={751} style={{ aspectRatio: '1920/751', width: '100%', height: '100%' }}/>
                <p className='caption'>Different Decay Functions</p>
                <Image src='/CaseStudies/NeuralNetworks/Decayed.png' alt="Training with Decaying Learning Rate" width={1920} height={1010} style={{ aspectRatio: '1920/1010', width: '100%', height: '100%', marginTop: '2rem' }}/>
                <p className='caption'>Training with Decaying Learning Rate</p>

                <h3>STANDARDIZATION</h3>
                <p>
                    Most neural networks are used for classification, or otherwise with outputs ranging from -1 to 1. Applying same logic to inputs improves efficiency, allowing it to learn at a faster rate. This is because if the inputs are offset, the gradient at those points is vanished, which means the gradient at larger values is very low.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/SigmoidPlot.png' alt="Sigmoid Function&apos;s Gradient" width={2880} height={1080} style={{ aspectRatio: '2880/1080', width: '100%', height: '100%' }}/>
                <p className='caption'>Sigmoid Function&apos;s Gradient</p>


                <p style={{marginTop: '0.5rem'}}>
                    Other activations functions like ReLU or Leaky ReLU, have support for both negative & larger values, but input is still preferrable to be standardized.
                    There are multiple methods of data standardization, but thats statistics. So I&apos;ll only cover the Z-Score Standardization technique, which performs linear transformation on the data points such that they range from -1 to 1. Linear transformation means that relations between the inputs is not lost.
                </p>
                <video src='/CaseStudies/NeuralNetworks/Transform.mp4' autoPlay loop muted playsInline width={2880} height={1080} style={{ aspectRatio: '2880/1080', width: '100%', height: '100%', marginTop: '1rem' }}/>
                <p className='caption'>Linear vs Non Linear Transformation</p>
                <p style={{marginTop: '1rem'}}>
                    The gradient-vanishing concept can also be explained with the term <b>saturation</b> which means the input values are so large that the neuron immediately activates (losing its behaviours), and requires a large change in its input for it to change its output. Standardization fixes this problem.
                    This extremely speeds up the learning process.
                </p>
                <Image src='/CaseStudies/NeuralNetworks/Standardized.png' alt="Training on Standardized Input" width={1920} height={927} style={{ aspectRatio: '1920/927', width: '100%', height: '100%' }}/>
                <p className='caption'>Training on Standardized Input</p>
                
            </section>

            <section>
                <h2>How I did it</h2>

                <h3>Recognizing Handwritten Digits</h3>
                <p>
                    I trained a small neural network, to recognize images of size 28x28 of handwritten digits. There are 2 hidden layers with 64 neurons each.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    The training dataset comes from one of the most famous datasets, the MNIST Dataset of 70,000 images. Its sometimes called &quot;Hello World&quot; of Machine Learning. The dataset is divided into a 60,000 images for training, and 10,000 for testing (loss analysis). This split is performed randomly to avoid introducing arbitrary bias.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    The Neural Network uses SGD with a exponentially decaying learning rate, Sigmoid activation function for hidden layers, and Softmax function for output layer, and Z-Score standardized input.
                </p>

                <h3>Recognizing Alphabets in Different Typefaces</h3>
                <p>
                    I also trained another neural network to recognize English alphabets with different fonts image of size 50x50.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    The dataset is generated using Python script. With 48 font supplied, a dataset of 70,0000+ images (225mb) is generated with 2 size variations per font for each 27 uppercase & lowercase English alphabet. The dataset is split 80-20% for training and testing, respectively.
                </p>
                <p style={{marginTop: '0.5rem'}}>
                    The Neural Network used SGD with a exponentially decaying learning rate, Sigmoid activation function for hidden layers, and Softmax function for output layer, and Z-Score standardized of input.
                </p>

                <h3>Source Code</h3>
                <p>
                    Source code for both networks, and dataset generator script is available on <Link href='https://github.com/nilpotent7/Machine-Learning' style={{ 
                        textDecoration: 'underline', color: 'var(--secondary-hover)'
                    }}>GitHub</Link>.
                </p>
            </section>

            <section>
                <h2>Final Thoughts</h2>
                <p>
                    Machine Learning is a truly fascinating field. You can train a machine to perform any task. I plan to explore further by approximating 3D shapes with Machine Learning in an upcoming Case Study. Stay connected on my socials for updates.
                </p>
                <p>
                    You now have a solid foundation in Machine Learning, and I hope this article sparked your curiosity to venture out on your own.
                </p>
                <p style={{marginTop: '1rem'}}>
                    To close off the article, I&apos;d like to mention a common saying that machine learning is just a rebrand of statistics. Underneath it all, its all maths. Always!
                </p>
            </section>
            
        </div>
        <ScrollToTop />
    </>
}
