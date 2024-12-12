# 

Source: https://proofwiki.org/wiki/Composition_of_Left_Regular_Representation_with_Right

Theorem
Let $\struct {S, *}$ be a semigroup.
Let $\lambda_x, \rho_y$ be the left and right regular representations of $\struct {S, *}$ with respect to $x$ and $y$ respectively.
Let $\lambda_x \circ \rho_y$, $\rho_y \circ \lambda_x$ etc. be defined as the composition of the mappings $\lambda_x$ and $\rho_y$.

Then $\forall x, y \in S$:

$\lambda_x \circ \rho_y = \rho_y \circ \lambda_x$


Proof
Let $z \in S$.














\(\ds \map {\paren {\lambda_x \circ \rho_y} } z\)

\(=\)







\(\ds \map {\lambda_x} {\map {\rho_y} z}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\lambda_x} {z * y}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds x * \paren {z * y}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {x * z} * y\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map {\rho_y} {x * z}\)





Definition of Right Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\rho_y} {\map {\lambda_x} z}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \map {\paren {\rho_y \circ \lambda_x} } z\)





Definition of Composition of Mappings



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $2$




