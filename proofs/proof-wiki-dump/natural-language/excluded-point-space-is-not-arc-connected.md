# 

Source: https://proofwiki.org/wiki/Excluded_Point_Space_is_not_Arc-Connected

Theorem
Let $S$ be a set with at least two distinct elements.
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.

Then $T$ is not arc-connected.


Proof
Let $q \in S$ be such that $q \ne p$.
Let $f: \closedint 0 1 \to T$ be an injection such that:

$\map f 0 = p$
$\map f 1 = q$
Because $f$ is an injection, it must be that:

$f^{-1} \sqbrk {\set q} = \set 1$
where $f^{-1}$ denotes the preimage under $f$.
Now since $p \notin \set q$, $\set q$ is open in $\tau_{\bar p}$, by definition of the excluded point topology.
By Closed Real Interval is not Open Set, $\set 1 = \closedint 1 1$ is not open.

Thus we have exhibited an open set whose preimage under $f$ is not open.
Hence $f$ is not continuous.
Since $f$ was an arbitrary injection, no arc between $p$ and $q$ can exist.

Hence $T$ is not arc-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $3$




