# 

Source: https://proofwiki.org/wiki/Number_of_Edges_in_Forest

Theorem
Let $F = \struct {V, E}$ be a forest with $n$ nodes and $m$ components.

Then $F$ contains $n - m$ edges.


Proof
By definition, a forest is a disconnected graph whose components are all trees.
Let the number of nodes in each component of $F$ be $n_1, n_2, \ldots, n_m$ where of course $\ds \sum_{i \mathop = 1}^m n_i = n$.
From Finite Connected Simple Graph is Tree iff Size is One Less than Order, the number of edges in tree $i$ is $n_i - 1$.
So the total number of edges in $F$ is:














\(\ds \sum_{i \mathop = 1}^m \paren {n_i - 1}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^m n_i - \sum_{i \mathop = 1}^m 1\)





Summation is Linear














\(\ds \)

\(=\)







\(\ds n - m\)





Sum of Identical Terms



$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 4.1$: The Minimal Connector Problem: An Introduction to Trees: Problem $7$




