# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Direct_Limit_of_Sequence_of_Groups/Lemma_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Lemma
On $\widehat G_\infty := \ds \coprod_{n \mathop \in \N} G_n$ the relation:

$\tuple {x_n, n} \sim \tuple {y_m, m} \iff \exists k \ge n, m: \map {g_{n, k} } {x_n} = \map {g_{m, k} } {y_m}$
is an equivalence relation.


Proof
Reflexivity
Since $g_{n, n} = \mathop {Id}_{G_n}$ we have:

$\forall \tuple {x_n, n} \in \widehat G_\infty: \map {g_{n, n} } {x_n} = \map {g_{n, n} } {x_n}$
Hence:

$\tuple {x_n, n} \sim \tuple {x_n, n}$
$\Box$


Symmetry
Let $\tuple {x_n, n} \sim \tuple {y_m, m}$.
Then there exists a $k \ge n, m$ such that:

$\map {g_{n, k} } {x_n} = \map {g_{m, k} } {x_m}$
Hence also:

$\map {g_{m, k} } {x_m} = \map {g_{n, k} } {x_n}$
That is:

$\tuple {y_m, m} \sim \tuple {x_n, n}$
$\Box$


Transitivity
Let $\tuple {x_n, n} \sim \tuple {y_m, m}$ and  $\tuple {y_m, m} \sim \tuple {z_r, r}$.
Then there exist $k \ge m, n$ and $l \ge n, r$ such that:

$\map {g_{n, k} } {x_n} = \map {g_{m, k} } {y_m}$
$\map {g_{m, l} } {y_m} = \map {g_{r, l} } {z_r}$

Let $q:= \max \set {k, l}$.
Then we have:














\(\ds \map {g_{n, q} } {x_n}\)

\(=\)







\(\ds \map {g_{k, q} } {\map {g_{m, k} } {y_m} }\)




















\(\ds \)

\(=\)







\(\ds \map {g_{m, q} } {y_m}\)




















\(\ds \)

\(=\)







\(\ds \map {g_{l,q} } {\map {g_{m, l} } {y_m} }\)




















\(\ds \)

\(=\)







\(\ds \map {g_{l, q} } {\map {g_{r, l} } {z_r} }\)




















\(\ds \)

\(=\)







\(\ds \map {g_{r,q} } {z_r}\)









that is:

$\tuple {x_n, n} \sim \tuple {z_r, r}$
$\blacksquare$





