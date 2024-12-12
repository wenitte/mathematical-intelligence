# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Cartesian_Product_with_Cancellable_Elements

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup which has cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S \times C, \oplus}$ be the external direct product of $\struct {S, \circ}$ and $\struct {C, \circ {\restriction_C} }$, where $\oplus$ is the operation on $S \times C$ induced by $\circ$ on $S$ and $\circ {\restriction_C}$ on $C$.

That is:

$\forall \tuple {x, y}, \tuple {u, v} \in S \times C: \tuple {x, y} \oplus \tuple {u, v} = \tuple {x \circ u, y \mathop {\circ {\restriction_C} } v}$

Then $\struct {S \times C, \oplus}$ is a commutative semigroup.


Proof
By Cancellable Elements of Semigroup form Subsemigroup, $\struct {C, \circ {\restriction_C} }$ is a subsemigroup of $\struct {S, \circ}$, where $\circ {\restriction_C}$ is the restriction of $\circ$ to $C$.
By Restriction of Commutative Operation is Commutative, as $\struct {C, \circ {\restriction_C} }$ is a substructure of a commutative structure, it is also commutative.

From:

the external direct product preserves the nature of semigroups
the external direct product preserves commutativity
we see that $\struct ({S \times C, \oplus}$ is a commutative semigroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




