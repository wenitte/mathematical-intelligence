# 

Source: https://proofwiki.org/wiki/Lexicographic_Product_of_Family_of_Ordered_Sets_is_Ordered_Set

Theorem
Let $\struct {I, \preceq}$ be a well-ordered set.
For each $i \in I$, let $\struct {S_i, \preccurlyeq_i}$ be an ordered set.
Let $\ds D = \prod_{i \mathop \in I} S_i$ be the Cartesian product of the family $\family {\struct {S_i, \preccurlyeq_i} }_{i \mathop \in I}$ indexed by $I$.
Let $\preccurlyeq_D$ be the lexicographic order on $D$, defined as:

$\forall u, v \in D: u \preccurlyeq_D v \iff \begin {cases} u = v \\ \map u i \preccurlyeq_i \map v i & \text {for the $\preceq$-smallest $i \in I$ such that $\map u i \ne \map v i$} \end {cases}$

Then $\struct {D, \preccurlyeq_D}$ is an ordered set.


Proof
For a subset $J$ of $I$, let $D_J$ be defined as:

$\ds D_J = \prod_{i \mathop \in J} S_i$
Similarly, let $\preccurlyeq_J$ be the lexicographic order on $D_J$:

$\forall u, v \in D_J: u \preccurlyeq_J v \iff \begin {cases} u = v \\ \map u i \preccurlyeq_i \map v i & \text {for the $\preceq$-smallest $i \in J$ such that $\map u i \ne \map v i$} \end {cases}$

Let $Y$ be the subset of $I$ defined as:

$\ds Y = \leftset {y \in I: \struct {D_Y, \preccurlyeq_Y} }$ is an ordered set $\rightset{}$

We require to show that $Y = I$.

Let $b \in I$ be the smallest element of $I$.
Let $J = \set b$.
We have that:














\(\ds D_J\)

\(=\)







\(\ds \prod_{i \mathop \in J} S_i\)




















\(\ds \)

\(=\)







\(\ds S_b\)














\(\ds \leadsto \ \ \)





\(\ds \preccurlyeq_J\)

\(=\)







\(\ds \preccurlyeq_b\)









We have that $\struct {S_b, \preccurlyeq b}$ is an ordered set.
Thus $b \in Y$ by definition of $Y$.

Let $s \in I$ such that:

$\forall t \in I: t \prec s \implies t \in Y$
Let $T = \set {t \in I: t \prec s}$.
We have that $T \subseteq I$ such that:

$\struct {D_T, \preccurlyeq_T}$ is an ordered set.
Now we consider the lexicographic product $D_T \otimes^l S_s$.
By Lexicographic Order is Ordering:

$\struct {D_T \times S_s, \preccurlyeq l}$ is an ordered set.
We have that $\preccurlyeq l$ is defined as:

$\tuple {u, s_1} \preccurlyeq_l \tuple {v, s_2} \iff \tuple {u \prec_T v} \lor \paren {u = v \land s_1 \preccurlyeq_s s_2}$
But $\preccurlyeq_T$ is defined as:

$\forall u, v \in D_T: u \preccurlyeq_T v \iff \begin {cases} u = v \\ \map u i \preccurlyeq_i \map v i & \text {for the $\preceq$-smallest $i \in T$ such that $\map u i \ne \map v i$} \end {cases}$
Let $T' = T \cup \set s$.
We see that $\preccurlyeq l$ is the same as:

$\forall u, v \in D_{T'}: u \preccurlyeq_{T'} v \iff \begin {cases} u = v \\ \map u i \preccurlyeq_i \map v i & \text {for the $\preceq$-smallest $i \in T'$ such that $\map u i \ne \map v i$} \end {cases}$
That is:

$s \in Y$

Thus we have shown that:

$\paren {\forall t \in I: t \prec s \implies t \in Y} \implies s \in Y$
By Induction on Well-Ordered Set it follows that $Y = I$.
The result follows.
$\blacksquare$


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: There has to be a less tortuous way of using Induction on Well-Ordered Set to prove this. I'm missing something obvious.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Sources
1996: Winfried Just and Martin Weese: Discovering Modern Set Theory. I: The Basics ... (previous) ... (next): Part $1$: Not Entirely Naive Set Theory: Chapter $2$: Partial Order Relations: Exercise $35 \ \text {(a)}$




