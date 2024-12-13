# 

Source: https://proofwiki.org/wiki/Integration_by_Parts/Riemann-Stieltjes_Integral

Theorem
Let $f, \alpha$ be a real functions that are bounded on $\closedint a b$.
Suppose that $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$.

Then, $\alpha$ is Riemann-Stieltjes integrable with respect to $f$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \alpha + \int_a^b \alpha \rd f = \map f b \map \alpha b - \map f a \map \alpha a$


Proof
Let $\epsilon > 0$ be arbitrary.
By definition of the Riemann-Stieltjes integral, let $P_\epsilon$ be a subdivision of $\closedint a b$ such that:

For every $P$ finer than $P_\epsilon$, $\size {\map S {P, f, \alpha} - \int_a^b f \rd \alpha} < \epsilon$

Let $P = \set {x_0, \dotsc, x_n}$ be an arbitrary subdivision finer than $P_\epsilon$.
Let $t_k \in \closedint {x_{k - 1} } {x_k}$ for all $k \in \set {1, \dotsc, n}$.
Then:














\(\ds \map S {P, \alpha, f}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map \alpha {t_k} \paren {\map f {x_k} - \map f {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {x_k} \map \alpha {t_k} - \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \map \alpha {t_k}\)





Linear Combination of Indexed Summations



We also have:














\(\ds \map f b \map \alpha b - \map f a \map \alpha a\)

\(=\)







\(\ds \map f {x_n} \map \alpha {x_n} - \map f {x_0} \map \alpha {x_0}\)





Definition of Finite Subdivision














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \paren {\map f {x_k} \map \alpha {x_k} - \map f {x_{k - 1} } \map \alpha {x_{k - 1} } }\)





Telescoping Series














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {x_k} \map \alpha {x_k} - \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \map \alpha {x_{k - 1} }\)





Linear Combination of Indexed Summations



Combining the above:














\(\ds \map f b \map \alpha b - \map f a \map \alpha a - \map S {P, \alpha, f}\)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \map f {x_k} \map \alpha {x_k} - \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \map \alpha {x_{k - 1} } } - \paren {\sum_{k \mathop = 1}^n \map f {x_k} \map \alpha {t_k} - \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \map \alpha {t_k} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{k \mathop = 1}^n \map f {x_k} \map \alpha {x_k} - \sum_{k \mathop = 1}^n \map f {x_k} \map \alpha {t_k} } + \paren {\sum_{k \mathop = 1}^n \map f {x_{k - 1} } \map \alpha {t_k} - \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \map \alpha {x_{k - 1} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {x_k} \paren {\map \alpha {x_k} - \map \alpha {t_k} } + \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \paren {\map \alpha {t_k} - \map \alpha {x_{k - 1} } }\)





Linear Combination of Indexed Summations




Now, consider $y_\ell \in \R$ defined for all $\ell \in \set {0, 1, \dotsc, 2 n - 1, 2 n}$ as:

$y_{2 k} = x_k$
$y_{2 k - 1} = t_k$
Since $y_{2 k - 2} = x_{k - 1} \le t_k = y_{2 k - 1}$ and $t_{2 k - 1} = t_k \le x_k = y_{2 k}$, we have:

$y_0 \le y_1 \le \dotso \le y_{2 n - 1} \le y_{2 n}$
As $y_0 = x_0 = a$ and $y_{2 n} = x_n = b$, it follows that:

$P' := \set {y_0, y_1, \dotsc, y_{2 n - 1}, y_{2 n}}$
is a subdivision of $\closedint a b$.
Furthermore, since $P_\epsilon \subseteq P \subseteq P'$, it follows that $P'$ is finer than $P_\epsilon$.

Let $t'_\ell \in \closedint {y_{\ell - 1}} {y_\ell}$ be defined for all $\ell \in \set {1, \dotsc, 2 n}$ as:

$t'_{2 k} := x_k = y_{2 k} \in \closedint {y_{2 k - 1}} {y_{2 k}}$
$t'_{2 k - 1} := x_{k - 1} = y_{2 k - 2} \in \closedint {y_{2 k - 2}} {y_{2 k - 1}}$
Then:














\(\ds \map S {P', f, \alpha}\)

\(=\)







\(\ds \sum_{\ell \mathop = 1}^{2 n} \map f {t'_\ell} \paren {\map \alpha {y_\ell} - \map \alpha {y_{\ell - 1} } }\)





Definition of Riemann-Stieltjes Sum, noting that repeated values $y_\ell$ can be ignored, since if $y_{\ell - 1} = y_\ell$, then $\map \alpha {y_\ell} - \map \alpha {y_{\ell - 1} } = 0$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t'_{2 k} } \paren {\map \alpha {y_{2 k} } - \map \alpha {y_{2 k - 1} } } + \sum_{k \mathop = 1}^n \map f {t'_{2 k - 1} } \paren {\map \alpha {y_{2 k - 1} } - \map \alpha {y_{2 k - 2} } }\)





Separating the sum into even and odd $\ell$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {x_k} \paren {\map \alpha {x_k} - \map \alpha {t_k} } + \sum_{k \mathop = 1}^n \map f {x_{k - 1} } \paren {\map \alpha {t_k} - \map \alpha {x_{k - 1} } }\)





Definitions of $y_\ell$ and $t'_\ell$














\(\ds \)

\(=\)







\(\ds \map f b \map \alpha b - \map f a \map \alpha a - \map S {P, \alpha, f}\)





Above



Therefore:














\(\ds \size {\map S {P, \alpha, f} - \paren {\map f b \map \alpha b - \map f a \map \alpha a - \int_a^b f \rd \alpha} }\)

\(=\)







\(\ds \size {- \paren {\map f b \map \alpha b - \map f a \map \alpha a - \map S {P, \alpha, f} - \int_a^b f \rd \alpha} }\)




















\(\ds \)

\(=\)







\(\ds \size {\map f b \map \alpha b - \map f a \map \alpha a - \map S {P, \alpha, f} - \int_a^b f \rd \alpha}\)





Absolute Value of Negative














\(\ds \)

\(=\)







\(\ds \size {\map S {P', f, \alpha} - \int_a^b f \rd \alpha}\)





Above














\(\ds \)

\(<\)







\(\ds \epsilon\)





Definition of $P_\epsilon$, since $P'$ is finer than $P_\epsilon$




Since $P$ finer than $P_\epsilon$ and $\epsilon > 0$ were arbitrary, by definition of the Riemann-Stieltjes integral:

$\int_a^b \alpha \rd f = \map f b \map \alpha b - \map f a \map \alpha a - \int_a^b f \rd \alpha$
The result follows.
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous) ... (next): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.5$: Theorem $7.6$




