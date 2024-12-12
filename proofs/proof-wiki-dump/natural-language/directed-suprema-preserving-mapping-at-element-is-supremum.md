# 

Source: https://proofwiki.org/wiki/Directed_Suprema_Preserving_Mapping_at_Element_is_Supremum

Theorem
Let $\struct {S, \vee, \wedge, \preceq}$ and $\struct {T, \vee_2, \wedge_2, \precsim}$ be bounded below continuous lattices.
Let $f: S \to T$ be a mapping such that

$f$ preserves directed suprema.
Let $x \in S$.

Then:

$\map f x = \sup \set {\map f w: w \in S \land w \ll x}$


Proof
By definition of continuous:

$x^\ll$ is directed
and

$\struct {S, \vee, \wedge, \preceq}$ is up-complete
and

$\struct {S, \vee, \wedge, \preceq}$ satisfies the Axiom of Approximation.
By definition of mapping preserves directed suprema:

$f$ preserves the supremum of $x^\ll$.
By definition of up-complete:

$x^\ll$ admits a supremum.
Thus














\(\ds \map f x\)

\(=\)







\(\ds \map f {\map \sup {x^\ll} }\)





Axiom of Approximation














\(\ds \)

\(=\)







\(\ds \map \sup {f \sqbrk {x^\ll} }\)





Definition of Mapping Preserves Supremum: Subset














\(\ds \)

\(=\)







\(\ds \map \sup {f \sqbrk {\set {w \in S: w \ll x} } }\)





Definition of Way Below Closure














\(\ds \)

\(=\)







\(\ds \sup \set {\map f w: w \in S \land w \ll x}\)





Definition of Image of Subset under Mapping



$\blacksquare$


Sources
Mizar article WAYBEL17:12




