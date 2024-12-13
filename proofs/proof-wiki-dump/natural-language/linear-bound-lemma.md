# 

Source: https://proofwiki.org/wiki/Linear_Bound_Lemma

Theorem
Let $G_n$ be a simple connected planar graph with $n$ vertices.
Then:

$m \le 3 n − 6$
where $m$ is the number of edges.


Proof
Let $f$ denote the number of faces of $G_n$. 
Let $\sequence {s_i}_{i \mathop = 1}^f$ be a sequence of regions of a planar embedding of $G_n$. 
Consider the sequence $\sequence {r_i}_{i \mathop = 1}^f$ where $r_i$ denotes the number of boundary edges of $s_i$. 

Since $G$ is simple, then by the definition of planar embedding: 

every region has at least $3$ boundary edges
every edge is a boundary edge of at most two regions in the planar embedding.

This article, or a section of it, needs explaining.In particular: Every edge of what? The original graph, or of the planar embedding?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Using this two facts, we can find the boundary of $\ds \sum_{i \mathop = 1}^f r_i$ as:


This article, or a section of it, needs explaining.In particular: Boundary of what exactly?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
$3 f \le \ds \sum_{i \mathop = 1}^f r_i \le 2m$

Now, as $f \le \dfrac 2 3 m$:














\(\ds n - m + f\)

\(=\)







\(\ds 2\)





Euler's Theorem for Planar Graphs














\(\ds n - m + \frac 2 3 m\)

\(\ge\)







\(\ds 2\)




















\(\ds \frac 1 3 m\)

\(\le\)







\(\ds n - 2\)




















\(\ds m\)

\(\le\)







\(\ds 3 n - 6\)









$\blacksquare$





