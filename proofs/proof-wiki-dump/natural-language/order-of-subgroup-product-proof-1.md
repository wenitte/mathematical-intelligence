# 

Source: https://proofwiki.org/wiki/Order_of_Subgroup_Product/Proof_1

Theorem
Let $G$ be a group.
Let $H$ and $K$ be subgroups of $G$.

Then:

$\order {H K} = \dfrac {\order H \order K} {\order {H \cap K} }$
where:

$H K$ denotes subset product
$\order H$ denotes the order of $H$.

The validity of the material on this page is questionable.In particular: The right hand side does not make sense if $\order {H \cap K} = +\infty$, because it is then $\dfrac {+\infty}{+\infty}$. Can someone check the source?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof
From Intersection of Subgroups is Subgroup, we have that $H \cap K \le H$.

Let the number of left cosets of $H \cap K$ in $H$ be $r$.
Then the left coset space of $H \cap K$ in $H$ is:

$\set {x_1 \paren {H \cap K}, x_2 \paren {H \cap K}, \ldots, x_r \paren {H \cap K} }$
So each element of $H$ is in $x_i \paren {H \cap K}$ for some $1 \le i \le r$.
Also, if $i \ne j$, we have:

$x_j^{-1} x_i \notin H \cap K$

Let $h k \in H K$.
We can write $h = x_i g$ for some $1 \le i \le r$ and some $g \in K$.
Thus:

$h k = x_i \paren {g k}$
Since $g, k \in K$, this shows $h k \in x_i K$.

Aiming for a contradiction, suppose the left cosets $x_i K$ are not all disjoint.
Then by Left Coset Space forms Partition:

$x_i K = x_j K$ for some $i, j$.
So by Left Congruence Class Modulo Subgroup is Left Coset:

$x_j^{-1} x_i \in K$

Since $x_i, x_j \in H$, we have:

$x_j^{-1} x_i \in H \cap K$
which contradicts the definition.
Therefore the left cosets $x_i K$ are disjoint for $1 \le i \le r$.
This leads us to:

$\dfrac {\order H} {\order {H \cap K} } = \dfrac {\order {H K} } {\order K} = r$
whence the result.
$\blacksquare$


Sources
1996: John F. Humphreys: A Course in Group Theory ... (previous) ... (next): Chapter $5$: Cosets and Lagrange's Theorem: Proposition $5.18$




