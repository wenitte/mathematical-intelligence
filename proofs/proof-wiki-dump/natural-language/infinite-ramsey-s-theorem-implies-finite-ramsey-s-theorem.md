# 

Source: https://proofwiki.org/wiki/Infinite_Ramsey%27s_Theorem_implies_Finite_Ramsey%27s_Theorem


This article needs to be linked to other articles.In particular: I started putting them in but got tiredYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
$\forall l, n, r \in \N: \exists m \in \N: m \to \left({l}\right)_r^n$
where $\alpha \to \left({\beta}\right)^n_r$ means that:

for any assignment of $r$-colors to the $n$-subsets of $\alpha$
there is a particular color $\gamma$ and a subset $X$ of $\alpha$ of size $\beta$ such that all $n$-subsets of $X$ are $\gamma$.


Proof
Aiming for a contradiction, suppose there is a $l$ such that:

$\forall m \in \N: m \nrightarrow \left({l}\right)_r^n$
Let $\hat{K_i}$ denote a hypergraph on $i$ vertices where all possible $n$-subsets of the vertices are the hyperedges.
Let $G$ be a hypergraph with vertices $V = \left\{ {v_i: i \in \N}\right\}$.
Let the hyperedges of $G <$ be enumerated by:

$E = \left\{ {E_i: E_i \subset \N, \left\vert{E_i}\right\vert = n}\right\}$

This article, or a section of it, needs explaining.In particular: What does $G <$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
We construct a (rooted) tree $T$ as follows:
$(1): \quad$ First introduce a root node $r t$.
$(2): \quad$ Each node is allowed to have at most $r<$ children which correspond to the $r$-colors, subject to it satisfying the criteria:


This article, or a section of it, needs explaining.In particular: What does $r <$ mean?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.


A child is always labeled by one among the $r$-colors.
Let the colors be denoted $c_1, c_2, \ldots, c_r$.
$(3): \quad$ A child $c_i$ is permitted if and only if its introduction creates a path of some finite length $k$ starting from the root.

So, if the hyperedges $E_1, E_2, \ldots, E_k$ are colored by the colors used in the path in the same order, then the corresponding subgraph of $G$ does not contain a monochromatic $\hat{K_l}$.
For example: if the introduction of a child $c_i$ creates the $k$ length path $r t, c_a, c_b, \ldots, c_i$ and the hyperedges $E_1, E_2, \ldots, E_k$ when colored $c_a, c_b, \ldots, c_i$ do not contain a monochromatic $\hat{K_l}$, the child $c_i$ is permitted to be added to $T$.

Note that for all $m$, there always exists a coloring of $\hat{K_m}$ such that no monochromatic $\hat{K_l}$ exists within.
Thus the situation that a child cannot be added to any vertex at a given level $k$ cannot arise.
For we can always take a coloring of $\hat{K_{k+n}}$ containing no monochromatic $\hat{K_l}$.
Since any $k$ hyperedges in it would yield a sequence of colors already existing in $T$, we know which vertex to add the child to.
We give the child the color corresponding to any other edge.
Hence we can forever keep adding children and so $T$ is infinite.
It is also obvious that each level $k$ of $T$ has at most $r^k<$ vertices.
So each level is finite.

By König's Tree Lemma there will be an infinite path $P$ in $T$.
$P$ provides a $r$-coloring of $G$ that contains no monochromatic $\hat{K_i}$.
Hence $P$ contains no monochromatic infinite hypergraph.
This contradicts the Infinite Ramsey's Theorem.
The result follows by Proof by Contradiction.
$\blacksquare$





