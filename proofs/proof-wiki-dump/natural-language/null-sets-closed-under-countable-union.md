# 

Source: https://proofwiki.org/wiki/Null_Sets_Closed_under_Countable_Union



Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $\sequence {N_n}_{n \mathop \in \N}$ be a sequence of $\mu$-null sets.

Then $N := \ds \bigcup_{n \mathop \in \N} N_n$ is also a $\mu$-null set.


Signed Measure
Let $\struct {X, \Sigma}$ be a measurable space.
Let $\mu$ be a signed measure on $\struct {X, \Sigma}$. 
Let $\sequence {N_i}_{i \mathop \in \N}$ be a sequence of $\mu$-null sets.

Then: 

$\ds N = \bigcup_{i \mathop = 1}^\infty N_i$
is a $\mu$-null set.


Resolution of the Identity
Let $X$ be a topological space.
Let $\map \BB X$ be the Borel $\sigma$-algebra of $X$.
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\C$.
Let $\map B {\HH}$ be the space of bounded linear transformations on $\HH$.
Let $\EE : \map \BB X \to \map B {\HH}$ be a resolution of the identity.
Let $\set {A_j : j \in \N} \subseteq \map \BB X$ such that:

$\map \EE {A_j} = 0$ for each $j \in \N$.
Let:

$\ds A = \bigcup_{j \mathop = 1}^\infty A_j$

Then $\map \EE A = 0$.


Proof
As $\mu$ is a measure:

$\map \mu N \ge 0$
Also:














\(\ds \map \mu N\)

\(\le\)







\(\ds \sum_{n \mathop \in \N} \map \mu {N_n}\)





Measure is Countably Subadditive














\(\ds \)

\(=\)







\(\ds \sum_{n \mathop \in \N} 0\)





as the $N_n$ are $\mu$-null sets














\(\ds \)

\(=\)







\(\ds 0\)









Hence necessarily:

$\map \mu N = 0$
and $N$ is a $\mu$-null set.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 4$: Problem $10 \ \text{(iii)}$




