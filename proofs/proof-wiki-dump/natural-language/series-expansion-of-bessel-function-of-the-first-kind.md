# 

Source: https://proofwiki.org/wiki/Series_Expansion_of_Bessel_Function_of_the_First_Kind



Theorem
Let $n \in \Z_{\ge 0}$ be a (strictly) non-negative integer.
Let $\map {J_n} x$ denote the Bessel function of the first kind of order $n$.

Then:














\(\ds \map {J_n} x\)

\(=\)







\(\ds \dfrac {x^n} {2^n \, \map \Gamma {n + 1} } \paren {1 - \dfrac {x^2} {2 \paren {2 n + 2} } + \dfrac {x^4} {2 \times 4 \paren {2 n + 2} \paren {2 n + 4} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {n + k + 1} } \paren {\dfrac x 2}^{n + 2 k}\)











Negative Index













\(\ds \map {J_{-n} } x\)

\(=\)







\(\ds \dfrac {x^{-n} } {2^{-n} \, \map \Gamma {1 - n} } \paren {1 - \dfrac {x^2} {2 \paren {2 - 2 n} } + \dfrac {x^4} {2 \times 4 \paren {2 - 2 n} \paren {4 - 2 n} } - \cdots}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {k + 1 - n} } \paren {\dfrac x 2}^{2 k - n}\)











Proof
We employ Frobenius's method to find the solutions to the Bessel's Equation:

$x^2 \dfrac {\d^2 y} {\d x^2} + x \dfrac {\d y} {\d x} + \paren {x^2 - n^2} y = 0$
for $n \ge 0$, in the form:

$\ds \map y x = \sum_{k \mathop = 0}^\infty A_k x^{k + r}$
defined on $x > 0$, for some constants $r, A_i$, with $A_0 \ne 0$, which are to be determined.

Differentiating the expression with respect to $x$:














\(\ds \map {y'} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {k + r} x^{k + r - 1}\)




















\(\ds \map {y} x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {k + r} \paren {k + r - 1} x^{k + r - 2}\)










Substituting $y, y', y$ into Bessel's Equation:














\(\ds 0\)

\(=\)







\(\ds x^2 \dfrac {\d^2 y} {\d x^2} + x \dfrac {\d y} {\d x} + \paren {x^2 - n^2} y\)




















\(\ds \)

\(=\)







\(\ds x^2 \sum_{k \mathop = 0}^\infty A_k \paren {k + r} \paren {k + r - 1} x^{k + r - 2} + x \sum_{k \mathop = 0}^\infty A_k \paren {k + r} x^{k + r - 1} + \paren {x^2 - n^2} \sum_{k \mathop = 0}^\infty A_k x^{k + r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {k + r} \paren {k + r - 1} x^{k + r} + \sum_{k \mathop = 0}^\infty A_k \paren {k + r} x^{k + r} + \sum_{k \mathop = 0}^\infty A_k x^{k + r + 2} - n^2 \sum_{k \mathop = 0}^\infty A_k x^{k + r}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {\paren {k + r} \paren {k + r - 1} + \paren {k + r} - n^2} x^{k + r} + \sum_{k \mathop = 0}^\infty A_k x^{k + r + 2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {\paren {k + r}^2 - n^2} x^{k + r} + \sum_{k \mathop = 0}^\infty A_k x^{k + r + 2}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {\paren {k + r}^2 - n^2} x^{k + r} + \sum_{k \mathop = 2}^\infty A_{k - 2} x^{k + r}\)





Translation of Index Variable of Summation














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k \paren {\paren {k + r}^2 - n^2} x^k + \sum_{k \mathop = 2}^\infty A_{k - 2} x^k\)





$x^r \neq 0$



Comparing the constant term on both sides:














\(\ds 0\)

\(=\)







\(\ds A_0 \paren {r^2 - n^2}\)














\(\ds \leadsto \ \ \)





\(\ds r\)

\(=\)







\(\ds \pm n\)









Take $r = n$.
Comparing the rest of the coefficients:














\(\ds 0\)

\(=\)







\(\ds A_1 \paren {\paren{n + 1}^2 - n^2}\)




















\(\ds 0\)

\(=\)







\(\ds A_1 \paren {2 n + 1}\)














\(\ds \leadsto \ \ \)





\(\ds A_1\)

\(=\)







\(\ds 0\)




















\(\ds 0\)

\(=\)







\(\ds A_k \paren {\paren{n + k}^2 - n^2} + A_{k - 2}\)





for $k \ge 2$














\(\ds 0\)

\(=\)







\(\ds A_k k \paren {2 n + k} + A_{k - 2}\)














\(\ds \leadsto \ \ \)





\(\ds A_k\)

\(=\)







\(\ds - \dfrac 1 {k \paren {2 n + k} } A_{k - 2}\)









From the recurrence relation above, we see that $A_k = 0$ for odd $k$, and:














\(\ds A_{2 k}\)

\(=\)







\(\ds - \dfrac 1 {2 k \paren {2 n + 2 k} } A_{2 k - 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {-1} {2^2 k \paren {n + k} } A_{2 k - 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^2} {2^4 k \paren {k - 1} \paren {n + k}  \paren {n + k - 1} } A_{2 k - 4}\)




















\(\ds \)

\(=\)







\(\ds \cdots\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^k} {2^{2 k} k \paren {k - 1} \cdots \paren 1 \paren {n + k} \paren {n + k - 1} \cdots \paren {n + 1} } A_0\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^k} {2^{2 k} k! \dfrac {\map \Gamma {n + k + 1} } {\map \Gamma {n + 1} } } A_0\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {-1}^k} {2^{n + 2 k} k! \, \map \Gamma {n + k + 1} }\)





By choice of $A_0 = \dfrac {2^{- n} } {\map \Gamma {n + 1} }$




Substituting this result to our original equation: 














\(\ds \map y x\)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_k x^{k + n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty A_{2 k} x^{2 k + n}\)





since all even terms vanish














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {2^{n + 2 k} k! \, \map \Gamma {n + k + 1} } x^{2 k + n}\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \dfrac {\paren {-1}^k} {k! \, \map \Gamma {n + k + 1} } \paren {\dfrac x 2}^{2 k + n}\)









$\blacksquare$


Also see
Bessel Function of the First Kind of Negative Integer Order for when $n \in \set {-1, -2, -3, \ldots}$


Sources
1965: Murray R. Spiegel: Theory and Problems of Laplace Transforms ... (previous) ... (next): Chapter $1$: The Laplace Transform: Some Special Functions: $\text {II}$. Bessel functions
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 24$: Bessel Functions: Bessel Function of the First Kind of Order $n$: $24.2$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Bessel functions
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Bessel functions
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Bessel function




