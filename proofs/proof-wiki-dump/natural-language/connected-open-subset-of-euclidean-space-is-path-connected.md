# 

Source: https://proofwiki.org/wiki/Connected_Open_Subset_of_Euclidean_Space_is_Path-Connected

Theorem
Let $\R^n$ be a Euclidean $n$-space.
Let $U$ be a connected open subset of $\R^n$.

Then $U$ is path-connected.


Proof
Let $a \in U$.
Let $H \subseteq U$ be the subset of points in $U$ which can be joined to $a$ by a path in $U$.
Let $K = U \setminus H$.

Let $x \in H$.
Then:

$\exists \epsilon > 0: \map {B_\epsilon} x \subseteq U$
where $\map {B_\epsilon} x$ is the open $\epsilon$-ball of $x$.
Given any $y \in \map {B_\epsilon} x$, there is a (straight line) path $g$ in $\map {B_\epsilon} x \subseteq U$ connecting $x$ and $y$.
But since $x \in H$, there is a path $f$ in $U$ joining $a$ to $x$.
From Joining Paths makes Another Path, traversing $f$, and then $g$ forms a path from $a$ to $y$.
It follows that $y \in H$, and therefore $\map {B_\epsilon} x \subseteq H$.
Thus $H$ is open.

By a similar argument, $K$ is also shown to be open:
If $x \in K$, then $\map {B_\epsilon} x \subseteq U$ for some $\epsilon > 0$.
If any point in $\map {B_\epsilon} x$ can be joined to $a$ by a path in $U$, then so could $x$.

It is clear that $H \cap K = \O$ and $H \cup K = U$ by definition of set difference.
As, trivially, $a \in H$, we have $H \ne \O$.
Knowing that $U$ is connected, it follows that $K = \O$, and $H = U$.
Hence the result.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $6.4$: Comparison of Definitions: Proposition $6.4.2$




