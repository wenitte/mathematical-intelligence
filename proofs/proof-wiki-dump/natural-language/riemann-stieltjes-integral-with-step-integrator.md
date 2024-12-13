# 

Source: https://proofwiki.org/wiki/Riemann-Stieltjes_Integral_with_Step_Integrator



Theorem
Let $a < c < b$ be real numbers.
Let $f$ be a real function that is bounded on $\closedint a b$.
Let $\alpha$ be a real function on $\closedint a b$ such that:

$\forall x \in \hointr a c: \map \alpha x = \map \alpha a$
$\forall x \in \hointl c b: \map \alpha x = \map \alpha b$
Suppose that:

Either $f$ is left-continuous at $c$, or $\map \alpha c = \map \alpha a$
Either $f$ is right-continuous at $c$, or $\map \alpha c = \map \alpha b$

Then, $f$ is Riemann-Stieltjes integrable with respect to $\alpha$ on $\closedint a b$ and:

$\ds \int_a^b f \rd \alpha = \map f c \paren {\map \alpha b - \map \alpha a}$


Proof
Let $\epsilon > 0$ be arbitrary.
The construction of $P_\epsilon$ will depend on which of $f$ and $\alpha$ are continuous on which sides at $c$.


Case $f$ Left- and Right-Continuous
Suppose $f$ is both left- and right-continuous at $c$.
Define $\epsilon' := \dfrac \epsilon {\size {\map \alpha c - \map \alpha a} + \size {\map \alpha b - \map \alpha c} + 1} > 0$.
By Continuous at Point iff Left-Continuous and Right-Continuous:

$f$ is continuous at $c$
Then, by definition, there is some $\delta > 0$ such that:

$\forall x: \size {x - c} < \delta \implies \size {\map f x - \map f c} < \epsilon'$
By Existence of Subdivision with Small Norm, there exists some subdivision $P'_\epsilon$ of $\closedint a b$ such that:

$\norm P < \delta$
where $\norm P$ denotes the norm of $P$.
Define $P_\epsilon := P'_\epsilon \cup \set c$.

Let $P = \set {x_0, \dotsc, x_n}$ be finer than $P_\epsilon$.
Then, $c \in P$, so for some $r \in \set {1, \dotsc, n - 1}$:

$x_r = c$
By Norm of Refinement is no Greater than Norm of Subdivision:

$\norm P < \delta$
We have:














\(\ds \map S {P, f, \alpha}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \map f {t_r} \paren {\map \alpha {x_r} - \map \alpha {x_{r - 1} } } + \map f {t_{r + 1} } \paren {\map \alpha {t_{r + 1} } - \map \alpha {t_r} }\)





For $k < r$ or $k > r + 1$, we have $\map \alpha {x_k} - \map \alpha {x_{k - 1} } = 0$














\(\ds \)

\(=\)







\(\ds \map f {t_r} \paren {\map \alpha c - \map \alpha a} + \map f {t_{r + 1} } \paren {\map \alpha b - \map \alpha c}\)





by hypothesis on $\alpha$








\(\ds \leadsto \ \ \)





\(\ds \size {\map S {P, f, \alpha} - \map f c \paren {\map \alpha b - \map \alpha a} }\)

\(=\)







\(\ds \size {\map f {t_r} \paren {\map \alpha c - \map \alpha a} + \map f {t_{r + 1} } \paren {\map \alpha b - \map \alpha c} - \map f c \paren {\map \alpha b - \map \alpha a} }\)




















\(\ds \)

\(=\)







\(\ds \size {\paren {\map f {t_r} - \map f c} \paren {\map \alpha c - \map \alpha a} + \paren {\map f {t_{r + 1} } - \map f c} \paren {\map \alpha b - \map \alpha c} }\)





$\map f c \map \alpha c - \map f c \map \alpha c = 0$














\(\ds \)

\(\le\)







\(\ds \size {\map f {t_r} - \map f c} \size {\map \alpha c - \map \alpha a} + \size {\map f {t_{r + 1} } - \map f c} \size {\map \alpha b - \map \alpha c}\)





