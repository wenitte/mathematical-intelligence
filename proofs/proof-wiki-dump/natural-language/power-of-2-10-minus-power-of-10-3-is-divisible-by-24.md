# 

Source: https://proofwiki.org/wiki/Power_of_2%5E10_Minus_Power_of_10%5E3_is_Divisible_by_24



Theorem
Let $n \in \Z_{\ge 0}$ be a non-negative integer.
Then $2^{10 n} - 10^{3 n}$ is divisible by $24$.

That is:

$2^{10 n} - 10^{3 n} \equiv 0 \pmod {24}$


Proof 1













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


Proof 2
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


Proof 3













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


Example
Let us examine arguably the flagship example, the smallest number whose compliance is not obvious nor trivial:

$1 \, 048 \, 576$
This is equal to $2^{20}$, which is equal to $2^{10 \times 2}$, thus one of the valid powers of $2$.
We then subtract $10^{3 \times 2}$, or $10^6$:

$1 \, 048 \, 576 - 1 \, 000 \, 000 = 48 \, 576$
and we see that:

$48 \, 576 = 2024 \times 24$
satisfying the theorem.





