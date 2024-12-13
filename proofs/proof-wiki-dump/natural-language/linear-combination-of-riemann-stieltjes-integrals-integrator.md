# 

Source: https://proofwiki.org/wiki/Linear_Combination_of_Riemann-Stieltjes_Integrals/Integrator

Theorem
Let $f, \alpha, \beta$ be real functions that are bounded on $\closedint a b$.
Let $c_1, c_2 \in \R$.
Suppose that $f$ is Riemann-Stieltjes integrable with respect both $\alpha$ and $\beta$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \alpha = A$
$\ds \int_a^b f \rd \beta = B$

Then, $f$ is Riemann-Stieltjes integrable with respect to $\gamma : \closedint a b \to \R$ defined as:

$\map \gamma x = c_1 \map \alpha x + c_2 \map \beta x$
and furthermore:

$\ds \int_a^b f \rd \gamma = c_1 A + c_2 B$


Proof
Let $\epsilon > 0$ be arbitrary.
By definition of the Riemann-Stieltjes integral, let $P'_\epsilon, P' '_\epsilon$ be subdivisions of $\closedint a b$ such that:

For every $P$ finer than $P'_\epsilon$, $\size {\map S {P, f, \alpha} - A} < \dfrac \epsilon {\size {c_1} + \size {c_2} + 1}$
For every $P$ finer than $P' '_\epsilon$, $\size {\map S {P, f, \beta} - B} < \dfrac \epsilon {\size {c_1} + \size {c_2} + 1}$
Define $P_\epsilon = P'_\epsilon \cup P' '_\epsilon$ to be a subdivision that is finer than both $P'_\epsilon$ and $P' '_\epsilon$.

Let $P = {x_0, \dotsc, x_n} \supseteq P_\epsilon$ be an arbitrary subdivision that is finer than $P_\epsilon$.
Clearly, $P$ is also finer than $P'_\epsilon$ and $P' '_\epsilon$.
Finally, fix the $t_1, \dotsc, t_k$ for the following Riemann-Stieltjes sum.

We have:














\(\ds \map S {P, f, \gamma}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \gamma {x_k} - \map \gamma {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\paren {c_1 \map \alpha {x_k} + c_2 \map \beta {x_k} } - \paren {c_1 \map \alpha {x_{k - 1} } + c_2 \map \beta {x_{k - 1} } } }\)





Definition of $\gamma$














\(\ds \)

\(=\)







\(\ds c_1 \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } } + c_2 \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \beta {x_k} - \map \beta {x_{k - 1} } }\)





Linear Combination of Indexed Summations














\(\ds \)

\(=\)







\(\ds c_1 \map S {P, f, \alpha} + c_2 \map S {P, f, \beta}\)





Definition of Riemann-Stieltjes Sum



And so:














\(\ds \size {\map S {P, f, \gamma} - \paren {c_1 A + c_2 B} }\)

\(=\)







\(\ds \size {\paren {c_1 \map S {P, f, \alpha} + c_2 \map S {P, f, \beta} } - \paren {c_1 A + c_2 B} }\)




















\(\ds \)

\(=\)







\(\ds \size {c_1 \paren {\map S {P, f, \alpha} - A} + c_2 \paren {\map S {P, f, \beta} - B} }\)




















\(\ds \)

\(\le\)







\(\ds \size {c_1} \size {\map S {P, f, \alpha} - A} + \size {c_2} \size {\map S {P, f, \beta} - B}\)





Triangle Inequality for Real Numbers and Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \size {c_1} \frac \epsilon {\size {c_1} + \size {c_2} + 1} + \size {c_2} \frac \epsilon {\size {c_1} + \size {c_2} + 1}\)





Definitions of $P'_\epsilon$ and $P' '_\epsilon$














\(\ds \)

\(=\)







\(\ds \frac {\size {c_1} + \size {c_2} } {\size {c_1} + \size {c_2} + 1} \epsilon\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)










As $\epsilon > 0$ was arbitrary, by the definition of the Riemann-Stieltjes integral:

$\ds \int_a^b f \rd \gamma = c_1 A + c_2 B$
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.4$: Theorem $7.3$




