# 

Source: https://proofwiki.org/wiki/Particular_Point_Space_is_not_Arc-Connected

Theorem
Let $T = \struct {S, \tau_p}$ be a particular point space.

Then $T$ is not arc-connected.


Proof
Let $q \in S$ be such that $q \ne p$.
Let $f: \closedint 0 1 \to T$ be an injection such that:

$\map f 0 = q$
$\map f 1 = p$
Because $f$ is an injection, it must be that:

$\map {f^{-1} } {\set p} = \set 1$
where $f^{-1}$ denotes the preimage under $f$.
Now $\set p$ is open in $\tau_p$ by definition of particular point topology.
By Closed Real Interval is not Open Set, $\set 1 = \closedint 1 1$ is not open.

Thus we have exhibited an open set whose preimage under $f$ is not open.
Hence $f$ is not continuous.
Since $f$ was an arbitrary injection, no arc between $p$ and $q$ can exist.

Hence $T$ is not arc-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $8 \text { - } 10$. Particular Point Topology: $13$




