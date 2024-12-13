# 

Source: https://proofwiki.org/wiki/Minimal_Element_in_Toset_is_Unique_and_Smallest



Theorem
Let $\struct {S, \preceq}$ be a totally ordered set.
Let $m$ be a minimal element of $\struct {S, \preceq}$.

Then:

$(1): \quad m$ is the smallest element of $\struct {S, \preceq}$
$(2): \quad m$ is the only minimal element of $\struct {S, \preceq}$.


Proof
By definition of minimal element:

$\forall y \in S: y \preceq m \implies m = y$
As $\struct {S, \preceq}$ is a totally ordered set, by definition $\preceq$ is connected.
That is:

$\forall x, y \in S: y \preceq x \lor x \preceq y$
It follows that:

$\forall y \in S: m = y \lor m \preceq y$
But as $m = y \implies m \preceq y$ by definition of $\preceq$, it follows that:

$\forall y \in S: m \preceq y$
which is precisely the definition of smallest element.
Hence $(1)$ holds.
$\Box$

Suppose $m_1$ and $m_2$ are both minimal elements of $S$.
By $(1)$ it follows that both are smallest elements.
It follows from Smallest Element is Unique that $m_1 = m_2$.
That is, $(2)$ holds.
$\blacksquare$


Also see
Maximal Element in Toset is Unique and Greatest


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $6 \ \text {(b)}$




