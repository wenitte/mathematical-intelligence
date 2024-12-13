# 

Source: https://proofwiki.org/wiki/Power_of_2%5E10_Minus_Power_of_10%5E3_is_Divisible_by_24/Proof_3

Theorem
Let $n \in \Z_{\ge 0}$ be a non-negative integer.
Then $2^{10 n} - 10^{3 n}$ is divisible by $24$.

That is:

$2^{10 n} - 10^{3 n} \equiv 0 \pmod {24}$


Proof













\(\ds 2^{10 n} - 10^{3 n}\)

\(=\)







\(\ds \paren {2^{10} }^n - \paren {10^3}^n\)





Power of Power














\(\ds \)

\(=\)







\(\ds \paren {2^{10} - 10^3} \sum_{j \mathop = 0}^{n - 1} \paren {2^{10} }^{n - j - 1} \paren {10^3}^j\)





Difference of Two Powers














\(\ds \)

\(=\)







\(\ds 24 k\)





where $\ds k = \sum_{j \mathop = 0}^{n - 1} {2^{10} }^{n - j - 1} \paren {10^3}^j$ is an integer








\(\ds \leadsto \ \ \)





\(\ds 2^{10 n} - 10^{3 n}\)

\(\equiv\)







\(\ds 0 \pmod {24}\)





Definition of Congruence Modulo Integer



$\blacksquare$





