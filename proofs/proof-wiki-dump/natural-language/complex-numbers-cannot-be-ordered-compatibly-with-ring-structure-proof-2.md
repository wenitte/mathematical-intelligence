# 

Source: https://proofwiki.org/wiki/Complex_Numbers_cannot_be_Ordered_Compatibly_with_Ring_Structure/Proof_2

Theorem
Let $\struct {\C, +, \times}$ be the field of complex numbers.
There exists no total ordering on $\struct {\C, +, \times}$ which is compatible with the structure of $\struct {\C, +, \times}$.


Proof
Aiming for a contradiction, suppose such a total ordering $\preceq$ exists.

By the definition of a total ordering, $\preceq$ is connected.
That is:

$0 \preceq i \lor i \preceq 0$
Using Proof by Cases, we will prove that:

$0 \preceq -1$


Case 1
Assume that $0 \preceq i$.
By definition of an ordering compatible with the ring structure of $\C$:

$\forall x, y \in \C: \left({0 \preceq x \land 0 \preceq y}\right) \implies 0 \preceq x \times y$
Substituting $x = i$ and $y = i$ gives:

$0 \preceq i \times i$
Simplifying:

$0 \preceq -1$
which is the result required.


Case 2
Assume that $i \preceq 0$.
By definition of compatibility with addition:

$\forall x, y, z \in \C: x \preceq y \implies \paren {x + z} \preceq \paren {y + z}$
Substituting $x = i$, $y = 0$, $z = -i$ gives:

$i + \paren {-i} \preceq 0 + \paren {-i}$
Simplifying:

$0 \preceq -i$
By definition of an ordering compatible with the ring structure of $\C$:

$\forall x, y \in \C: \paren {0 \preceq x \land 0 \preceq y} \implies 0 \preceq x \times y$
Substituting $x = -i$ and $y = -i$ gives:

$0 \preceq \paren {-i} \times \paren {-i}$
Simplifying:

$0 \preceq -1$

This has been demonstrated to follow from both cases, and so by Proof by Cases:

$0 \preceq -1$
$\Box$

By definition of an ordering compatible with the ring structure of $\C$:

$\forall x, y \in \C: \paren {0 \preceq x \land 0 \preceq y} \implies 0 \preceq x \times y$
Substituting $x = -1$ and $y = -1$:

$0 \preceq \paren {-1} \times \paren {-1}$
Simplifying:

$0 \preceq 1$
By definition of compatibility with addition:

$\forall x, y, z \in \C: x \preceq y \implies \paren {x + z} \preceq \paren {y + z}$
Substituting $x = 0$, $y = 1$, $z = -1$ gives:

$0 + \paren {-1} \preceq 1 + \paren {-1}$
Simplifying:

$-1 \preceq 0$

From the definition of ordering:

$\forall a, b \in \C: \paren {a \preceq b \land b \preceq a} \implies a = b$
Substituting $a = -1$ and $b = 0$ gives:

$-1 = 0$
which is a contradiction.
Hence, from Proof by Contradiction, there can be no such ordering.
$\blacksquare$


Historical Note
The fact that Complex Numbers cannot be Ordered Compatibly with Ring Structure was realized by Leonhard Paul Euler.





