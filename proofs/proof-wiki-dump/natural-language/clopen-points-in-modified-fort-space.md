# 

Source: https://proofwiki.org/wiki/Clopen_Points_in_Modified_Fort_Space

Theorem
Let $T = \struct {S, \tau_{a, b} }$  be a modified Fort space.

Then all points in $S \setminus \set {a, b}$ are both open and closed in $T$.

$a$ and $b$ themselves are not open in $T$, but they are closed in $T$.


Proof
Let $p \in S: p \notin \set {a, b}$.
From the definition of modified Fort space, any subset of $S \setminus \set {a, b}$ is open in $T$.
It follows directly that as $p \in S \setminus \set {a, b}$ we have that $\set p \subseteq S \setminus \set {a, b}$.
Hence $p$ is open in $T$.
As for $a$ and $b$, we have that $S \setminus \set a$ and $S \setminus \set b$ are not finite and so $a$ and $b$ are not open in $T$.
$\Box$

For all points $p \in S$ (including $a$ and $b$), we have that $\set p$ is (trivially) finite.
It follows that while $S \setminus \set p$ contains either $a$ or $b$, it is cofinite.
Thus $S \setminus \set p$ is open in $T$.
It follows by definition that $p$ is closed in $T$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $27$. Modified Fort Space: $2$




