# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Identity_of_Quotient_Structure

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

Let $c \in C$ be arbitrary.
Then:

$\eqclass {\tuple {c, c} } \boxtimes$
is the identity of $T'$.


Proof













\(\ds \paren {x \circ c} \circ y\)

\(=\)







\(\ds x \circ \paren {c \circ y}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x \circ \paren {y \circ c}\)





Definition of Commutative Semigroup








\(\ds \leadsto \ \ \)





\(\ds \eqclass {\tuple {x, y} } \boxtimes \oplus' \eqclass {\tuple {c, c} } \boxtimes\)

\(=\)







\(\ds \eqclass {\tuple {x \circ c, y \circ c} } \boxtimes\)





Definition of $\oplus'$














\(\ds \)

\(=\)







\(\ds \eqclass {\tuple {x, y} } \boxtimes\)





Cancellability of elements of $C$



Hence the result, by definition of identity element.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




