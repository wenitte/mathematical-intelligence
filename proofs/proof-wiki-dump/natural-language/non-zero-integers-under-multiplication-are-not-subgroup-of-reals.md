# 

Source: https://proofwiki.org/wiki/Non-Zero_Integers_under_Multiplication_are_not_Subgroup_of_Reals

Theorem
Let $\struct {\Z_{\ne 0}, \times}$ denote the algebraic structure formed by the set of non-zero integers under multiplication.
Let $\struct {\R_{\ne 0}, \times}$ denote the algebraic structure formed by the set of non-zero real numbers under multiplication.

Then, while $\struct {\Z_{\ne 0}, \times}$ is closed, it is not a subgroup of $\struct {\R_{\ne 0}, \times}$.


Proof
We have that Non-Zero Real Numbers under Multiplication form Group.
We also have that the set of non-zero integers $\Z_{\ne 0}$ form a subset of $\R_{\ne 0}$.

From Non-Zero Integers Closed under Multiplication:

$\forall a, b \in \Z_{\ne 0}: a \times b \in \Z_{\ne 0}$
We have that:

$\forall x \in \Z_{\ne 0}: 1 \times x= x = x \times 1$
and so $1$ is the identity of $\struct {\Z_{\ne 0}, \times}$.

But for $x \in \Z_{\ne 0}: x \ne 1$, there exists no $y \in \Z_{\ne 0}: x \times y = 1$.
Thus $\struct {\Z_{\ne 0}, \times}$ does not have inverses for all $x \in \Z_{\ne 0}$.
Thus, by definition, $\struct {\Z_{\ne 0}, \times}$ is not a group.
It follows that $\struct {\Z_{\ne 0}, \times}$ is not a subgroup of $\struct {\R_{\ne 0}, \times}$.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $5$: Subgroups: Exercise $4$




