# 

Source: https://proofwiki.org/wiki/Group/Examples/x%2By%2Bxy_over_Reals_less_-1

Example of Group
Let $\circ: \R \times \R$ be the operation defined on the real numbers $\R$ as:

$\forall x, y \in \R: x \circ y := x + y + x y$
Let:

$\R' := \R \setminus \set {-1}$
that is, the set of real numbers without $-1$.
Then $\struct {\R', \circ}$ is a group whose identity is $0$.


Proof
From Monoid Example: Operation Defined as $x + y + x y$ on Real Numbers, $\struct {\R, \circ}$ is a monoid whose identity is $0$.
Let $x \in \R$.
We have that:














\(\ds \paren {-1} \circ x\)

\(=\)







\(\ds \paren {-1} + x +  \paren {-1} \times x\)




















\(\ds \)

\(=\)







\(\ds -1\)




















\(\ds \)

\(=\)







\(\ds x + \paren {-1} + x \times \paren {-1}\)




















\(\ds \)

\(=\)







\(\ds x \circ \paren {-1}\)









demonstrating that $-1$ is a zero for $\circ$ on $\R$.
Thus for $\struct {S, \circ}$ to be a group, where $S \subseteq \R$, it is necessary for $-1 \notin S$.

It has been established that $0$ is the identity of $\struct {\R, \circ}$.
Let $y \in \R'$.
Then:














\(\ds x \circ y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x + y + x y\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -\dfrac x {1 + x}\)









Thus the inverse of $x$ is $-\dfrac x {1 + x}$, which exists for all $x$ except for $x = -1$.

Suppose $x, y \in \R \setminus \set {-1}$ such that $x \circ y = -1$.
Then:














\(\ds x \circ y\)

\(=\)







\(\ds -1\)














\(\ds \leadsto \ \ \)





\(\ds x + y + x y\)

\(=\)







\(\ds -1\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds \dfrac {-\paren {1 + x} } {1 + x}\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds -1\)




















\(\ds \)

\(\notin\)







\(\ds \R \setminus \set {-1}\)










So we have that $\struct {\R', \circ}$ is closed.

Thus all the group axioms are fulfilled, and so $\struct {\R', \circ}$ is a group.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $4$. Groups: Exercise $11$




