# 

Source: https://proofwiki.org/wiki/Infinite_Lexicographic_Order_on_Well-Ordered_Sets_is_not_Well-Ordering

Theorem
Let $\struct {S, \preccurlyeq}$ be a well-ordered set.
Let $\preccurlyeq_l$ be the lexicographic order on the set $T$ of all ordered tuples of $S$:

$\tuple {x_1, x_2, \ldots, x_m} \prec \tuple {y_1, y_2, \ldots, y_n}$ if and only if:
$\exists k: 1 \le k \le \map \min {m, n}$ such that $\forall 1 \le j < k: x_j = y_j$ but $x_k \prec y_k$ in $S$
or:
$m < n$ and $\forall 1 \le j < m: x_j = y_j$.

Then $\preccurlyeq_l$ is not a well-ordering on $T$.


Proof
It is straightforward to show that $\preccurlyeq_l$ is a total ordering on $T$.


This article contains statements that are justified by handwavery.In particular: above needs a separate pageYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
It remains to investigate the nature of $\preccurlyeq_l$ as to whether or not it is a well-ordering.

Consider a set $S = \set {a, b}$ such that $a \prec b$.
Then the set $\set {\tuple b, \tuple {a, b}, \tuple {a, a, b}, \tuple {a, a, a, b}, \ldots}$ has no minimal element by $\preccurlyeq_l$.


This article contains statements that are justified by handwavery.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $T$ is not well-ordered by $\preccurlyeq_l$.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.1$: Mathematical Induction: Exercise $15 \ \text{(e)}$




