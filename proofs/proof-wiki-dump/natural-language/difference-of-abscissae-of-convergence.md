# 

Source: https://proofwiki.org/wiki/Difference_of_Abscissae_of_Convergence


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n n^{-s}$ be a Dirichlet series.
Suppose that $\map f s$ has finite Abscissa of Convergence $\sigma_c$.

Then the Abscissa of Absolute Convergence $\sigma_a$ is finite, and:

$0 \le \sigma_a - \sigma_c \le 1$


Proof
It is trivial that $\sigma_a \ge \sigma_c$.
Suppose $s_0 = \sigma_0 + i t_0 \in \C$ such that $\map f {s_0}$ converges.
It is sufficient to show that $\map f s$ converges absolutely for all $s = \sigma + i t$ with $\sigma > \sigma_0 + 1$.

Pick an upper bound $M$ for the real numbers $\size {a_n n^{-s_0} }$.
Then for $s = \sigma + i t$ with $\sigma > \sigma_0 + 1$:

$\size {\dfrac {a_n} {n^s} } = \size {\dfrac {a_n} {n^{s_0} n^{s - s_0} } } = \dfrac M {n^{\sigma - \sigma_0} }$
Then by the Comparison Test, $\ds \sum_{n \mathop = 1}^\infty \size {a_n n^{-s} }$ converges.
$\blacksquare$


Sources
1976: Tom M. Apostol: Introduction to Analytic Number Theory: $\S 11.6$: Theorem $11.10$