Triangle Inequality for Real Numbers and Absolute Value Function is Completely Multiplicative














\(\ds \)

\(\le\)







\(\ds \epsilon' \size {\map \alpha c - \map \alpha a} + \epsilon' \size {\map \alpha b - \map \alpha c}\)





$c - t_r \le x_r - x_{r - 1} \le \norm P < \delta$, and likewise for $t_{r + 1}$














\(\ds \)

\(=\)







\(\ds \frac {\size {\map \alpha c - \map \alpha a} + \size {\map \alpha b - \map \alpha c} } {\size {\map \alpha c - \map \alpha a} + \size {\map \alpha b - \map \alpha c} + 1} \epsilon\)





Definition of $\epsilon'$














\(\ds \)

\(<\)







\(\ds \epsilon\)









$\Box$


Case $f$ is Left-Continuous and $\map \alpha c = \map \alpha b$
Suppose $f$ is left-continuous at $c$, and $\map \alpha c = \map \alpha b$.
Define $\epsilon' := \dfrac \epsilon {\size {\map \alpha c - \map \alpha a} + 1} > 0$.
By definition of left-continuous, there is some $\delta > 0$ such that:

$\forall x: c - \delta < x \le c \implies \size {\map f x - \map f c} < \epsilon'$
By Existence of Subdivision with Small Norm, there exists some subdivision $P'_\epsilon$ of $\closedint a b$ such that:

$\norm P < \delta$
where $\norm P$ denotes the norm of $P$.
Define $P_\epsilon := P'_\epsilon \cup \set c$.

Let $P = \set {x_0, \dotsc, x_n}$ be finer than $P_\epsilon$.
Then, $c \in P$, so for some $r \in \set {1, \dotsc, n - 1}$:

$x_r = c$
By Norm of Refinement is no Greater than Norm of Subdivision:

$\norm P < \delta$
We have:














\(\ds \map S {P, f, \alpha}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \map f {t_r} \paren {\map \alpha {x_r} - \map \alpha {x_{r - 1} } }\)





For $k < r$ or $k \ge r + 1$, we have $\map \alpha {x_k} - \map \alpha {x_{k - 1} } = 0$














\(\ds \)

\(=\)







\(\ds \map f {t_r} \paren {\map \alpha c - \map \alpha a}\)





by hypothesis on $\alpha$








\(\ds \leadsto \ \ \)





\(\ds \size {\map S {P, f, \alpha} - \map f c \paren {\map \alpha b - \map \alpha a} }\)

\(=\)







\(\ds \size {\map f {t_r} \paren {\map \alpha c - \map \alpha a} - \map f c \paren {\map \alpha b - \map \alpha a} }\)




















\(\ds \)

\(=\)







\(\ds \size {\paren {\map f {t_r} - \map f c} \paren {\map \alpha c - \map \alpha a} }\)





by hypothesis, $\map \alpha c = \map \alpha b$














\(\ds \)

\(=\)







\(\ds \size {\map f {t_r} - \map f c} \size {\map \alpha c - \map \alpha a}\)





Absolute Value Function is Completely Multiplicative














\(\ds \)

\(=\)







\(\ds \size {\map f {t_r} - \map f {x_r} } \size {\map \alpha c - \map \alpha a}\)





Definition of $r$














\(\ds \)

\(=\)







