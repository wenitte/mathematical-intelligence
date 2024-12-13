# 

Source: https://proofwiki.org/wiki/Power_of_2%5E10_Minus_Power_of_10%5E3_is_Divisible_by_24/Proof_1

Theorem
Let $n \in \Z_{\ge 0}$ be a non-negative integer.
Then $2^{10 n} - 10^{3 n}$ is divisible by $24$.

That is:

$2^{10 n} - 10^{3 n} \equiv 0 \pmod {24}$


Proof













\(\ds 2^{10 n}\)

\(=\)







\(\ds \paren {2^{10} }^n\)





Power of Power














\(\ds \)

\(=\)







\(\ds 1024^n\)





as $2^{10} = 1024$














\(\ds \)

\(=\)







\(\ds \paren {1000 + 24}^n\)





rewriting $1024$ as the sum of a power of $10$ and some integer














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^n 1000^{n - k} \, 24^k\)





Binomial Theorem




\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 1000^n + \sum_{k \mathop = 1}^n 1000^{n - k} \, 24^k\)





extracting first term from summation














\(\ds \)

\(=\)







\(\ds 1000^n + 24 \paren {\sum_{k \mathop = 1}^n 1000^{n - k} \, 24^{k - 1} }\)





extracting $24$ as a divisor








\(\ds \leadsto \ \ \)





\(\ds 2^{10 n} - 1000^x\)

\(=\)







\(\ds 24 i\)





setting $i = \ds \sum_{k \mathop = 1}^n 1000^{n - k} \, 24^{k - 1}$








\(\ds \leadsto \ \ \)





\(\ds 2^{10 n} - 10^{3 n}\)

\(=\)







\(\ds 24 i\)





rewriting $1000^n$ as a power of $10$








\(\ds \leadsto \ \ \)





\(\ds 2^{10 n} - 10^{3 n}\)

\(\equiv\)







\(\ds 0 \pmod {24}\)





Definition of Congruence Modulo Integer



$\blacksquare$





