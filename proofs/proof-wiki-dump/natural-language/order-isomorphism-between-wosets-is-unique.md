# 

Source: https://proofwiki.org/wiki/Order_Isomorphism_between_Wosets_is_Unique


It has been suggested that this page or section be merged into Well-Ordered Classes are Isomorphic at Most Uniquely.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mergeto}} from the code.
Theorem
Let $\struct {S_1, \preceq_1}$ and $\struct {S_2, \preceq_2}$ be wosets.
Let $\struct {S_1, \preceq_1} \cong \struct {S_2, \preceq_2}$, that is, let $\struct {S_1, \preceq_1}$ and $\struct {S_2, \preceq_2}$ be order isomorphic.

Then there is exactly one mapping $f: S_1 \to S_2$ such that $f$ is an order isomorphism.


Proof
Let $f: S_1 \to S_2$ and $g: S_1 \to S_2$ both be order isomorphisms.
By Inverse of Order Isomorphism is Order Isomorphism, the inverse $f^{-1}$ is also an order isomorphism.
Let $h = f^{-1} \circ g$ be the composition of $f^{-1}$ and $g$, which, by Composite of Order Isomorphisms is Order Isomorphism, is itself an order isomorphism.
So, by Order Isomorphism from Woset onto Subset:

$\forall x \in S_1: x \preceq_1 \map h x$
Now we apply $f$ to $S_1$ and see that:

$\forall x \in S_1: \map f x \preceq_2 \map f {\map h x} = \map g x$

In a similar way we can show that:

$\forall x \in S_1: \map g x \preceq_2 \map f x$
Hence $f = g$ and the proof is complete.
$\blacksquare$


Sources
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.7$: Well-Orderings and Ordinals: Theorem $1.7.3$




