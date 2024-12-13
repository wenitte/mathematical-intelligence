# 

Source: https://proofwiki.org/wiki/Neighborhood_in_Compact_Hausdorff_Space_Contains_Compact_Neighborhood

Theorem
Let $X$ be a compact Hausdorff topological space.
Let $x\in X$.
Let $U$ be a neighborhood of $x$.

Then $U$ contains a compact neighborhood of $x$.


Proof
By definition of neighborhood, there exists an open set $V$ with $x\in V\subset U$.
Then $X \setminus V$ is closed.
By Compact Hausdorff Space is T4, there exist disjoint open sets $A,B$ such that:

$X\setminus V\subset A$
$x\in B$
Then:

$X \setminus A$ is compact by Closed Subspace of Compact Space is Compact
$B \subset X \setminus A$ by Empty Intersection iff Subset of Relative Complement
$X \setminus A \subset X \setminus \paren{X \setminus V}$ by Relative Complement inverts Subsets
$X \setminus \paren{X \setminus V} = V$ by Relative Complement of Relative Complement
Thus $x\in B \subset X\setminus A \subset V$, so $X\setminus A$ is a compact neighborhood of $x$ contained in $V$.
$\blacksquare$


Also see
Definition:Locally Compact Hausdorff Space




