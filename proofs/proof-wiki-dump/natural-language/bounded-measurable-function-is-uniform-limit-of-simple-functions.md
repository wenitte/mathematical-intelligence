# 

Source: https://proofwiki.org/wiki/Bounded_Measurable_Function_is_Uniform_Limit_of_Simple_Functions



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \overline \R$ be a bounded $\Sigma$-measurable function.

Then there exists a sequence $\sequence {f_n}_{n \mathop \in \N} \in \map \EE \Sigma$ of simple functions, such that:

$\forall \epsilon > 0: \exists n \in \N: \forall x \in X: \size {\map f x - \map {f_n} x} < \epsilon$
That is, such that $\ds f = \lim_{n \mathop \to \infty} f_n$ uniformly.

The sequence $\sequence {f_n}_{n \mathop \in \N}$ may furthermore be taken to satisfy:

$\forall n \in \N: \size {f_n} \le \size f$
where $\size f$ denotes the absolute value of $f$.


Proof
First, let us prove the theorem when $f$ is a positive $\Sigma$-measurable function.
Now for any $n \in \N$, define for $0 \le k \le n 2^n$:

${A_k}^n := \begin {cases}
 \set {k 2^{-n} \le f < \paren {k + 1} 2^{-n} } & : k \ne n 2^n \\
 \set {f \ge n} & : k = n 2^n
\end {cases}$
where for example $\set {f \ge n}$ is short for $\set {x \in X: \map f x \ge n}$.
It is immediate that the ${A_k}^n$ are pairwise disjoint, and that:

$\ds \bigcup_{k \mathop = 0}^{n 2^n} {A_k}^n = X$
Subsequently, define $f_n: X \to \overline \R$ by:

$\map {f_n} x := \ds \sum_{k \mathop = 0}^{n 2^n} k 2^{-n} \map {\chi_{ {A_k}^n} } x$
where $\chi_{ {A_k}^n}$ is the characteristic function of ${A_k}^n$.

Now if $\map f x < n$, then we have for some $k < n 2^{-n}$:

$x \in {A_k}^n$
so that:














\(\ds \size {\map f x - \map {f_n} x}\)

\(=\)







\(\ds \size {\map f x - k 2^{-n} }\)




















\(\ds \)

\(<\)







\(\ds 2^{-n}\)









since $x \in {A_k}^n$ if and only if $k 2^{-n} \le \map f x < \paren {k + 1} 2^{-n}$.
In particular, since $\map {f_n} x \le n$ for all $x \in X$, we conclude that pointwise, $f_n \le f$, for all $n \in \N$.

By Characterization of Measurable Functions and Sigma-Algebra Closed under Intersection, it follows that:

${A_{n 2^n} }^n = \set {f \ge n}$
${A_k}^n = \set {f \ge k 2^{-n} } \cap \set {f < \paren {k + 1} 2^{-n} }$
are all $\Sigma$-measurable sets.
Hence, by definition, all $f_n$ are $\Sigma$-simple functions.

It remains to show that $\ds \lim_{n \mathop \to \infty} f_n = f$ uniformly.
Let $\epsilon > 0$ be arbitrary.
Let $n \in \N$ be a bound for $f$ satisfying $2^{-n} < \epsilon$.
By the reasoning above, we then have for all $m \ge n$, and all $x \in X$:

$\size {\map f x - \map {f_m} x} < 2^{-n}$

This establishes the result for positive measurable $f$.
For arbitrary $f$, by Difference of Positive and Negative Parts, we have:

$f = f^+ - f^-$
where $f^+$ and $f^-$ are the positive and negative parts of $f$.
By Function Measurable iff Positive and Negative Parts Measurable, $f^+$ and $f^-$ are positive measurable functions.
Thus we find sequences $f^+_n$ and $f^-_n$ converging uniformly to $f^+$ and $f^-$, respectively.
That is, given $\epsilon > 0$, there exist $n, n'$ such that:

$\forall m \ge n: \forall x \in X: \size {\map {f^+} x - \map { {f_m}^+} x} < \epsilon$
$\forall m \ge n': \forall x \in X: \size {\map {f^-} x - \map { {f_m}^-} x} < \epsilon$
By the Triangle Inequality, for all $m \in \N$:

$\size {\paren {\map {f^+} x - \map {f^-} x} - \paren {\map { {f_m}^+} x - \map { {f_m}^-} x} } \le \size {\map {f^+} x - \map { {f_m}^+} x} + \size {\map {f^-} x - \map { {f_m}^-} x}$
Hence, given $\epsilon > 0$, if $n, n'$ are sufficient for $\epsilon / 2$ for $f^+_m$ and $f^-_m$ respectively, it follows that for $m \ge \max \set {n, n'}$:

$\size {\map f x - \map {f_m} x} = \size {\paren {\map {f^+} x - \map {f^-} x} - \paren {\map { {f_m}^+} x - \map { {f_m}^-} x} } < \epsilon$
where $\map {f_m} x = \map { {f_m}^+} x - \map { {f_m}^-} x$.

Thus $f_m$ converges to $f$ uniformly.

Furthermore, we have for all $n \in \N$ and $x \in X$:

$\size {\map { {f_n}^+} x - \map { {f_n}^-} x} = \map { {f_n}^+} x + \map { {f_n}^-} x \le \map {f^+} x + \map {f^-} x = \size {\map f x}$
where the last equality follows from Sum of Positive and Negative Parts.

Hence the result.
$\blacksquare$


Also see
Measurable Function is Pointwise Limit of Simple Functions, a similar result when $f$ is not bounded


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 8$: Problem $7$




