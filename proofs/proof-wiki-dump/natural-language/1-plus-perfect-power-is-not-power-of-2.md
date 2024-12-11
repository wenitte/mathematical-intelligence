# 

Source: https://proofwiki.org/wiki/1_plus_Perfect_Power_is_not_Power_of_2

Theorem
The equation:

$1 + a^n = 2^m$
has no solutions in the integers for $n, m > 1$.
This is an elementary special case of Catalan's Conjecture.


Proof
Aiming for a contradiction, suppose there is a solution.
Then:














\(\ds a^n\)

\(=\)







\(\ds 2^m - 1\)




















\(\ds \)

\(\equiv\)







\(\ds -1\)

\(\ds \pmod 4\)



as $m > 1$



$a$ is immediately seen to be odd.
By Square Modulo 4, $n$ must also be odd.

Now:














\(\ds 2^m\)

\(=\)







\(\ds a^n + 1\)




















\(\ds \)

\(=\)







\(\ds \paren {a + 1} \sum_{k \mathop = 0}^{n - 1} \paren {-1}^k a^{n - k - 1}\)





Sum of Two Odd Powers



The latter sum has $n$ powers of $a$, which sums to an odd number.
The only odd divisor of $2^m$ is $1$.
However, if the sum is $1$, we have:

$a^n + 1 = a + 1$
giving $n = 1$, contradicting our constraint $n > 1$.
Hence the result by Proof by Contradiction.
$\blacksquare$





