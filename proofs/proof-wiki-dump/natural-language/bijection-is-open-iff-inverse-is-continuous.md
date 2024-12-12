# 

Source: https://proofwiki.org/wiki/Bijection_is_Open_iff_Inverse_is_Continuous



Theorem
Let $T_1 = \struct {S_1, \tau_1}$ and $T_2 = \struct {S_2, \tau_2}$ be topological spaces.
Let $f: T_1 \to T_2$ be a bijection.

Then $f$ is open if and only if $f^{-1}$ is continuous.


Proof
Let $f$ be a bijection.
Let $g := f^{-1}$.
By Bijection iff Inverse is Bijection we have that $g$ is a bijection and that $g^{-1} = f$.

Let $f$ be open.
Then by definition of open mapping:

$\forall H \in \tau_1: f \sqbrk H \in \tau_2$
taking $H \in \tau_1$ by definition of open in $T_1$.
But $f = g^{-1}$ and so:

$\forall H \in \tau_1: g^{-1} \sqbrk H \in \tau_2$
which is exactly the definition for $g$ to be continuous.

The argument works the other way.

Let $g$ be continuous.
Then by definition of continuous mapping:

$\forall H \in \tau_1: g^{-1} \sqbrk H \in \tau_2$
But $g^{-1} = f$ and so:

$\forall H \in \tau_1: f \sqbrk H \in \tau_2$
which is exactly the definition for $f$ to be open.
$\blacksquare$


Also see
Bijection is Open iff Closed


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




