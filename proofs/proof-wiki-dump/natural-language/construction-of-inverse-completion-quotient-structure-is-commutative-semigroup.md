# 

Source: https://proofwiki.org/wiki/Construction_of_Inverse_Completion/Quotient_Structure_is_Commutative_Semigroup

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

Then:

$\struct {T', \oplus'}$ is a commutative semigroup.


Proof
The quotient epimorphism from $\struct {S \times C, \oplus}$ onto $\struct {T', \oplus'}$ is given by:

$q_\boxtimes: \struct {S \times C, \oplus} \to \struct {T', \oplus'}: \map {q_\boxtimes} {x, y} = \eqclass {\tuple {x, y} } \boxtimes$
where, by definition:










\(\ds \forall \tuple {x_1, y_1}, \tuple {x_2, y_2} \in S \times C: \, \)



\(\ds \)

\(\)







\(\ds \map {q_\boxtimes} {\tuple {x_1, y_1} \oplus \tuple {x_2, y_2} }\)




















\(\ds \)

\(=\)







\(\ds \map {q_\boxtimes} {x_1, y_1} \oplus' \map {q_\boxtimes} {x_2, y_2}\)










By Morphism Property Preserves Closure, as $\oplus$ is closed, then so is $\oplus'$.
By Epimorphism Preserves Associativity, as $\oplus$ is associative, then so is $\oplus'$.
By Epimorphism Preserves Commutativity, as $\oplus$ is commutative, then so is $\oplus'$.

Thus $\struct {T', \oplus'}$  is closed, associative and commutative, and therefore a commutative semigroup.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




