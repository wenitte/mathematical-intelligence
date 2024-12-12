# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Quotient_Structure_is_Inverse_Completion

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup which has cancellable elements.
Let $C \subseteq S$ be the set of cancellable elements of $S$.

Let $\struct {S \times C, \oplus}$ be the external direct product of $\struct {S, \circ}$ and $\struct {C, \circ {\restriction_C} }$, where:

$\circ {\restriction_C}$ is the restriction of $\circ$ to $C \times C$
and:

$\oplus$ is the operation on $S \times C$ induced by $\circ$ on $S$ and $\circ {\restriction_C}$ on $C$.

Let $\boxtimes$ be the congruence relation $\boxtimes$ defined on $\struct {S \times C, \oplus}$ by:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$
Let the quotient structure defined by $\boxtimes$ be:

$\struct {T', \oplus'} := \struct {\dfrac {S \times C} \boxtimes, \oplus_\boxtimes}$
where $\oplus_\boxtimes$ is the operation induced on $\dfrac {S \times C} \boxtimes$ by $\oplus$.

$T'$ is an inverse completion of its subsemigroup $S'$.


Proof
Every cancellable element of $S'$ is invertible in $T'$, from Invertible Elements in Quotient Structure.
$T' = S' \cup \paren {C'}^{-1}$ is a generator for the semigroup $T'$, from Generator for Quotient Structure.
Hence the result, by definition of inverse completion
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




