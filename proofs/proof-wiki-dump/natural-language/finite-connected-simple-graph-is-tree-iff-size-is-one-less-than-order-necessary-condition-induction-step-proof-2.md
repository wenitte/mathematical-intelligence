# 

Source: https://proofwiki.org/wiki/Finite_Connected_Simple_Graph_is_Tree_iff_Size_is_One_Less_than_Order/Necessary_Condition/Induction_Step/Proof_2

Theorem
Let the following hold:

For all $j \le k$, a tree of order $j$ is of size $j - 1$.

Then this holds:

A tree of order $k + 1$  is of size $k$.


Proof
Let $T_{k + 1}$ be an arbitrary tree with $k + 1$ nodes.
Remove any edge $e$ of $T_{k + 1}$.
By definition of tree $T_{k + 1}$ has no circuits.
Therefore from Condition for Edge to be Bridge it follows that $e$ must be a bridge.
So removing $e$ disconnects $T_{k + 1}$ into two trees $T_1$ and $T_2$, with $k_1$ and $k_2$ nodes, where $k_1 + k_2 = k + 1$.
Then, by hypothesis, $T_1$ and $T_2$ have $k_1 - 1$ and $k_2 - 1$ edges.
Putting the edge $e$ back again, it can be seen that $T_{k + 1}$ has $\paren {k_1 - 1} + \paren {k_2 - 1} + 1 = k$ edges.
Therefore a tree of order $k + 1$  is of size $k$.
$\blacksquare$


Sources
1977: Gary Chartrand: Introductory Graph Theory ... (previous) ... (next): $\S 4.1$: The Minimal Connector Problem: An Introduction to Trees: Theorem $4.2$




