# 

Source: https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_by_Norm_of_Subdivision/Riemann_Integral

Theorem
Let $f$ be a real function that is bounded on $\closedint a b$.
Suppose $f$ is Riemann integrable on $\closedint a b$.
Let $\iota$ be the identity mapping on $\closedint a b$.

Then, $f$ is Riemann-Stieltjes integrable with respect to $\iota$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \iota = \int_a^b \map f x \rd x$
where the integral on the right is understood to denote the Riemann integral.


Proof
Let $\epsilon > 0$ be arbitrary.
By definition of the Riemann integral, there exists some $\delta_\epsilon$ such that:

For every finite subdivision $\Delta = \set {x_0, \dotsc, x_n}$ of $\closedint a b$, and every $C = \paren {c_i}_{1 \mathop \le i \mathop \le n}$ such that $c_i \in \closedint {x_{i - 1}} {x_i}$:
If the norm $\norm \Delta < \delta_\epsilon$, then $\ds \size {\map S {f; \Delta, C} - \int_a^b \map f x \rd x} < \epsilon$
where $\map S {f; \Delta, C}$ denotes a Riemann sum of $f$ for the subdivision $\Delta$.

Let $P = \set {x_0, \dotsc, x_n}$ be a finite subdivision of $\closedint a b$ such that $\norm P < \delta_\epsilon$.
Then:














\(\ds \map S {P, f, \iota}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \iota {x_k} - \map \iota {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum, denoted by $\map S {P, f, \iota}$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {x_k - x_{k - 1} }\)





Definition of Identity Mapping














\(\ds \)

\(=\)







\(\ds \map S {f; P, C}\)





Definition of Riemann Sum, with $C = \paren {t_1, \dotsc, t_n}$








\(\ds \leadsto \ \ \)





\(\ds \size {\map S {P, f, \iota} - \int_a^b \map f x \rd x}\)

\(=\)







\(\ds \size {\map S {f; P, C} - \int_a^b \map f x \rd x}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





$\norm P < \delta_\epsilon$



As $P$ with $\norm P < \delta_\epsilon$ and $\epsilon > 0$ were arbitrary, the result follows from Riemann-Stieltjes Integral by Norm of Subdivision.
$\blacksquare$





