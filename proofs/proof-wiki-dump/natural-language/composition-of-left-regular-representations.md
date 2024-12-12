# 

Source: https://proofwiki.org/wiki/Composition_of_Left_Regular_Representations

Theorem
Let $\struct {S, *}$ be a semigroup.
Let $\lambda_x$ be the left regular representation of $\struct {S, *}$ with respect to $x$.
Let $\lambda_x \circ \lambda_y$ be defined as the composition of the mappings $\lambda_x$ and $\lambda_y$.

Then $\forall x, y \in S$:

$\lambda_x \circ \lambda_y = \lambda_{x * y}$


Proof
Let $z \in S$.














\(\ds \map {\lambda_x \circ \lambda_y} z\)

\(=\)







\(\ds \map {\lambda_x} {\map {\lambda_y} z}\)





Definition of Composition of Mappings














\(\ds \)

\(=\)







\(\ds \map {\lambda_x} {y * z}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds x * \paren {y * z}\)





Definition of Left Regular Representation














\(\ds \)

\(=\)







\(\ds \paren {x * y} * z\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \map {\lambda_{x * y} } z\)





Definition of Left Regular Representation



$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: An Introduction to Groups: Exercise $2$




