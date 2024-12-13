# 

Source: https://proofwiki.org/wiki/Intersection_of_Subalgebras_is_Subalgebra

Theorem
Let $K$ be a field.
Let $\struct {A, +, \cdot, \circ}_K$ be an algebra over $K$.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ be an $I$-indexed family of subalgebras of $A$.
Let:

$\ds B = \bigcap_{\alpha \mathop \in I} A_\alpha$

Then $B$ is a subalgebra of $A$.


Proof
From Set of Linear Subspaces is Closed under Intersection, $\struct {B, +, \cdot}_K$ is a vector subspace of $\struct {A, +, \cdot}_K$.
Now let $x, y \in B$.
That is, $x, y \in A_\alpha$ for each $\alpha \in I$.
Since $A_\alpha$ is a subalgebras of $A$ for each $\alpha \in I$, we have:

$x y \in A_\alpha$ for each $\alpha \in I$.
So $x y \in B$. 
So $B$ is a subalgebra of $A$.
$\blacksquare$





