# 

Source: https://proofwiki.org/wiki/Measurable_Function_is_Pointwise_Limit_of_Simple_Functions



Theorem
Let $\struct {X, \Sigma}$ be a measurable space.
Let $f: X \to \overline \R$ be a $\Sigma$-measurable function.

Then there exists a sequence $\sequence {f_n}_{n \mathop \in \N} \in \map \EE \Sigma$ of simple functions, such that:

$\forall x \in X: \map f x = \ds \lim_{n \mathop \to \infty} \map {f_n} x$
That is, such that $f = \ds \lim_{n \mathop \to \infty} f_n$ pointwise.

If $f \ge 0$, the sequence $\sequence {f_n}_{n \mathop \in \N}$ may furthermore be taken to be increasing.


Proof
First, let us prove the theorem when $f$ is a positive $\Sigma$-measurable function.
Now for any $n \in \N$, define for $0 \le k \le n 2^n$:

${A_k}^n := \begin{cases}
\set {k 2^{-n} \le f < \paren {k + 1} 2^{-n} } & : k \ne n 2^n \\
\set {f \ge n} & : k = n 2^n

\end{cases}$
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

It remains to show that $\ds \lim_{n \mathop \to \infty} f_n = f$ pointwise.
Let $x \in X$ be arbitrary.
If $\map f x = +\infty$, then for all $n \in \N$, $x \in {A_{n 2^n} }^n$, so that:

$\map {f_n} x = n$
Now clearly, $\ds \lim_{n \mathop \to \infty} n = +\infty$, showing convergence for these $x$.
If $\map f x < +\infty$, then for some $n \in \N$, $\map f x < n$.
By the reasoning above, we then have for all $m \ge n$:

$\size {\map f x - \map {f_m} x} < 2^{-m}$
which by Sequence of Powers of Number less than One implies that:

$\ds \lim_{n \mathop \to \infty} \map {f_n} x = \map f x$
Thus $\ds \lim_{n \mathop \to \infty} f_n = f$ pointwise.

This establishes the result for positive measurable $f$.
For arbitrary $f$, by Difference of Positive and Negative Parts, we have:

$f = f^+ - f^-$
where $f^+$ and $f^-$ are the positive and negative parts of $f$.
By Function Measurable iff Positive and Negative Parts Measurable, $f^+$ and $f^-$ are positive measurable functions.
Thus we find sequences ${f_n}^+$ and ${f_n}^-$ converging pointwise to $f^+$ and $f^-$, respectively.
The Sum Rule for Real Sequences implies that for all $x \in X$:

$\ds \lim_{n \mathop \to \infty} \map { {f_n}^+} x - \map { {f_n}^-} x = \map {f^+} x - \map {f^-} x = \map f x$
Furthermore, we have for all $n \in \N$ and $x \in X$:














\(\ds \size {\map { {f_n}^+} x - \map { {f_n}^-} x}\)

\(=\)







\(\ds \map { {f_n}^+} x + \map { {f_n}^-} x \le \map {f^+} x + \map {f^-} x\)




















\(\ds \)

\(=\)







\(\ds \size {\map f x}\)





Sum of Positive and Negative Parts




This theorem requires a proof.In particular: Prove that $\sequence {f_n}_{n \mathop \in \N}$ is increasingYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by crafting such a proof.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{ProofWanted}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Hence the result.
$\blacksquare$


Also see
Bounded Measurable Function is Uniform Limit of Simple Functions, a strengthening when $f$ is bounded


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $8.8$




