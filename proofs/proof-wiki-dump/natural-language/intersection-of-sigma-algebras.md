# 

Source: https://proofwiki.org/wiki/Intersection_of_Sigma-Algebras



Theorem
Let $X$ be a set.
Let $\family {\Sigma_i}_{i \mathop \in I}$ be a indexed set of $\sigma$-algebras on $X$.

Then $\Sigma := \ds \bigcap_{i \mathop \in I} \Sigma_i$ is also a $\sigma$-algebra on $X$.
Here, $\ds \bigcap$ denotes set intersection.


Proof
Verify the axioms for a $\sigma$-algebra in turn:


Axiom $(1)$
As all the $\Sigma_i$ are $\sigma$-algebras, $X \in \Sigma_i$ for all $i \in I$.
Hence $X \in \Sigma$ by definition of intersection.
$\Box$


Axiom $(2)$
Let $E \in \Sigma$. 
Then for all $i \in I$, $E \in \Sigma_i$, by definition of intersection.
As all the $\Sigma_i$ are $\sigma$-algebras, also, for all $i \in I$:

$X \setminus E \in \Sigma_i$

Hence $X \setminus E \in \Sigma$ by definition of intersection.
$\Box$


Axiom $(3)$
Let $\sequence {E_n}_{n \mathop \in \N}$ be a sequence in $\Sigma$.
Then it is also a sequence in every $\Sigma_i$.
Hence, for all $i \in I$, as the $\Sigma_i$ are all $\sigma$-algebras:

$\ds \bigcup_{n \mathop \in \N} E_n \in \Sigma_i$

By definition of intersection, it follows that:

$\ds \bigcup_{n \mathop \in \N} E_n \in \Sigma$
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $3.4 \ \text{(i)}$
2013: Donald L. Cohn: Measure Theory (2nd ed.) ... (previous) ... (next): $1.1$: Algebras and Sigma-Algebras:  Proposition $1.1.2$




