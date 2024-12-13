# 

Source: https://proofwiki.org/wiki/Reduction_of_Riemann-Stieltjes_Integral_to_Identity_Integrator

Theorem
Let $f, \alpha$ be real functions that are bounded on $\closedint a b$.
Suppose that $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$.
Also suppose that $\alpha$ is continuously differentiable on $\closedint a b$.
Then, let $\alpha'$ be the derivative of $\alpha$ on $\closedint a b$.

Let $g : \closedint a b \to \R$ be defined as:

$\map g x = \map f x \map {\alpha'} x$
Let $\iota$ be the identity mapping on $\closedint a b$.

Then, $g$ is Riemann-Stieltjes integrable with respect to $\iota$ on $\closedint a b$ and:

$\ds \int_a^b g \rd \iota = \int_a^b f \rd \alpha$


Proof
As $f$ is bounded on $\closedint a b$, let $M \in \R$ such that:

$\forall x \in \closedint a b: \size {\map f x} \le M$
Without loss of generality, let $M > 0$.

Let $\epsilon > 0$ be arbitrary.
By Continuous Function on Closed Real Interval is Uniformly Continuous:

$\alpha'$ is uniformly continuous on $\closedint a b$
Therefore, there exists some $\delta_\epsilon$ such that, for all $x, y \in \closedint a b$ such that $\size {x - y} < \delta$:

$\map {\alpha'} x - \map {\alpha'} y < \dfrac \epsilon {2 M \paren {b - a}}$
By Existence of Subdivision with Small Norm, let $P'_\epsilon$ be a subdivision of $\closedint a b$ such that:

$\norm {P'_\epsilon} < \delta_\epsilon$
where $\norm {P'_\epsilon}$ denotes the norm of $P'_\epsilon$.
By definition of Riemann-Stieltjes integral, there is a subdivision $P' '_\epsilon$ such that:

For any $P$ finer than $P' '_\epsilon$, $\ds \size {\map S {P, f, \alpha} - \int_a^b f \rd \alpha} < \frac \epsilon 2$
Define $P_\epsilon := P'_\epsilon \cup P' '_\epsilon$.
Then, $P_\epsilon$ is a subdivision of $\closedint a b$ that is finer than both $P'_\epsilon$ and $P' '_\epsilon$.

Let $P = \set {x_0, x_1, \dotsc, x_{n - 1}, x_n}$ be an arbitrary subdivision of $\closedint a b$ that is finer than $P_\epsilon$.
Then, $P$ is also finer than $P'_\epsilon$ and $P' '_\epsilon$.
For every $k \in \set {1, 2, \dotsc, x_{n - 1}, x_n}$, it follows from the Mean Value Theorem that:

$\paren 1 \quad \map {\alpha'} {v_k} = \dfrac {\map \alpha {x_k} - \map \alpha {x_{k - 1}}} {x_k - x_{k - 1}}$
for some $v_k \in \openint {x_{k - 1}} {x_k}$.

Let $t_1, t_2, \dotsc, t_{n - 1}, t_n$ be fixed such that:

$t_k \in \closedint {x_{k - 1}} {x_k}$
Let $\map S {P, f, \alpha}$ denote the Riemann-Stieltjes sum of $f$ with respect to $\alpha$ for $P$, using $\paren {t_k}_k$.
Let $\map S {P, g, \iota}$ denote the Riemann-Stieltjes sum of $g$ with respect to $\iota$ for $P$, using $\paren {t_k}_k$.
For every $k \in \set {1, \dotsc, n}$, we have:




\(\text {(2)}: \quad\)









\(\ds \size {v_k - t_k}\)

\(\le\)







\(\ds x_k - x_{k - 1}\)





as $t_k, v_k \in \closedint {x_{k - 1} } {x_k}$














\(\ds \)

\(\le\)







\(\ds \norm P\)





Definition of Norm of Subdivision














\(\ds \)

\(\le\)







\(\ds \norm {P'_\epsilon}\)





Norm of Refinement is no Greater than Norm of Subdivision














\(\ds \)

\(<\)







\(\ds \delta_\epsilon\)





Definition of $P'_\epsilon$



Therefore:














\(\ds \map S {P, f, \alpha} - \map S {P, g, \iota}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } } - \sum_{k \mathop = 1}^n \map g {t_k} \paren {\map \iota {x_k} - \map \iota {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \map {\alpha'} {v_k} \paren {x_k - x_{k - 1} } - \sum_{k \mathop = 1}^n \map f {t_k} \map {\alpha'} {t_k} \paren {x_k - x_{k - 1} }\)





Definitions of $g$ and $\iota$, and $\paren 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map {\alpha'} {v_k} - \map {\alpha'} {t_k} } \paren {x_k - x_{k - 1} }\)





Linear Combination of Indexed Summations




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \size {\map S {P, f, \alpha} - \map S {P, g, \iota} }\)

\(=\)







\(\ds \size {\sum_{k \mathop = 1}^n \map f {t_k} \paren {\map {\alpha'} {v_k} - \map {\alpha'} {t_k} } \paren {x_k - x_{k - 1} } }\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n \size {\map f {t_k} } \size {\map {\alpha'} {v_k} - \map {\alpha'} {t_k} } \paren {x_k - x_{k - 1} }\)





Triangle Inequality for Real Numbers, Absolute Value Function is Completely Multiplicative, and Definition of Finite Subdivision














\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = 1}^n M \size {\map {\alpha'} {v_k} - \map {\alpha'} {t_k} } \paren {x_k - x_{k - 1} }\)





Definition of $M$














\(\ds \)

\(<\)







\(\ds \sum_{k \mathop = 1}^n M \frac \epsilon {2 M \paren {b - a} } \paren {x_k - x_{k - 1} }\)





Definition of $\delta_\epsilon$, as $\size {v_k - t_k} < \delta_\epsilon$ by $\paren 2$














\(\ds \)

\(=\)







\(\ds \frac \epsilon {2 \paren {b - a} } \sum_{k \mathop = 1}^n \paren {x_k - x_{k - 1} }\)





Indexed Summation of Multiple of Mapping














\(\ds \)

\(=\)







\(\ds \frac \epsilon {2 \paren {b - a} } \paren {x_n - x_0}\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \frac \epsilon {2 \paren {b - a} } \paren {b - a}\)





Definition of Finite Subdivision














\(\ds \)

\(=\)







\(\ds \frac \epsilon 2\)









Finally:














\(\ds \size {\map S {P, g, \iota} - \int_a^b f \rd \alpha}\)

\(=\)







\(\ds \size {\map S {P, g, \iota} - \map S {P, f, \alpha} + \map S {P, f, \alpha} - \int_a^b f \rd \alpha}\)




















\(\ds \)

\(\le\)







\(\ds \size {\map S {P, f, \alpha} - \map S {P, g, \iota} } + \size {\map S {P, f, \alpha} - \int_a^b f \rd \alpha}\)





Triangle Inequality for Real Numbers, Absolute Value of Negative














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \size {\map S {P, f, \alpha} - \int_a^b f \rd \alpha}\)





$\paren 3$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





Definition of $P' '_\epsilon$, since $P$ is finer than $P' '_\epsilon$














\(\ds \)

\(=\)







\(\ds \epsilon\)









As $t_1, \dotsc, t_n$, $P$, and $\epsilon$ were all arbitrary in their respective domains, it follows from the definition of the Riemann-Stieltjes integral that:

$\ds \int_a^b g \rd \iota = \int_a^b f \rd \alpha$
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.7$: Theorem $7.8$




