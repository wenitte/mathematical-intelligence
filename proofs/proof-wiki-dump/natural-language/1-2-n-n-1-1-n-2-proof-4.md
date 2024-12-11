# 

Source: https://proofwiki.org/wiki/1%2B2%2B...%2Bn%2B(n-1)%2B...%2B1_%3D_n%5E2/Proof_4

Theorem
$\forall n \in \N: 1 + 2 + \cdots + n + \paren {n - 1} + \cdots + 1 = n^2$


Proof
Let $T_n = 1 + 2 + \cdots + n + \paren {n - 1} + \cdots + 1$.
We have $T_1 = 1$
and














\(\ds T_n - T_{n - 1}\)

\(=\)







\(\ds \paren {1 + 2 + \cdots + n + \paren {n - 1} + \cdots + 1 }\)





Definition of $T_n$














\(\ds \)

\(\)





\(\, \ds - \, \)

\(\ds \paren {1 + 2 + \cdots + \paren {n - 1} + \paren {n - 2} + \cdots + 1}\)




















\(\ds \)

\(=\)







\(\ds \paren {\paren {1 + 2 + \cdots + n} - \paren {1 + 2 + \cdots + \paren {n - 1} } }\)





Integer Addition is Associative














\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \paren {\paren {\paren {n - 1} + \paren {n - 2} + \cdots + 1} - \paren {\paren {n - 2} + \paren {n - 3} + \cdots + 1} }\)





Integer Addition is Commutative














\(\ds \)

\(=\)







\(\ds n + \paren {n - 1}\)





simplifying














\(\ds \)

\(=\)







\(\ds 2 n - 1\)









Thus we have:














\(\ds T_n\)

\(=\)







\(\ds \paren {T_n - T_{n - 1} } + \paren {T_{n - 1} - T_{n - 2} } + \cdots + \paren {T_2 - T_1} + T_1\)




















\(\ds \)

\(=\)







\(\ds \paren {2 n - 1} + \paren {2 \paren {n - 1} - 1} + \cdots + \paren {2 \times 2 - 1} + 1\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^n 2 k - 1\)




















\(\ds \)

\(=\)







\(\ds n^2\)





Odd Number Theorem



$\blacksquare$





