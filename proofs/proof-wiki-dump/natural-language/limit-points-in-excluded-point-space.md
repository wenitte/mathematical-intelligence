# 

Source: https://proofwiki.org/wiki/Limit_Points_in_Excluded_Point_Space

Theorem
Let $T = \struct {S, \tau_{\bar p} }$ be an excluded point space.
Let $x \in S$ such that $x \ne p$.
Then $p$ is the only limit point of $x$.

Similarly, let $U \subseteq S$.
Then $p$ is the only limit point of $U$.


Proof
Let $U \subseteq S$.
Let $x \in S$ such that $x \ne p$.
From:

Excluded Point Topology is Open Extension Topology of Discrete Topology
Limit Points in Open Extension Space
it follows that:

$p$ is a limit point of $U$
$p$ is a limit point of $x$.

Now suppose $y \in S$ such that $y \ne p$.
We have by definition of excluded point space that $\set y$ is open in $T$.
So there is no $z \in \set y: z \ne y, z \in U$. 
Hence $y$ can not be a limit point of $U$.

Similarly $x \notin \set y$.
So $y$ can not be a limit point of $x$.
Hence the result.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $13 \text { - } 15$. Excluded Point Topology: $5$




