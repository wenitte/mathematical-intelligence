# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Complex_Numbers_is_not_Isomorphic_to_Multiplicative_Group_of_Real_Numbers

Theorem
Let $\struct {\C_{\ne 0}, \times}$ be the multiplicative group of complex numbers.
Let $\struct {\R_{\ne 0}, \times}$ be the multiplicative group of real numbers.

Then $\struct {\C_{\ne 0}, \times}$ is not isomorphic to $\struct {\R_{\ne 0}, \times}$.


Proof
Aiming for a contradiction, suppose $\struct {\C_{\ne 0}, \times}$ is isomorphic to $\struct {\R_{\ne 0}, \times}$.
Let $\phi: \C_{\ne 0} \to \R_{\ne 0}$ be an isomorphism.
Note that $\order i = 4$ in $\struct {\C_{\ne 0}, \times}$.
By Group Isomorphism Preserves Order of Group Element:

$\order {\map \phi i} = 4$ in $\struct {\R_{\ne 0}, \times}$
Then $\paren {\map \phi i}^4 = 1$.
So $\paren {\map \phi i}^2 = \pm 1$.
In $\R$ we must have $\paren {\map \phi i}^2 \ge 0$.
Hence $\paren {\map \phi i}^2 = 1$.
This gives $\map \phi i = \pm 1$.
However $\order 1 = 1$ and $\order {-1} = 2$ in $\struct {\R_{\ne 0}, \times}$.
Thus there is no order $4$ element in $\struct {\R_{\ne 0}, \times}$, and thus $\map \phi i$ does not exist.
Therefore $\phi$ is not an isomorphism.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.9$




