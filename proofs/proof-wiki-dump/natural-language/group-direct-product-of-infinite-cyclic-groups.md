# 

Source: https://proofwiki.org/wiki/Group_Direct_Product_of_Infinite_Cyclic_Groups

Theorem
The group direct product of two infinite cyclic groups is not cyclic.


Proof
Let $G_1 = \struct {G_1, \circ_1}$ and $G_2 = \struct {G_2, \circ_2}$ be infinite cyclic groups.
Let $G = \struct {G, \circ} = G_1 \times G_2$.
Let $G_1 = \gen {g_1}, G_2 = \gen {g_2}$.
From Generators of Infinite Cyclic Group:

$g_1$ and $g_1^{-1}$ are the only generators of $G_1$
$g_2$ and $g_2^{-1}$ are the only generators of $G_2$.
So a generator of $G$ must be of the form $\tuple { g_1^{\pm 1}, g_2^{\pm 1} }$ to have any hope to generate all of $G$.

Without loss of generality, suppose that $G = \gen {\tuple {g_1, g_2} }$.
Let $e_1$ be the identity element of $G_1$.
Let $x_2 \in G_2$.
From the definition of an infinite cyclic group, both $g_1$ and $g_2$ are of infinite order.
Suppose now $\tuple {e_1, x_2} \in \gen {\tuple {g_1, g_2} }$.
Then there is an $i \in \Z$ such that we have:

$\tuple {g_1, g_2}^i = \tuple {g_1^i, g_2^i} = \tuple {e_1, x_2}$
However, as $g_1$ is of infinite order, it must be that $i = 0$. 
Hence $x_2 = g_2^0 = e_2$, where $e_2$ is the identity element of $G_2$.

It follows that $\tuple {e_1, g_2} \notin \gen {\tuple {g_1, g_2} }$.
Therefore:

$G \ne \gen {\tuple {g_1, g_2} }$

It follows that $G$ cannot be generated by one element.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 43 \delta$



