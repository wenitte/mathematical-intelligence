# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Riemann_and_Darboux_Integrals


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Let $\closedint a b$ be a closed real interval.
Let $f: \closedint a b \to \R$ be a real function.
Then:

the Riemann integral of $f$ over $\closedint a b$ exists and is equal to $L$
if and only if:

the Darboux integral of $f$ over $\closedint a b$ exists and is equal to $L$.


Proof
Riemann Integral $\implies$ Darboux Integral
Let $L$ be the Riemann integral of $f$ over $\closedint a b$.
Then $\forall \epsilon > 0: \exists \delta > 0$ such that for every finite subdivision with norm $< \delta$
and every sequence of corresponding sample points, the Riemann sum of the subdivision is in $\openint {L - \epsilon} {L + \epsilon}$.

Aiming for a contradiction, suppose the lower Darboux integral of $f$ over $\closedint a b$ is less than $L$.
Let:

$\ds \epsilon = L - \underline {\int_a^b} \map f x \rd x$
Because $\ds \underline {\int_a^b} \map f x \rd x < L$ it follows that $\epsilon > 0$.
Therefore, there is a $\delta$ that satisfies the conditions above.

Let $n = \ceiling {\dfrac {b - a} \delta}$.
Define:

$x_i = a + \dfrac i n \paren {b - a}$
Then the sequence $\sequence {x_i}_{0 \mathop \le i \mathop \le n}$ is a finite subdivision of $\closedint a b$.
Additionally, for every $i$:














\(\ds x_i - x_{i - 1}\)

\(=\)







\(\ds \paren {a + \frac i n \paren {b - a} } - \paren {a + \frac {i - 1} n \paren {b - a} }\)




















\(\ds \)

\(=\)







\(\ds \frac {b - a} n\)




















\(\ds \)

\(<\)







\(\ds \paren {b - a} \frac \delta {b - a}\)




















\(\ds \)

\(=\)







\(\ds \delta\)









So the norm of $\sequence {x_i} < \delta$.

Let $K$ be the lower Darboux sum of of $f$ over $\sequence {x_i}$.
The lower Darboux sum is a Riemann sum, so by the definition of $\delta$:

$\ds K > L - \epsilon = \underline {\int_a^b} \map f x \rd x$
But by the definition of lower Darboux integral:

$\ds K \le \underline {\int_a^b} \map f x \rd x$
These inequalities are contradictory, so our supposition that the lower Darboux integral is less than $L$ was false.
Therefore:

$\ds \underline {\int_a^b} \map f x \rd x \ge L$

A similar argument shows that:

$\ds \overline {\int_a^b} \map f x \rd x \le L$
But by Upper Darboux Integral Never Smaller than Lower Darboux Integral:

$\ds \underline {\int_a^b} \map f x \rd x \le \overline {\int_a^b} \map f x \rd x$

Thus, the following is true:

$\ds L \le \underline {\int_a^b} \map f x \rd x \le \overline {\int_a^b} \map f x \rd x \le L$
and we can conclude that:

$\ds L = \underline {\int_a^b} \map f x \rd x = \overline {\int_a^b} \map f x \rd x$
$\Box$


Darboux Integral $\implies$ Riemann Integral
Let $D$ be the Darboux integral of $f$ over $\closedint a b$.
Then for any $\epsilon' > 0$ there is a pair of subdivisions $P$ and $P'$ such that:

the lower Darboux sum $\map L P > D - \epsilon'$
and:

