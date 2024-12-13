# 

Source: https://proofwiki.org/wiki/Irrational_Number_Space_is_not_Locally_Compact_Hausdorff_Space



Theorem
Let $\struct {\R \setminus \Q, \tau_d}$ be the irrational number space under the Euclidean topology $\tau_d$.

Then $\struct {\R \setminus \Q, \tau_d}$ is not a locally compact Hausdorff Space.


Proof
For $\struct {\R \setminus \Q, \tau_d}$ to be a locally compact Hausdorff Space, it is required that every point of $\R \setminus \Q$ has a compact neighborhood.

Let $x \in \R \setminus \Q$.
Let $N \subseteq \R \setminus \Q$ be a neighborhood of $x$.
Then:

$\exists U \in \tau: x \in U \subseteq N \subseteq \R \setminus \Q$.

Aiming for a contradiction, suppose $N$ is compact.
By Compact Set of Irrational Numbers is Nowhere Dense, $N$ is nowhere dense.
Thus $N^-$ contains no open set of $\R \setminus \Q$ which is non-empty.
But $U$ is a non-empty open set of $\R \setminus \Q$.
By Set is Subset of its Topological Closure, $N \subseteq N^-$.
Because Subset Relation is Transitive:

$U \subseteq N^-$
This is a contradiction.

Hence $\struct {\R \setminus \Q, \tau_d}$ is not a locally compact Hausdorff Space.
$\blacksquare$


Also see
Rational Number Space is not Locally Compact Hausdorff Space


Sources
1978: Lynn Arthur Steen and J. Arthur Seebach, Jr.: Counterexamples in Topology (2nd ed.) ... (previous) ... (next): Part $\text {II}$: Counterexamples: $31$. The Irrational Numbers: $8$




