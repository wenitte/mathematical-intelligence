# 

Source: https://proofwiki.org/wiki/Order_of_Subgroup_Product/Corollary

Theorem
Let $G$ be a group.
Let $H$ and $K$ be finite subgroups of $G$.

Then:

$\size {H \vee K} \ge \dfrac {\order H \order K} {\order {H \cap K} }$
or

$\dfrac {\size {H \vee K} } {\order H} \ge \dfrac {\order K} {\order {H \cap K} }$
where $H \vee K$ denotes join and $\order H$ denotes the order of $H$.


Proof
From Order of Subgroup Product:

$(1): \quad \size {H K} = \dfrac {\order H \order K} {\order {H \cap K} }$

From Subset Product is Subset of Generator, we have that:

$H K \subseteq H \vee K$
where $H K$ is the subset product of $H$ and $K$.
Thus:

$(2): \quad \size {H \vee K} \ge \size {H K}$

The result follows by substituting for $\size {H K}$ from $(1)$ into $(2)$.
$\blacksquare$


Sources
1966: Richard A. Dean: Elements of Abstract Algebra ... (previous) ... (next): $\S 1.9$: Theorem $21$: Corollary




