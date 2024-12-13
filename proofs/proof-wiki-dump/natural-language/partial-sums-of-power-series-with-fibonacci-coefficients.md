# 

Source: https://proofwiki.org/wiki/Partial_Sums_of_Power_Series_with_Fibonacci_Coefficients

Theorem
$\ds \sum_{k \mathop = 0}^n F_k x^k = \begin {cases}
\dfrac {x^{n + 1} F_{n + 1} + x^{n + 2} F_n - x} {x^2 + x - 1} & : x^2 + x - 1 \ne 0 \\
\dfrac {\paren {n + 1} x^n F_{n + 1} + \paren {n + 2} x^{n + 1} F_n - 1} {2 x + 1} & : x^2 + x - 1 = 0 \end {cases}$
where $F_n$ denotes the $n$th Fibonacci number.


Proof
Multiplying the summation by $x^2 + x - 1$:














\(\ds \)

\(\)







\(\ds \sum_{k \mathop = 0}^n F_k x^k \paren {x^2 + x - 1}\)




















\(\ds \)

\(=\)







\(\ds F_0 x^2 + F_1 x^3 + F_2 x^4 + \cdots + F_{n - 2} x^n + F_{n - 1} x^{n + 1} + F_n x^{n + 2}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds F_0 x + F_1 x^2 + F_2 x^3 + \cdots + F_{n - 2} x^{n - 1} + F_{n - 1} x^n + F_n x^{n + 1}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds F_0 - F_1 x - F_2 x^2 - \cdots - F_{n - 2} x^{n - 2} - F_{n - 1} x^{n - 1} - F_n x^n\)




















\(\ds \)

\(=\)







\(\ds F_0 + \paren {F_0 - F_1} x + \paren {F_{n - 1} + F_n} x^{n + 1} + F_n x^{n + 2}\)





as, in general, $\paren {F_{j - 2} + F_{j - 1} - F_j} x^j = 0$ by Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds 0 + \paren {-1} x + F_{n + 1} x^{n + 1} + F_n x^{n + 2}\)





Definition of Fibonacci Number: $F_0 = 0, F_1 = 1$








\(\ds \leadsto \ \ \)





\(\ds \sum_{k \mathop = 0}^n F_k x^k\)

\(=\)







\(\ds \dfrac {F_{n + 1} x^{n + 1} + F_n x^{n + 2} - x} {x^2 + x - 1}\)










If the denominator is $0$, then $x = \dfrac 1 \phi$ or $x = \dfrac 1 {\hat \phi}$ and the numerator is $0$ also.
Thus we can differentiate the numerator and denominator with respect to $x$ and use L'Hôpital's Rule:














\(\ds \)

\(\)







\(\ds \dfrac {\map {\dfrac \d {\d x} } {F_{n + 1} x^{n + 1} + F_n x^{n + 2} - x} } {\map {\dfrac \d {\d x} } {x^2 + x - 1} }\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {n + 1} F_{n + 1} x^n + \paren {n + 2} F_n x^{n + 1} - 1} {2 x + 1}\)





Power Rule for Derivatives




Hence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $21$




