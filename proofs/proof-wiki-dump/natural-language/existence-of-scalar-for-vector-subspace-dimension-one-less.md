# 

Source: https://proofwiki.org/wiki/Existence_of_Scalar_for_Vector_Subspace_Dimension_One_Less

Theorem
Let $K$ be a field.
Let $M$ be a subspace of the $n$-dimensional vector space $K^n$.
Let $\map \dim M = n - 1$.
Let $\sequence {\beta_n}$ be a sequence of scalars such that:

$M = \set {\tuple {\lambda_1, \ldots, \lambda_n} \in K^n: \beta_1 \lambda_1 + \cdots + \beta_n \lambda_n = 0}$

Then there is a non-zero scalar $\gamma$ such that:

$\forall k \in \closedint 1 n: \beta_k = \gamma \alpha_k$


Proof
Let $\sequence { {e_n}'}$ be the ordered basis of $\paren {K^n}^*$ dual to the standard ordered basis of $K^n$.
Let $M = \map \ker \psi$, where $\ds \psi = \sum_{k \mathop = 1}^n \beta_k {e_k}'$.
From Equivalent Statements for Vector Subspace Dimension One Less:

$\psi = M^\circ$
As $M^\circ$ is one-dimensional and since $\psi \ne 0$, it follows that:

$\exists \gamma \ne 0: \psi = \gamma \phi$
Therefore:

$\forall k \in \closedint 1 n: \beta_k = \gamma \alpha_k$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text V$: Vector Spaces: $\S 28$: Linear Transformations: Theorem $28.11$




