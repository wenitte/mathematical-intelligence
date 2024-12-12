# 

Source: https://proofwiki.org/wiki/Finite_Tree_has_Leaf_Nodes



Theorem
Every non-edgeless finite tree has at least two leaf nodes.


Proof 1
We use the Method of Infinite Descent.

Suppose $T$ is a tree which has no leaf nodes.
First note that no tree has all even nodes.
Indeed, because by Characteristics of Eulerian Graph, it would then be an Eulerian graph, and by definition, trees do not have circuits.

From the Handshake Lemma, we know that $T$ must therefore have at least two odd nodes whose degree is at least $3$.
As $T$ is finite, this number must itself be finite.
Of those nodes, there must be two (call them $u$ and $v$) which can be joined by a path $P$ containing no odd nodes apart from $u$ and $v$.
(Otherwise you can pick as one of the two nodes one of those in the interior of $P$.)

Consider that path $P$ from $u$ to $v$. 
As a tree has no circuits, all nodes of $P$ are distinct, or at least part of $P$ will describe a cycle.
Now consider the subgraph $S$ formed by removing the edges comprising $P$ from $T$, but leaving the nodes where they are.
The nodes $u$ and $v$ at either end of $P$ will no longer be odd, as they have both had one edge removed from them.
All the nodes on $P$ other than $u$ and $v$ will stay even.
The graph $S$ may become disconnected, and may even contain isolated nodes.
However, except for these isolated nodes (which became that way because of being nodes of degree $2$ on $P$), and however many components $S$ is now in, all the nodes of $S$ are still either even or odd with degree of $3$ or higher.
That is because by removing $P$, the only odd nodes we have affected are $u$ and $v$, which are now even.

Now, if the nodes in any component of $S$ are all even, that component is Eulerian.
Hence $S$ contains a circuit, and is therefore not a tree.
From Connected Subgraph of Tree is Tree, it follows that $T$ can not be a tree after all.

However, if the nodes in any component $T'$ of $S$ are not all even, then there cannot be as many odd nodes in it as there are in $T$ (because we have reduced the number by $2$).
Also, because of the method of construction of $T'$, all of its odd nodes are of degree of at least $3$.

By applying the Method of Infinite Descent, it follows that $T$ must contain a circuit, and is therefore not a tree.

So every tree must have at least one node of degree $1$.

Now, suppose that $T$ is a tree with exactly $1$ node of degree $1$.
Call this node $u$.
From the Handshake Lemma, we know that $T$ must therefore have at least one odd node whose degree is at least $3$.
Let $P$ be a path from $u$ to any such odd nodes such that $P$ passes only through even nodes, as we did above.
Again, let us remove all the edges of $P$.
By a similar argument to the one above, we will once again have reduced the tree to one in which any remaining odd nodes all have degree of at least $3$.
Then we are in a position to apply the argument above.
Hence $T$ must have at least two nodes of degree $1$.
$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Implement it as an ExampleYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
It is instructive to see what happens to the above argument for a tree with exactly two nodes of degree $1$.
There may be no other odd nodes but these two (call them $u$ and $v$).
Such a graph is a path graph (which is itself a tree), and removing all the edges from the path from $u$ to $v$ leaves an edgeless graph, which of course has no circuits.


Proof 2
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





