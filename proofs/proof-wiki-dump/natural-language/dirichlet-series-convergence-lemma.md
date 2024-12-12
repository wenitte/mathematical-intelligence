# 

Source: https://proofwiki.org/wiki/Dirichlet_Series_Convergence_Lemma



Theorem
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty \frac {a_n} {n^s}$ be a Dirichlet series.
Let $\map f s$ converge at $s_0 = \sigma_0 + i t_0$.

Then $\map f s$ converge for all $s = \sigma + i t$ where $\sigma > \sigma_0$.


General Dirichlet Series
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty a_n e^{-\map {\lambda_n} s}$ be a general Dirichlet series.
Let $\map f s$ converge at $s_0 = \sigma_0 + i t_0$.

Then $\map f s$ converge for all $s = \sigma + i t$ where $\sigma > \sigma_0$.


Proof
We begin with a lemma:

Lemma
Let $\ds \map f s = \sum_{n \mathop = 1}^\infty \frac{a_n} {n^s}$ be a Dirichlet series.
Suppose that for some $s_0 = \sigma_0 + i t_0 \in \C$, $\map f {s_0}$ has bounded partial sums:

$(1): \quad \ds \size {\sum_{n \mathop = 1}^N a_n n^{-s_0} } \le M$
for some $M \in \R$ and all $N \ge 1$.

Then for every $s = \sigma + i t \in \C$ with $\sigma > \sigma_0$:

$\ds \size {\sum_{n \mathop = m}^N a_n n^{-s} } \le 2 M m^{\sigma_0 - \sigma} \paren {1 + \frac {\size {s - s_0} } {\sigma - \sigma_0} }$
$\Box$

Suppose that $\map f s$ converges at $s_0 = \sigma_0 + it_0$.
Then by Convergent Sequence in Metric Space is Bounded, $\size {\ds \sum_{k \mathop = 1}^n \frac {a_k} {k^{s_0} } }$ is bounded.
Thus the results of the lemma hold.
Choose any $s = \sigma + it$ with $\sigma > \sigma_0$.
By Cauchy's Convergence Criterion, it suffices to show that for all $\epsilon>0$, there exists an $N>0$ such that for all $m>n>N$

$\ds \size {\sum_{k \mathop = 1}^m \frac {a_k} {k^s} - \sum_{k \mathop = 1}^n \frac {a_k} {k^s} } = \size {\sum_{k \mathop = n + 1}^m \frac {a_k} {k^s} } < \epsilon$

The lemma shows that for a given $s$ there exists a constant $C$ independent of $N$ such that:

$\ds \size {\sum_{k \mathop = n + 1}^n a_n n^{-s} } \le \map C {n + 1}^{\sigma_0 - \sigma}$
Since $\sigma_0 - \sigma <0$, the right hand side tends to zero as $n \to \infty$.
Thus we may choose $N$ large enough so that for $n > N$.

$\ds \paren {n + 1}^{\sigma_0 - \sigma} < \dfrac \epsilon C$
which gives us:

$\ds \size {\sum_{k \mathop = n + 1}^n a_n n^{-s} } < \epsilon$
$\blacksquare$


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: wrt Dirichlet Series Convergence LemmaIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1976: Tom M. Apostol: Introduction to Analytic Number Theory: $\S 11.6$: Lemma $2$, Theorem $11.8$




