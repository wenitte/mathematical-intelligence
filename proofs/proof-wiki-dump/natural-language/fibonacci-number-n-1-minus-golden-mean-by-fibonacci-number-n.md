# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_n%2B1_Minus_Golden_Mean_by_Fibonacci_Number_n



Theorem
$F_{n + 1} - \phi F_n = \hat \phi^n$
where:

$F_n$ denotes the $n$th Fibonacci number
$\phi$ denotes the golden mean.


Proof 1













\(\ds F_{n + 1} - \phi F_n\)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\phi^{n + 1} - \hat \phi^{n + 1} } - \dfrac \phi {\sqrt 5} \paren {\phi^n - \hat \phi^n}\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \dfrac 1 {\sqrt 5} \paren {\phi^{n + 1} - \hat \phi^{n + 1} - \phi^{n + 1} + \phi \hat \phi^n}\)




















\(\ds \)

\(=\)







\(\ds \hat \phi^n \dfrac {\phi - \hat \phi} {\sqrt 5}\)




















\(\ds \)

\(=\)







\(\ds \hat \phi^n F_1\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \hat \phi^n\)





Definition of Fibonacci Number: $F_1 = 1$



$\blacksquare$


Proof 2













\(\ds F_n\)

\(=\)







\(\ds \dfrac {\phi^n - \hat \phi^n} {\sqrt 5}\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\phi^n - \hat \phi^n} {\frac {1 + \sqrt 5} 2 - \frac {1 - \sqrt 5} 2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {\phi^n - \hat \phi^n} {\phi - \hat \phi}\)





Definition 2 of Golden Mean




Thus from Recurrence Relation where n+1th Term is A by nth term + B to the n we have:

$F_{n + 1} = \phi F_n + \hat \phi^n$
whence the result.
$\blacksquare$


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.8$: Fibonacci Numbers: Exercise $28$




