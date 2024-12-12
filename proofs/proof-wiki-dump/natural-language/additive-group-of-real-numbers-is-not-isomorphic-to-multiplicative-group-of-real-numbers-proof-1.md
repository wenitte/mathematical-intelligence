# 

Source: https://proofwiki.org/wiki/Additive_Group_of_Real_Numbers_is_Not_Isomorphic_to_Multiplicative_Group_of_Real_Numbers/Proof_1

Theorem
Let $\struct {\R, +}$ denote the additive group of real numbers.
Let $\struct {\R_{\ne 0}, \times}$ denote the multiplicative group of real numbers.

Then $\struct {\R, +}$ is not isomorphic to $\struct {\R_{\ne 0}, \times}$.


Proof
Consider the element $-1 \in \struct {\R_{\ne 0}, \times}$.
We have that:

$-1 \times -1 = 1$
From Real Multiplication Identity is One it follows that $-1$ is of order $2$ in $\struct {\R_{\ne 0}, \times}$.

From Group Isomorphism Preserves Order of Group Element, it is sufficient to demonstrate that there exists no element of order $2$ in $\struct {\R, +}$.

From Real Addition Identity is Zero, that means finding $x$ such that $x + x = 0$.
But:

$x + x = 0 \implies x = 0$
and as $0$ is the identity of $\struct {\R, +}$, there is indeed no element of order $2$ in $\struct {\R, +}$.
The result follows from Group Isomorphism Preserves Order of Group Element.
$\blacksquare$





