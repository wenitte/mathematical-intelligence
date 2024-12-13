# 

Source: https://proofwiki.org/wiki/Identity_of_Subsemigroup_of_Group

Definition
Let $\struct {G, \circ}$ be a group whose identity element is $e$.
Let $\struct {H, \circ}$ be a subsemigroup of $\struct {G, \circ}$.

If $\struct {H, \circ}$ has an identity element, then that identity is $e$.


Proof
From the Cancellation Laws, every element of $\struct {G, \circ}$ is cancellable.
From Identity is only Idempotent Cancellable Element, there is only one element $x$ of $\struct {G, \circ}$ satisfying $x \circ x = x$, and that is $e$.
As $x \in H \implies x \in G$, the same applies to $\struct {H, \circ}$.
So if there is an element in $\struct {H, \circ}$ such that $x \circ x = x$, it must be $e$.
Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {II}$: New Structures from Old: $\S 8$: Compositions Induced on Subsets: Theorem $8.3$




