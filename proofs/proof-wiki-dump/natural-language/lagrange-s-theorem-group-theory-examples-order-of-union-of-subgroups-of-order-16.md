# 

Source: https://proofwiki.org/wiki/Lagrange%27s_Theorem_(Group_Theory)/Examples/Order_of_Union_of_Subgroups_of_Order_16

Examples of Use of Lagrange's Theorem
Let $G$ be a group whose identity is $e$.

Let $H$ and $K$ be subgroups of $G$ such that:

$\order H = \order K = 16$
$H \ne K$
where $\order {\, \cdot \,}$ denotes the order of the subgroup.

Then:

$24 \le \order {H \cup K} \le 31$


Proof
As $H$ and $K$ are subgroups of $G$, they share at least $e$.
That is, $\order {H \cap K} \ge 1$.
On the other hand, we have that $H \ne K$.
Thus $\order {H \cap K} < 16$.
But from Intersection of Subgroups is Subgroup, $H \cap K$ is a subgroup of both $H$ and $K$.
From Lagrange's Theorem, that means:

$\order {H \cap K} \divides 16$
and so:

$\order {H \cap K} \le 8$

From Cardinality of Set Union:

$\order {H \cup K} = \order H + \order K - \order {H \cap K}$
and so:

$\order {H \cup K} = 16 + 16 - \order {H \cap K} = 32 - \order {H \cap K}$
As $\order {H \cap K}$ lies within the range of $1$ to $8$, the result follows.
$\blacksquare$


Sources
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $7$: Cosets and Lagrange's Theorem: Exercise $12$




