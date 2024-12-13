# 

Source: https://proofwiki.org/wiki/Renaming_Mapping_is_Well-Defined/Proof_2

Theorem
Let $f: S \to T$ be a mapping.
Let $r: S / \RR_f \to \Img f$ be the renaming mapping,  defined as:

$r: S / \RR_f \to \Img f: \map r {\eqclass x {\RR_f} } = \map f x$
where:

$\RR_f$ is the equivalence induced by the mapping $f$
$S / \RR_f$ is the quotient set of $S$ determined by $\RR_f$
$\eqclass x {\RR_f}$ is the equivalence class of $x$ under $\RR_f$.

The renaming mapping is always well-defined.


Proof
From Condition for Mapping from Quotient Set to be Well-Defined:

there exists a mapping $\phi: S / \RR \to T$ such that $\phi \circ q_\RR = f$
if and only if:

$\forall x, y \in S: \tuple {x, y} \in \RR \implies \map f x = \map f y$

But by definition of the equivalence induced by the mapping $f$:

$\forall x, y \in S: \tuple {x, y} \in \RR_f \implies \map f x = \map f y$
The result follows directly.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Theorem $6.6$




