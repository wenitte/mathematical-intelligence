# 

Source: https://proofwiki.org/wiki/L1_Mean_Ergodic_Theorem

Theorem
Let $\struct {X, \BB, \mu, T}$ be a measure-preserving dynamical system.
Let $\map {L^1_\C} \mu$ be the complex-valued $L^1$ space of $\mu$.

Then for each $f \in \map {L^1_\C} \mu$ there is a $T$-invariant function $\tilde f \in \map {L^1_\C} \mu$ such that:

$\ds \lim_{N \mathop \to \infty} \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} f \circ T^n = \tilde f$ converges in the $L^1$-norm


Proof
For $c > 0$ let:

$f_c = f \cdot \chi_{\set {\cmod f \mathop \le c} }$
where $\chi_B$ is the characteristic function of $B$.
Then $f_c \in \map {L^2_\C} \mu$ and:














\(\ds f - f_c\)

\(=\)







\(\ds f \cdot \paren {1 -\chi_{\set {\cmod f \mathop \le c} } }\)




















\(\ds \)

\(=\)







\(\ds f \cdot \chi_{\set {\cmod f \mathop > c} }\)




















\(\ds \)

\(\to\)







\(\ds 0\)





in $\map {L^1_\C} \mu$ as $c \to +\infty$



$\Box$

Let $\epsilon > 0$ be arbitrary.
Let $c > 0$ be such that:

$\norm {f - f_c}_1 \le \dfrac \epsilon 3$
By Mean Ergodic Theorem and Convergent Sequence is Cauchy Sequence, there exists an $N_0 \in \N_{>0}$ such that:

$\ds \forall M, N \ge N_0 : \norm {\dfrac 1 M \sum_{n \mathop = 0}^{M - 1} f_c \circ T^n - \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} f_c \circ T^n}_1 \le \frac \epsilon 3$
since $\norm \cdot_1 \le \norm \cdot_2^2$ in view of Schwarz's Inequality.
Thus by Norm Axiom $\text N 3$: Triangle Inequality:

$\ds \forall M, N \ge N_0 : \norm {\dfrac 1 M \sum_{n \mathop = 0}^{M - 1} f \circ T^n - \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} f \circ T^n}_1 \le \epsilon$
That is:

$\ds \sequence { \frac 1 N \sum_{n \mathop = 0}^{N - 1} f \circ T^n  }_N$
is a Cauchy sequence in $\map {L^1_\C} \mu$.
$\Box$

By Riesz-Fischer Theorem there exists an $\tilde f \in \map {L^1_\C} \mu$ such that:

$\ds \lim_{N \mathop \to \infty} \norm { \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} f \circ T^n - \tilde f}_1 = 0$
In addition:














\(\ds \norm {\tilde f \circ T - \tilde f}_1\)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \norm {\dfrac 1 N \sum_{n \mathop = 0}^{N - 1} f \circ T^{n+1} - \dfrac 1 N \sum_{n \mathop = 0}^{N - 1} f \circ T^n}_1\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \norm {\dfrac {f \circ T^N - f} N}_1\)




















\(\ds \)

\(\le\)







\(\ds \lim_{N \mathop \to \infty} \dfrac {\norm {f \circ T^N}_1 + \norm f_1} N\)




















\(\ds \)

\(=\)







\(\ds \lim_{N \mathop \to \infty} \dfrac {2 \norm f_1} N\)




















\(\ds \)

\(=\)







\(\ds 0\)









That is:

$\tilde f \circ T = \tilde f$
$\blacksquare$

Sources
2011: Manfred Einsiedler and Thomas Ward: Ergodic Theory: with a view towards Number Theory $2.5$ The Mean Ergodic Theorem




