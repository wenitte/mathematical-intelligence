# 

Source: https://proofwiki.org/wiki/Second_Order_Fibonacci_Number_in_terms_of_Fibonacci_Numbers

Theorem
The second order Fibonacci number $\FF_n$ can be expressed in terms of Fibonacci numbers as:

$\dfrac {3 n + 3} 5 F_n - \dfrac n 5 F_{n + 1}$


Proof
Let $\map \GG z = \ds \sum_{n \mathop \ge 0} \mathop F_n z^n$ be a generating function for $\FF_n$.
Then we have:














\(\ds \paren {1 - z - z^2} \map \GG z\)

\(=\)







\(\ds \paren {\FF_0 + \FF_1 z + \FF_2 z^2 + \FF_3 z^3 + \FF_4 z^4 + \cdots}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\FF_0 z + \FF_1 z^2 + \FF_2 z^3 + \FF_3 z^4 + \FF_4 z^5 + \cdots}\)




















\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {\FF_0 z^2 + \FF_1 z^3 + \FF_2 z^4 + \FF_3 z^5 + \FF_4 z^6 + \cdots}\)




















\(\ds \)

\(=\)







\(\ds \FF_0 + \paren {\FF_1 - \FF_0} z + \paren {\FF_2 - \FF_1 - \FF_0} z^2 + \paren {\FF_3 - \FF_2 - \FF_1} z^3 + \cdots\)




















\(\ds \)

\(=\)







\(\ds \FF_0 + \paren {\FF_1 - \FF_0} z + F_0 z^2 + F_1 z^3 + \cdots\)





Definition of Second Order Fibonacci Number: $\FF_n - \FF_{n - 1} - \FF_{n - 2} = F_{n - 2}$














\(\ds \)

\(=\)







\(\ds z + z^2 \sum_{k \mathop \ge 0} F_k z^k\)





Definition of Second Order Fibonacci Number: $\FF_0 = 0$, $\FF_1 = 1$














\(\ds \)

\(=\)







\(\ds z + z^2 \map G z\)





where $\map G z$ is a generating function for the Fibonacci numbers




Thus:














\(\ds \map \GG z\)

\(=\)







\(\ds \dfrac {z + z^2 \map G z} {1 - z - z^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac z {1 - z - z^2} + \dfrac z {1 - z - z^2} z \map G z\)




















\(\ds \)

\(=\)







\(\ds \map G z + z \paren {\map G z}^2\)





Generating Function for Fibonacci Numbers: $\map G z = \dfrac z {1 - z - z^2}$




Then from Summation over k to n of Product of kth with n-kth Fibonacci Numbers, the coefficient of $z^n$ in $\paren {\map G z}^2$ is:

$\dfrac {\paren {n - 1} F_n + 2n F_{n - 1} } 5$
Thus the coefficient of $z^{n + 1}$ in $z \paren {\map G z}^2$ is likewise:

$\dfrac {\paren {n - 1} F_n + 2n F_{n - 1} } 5$
and so the coefficient of $z^n$ in $\map G z + z \paren {\map G z}^2$ is:

$F_n + \dfrac {\paren {n - 2} F_{n - 1} + 2 \paren {n - 1} F_{n - 2} } 5$
Hence:














\(\ds F_n + \dfrac {\paren {n - 2} F_{n - 1} + 2 \paren {n - 1} F_{n - 2} } 5\)

\(=\)







\(\ds F_n + \dfrac {\paren {2 n - 2} F_{n - 1} - n F_{n - 1} + \paren {2 n - 2} F_{n - 2} } 5\)




















\(\ds \)

\(=\)







\(\ds F_n + \dfrac {\paren {2 n - 2} F_n - n F_{n - 1} } 5\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \dfrac {5 F_n + \paren {2 n - 2} F_n - n F_{n - 1} } 5\)





common denominator














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 n + 3} F_n - n F_{n - 1} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 n + 3} F_n + n F_n - n F_n - n F_{n - 1} } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 n + 3} F_n + n F_n - n \paren {F_n + F_{n - 1} } } 5\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\paren {2 n + 3} F_n + n F_n - n F_{n + 1} } 5\)





Definition of Fibonacci Number














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {3 n + 3} F_n} 5 - \dfrac {n F_{n + 1} } 5\)





simplifying



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $12$




