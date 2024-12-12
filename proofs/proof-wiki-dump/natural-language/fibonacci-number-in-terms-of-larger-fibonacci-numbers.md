# 

Source: https://proofwiki.org/wiki/Fibonacci_Number_in_terms_of_Larger_Fibonacci_Numbers

Theorem
Let $F_k$ be the $k$th Fibonacci number.

Then:

$\forall m, n \in \Z_{>0} : \paren {-1}^n F_{m - n} = F_m F_{n - 1} - F_{m - 1} F_n$


Proof













\(\ds F_{m - n}\)

\(=\)







\(\ds F_{m + \paren {-n} }\)





Definition of Integer Subtraction














\(\ds \)

\(=\)







\(\ds F_{m - 1} F_{-n} + F_m F_{-n + 1}\)





Honsberger's Identity














\(\ds \)

\(=\)







\(\ds \paren {-1}^{n + 1} F_{m - 1} F_n + \paren {-1}^n F_m F_{n - 1}\)





Fibonacci Number with Negative Index








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^n F_{m - n}\)

\(=\)







\(\ds \paren {-1} F_{m - 1} F_n + F_m F_{n - 1}\)





multiplying both sides by $\paren {-1}^n$














\(\ds \)

\(=\)







\(\ds F_m F_{n - 1} - F_{m - 1} F_n\)





simplifying



$\blacksquare$





