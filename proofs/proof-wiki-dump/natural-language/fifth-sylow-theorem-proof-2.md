# 

Source: https://proofwiki.org/wiki/Fifth_Sylow_Theorem/Proof_2

Theorem
The number of Sylow $p$-subgroups of a finite group is a divisor of their common index.


Proof
Let $G$ be a finite group of order $p^n m$, where $p \nmid m$ and $n > 0$.
Let $r$ be the number of Sylow $p$-subgroups of $G$.
It is to be shown that $r \divides m$.

Let $H$ be a Sylow $p$-subgroup of $G$.
We have that:

$\order H = p^n$
$\index G H = m$
Let $S_1, S_2, \ldots, S_m$ denote the elements of the left coset space of $G / H$.
We have that $G$ acts on $G / H$ by the rule:

$g * S_i = g S_i$
for $S_i \in G / H$.

There is only one orbit under this action, namely the whole of $G / H$.


This article, or a section of it, needs explaining.In particular: Why? See Orbits of Group Action on Sets with Power of Prime SizeYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Therefore the stabilizer of each $S_i$ is a subgroup of $G$ of index $m$ and order $p^n$.
In other words, each $S_i$ has a Sylow $p$-subgroup as a stabilizer.

Now it is shown that each Sylow $p$-subgroup is the stabilizer of one or more of the cosets $S_1, S_2, \ldots, S_m$.

We have that $H$ is the stabilizer of the coset $H$, which must be one of $S_1, S_2, \ldots, S_m$.
Let $S_1, S_2, \ldots, S_k$ be the elements of $G / H$ whose stabilizer is $H$.
By the Third Sylow Theorem, any other Sylow $p$-subgroup of $H$ is a conjugates $g H g^{-1}$ of $H$.
Thus it is seen that $g H g^{-1}$ is a stabilizer of the cosets $g S_1, g S_2, \ldots, g S_k$.
So each of the $r$ distinct Sylow $p$-subgroups of $G$ is the stabilizer of exactly $k$ elements of $G / H$.
Thus:

$m = k r$
and so:

$r \divides m$
as required.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 58$: Third Sylow Theorem




