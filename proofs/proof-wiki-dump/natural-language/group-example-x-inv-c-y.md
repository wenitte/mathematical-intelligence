# 

Source: https://proofwiki.org/wiki/Group_Example:_x_inv_c_y



Theorem
Let $\struct {G, \circ}$ be a group.
Let $c \in G$.
We define a new operation $*$ on $G$ as:

$\forall x, y \in G: x * y = x \circ c^{-1} \circ y$

Then $\struct {G, *}$ is a group.


Proof
Group Axiom $\text G 0$: Closure
Let $x, y \in G$.
Then:

$\forall x * y = x \circ c^{-1} \circ y \in G$ as $c^{-1} \in G$
thus demonstrating that $\struct {G, *}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
Let $x, y, z \in G$.














\(\ds x * \paren {y * z}\)

\(=\)







\(\ds x \circ c^{-1} \circ \paren {y \circ c^{-1} \circ z}\)





Definition of $*$














\(\ds \)

\(=\)







\(\ds \paren {x \circ c^{-1} \circ y} \circ c^{-1} \circ z\)





Associativity of $\circ$














\(\ds \)

\(=\)







\(\ds \paren {x * y} * z\)





Definition of $*$



thus demonstrating that $\struct {G, *}$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $x \in G$.














\(\ds x * c\)

\(=\)







\(\ds x \circ c^{-1} \circ c = x\)




















\(\ds c * x\)

\(=\)







\(\ds c \circ c^{-1} \circ x = x\)









So $c$ serves as the identity in $\struct {G, *}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let $x \in G$.
We need to find $y \in G$ such that $x * y = c \implies x \circ c^{-1} \circ y = c$.














\(\ds x * y\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds x \circ c^{-1} \circ y\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds c^{-1} \circ y\)

\(=\)







\(\ds x^{-1} \circ c\)














\(\ds \leadsto \ \ \)





\(\ds y\)

\(=\)







\(\ds c \circ x^{-1} \circ c\)










Thus the inverse of $x$ under the operation $*$ is $c \circ x^{-1} \circ c$ where $x^{-1}$ is the inverse of $x$ under $\circ$.
$\Box$

All of the group axioms have been demonstrated to be fulfilled, and so $\struct {G, *}$ is a group.
$\blacksquare$


Also see
Definition:Heap


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $3$: Elementary consequences of the definitions: Exercise $3$




