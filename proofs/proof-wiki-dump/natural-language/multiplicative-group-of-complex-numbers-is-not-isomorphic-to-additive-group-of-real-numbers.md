# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Complex_Numbers_is_not_Isomorphic_to_Additive_Group_of_Real_Numbers

Theorem
Let $\struct {\C_{\ne 0}, \times}$ be the multiplicative group of complex numbers.
Let $\struct {\R, +}$ be the additive group of real numbers.

Then $\struct {\C_{\ne 0}, \times}$ is not isomorphic to $\struct {\R, +}$.


Proof
Aiming for a contradiction, suppose $\struct {\C_{\ne 0}, \times}$ is isomorphic to $\struct {\R, +}$.
Let $\phi: \C_{\ne 0} \to \R$ be an isomorphism.
Note that $\order i = 4$ in $\struct {\C_{\ne 0}, \times}$.
By Group Isomorphism Preserves Order of Group Element:

$\order {\map \phi i} = 4$ in $\struct {\R, +}$
Then $4 \map \phi i = 0$.
So $\map \phi i = 0$.
However $\order 0 = 1$.
Thus there is no order $4$ element in $\struct {\R, +}$, and thus $\map \phi i$ does not exist.
Therefore $\phi$ is not an isomorphism.
Hence the result by Proof by Contradiction.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 6$: Isomorphisms of Algebraic Structures: Exercise $6.9$




