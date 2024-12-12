# 

Source: https://proofwiki.org/wiki/Expectation_of_Real-Valued_Discrete_Random_Variable/Lemma

Lemma
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be a discrete real-valued random variable such that: 

$\map X \omega \ge 0$ for all $\omega \in \Omega$.

Then: 

$\ds \int X \rd \Pr = \sum_{x \in \Img X} x \map \Pr {X = x}$


Proof
Since $X$ is a discrete random variable, there exists a sequence $\sequence {x_i}_{i \in \N}$ of distinct real numbers such that: 

$\Img X = \set {x_i : i \in \N}$
For each $i$, let: 

$E_i = \set {X = x_i}$
Then, we can write: 

$\ds \map X \omega = \sum_{i \mathop = 1}^\infty x_i \map {\chi_{E_i} } \omega$
for each $\omega \in \Omega$.
Since $X$ is $\Sigma$-measurable, we have: 

$E_i$ is $\Sigma$-measurable for each $i$
from Measurable Functions Determine Measurable Sets. 
For each $n \in \N$, define $X_n : \Omega \to \R$ by: 

$\ds \map {X_n} \omega = \sum_{i \mathop = 1}^n x_i \map {\chi_{E_i} } \omega$
for each $\omega \in \Omega$.
Then $X_n$ is a positive simple function for each $n$. 
So, we have: 














\(\ds \map {I_\Pr} {X_n}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n x_i \map \Pr {E_i}\)





Definition of Integral of Positive Simple Function














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n x_i \map \Pr {X = x}\)









From Integral of Positive Measurable Function Extends Integral of Positive Simple Function, we have: 

$\ds \map {I_\Pr} {X_n} = \int X_n \rd \Pr$
That is: 

$\ds \int X_n \rd \Pr = \sum_{i \mathop = 1}^n x_i \map \Pr {X = x}$

We aim to apply the Monotone Convergence Theorem for Positive Simple Functions. 
We have, from the definition of infinite series: 

$\ds \map X \omega = \lim_{n \mathop \to \infty} \sum_{i \mathop = 1}^n x_i \map {\chi_{E_i} } \omega = \lim_{n \mathop \to \infty} \map {X_n} \omega$
for each $\omega \in \Omega$, so: 

$X_n \to X$ pointwise.
Finally, for each $n \in \N$, we have: 














\(\ds \map {X_{n + 1} } \omega - \map {X_n} \omega\)

\(=\)







\(\ds \sum_{i \mathop = 1}^{n + 1} x_i \map {\chi_{E_i} } \omega - \sum_{i \mathop = 1}^n x_i \map {\chi_{E_i} } \omega\)




















\(\ds \)

\(=\)







\(\ds x_{n + 1} \map {\chi_{E_{n + 1} } } \omega\)




















\(\ds \)

\(\ge\)







\(\ds 0\)









for each $\omega \in \Omega$.
So:

$\map {X_{n + 1} } \omega \ge \map {X_n} \omega$ for each $n \in \N$ and $\omega \in \Omega$.
So, from Monotone Convergence Theorem for Positive Simple Functions, we have: 














\(\ds \int X \rd \Pr\)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \int X_n \rd \Pr\)




















\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \sum_{i \mathop = 1}^n x_i \map \Pr {X = x}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^\infty x_i \map \Pr {X = x}\)





Definition of Infinite Series



$\blacksquare$





