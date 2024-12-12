# 

Source: https://proofwiki.org/wiki/Countable_Compactness_is_Preserved_under_Continuous_Surjection



Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a continuous surjection.

If $T_A$ is countably compact, then $T_B$ is also countably compact.


Proof
Let $T_A$ be countably compact.
Take a countable open cover $\UU$ of $T_B$.
From Preimage of Cover is Cover, $\VV := \set {\phi^{-1} \sqbrk U: U \in \UU}$ is a cover of $S_A$.
$\VV$ is a countable cover because there it is bijective with $\UU$.


This article, or a section of it, needs explaining.In particular: It needs to be demonstrated that "it" is bijective, and in this context, exactly what "it" is.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By hypothesis, $\phi$ is continuous.
For all $U \in \UU$, $U$ is open in $T_B$.
It follows that $\forall U \in \UU: \phi^{-1} \sqbrk U$ is open in $T_A$.
So $\VV$ is a countable open cover of $T_A$.
$T_A$ is countably compact, so we take a finite subcover:

$\set {\phi^{-1} \sqbrk {U_1}, \ldots, \phi^{-1} \sqbrk {U_n} }$
We have that $\phi$ is surjective.
So from Surjection iff Right Inverse:

$\phi \sqbrk {\phi^{-1} \sqbrk A} = A$
So:

$\set {\phi \sqbrk {\phi^{-1} \sqbrk {U_1} }, \ldots, \phi \sqbrk {\phi^{-1} \sqbrk {U_n} } } = \set {U_1, \ldots, U_n} \subseteq \UU$
is a finite subcover of $\UU$ on $T_B$.


This article, or a section of it, needs explaining.In particular: It is not clear that $\set {U_1, \ldots, U_n}$ covers $T_B$.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$\blacksquare$


Also see
Compactness Properties Preserved under Continuous Surjection


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




