# 

Source: https://proofwiki.org/wiki/Equivalent_Statements_for_Vector_Subspace_Dimension_One_Less



Theorem
Let $K$ be a field.
Let $M$ be a subspace of the $n$-dimensional vector space $K^n$.

The following statements are equivalent:

$(1): \quad \map \dim M = n - 1$
$(2): \quad M$ is the kernel of a nonzero linear form
$(3): \quad$ There exists a sequence $\sequence {\alpha_n} $ of scalars, not all of which are zero, such that:
$M = \set {\tuple {\lambda_1, \ldots, \lambda_n} \in K^n: \alpha_1 \lambda_1 + \cdots + \alpha_n \lambda_n = 0}$


Existence of Scalar for Vector Subspace Dimension One Less
Suppose the above hold.

Let $\sequence {\beta_n}$ be a sequence of scalars such that:

$M = \set {\tuple {\lambda_1, \ldots, \lambda_n} \in K^n: \beta_1 \lambda_1 + \cdots + \beta_n \lambda_n = 0}$

Then there is a non-zero scalar $\gamma$ such that:

$\forall k \in \closedint 1 n: \beta_k = \gamma \alpha_k$


Proof
Let $M^\circ$ be the annihilator of $M$.
Let $N = M^{\circ}$.
By Results Concerning Annihilator of Vector Subspace, $N$ is one-dimensional and $M = \map {J^{-1} } {N^\circ}$.
Let $\phi \in N: \phi \ne 0$.
Then $N$ is the set of all scalar multiples of $\phi$.
Because:

$\map {J^{-1} } {N^\circ} = \set {x \in K^n: \forall \psi \in N: \map \psi x = 0}$
it follows that $\map {J^{-1} } {N^\circ}$ is simply the kernel of $\phi$.
Hence $(1)$ implies $(2)$.
By Rank Plus Nullity Theorem, $(2)$ also implies $(1)$.
$\Box$

Suppose $\sequence {\alpha_n}$ is any sequence of scalars.
Let $\sequence { {e_n}'}$ be the ordered basis of $\paren {K^n}^*$ dual to the standard ordered basis of $K^n$.
Let $\ds \phi = \sum_{k \mathop = 1}^n \alpha_k e'_k$.
Then, by simple calculation:

$\map \ker \phi = \set {\tuple {\lambda_1, \ldots, \lambda_n}: \alpha_1 \lambda_1 + \cdots + \alpha_n \lambda_n = 0}$

This article, or a section of it, needs explaining.In particular: Prove the above.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
It follows that:

$\phi \ne 0 \iff \exists k \in \closedint 1 n: \alpha_k \ne 0$
Thus $(2)$ and $(3)$ are equivalent.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text V$: Vector Spaces: $\S 28$: Linear Transformations: Theorem $28.11$




