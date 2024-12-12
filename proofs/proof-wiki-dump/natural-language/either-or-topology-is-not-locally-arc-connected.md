# 

Source: https://proofwiki.org/wiki/Either-Or_Topology_is_not_Locally_Arc-Connected

Theorem
Let $T = \struct {S, \tau}$ be the either-or space.

Then $T$ is not a locally arc-connected space.


Proof
Let $\BB$ be a basis for $\tau$.
Suppose that $0 \in B$, where $B \in \BB$.
Then by definition of the either-or topology, $\openint {-1} 1 \subseteq B$.
In particular, $\dfrac 1 2 \in B$.

Let $f: \closedint 0 1 \to B$ be any injection such that:

$\map f 0 = 0$
$\map f 1 = \dfrac 1 2$
Since $0 \notin \set {\dfrac 1 2}$, it follows that $\set {\dfrac 1 2}$ is open in $\tau$.
As $f$ is an injection, it follows that:

$f^{-1} \sqbrk {\set {\dfrac 1 2} } = \set 1$
By Closed Real Interval is not Open Set, $\set 1 = \closedint 1 1$ is not open in $\closedint 0 1$.

Thus, $f$ cannot be continuous.
Hence, no arc from $0$ to $\dfrac 1 2$ can exist.
It follows that $B$ is not arc-connected, and hence $T$ is not locally arc-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $17$. Either-Or Topology: $4$




