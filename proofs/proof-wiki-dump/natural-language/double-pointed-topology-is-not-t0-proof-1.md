# 

Source: https://proofwiki.org/wiki/Double_Pointed_Topology_is_not_T0/Proof_1

Theorem
Let $T_1 = \struct {S, \tau_S}$ be a topological space.
Let $D = \struct {A, \set {\O, A} }$ be the indiscrete topology on an arbitrary doubleton $A = \set {a, b}$.
Let $T = \struct {T_1 \times D, \tau}$ be the double pointed topological space on $T_1$.

Then $T$ is not a $T_0$ (Kolmogorov) space.


Proof
By definition, the double pointed topology $\tau$ on $T_1$ is the product topology on $T_1 \times D$.

Let $x \in S$, and consider the point $\tuple {x, a} \in S \times A$.
Then:

$\forall U \in \tau: \tuple {x, a} \in U \implies \tuple {x, b} \in U$
$\forall U \in \tau: \tuple {x, b} \in U \implies \tuple {x, a} \in U$
as $D$ is an indiscrete space.

Hence the result, by definition of $T_0$ (Kolmogorov) space.
$\blacksquare$





