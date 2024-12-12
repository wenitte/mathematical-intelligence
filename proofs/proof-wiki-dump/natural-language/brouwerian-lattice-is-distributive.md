# 

Source: https://proofwiki.org/wiki/Brouwerian_Lattice_is_Distributive

Theorem
Let $\struct {S, \preceq}$ be a Brouwerian lattice.

Then $\struct {S, \preceq}$ is a distributive lattice


Proof
Let $x, y, z \in S$.
By Brouwerian Lattice iff Shift Mapping is Lower Adjoint:

$\forall x \in S, f: S \to S: \paren {\forall s \in S: \map f s = x \wedge s} \implies f$ is a lower adjoint
Define a mapping $f: S \to S$:

$\forall s \in S: \map f s = x \wedge s$
Then:

$f$ is a lower adjoint
By Lower Adjoint Preserves All Suprema:

$f$ preserves all suprema
By definition of preserves all suprema:

$f$ preserves the supremum of $\set {y, z}$
By definition of lattice:

$\set {y, z}$ admits a supremum
By preserves the supremum of set:

$\map \sup {\map {f^\to} {\set {y, z} } } = \map f {\sup \set {y, z} }$
Thus














\(\ds x \wedge \paren {y \vee z}\)

\(=\)







\(\ds \map f {y \vee z}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \map f {\sup \set {y, z} }\)





Definition of Join














\(\ds \)

\(=\)







\(\ds \map \sup {\map {f^\to} {\set {y, z} } }\)




















\(\ds \)

\(=\)







\(\ds \map \sup {\set {\map f y, \map f z} }\)





Definition of Image of Subset under Mapping














\(\ds \)

\(=\)







\(\ds \sup \set {x \wedge y, x \wedge z}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \paren {x \wedge y} \vee \paren {x \wedge z}\)





Definition of Join



Thus by definition:

$\struct {S, \preceq}$ is a distributive lattice
$\blacksquare$


Sources
1980: G. Gierz, K.H. Hofmann, K. Keimel, J.D. Lawson, M.W. Mislove and D.S. Scott: A Compendium of Continuous Lattices
Mizar article WAYBEL_1:66




