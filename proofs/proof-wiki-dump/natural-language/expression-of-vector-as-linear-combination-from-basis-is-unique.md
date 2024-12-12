# 

Source: https://proofwiki.org/wiki/Expression_of_Vector_as_Linear_Combination_from_Basis_is_Unique



Theorem
Let $V$ be a vector space of dimension $n$.
Let $\BB = \set {\mathbf x_1, \mathbf x_2, \ldots, \mathbf x_n}$ be a basis for $V$.
Let $\mathbf x \in V$ be any vector of $V$.

Then $\mathbf x$ can be expressed as a unique linear combination of elements of $\BB$.


This article, or a section of it, needs explaining.In particular: The definition we have of linear combination doesn't really work for this. We probably need to expand that definition.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


General Result
Let $V$ be a vector space over a division ring $R$.
Let $B$ be a basis for $V$.
Let $x \in V$.

Then there is a unique finite subset $C$ of $R \times B$ such that:

$\ds x = \sum_{\tuple {r, v} \mathop \in C} r \cdot v$
$\forall \tuple {r, v} \in C: r \ne 0_R$


Proof
Proof of Existence
By the definition of basis, $\BB$ is a spanning set.
Hence the result, by the definition of a spanning set.
$\Box$


Proof of Uniqueness
Aiming for a contradiction, suppose otherwise, that:

$\ds \sum_{k \mathop = 1}^n \alpha_k \mathbf x_k  = \mathbf x = \sum_{k \mathop = 1}^n \beta_k \mathbf x_k$
where $\alpha_i \ne \beta_i$ for some $1 \le i \le n$.
Then:














\(\ds \sum_{k \mathop = 1}^n \alpha_k \mathbf x_k - \sum_{k \mathop = 1}^n \beta_k \mathbf x_k\)

\(=\)







\(\ds \mathbf x - \mathbf x\)














\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 1}^n \paren {\alpha_k - \beta_k} \mathbf x_k\)

\(=\)







\(\ds \mathbf 0\)









However, we have that $\BB = \set {\mathbf x_1, \mathbf x_2, \ldots, \mathbf x_n}$ is a basis for $V$.
So, by definition, $\BB$ is a linearly independent set.
This means that, for $1 \le i \le n$:

$\alpha_i - \beta_i = 0$
and hence $\alpha_i = \beta_i$ for all $1 \le i \le n$.
This contradicts our assumption that $\alpha_i \ne \beta_i$ for some $i$.
Hence the result, from Proof by Contradiction.
$\blacksquare$


Also see
Definition:Coordinate Vector


Sources
1957: D.E. Rutherford: Vector Methods (9th ed.) ... (previous) ... (next): Chapter $\text I$: Vector Algebra: $\S 1$.
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 4$. Vector Spaces
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Vector Spaces: $\S 35$. Coordinates
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): basis (plural bases)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): basis (plural bases)
For a video presentation of the contents of this page, visit the Khan Academy.




