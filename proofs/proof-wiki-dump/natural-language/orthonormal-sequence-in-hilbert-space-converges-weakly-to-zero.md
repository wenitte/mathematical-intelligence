# 

Source: https://proofwiki.org/wiki/Orthonormal_Sequence_in_Hilbert_Space_Converges_Weakly_to_Zero

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $\sequence {e_n}_{n \mathop \in \N}$ be a sequence in $\HH$ such that: 

$\innerprod {e_n} {e_m} = 0$ if $n \ne m$
and:

$\norm {e_n} = 1$ for each $n \in \N$.

Then: 

$e_n \weakconv 0$
where $\rightharpoonup$ denotes weak convergence.


Proof
From Bessel's Inequality, we have: 

$\ds \sum_{n \mathop = 1}^\infty \size {\innerprod y {e_n} }^2$ converges for each $y \in \HH$.
So from Terms in Convergent Series Converge to Zero, we have: 

$\cmod {\innerprod y {e_n} }^2 \to 0$ for each $y \in \HH$.
We then have, from Complex Sequence is Null iff Positive Integer Powers of Sequence are Null: 

$\cmod {\innerprod y {e_n} } \to 0$ for each $y \in \HH$
and so, from Complex Sequence is Null iff Modulus of Sequence is Null: 

$\innerprod y {e_n} \to 0$ for each $y \in \HH$.
From Weak Convergence in Hilbert Space: Corollary, we therefore have:

$e_n \weakconv 0$
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $27.1$: Weak Convergence




