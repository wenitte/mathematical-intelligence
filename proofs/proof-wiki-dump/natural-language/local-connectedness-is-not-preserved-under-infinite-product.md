# 

Source: https://proofwiki.org/wiki/Local_Connectedness_is_not_Preserved_under_Infinite_Product

Theorem
The property of local connectedness is not preserved under the operation of forming an infinite product space.


Proof
Let $T = \struct {\CC, \tau_d}$ be the Cantor space.
Let $A_n = \struct {\set {0, 2}, \tau_n}$ be the discrete space of the two points $0$ and $2$.
Let $\ds A = \prod_{n \mathop = 1}^\infty A_n$.
Let $T' = \struct {A, \tau}$ be the product space where $\tau$ is the product topology on $A$.

From Cantor Space as Countably Infinite Product, $T'$ is homeomorphic to $T$.
From Totally Disconnected and Locally Connected Space is Discrete, we have that $A_n$ is locally connected.
But we also have that the Cantor Space is not Locally Connected.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $29$. The Cantor Set: $9$




