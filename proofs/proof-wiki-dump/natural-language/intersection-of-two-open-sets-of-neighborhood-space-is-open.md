# 

Source: https://proofwiki.org/wiki/Intersection_of_two_Open_Sets_of_Neighborhood_Space_is_Open



Theorem
Let $\struct {S, \NN}$ be a neighborhood space.
Let $U$ and $V$ be open sets of $\struct {S, \NN}$.
Then $U \cap V$ is an open set of $\struct {S, \NN}$.


Corollary
Let $\struct {S, \NN}$ be a neighborhood space.
Let $n \in \N_{>0}$ be a natural number.
Let $\ds \bigcap_{i \mathop = 1}^n U_i$ be a finite intersection of open sets of $\struct {S, \NN}$.

Then $\ds \bigcap_{i \mathop = 1}^n U_i$ is an open set of $\struct {S, \NN}$.


Proof
Let $U$ and $V$ be open sets of $\struct {S, \NN}$.
Let $x \in S$ such that $x \in U \cap V$.
Then $x \in U$ and $x \in V$, both of which are neighborhoods of $x$ by definition of open set.
By neighborhood space axiom $(\text N 4)$ it follows that $U \cap V$ is a neighborhood of $x$.
As $x$ is arbitrary, it follows that the above is true for all $x \in U \cap V$.
It follows by definition that $U \cap V$ is an open set of $\struct {S, \NN}$.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $3$: Topological Spaces: $\S 3$: Neighborhoods and Neighborhood Spaces: Lemma $3.6$




