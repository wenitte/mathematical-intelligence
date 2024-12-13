# 

Source: https://proofwiki.org/wiki/Meet_is_Directed_Suprema_Preserving_implies_Meet_of_Suprema_equals_Supremum_of_Meet_of_Directed_Subsets

Theorem
Let $\struct {S, \preceq}$ be an up-complete meet semilattice.
Let $\struct {S \times S, \precsim}$ be the simple order product of $\struct {S, \preceq}$ and $\struct {S, \preceq}$.
Let $f: S \times S \to S$ be a mapping such that:

$\forall s, t \in S: \map f {s, t} = s \wedge t$
and:

$f$ preserves directed suprema.
Let $D_1, D_2$ be directed subsets of $S$.

Then:

$\paren {\sup D_1} \wedge \paren {\sup D_2} = \sup \set {x \wedge y: x \in D_1, y \in D_2}$


Proof
By Up-Complete Product:

$\struct {S \times S, \precsim}$ is up-complete.
By Up-Complete Product/Lemma 1:

$D_1 \times D_2$ is directed subsets of $S \times S$
By definition of mapping preserves directed suprema:

$f$ preserves the supremum of $D_1 \times D_2$
By definition of up-complete:

$D_1 \times D_2$ admits a supremum
and:
$D_1$ and $D_2$ admit suprema.

Thus:














\(\ds \paren {\sup D_1} \wedge \paren {\sup D_2}\)

\(=\)







\(\ds \map f {\sup D_1, \sup D_2}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {\map \sup {D_1 \times D_2} }\)





Supremum of Simple Order Product














\(\ds \)

\(=\)







\(\ds \map \sup {\map {f^\to} {D_1 \times D_2} }\)





Mapping Preserves Supremum














\(\ds \)

\(=\)







\(\ds \sup \set {\map f {x, y}: \tuple {x, y} \in D_1 \times D_2}\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge y: x \in D_1, y \in D_2}\)





Definition of $f$



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:43




