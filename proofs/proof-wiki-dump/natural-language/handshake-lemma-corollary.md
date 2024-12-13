# 

Source: https://proofwiki.org/wiki/Handshake_Lemma/Corollary

Corollary to the Handshake Lemma
Let $G$ be a $\tuple {p, q}$-graph, which may be a multigraph or a loop-graph, or both.

The number of odd vertices in $G$ is even.


Proof
Let $G$ be a $\tuple {p, q}$-graph.
Consider the sum of the degrees of its vertices:

$\ds K = \sum_{v \mathop \in V} \map {\deg_G} v$
From the Handshake Lemma:

$K = 2 \card E$
which is an even integer.
Subtracting from $K$ the degrees of all even vertices, we are left with the sum of all degrees of odd vertices in $V$.

That is:

$\ds \paren {\sum_{v \mathop \in V} \map {\deg_G} v} - \paren {\sum_{v \mathop \in V : \map {\deg_G} v \mathop = 2 k} \map {\deg_G} v} = \paren {\sum_{v \mathop \in V : \map {\deg_G} v \mathop = 2 k + 1} \map {\deg_G} v}$

This must still be an even number, as it is equal to the difference of two even numbers.
Because this is a sum of exclusively odd terms, there must be an even number of such terms for the sum on the right hand side to be even.
Hence the number of odd vertices in $G$ must be even.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): Chapter $2$: Elementary Concepts of Graph Theory: $\S 2.1$: The Degree of a Vertex: Theorem $2.2$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.21$: Euler ($\text {1707}$ – $\text {1783}$)
1992: David Wells: Curious and Interesting Puzzles ... (previous) ... (next): The Bridges of Königsberg: $134$




