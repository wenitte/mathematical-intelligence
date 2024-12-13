# 

Source: https://proofwiki.org/wiki/P-adic_Integer_has_Unique_Coherent_Sequence_Representative/Lemma_3

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the $p$-adic norm on the rational numbers $\Q$.
Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.

Let $\sequence{\beta_n}$ be a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$ such that:

$\forall j \in \N : \exists \mathop {\map N j} \ge j : \forall m, n \in \N: m, n \ge \map N j : \norm {\beta_n - \beta_m} \le p^{-\paren {j + 1} }$
Let $\sequence{\alpha_n}$ be a Cauchy sequence in $\struct {\Q, \norm {\,\cdot\,}_p}$ such that:

$\forall j \in \N: \norm {\alpha_j - \beta_{\map N j} }_p \le p^{-\paren {j + 1} }$

Then: 

$\sequence {\alpha_n}$ and $\sequence {\beta_n}$ are representatives of the same $p$-adic number in $\Q_p$.


Proof
From Representatives of same P-adic Number iff Difference is Null Sequence, it needs only to be shown that $\sequence {\alpha_j - \beta_j}$ is a null sequence.

Let $\epsilon \in \R_{> 0}$.
From Sequence of Powers of Number less than One, the sequence $\sequence {p^n}$ is a null sequence.
Then there exists $j \in \N$ such that $p^{-j} < \epsilon$.

Then for all $i \ge \map N j$:














\(\ds \norm {\alpha_i - \beta_i}_p\)

\(=\)







\(\ds \norm {\alpha_i - \beta_{\map N i} + \beta_{\map N i} - \beta_i}_p\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {\alpha_i - \beta_{\map N i} }_p, \norm {\beta_{\map N i} - \beta_i}_p}\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {p^{-\paren{i + 1} } }_p, \norm {\beta_{\map N i} - \beta_i}_p}\)




















\(\ds \)

\(\le\)







\(\ds \max \set {\norm {p^{-\paren{i + 1} } }_p, \norm {p^{-\paren {i + 1} } }_p}\)




















\(\ds \)

\(=\)







\(\ds \norm {p^{-\paren {i + 1} } }_p\)




















\(\ds \)

\(\le\)







\(\ds \norm {p^{-j } }_p\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









It follows that $\sequence {\alpha_n - \beta_n}$ is a null sequence by definition.
$\blacksquare$





