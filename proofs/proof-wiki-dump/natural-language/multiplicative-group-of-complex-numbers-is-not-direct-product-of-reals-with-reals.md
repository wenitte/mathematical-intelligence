# 

Source: https://proofwiki.org/wiki/Multiplicative_Group_of_Complex_Numbers_is_not_Direct_Product_of_Reals_with_Reals

Theorem
Let $\struct {\C_{\ne 0}, \times}$ be the multiplicative group of complex numbers.
Let $\struct {\R_{\ne 0}, \times}$ be the multiplicative group of real numbers.

Then the direct product $\struct {\R_{\ne 0}, \times} \times \struct {\R_{\ne 0}, \times}$ is not isomorphic with $\struct {\C_{\ne 0}, \times}$.


Proof
Let $\tuple {a, b}$ and $\tuple {c, d}$ be pairs of non-zero real numbers:

$\tuple {a, b} \in \R_{\ne 0} \times \R_{\ne 0}$
$\tuple {c, d} \in \R_{\ne 0} \times \R_{\ne 0}$
Then by definition of group direct product:

$\tuple {a, b} \times \tuple {c, d} = \tuple {a \times c, b \times d}$

However, by interpreting $\tuple {a, b}$ and $\tuple {c, d}$ as complex numbers:

$\tuple {a, b} \times \tuple {c, d} = \tuple {a \times c - b \times d, b \times c + a \times d}$
by definition of complex multiplication.

Hence the result.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Direct Products




