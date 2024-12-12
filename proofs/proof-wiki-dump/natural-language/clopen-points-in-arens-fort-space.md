# 

Source: https://proofwiki.org/wiki/Clopen_Points_in_Arens-Fort_Space

Theorem
Let $T = \struct {S, \tau}$ be the Arens-Fort space.
Let $q \in S: q \ne \tuple {0, 0}$.

Then $\set q$ is both open and closed in $T$.

$\set {\tuple {0, 0} }$ itself is closed, but not open.


Proof
We have that $\set q$ is finite so $\relcomp S {\set q}$ is cofinite.
So $\relcomp S {\set q}$ is open and so $\set q$ is closed.

Then we have that $\tuple {0, 0} \notin \set q$ so $\set q$ is open.

However, $\tuple {0, 0} \notin \relcomp S {\set {\tuple {0, 0} } }$ and $\relcomp S {\set {\tuple {0, 0} } }$ is clearly not open in $T$.
But as $\set {\tuple {0, 0} }$ is finite so $\relcomp S {\set {\tuple {0, 0} } }$ is cofinite.
Hence, as for $\set q$, we have that $\set {\tuple {0, 0} }$ is closed.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $26$. Arens-Fort Space: $7$




