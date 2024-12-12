# 

Source: https://proofwiki.org/wiki/Euler%27s_Formula/Real_Domain/Proof_1



Theorem
Let $\theta \in \R$ be a real number.
Then:

$e^{i \theta} = \cos \theta + i \sin \theta$


Proof
Consider the differential equation:

$D_z \map f z = i \cdot \map f z$


Step 1
We will prove that $z = \cos \theta + i \sin \theta$ is a solution.














\(\ds z\)

\(=\)







\(\ds \cos \theta + i \sin \theta\)




















\(\ds \frac {\d z} {\d \theta}\)

\(=\)







\(\ds -\sin \theta + i \cos \theta\)





Derivative of Sine Function, Derivative of Cosine Function, Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds i^2 \sin \theta + i\cos \theta\)





$i^2 = -1$














\(\ds \)

\(=\)







\(\ds i \paren {i \sin \theta + \cos \theta}\)




















\(\ds \)

\(=\)







\(\ds i z\)









$\Box$


Step 2
We will prove that $y = e^{i\theta}$ is a solution.














\(\ds y\)

\(=\)







\(\ds e^{i\theta}\)




















\(\ds \frac {\d y} {\d \theta}\)

\(=\)







\(\ds i e^{i \theta}\)





Derivative of Exponential Function, Chain Rule for Derivatives, Linear Combination of Derivatives














\(\ds \)

\(=\)







\(\ds i y\)









$\Box$


Step 3
Consider the initial condition $\map f 0 = 1$.














\(\ds \bigvalueat y {\theta \mathop = 0}\)

\(=\)







\(\ds e^{0 i}\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \bigvalueat z {\theta \mathop = 0}\)

\(=\)







\(\ds \cos 0 + i \sin 0\)




















\(\ds \)

\(=\)







\(\ds 1\)









So $y$ and $z$ are both particular solutions.
But a particular solution to a differential equation is unique.


This article needs to be linked to other articles.In particular: "Specific solution" and the proof that such a specific solution is unique.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Therefore $y = z$, that is, $e^{i \theta} = \cos \theta + i \sin \theta$.
$\blacksquare$





