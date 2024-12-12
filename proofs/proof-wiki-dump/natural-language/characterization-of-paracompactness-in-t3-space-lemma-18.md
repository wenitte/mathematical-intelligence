# 

Source: https://proofwiki.org/wiki/Characterization_of_Paracompactness_in_T3_Space/Lemma_18


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $X$ be a set with well-ordering $\preccurlyeq$ on $X$.

Let $X \times X$ denote the cartesian product of $X$ with itself.

Let $\sequence{U_n}_{n \in \N}$ be a sequence of subsets of $X \times X$ containing the diagonal $\Delta_X$ of $X \times X$.

For each $n \in \N_{> 0}, x \in X$, let:

$\map {A_n} x = \map {U_n} x \setminus \ds \bigcup_{y \preccurlyeq x, y \ne x} \map {U_{n + 1}} y$

For each $n \in \N_{> 0}$, let:

$\AA_n = \set{\map {A_n} x : x \in X}$

Let:

$\AA = \ds \bigcup_{n \in \N, n \ne 0} \AA_n$

Then:

$\AA$ is a cover of $X$


Proof
Let $x \in X$.

We have by hypothesis:

$\forall n \in \N_{>0} : \Delta_X \subseteq U_n$

By definition of image:

$\forall n \in \N_{>0} : x \in \map {U_n} x$

Let:

$y = \min \set{z \in X : x \in \ds \bigcup_{n \in N} \map {U_n} z}$
with respect to the well-ordering $\preccurlyeq$.

By choice of $y$

$\exists n \in \N_{>0}$: $x \in \map {U_n} y$
and 

$\forall z \preccurlyeq y, z \ne y : x \notin \map {U_{n + 1}} z$

By definition of set union:

$x \notin \ds \bigcup_{z \preccurlyeq y, z \ne y} \map {U_{n + 1}} z$

By definition of set difference

$x \in \map {U_n} y \setminus \ds \bigcup_{z \preccurlyeq y, z \ne y} \map {U_{n + 1}} z$
That is:

$x \in \map {A_n} y$

Since $x$ was arbitrary:

$\forall x \in X : \exists y \in X, n \in \N_{>0} : x \in \map {A_n} y$

Hence $\AA$ is a cover of $X$ by definition.
$\blacksquare$





