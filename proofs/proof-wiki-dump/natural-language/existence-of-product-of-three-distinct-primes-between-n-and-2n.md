# 

Source: https://proofwiki.org/wiki/Existence_of_Product_of_Three_Distinct_Primes_between_n_and_2n

Theorem
Let $n \in \Z$ be an integer such that $n > 15$.
Then between $n$ and $2 n$ there exists at least one integer which is the product of $3$ distinct prime numbers.


Proof
Let $16 \le n \le 29$.
Then:

$n < 30 < 2 n$
and we have:

$30 = 2 \times 3 \times 5$
which is a product of $3$ distinct primes.
Hence the result holds for $n$ in that range.

Let $n \ge 30$.
Then by the Division Theorem:

$\exists q, r \in \N: n = 6 q + r$, $0 \le r < 6$, $q \ge 5$
By Bertrand-Chebyshev Theorem, there is a prime $p$ where $5 \le q < p < 2 q$.
Hence $p$ is not $2$ or $3$, and:














\(\ds n\)

\(<\)







\(\ds 6 \paren {q + 1}\)




















\(\ds \)

\(\le\)







\(\ds 2 \times 3 \times p\)




















\(\ds \)

\(\le\)







\(\ds 12 q\)




















\(\ds \)

\(\le\)







\(\ds 2 n\)









This proves the result.
$\blacksquare$


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $94$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $15$




