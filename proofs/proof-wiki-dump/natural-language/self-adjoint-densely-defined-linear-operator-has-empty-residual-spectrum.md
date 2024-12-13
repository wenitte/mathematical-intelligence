# 

Source: https://proofwiki.org/wiki/Self-Adjoint_Densely-Defined_Linear_Operator_has_Empty_Residual_Spectrum

Theorem
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space.
Let $\struct {\map D T, T}$ be a self-adjoint densely defined linear operator.

Then the residual spectrum $\map {\sigma_r} T$ is empty.


Proof
Let $\struct {\map D {T^\ast}, T^\ast}$ be the adjoint of $\struct {\map D T, T}$. 
Since $\struct {\map D T, T}$ is self-adjoint, we have: 

$\struct {\map D {T^\ast}, T^\ast} = \struct {\map D T, T}$
Suppose that $\map {\sigma_r} T$ is non-empty.
Then there exists $\lambda \in \map {\sigma_r} T$.
That is, there exists $\lambda \in \C$ such that $T - \lambda I$ is injective, but such that: 

$\map {\paren {T - \lambda I} } {\map D T}$ is not everywhere dense in $\HH$.
Let:

$R = \overline {\map {\paren {T - \lambda I} } {\map D T} }$
Then from Linear Subspace Dense iff Zero Orthocomplement, we have: 

$R^\bot \ne \set 0$
where $R^\bot$ is the orthocomplement of $R$.
Then there exists some $y \in R^\bot$ such that $y \ne 0$. 
Then: 

$\innerprod {\paren {T - \lambda I} x} y = 0$ for all $x \in \map D T$
from the definition of the orthocomplement.
From Inner Product is Sesquilinear, we have: 

$\innerprod {T x} y = \lambda \innerprod x y$ for each $x \in \map D T$.
As shown in Riesz Representation Theorem (Hilbert Spaces):

$x \mapsto \innerprod x y$ is a bounded linear functional.
So:

$x \mapsto \innerprod {T x} y$ is a bounded linear functional.
So from the definition of the adjoint, we have: 

$y \in \map D {T^\ast}$
We therefore have: 














\(\ds 0\)

\(=\)







\(\ds \innerprod {T x} y - \lambda \innerprod x y\)




















\(\ds \)

\(=\)







\(\ds \innerprod x {T^\ast y} - \innerprod x {\overline \lambda y}\)





Inner Product is Sesquilinear, Definition of Adjoint of Densely-Defined Linear Operator














\(\ds \)

\(=\)







\(\ds \innerprod x {T y} - \innerprod x {\overline \lambda y}\)





Definition of Self-Adjoint Densely-Defined Linear Operator














\(\ds \)

\(=\)







\(\ds \innerprod x {T y - \overline \lambda y}\)





Inner Product is Sesquilinear



Since $\map D T$ is everywhere dense in $H$, there exists a sequence in $\map D T$ with: 

$x_n \to T y - \overline \lambda y$
Then: 

$\innerprod {x_n} {T y - \overline \lambda y}$ for each $n \in \N$.
So, taking $n \to \infty$ and using Inner Product is Continuous:

$\innerprod {T y - \overline \lambda y} {T y - \overline \lambda y} = 0$
So from the definition of the inner product, we have: 

$T y = \overline \lambda y$
So $\lambda$ is in the point spectrum $\map {\sigma_p} T$ of $T$. 
From Point Spectrum of Symmetric Densely-Defined Linear Operator is Real, we have: 

$\overline \lambda \in \R$
so from Complex Number equals Conjugate iff Wholly Real:

$\overline \lambda = \lambda$
So $\lambda \in \map {\sigma_p} T$.
But then: 

$\paren {T - \lambda I} y = \map {\paren {T - \lambda I} } 0$
with $y \ne 0$.
So $T - \lambda I$ is not injective.
So we have a contradiction, and so $\map {\sigma_r} T = \O$.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $25.3$: The Spectrum of Closed Unbounded Self-Adjoint Operators




