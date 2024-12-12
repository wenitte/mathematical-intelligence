# 

Source: https://proofwiki.org/wiki/Dirichlet_Series_Convergence_Lemma/Lemma

Lemma to Dirichlet Series Convergence Lemma
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty \frac{a_n} {n^s}$ be a Dirichlet series.
Suppose that for some $s_0 = \sigma_0 + i t_0 \in \C$, $\map f {s_0}$ has bounded partial sums:

$(1): \quad \ds \size {\sum_{n \mathop = 1}^N a_n n^{-s_0} } \le M$
for some $M \in \R$ and all $N \ge 1$.

Then for every $s = \sigma + i t \in \C$ with $\sigma > \sigma_0$:

$\ds \size {\sum_{n \mathop = m}^N a_n n^{-s} } \le 2 M m^{\sigma_0 - \sigma} \paren {1 + \frac {\size {s - s_0} } {\sigma - \sigma_0} }$


Proof
From the Summation by Parts formula:

$\ds \sum_{n \mathop = m}^N f_n g_n = f_N G_N - f_m G_{m-1} - \sum_{n \mathop = m}^{N - 1} \map {G_n} {f_{n + 1} - f_n}$
Let:

$g_n = a_n n^{-s_0}$
$f_n = n^{s_0 - s}$
For $N \ge 1$, the quantities $G_N$ are the partial sums $(1)$.
Thus $G_N \le M$ for all $N \ge 1$.
We have:














\(\ds \size {\sum_{n \mathop = m}^N \frac {a_n} {n^s} }\)

\(=\)







\(\ds \size {\sum_{n \mathop = m}^N f_n g_n}\)




















\(\ds \)

\(\le\)







\(\ds \size {f_N G_N} + \size {f_m G_{m - 1} } + \sum_{n \mathop = m}^{N - 1} \size {\map {G_n} {f_{n + 1} - f_n} }\)





using partial summation and the Triangle Inequality














\(\ds \)

\(\le\)







\(\ds M \size {N^{s_0 - s} } + M \size {m^{s_0 - s} } + M \sum_{n \mathop = m}^{N - 1} \size {\paren {\paren {n + 1}^{s_0 - s} - n^{s_0 - s} } }\)





using the given bound on the partial sums














\(\ds \)

\(=\)







\(\ds M N^{\sigma_0 - \sigma}  + M m^{\sigma_0 - \sigma} + M \sum_{n \mathop = m}^{N - 1} \size {\paren {s - s_0} \int_n^{n + 1} t^{s_0 - s - 1} }\)




















\(\ds \)

\(\le\)







\(\ds M N^{\sigma_0 - \sigma}  + M m^{\sigma_0 - \sigma} + M \sum_{n \mathop = m}^{N - 1} \size {s - s_0} \int_n^{n + 1} \size { t^{s_0 - s - 1} }\)





Modulus of Complex Integral














\(\ds \)

\(=\)







\(\ds M N^{\sigma_0 - \sigma}  + M m^{\sigma_0 - \sigma} + M \sum_{n \mathop = m}^{N - 1} \size {s - s_0} \int_n^{n + 1} t^{\sigma_0 - \sigma - 1}\)




















\(\ds \)

\(=\)







\(\ds M N^{\sigma_0 - \sigma}  + M m^{\sigma_0 - \sigma} + M \size {s - s_0} \int_m^N  t^{\sigma_0 - \sigma -1}\)




















\(\ds \)

\(=\)







\(\ds M N^{\sigma_0 - \sigma}  + M m^{\sigma_0 - \sigma} + M \frac {\size {s - s_0} } {\sigma - \sigma_0} \paren {m^{\sigma_0 - \sigma}- N^{\sigma_0 - \sigma} }\)




















\(\ds \)

\(\le\)







\(\ds M N^{\sigma_0 - \sigma}  + M m^{\sigma_0 - \sigma} + M \frac {\size {s - s_0} } {\sigma - \sigma_0} \paren {m^{\sigma_0 - \sigma} + N^{\sigma_0 - \sigma} }\)









Finally, because $N \ge m$ and $\sigma_0 - \sigma < 0$, we have:

$N^{\sigma_0 - \sigma}  +  m^{\sigma_0 - \sigma} \le 2 m^{\sigma_0 - \sigma}$
Therefore:














\(\ds \size {\sum_{n \mathop = m}^N a_n n^{-s} }\)

\(\le\)







\(\ds M N^{\sigma_0 - \sigma} + M m^{\sigma_0 - \sigma} + M \frac {\size {s - s_0} } {\sigma - \sigma_0} \paren {m^{\sigma_0 - \sigma} + N^{\sigma_0 - \sigma} }\)




















\(\ds \)

\(\le\)







\(\ds 2 M m^{\sigma_0 - \sigma} + 2 M \frac {\size {s - s_0} } {\sigma - \sigma_0} m^{\sigma_0 - \sigma}\)




















\(\ds \)

\(=\)







\(\ds 2 M m^{\sigma_0 - \sigma} \paren {1 + \frac {\size {s - s_0} } {\sigma - \sigma_0} }\)









Hence the result.
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: wrt Dirichlet Series Convergence LemmaIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1976: Tom M. Apostol: Introduction to Analytic Number Theory: $\S 11.6$: Lemma $2$, Theorem $11.8$




