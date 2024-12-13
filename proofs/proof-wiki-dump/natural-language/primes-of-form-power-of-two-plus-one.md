# 

Source: https://proofwiki.org/wiki/Primes_of_form_Power_of_Two_plus_One



Theorem
Let $n \in \N$ be a natural number.
Let $2^n + 1$ be prime.

Then $n = 2^k$ for some natural number $k$.


Proof 1
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


Proof 2
A specific instance of Primes of form Power plus One:
$q^n + 1$ is prime only if:

$(1): \quad q$ is even
and

$(2): \quad n$ is of the form $2^k$ for some positive integer $k$.

As $2$ is even, the result applies.
$\blacksquare$


Also see
Definition:Fermat Prime: a prime of the form $2^{\paren {2^k} } + 1$.


Historical Note
In $1640$, Pierre de Fermat wrote to Pierre de Fermat wrote to Bernard Frénicle de Bessy announcing this result.
From the fact that all integers of the form $2^n + 1$ such that $n = 2^k$ that he tested were prime, he went on to make his famous Fermat Prime Conjecture: that they are all prime.
This was refuted by Leonhard Paul Euler, who discovered that $2^{2^5}$ is composite in $1732$.





