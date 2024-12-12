# 

Source: https://proofwiki.org/wiki/Condition_for_Bipartite_Graph_to_be_Hamiltonian



Theorem
Let $G = \struct {A \mid B, E}$ be a bipartite graph.
Let $G$ be Hamiltonian.

Then $\card A = \card B$.
That is, there is the same number of vertices in $A$ as there are in $B$.


Proof
Let $G = \struct {A \mid B, E}$ be a bipartite graph.
To be Hamiltonian, a graph $G$ needs to have a Hamilton cycle: that is, one which goes through all the vertices of $G$.
As each edge in $G$ connects a vertex in $A$ with a vertex in $B$, any cycle alternately passes through a vertex in $A$ then a vertex in $B$.

Without loss of generality, suppose  that $\card A > \card B$, that is, that there are more vertices in $A$ than in $B$.
Let $\card A = m, \card B = n$.
Suppose $G$ has a Hamilton cycle $C$.
Let that cycle start at $u \in B$.
After $2 n$ edges have been traversed, we will have arrived back at $u$ again, and all the vertices of $B$ will have been visited.
But there will still be $m - n$ vertices in $A$ which have not been visited.
Hence $C$ can not be a Hamilton cycle.
$\blacksquare$


Note

This page or section has statements made on it that ought to be extracted and proved in a Theorem page.In particular: Extract this into its own pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by creating any appropriate Theorem pages that may be needed.To discuss this page in more detail, feel free to use the talk page.
The implication does not go both ways.

This graph:


clearly fulfils the conditions (that is, it is a bipartite graph such that $\card A = \card B$) and is equally clearly not Hamiltonian.


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 3.2$: The Salesman's Problem: An Introduction to Hamiltonian Graphs: Problem $25$




