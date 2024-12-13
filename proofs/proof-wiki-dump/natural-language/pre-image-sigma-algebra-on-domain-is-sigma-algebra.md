# 

Source: https://proofwiki.org/wiki/Pre-Image_Sigma-Algebra_on_Domain_is_Sigma-Algebra



Theorem
Let $X, X'$ be sets, and let $f: X \to X'$ be a mapping.
Let $\Sigma'$ be a $\sigma$-algebra on $X'$.

Then $f^{-1} \sqbrk {\Sigma'}$, the pre-image $\sigma$-algebra on the domain of $f$, is a $\sigma$-algebra on $X$.


Proof
Verify the axioms for a $\sigma$-algebra in turn:


Axiom $(1)$
As $f$ is a mapping, it is immediate that $f^{-1} \sqbrk {X'} = X$.
Also $X' \in \Sigma'$ as $\Sigma'$ is a $\sigma$-algebra.
Hence $X \in f^{-1} \sqbrk {\Sigma'}$.
$\Box$


Axiom $(2)$
Let $S = f^{-1} \sqbrk {E'} \in f^{-1} \sqbrk {\Sigma'}$. 
By Preimage of Set Difference under Mapping and $f^{-1} \sqbrk {X'} = X$, have:

$X \setminus S = f^{-1} \sqbrk {X'} \setminus f^{-1} \sqbrk {E'} = f^{-1} \sqbrk {X' \setminus E'}$
As $X' \setminus E' \in \Sigma'$, this means $X \setminus S \in f^{-1} \sqbrk {\Sigma'}$.
$\Box$


Axiom $(3)$
Let $\sequence {S_i}_{i \mathop \in \N}$ be a sequence in $f^{-1} \sqbrk {\Sigma'}$.
Let, for all $i \in \N$, $E'_i \in \Sigma'$ such that $S_i = f^{-1} \sqbrk {E'}$.
By Preimage of Union under Mapping: General Result, have:

$\ds \bigcup_{i \mathop \in \N} S_i = \bigcup_{i \mathop \in \N} f^{-1} \sqbrk {E'_i} = f^{-1} \sqbrk {\bigcup_{i \mathop \in \N} E'_i}$
Now $\ds \bigcup_{i \mathop \in \N} E'_i \in \Sigma'$ as $\Sigma'$ is a $\sigma$-algebra.
Hence $\ds \bigcup_{i \mathop \in \N} S_i \in f^{-1} \sqbrk {\Sigma'}$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $3.3 \ \text{(vii)}$, $\S 3$: Problem $2$




