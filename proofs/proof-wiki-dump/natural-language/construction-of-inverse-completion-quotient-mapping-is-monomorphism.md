# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Quotient_Mapping_is_Monomorphism

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

The mapping $\psi: S \to T'$ is a monomorphism.


Proof
We have that this quotient mapping $\psi: S \to T'$ is an injection.

Let $x, y \in S$. Then:














\(\ds \map \psi x \oplus' \map \psi y\)

\(=\)







\(\ds \eqclass {\tuple {x \circ a, a} } \boxtimes \oplus' \eqclass {\tuple {y \circ a, a} } \boxtimes\)





Definition of $\psi$














\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x \circ a, a} \oplus' \tuple {y \circ a, a} } \boxtimes\)





Definition of $\oplus'$














\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x \circ a \circ y \circ a, a \circ a} } \boxtimes\)





Definition of $\boxtimes$














\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {\paren {x \circ y} \circ \paren {a \circ a}, a \circ a} } \boxtimes\)





Commutativity of $\circ$














\(\ds \)

\(=\)







\(\ds \map \psi {x \circ y}\)





as $a \circ a \in C$




So $\map \psi {x \circ y} = \map \psi x \oplus' \map \psi y$, and the morphism property is proven.
Thus $\psi$ is an injective homomorphism, and so by definition a monomorphism.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




