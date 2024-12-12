# 

Source: https://proofwiki.org/wiki/Finite_Tree_has_Leaf_Nodes/Proof_2



Theorem
Every non-edgeless finite tree has at least two leaf nodes.


Proof
Let the proposition we are proving in the case of a tree of order $k$ be denoted $\map P k$.


Basis for the Induction
That $\map P 2$ is true follows as the Unique Tree of Order 2 contains exactly two leaves (viz. its two nodes).
This is our basis for the induction.


Induction Hypothesis
Suppose $\map P i$ is true for all $i$ such that $2 \le i \le k$.
Then we need to demonstrated that $\map P i$ is true for all $i$ such that $2 \le i \le k + 1$.
This is our induction hypothesis.


Induction Step
This is our induction step:
Let $T_{k + 1}$ be a tree of order $k + 1$.
Pick an edge $e = \set {v_1, v_2}$ of $T_{k + 1}$.
Consider the subgraph $T_0$ obtained by removing $e$.
By Edge of Tree is Bridge, $e$ is a bridge and removing it results in a subgraph with two components.

By Connected Subgraph of Tree is Tree each such component is a tree.
Let $T_i$ be the component containing $v_i$.
Denote its order by $k_i$, where $i \in \set{1, 2}$
Since no nodes have been removed from $T_{k + 1}$, $k_1 + k_2 = k + 1$.

There are two cases:


Case 1
Neither $T_1$ nor $T_2$ is of order $1$.
Then $2 \le k_i \le k - 1, i = 1, 2$.
By the induction hypothesis, both $T_1$ and $T_2$ have at least two leaves.

Either $v_1$ and $v_2$ are both leaves of the respective trees, or one of them is not.

Suppose that $v_1$ and $v_2$ are both leaves of the respective trees.
Then by adding $e$ back to the graph and thus recreating $T_{k + 1}$, $v_1$ and $v_2$ cease to be leaves.
However, at least one other leaf from each subgraph $T_i, i = 1, 2$ survives the addition, becoming a leaf of $T_{k + 1}$.
Therefore $T_{k + 1}$ has at least two leaves.

Suppose that either $v_1$ or $v_2$ is not a leaf of its respective tree.
Then $T_{k + 1}$ has at least three leaves.
$\Box$


Case 2
$T_1$ or $T_2$ is of order $1$.
Without loss of generality, assume that $T_1$ is of order $1$, that is $k_1 = 1$.
This implies that $k_2 = k$.
Then, by the induction hypothesis, $T_2$ has at least two leaf nodes.
Also $k_1 = 1$ implies that $v_1$ is a leaf of $T_{k + 1}$.

Suppose that $v_2$ is one of the leaves of $T_2$.
Then by adding $e$ back and thus recreating $T_{k + 1}$, $v_2$ is no longer a leaf, though at least one other leaf of $T_2$ survives the addition, becoming a leaf of $T_{k + 1}$.
Therefore $T_{k + 1}$ has at least two leaves.

Suppose that $v_2$ is not one of the leaves of $T_2$.
Then $T_{k + 1}$ has at least three leaves.
$\Box$

In both cases, the thesis follows by the Second Principle of Mathematical Induction.
$\blacksquare$





