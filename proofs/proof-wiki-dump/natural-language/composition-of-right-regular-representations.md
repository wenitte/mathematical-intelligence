# 

Source: https://proofwiki.org/wiki/Composition_of_Right_Regular_Representations

Theorem
Let $\struct {S, *}$ be a semigroup.
Let $\rho_x$ be the right regular representation of $\struct {S, *}$ with respect to $x$.
Let $\rho_x \circ \rho_y$ be defined as the composition of the mappings $\rho_x$ and $\rho_y$.

Then $\forall x, y \in S$:

$\rho_x \circ \rho_y = \rho_{y * x}$


Proof
Let $z \in S$.














\(\ds \map {\paren {\rho_x \circ \rho_y} } z\)

\(=\)







\(\ds \map {\rho_x} {\map {\rho_y} z}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\rho_x} {z * y}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {z * y} * x\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds z * \paren {y * x}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map {\rho_{y * x} } z\)





Definition of Right Regular Representation



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $2$




