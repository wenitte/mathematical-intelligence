# 

Source: https://proofwiki.org/wiki/Order_of_Subgroup_Product/Proof_3

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
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Theorem $21$




