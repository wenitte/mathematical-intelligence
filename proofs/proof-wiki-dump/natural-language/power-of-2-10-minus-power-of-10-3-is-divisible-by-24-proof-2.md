# 

Source: https://proofwiki.org/wiki/Power_of_2%5E10_Minus_Power_of_10%5E3_is_Divisible_by_24/Proof_2

Theorem
Let $n \in \Z_{\ge 0}$ be a non-negative integer.
Then $2^{10 n} - 10^{3 n}$ is divisible by $24$.

That is:

$2^{10 n} - 10^{3 n} \equiv 0 \pmod {24}$


Proof
For $n = 0$ both powers are $1$, and $1 - 1 = 0$ is divisible by $24$.
For $n > 1$:














\(\ds 2^{10 n} - 10^{3 n}\)

\(=\)







\(\ds 2^{3 n} \paren {2^{7 n} - 5^{3 n} }\)




















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 8\)



because $2^3 \divides 2^{3 n}$














\(\ds 2^{10 n} - 10^{3 n}\)

\(\equiv\)







\(\ds \paren {-1}^{10 n} - 1^{3 n}\)

\(\ds \pmod 3\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds 1 - 1\)

\(\ds \pmod 3\)


















\(\ds \)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod 3\)












\(\ds \leadsto \ \ \)





\(\ds 2^{10 n} - 10^{3 n}\)

\(\equiv\)







\(\ds 0\)

\(\ds \pmod {24}\)



Chinese Remainder Theorem



$\blacksquare$





