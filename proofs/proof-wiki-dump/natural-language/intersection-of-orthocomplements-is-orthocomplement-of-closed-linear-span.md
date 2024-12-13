# 

Source: https://proofwiki.org/wiki/Intersection_of_Orthocomplements_is_Orthocomplement_of_Closed_Linear_Span



Theorem
Let $H$ be a Hilbert space.
Let $\family {M_i}_{i \mathop \in I}$ be an $I$-indexed family of closed linear subspaces of $H$.

Then:

$\ds \bigcap_{i \mathop \in I} M_i^\perp = \paren {\vee \set {M_i : i \in I} }^\perp$
where:

$\perp$ denotes orthocomplementation
$\vee$ denotes closed linear span.


Corollary
Furthermore, the following equality holds:

$\ds \paren {\bigcap_{i \mathop \in I} M_i}^\perp = \vee \set {M_i^\perp : i \in I}$


Proof
By definition of set equality, it suffices to prove the following two inclusions:

$\ds \bigcap_{i \mathop \in I} M_i^\perp \subseteq \paren {\vee \set {M_i : i \in I} }^\perp$
$\paren {\vee \set {M_i : i \in I} }^\perp \subseteq \ds \bigcap_{i \mathop \in I} M_i^\perp$


$\ds \bigcap_{i \mathop \in I} M_i^\perp$ is contained in $\paren {\vee \set {M_i : i \in I} }^\perp$
By Orthocomplement is Closed Linear Subspace and Closed Linear Subspaces Closed under Intersection, both spaces considered are closed linear subspaces of $H$.
By Orthocomplement Reverses Subset, the required containment is equivalent to:

$\vee \set {M_i : i \in I} \subseteq \ds \paren {\bigcap_{i \mathop \in I} M_i^\perp }^\perp$
For $h \in \ds \bigcap_{i \mathop \in I} M_i^\perp$, by definition one has:

$h \perp M_i$ for all $i \in I$
That is:

$M_i \perp \ds \bigcap_{i \mathop \in I} M_i^\perp$
This is equivalent to saying that:

$M_i \subseteq \ds \paren {\bigcap_{i \mathop \in I} M_i^\perp }^\perp$
Definition $(2)$ of closed linear span now grants the desired subset relation.
$\Box$


$\paren {\vee \set {M_i : i \in I} }^\perp$ is contained in $\ds \bigcap_{i \mathop \in I} M_i^\perp$
By definition $(2)$ of closed linear span:

$\forall i \in I: M_i \subseteq \vee \set {M_i^\perp : i \in I}$
By Orthocomplement Reverses Subset, it follows that:

$\forall i \ni I: \paren {\vee \set {M_i : i \in I} }^\perp \subseteq M_i^\perp$
Therefore, by definition of set intersection:

$\paren {\vee \set {M_i : i \in I} }^\perp \subseteq \ds \bigcap_{i \mathop \in I} M_i^\perp$
$\Box$

Thus we have established that:

$h \in \paren {\vee \set {M_i : i \in I} }^\perp \iff h \in \ds \bigcap_{i \mathop \in I} M_i^\perp$
From the definition of set equality, it follows that:

$\ds \bigcap_{i \mathop \in I} M_i^\perp = \paren {\vee \set {M_i : i \in I} }^\perp$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{II}.3$ Exercise $3$




