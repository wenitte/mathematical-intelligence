# 

Source: https://proofwiki.org/wiki/Order_of_Subgroup_Product



Theorem
Let $G$ be a group.
Let $H$ and $K$ be subgroups of $G$.

Then:

$\order {H K} = \dfrac {\order H \order K} {\order {H \cap K} }$
where:

$H K$ denotes subset product
$\order H$ denotes the order of $H$.

The validity of the material on this page is questionable.In particular: The right hand side does not make sense if $\order {H \cap K} = +\infty$, because it is then $\dfrac {+\infty}{+\infty}$. Can someone check the source?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Corollary
$\size {H \vee K} \ge \dfrac {\order H \order K} {\order {H \cap K} }$
or

$\dfrac {\size {H \vee K} } {\order H} \ge \dfrac {\order K} {\order {H \cap K} }$
where $H \vee K$ denotes join and $\order H$ denotes the order of $H$.


Proof 1
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


Proof 2
Lemma
Let $h_1, h_2 \in H$.
Then:

$h_1 K = h_2 K$
if and only if:

$h_1$ and $h_2$ are in the same left coset of $H \cap K$.
$\Box$
We have that $H K$ is the union of all left cosets $h K$ with $h \in H$:

$\ds H K = \bigcup_{h \mathop \in H} h K$
From Left Coset Space forms Partition, unequal $h K$ are disjoint.
From Cosets are Equivalent, each $h K$ contains $\order K$ elements.

From the Lemma, the number of different such left cosets is:

$\index H {H \cap K}$
where $\index H {H \cap K}$ denotes the index of $H \cap K$ in $H$.

First, let $\order H < + \infty$.
Then, from Lagrange's Theorem:
$\index H {H \cap K} = \dfrac {\order H} {\order {H \cap K} }$
Hence:

$\order {H K} = \dfrac {\order H \order K} {\order {H \cap K} }$

Finally, let $\order H = + \infty$.
Recall that $G$, $H$ and $K$ have the same identity element $e$ by Identity of Subgroup.
By Definition of Subset Product:

$H = H \set e \subseteq H K$
In particular, $\order {H K} = + \infty$,
Hence:

$\order {H K} = \dfrac {\order H \order K} {\order {H \cap K} } = + \infty$

This needs considerable tedious hard slog to complete it.In particular: How to handle the case $\order {H \cap K} = +\infty$? The statement of the theorem leaves the ambiguity.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 3
The number of product elements $h k$ that can be formed where $h \in H$ and $k \in K$ is $\order H \order K$, although this may include duplication:

$h_1 k_1 = h_2 k_2$ may be possible for $h_1, h_2 \in H, k_1, k_2 \in K$.
So, consider the Cartesian product $H \times K$.
From Cardinality of Cartesian Product of Finite Sets:

$\size {H \times K} = \order H \times \order K$

Let us define a relation $\sim$ on $H \times K$ as:

$\tuple {h_1, k_1} \sim \tuple {h_2, k_2} \iff h_1 k_1 = h_2 k_2$
As $\sim$ is based on the equality relation it is seen that $\sim$ is an equivalence relation:

Reflexivity: $h_1 k_1 = h_1 k_1$
Symmetry: $h_1 k_1 = h_2 k_2 \implies h_2 k_2 = h_1 k_1$
Transitivity: $h_1 k_1 = h_2 k_2,  h_2 k_2 = h_3 k_3 \implies h_1 k_1 = h_3 k_3$

Each equivalence class of $\sim$ corresponds to a particular element of $H K$.
Hence $\size {H K}$ is the number of equivalence classes of $\sim$.

It remains to be shown that each of these equivalence classes contains exactly $\order {H \cap K}$ elements.

Let $E$ be the equivalence class of $\tuple {h k}$.
We aim to prove that:

$(1): \quad E = \set {\tuple {h x^{-1}, x k}: x \in H \cap K}$
Let $x \in H \cap K$.
Then:

$a x^{-1} \in H$
and:

$x k \in K$
so:

$\tuple {h x^{-1}, x k} \in H \times K$
Conversely:

$\tuple {h, k} \sim \tuple {h_1, k_1} \implies h k = h_1 k_1$
and so:

$x = h_1^{-1} h = k_1 k^{-1} \in A \cap B$
Thus:

$h_1 = h x^{-1}$
and:

$k_1 = x k$
and $(1)$ is seen to hold.

Finally:

$\tuple {h x^{-1}, x k} = \tuple {h y^{-1}, y k} \implies x = y$
Thus $E$ has exactly $\order {H \cap K}$ elements and the proof is complete.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $2$: Subgroups and Cosets: $\S 38 \alpha$
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.3$: Group actions and coset decompositions: Exercise $9$




