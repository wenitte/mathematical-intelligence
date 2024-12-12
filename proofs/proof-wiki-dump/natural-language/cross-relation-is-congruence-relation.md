# 

Source: https://proofwiki.org/wiki/Cross-Relation_is_Congruence_Relation

Theorem
Let $\struct {S, \circ}$ be a commutative semigroup with cancellable elements.
Let $\struct {C, \circ {\restriction_C} } \subseteq \struct {S, \circ}$ be the subsemigroup of cancellable elements of $\struct {S, \circ}$, where $\circ {\restriction_C}$ denotes the restriction of $\circ$ to $C$.

Let $\struct {S_1, \circ {\restriction_1} } \subseteq \struct {S, \circ}$ be a subsemigroup of $S$.
Let $\struct {S_2, \circ {\restriction_2} } \subseteq \struct {C, \circ {\restriction_C} }$ be a subsemigroup of $C$.

Let $\left({S_1 \times S_2, \oplus}\right)$ be the (external) direct product of $\struct {S_1, \circ {\restriction_1} }$ and $\struct {S_2, \circ {\restriction_2} }$, where $\oplus$ is the operation on $S_1 \times S_2$ induced by $\circ {\restriction_1}$ on $S_1$ and $\circ {\restriction_2}$ on $S_2$.

Let $\boxtimes$ be the cross-relation on $S_1 \times S_2$, defined as:

$\tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2} \iff x_1 \circ y_2 = x_2 \circ y_1$

The cross-relation $\boxtimes$ is a congruence relation on $\struct {S_1 \times S_2, \oplus}$.


Proof
From Cross-Relation is Equivalence Relation we have that $\boxtimes$ is an equivalence relation.

We now need to show that:














\(\ds \tuple {x_1, y_1}\)

\(\boxtimes\)







\(\ds \tuple {x_2, y_2}\)


















\(\, \ds \land \, \)

\(\ds \tuple {u_1, v_1}\)

\(\boxtimes\)







\(\ds \tuple {u_2, v_2}\)














\(\ds \leadsto \ \ \)





\(\ds \paren {\tuple {x_1, y_1} \oplus \tuple {u_1, v_1} }\)

\(\boxtimes\)







\(\ds \paren {\tuple {x_2, y_2} \oplus \tuple {u_2, v_2} }\)










First we note that:




\(\text {(1)}: \quad\)









\(\ds \tuple {x_1, y_1} \boxtimes \tuple {x_2, y_2}\)

\(\iff\)







\(\ds x_1 \circ y_2 = y_1 \circ x_2\)










\(\text {(2)}: \quad\)









\(\ds \tuple {u_1, v_1} \boxtimes \tuple {u_2, v_2}\)

\(\iff\)







\(\ds u_1 \circ v_2 = v_1 \circ u_2\)










Then:














\(\ds \paren {x_1 \circ u_1} \circ \paren {y_2 \circ v_2}\)

\(=\)







\(\ds x_1 \circ \paren {u_1 \circ y_2 } \circ v_2\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x_1 \circ \paren { y_2 \circ u_1 } \circ v_2\)





Commutativity of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x_1 \circ y_2} \circ \paren {u_1 \circ v_2}\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds \paren {y_1 \circ x_2} \circ \paren {v_1 \circ u_2}\)





from $(1)$ and $(2)$














\(\ds \)

\(=\)







\(\ds \paren {x_2 \circ y_1} \circ \paren {u_2 \circ v_1}\)





Commutativity of $\circ$














\(\ds \)

\(=\)







\(\ds x_2 \circ \paren {y_1 \circ u_2} \circ v_1\)





Semigroup Axiom $\text S 1$: Associativity














\(\ds \)

\(=\)







\(\ds x_2 \circ \paren {u_2 \circ y_1} \circ v_1\)





Commutativity of $\circ$








\(\ds \leadsto \ \ \)





\(\ds \paren {x_1 \circ u_1} \circ \paren {y_2 \circ v_2}\)

\(=\)







\(\ds \paren {x_2 \circ u_2} \circ \paren {y_1 \circ v_1}\)





Semigroup Axiom $\text S 1$: Associativity








\(\ds \leadsto \ \ \)





\(\ds \tuple {x_1 \circ u_1, y_1 \circ v_1}\)

\(\boxtimes\)







\(\ds \tuple {x_2 \circ u_2, y_2 \circ v_2}\)





Definition of $\boxtimes$








\(\ds \leadsto \ \ \)





\(\ds \paren {\tuple {x_1, y_1} \oplus \tuple {u_1, v_1} }\)

\(\boxtimes\)







\(\ds \paren {\tuple {x_2, y_2} \oplus \tuple {u_2, v_2} }\)





Definition of $\oplus$




So $\boxtimes$ is a congruence relation on $\struct {S \times C, \oplus}$.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {IV}$: Rings and Fields: $\S 20$: The Integers




