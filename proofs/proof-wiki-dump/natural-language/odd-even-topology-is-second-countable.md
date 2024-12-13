# 

Source: https://proofwiki.org/wiki/Odd-Even_Topology_is_Second-Countable



Theorem
Let $T = \struct {\Z_{>0}, \tau}$ be a topological space where $\tau$ is the odd-even topology on the strictly positive integers $\Z_{>0}$.

Then $T$ is second-countable.


Corollary 1
$T$ is first-countable.


Corollary 2
$T$ is separable.


Corollary 3
$T$ is Lindelöf.


Proof
From Basis for Partition Topology, the set:

$\BB := \set {\set {2 k - 1, 2 k}: k \in \Z, k > 0}$
is a basis for $T$.
There is an obvious one-to-one correspondence $\phi: \Z_{>0} \leftrightarrow \BB$ between $\Z_{>0}$ and $\BB$:

$\forall x \in \Z_{>0}: \map \phi x = \set {2 x - 1, 2 x}$
But $\Z_{>0} \subseteq \Z$, and Integers are Countably Infinite.
So from Subset of Countably Infinite Set is Countable, $\Z_{>0}$ is countable.
Thus $\BB$ is also countable by definition of countability.

So we have that $T$ has a countable basis, and so is second-countable by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $6$. Odd-Even Topology: $3$




