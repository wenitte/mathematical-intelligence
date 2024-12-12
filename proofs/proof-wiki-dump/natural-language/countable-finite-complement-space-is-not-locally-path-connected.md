# 

Source: https://proofwiki.org/wiki/Countable_Finite_Complement_Space_is_not_Locally_Path-Connected

Theorem
Let $T = \struct {S, \tau}$ be a countable finite complement topology.

Then $T$ is not locally path-connected.


Proof
Let $\BB$ be a basis for $T$.
Let $B \in \BB$.

Aiming for a contradiction, suppose $f: \closedint 0 1 \to B$ is a path on $T$.
Then $f$ is by definition continuous.

Now consider the set:

$F = \set {\map {f^{-1} } x: x \in S}$
From Continuity Defined from Closed Sets, each of the elements of $F$ is closed.
Also, from Mapping Induces Partition on Domain, the elements of $F$ are pairwise disjoint.
From Basis of Countable Finite Complement Topology consists of Countably Infinite Sets, $B$ is a countably infinite set.
Hence $F$ is also countably infinite by nature of $f$ being a mapping.
Furthermore, we have $\ds \bigcup F = \closedint 0 1$.
Hence $F$ is a countably infinite set of pairwise disjoint closed sets whose union is $\closedint 0 1$.
From Closed Unit Interval is not Countably Infinite Union of Disjoint Closed Sets, this is impossible.
From this contradiction, $f$ cannot be continuous, and so cannot be a path on $B$.
So $B$ cannot be path-connected.
So, by definition, $T$ is not locally path-connected.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $18$. Finite Complement Topology on a Countable Space: $10$




