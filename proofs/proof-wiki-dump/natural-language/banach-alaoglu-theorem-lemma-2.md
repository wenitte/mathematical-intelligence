# 

Source: https://proofwiki.org/wiki/Banach-Alaoglu_Theorem/Lemma_2


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
Then:
$l_k \stackrel {\omega^*} {\to} l$ as $k \to \infty$, $k \in \Lambda$.


Proof
Let:

$\ds X \ni x = \lim_{\substack {j \mathop \to \infty \\ j \mathop \in J} } x_j$
where $J$ is some subset of $\N$.
We have then, for every $j \in J$:














\(\ds \size {\map {l_k} x - \map l x}\)

\(\le\)







\(\ds \size {\map {l_k} {x - x_j} } + \size {\map l {x - x_j} } + \size {\map {l_k} {x_j} - \map l {x_j} }\)




















\(\ds \)

\(\le\)







\(\ds \paren {\sup_{i \mathop \in \Lambda} \norm {l_i}_{X^*} + \norm l_{X^*} } \norm {x - x_j}_X + \size {\map {l_k} {x_j} - \map l {x_j} }\)









Now given $\epsilon >0$, we find a $j \in J$ such that the first term is less than $\epsilon / 2$. 
For fixed $j$, we have by construction of $l$ that $\map {l_k} {x_j}$ converges to $\map l {x_j}$.
Therefore, we can find a $k_\epsilon$ such that for $k \ge k_\epsilon$ we have:

$\size {\map {l_k} x - \map l x} < \epsilon$
as requested.
$\blacksquare$





