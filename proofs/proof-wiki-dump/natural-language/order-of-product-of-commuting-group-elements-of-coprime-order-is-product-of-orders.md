# 

Source: https://proofwiki.org/wiki/Order_of_Product_of_Commuting_Group_Elements_of_Coprime_Order_is_Product_of_Orders



Theorem
Let $G$ be a group.
Let $g_1, g_2 \in G$ be commuting elements such that:














\(\ds \order {g_1}\)

\(=\)







\(\ds n_1\)




















\(\ds \order {g_1}\)

\(=\)







\(\ds n_2\)









where $\order {g_1}$ denotes the order of $g_1$ in $G$.
Let $n_1$ and $n_2$ be coprime.

Then:

$\order {g_1 g_2} = n_1 n_2$


Proof
Let $g_1 g_2 = g_2 g_1$.
We have:

$\paren {g_1 g_2}^{n_1 n_2} = e$
Thus:

$\order {g_1 g_2} \le n_1 n_2$
Suppose $\order {g_1 g_2}^r = e$.

Then:














\(\ds {g_1}^r\)

\(=\)







\(\ds {g_2}^{-r}\)




















\(\ds \)

\(\in\)







\(\ds \gen {g_1} \cap \gen {g_2}\)














\(\ds \leadsto \ \ \)





\(\ds {g_1}^r = {g_2}^r\)

\(=\)







\(\ds e\)









Thus $r$ is divisible by both $m$ and $n$.
The result follows.
$\blacksquare$


Also see
Unique Composition of Group Element whose Order is Product of Coprime Integers, a converse of this


Sources
1978: John S. Rose: A Course on Group Theory ... (previous) ... (next): $0$: Some Conventions and some Basic Facts: Exercise $6$
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $17$




