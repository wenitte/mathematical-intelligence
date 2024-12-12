# 

Source: https://proofwiki.org/wiki/Expression_of_Vector_as_Linear_Combination_from_Basis_is_Unique/General_Result



Theorem
Let $V$ be a vector space over a division ring $R$.
Let $B$ be a basis for $V$.
Let $x \in V$.

Then there is a unique finite subset $C$ of $R \times B$ such that:

$\ds x = \sum_{\tuple {r, v} \mathop \in C} r \cdot v$
$\forall \tuple {r, v} \in C: r \ne 0_R$


Proof
Existence
The existence of $C$ follows immediately from the definition of a basis.
$\Box$


Uniqueness
Let $C, D$ be finite subsets of $R \times B$ satisfying the requirements.
Let $Q = \set {v: \exists r \in R: \tuple {r, v} \in C \cup D}$.
Let $V' = \map \span Q$.
Then $V'$ is a finite-dimensional vector space with basis $Q$ and $x \in V'$.
Thus the theorem follows from Expression of Vector as Linear Combination from Basis is Unique.


This article, or a section of it, needs explaining.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$





