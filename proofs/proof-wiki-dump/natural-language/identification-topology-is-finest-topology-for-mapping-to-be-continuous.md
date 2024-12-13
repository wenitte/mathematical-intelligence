# 

Source: https://proofwiki.org/wiki/Identification_Topology_is_Finest_Topology_for_Mapping_to_be_Continuous

Theorem
Let $T_1 := \struct {S_1, \tau_1}$ be a topological space.
Let $S_2$ be a set.
Let $f: S_1 \to S_2$ be a mapping.
Let $\tau_2$ be the identification topology on $S_2$ with respect to $f$ and $\struct {S_1, \tau_1}$.
Let $T_2 := \struct {S_2, \tau_2}$ be the resulting topological space.

Then $\tau_2$ is the finest topology on $S_2$ such that $f: T_1 \to T_2$ is continuous.


Proof
It is established in Identification Mapping is Continuous that $f$ is continuous.

Let $\tau \subseteq \powerset {S_2}$ be a topology on $S_2$ for which $f$ is $\struct {\tau_1, \tau}$-continuous.
Let $U \in \tau$.
Then by definition of $\struct {\tau_1, \tau}$-continuous:

$f^{-1} \sqbrk U \in \tau_1$
By definition of $\tau_2$ it then follows that $U \in \tau_2$.
By definition of subset it follows that $\tau \subseteq \tau_2$.
Thus it has been shown that $\tau_2$ is finer than any topology on $S_2$ for which $f$ is $\struct {\tau_1, \tau}$-continuous.

Hence the result, by definition of finest topology.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text I$: Basic Definitions: Section $1$: General Introduction: Functions




