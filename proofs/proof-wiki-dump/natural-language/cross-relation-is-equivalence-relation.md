# 

Source: https://proofwiki.org/wiki/Cross-Relation_is_Equivalence_Relation



Theorem
Let $\struct {S, \circ}$ be a commutative semigroup with cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S_1, \circ {\restriction_1} } \subseteq \struct {S, \circ}$ be a subsemigroup of $S$.
Let $\struct {S_2, \circ {\restriction_2} } \subseteq \struct {C, \circ {\restriction_C} }$ be a subsemigroup of $C$.

Let $\left({S_1 \times S_2, \oplus}\right)$ be the (external) direct product of $\struct {S_1, \circ {\restriction_1} }$ and $\struct {S_2, \circ {\restriction_2} }$, where $\oplus$ is the operation on $S_1 \times S_2$ induced by $\circ {\restriction_1}$ on $S_1$ and $\circ {\restriction_2}$ on $S_2$.

Let $\boxtimes$ be the cross-relation on $S_1 \times S_2$, defined as:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$

Then $\boxtimes$ is an equivalence relation on $\struct {S_1 \times S_2, \oplus}$.


Proof
Reflexivity
$\forall \tuple {x_1, y_1} \in S_1 \times S_2: x_1 \circ y_1 = x_1 \circ y_1 \implies \tuple {x_1, y_1} \boxtimes \tuple {x_1, y_1}$
So $\boxtimes$ is a reflexive relation.
$\Box$


Symmetry













\(\ds \tuple {x_1, y_1}\)

\(\boxtimes\)







\(\ds \tuple {x_2, y_2}\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_2\)

\(=\)







\(\ds x_2 \circ y_1\)














\(\ds \leadsto \ \ \)





\(\ds x_2 \circ y_1\)

\(=\)







\(\ds x_1 \circ y_2\)





$\circ$ is commutative








\(\ds \leadsto \ \ \)





\(\ds \tuple {x_2, y_2}\)

\(\boxtimes\)







\(\ds \tuple {x_1, y_1}\)









So $\boxtimes$ is a symmetric relation.
$\Box$


Transitivity













\(\ds \tuple {x_1, y_1}\)

\(\boxtimes\)







\(\ds \tuple {x_2, y_2}\)


















\(\, \ds \land \, \)

\(\ds \tuple {x_2, y_2}\)

\(\boxtimes\)







\(\ds \tuple {x_3, y_3}\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_2\)

\(=\)







\(\ds x_2 \circ y_1\)


















\(\, \ds \land \, \)

\(\ds x_2 \circ y_3\)

\(=\)







\(\ds x_3 \circ y_2\)














\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_3 \circ y_2\)

\(=\)







\(\ds x_1 \circ y_2 \circ y_3\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds x_2 \circ y_1 \circ y_3\)





substituting $x_2 \circ y_1$ for $x_1 \circ y_2$














\(\ds \)

\(=\)







\(\ds x_2 \circ y_3 \circ y_1\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds x_3 \circ y_2 \circ y_1\)





substituting $x_3 \circ y_2$ for $x_2 \circ y_3$














\(\ds \)

\(=\)







\(\ds x_3 \circ y_1 \circ y_2\)





$\circ$ is commutative








\(\ds \leadsto \ \ \)





\(\ds x_1 \circ y_3\)

\(=\)







\(\ds x_3 \circ y_1\)





as $y_2 \in S_2$, therefore $y_2 \in C$, and so is cancellable for $\circ$








\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1, y_1}\)

\(\boxtimes\)







\(\ds \tuple {x_3, y_3}\)









So $\boxtimes$ is a transitive relation.
$\Box$

All the criteria are therefore seen to hold for $\boxtimes$ to be an equivalence relation.
$\blacksquare$


Also see
Examples
Cross-Relation on Natural Numbers is Equivalence Relation
Cross-Relation on Real Numbers is Equivalence Relation


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




