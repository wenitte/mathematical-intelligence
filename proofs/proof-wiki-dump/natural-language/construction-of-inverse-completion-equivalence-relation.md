# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Equivalence_Relation

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup which has cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S \times C, \oplus}$ be the external direct product of $\struct {S, \circ}$ and $\struct {C, \circ {\restriction_C} }$, where $\oplus$ is the operation on $S \times C$ induced by $\circ$ on $S$ and $\circ {\restriction_C}$ on $C$.

Let $\boxtimes$ be the cross-relation on $S \times C$, defined as:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$

The cross-relation $\boxtimes$ is an equivalence relation on $\struct {S \times C, \oplus}$.


Proof
From Semigroup is Subsemigroup of Itself, $\struct {S, \circ}$ is a subsemigroup of $\struct {S, \circ}$.
Also from Semigroup is Subsemigroup of Itself, $\struct {C, \circ {\restriction_C} }$ is a subsemigroup of $\struct {C, \circ {\restriction_C} }$.
The result follows from Cross-Relation is Equivalence Relation.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




