# 

Source: https://proofwiki.org/wiki/Multiplicative_Regular_Representations_of_Units_of_Topological_Ring_are_Homeomorphisms



Theorem
Let $\struct{R, + , \circ, \tau}$ be a topological ring with unity $1_R$.
For all $y \in R$, let $\lambda_y$ and $\rho_y$ denote the left and right regular representations of $\struct{R, \circ}$ with respect to $y$.

Let $x \in R$ be a unit of $R$ with product inverse $x^{-1}$.

Then $\lambda_x, \, \rho_x: \struct{R, \tau} \to \struct{R, \tau}$ are homeomorphisms with inverse mappings $\lambda_{x^{-1} }, \, \rho_{x^{-1} }: \struct{R, \tau} \to \struct{R, \tau}$ respectively.


Proof
Let $I_{_R} : R \to R$ be the identity mapping on $R$.
For all $y \in R$, let $y * I_{_R} : R \to R$ be the mapping defined by:

$\forall z \in R: \map {\paren {y * I_{_R} } } z = y * \map {I_{_R}} z$
For all $y \in R$, let $I_{_R} * y : R \to R$ be the mapping defined by:

$\forall z \in R: \map {\paren {I_{_R} * y}} z = \map {I_{_R}} z * y$


Lemma 1
$\forall y \in R: \lambda_y = y * I_{_R} \text { and } \rho_y = I_{_R} * y$
$\Box$

From Identity Mapping is Continuous, $I_{_R} : \struct{R, \tau} \to \struct{R, \tau}$ is continuous.
From Multiple Rule for Continuous Mappings into Topological Ring:

$x * I_{_R}, \, I_{_R} * x, x^{-1} * I_{_R}, \,I_{_R} * x^{-1}$ are continuous.


Lemma 2
$x * I_R$ is a bijection and $x^{-1} * I_R$ is the inverse of $x * I_R$
$I_R * x$ is a bijection and $I_R * x^{-1}$ is the inverse of $I_R * x$
$\Box$

By definition of homeomorphism, $\lambda_x, \,\rho_x  : \struct{R, \tau} \to \struct{R, \tau}$ are homeomorphisms with inverse mappings $\lambda_{x^{-1} }, \,\rho_{x^{-1} }  : \struct{R, \tau} \to \struct{R, \tau}$ respectively.
$\blacksquare$





