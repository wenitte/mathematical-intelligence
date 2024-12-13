# 

Source: https://proofwiki.org/wiki/Quotient_of_Transformation_Group_acts_Effectively

Theorem
Let $G$ be a transformation group (which may or may not be effective) acting on $X$.
Then the quotient group $G / G_0$, where $G_0$ is the kernel, does act effectively on $X$.


Proof
Let $g G_0 \in G / G_0$.
Let $x \in X$.
Let $G / G_0$ act on $X$ by the rule:

$g G_0 * x := g x$
Then by definition of effective transformation group:

$G / G_0$ acts effectively on $X$ if and only if:
$g G_0 * x = x \implies g G_0 = G_0$

Suppose $g G_0 * x = g x = x$.
We want to show $g G_0 = G_0$.

By definition of kernel of group action of $G$ on $X$:

$g * x = gx = x \iff g \in G_0$
So $gG_0 = G_0$ by closure of subgroups.
Hence the result.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: The Sylow Theorems: $\S 53 \gamma$




