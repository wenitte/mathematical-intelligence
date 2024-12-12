# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Quotient_Mapping_is_Injective

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

Then $\psi: S \to T'$ is an injection, and does not depend on the particular element $a$ chosen.


Proof













\(\ds \map \psi x\)

\(=\)







\(\ds \map \psi y\)














\(\ds \leadsto \ \ \)

\(\ds \forall a \in C: \, \)



\(\ds \eqclass {\tuple {x \circ a, a} } \boxtimes\)

\(=\)







\(\ds \eqclass {\tuple {y \circ a, a} } \boxtimes\)





Definition of $\eqclass {\tuple {x, y} } \boxtimes$








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Construction of Inverse Completion: Members of Equivalence Classes



The result follows by the definition of injection.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




