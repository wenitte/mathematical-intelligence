# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Riemann-Stieltjes_Integrals/Integrand

Theorem
Let $f, g, \alpha$ be real functions that are bounded on $\closedint a b$.
Let $c_1, c_2 \in \R$.
Suppose that $f$ and $g$ are Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \alpha = A$
$\ds \int_a^b g \rd \alpha = B$

Then, the real function $h : \closedint a b \to \R$ defined as:

$\map h x = c_1 \map f x + c_2 \map g x$
is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$ and:

$\ds \int_a^b h \rd \alpha = c_1 A + c_2 B$


Proof
Let $\epsilon > 0$ be arbitrary.
By definition of the Riemann-Stieltjes integral, let $P'_\epsilon, P' '_\epsilon$ be subdivisions of $\closedint a b$ such that:

For every $P$ finer than $P'_\epsilon$, $\size {\map S {P, f, \alpha} - A} < \dfrac \epsilon {\size {c_1} + \size {c_2} + 1}$
For every $P$ finer than $P' '_\epsilon$, $\size {\map S {P, g, \alpha} - B} < \dfrac \epsilon {\size {c_1} + \size {c_2} + 1}$
Define $P_\epsilon = P'_\epsilon \cup P' '_\epsilon$ to be a subdivision that is finer than both $P'_\epsilon$ and $P' '_\epsilon$.

Let $P = {x_0, \dotsc, x_n} \supseteq P_\epsilon$ be an arbitrary subdivision that is finer than $P_\epsilon$.
Clearly, $P$ is also finer than $P'_\epsilon$ and $P' '_\epsilon$.
Finally, fix the $t_1, \dotsc, t_k$ for the following Riemann-Stieltjes sum.

We have:














\(\ds \map S {P, h, \alpha}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map h {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds c_1 \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } } + c_2 \sum_{k = 1}^n \map g {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Linear Combination of Indexed Summations














\(\ds \)

\(=\)







\(\ds c_1 \map S {P, f, \alpha} + c_2 \map S {P, g, \alpha}\)





Definition of Riemann-Stieltjes Sum



And so:














\(\ds \size {\map S {P, h, \alpha} - \paren {c_1 A + c_2 B} }\)

\(=\)







\(\ds \size {\paren {c_1 \map S {P, f, \alpha} + c_2 \map S {P, g, \alpha} } - \paren {c_1 A + c_2 B} }\)




















\(\ds \)

\(=\)







\(\ds \size {c_1 \paren {\map S {P, f, \alpha} - A} + c_2 \paren {\map S {P, g, \alpha} - B} }\)




















\(\ds \)

\(\le\)







\(\ds \size {c_1} \size {\map S {P, f, \alpha} - A} + \size {c_2} \size {\map S {P, g, \alpha} - B}\)





Triangle Inequality for Real Numbers and Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \size {c_1} \frac \epsilon {\size {c_1} + \size {c_2} + 1} + \size {c_2} \frac \epsilon {\size {c_1} + \size {c_2} + 1}\)





Definitions of $P'_\epsilon$ and $P' '_\epsilon$














\(\ds \)

\(=\)







\(\ds \frac {\size {c_1} + \size {c_1} } {\size {c_1} + \size {c_2} + 1} \epsilon\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)










As $\epsilon > 0$ was arbitrary, by the definition of the Riemann-Stieltjes integral:

$\ds \int_a^b h \rd \alpha = c_1 A + c_2 B$
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.4$: Theorem $7.2$




