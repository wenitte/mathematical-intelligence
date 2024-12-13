# 

Source: https://proofwiki.org/wiki/Integration_by_Substitution/Riemann-Stieltjes_Integral/Increasing

Theorem
Let $g$ be a real function that is continuous and strictly increasing on $\closedint a b$.
Let $f, \alpha$ be real functions that are bounded on $\closedint {\map g a} {\map g b}$.
Further suppose that $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint {\map g a} {\map g b}$.

Let $h, \beta : \closedint a b \to \R$ be defined as:

$\map h x = \map f {\map g x}$
$\map \beta x = \map \alpha {\map g x}$
Then, $h$ is Riemann-Stieltjes integrable with respect to $\beta$ on $\closedint a b$ and:

$\ds \int_a^b h \rd \beta = \int_{\map g a}^{\map g b} f \rd \alpha$


Proof
For any $x \in \closedint a b$, $\map g x < \map g a$ implies $x < a$ by definition of strictly increasing, so:

$\forall x \in \closedint a b: \map g x \ge \map g a$
Likewise, $\map g x > \map g b$ implies $x > b$, so:

$\forall x \in \closedint a b: \map g x \le \map g b$
Together:

$\Img g \subseteq \closedint {\map g a} {\map g b}$
But by the Intermediate Value Theorem:

$\closedint {\map g a} {\map g b} \subseteq \Img g$
Therefore:

$\Img g = \closedint {\map g a} {\map g b}$
Then, by Inverse of Strictly Monotone Function, $g$ has an inverse $g^{-1} : \closedint {\map g a} {\map g b} \to \closedint a b$.
Furthermore, $g^{-1}$ is strictly increasing.

Let $\epsilon > 0$ be arbitrary.
By definition of the Riemann-Stieltjes integral, there exists a subdivision $P'_\epsilon$ of $\closedint {\map g a} {\map g b}$ such that:

For each $P'$ finer than $P'_\epsilon$, $\ds \size {\map S {P', f, \alpha} - \int_{\map g a}^{\map g b} f \rd \alpha} < \epsilon$.
Suppose $P'_\epsilon = \set {y_0, y_1, \dotsc, y_{n - 1}, y_n}$.
Then, define $P_\epsilon = g^{-1} \sqbrk {P'_\epsilon}$.
Since $g^{-1}$ is strictly increasing:

$a = \map {g^{-1}} {\map g a} = \map {g^{-1}} {y_0} < \map {g^{-1}} {y_1} < \dotso < \map {g^{-1}} {y_{n - 1}} < \map {g^{-1}} {y_n} = \map {g^{-1}} {\map g b} = b$
we have that $P_\epsilon$ is a subdivision of $\closedint a b$.

Now, let $P = \set {x_0, \dotsc, x_m}$ be a subdivision of $\closedint a b$ that is finer than $P_\epsilon$.
Define $P' = g \sqbrk P$.
As above, since $g$ is strictly increasing, $P'$ is a subdivision of $\closedint {\map g a} {\map g b}$.
Furthermore, for every $k$:

$y_k = \map g {\map {g^{-1}} {y_k}} \in g \sqbrk {P_\epsilon} \subseteq g \sqbrk P = P'$
Thus, $P'$ is finer than $P'_\epsilon$.
Hence:














\(\ds \map S {P, h, \beta}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \map h {t_k} \paren {\map \beta {x_k} - \map \beta {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^m \map f {\map g {t_k} } \paren {\map \alpha {\map g {x_k} } - \map \alpha {\map g {x_{k - 1} } } }\)





Definitions of $h$ and $\beta$














\(\ds \)

\(=\)







\(\ds \map S {P', f, \alpha}\)





Definition of Riemann-Stieltjes Sum, since $\map g {x_{k - 1} } \le \map g {t_k} \le \map g {x_k}$



Therefore:














\(\ds \size {\map S {P, h, \beta} - \int_{\map g a}^{\map g b} f \rd \alpha}\)

\(=\)







\(\ds \size {\map S {P', f, \alpha} - \int_{\map g a}^{\map g b} f \rd \alpha}\)





Above














\(\ds \)

\(<\)







\(\ds \epsilon\)





Definition of $P'_\epsilon$




Since $\epsilon > 0$ was arbitrary, by definition of the Riemann-Stieltjes integral:

$\ds \int_a^b h \rd \beta = \int_{\map g a}^{\map g b} f \rd \alpha$
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.6$: Theorem $7.7$




