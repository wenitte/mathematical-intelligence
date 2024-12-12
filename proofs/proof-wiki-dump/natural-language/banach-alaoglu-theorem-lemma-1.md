# 

Source: https://proofwiki.org/wiki/Banach-Alaoglu_Theorem/Lemma_1


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Lemma for Banach-Alaoglu Theorem
Let $X$ be a separable normed vector space.
Let $X^*$ be the dual space of $X$.
Let $\sequence {l_n}_{n \mathop \in \N}$ be a bounded sequence in $X^*$.
Let $\sequence {x_n}_{n \mathop \in \N}$ be a countable dense subset of $X$.
Choose subsequences $\N \supset \Lambda_1 \supset \Lambda_2 \supset \ldots$ such that:

$\forall j \in \N: \map {l_k} {x_j} \to a_j =: \map l {x_j}$
as $k \to \infty$, $k \in \Lambda_j$.
Let $\Lambda$ be the diagonal sequence.

$l$ can be extended to an element of $X^*$.


Proof
$l$ can be extended in the obvious way to a linear function on $M = \span \set {x_j}_{j \mathop \in \N}$.
We extend it to a functional in $X^*$ by pointwise limit (notice that $M$ is dense in $X$).
We have:

$\ds \size {\map l x} = \lim_{k \mathop \to \infty} \size {\map l {x_k} } \le \limsup_{k \mathop \to \infty} \norm {l_k}_{X^*} \norm x_X$
where $x_k \to x$ as $k \to \infty$.
Since $\set {l_k}_k \mathop \in \N$ was bounded, $l$ is bounded and thus continuous.
$\blacksquare$





