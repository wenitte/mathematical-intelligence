# 

Source: https://proofwiki.org/wiki/Probability_Measure_on_Finite_Sample_Space/Corollary

Corollary to Probability Measure on Finite Sample Space
Let $\Omega = \set {\omega_1, \omega_2, \ldots, \omega_n}$ be a finite set.
Let $\Sigma$ be the power set of $\Omega$.
Let $p_1, p_2, \ldots, p_n$ be non-negative real numbers such that:

$p_1 + p_2 + \cdots + p_n = 1$
Let $Q: \Sigma \to \R$ be the mapping defined as:

$\forall A \in \Sigma: \map Q A = \ds \sum_{i: \omega_i \in A} p_i$

Then $\struct {\Omega, \Sigma, Q}$ constitutes a probability space.
That is, $Q$ is a probability measure on $\struct {\Omega, \Sigma}$.


Proof
We have that Power Set of Sample Space is Event Space.
Hence this is a special case of Probability Measure on Finite Sample Space.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities: Exercise $6$




