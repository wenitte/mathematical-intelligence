# 

Source: https://proofwiki.org/wiki/Heine-Borel_Theorem/Euclidean_Space/Necessary_Condition



Theorem
For any natural number $n \ge 1$, a closed and bounded subspace of the Euclidean space $\R^n$ is compact.


Proof 1
Let $C \subseteq \R^n$ be closed and bounded.
Since $C$ is bounded, $C \subseteq \closedint a b^n = B$ for some $a, b \in \R$.
By the Heine-Borel Theorem: Real Line and by Topological Product of Compact Spaces, it follows that $B$ is compact.
From Euclidean Topology is Product Topology, it follows that $B$ is compact in the usual Euclidean topology induced by the Euclidean metric.
By the Corollary to Closed Set in Topological Subspace, we have that $C$ is closed in $B$.
By Closed Subspace of Compact Space is Compact, $C$ is compact.
$\blacksquare$


Proof 2
The proof holds for $n = 1$, as follows.
Suppose $C$ is a closed, bounded subspace of $\R$.
Then $C \subseteq \closedint a b$ for some $a, b \in \R$.
Moreover, $C$ is closed in $\closedint a b$ by the Corollary to Closed Set in Topological Subspace.
Hence $C$ is compact, by Closed Subspace of Compact Space is Compact.

Now suppose $C \subseteq \R^n$ is closed and bounded.
Since $C$ is bounded, $C \subseteq \closedint a b \times \closedint a b \times \cdots \times \closedint a b = B$ for some $a, b \in \R$.
Now $B$ is compact by Topological Product of Compact Spaces.
Also, $C$ is closed in $B$ by the Corollary to Closed Set in Topological Subspace.
Hence $C$ is compact, by Closed Subspace of Compact Space is Compact.
$\blacksquare$


Source of Name
This entry was named for Heinrich Eduard Heine and Émile Borel.





