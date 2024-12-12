# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_3n_in_terms_of_Fibonacci_Number_n_and_Lucas_Number_2n

Theorem
Let $F_n$ denote the $n$th Fibonacci number.
Let $L_n$ denote the $n$th Lucas number.

Then:

$F_{3 n} = F_n \paren {L_{2 n} + \paren {-1}^n}$


Proof
Let:

$\phi = \dfrac {1 + \sqrt 5} 2$
$\hat \phi = \dfrac {1 - \sqrt 5} 2$

Then:














\(\ds F_{3 n}\)

\(=\)







\(\ds \dfrac {\phi^{3 n} - \hat \phi^{3 n} } {\sqrt 5}\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds \dfrac {\paren {\phi^n - \hat \phi^n} \paren {\phi^{2 n} + \phi^n \hat \phi^n + \hat \phi^{2 n} } } {\sqrt 5}\)





Difference of Two Cubes














\(\ds \)

\(=\)







\(\ds F_n \paren {\phi^{2 n} + \phi^n \hat \phi^n + \hat \phi^{2 n} }\)





Euler-Binet Formula














\(\ds \)

\(=\)







\(\ds F_n \paren {L_{2 n} + \phi^n \hat \phi^n}\)





Closed Form for Lucas Numbers




Then we note:














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










The result follows.
$\blacksquare$


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $11$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $11$




