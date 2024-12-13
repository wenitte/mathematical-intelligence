# 

Source: https://proofwiki.org/wiki/P-adic_Norm_of_P-adic_Expansion_is_determined_by_First_Nonzero_Coefficient

Theorem
Let $p$ be a prime number.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
Let $\ds \sum_{i \mathop = m}^\infty d_i p^i$ be a $p$-adic expansion.
Let $a$ be the $p$-adic number, that is left coset, in $\Q_p$ containing $\ds \sum_{i \mathop = m}^\infty d_i p^i$.

Let $l$ be the index of the first non-zero coefficient in the $p$-adic expansion:

$l = \min \set {i: i \ge m \land d_i \ne 0}$

Then:

$\norm a_p = p^{-l}$


Proof
For all $n \ge m$, let:

$\alpha_n = \ds \sum_{i \mathop = m}^n d_i p^i$

By assumption:

$\sequence{\alpha_n}$ is a representative of $a$
By definition of the induced norm:

$\norm a_p = \ds \lim_{n \mathop \to \infty} \norm {\alpha_n}_p$

From Eventually Constant Sequence Converges to Constant it is sufficient to show:

$\forall n \ge l + 1 : \norm {\alpha_n}_p = p^{-l}$

Let $n \ge l + 1$.
Then:














\(\ds \norm {\sum_{i \mathop = m}^n d_i p^i}_p\)

\(=\)







\(\ds \norm {\paren {\sum_{i \mathop = m}^{l - 1} d_i p^i} + d_l p^l + \paren {\sum_{i \mathop = l + 1}^n d_i p^i} }_p\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {\sum_{i \mathop = m}^{l - 1} 0 \cdot p^i } + d_l p^l + \paren {\sum_{i \mathop = l + 1}^n d_i p^i} }_p\)





by choice of $l$, for all $i : m \le i < l \implies d_i = 0$














\(\ds \)

\(=\)







\(\ds \norm {d_l p^l + \paren {\sum_{i \mathop = l + 1}^n d_i p^i} }_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {d_l p^l }_p, \norm {\sum_{i \mathop = l + 1}^n d_i p^i}_p}\)





Non-Archimedean Norm Axiom $\text N 4$: Ultrametric Inequality




The sum $\ds \sum_{i \mathop = l + 1}^n d_i p^i$ can be rewritten:

$\ds \sum_{i \mathop = l + 1}^n d_i p^i = p^{l + 1} \sum_{i \mathop = l + 1}^n d_i p^{i - \paren {l + 1} }$
By definition of divisor:

$\ds p^{l + 1} \divides \sum_{i \mathop = l + 1}^n d_i p^i$
Then:














\(\ds \norm {\sum_{i \mathop = l + 1}^n d_i p^i}_p\)

\(\le\)







\(\ds p^{-\paren {l + 1} }\)





Definition of $p$-adic norm














\(\ds \)

\(<\)







\(\ds p^{-l}\)





Power Function on Base between Zero and One is Strictly Decreasing




By definition of a $p$-adic expansion:

$0 < d_l < p$
Then:

$p^l \divides d_l p^l$
$p^{l + 1} \nmid d_l p^l$
By definition of $p$-adic norm:

$\norm {d_l p^l}_p = p^{-l}$
Thus:

$\ds \norm {\sum_{i \mathop = l + 1}^n d_i p^i}_p < p^{-l} = \norm {d_l p^l}_p$

Finally:














\(\ds \norm {\sum_{i \mathop = m}^n d_i p^i}_p\)

\(=\)







\(\ds \max \set {\norm {d_l p^l}_p, \norm {\sum_{i \mathop = l + 1}^n d_i p^i}_p}\)





Three Points in Ultrametric Space have Two Equal Distances: Corollary $2$














\(\ds \)

\(=\)







\(\ds \norm {d_l p^l}_p\)





as $\ds \norm {\sum_{i \mathop = l + 1}^n d_i p^i}_p < \norm {d_l p^l}_p$














\(\ds \)

\(=\)







\(\ds p^{-l}\)





derived earlier



The result follows.
$\blacksquare$


Sources
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Lemma $1.31$




