# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Quotient_Structure



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


Quotient Structure is Commutative Semigroup
$\struct {T', \oplus'}$ is a commutative semigroup.


Quotient Mapping is Injective
Let the mapping $\psi: S \to T'$ be defined as:

$\forall x \in S: \map \psi x = \eqclass {\tuple {x \circ a, a} } \boxtimes$

Then $\psi: S \to T'$ is an injection, and does not depend on the particular element $a$ chosen.


Quotient Mapping is Monomorphism
The mapping $\psi: S \to T'$ is a monomorphism.


Image of Quotient Mapping is Subsemigroup
Let $S'$ be the image $\psi \sqbrk S$ of $S$.
Then $\struct {S', \oplus'}$ is a subsemigroup of $\struct {T', \oplus'}$.


Quotient Mapping to Image is Isomorphism
Let $S'$ be the image $\psi \sqbrk S$ of $S$.
Then $\psi$ is an isomorphism from $S$ onto $S'$.


Image of Cancellable Elements in Quotient Mapping
The set $C'$ of cancellable elements of the semigroup $S'$ is $\psi \sqbrk C$.


Proof
From the defined equivalence relation, we have that:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$
is a congruence relation on $\struct {S \times C, \oplus}$.

From the definition of the members of the equivalence classes:

$(1) \quad \forall x, y \in S, a, b \in C: \tuple {x \circ a, a} \boxtimes \tuple {y \circ b, b} \iff x = y$
$(2) \quad \forall x, y \in S, a, b \in C: \eqclass {\tuple {x \circ a, y \circ a} } \boxtimes = \eqclass {\tuple {x, y} } \boxtimes$

From the definition of the equivalence class of equal elements:

$(3) \quad \forall c, d \in C: \tuple {c, c} \boxtimes \tuple {d, d}$
where $\eqclass {\tuple {x, y} } \boxtimes$ is the equivalence class of $\tuple {x, y}$ under $\boxtimes$.
Hence we are justified in asserting the existence of the quotient structure:

$\struct {T', \oplus'} = \struct {\dfrac {S \times C} \boxtimes, \oplus_\boxtimes}$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




