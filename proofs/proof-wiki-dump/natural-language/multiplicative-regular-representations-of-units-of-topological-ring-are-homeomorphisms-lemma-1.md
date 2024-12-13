# 

Source: https://proofwiki.org/wiki/Multiplicative_Regular_Representations_of_Units_of_Topological_Ring_are_Homeomorphisms/Lemma_1

Theorem
Let $\struct {R, + , \circ}$ be a ring.

For all $y \in R$, let $\lambda_y$ and $\rho_y$ denote the left and right regular representations of $\struct {R, \circ}$ with respect to $y$.

Let $I_{_R} : R \to R$ be the identity mapping on $R$.
For all $y \in R$, let $y * I_{_R} : R \to R$ be the mapping defined by:

$\forall z \in R: \map {\paren{y * I_{_R}}} z = y * \map {I_{_R}} z$
For all $y \in R$, let $I_{_R} * y : R \to R$ be the mapping defined by:

$\forall z \in R: \map {\paren{I_{_R} * y}} z = \map {I_{_R}} z * y$

Then:

$\forall y \in R: \lambda_y = y * I_{_R} \text { and } \rho_y = I_{_R} * y$


Proof
Let $y \in R$.










\(\ds \forall z \in R: \, \)



\(\ds \map {\paren {y * I_{_R} } } z\)

\(=\)







\(\ds y * \map {I_{_R} } z\)





Definition of $y * I_{_R}$














\(\ds \)

\(=\)







\(\ds y * z\)





Definition of Identity Mapping $I_{_R}$














\(\ds \)

\(=\)







\(\ds \map {\lambda_y} z\)





Definition of Left Regular Representation $\lambda_y$



From Equality of Mappings:

$\lambda_y = y * I_{_R}$











\(\ds \forall z \in R: \, \)



\(\ds \map {\paren {I_{_R} * y} } z\)

\(=\)







\(\ds \map {I_{_R} } z * y\)





Definition of $I_{_R} * y$














\(\ds \)

\(=\)







\(\ds z * y\)





Definition of Identity Mapping $I_{_R}$














\(\ds \)

\(=\)







\(\ds \map {\rho_y} z\)





Definition of Right Regular Representation $\rho_y$



From Equality of Mappings:

$\rho_y = I_{_R} * y$
$\blacksquare$





