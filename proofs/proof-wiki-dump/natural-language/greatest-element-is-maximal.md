# 

Source: https://proofwiki.org/wiki/Greatest_Element_is_Maximal



Theorem
Let $\struct {S, \preceq}$ be an ordered set which has a greatest element.
Let $M$ be the greatest element of $\struct {S, \preceq}$.

Then $M$ is a maximal element.


Proof
By definition of greatest element:

$\forall y \in S: y \preceq M$
Suppose $M \preceq y$.
As $\preceq$ is an ordering, $\preceq$ is by definition antisymmetric.
Thus it follows by definition of antisymmetry that $M = y$.
That is:

$M \preceq y \implies M = y$
which is precisely the definition of a maximal element.
$\blacksquare$


Also see
Smallest Element is Minimal


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $23$. The Field of Rational Numbers
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.5$: Ordered Sets
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations




