# 

Source: https://proofwiki.org/wiki/Magma_Subset_Product_with_Self



Theorem
Let $\struct {S, \circ}$ be a magma.
Let $T \subseteq S$.

Then $\struct {T, \circ}$ is a magma if and only if $T \circ T \subseteq T$, where $T \circ T$ is the subset product of $T$ with itself.


Proof
By definition:

$T \circ T = \set {x = a \circ b: a, b \in T}$


Necessary Condition
Let $\struct {T, \circ}$ be a magma.
Then $T$ is closed.
That is:

$\forall x, y \in T: x \circ y \in T$
Thus:

$x \circ y \in T \circ T \implies x \circ y \in T$
$\Box$


Sufficient Condition
Let $T \circ T \subseteq T$.
Then:

$x \circ y \in T \circ T \implies x \circ y \in T$
That is, $T$ is closed.
Therefore $\struct {T, \circ}$ is a magma by definition.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 9$: Compositions Induced on the Set of All Subsets




