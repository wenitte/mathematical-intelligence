# 

Source: https://proofwiki.org/wiki/Existence_of_Probability_Space_and_Discrete_Random_Variable



Theorem
Let $I$ be an arbitrary countable indexing set.
Let $S = \set {s_i: i \in I} \subset \R$ be a countable set of real numbers.

Let $\set {\pi_i: i \in I} \subset \R$ be a countable set of real numbers which satisfies:

$\ds \forall i \in I: \pi_i \ge 0, \sum_{i \mathop \in I} \pi_i = 1$

Then there exists:

a probability space $\struct {\Omega, \Sigma, \Pr}$
and:

a discrete random variable $X$ on $\struct {\Omega, \Sigma, \Pr}$
such that the probability mass function $p_X$ of $X$ is given by:














\(\ds \map {p_X} {s_i}\)

\(=\)







\(\ds \pi_i\)





if $i \in I$














\(\ds \map {p_X} s\)

\(=\)







\(\ds 0\)





if $s \notin S$





Proof
Take $\Omega = S$ and $\Sigma = \powerset S$ (the power set of $S$).
Then let:

$\ds \map \Pr A = \sum_{i: s_i \mathop \in A} \pi_i$
for all $A \in \Sigma$.
Then we can define $X: \Omega \to \R$ by:

$\forall \omega \in \Omega: \map X \omega = \omega$
This suits the conditions of the assertion well enough.
$\blacksquare$


Motivation
What this theorem allows us to do is ignore all the detail of sample spaces, event spaces and probability measure, and merely say:

For each $i \in I$, let $X$ be a (discrete) random variable which takes value $s_i$ with probability $\pi_i$
and we know that such a random variable exists without having construct it every time.


Sources
Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.1$: Probability mass functions: Theorem $2 \text{A}$




