# 

Source: https://proofwiki.org/wiki/Group/Examples/x%2By%2B2_over_Reals



Example of Group
Let $\circ: \R \times \R$ be the operation defined on the real numbers $\R$ as:

$\forall x, y \in \R: x \circ y := x + y + 2$
Then $\struct {\R, \circ}$ is a group whose identity is $-2$.


Proof
Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
$\forall x, y \in \R: x + y + 2 \in \R$
Thus $x \circ y \in \R$ and so $\struct {\R, \circ}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity













\(\ds x \circ \paren {y \circ z}\)

\(=\)







\(\ds x + \paren {y + z + 2} + 2\)




















\(\ds \)

\(=\)







\(\ds x + y + z + 4\)
























\(\ds \paren {x \circ y} \circ z\)

\(=\)







\(\ds \paren {x + y + 2} + z + 2\)




















\(\ds \)

\(=\)







\(\ds x + y + z + 4\)




















\(\ds \)

\(=\)







\(\ds x \circ \paren {y \circ z}\)









Thus $\circ$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $y$ be such that $x \circ y = x$.
Then:














\(\ds x \circ y\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds x + y + 2\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -2\)










Then it is noted that:














\(\ds -2 \circ x\)

\(=\)







\(\ds -2 + x + 2\)




















\(\ds \)

\(=\)







\(\ds x\)










Thus $-2$ is the identity element of $\struct {\R, \circ}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
We have that $-2$ is the identity element of $\struct {\R, \circ}$.
So:














\(\ds x \circ y\)

\(=\)







\(\ds -2\)














\(\ds \leadsto \ \ \)





\(\ds x + y + 2\)

\(=\)







\(\ds -2\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -x - 4\)










Then it is noted that:














\(\ds \paren {-x - 4} \circ x\)

\(=\)







\(\ds -x - 4 + x + 2\)




















\(\ds \)

\(=\)







\(\ds -2\)










Thus every element of $\struct {\R, \circ}$ has an inverse $-x - 4$.
$\Box$

All the group axioms are thus seen to be fulfilled, and so $\struct {\R, \circ}$ is a group.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $1$: Definitions and Examples: Exercise $1 \ \text{(b)}$