the upper Darboux sum $\map U {P'} < D + \epsilon'$.
Fix an $\epsilon > 0$, and choose such subdivisions for $\epsilon' = \dfrac 1 2 \epsilon$.
Let $Q = \sequence {y_0, \dotsc, y_m} = P \cup P'$.
Then from Lower Sum of Refinement and Upper Sum of Refinement, it follows that:

$D - \dfrac 1 2 \epsilon < \map L Q \le \map U Q < D + \dfrac 1 2 \epsilon$

Let $\delta' = \map \min {y_1 - y_0, \dotsc, y_m - y_{m - 1} }$ be the size of the smallest interval in $Q$.
Let $\ds r = \sup_{\closedint a b} \map f x - \inf_{\closedint a b} \map f x$ be an upper bound for $\size {\map f z - \map f y}$ for all $y, z \in \closedint a b$.
If $r = 0$, we can choose any $r > 0$, as any upper bound will do.
Let $\delta = \map \min {\delta', \dfrac {\epsilon} {2 r \paren {m - 1} } }$.
Fix a subdivision $\Delta = \sequence {x_0, \dotsc, x_n}$ with norm $< \delta$ and sequence of sample points $C = \sequence {t_1, \dotsc, t_n}$, with $x_{i - 1} \le t_i \le x_i$.

Each $\Delta x_i$ is less than every $\Delta y_j$, so for every $i$, either $\closedint {x_{i - 1} } {x_i}$ is contained in some $\closedint {y_{j - 1} } {y_j}$, or $\openint {x_{i - 1} } {x_i}$ contains exactly one point $y_j$.
There are $m - 1$ points that can be contained in an open interval, since $a \le x_i \le b$ for every $i$.
Therefore, there are at most $m - 1$ intervals $\closedint {x_{i - 1} } {x_i}$ which are not contained in a $\closedint {y_{j - 1} } {y_j}$.
Let $\set {i_k}$ be the indices $i$ of those intervals.
Let $j_k$ be the index of the unique $y_{j_k} \in \openint {x_{i_k - 1} } {x_{i_k} }$.
Then, $t_{i_k}$ is in at least one of $\closedint {x_{i_k - 1} } {y_{j_k} }$ and $\closedint {y_{j_k} } {x_{i_k} }$.
Let $\closedint {c_k} {d_k}$ be an interval that contains $t_{i_k}$, choosing the left one if $t_{i_k} = y_{j_k}$, and $\closedint {u_k} {v_k}$ be the other one.
Then:














\(\ds \paren {x_{i_k} - x_{i_k - 1} } \map f {t_{i_k} }\)

\(=\)







\(\ds \paren {y_{j_k} - x_{i_k - 1} } \map f {t_{i_k} } + \paren {x_{i_k} - y_{j_k} } \map f {t_{i_k} }\)




















\(\ds \)

\(=\)







\(\ds \paren {d_k - c_k} \map f {t_{i_k} } + \paren {v_k - u_k} \map f {t_{i_k} }\)









By the definition of $r$, for any point $s \in \closedint a b$:














\(\ds \size {\map f {t_{i_k} } - \map f s }\)

\(\le\)







\(\ds r\)





Definition of $r$














\(\ds \paren {v_k - u_k} \size {\map f {t_{i_k} } - \map f s }\)

\(\le\)







\(\ds \paren {v_k - u_k} r\)




















\(\ds \)

\(<\)







\(\ds \paren {x_{i_k} - x_{i_k - 1} } r\)





$\closedint {u_k} {v_k} \subsetneq \closedint {x_{i_k - 1} } {x_{i_k} }$














\(\ds \)

\(<\)







\(\ds \delta r\)





Definition of $\sequence {x_i}$














\(\ds \)

\(\le\)







\(\ds \frac{\epsilon}{2\paren{m - 1} }\)





Definition of $\delta$




Now, it follows that:














\(\ds \sum_{i \mathop = 1}^n \map f {t_i} \paren {x_i - x_{i - 1} }\)

\(=\)







\(\ds \sum_{i \mathop \neq i_k} \map f {t_i} \paren {x_i - x_{i - 1} } + \sum_k \map f {t_{i_k} } \paren {x_{i_k} - x_{i_k - 1} }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \neq i_k} \map f {t_i} \paren {x_i - x_{i - 1} } + \sum_k \paren {\paren {d_k - c_k} \map f {t_{i_k} } + \paren {v_k - u_k} \map f {t_{i_k} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop \neq i_k} \map f {t_i} \paren {x_i - x_{i - 1} } + \sum_k \paren {d_k - c_k} \map f {t_{i_k} }\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \sum_k \paren {v_k - u_k} \map f {y_{j_k} } + \sum_k \paren {v_k - u_k} \paren {\map f {t_{i_k} } - \map f {y_{j_k} } }\)




















\(\ds \)

\(=\)







\(\ds \sum_{\paren{c,d} } \map f {t'_i} \paren {d - c} + \sum_k \paren {v_k - u_k} \paren {\map f {t_{i_k} } - \map f {y_{j_k} } }\)









where $\paren {c, d} \in \set {\paren {x_{i - 1}, x_i}: i \neq i_k} \cup \set {\paren {c_k, d_k} } \cup \set {\paren {u_k, v_k} }$ and each $t'_i \in \closedint c d$.

Since each $t'_i \in \closedint c d \subset \closedint {y_{j-1} } {y_j}$, it holds that:

$\ds \inf_{\closedint {y_{j-1} } {y_j} } \map f y \le \map f {t'_i} \le \sup_{\closedint {y_{j - 1} } {y_j} } \map f y$
Thus, $\ds \paren {d - c} \inf_{\closedint {y_{j-1} } {y_j} } \map f y \le \paren {d - c} \map f {t'_i} \le \paren {d - c} \sup_{\closedint {y_{j-1} } {y_j} } \map f y$.
But the intervals $\closedint c d$ cover $\closedint a b$, so:

$\ds \map L Q = \sum_j \paren {d - c} \inf_{\closedint {y_{j-1} } {y_j} } \map f y \le \sum_{\paren{c,d} } \map f {t'_i} \paren {d - c} \le \sum_j \paren {d - c} \sup_{\closedint {y_{j - 1} } {y_j} } \map f y = \map U Q$
So:

$\ds \size {D - \sum_{\paren {c, d} } \map f {t'_i} \paren {d - c} } < \frac \epsilon 2$
Therefore:














\(\ds \size {D - \sum_{i \mathop = 1}^n \map f {t_i} \paren {x_i - x_{i - 1} } }\)

\(\le\)







\(\ds \size {D - \sum_{\paren {c, d} } \map f {t'_i} \paren {d - c} } + \size {\sum_k \paren {v_k - u_k} \paren {\map f {t_{i_k} } - \map f {y_{j_k} } } }\)





Triangle Inequality














\(\ds \)

\(\le\)







\(\ds \size {D - \sum_{\paren {c, d} } \map f {t'_i} \paren {d - c} } + \sum_k \paren {v_k - u_k} \size {\map f {t_{i_k} } - \map f {y_{j_k} } }\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \sum_k \frac \epsilon {2 \paren{m - 1} }\)





Identities from above














\(\ds \)

\(\le\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2\)





as there are at most $m - 1$ values of $k$














\(\ds \)

\(=\)







\(\ds \epsilon\)









In other words:

$\size {\map S {f; \Delta, C} - D} < \epsilon$
where $S$ denotes the Riemann sum.

Because the subdivision and sample points were arbitrary, this holds for every such subdivision and samples.
Because $\epsilon$ was also arbitrary, there is a $\delta$ for every $\epsilon$ such that, if the norm is less than $\delta$, then the Riemann sum is within $\epsilon$ of $D$.
Therefore, $D$ is the Riemann integral of $f$ over $\closedint a b$.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Darboux's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Darboux's theorem




