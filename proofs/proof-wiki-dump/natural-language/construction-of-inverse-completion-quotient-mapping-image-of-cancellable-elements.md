# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Quotient_Mapping/Image_of_Cancellable_Elements

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

The set $C'$ of cancellable elements of the semigroup $S'$ is $\psi \sqbrk C$.


Proof
We have Morphism Property Preserves Cancellability.
Thus:

$c \in C \implies \map \psi c \in C'$
So by Image of Subset under Mapping is Subset of Image:

$\psi \sqbrk C \subseteq C'$

From above, $\psi$ is an isomorphism.


This article, or a section of it, needs explaining.In particular: Above where?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence, also from Morphism Property Preserves Cancellability:

$c' \in C' \implies \map {\psi^{-1} } {c'} \in C$
So by Preimage of Subset is Subset of Preimage:

$\psi^{-1} \sqbrk {C'} \subseteq C$
Hence by definition of set equality:

$\psi \sqbrk C = C'$
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




