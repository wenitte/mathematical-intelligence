# 

Source: https://proofwiki.org/wiki/Partition_Topology_is_T5



Theorem
Let $S$ be a set and let $\PP$ be a partition on $S$ which is not the (trivial) partition of singletons.
Let $T = \struct {S, \tau}$ be the partition space whose basis is $\PP$.

Then $T$ is a $T_5$ space.


Corollary
$T$ is a $T_4$ space.


Proof
Let $A$ and $B$ be subsets of $S$ such that $A^- \cap B = A \cap B^- = \O$.
From Open Set in Partition Topology is also Closed, we get that $A^-$ and $B^-$ are both clopen. 
From Set is Subset of its Topological Closure:

$A \subseteq A^-$
From $A^- \cap B = \O$ it follows from Intersection with Complement is Empty iff Subset that $B \subseteq S \setminus \paren {A^-}$.
Since $A^-$ is clopen, it follows that $A^-$ and $S \setminus \paren {A^-}$ are both open.
Also, they are disjoint by definition.
Thus we have $A^-$, an open set containing $A$, and $S \setminus \paren {A^-}$, an open set containing $B$.
Thus, by definition, $T$ is a $T_5$ space.
$\blacksquare$


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $5$. Partition Topology: $2$




