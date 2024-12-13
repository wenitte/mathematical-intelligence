# 

Source: https://proofwiki.org/wiki/Meet-Continuous_implies_Shift_Mapping_Preserves_Directed_Suprema

Theorem
Let $\mathscr S = \struct {S, \vee, \wedge, \preceq}$ be a meet-continuous lattice.
Let $x \in S$.
Let $f: S \to S$ be a mapping such that:

$\forall y \in S: \map f y = x \wedge y$

Then:

$f$ preserves directed suprema.


Proof
Let $D$ be a directed subset of $S$ such that

$D$ admits a supremum.
By Singleton is Directed and Filtered Subset:

$\set x$ is directed.
By Up-Complete Product/Lemma 1:

$\set x \times D$ is directed in the simple order product $\struct {S \times S, \precsim}$ of $\mathscr S$ and $\mathscr S$.
Define a mapping $g: S \times S \to S$:

$\forall s, t \in S: \map g {s, t} = s \wedge t$
By Meet-Continuous iff Meet Preserves Directed Suprema:

$g$ preserves directed suprema.
By definition of meet-continuous:

$\mathscr S$ is up-complete.
By Up-Complete Product:

$\struct {S \times S, \precsim}$ is up-complete.
By definition of up-complete:

$\set x \times D$ admits a supremum.
Thus














\(\ds \map \sup {\map {f^\to} D}\)

\(=\)







\(\ds \sup \sety {\map f d: d \in D}\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge d: d \in D}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \sup \set {\map g {y, d}: y \in \set x, d \in D}\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map \sup {\map {g^\to} {\set x \times D} }\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \map g {\map \sup {\set x \times D} }\)





Definition of Mapping Preserves Supremum of Subset














\(\ds \)

\(=\)







\(\ds \map g {\sup \set x, \sup D}\)





Supremum of Simple Order Product














\(\ds \)

\(=\)







\(\ds \map g {x, \sup D}\)





Supremum of Singleton














\(\ds \)

\(=\)







\(\ds x \wedge \sup D\)





Definition of $g$














\(\ds \)

\(=\)







\(\ds \map f {\sup D}\)





Definition of $f$



$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_2:Lm1




