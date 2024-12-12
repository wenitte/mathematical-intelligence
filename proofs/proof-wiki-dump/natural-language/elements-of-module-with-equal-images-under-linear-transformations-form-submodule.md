# 

Source: https://proofwiki.org/wiki/Elements_of_Module_with_Equal_Images_under_Linear_Transformations_form_Submodule



Theorem
Let $G$ and $H$ be $R$-modules.
Let $\phi$ and $\psi$ be linear transformations from $G$ into $H$.

Then the set $S = \set {x \in G: \map \phi x = \map \psi x}$ is a submodule of $G$.


Proof
Let $x, y \in S$.
Let $\lambda \in R$.

Then:














\(\ds \map \phi {x + y}\)

\(=\)







\(\ds \map \phi x + \map \phi y\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \map \psi x + \map \psi y\)





$x, y \in S$














\(\ds \)

\(=\)







\(\ds \map \psi {x + y}\)





Definition of Linear Transformation














\(\ds \map \phi {\lambda \circ x}\)

\(=\)







\(\ds \lambda \circ \map \phi x\)





Definition of Linear Transformation














\(\ds \)

\(=\)







\(\ds \lambda \circ \map \psi x\)





$x \in S$














\(\ds \)

\(=\)







\(\ds \map \psi {\lambda \circ x}\)





Definition of Linear Transformation



Hence $x + y, \lambda \circ x \in S$.
By Submodule Test, $S$ is a submodule of $G$.
$\blacksquare$


Also see
Elements of Group with Equal Images under Homomorphisms form Subgroup


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {V}$: Vector Spaces: $\S 28$. Linear Transformations: Theorem $28.3$




