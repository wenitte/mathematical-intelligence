# 

Source: https://proofwiki.org/wiki/Characteristics_of_Finite_Tree/Condition_1



Theorem
Let $T$ be a finite simple graph of order $n$.
Then:

$T$ is a finite tree of order $n$ if and only if $T$ has $n - 1$ edges and has no circuits.


Proof
First we recall that by definition of a tree, $T$ is:

a simple connected graph
with no circuits.


Sufficient Condition
Let $T$ be a finite tree.

From Finite Connected Simple Graph is Tree iff Size is One Less than Order, $T$ has $n - 1$ edges.
$\Box$


Necessary Condition
Let $T$ have $n - 1$ edges and no circuits.
From Simple Graph with no Circuits and Size One Less than Order is Connected $T$ is connected.
Hence $T$ is a tree by definition.
As $T$ is finite by hypothesis, $T$ is a finite tree.
$\blacksquare$





