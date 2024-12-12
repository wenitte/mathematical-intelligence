# 

Source: https://proofwiki.org/wiki/Directed_Suprema_Preserving_Mapping_is_Increasing

Theorem
Let $L = \struct {S, \vee, \preceq}$ be a join semilattice.
Let $f: S \to S$ be a mapping that preserves directed suprema.

Then $f$ is an increasing mapping.


Proof
Let $x, y \in D$ such that

$x \preceq y$
Then by definition of reflexivity:

$\forall a, b \in \set {x, y}: \exists z \in \set {x, y}: a \preceq z \land b \preceq z$
By definition:

$\set {x, y}$ is directed.
By definition of mapping preserves directed suprema:

$f$ preserves the supremum of $\set {x, y}$.
By definition of join semilattice:

$\set {x, y}$ admits a supremum.













\(\ds \map \sup {f \sqbrk {\set {x, y} } }\)

\(=\)







\(\ds \map f {\sup \set {x, y} }\)





Definition of Mapping Preserves Supremum














\(\ds \)

\(=\)







\(\ds \map f {x \vee y}\)





Definition of Join (Order Theory)














\(\ds \)

\(=\)







\(\ds \map f y\)





Preceding iff Join equals Larger Operand



By Image of Doubleton under Mapping:

$f \sqbrk {\set {x, y} } = \set {\map f x, \map f y}$
Thus by definitions of supremum and upper bound:

$\map f x \preceq \map f y$
$\blacksquare$


Sources
Mizar article YELLOW_2:16




