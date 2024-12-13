# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Reals_is_Normal_Subgroup_of_Complex

Theorem
Let $\struct {\R_{\ne 0}, \times}$ be the multiplicative group of real numbers.
Let $\struct {\C_{\ne 0}, \times}$ be the multiplicative group of complex numbers.

Then $\struct {\R_{\ne 0}, \times}$ is a normal subgroup of $\struct {\C_{\ne 0}, \times}$.


Proof
Let $x, y \in \C_{\ne 0}$ such that $x = x_1 + 0 i, y = y_1 + 0 i$.
As $x$ and $y$ are wholly real, we have that $x, y \in \R_{\ne 0}$.
Then $x + y = x_1 y_1 - 0 \cdot 0 + \left({0 \cdot y_1 + x_1 \cdot 0}\right) i = x_1 y_1 + 0i$ which is also wholly real.
Also, the inverse of $x$ is $\dfrac 1 x = \dfrac 1 {x_1} + 0 i$ which is also wholly real.
Thus by the Two-Step Subgroup Test, $\struct {\R_{\ne 0}, \times}$ is a subgroup of $\struct {\C_{\ne 0}, \times}$.
From Non-Zero Complex Numbers under Multiplication form Infinite Abelian Group, $\struct {\C_{\ne 0}, \times}$ is abelian.
The result follows from Subgroup of Abelian Group is Normal.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Examples of groups $\text{(ii)}$
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $4$: Subgroups: Example $4.3$




