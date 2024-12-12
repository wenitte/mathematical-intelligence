# 

Source: https://proofwiki.org/wiki/Elements_of_Cross-Relation_Equivalence_Class

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup with cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S_1, \circ {\restriction_1} } \subseteq \struct {S, \circ}$ be a subsemigroup of $S$.
Let $\struct {S_2, \circ {\restriction_2} } \subseteq \struct {C, \circ {\restriction_C} }$ be a subsemigroup of $C$.

Let $\left({S_1 \times S_2, \oplus}\right)$ be the (external) direct product of $\struct {S_1, \circ {\restriction_1} }$ and $\struct {S_2, \circ {\restriction_2} }$, where $\oplus$ is the operation on $S_1 \times S_2$ induced by $\circ {\restriction_1}$ on $S_1$ and $\circ {\restriction_2}$ on $S_2$.

Let $\boxtimes$ be the cross-relation on $S_1 \times S_2$, defined as:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$

Let $\eqclass {\tuple {x, y} } \boxtimes$ be the $\boxtimes$-equivalence class of $\tuple {x, y}$, where $\tuple {x, y} \in S_1 \times S_2$.

Then:
$\forall x, y \in S_1, a, b \in S_2:$

$(1): \quad \eqclass {\tuple {x \circ a, a} } \boxtimes = \eqclass {\tuple {y \circ b, b} } \boxtimes \iff x = y$
$(2): \quad \eqclass {\tuple {x \circ a, y \circ a} } \boxtimes = \eqclass {\tuple {x, y} } \boxtimes$


Proof



\(\text {(1)}: \quad\)









\(\ds \eqclass {\tuple {x \circ a, a} } \boxtimes\)

\(=\)







\(\ds \eqclass {\tuple {y \circ b, b} } \boxtimes\)




















\(\ds \tuple {x \circ a, a}\)

\(\boxtimes\)







\(\ds \tuple {y \circ b, b}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x \circ a \circ b\)

\(=\)







\(\ds y \circ b \circ a\)





Definition of $\boxtimes$














\(\ds \)

\(=\)







\(\ds y \circ a \circ b\)





Commutativity of $\circ$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds y\)





Cancellability of $a \circ b$








\(\text {(2)}: \quad\)









\(\ds \paren {x \circ a} \circ y\)

\(=\)







\(\ds x \circ \paren {a \circ y}\)





as $\circ$ is associative








\(\ds \leadstoandfrom \ \ \)





\(\ds \tuple {x \circ a, y \circ a}\)

\(\boxtimes\)







\(\ds \tuple {x, y}\)





Definition of $\boxtimes$








\(\ds \leadstoandfrom \ \ \)





\(\ds \eqclass {\tuple {x \circ a, y \circ a} } \boxtimes\)

\(=\)







\(\ds \eqclass {\tuple {x, y} } \boxtimes\)









$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




