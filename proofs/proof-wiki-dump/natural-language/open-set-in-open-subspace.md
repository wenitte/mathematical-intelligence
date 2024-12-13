# 

Source: https://proofwiki.org/wiki/Open_Set_in_Open_Subspace

Theorem
Let $X$ be a topological space.
Let $U\subset X$ be an open subset.
Let $V\subset U$ be a subset.

Then $V$ is open in $U$ if and only if $V$ is open in $X$.


Proof
Let $V$ be open in $X$.
By Intersection with Subset is Subset, $V\cap U = V$.
By definition of topological subspace, $V$ is open in $U$.

Let $V$ be open in $U$.
By definition of topological subspace, there exists an open subset $W\subset X$ with $V=U\cap W$.
Because $U$ and $W$ are open in $X$, $V=U\cap W$ is open in $X$.
$\blacksquare$


Also see
Closed Set in Closed Subspace




