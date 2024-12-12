# 

Source: https://proofwiki.org/wiki/D%27Ocagne%27s_Identity

Theorem
Let $F_k$ be the $k$th Fibonacci number.

Then:

$\forall m, n \in \Z: \paren {-1}^n F_{m - n} = F_m F_{n + 1} - F_n F_{n - 1}$


Proof













\(\ds \paren {-1}^n F_i F_j\)

\(=\)







\(\ds F_{n + i} F_{n + j} - F_n F_{n + i + j}\)





Vajda's Identity








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^n F_{m - n} F_1\)

\(=\)







\(\ds F_{n + \paren {m - n} } F_{n + 1} - F_n F_{n + \paren {m - n} + 1}\)





setting $i \gets m - n$ and $j \gets 1$








\(\ds \leadsto \ \ \)





\(\ds \paren {-1}^n F_{m - n}\)

\(=\)







\(\ds F_m F_{n + 1} - F_n F_{m + 1}\)





Definition of Fibonacci Numbers: $F_1 = 1$



$\blacksquare$


Source of Name
This entry was named for Philbert Maurice d'Ocagne.





