# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Invertible_Elements_in_Quotient_Structure

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

Every cancellable element of $S'$ is invertible in $T'$.


Proof
From Identity of Quotient Structure, $\struct {T', \oplus'}$ has an identity, and it is $\eqclass {\tuple {c, c} } \boxtimes$ for any $c \in C$.
Call this identity $e_{T'}$.

Let the mapping $\psi: S \to T'$ be defined as:

$\forall x \in S: \map \psi x = \eqclass {\tuple {x \circ a, a} } \boxtimes$

From Image of Cancellable Elements in Quotient Mapping:

$C' = \psi \sqbrk C$
So:














\(\ds x'\)

\(\in\)







\(\ds C'\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in C: \, \)



\(\ds x'\)

\(=\)







\(\ds \map \psi x\)





as $\psi$ is a surjection








\(\ds \leadsto \ \ \)

\(\ds \forall a \in C: \, \)



\(\ds x'\)

\(=\)







\(\ds \eqclass {\tuple {x \circ a, a} } \boxtimes\)





Definition of $\psi$




The inverse of $x'$ is $\eqclass {\tuple {a, a \circ x} } \boxtimes$, as follows:














\(\ds a \circ x\)

\(\in\)







\(\ds C\)





Cancellable Elements of Semigroup form Subsemigroup














\(\ds a \circ a \circ x\)

\(\in\)







\(\ds C\)





Cancellable Elements of Semigroup form Subsemigroup








\(\ds \leadsto \ \ \)





\(\ds \eqclass {\tuple {x \circ a, a} } \boxtimes \oplus' \eqclass {\tuple {a, a \circ x} } \boxtimes\)

\(=\)







\(\ds \eqclass {\tuple {x \circ a \circ a, a \circ a \circ x} } \boxtimes\)





Definition of $\oplus'$














\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {a \circ a \circ x, a \circ a \circ x} } \boxtimes\)





Commutativity of $\circ$














\(\ds \)

\(=\)







\(\ds e_{T'}\)





Identity of Quotient Structure




thus showing that the inverse of $\eqclass {\tuple {x \circ a, a} } \boxtimes$ is $\eqclass {\tuple {a, a \circ x} } \boxtimes$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