\(\ds \epsilon' \size {\map \alpha c - \map \alpha a}\)





$x_r - t_r \le x_r - x_{r - 1} \le \norm P < \delta$














\(\ds \)

\(=\)







\(\ds \frac \epsilon {\size {\map \alpha c - \map \alpha a} + 1} \size {\map \alpha c - \map \alpha a}\)





Definition of $\epsilon'$














\(\ds \)

\(=\)







\(\ds \frac {\size {\map \alpha c - \map \alpha a} } {\size {\map \alpha c - \map \alpha a} + 1} \epsilon\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









$\Box$


Case $f$ is Right-Continuous and $\map \alpha c = \map \alpha a$
This case is symmetrical to the previous one.
Hence, the details are omitted whenever they are identical to those above.

Let $\epsilon' := \dfrac \epsilon {\size {\map \alpha b - \map \alpha c} + 1}$.
By definition of right-continuous, choose $\delta > 0$ such that:

$\forall x: c \le x < c + \delta \implies \size {\map f x - \map f c} < \epsilon'$
Select $P'_\epsilon$ as above, such that:

$\norm {P'_\epsilon} < \delta$
Define $P_\epsilon = P'_\epsilon \cup \set c$ as above.

Let $P$ be finer than $P_\epsilon$.
Then, $\norm P < \delta$.
Let $x_r = c$ as above.
Thus:














\(\ds \map S {P, f, \alpha}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \map f {t_{r + 1} } \paren {\map \alpha {x_{r + 1} } - \map \alpha {x_r} }\)





For $k \le r$ or $k > r + 1$, we have $\map \alpha {x_k} - \map \alpha {x_{k - 1} } = 0$














\(\ds \)

\(=\)







\(\ds \map f {t_{r + 1} } \paren {\map \alpha b - \map \alpha c}\)





by hypothesis on $\alpha$








\(\ds \leadsto \ \ \)





\(\ds \size {\map S {P, f, \alpha} - \map f c \paren {\map \alpha b - \map \alpha a} }\)

\(=\)







\(\ds \size {\paren {\map f {t_{r + 1} } - \map f c} \paren {\map \alpha b - \map \alpha c} }\)





by hypothesis, $\map \alpha c = \map \alpha a$














\(\ds \)

\(=\)







\(\ds \size {\map f {t_{r + 1} } - \map f {x_r} } \size {\map \alpha b - \map \alpha c}\)





Absolute Value Function is Completely Multiplicative and $x_r = c$














\(\ds \)

\(\le\)







\(\ds \epsilon' \size {\map \alpha b - \map \alpha c}\)





$t_{r + 1} - x_r \le x_{r + 1} - x_r \le \norm P < \delta$














\(\ds \)

\(<\)







\(\ds \epsilon\)





Definition of $\epsilon'$



$\Box$


Case $\map \alpha a = \map \alpha c = \map \alpha b$
Suppose $\map \alpha c = \map \alpha a$ and $\map \alpha c = \map \alpha b$.
It follows immediately that:

$\forall x \in \closedint a b: \map \alpha x = \map \alpha c$
Therefore:

$\forall x, y \in \closedint a b: \map \alpha x - \map \alpha y = \map \alpha c - \map \alpha c = 0$
Define $P_\epsilon = \set {a, b}$.
Let $P = \set {x_0, \dotsc, x_n}$ be a subdivision of $\closedint a b$ that is finer than $P_\epsilon$.
Then:














\(\ds \map S {P, f, \alpha}\)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \paren {\map \alpha {x_k} - \map \alpha {x_{k - 1} } }\)





Definition of Riemann-Stieltjes Sum














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n \map f {t_k} \cdot 0\)





$\map \alpha {x_{k - 1} } = \map \alpha {x_k}$














\(\ds \)

\(=\)







\(\ds 0\)





Indexed Summation of Zero








\(\ds \leadsto \ \ \)





\(\ds \size {\map S {P, f, \alpha} - \map f c \paren {\map \alpha b - \map \alpha a} }\)

\(=\)







\(\ds \size {- \map f c \paren {\map \alpha b - \map \alpha a} }\)




















\(\ds \)

\(=\)







\(\ds \size {- \map f c \cdot 0}\)





$\map \alpha a = \map \alpha b$














\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)









$\Box$

In every case, we have constructed a subdivision $P_\epsilon$ of $\closedint a b$ such that, for every $P$ finer than $P_\epsilon$:

$\size {\map S {P, f, \alpha} - \map f c \paren {\map \alpha b - \map \alpha a}} < \epsilon$
Therefore, by definition of the Riemann-Stieltjes integral:

$\ds \int_a^b f \rd \alpha = \map f c \paren {\map \alpha b - \map \alpha a}$
$\blacksquare$


Sources
1974: Tom M. Apostol: Mathematical Analysis (2nd ed.) ... (previous): Chapter $7$ The Riemann-Stieltjes Integral: $\S 7.8$: Theorem $7.9$




