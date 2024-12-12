# 

Source: https://proofwiki.org/wiki/Continuity_under_Integral_Sign

Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $U$ be a non-empty open set of a metric space.
Let $f: U \times X \to \R$ be a mapping satisfying:

$(1): \quad$ For all $\lambda \in U$, the mapping $x \mapsto \map f {\lambda, x}$ is $\mu$-integrable
$(2): \quad$ For $\mu$-almost all $x \in X$, the mapping $\lambda \mapsto \map f {\lambda, x}$ is continuous
$(3): \quad$ There exists a $\mu$-integrable $g: X \to \R$ such that:
$\forall \tuple {\lambda, x} \in U \times X: \size {\map f {\lambda, x} } \le \map g x$

Then the mapping $h: U \to \R$ defined by:

$\ds \map h \lambda := \int \map f {\lambda, x} \map {\rd \mu} x$
is continuous.


Proof
Let $\lambda_0 \in U$ be arbitrary.
Let $\sequence {\lambda_n}_{n \mathop \ge 1}$ be a sequence in $U$ which converges to $\lambda_0$.
Define the sequence of functions $f_n: X \to \R$, for $n = 0$ and $n \ge 1$ by $\map {f_n} x = \map f {\lambda_n, x}$.

By hypothesis $(1)$, for each $n \ge 1$, the function $f_n$ is $\mu$-integrable.
By hypothesis $(2)$, and by Sequential Continuity is Equivalent to Continuity in Metric Space, we have:

$\ds \map {f_0} x = \lim_{n \mathop \to \infty} \map {f_n} x$
for $\mu$-almost all $x \in X$.
By hypothesis $(3)$, we have:

$\size {\map {f_n} x} \le \map g x$
for all $x \in X$ and all $n \ge 1$.

Therefore by Lebesgue's Dominated Convergence Theorem:

$\ds \lim_{n \mathop \to \infty} \int f_n \rd \mu = \int f_0 \rd \mu$
That is:

$\ds \lim_{n \mathop \to \infty} \int \map f {\lambda_n, x} \rd \mu = \int \map f {\lambda_0, x} \rd \mu$
or in terms of $h$:

$\ds \lim_{n \mathop \to \infty} \map h {\lambda_n} = \map h {\lambda_0}$
Since the sequence $\sequence {\lambda_n}_{n \mathop \ge 1}$ was arbitrary, by Sequential Continuity is Equivalent to Continuity in Metric Space this shows that $h$ is continuous at $\lambda_0 \in U$.
But $\lambda_0 \in U$ was arbitrary, so $h$ is continuous in $U$.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $11.4$




