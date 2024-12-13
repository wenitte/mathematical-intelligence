# 

Source: https://proofwiki.org/wiki/Mapping_at_Element_is_Supremum_implies_Mapping_is_Increasing

Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ be a lattice.
Let $\struct {T, \vee_2, \wedge_2, \precsim}$ be a complete lattice.
Let $f: S \to T$ be a mapping such that:

$\forall x \in S: \map f x = \sup \set {\map f w: w \in S \land w \ll x}$

Then $f$ is an increasing mapping.


Proof
Let $x, y \in S$ such that:

$x \preceq y$
By Preceding implies Way Below Closure is Subset of Way Below Closure:

$x^\ll \subseteq y^\ll$
By definitions of image of set and way below closure:

$f \sqbrk {x^\ll} = \set {\map f w: w \in S \land w \ll x}$
and

$f \sqbrk {y^\ll} = \set {\map f w: w \in S \land w \ll y}$
where $f \sqbrk {x^\ll}$ denotes the image of $x^\ll$ under $f$.
By Image of Subset under Mapping is Subset of Image:

$f \sqbrk {x^\ll} \subseteq f \sqbrk {y^\ll}$
Thus














\(\ds \map f x\)

\(=\)







\(\ds \map \sup {f \sqbrk {x^\ll} }\)





by hypothesis














\(\ds \)

\(\precsim\)







\(\ds \map \sup {f \sqbrk {y^\ll} }\)





Supremum of Subset














\(\ds \)

\(=\)







\(\ds \map f y\)





by hypothesis



$\blacksquare$


Sources
Mizar article WAYBEL17:13




