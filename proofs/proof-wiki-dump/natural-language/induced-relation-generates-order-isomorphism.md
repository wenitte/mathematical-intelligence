# 

Source: https://proofwiki.org/wiki/Induced_Relation_Generates_Order_Isomorphism

Theorem
Let $\struct {A_1, \preceq_1}$ be an ordered set.
Let $\phi: A_1 \to A_2$ be a bijection.
Let:

$\preceq_2 \mathop{:=} \set {\tuple {\map \phi x, \map \phi y}: x \in A_1 \land y \in A_1 \land x \mathop{\preceq_1} y}$

Then $\phi: \struct {A_1, \preceq_1} \to \struct {A_2, \preceq_2}$ is an order isomorphism.


Proof
Take any $x, y \in A_1$ such that $x \preceq_1 y$.
Since $x, y \in A_1$, it follows by the definition of a mapping that:

$\map \phi x, \map \phi y \in A_2$

So $x \in A_1$ and $y \in A_1$ and $x \preceq_1 y$.
It follows from the definition of $\preceq_2$ that:

$\map \phi x \preceq_2 \map \phi y$

Conversely, suppose that:

$\map \phi x \preceq_2 \map \phi y$
By the definition of $\preceq_2$, it follows that:

$x \preceq_1 y$

Therefore, the biconditional holds:

$x \preceq_1 y \iff \map \phi x \preceq_2 \map \phi y$

By definition, it follows that:

$\phi: \struct {A_1, \preceq_1} \to \struct {A_2, \preceq_2}$
is an order isomorphism.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 6.33$




