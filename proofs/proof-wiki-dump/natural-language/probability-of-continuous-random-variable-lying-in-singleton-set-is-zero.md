# 

Source: https://proofwiki.org/wiki/Probability_of_Continuous_Random_Variable_Lying_in_Singleton_Set_is_Zero



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space. 
Let $X$ be a continuous real variable on $\struct {\Omega, \Sigma, \Pr}$.

Then, for each $x \in \R$, we have: 

$\map \Pr {X \le x} = \map \Pr {X < x}$
In particular: 

$\map \Pr {X = x} = 0$


Corollary
Let $C$ be a countable subset of $\R$. 

Then: 

$\map \Pr {X \in C} = 0$


Proof
Let $F_X$ be the cumulative distribution function of $X$ so that: 

$\map {F_X} x = \map \Pr {X \le x}$
for each $x \in \R$.
Let $P_X$ be the probability distribution of $X$. 
Since $X$ is a continuous real variable, we have: 

$F_X$ is continuous.
From Sequential Continuity is Equivalent to Continuity in the Reals, we have:

for each real sequence $\sequence {x_n}_{n \mathop \in \N}$ converging to $x$, we have $\map {F_X} {x_n}\to \map {F_X} x$.
For each $n \in \N$, let: 

$\ds x_n = x - \frac 1 n$
We have that $x_n \to x$, so: 

$\ds \map {F_X} x = \lim_{n \mathop \to \infty} \map {F_X} {x - \frac 1 n}$
We also have that $\sequence {x_n}_{n \mathop \in \N}$ is a increasing sequence. 
So, we have: 

$\ds \hointl {-\infty} {x - \frac 1 n} \subseteq \hointl {-\infty} {x - \frac 1 {n + 1} }$
for each $n \in \N$. 
So:

$\ds \sequence {\hointl {-\infty} {x - \frac 1 n} }_{n \mathop \in \N}$ is a increasing sequence of sets.
We can see that: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n} = \openint {-\infty} x$
Lemma
Let $x$ be a real number.
Then: 

$\ds \bigcup_{n \mathop = 1}^\infty \hointl {-\infty} {x - \frac 1 n} = \openint {-\infty} x$
$\Box$

So, we have: 














\(\ds \map \Pr {X < x}\)

\(=\)







\(\ds \map {P_X} {\openint {-\infty} x}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {P_X} {\hointl {-\infty} {x - \frac 1 n} }\)





Measure of Limit of Increasing Sequence of Measurable Sets














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map \Pr {X \le x - \frac 1 n}\)





Definition of Probability Distribution














\(\ds \)

\(=\)







\(\ds \lim_{n \mathop \to \infty} \map {F_X} {x - \frac 1 n}\)





Definition of Cumulative Distribution Function














\(\ds \)

\(=\)







\(\ds \map {F_X} x\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X \le x}\)





Definition of Cumulative Distribution Function



We then have: 














\(\ds \map \Pr {X \le x}\)

\(=\)







\(\ds \map \Pr {\set {X = x} \cup \set {X < x} }\)




















\(\ds \)

\(=\)







\(\ds \map \Pr {X = x} + \map \Pr {X < x}\)





Probability of Union of Disjoint Events is Sum of Individual Probabilities



giving: 

$\map \Pr {X = x} = 0$
$\blacksquare$


Also see
Distribution Function of Finite Signed Borel Measure is Continuous iff Measure is Diffuse - of which this result is an instantiation with a similar proof




