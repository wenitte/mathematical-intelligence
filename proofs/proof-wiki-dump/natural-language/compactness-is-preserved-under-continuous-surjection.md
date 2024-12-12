# 

Source: https://proofwiki.org/wiki/Compactness_is_Preserved_under_Continuous_Surjection



Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a continuous surjection.

If $T_A$ is compact, then $T_B$ is also compact.


Proof
Let $T_A$ be compact.
Take an open cover $\UU$ of $T_B$.
From Preimage of Cover is Cover, $\set {\phi^{-1} \sqbrk U: U \in \UU}$ is a cover of $S_A$.
But $\phi$ is continuous, and for all $U \in \UU$, $U$ is open in $T_B$.
It follows that $\forall U \in \UU: \phi^{-1} \sqbrk U$ is open in $T_A$.
So $\set {\phi^{-1} \sqbrk U:\ U \in \UU}$ is an open cover of $T_A$.

$T_A$ is compact, so we take a finite subcover:

$\set {\phi^{-1} \sqbrk {U_1}, \ldots, \phi^{-1} \sqbrk {U_n} }$
We have that $\phi$ is surjective.
So from Surjection iff Right Inverse, $\phi \sqbrk {\phi^{-1} \sqbrk A} = A$
So:

$\set {\phi \sqbrk {\phi^{-1} \sqbrk {U_1} }, \ldots, \phi \sqbrk {\phi^{-1} \sqbrk {U_n} } } = \set {U_1, \ldots, U_n} \subseteq \UU$
is a finite subcover of $\UU$ on $T_B$.
$\blacksquare$


Also see
Compactness Properties Preserved under Continuous Surjection


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




