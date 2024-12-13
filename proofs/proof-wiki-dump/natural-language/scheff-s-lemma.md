# 

Source: https://proofwiki.org/wiki/Scheff%C3%A9%27s_Lemma


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f_n$ be a sequence of $\mu$-integrable functions that converge almost everywhere to another $\mu$-integrable function $f$.
Then $f_n$ converges to $f$ in $L^1$ if and only if $\ds \int_X \size {f_n} \rd \mu$ converges to $\ds \int_X \size f \rd \mu$.


Corollary
Let $\struct {X, \Sigma, \mu}$ be a measure space.
Let $f_n$ be a sequence of $\mu$-integrable functions that convergence in measure to another $\mu$-integrable function $f$.
Then $f_n$ converges to $f$ in $L^1$ if and only if $\ds \int_X \size {f_n} \rd \mu$ converges to $\ds \int_X \size f \rd \mu$.


Proof
Sufficient Condition
Let $f_n \to f$ in $L^1$.
Then:














\(\ds \size {\int_X \size f \rd \mu - \int_X \size {f_n} \rd \mu}\)

\(\le\)







\(\ds \int_X \size {f - f_n} d\mu\)





Reverse Triangle Inequality on $L^1$



and so $f_n \to f$ in $L^1$ implies the right hand side of this inequality goes to $0$ as $n$ grows to infinity.
Since the left hand side of the inequality is non-negative, it also goes to $0$ as $n$ grows to infinity.
$\Box$


Necessary Condition
Let $\ds \int_X \size {f_n} \rd \mu \to \int_X \size f \rd \mu$.
We wish to show that:

$\ds \int_X \size {f - f_n} \rd \mu \to 0$
First, by Triangle Inequality:

$\forall a, b \in \R: \size a + \size b - \size {a - b} \ge 0$
Therefore, for each $x \in X$:

$\size {\map f x} + \size {\map {f_n} x} - \size {\map f x - \map {f_n} x} \ge 0$
Thus, we may employ Fatou's Lemma for Integrals on the expression $\ds \int_X \liminf_n \size f + \size {f_n} - \size {f - f_n} \rd \mu$ to yield:

$(1): \ds \int_X \liminf_n \size f + \size {f_n} - \size {f - f_n} \rd \mu \le \liminf_n \int_X \size f + \size {f_n} - \size {f - f_n} \rd \mu$

Now, the integrand on the left hand side of $(1)$ equals $2 \size f$ almost everywhere since $f_n \to f$ pointwise almost everywhere.
So the integral on the left hand side of $(1)$ is:

$\ds 2 \int_X \size f \rd \mu$

We may thus rewrite $(1)$ as:














\(\ds 2 \int_X \size f \rd \mu\)

\(\le\)







\(\ds \liminf_n \int_X \size f + \size {f_n} - \size {f - f_n} \rd \mu\)




















\(\ds \)

\(=\)







\(\ds \liminf_n \int_X \size f \rd \mu + \liminf_n \int_X \size {f_n} \rd \mu + \liminf_n \paren{ - \int_X \size {f - f_n} \rd \mu }\)





Integral Operator is Linear














\(\ds \)

\(=\)







\(\ds 2 \int_x \size f \rd \mu + \liminf_n \paren{ -\int_X \size {f - f_n} \rd \mu }\)





by hypothesis: $\ds \int_X \size {f_n} \rd \mu \to \int_X \size f \rd \mu$














\(\ds \)

\(=\)







\(\ds 2 \int_x \size f \rd \mu - \limsup_n \int_X \size {f - f_n} \rd \mu\)





Properties of limsup and liminf



Rearranging the left hand side and right hand side of this inequality, we get:

$\ds \limsup_n \int_X \size {f - f_n} \rd \mu \le 0$
This implies that:

$\ds \int_X \size {f - f_n} \rd \mu \to 0$
$\blacksquare$


Source of Name
This entry was named for Henry Scheffé.





