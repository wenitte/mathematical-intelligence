# 

Source: https://proofwiki.org/wiki/Relation_between_Square_of_Fibonacci_Number_and_Square_of_Lucas_Number

Theorem
Let $F_n$ denote the $n$th Fibonacci number.
Let $L_n$ denote the $n$th Lucas number.

Then:

$5 {F_n}^2 + 4 \paren {-1}^n = {L_n}^2$


Proof
Let:

$\phi = \dfrac {1 + \sqrt 5} 2$
$\hat \phi = \dfrac {1 - \sqrt 5} 2$

Note that we have:














\(\ds \phi \hat \phi\)

\(=\)







\(\ds \dfrac {1 + \sqrt 5} 2 \dfrac {1 - \sqrt 5} 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1 - 5} 4\)





Difference of Two Squares














\(\ds \)

\(=\)







\(\ds -1\)










Then:














\(\ds 5 {F_n}^2\)

\(=\)







\(\ds 5 \paren {\dfrac {\phi^n - \hat \phi^n} {\sqrt 5} }^2\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \phi^{2 n} - 2 \phi^n \hat \phi^n + \hat \phi^{2 n}\)





simplifying














\(\ds \)

\(=\)







\(\ds \phi^{2 n} + 2 \phi^n \hat \phi^n + \hat \phi^{2 n} - 4 \paren {\phi \hat \phi}^n\)




















\(\ds \)

\(=\)







\(\ds \paren {\phi^n + \hat \phi^n}^2 - 4 \paren {-1}^n\)





simplifying, and from above: $\phi \hat \phi = -1$














\(\ds \)

\(=\)







\(\ds {L_n}^2 - 4 \paren {-1}^n\)





Closed Form for Lucas Numbers



Hence the result.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$




