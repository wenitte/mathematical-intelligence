# 

Source: https://proofwiki.org/wiki/Finite_Complement_Topology_is_Minimal_T1_Topology

Theorem
Let $T = \struct {S, \tau}$ be a finite complement space.
Let $\tau'$ be a topology on $S$ such that $T' = \struct {S, \tau'}$ is a $T_1$ (Fréchet) space.

Then $\tau$ is comparable with $\tau'$ such that $\tau$ is coarser than $\tau'$.
That is, of all the topologies on $S$ fulfilling the $T_1$ separation axiom, the finite complement space is the smallest.

Thus the finite complement topology is known as the minimal $T_1$ topology on any given set.


Proof
Let $T = \struct {S, \tau}$ be the finite complement space on $S$.

Let $U \in \tau$ be any open set of $T$.
Let $H = \relcomp S U$ be the complement of $U$ relative to $S$.
By definition of finite complement topology, $H \subseteq S$ is a finite subset of $S$.

Let $T' = \struct {S, \tau'}$ be any arbitrary $T_1$ (Fréchet) space on $S$.
From Equivalence of Definitions of $T_1$ Space:

$\forall x \in S: \set x$ is closed in $T'$.
We can write $H$ as:

$\ds H = \bigcup_{x \mathop \in H} \set x$
As $H$ is finite, it follows that $H$ is a finite union of closed sets of $T'$.
By Topology Defined by Closed Sets, $H$ is therefore closed in $T'$.

By Relative Complement of Relative Complement we have that $U = \relcomp S H$.
So, by definition of closed set, we have that $U$ is open in $T'$.
So we have shown that for any arbitrary $U \in \tau$ it follows that $U \in \tau'$.
So $\tau \subseteq \tau'$ and so by definition $\tau$ is coarser than $\tau'$.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $18 \text { - } 19$. Finite Complement Topology: $8$




