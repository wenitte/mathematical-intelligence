# 

Source: https://proofwiki.org/wiki/B-Algebra_is_Quasigroup

Theorem
Let $\struct {X, \circ}$ be a $B$-algebra.

Then $\struct {X, \circ}$ is a quasigroup.


Proof
By the definition of a quasigroup it must be shown that $\forall x \in X$ the left and right regular representations $\lambda_x$ and $\rho_x$ are permutations on $X$.
As $\struct {X, \circ}$ is a magma:

$\forall x \in X$ the codomain of $\lambda_x$ and $\rho_x$ is $X$.
Hence it is sufficient to prove that $\lambda_x$ and $\rho_x$ are bijections.

We have that:

$B$-Algebras are left cancellable
$B$-Algebras are right cancellable
Cancellable elements have injective regular representations.
Therefore:

$\forall x \in X$: $\lambda_x$ and $\rho_x$ are injective mappings.

We also have that regular representations of $B$-algebras are surjective.
Therefore: 

$\forall x \in X$: $\lambda_x$ and $\rho_x$ are both injective and surjective mappings.
Hence by definition are $\lambda_x$ and $\rho_x$ bijections for all $x \in X$.
$\blacksquare$


Also see
Quasigroup is not necessarily B-Algebra where it is demonstrated that the converse does not necessarily hold.




