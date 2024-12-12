# 

Source: https://proofwiki.org/wiki/Deleted_Integer_Topology_is_Second-Countable



Theorem
Let $S = \R_{\ge 0} \setminus \Z$.
Let $\tau$ be the deleted integer topology on $S$.

Then the topological space $T = \struct {S, \tau}$ is second-countable.


Corollary 1
The topological space $T = \struct {S, \tau}$ is first-countable.


Corollary 2
The topological space $T = \struct {S, \tau}$ is separable.


Corollary 3
The topological space $T = \struct {S, \tau}$ is Lindelöf.


Proof
Let $\Z_{>0}$ be understood as the set of strictly positive integers:

$\Z_{>0} = \set {x \in \Z: x > 0} = \set {1, 2, 3, \ldots}$
From Basis for Partition Topology, the set:

$\BB = \set {\openint {n - 1} n: n \in Z_{>0} }$
is a basis for $T$.
There is an obvious one-to-one correspondence $\phi: \Z_{> 0} \leftrightarrow \BB$ between $\Z_{> 0}$ and $\BB$:

$\forall x \in \Z_{>0}: \map \phi x = \openint {x - 1} x$

But $\Z_{>0} \subseteq \Z$ and Integers are Countably Infinite.
So from Subset of Countably Infinite Set is Countable, $\Z_{>0}$ is countable.
Thus $\BB$ is also countable by definition of countability.
So we have that $T$ has a countable basis, and so is second-countable by definition.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $7$. Deleted Integer Topology: $5$




