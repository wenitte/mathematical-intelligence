# 

Source: https://proofwiki.org/wiki/Idempotent_Magma_Element_forms_Singleton_Submagma

Theorem
Let $\struct {S, \circ}$ be a magma.
Let $x \in S$ be an idempotent element of $\struct {S, \circ}$.
Then $\struct {\set x, \circ}$ is a submagma of $\struct {S, \circ}$.


Proof
By Singleton of Element is Subset:

$x \in S \iff \set x \subseteq S$
By the definition of idempotence:

$x \circ x = x \in \set x$
Thus $\set x$ is a subset of $S$ which is closed under $\circ$.
By the definition of submagma, the result follows.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Example $8.3$




