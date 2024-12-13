# 

Source: https://proofwiki.org/wiki/Primes_of_form_Power_of_Two_plus_One/Proof_1

Theorem
Let $n \in \N$ be a natural number.
Let $2^n + 1$ be prime.

Then $n = 2^k$ for some natural number $k$.


Proof
Suppose $n$ has an odd divisor apart from $1$.
Then $n$ can be expressed as $n = \paren {2 r + 1} s$.
So:














\(\ds 2^n + 1\)

\(=\)







\(\ds 2^{\paren {2 r + 1} s} + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {2^s}^{\paren {2 r + 1} } + 1^{\paren {2 r + 1} }\)




















\(\ds \)

\(=\)







\(\ds \paren {2^s + 1} \paren {2^{2 r s} - 2^{\paren {2 r - 1} s} + 2^{\paren {2 r - 2} s} - \cdots - 2^s + 1}\)





Sum of Odd Positive Powers‎



and so $2^n + 1$ is not prime.

Hence $2^n + 1$ can be prime only if $n$ has only even divisors.
That is, if $n = 2^k$ for some natural number $k$.
$\blacksquare$





