# 

Source: https://proofwiki.org/wiki/Pre-Image_Sigma-Algebra_on_Codomain_is_Sigma-Algebra



Theorem
Let $X, X'$ be sets, and let $f: X \to X'$ be a mapping.
Let $\Sigma$ be a $\sigma$-algebra on $X$.
Denote with $\Sigma'$ the pre-image $\sigma$-algebra on the domain of $f$.

Then $\Sigma'$ is a $\sigma$-algebra on $X'$.


Proof
Verify the axioms for a $\sigma$-algebra in turn:


Axiom $(\text {SA} 1)$
As $f$ is a mapping, it is immediate that $f^{-1} \sqbrk {X'} = X$.
Also $X \in \Sigma$ as $\Sigma$ is a $\sigma$-algebra.
Hence $X' \in \Sigma'$.
$\Box$


Axiom $(\text {SA} 2)$
Let $S' \in \Sigma'$.
By Preimage of Set Difference under Mapping and $f^{-1} \sqbrk {X'} = X$:

$f^{-1} \sqbrk {X' \setminus S'} = f^{-1} \sqbrk {X'} \setminus f^{-1} \sqbrk {S'}$
Now $f^{-1} \sqbrk {X'} = X \in \Sigma$, and $f^{-1} \sqbrk {S'} \in \Sigma$ was already assumed.
As $\Sigma$ is a $\sigma$-algebra, it follows that $f^{-1} \sqbrk {X' \setminus S'} \in \Sigma$ as well.
Hence $X' \setminus S' \in \Sigma'$.
$\Box$


Axiom $(\text {SA} 3)$
Let $\sequence {S'_i}_{i \mathop \in \N}$ be a sequence in $\Sigma'$.
By Preimage of Union under Mapping: General Result, have:

$\ds f^{-1} \sqbrk {\bigcup_{i \mathop \in \N} S'_i} = \bigcup_{i \mathop \in \N} f^{-1} \sqbrk {S'_i}$

By assumption, $S'_i \in \Sigma'$ for all $i \in \N$; hence $f^{-1} \sqbrk {S'_i} \in \Sigma$ for all $i \in \N$.
Now $\ds \bigcup_{i \mathop \in \N} f^{-1} \sqbrk {S'_i} \in \Sigma$ as $\Sigma$ is a $\sigma$-algebra.
Hence $\ds \bigcup_{i \mathop \in \N} S'_i \in \Sigma'$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $2$




