# 

Source: https://proofwiki.org/wiki/Infinite_Subset_of_Finite_Complement_Space_Intersects_Open_Sets

Theorem
Let $T = \struct {S, \tau}$ be a finite complement topology on an infinite set $S$.
Let $H \subseteq S$ be an infinite subset of $S$.

Then the intersection of $H$ with any non-empty open set of $T$ is infinite.


Proof
Let $U \in \tau$ be any non-empty open set of $T$.
Then by definition of finite complement topology:

$\relcomp S U$ is finite.

We have that:

$H = H \cap \paren {U \cup \relcomp S U} = \paren {H \cap U} \cup \paren {H \cap \relcomp S U}$

Aiming for a contradiction, suppose $H \cap U$ is finite.
From Intersection is Subset:

$H \cap \relcomp S U \subseteq \relcomp S U$
From Subset of Finite Set is Finite:

$H \cap \relcomp S U$ is also finite.
Thus we have:

$H = \paren {H \cap U} \cup \paren {H \cap \relcomp S U}$
which is the union of two finite sets.

From Union of Finite Sets is Finite, $H$ is finite.
It is a contradiction that $H$ is infinite and finite at the same time.
Hence by Proof by Contradiction, $H \cap U$ must be infinite.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $18 \text { - } 19$. Finite Complement Topology: $1$




