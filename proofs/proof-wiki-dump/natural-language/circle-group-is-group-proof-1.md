# 

Source: https://proofwiki.org/wiki/Circle_Group_is_Group/Proof_1

Theorem
The circle group $\struct {K, \times}$ is a group.


Proof
First we note that $K \subseteq \C$.
So to show that $K$ is a group it is sufficient to show that $K$ is a subgroup of the multiplicative group of complex numbers $\struct {\C_{\ne 0}, \times}$.

From Complex Multiplication Identity is One, the identity element $1 + 0 i$ is in $K$.
Thus $K \ne \O$.

We now show that $z, w \in K \implies z w \in K$:














\(\ds z, w\)

\(\in\)







\(\ds K\)














\(\ds \leadsto \ \ \)





\(\ds \cmod z\)

\(=\)







\(\ds 1 = \cmod w\)














\(\ds \leadsto \ \ \)





\(\ds \cmod {z w}\)

\(=\)







\(\ds \cmod z \cmod w\)














\(\ds \leadsto \ \ \)





\(\ds z w\)

\(\in\)







\(\ds K\)










Next we see that $z \in K \implies z^{-1} \in K$:

$\cmod z = 1 \implies \cmod {\dfrac 1 z} = 1$

Thus by the Two-Step Subgroup Test:

$K \le \C_{\ne 0}$
Thus $K$ is a group.
$\blacksquare$


Sources
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{II}$: Groups: Subgroups




