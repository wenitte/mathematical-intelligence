# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Image_of_Quotient_Mapping_is_Subsemigroup

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup which has cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S \times C, \oplus}$ be the external direct product of $\struct {S, \circ}$ and $\struct {C, \circ {\restriction_C} }$, where $\oplus$ is the operation on $S \times C$ induced by $\circ$ on $S$ and $\circ {\restriction_C}$ on $C$.

Let $\boxtimes$ be the cross-relation on $S \times C$, defined as:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$
This cross-relation is a congruence relation on $S \times C$.

Let the quotient structure defined by $\boxtimes$ be:

$\struct {T', \oplus'} := \struct {\dfrac {S \times C} \boxtimes, \oplus_\boxtimes}$
where $\oplus_\boxtimes$ is the operation induced on $\dfrac {S \times C} \boxtimes$ by $\oplus$.

Let the mapping $\psi: S \to T'$ be defined as:

$\forall x \in S: \map \psi x = \eqclass {\tuple {x \circ a, a} } \boxtimes$

Let $S'$ be the image $\psi \sqbrk S$ of $S$.
Then $\struct {S', \oplus'}$ is a subsemigroup of $\struct {T', \oplus'}$.


Proof
We have that $S'$ is the image $\psi \sqbrk S$ of $S$.
For $\struct {S', \oplus'}$ to be a subsemigroup of $\struct {T', \oplus'}$, by Subsemigroup Closure Test we need to show that $\struct {S', \oplus'}$ is closed.
Let $x, y \in S'$.
Then $x = \map \phi {x'}, y = \map \phi {y'}$ for some $x', y' \in S$.
But as $\phi$ is an isomorphism, it obeys the morphism property.
So $x \oplus' y = \map \phi {x'} \oplus' \map \phi {y'} = \map \phi {x' \circ y'}$.
Hence $x \oplus' y$ is the image of $x' \circ y' \in S$ and hence $x \oplus' y \in S'$.
Thus by the Subsemigroup Closure Test, $\struct {S', \oplus'}$ is a subsemigroup of $\struct {T', \oplus'}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




