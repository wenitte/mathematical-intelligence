# 

Source: https://proofwiki.org/wiki/Factorial_as_Sum_of_Series_of_Subfactorial_by_Falling_Factorial_over_Factorial/Condition_for_Convergence

Theorem
Consider the series:














\(\ds n!\)

\(=\)







\(\ds \sum_{k \mathop \ge 0} \dfrac { {!k} \, n^{\underline k} } {k!}\)




















\(\ds \)

\(=\)







\(\ds \dfrac { !0 \times n^{\underline 0} } {0!} + \dfrac { {!1} \times n^{\underline 1} } {1!} + \dfrac { {!2} \times n^{\underline 2} } {2!} + \dfrac { {!3} \times n^{\underline 3} } {3!} + \cdots\)




















\(\ds \)

\(=\)







\(\ds 1 + \left({1 - \dfrac 1 {1 !} }\right) n + \left({1 - \dfrac 1 {1 !} + \dfrac 1 {2 !} }\right) n \left({n - 1}\right) + \left({1 - \dfrac 1 {1 !} + \dfrac 1 {2 !} - \dfrac 1 {3 !} }\right) n \left({n - 1}\right) \left({n - 2}\right) + \cdots\)










This converges only when $n \in \Z_{\ge 0}$, that is, when $n$ is a non-negative integer.


Proof
First we show that this series converges when $n \in \Z_{\ge 0}$.
Consider the coefficients:

$1, \paren {1 - \dfrac 1 {1!} }, \paren {1 - \dfrac 1 {1!} + \dfrac 1 {2!} }, \ldots$
By Power Series Expansion for Exponential Function, they converge to $\dfrac 1 e$.

Starting from the $\paren {n + 1}$th term, there is a factor of $\paren {n - n}$.
In this case, all subsequent terms of the expansion equal $0$.
Therefore the series converges.
$\Box$

Then we show that this series diverges for $n \notin \Z_{\ge 0}$.
We do this via Divergence Test.
That is, we show that $\ds \lim_{k \mathop \to \infty} \frac { {!k} \, n^{\underline k} } {k!} \ne 0$.

Aiming for a contradiction, suppose $\ds \lim_{k \mathop \to \infty} \frac { {!k} \, n^{\underline k} } {k!}$ exists.
By Power Series Expansion for Exponential Function, we have that $\ds \lim_{k \mathop \to \infty} \frac {k!} {!k} = e$.
Hence $\ds \lim_{k \mathop \to \infty} n^{\underline k}$ would exist as well.

For $k > \floor {n + 2}$:














\(\ds n - k\)

\(<\)







\(\ds -2 + n + 2 - \floor {n + 2}\)




















\(\ds \)

\(\le\)







\(\ds -2\)














\(\ds \leadsto \ \ \)





\(\ds \size {n^{\underline k} }\)

\(=\)







\(\ds \size {n^{\underline {k - 1} } } \size {n - k}\)




















\(\ds \)

\(>\)







\(\ds 2 \size {n^{\underline {k - 1} } }\)









Since $n - k \ne 0$, $\size {n^{\underline k} }$ increases without bound.
Hence its limit does not exist, a contradiction.
Therefore $\ds \lim_{k \mathop \to \infty} \frac { {!k} \, n^{\underline k} } {k!}$ does not exist for $n \notin \Z_{\ge 0}$.
By Divergence Test, our series diverges.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.5$: Permutations and Factorials: Exercise $16$




