# 

Source: https://proofwiki.org/wiki/External_Direct_Product_of_Groups_is_Group/Finite_Product



Theorem
The external direct product of a finite sequence of groups is itself a group.


Proof
Let $\struct {G_1, \circ_1}, \struct {G_2, \circ_2}, \ldots, \struct {G_n, \circ_n}$ be groups.
Let $\ds \struct {G, \circ} = \prod_{k \mathop = 1}^n G_k$ be the external direct product of $\struct {G_1, \circ_1}, \struct {G_2, \circ_2}, \ldots, \struct {G_n, \circ_n}$.

Taking the group axioms in turn:


Group Axiom $\text G 0$: Closure
From External Direct Product Closure: General Result it follows that $\struct {G, \circ}$ is closed.
$\Box$


Group Axiom $\text G 1$: Associativity
From External Direct Product Associativity: General Result it follows that $\struct {G, \circ}$ is associative.
$\Box$


Group Axiom $\text G 2$: Existence of Identity Element
Let $e_1, e_2, \ldots, e_n$ be the identity elements of $\struct {G_1, \circ_1}, \struct {G_2, \circ_2}, \ldots, \struct {G_n, \circ_n}$ respectively.
From External Direct Product Identity: General Result it follows that $\tuple {e_1, e_2, \ldots, e_n}$ is the identity element of $\struct {G, \circ}$.
$\Box$


Group Axiom $\text G 3$: Existence of Inverse Element
Let $g_1, g_2, \ldots, g_n$ be arbitrary elements of $G_1, G_2, \ldots, G_n$

Let $g_1^{-1}, g_2^{-1}, \ldots, g_n^{-1}$ be the inverse elements of $g_1, g_2, \ldots, g_n$ in $\struct {G_1, \circ_1}, \struct {G_2, \circ_2}, \ldots, \struct {G_n, \circ_n}$ respectively.

From External Direct Product Inverses: General Result it follows that $\tuple {g_1^{-1}, g_2^{-1}, \ldots, g_n^{-1} }$ is the inverse element of $\tuple {g_1, g_2, \ldots, g_n}$ in $\struct {G, \circ}$.
$\Box$

All group axioms are fulfilled, hence $\struct {G, \circ}$ is a group.
$\blacksquare$


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 18$: Induced $N$-ary Operations: Theorem $18.10$: Corollary




