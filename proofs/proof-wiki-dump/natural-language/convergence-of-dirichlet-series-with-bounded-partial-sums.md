# 

Source: https://proofwiki.org/wiki/Convergence_of_Dirichlet_Series_with_Bounded_Partial_Sums

Theorem
Let $\sequence {a_n}_{n \mathop \in \N}$ be a sequence in $\C$.
Suppose that there exists $B > 0$ such that for all $n, m \in \N$:

$\ds \size {\sum_{k \mathop = m}^n a_n} \le B$
Then the Dirichlet series:

$\ds \map f s = \sum_{n \mathop \ge 1} a_n n^{-s}$
converges locally uniformly to an analytic function on $\map \Re s > 0$.


Proof
By Exponential is Entire, the partial sums:

$\ds \map {f_N} s = \sum_{n \mathop = 1}^N a_n n^{-s}$
are analytic.
So by Uniform Limit of Analytic Functions is Analytic it is sufficient to show locally uniform convergence.

For $0 < A < \pi / 2$, $\delta > 0$ we let:

$D_{A, \delta} = \set {s \in \C : -A < \map \arg s < A, \map \Re s > \delta}$
Then for any $s \in \C$ such that $\map \Re s > 0$, we can choose $A$, $\delta$ such that $s \in D_{A, \delta}$.
So it is sufficient to prove locally uniform convergence in this region.

Also note that if $\lambda_n = \log n$, then:

$\ds \map f s = \sum_{n \mathop \ge 1} a_n e^{-\lambda_n s}$

By Abel's Lemma: Formulation 2, for $N, M \in \N$ we have:

$\ds \sum_{n \mathop = M}^N a_n e^{-\lambda_n s} = \sum_{n \mathop = M}^{N - 1} \paren {\sum_{k \mathop = M}^n a_n} \paren {e^{-\lambda_n s} - e^{-\lambda_{n + 1} s} } + e^{-\lambda_N s} \paren {\sum_{n \mathop = M}^N a_n}$

Let $\epsilon > 0$ be arbitrary, and choose $N_0 \in \N$ such that:

$\ds \forall n \ge N_0: \size {e^{-\lambda_n s} } < \epsilon$
Now for $N, M \ge N_0$, by the above we obtain:

$(1): \quad \ds \size {\sum_{n \mathop = M}^N a_n e^{-\lambda_n s} } \le B \sum_{n \mathop = M}^{N - 1} \size {e^{-\lambda_n s} - e^{-\lambda_{n + 1} s} } + B \epsilon$

For any $\alpha, \beta \in \R$ we have:














\(\ds \size {e^{-\alpha s} - e^{-\beta s} }\)

\(=\)







\(\ds \size {s \int_\alpha^\beta e^{-x s} \rd x}\)




















\(\ds \)

\(\le\)







\(\ds \size s \int_\alpha^\beta e^{-x \sigma} \rd x\)





where $\sigma = \map \Re s$














\(\ds \)

\(=\)







\(\ds \frac {\size s} \sigma \paren {e^{-\alpha \sigma} - e^{-\beta \sigma} }\)









Therefore:














\(\ds \size {\sum_{n \mathop = M}^N a_n e^{-\lambda_n s} }\)

\(\le\)







\(\ds \frac {B \size s} \sigma \sum_{n \mathop = M}^{N - 1} \paren {e^{-\lambda_n \sigma} - e^{-\lambda_{n + 1} \sigma} } + B \epsilon\)





by $(1)$














\(\ds \)

\(=\)







\(\ds \frac {B \size s} \sigma \paren {e^{-\lambda_N \sigma} - e^{-\lambda_M \sigma} } + B \epsilon\)




















\(\ds \)

\(\le\)







\(\ds \frac {B \epsilon \size s} \sigma + B \epsilon\)









Finally letting $\map \Im s = t$:

$\dfrac {\size s} \sigma = \dfrac {\sqrt {\sigma^2 + t^2} } \sigma = \sqrt {1 + \dfrac {t^2} {\sigma^2} }$
and:

$\dfrac {\pi} 2 > A \ge \map \arg s = \map \arctan {\dfrac t \sigma}$
so $\dfrac t \sigma < \tan A$ is bounded uniformly in $D_{A, \delta}$.
Thus letting $N \to \infty$, we have shown that:

$\ds \size {\sum_{n \mathop = M}^\infty a_n e^{-\lambda_n s} } \to 0$
as $M \to \infty$ uniformly in $D_{A, \delta}$.
$\blacksquare$





