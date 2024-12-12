# 

Source: https://proofwiki.org/wiki/Circle_Group_is_Group/Proof_4

Theorem
The circle group $\struct {K, \times}$ is a group.


Proof
Consider the complex modulus function $\cmod {\, \cdot \,}: \C \to \R, z \mapsto \cmod z$.
By Complex Modulus is Norm, we have that $\cmod z \ge 0$ for all $z \in \C$, and:

$\cmod z = 0 \iff z = 0$
Let $\C_{\ne 0} := \C \setminus \set 0$ denote the complex numbers without zero.
From Group of Units of Field and Complex Numbers form Field, we have that $\struct {\C_{\ne 0}, \times}$ is a group.
By the above observation, the modulus has a restriction to $\C_{\ne 0}$:

$\cmod {\, \cdot \,}: \C_{\ne 0} \to \R_{>0}, z \mapsto \cmod z$

From $\cmod 1 = 1$ and Modulus of Product, it follows that $\phi$ is in fact a group homomorphism:

$\phi: \struct {C_{\ne 0}, \times} \to \struct {\R_{>0}, \times}, z \mapsto \cmod z$

Now $K$ is by definition the kernel of $\phi$.
Hence, by Kernel of Group Homomorphism is Subgroup, $\struct {K, \times}$ is a subgroup of $\struct {\C_{\ne 0}, \times}$.
$\blacksquare$





