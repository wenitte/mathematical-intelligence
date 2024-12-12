# 

Source: https://proofwiki.org/wiki/Finite_Connected_Simple_Graph_is_Tree_iff_Size_is_One_Less_than_Order



Theorem
Let $T$ be a finite connected simple graph of order $n$.

Then $T$ is a (finite) tree if and only if the size of $T$ is $n - 1$.


Proof
By definition:

the order of a (finite) tree is how many nodes it has
and:

the size of a (finite) tree is how many edges it has.


Necessary Condition
Suppose $T$ is a tree with $n$ nodes. We need to show that $T$ has $n - 1$ edges.

The proof proceeds by strong induction.

Let $T_n$ be a tree with $n$ nodes.
For all $n \in \N_{>0}$, let $\map P n$ be the proposition that a tree with $n$ nodes has $n - 1$ edges.


Basis for the Induction
$\map P 1$ says that a tree with $1$ node has no edges.
It is clear that $T_1$ is $N_1$, the edgeless graph, which has $1$ node and no edges.
So $\map P 1$ is (trivially) true.
This is our basis for the induction.


Induction Hypothesis
Now we need to show that, if $\map P j$ is true for all $1 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is our induction hypothesis:

Every tree with $j$ nodes such that $1 \le j \le k$ has $j - 1$ edges.

Then we need to show:

Every tree with $k + 1$ nodes has $k$ edges.


Induction Step
Let the following hold:

For all $j \le k$, a tree of order $j$ is of size $j - 1$.

Then this holds:

A tree of order $k + 1$  is of size $k$.


Induction Step: Proof 1
Let $T_{k + 1}$ be an arbitrary tree with $k + 1$ nodes.
Take any node $v$ of $T_{k + 1}$ of degree $1$.
Such a node exists from Finite Tree has Leaf Nodes.
Consider $T_k$, the subgraph of $T_{k + 1}$ created by removing $v$ and the edge connecting it to the rest of the tree.
By Connected Subgraph of Tree is Tree, $T_k$ is itself a tree.
The order of $T_k$ is $k$, and it has one less edge than $T_{k + 1}$ by definition.
We have by hypothesis that $T_k$ has $k - 1$ edges.
So $T_{k + 1}$ must have $k$ edges.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\Box$


Induction Step: Proof 2
Let $T_{k + 1}$ be an arbitrary tree with $k + 1$ nodes.
Remove any edge $e$ of $T_{k + 1}$.
By definition of tree $T_{k + 1}$ has no circuits.
Therefore from Condition for Edge to be Bridge it follows that $e$ must be a bridge.
So removing $e$ disconnects $T_{k + 1}$ into two trees $T_1$ and $T_2$, with $k_1$ and $k_2$ nodes, where $k_1 + k_2 = k + 1$.
Then, by hypothesis, $T_1$ and $T_2$ have $k_1 - 1$ and $k_2 - 1$ edges.
Putting the edge $e$ back again, it can be seen that $T_{k + 1}$ has $\paren {k_1 - 1} + \paren {k_2 - 1} + 1 = k$ edges.
Therefore a tree of order $k + 1$  is of size $k$.

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.
$\Box$


Sufficient Condition
Let $T$ is a connected simple graph of order $n$ with size $n - 1$.
From Finite Connected Simple Graph with Size One Less than Order has no Circuits:

$T$ has no circuits.
Hence $T$ is a tree by definition.
$\blacksquare$


Beware
Just because a simple graph $G$ has an order one greater than its size does not necessarily make it a tree.
$G$ still has to be connected.
Take this simple graph, for instance:


It has order $5$ and size $4$ but is not a tree.





