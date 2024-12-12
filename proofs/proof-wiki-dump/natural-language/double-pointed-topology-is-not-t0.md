# 

Source: https://proofwiki.org/wiki/Double_Pointed_Topology_is_not_T0



Theorem
Let $T_1 = \struct {S, \tau_S}$ be a topological space.
Let $D = \struct {A, \set {\O, A} }$ be the indiscrete topology on an arbitrary doubleton $A = \set {a, b}$.
Let $T = \struct {T_1 \times D, \tau}$ be the double pointed topological space on $T_1$.

Then $T$ is not a $T_0$ (Kolmogorov) space.


Proof 1
By definition, the double pointed topology $\tau$ on $T_1$ is the product topology on $T_1 \times D$.

Let $x \in S$, and consider the point $\tuple {x, a} \in S \times A$.
Then:

$\forall U \in \tau: \tuple {x, a} \in U \implies \tuple {x, b} \in U$
$\forall U \in \tau: \tuple {x, b} \in U \implies \tuple {x, a} \in U$
as $D$ is an indiscrete space.

Hence the result, by definition of $T_0$ (Kolmogorov) space.
$\blacksquare$


Proof 2
By definition, the double pointed topology $\tau$ on $T_1$ is the product topology on $T_1 \times D$.
By definition, $D$ is the indiscrete space on a doubleton.

Aiming for a contradiction, suppose $T$ is a $T_0$ (Kolmogorov) space.
Then from Product Space is $T_0$ iff Factor Spaces are $T_0$ it follows that $D$ is also a $T_0$ (Kolmogorov) space.
But from Indiscrete Non-Singleton Space is not $T_0$, $D$ is not a $T_0$ (Kolmogorov) space.

The result follows by Proof by Contradiction.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Notes: Part $1$: Basic Definitions: Section $2$. Separation Axioms: $1$




