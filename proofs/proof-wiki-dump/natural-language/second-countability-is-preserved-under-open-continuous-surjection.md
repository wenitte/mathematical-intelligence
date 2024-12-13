# 

Source: https://proofwiki.org/wiki/Second-Countability_is_Preserved_under_Open_Continuous_Surjection

Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a surjective open mapping which is also continuous.

If $T_A$ is second-countable, then $T_B$ is also second-countable.


Proof
Let $\phi$ be surjective, continuous and open.
Let $T_A$ be second-countable.
By definition of second-countability $T_A$ has a countable basis, $\BB$, say.
Let $\BB = \set {V_n: n \in \N}$.

We need to show that $\set {\phi \sqbrk {V_n}: n \in \N}$ is a base for $T_B$.
Let $U$ be an open set of $T_B$.
$\phi$ is continuous, so $\phi^{-1} \sqbrk U$ is open in $T_A$.
As $\BB$ is a base for $T_A$, there exists an open set $V_n \subseteq \phi^{-1} \sqbrk U$.
$\phi$ is surjective, so from Surjection iff Right Inverse we have that:

$\phi \sqbrk {\phi^{-1} \sqbrk U} = U$
So, applying $\phi$ to $V_n$, from Image of Subset under Mapping is Subset of Image we obtain:

$\phi \sqbrk {V_n} \subseteq U$.
This means that $\set {\phi \sqbrk {V_n}: n \in \N}$ is a base for $T_B$.

Thus, $T_B$ is second-countable.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $3$: Compactness: Invariance Properties




