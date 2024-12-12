# 

Source: https://proofwiki.org/wiki/Countability_Axioms_Preserved_under_Open_Continuous_Surjection



Theorem
Let $T_A = \struct {S_A, \tau_A}$ and $T_B = \struct {S_B, \tau_B}$ be topological spaces.
Let $\phi: T_A \to T_B$ be a surjective open mapping which is also continuous.

If $T_A$ has one of the following properties, then $T_B$ has the same property:

First-Countability
Second-Countability


Proof
Proof for First-Countability
Let $\phi$ be surjective, continuous and open.
Let $T_A$ be first countable.

Let $b \in S_B$.
Since $\phi$ is surjective there is a point $a \in S_A$ such that:

$\map \phi a = b$
From the first-countability of $T_A$, there is a local base $\BB$, say, of $a$ which is countable.
Let $\BB = \set {V_n: n \in \N}$.

We need to show that $\set {\phi \sqbrk {V_n}: n \in \N}$ is a local base for $b$.
Let $U$ be an open set of $T_B$ that contains $b$.
As $b = \map \phi a$ we have that:

$a \in \phi^{-1} \sqbrk U$
From the continuity of $\phi$, we have that $\phi^{-1} \sqbrk U$ is open.
As $\BB$ is a local base, there is an open set $V_n \subseteq \phi^{-1} \sqbrk U$ such that $a \in V_n$.
$\phi$ is surjective, so from Surjection iff Right Inverse we have that:

$\phi \sqbrk {\phi^{-1} \sqbrk U} = U$
So, applying $\phi$ to $V_n$, from Image of Subset under Mapping is Subset of Image we obtain:

$\phi \sqbrk {V_n} \subseteq U$
such that $b \in \phi \sqbrk {V_n}$.
This means that $\set {\phi \sqbrk {V_n}: n \in \N}$ is a local base for $b$.
Thus, $T_B$ is first countable.
$\blacksquare$


Proof for Second-Countability
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




