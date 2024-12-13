# 

Source: https://proofwiki.org/wiki/Group/Examples/x%2By_over_1%2Bxy



Theorem
Let $G = \set {x \in \R: -1 < x < 1}$ be the set of all real numbers whose absolute value is less than $1$.
Let $\circ: G \times G \to \R$ be the binary operation defined as:

$\forall x, y \in G: x \circ y = \dfrac {x + y} {1 + x y}$

The algebraic structure $\struct {G, \circ}$ is a group.


Isomorphic to Real Numbers
$\struct {G, \circ}$ is isomorphic to the additive group of real numbers $\struct {\R, +}$.


Proof
Let $-1 < x, y, z < 1$.
We check the group axioms in turn:


Group Axiom $\text G 1$: Associativity













\(\ds \paren {x \circ y} \circ z\)

\(=\)







\(\ds \frac {\frac {x + y} {1 + x y} + z} {1 + \frac {x + y} {1 + xy} z}\)




















\(\ds \)

\(=\)







\(\ds \frac {x + y + z + x y z} {1 + x y + x z + y z}\)






















\(\ds x \circ \paren {y \circ z}\)

\(=\)







\(\ds \frac {x + \frac {y + z} {1 + y z} } {1 + x \frac {y + z} {1 + y z} }\)




















\(\ds \)

\(=\)







\(\ds \frac {x + y + z + x y z} {1 + x y + x z + y z}\)




















\(\ds \)

\(=\)







\(\ds \paren {x \circ y} \circ z\)









Thus $\circ$ has been shown to be associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element













\(\ds x\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x + y} {1 + x y}\)

\(=\)







\(\ds \frac {0 + y} {1 + 0 y}\)




















\(\ds \)

\(=\)







\(\ds \frac y 1\)




















\(\ds \)

\(=\)







\(\ds y\)










Similarly, putting $y = 0$ we find $x \circ y = x$.
So $0$ is the identity.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element













\(\ds x \circ -x\)

\(=\)







\(\ds \frac {x + \paren {-x} } {1 + x \paren {-x} }\)




















\(\ds \)

\(=\)







\(\ds 0\)










Similarly, putting $x = -y$ gives us $\paren {-y} \circ y = 0$.
So each $x$ has an inverse $-x$.
$\Box$


Group Axiom $\text G 0$: Closure
First note that:

$-1 < x, y < 1 \implies x y > -1 \implies 1 + x y > 0$
Next:














\(\ds -1\)

\(<\)







\(\ds x, y < 1\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \paren {1 - x} \paren {1 - y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 + x y - \paren {x + y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac {1 + x y - \paren {x + y} } {1 + x y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac {1 + x y} {1 + x y} - \frac {x + y} {1 + x y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 - \frac {x + y} {1 + x y}\)














\(\ds \leadsto \ \ \)





\(\ds \frac {x + y} {1 + x y}\)

\(<\)







\(\ds 1\)










Finally:














\(\ds -1\)

\(<\)







\(\ds x, y < 1\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \paren {1 + x} \paren {1 + y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 + x y + \paren {x + y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac {1 + x y + \paren {x + y} } {1 + x y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds \frac {1 + x y} {1 + x y} + \frac {x + y} {1 + x y}\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds 1 + \frac {x + y} {1 + x y}\)














\(\ds \leadsto \ \ \)





\(\ds -1\)

\(<\)







\(\ds \frac {x + y} {1 + x y}\)










Thus:

$-1 < x, y < 1 \implies -1 < x \circ y < 1$
and we see that in this range, $\circ$ is closed.
$\Box$

Thus the given set and operation form a group.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Definition of Group Structure: $\S 26 \lambda$




