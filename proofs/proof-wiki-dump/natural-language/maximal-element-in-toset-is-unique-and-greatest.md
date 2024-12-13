# 

Source: https://proofwiki.org/wiki/Maximal_Element_in_Toset_is_Unique_and_Greatest



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $M$ be a maximal element of $\struct {S, \preceq}$.

Then:

$(1): \quad M$ is the greatest element of $\struct {S, \preceq}$.
$(2): \quad M$ is the only maximal element of $\struct {S, \preceq}$.


Proof
By definition of maximal element:

$\forall y \in S: M \preceq y \implies M = y$
As $\struct {S, \preceq}$ is a totally ordered set, by definition $\preceq$ is a connected.
That is:

$\forall x, y \in S: y \preceq x \lor x \preceq y$
It follows that:

$\forall y \in S: M = y \lor y \preceq M$
But as $M = y \implies y \preceq M$ by definition of $\preceq$, it follows that:

$\forall y \in S: y \preceq M$
which is precisely the definition of greatest element.
Hence $(1)$ holds.
$\Box$

Suppose $M_1$ and $M_2$ are both maximal elements of $S$.
By $(1)$ it follows that both are greatest elements.
It follows from Greatest Element is Unique that $M_1 = M_2$.
That is, $(2)$ holds.
$\blacksquare$


Also see
Minimal Element in Toset is Unique and Smallest
Maximal Element need not be Greatest Element


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): Chapter $1$: Sets and mappings: $\S 1.5$: Ordered Sets
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $6 \ \text {(b)}$




