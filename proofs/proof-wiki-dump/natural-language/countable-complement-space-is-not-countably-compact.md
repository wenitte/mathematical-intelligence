# 

Source: https://proofwiki.org/wiki/Countable_Complement_Space_is_not_Countably_Compact

Theorem
Let $T = \struct {S, \tau}$ be a countable complement topology on an uncountable set $S$.

Then $T$ is not a countably compact space.


Proof
Consider $U \in \tau$.
By definition of countable complement topology, $\relcomp S U$ is countably infinite.
Then for each $x \in \relcomp S U$, $\relcomp S U \setminus \set x$ is countably infinite.
Then for each $x \in \relcomp S U$, $\relcomp S {\relcomp S U \setminus \set x} = U \cup \set x$ is open.
Hence $\set {U \cup \set x: x \in \relcomp S U}$ is an open cover.
This cover is countable because it is equivalent to $\relcomp S U$.

Aiming for a contradiction, suppose $T$ is a countably compact space.
Then by definition there exists a finite subcover $\set {U \cup \set {x_1}, \ldots, U \cup \set {x_n} }$ of $T$.
Then:

$\paren {U \cup \set {x_1} } \cup \dotsb \cup \paren {U \cup \set {x_n} } = U \cup \set {x_1, \ldots, x_n}$
Since $\relcomp S U$ is not finite, it follows that $U \cup \set {x_1, \ldots, x_n} \ne S$.
Thus there is no finite subcover of $T$.
It follows by Proof by Contradiction that $T$ cannot be a countably compact space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $20$. Countable Complement Topology: $2$




