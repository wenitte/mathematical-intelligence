# 

Source: https://proofwiki.org/wiki/Empty_Set_is_Submagma_of_Magma

Theorem
Let $\struct {S, \circ}$ be a magma.
Then:

$\struct {\O, \circ}$ is a submagma of $\struct {S, \circ}$
where $\O$ is the empty set.


Proof
By definition, a magma is an algebraic structure $\struct {S, \circ}$ where $\circ$ is closed.
That is:

$\forall x, y \in S: x \circ y \in S$

By definition, $\struct {T, \circ}$ is a submagma of $S$ if:

$\forall x, y \in T: x \circ y \in T$
But:

$\not \exists x, y \in \O: x \circ y \notin \O$
it follows vacuously that:

$\forall x, y \in \O: x \circ y \in \O$
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.3$




