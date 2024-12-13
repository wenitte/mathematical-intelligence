# 

Source: https://proofwiki.org/wiki/Mapping_from_Preordering_reflects_Ordering

Theorem
Let $\struct {S, \RR}$ be a preordered set.
Then there exists:

an ordered set $\struct {T, \preccurlyeq}$
a mapping $f: S \to T$ such that:
$\RR: = \set {\tuple {x, y}: \map f x \preccurlyeq \map f y}$


Proof
Let $\sim_\RR$ denote the equivalence on $S$ induced by $\RR$:

$x \sim_\RR y$ if and only if $x \mathrel \RR y$ and $y \mathrel \RR x$
Let $\preccurlyeq_\RR$ be the ordering on the quotient set $S / {\sim_\RR}$ by $\RR$:

$\eqclass x {\sim_\RR} \preccurlyeq_\RR \eqclass y {\sim_\RR} \iff x \mathrel \RR y$
where $\eqclass x {\sim_\RR}$ denotes the equivalence class of $x$ under $\sim_\RR$.
Let $f: S \to S / {\sim_\RR}$ be the quotient mapping induced by $\RR$:

$\forall x \in S: \map f x = \eqclass x \RR$

From Preordering induces Ordering we have that $\struct {T, \preccurlyeq}$ is an set with exactly the properties required.
$\blacksquare$


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $41 \ \text {(e)}$




