# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_of_Odd_Index_by_Golden_Mean_Modulo_1

Theorem
Let $n \in \Z$ be an integer.

Then:

$F_{2 n + 1} \phi \bmod 1 = \phi^{-2 n - 1}$
where:

$F_n$ denotes the $n$th Fibonacci number
$\phi$ is the golden mean: $\phi = \dfrac {1 + \sqrt 5} 2$


Proof
From definition of$\bmod 1$, the statement above is equivalent to the statement:

$F_{2 n + 1} \phi - \phi^{-2 n - 1}$ is an integer
We have:














\(\ds \phi^2 - \phi \sqrt 5\)

\(=\)







\(\ds \paren {\frac {1 + \sqrt 5} 2}^2 - \paren {\frac {1 + \sqrt 5} 2} \sqrt 5\)




















\(\ds \)

\(=\)







\(\ds \frac {6 + 2 \sqrt 5} 4 - \frac {5 + \sqrt 5} 2\)




















\(\ds \)

\(=\)







\(\ds -1\)









Hence:














\(\ds F_{2 n + 1} \phi - \phi^{-2 n - 1}\)

\(=\)







\(\ds \frac {\phi^{2 n + 1} - \paren {-1}^{2 n + 1} \phi^{-2 n - 1} } {\sqrt 5} \phi - \phi^{-2 n - 1}\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \frac {\phi^{2 n + 2} + \phi^{-2 n} - \phi^{-2 n - 1} \sqrt 5} {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \frac {\phi^{2 n + 2} + \phi^{-2 n - 2} \paren {\phi^2 - \phi \sqrt 5} } {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \frac {\phi^{2 n + 2} - \phi^{-2 n - 2} } {\sqrt 5}\)





as $\phi^2 - \phi \sqrt 5 = -1$














\(\ds \)

\(=\)







\(\ds \frac {\phi^{2 n + 2} - \paren {-1}^{-2 n - 2} \phi^{-2 n - 2} } {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds F_{2 n + 2}\)





Euler-Binet Formula



which is an integer.
$\blacksquare$

Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $31$




