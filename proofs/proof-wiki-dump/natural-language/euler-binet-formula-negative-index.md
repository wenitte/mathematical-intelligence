# 

Source: https://proofwiki.org/wiki/Euler-Binet_Formula/Negative_Index

Theorem
Let $n \in \Z_{< 0}$ be a negative integer.
Let $F_n$ be the $n$th Fibonacci number (as extended to negative integers).

Then the Euler-Binet Formula:

$F_n = \dfrac {\phi^n - \hat \phi^n} {\sqrt 5} = \dfrac {\phi^n - \hat \phi^n} {\phi - \hat \phi}$
continues to hold.

In the above:

$\phi$ is the golden mean
$\hat \phi = 1 - \phi = -\dfrac 1 \phi$


Proof
Let $n \in \Z_{> 0}$.
Then:














\(\ds \dfrac {\phi^{-n} - \hat \phi^{-n} } {\sqrt 5}\)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\phi^{-n} - \paren {-\dfrac 1 \phi}^{-n} }\)





Definition of $\hat \phi$














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\dfrac 1 {\phi^n} - \paren {-1}^n \phi^n}\)





Exponent Combination Laws: Negative Power














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\paren {-1}^n \paren {-\dfrac 1 \phi}^n - \paren {-1}^n \phi^n}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^n \dfrac 1 {\sqrt 5} \paren {\hat \phi^n - \phi^n}\)





Definition of $\hat \phi$














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} F_n\)





Euler-Binet Formula for positive $n$














\(\ds \)

\(=\)







\(\ds F_{-n}\)





Fibonacci Number with Negative Index



$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $9$




