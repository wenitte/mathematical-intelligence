# 

Source: https://proofwiki.org/wiki/Carmichael_Number_has_3_Odd_Prime_Factors



Theorem
Let $n$ be a Carmichael number.
Then $n$ has at least $3$ distinct odd prime factors.


Proof
By Korselt's Theorem, $n$ is odd.
Therefore $n$ has at least $1$ odd prime factor.

By Korselt's Theorem, for each prime factor of $n$:

$p^2 \nmid n$
$\paren {p - 1} \divides \paren {n - 1}$

Suppose $n = p^k$ for some odd prime $p$.
By Korselt's Theorem, $k = 1$.
However by definition of a Carmichael Number, $n$ cannot be prime.
Therefore $n$ has at least $2$ distinct odd prime factors.

Suppose $n = p^a q^b$ for distinct odd primes $p$ and $q$.
By Korselt's Theorem, the following holds:

$a = b = 1$
$n = p q$
$\paren {p - 1} \divides \paren {n - 1}$
$\paren {q - 1} \divides \paren {n - 1}$
Hence:














\(\ds \paren {p - 1}\)

\(\divides\)







\(\ds \paren {n - 1 - q \paren {p - 1} }\)




















\(\ds \)

\(=\)







\(\ds p q - 1 - p q + q\)




















\(\ds \)

\(=\)







\(\ds q - 1\)









Swapping $p$ and $q$ yields $\paren {q - 1} \divides \paren {p - 1}$.
Hence $p - 1 = q - 1$ and $p = q$, which is a contradiction.
Therefore $n$ has at least $3$ distinct odd prime factors.
$\blacksquare$


Historical Note
Robert Daniel Carmichael proved that a Carmichael Number has at least 3 distinct odd prime factors in $1912$, at around the same time that he discovered that $561$ was the smallest one.


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $561$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $561$




