# 

Source: https://proofwiki.org/wiki/Equivalence_Class_of_Equal_Elements_of_Cross-Relation

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup with cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S_1, \circ {\restriction_1} } \subseteq \struct {S, \circ}$ be a subsemigroup of $S$.
Let $\struct {S_2, \circ {\restriction_2} } \subseteq \struct {C, \circ {\restriction_C} }$ be a subsemigroup of $C$.

Let $\left({S_1 \times S_2, \oplus}\right)$ be the (external) direct product of $\struct {S_1, \circ {\restriction_1} }$ and $\struct {S_2, \circ {\restriction_2} }$, where $\oplus$ is the operation on $S_1 \times S_2$ induced by $\circ {\restriction_1}$ on $S_1$ and $\circ {\restriction_2}$ on $S_2$.

Let $\boxtimes$ be the cross-relation on $S_1 \times S_2$, defined as:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$

Then:

$\forall c, d \in S_1 \cap S_2: \tuple {c, c} \boxtimes \tuple {d, d}$


Proof
Note that in order for $\tuple {c, c}$ and $\tuple {d, d}$ to be defined, $c$ and $d$ must be in both $S_1$ and $S_2$.
Hence the restriction given:

$\forall c, d \in S_1 \cap S_2$

Then:










\(\ds \forall c, d \in S_1 \cap S_2: \, \)



\(\ds c \circ d\)

\(=\)







\(\ds d \circ c\)





Commutativity of $\circ$








\(\ds \leadsto \ \ \)





\(\ds \tuple {c, c}\)

\(\boxtimes\)







\(\ds \tuple {d, d}\)





Definition of $\boxtimes$



Hence the result.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




