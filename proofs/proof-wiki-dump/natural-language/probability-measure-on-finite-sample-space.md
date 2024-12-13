# 

Source: https://proofwiki.org/wiki/Probability_Measure_on_Finite_Sample_Space



Theorem
Let $\Omega = \set {\omega_1, \omega_2, \ldots, \omega_n}$ be a finite set.
Let $\Sigma$ be a $\sigma$-algebra on $\Omega$.
Let $p_1, p_2, \ldots, p_n$ be non-negative real numbers such that:

$p_1 + p_2 + \cdots + p_n = 1$
Let $Q: \Sigma \to \R$ be the mapping defined as:

$\forall A \in \Sigma: \map Q A = \ds \sum_{i: \omega_i \in A} p_i$

Then $\struct {\Omega, \Sigma, Q}$ constitutes a probability space.
That is, $Q$ is a probability measure on $\struct {\Omega, \Sigma}$.


Corollary
Let $\Omega = \set {\omega_1, \omega_2, \ldots, \omega_n}$ be a finite set.
Let $\Sigma$ be the power set of $\Omega$.
Let $p_1, p_2, \ldots, p_n$ be non-negative real numbers such that:

$p_1 + p_2 + \cdots + p_n = 1$
Let $Q: \Sigma \to \R$ be the mapping defined as:

$\forall A \in \Sigma: \map Q A = \ds \sum_{i: \omega_i \in A} p_i$

Then $\struct {\Omega, \Sigma, Q}$ constitutes a probability space.
That is, $Q$ is a probability measure on $\struct {\Omega, \Sigma}$.


Proof
Recall the Kolmogorov axioms:





\((1)\)  

$:$  





  \(\ds \forall A \in \Sigma:\)



   \(\ds 0 \)

  \(\ds \le \)  

\(\ds  \map \Pr A \le 1 \)   

  The probability of an event occurring is a real number between $0$ and $1$


\((2)\)  

$:$  









   \(\ds \map \Pr \Omega \)

  \(\ds = \)  

\(\ds  1 \)   

  The probability of some elementary event occurring in the sample space is $1$


\((3)\)  

$:$  









   \(\ds \map \Pr {\bigcup_{i \mathop \ge 1} A_i} \)

  \(\ds = \)  

\(\ds  \sum_{i \mathop \ge 1} \map \Pr {A_i} \)   

  where $\set {A_1, A_2, \ldots}$ is a countable (possibly countably infinite) set of pairwise disjoint events




















  That is, the probability of any one of countably many pairwise disjoint events occurring




















  is the sum of the probabilities of the occurrence of each of the individual events


First we determine that $\Pr$ as defined is actually a probability measure.
By definition, we have that $\map \Pr A$ is the sum of some subset of $\set {p_1, p_2, \ldots, p_n}$.
Thus $0 \le \map \Pr A \le 1$ and Axiom $(1)$ is fulfilled trivially by definition.

Let $A \in \Sigma$ be such that:

$A = \set {\omega_{r_1}, \omega_{r_2}, \ldots, \omega_{r_k} }$
We have that:

$A = \set {\omega_{r_1} } \cup \set {\omega_{r_2} } \cup \cdots \cup \set {\omega_{r_k} }$
From Simple Events are Mutually Exclusive, $\set {\set {\omega_{r_1} }, \set {\omega_{r_2} }, \ldots, \set {\omega_{r_k} } }$ constitutes a set of pairwise disjoint events.
Hence:

$\map \Pr {\set {\omega_{r_1} } \cup \set {\omega_{r_2} } \cup \cdots \cup \set {\omega_{r_k} } } = \ds \sum_{i \mathop = 1}^k \map \Pr {\omega_{r_1} }$
and it is seen that axiom $(3)$ is fulfilled.

Then we have that:














\(\ds \map \Pr \Omega\)

\(=\)







\(\ds \map \Pr {\bigcup_{i \mathop = 1}^n \omega_i}\)




















\(\ds \)

\(=\)







\(\ds \ds \sum_{i \mathop = 1}^n \map \Pr {\omega_i}\)




















\(\ds \)

\(=\)







\(\ds \ds \sum_{i \mathop = 1}^n p_i\)




















\(\ds \)

\(=\)







\(\ds 1\)










Hence axiom $(2)$ is satisfied.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $1$: Events and probabilities: $1.3$: Probabilities: Exercise $6$




