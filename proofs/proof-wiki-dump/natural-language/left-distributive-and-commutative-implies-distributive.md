# 

Source: https://proofwiki.org/wiki/Left_Distributive_and_Commutative_implies_Distributive

Theorem
Let $\struct {S, \circ, *}$ be an algebraic structure.
Let the operation $\circ$ be left distributive over the operation $*$.
Let $\circ$ be commutative.

Then $\circ$ is distributive over $*$.


Proof
Let $a, b, c \in S$.
Then














\(\ds \paren {a * b} \circ c\)

\(=\)







\(\ds c \circ \paren {a * b}\)





$\circ$ is commutative














\(\ds \)

\(=\)







\(\ds \paren {c \circ a} * \paren {c \circ b}\)





$\circ$ is left distributive over $*$














\(\ds \)

\(=\)







\(\ds \paren {a \circ c} * \paren {b \circ c}\)





$\circ$ is commutative



So $\circ$ is right distributive over $*$.
Since $\circ$ is both left distributive and right distributive over $*$, it is distributive over $*$.
$\blacksquare$





