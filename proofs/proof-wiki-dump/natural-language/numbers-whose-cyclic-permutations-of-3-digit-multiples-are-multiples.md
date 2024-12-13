# 

Source: https://proofwiki.org/wiki/Numbers_whose_Cyclic_Permutations_of_3-Digit_Multiples_are_Multiples



Theorem
Let $n$ be a two-digit positive integer with the following property:

Let $m$ be a $3$-digit multiple of $n$.
Then any cyclic permutation of the digits of $m$ is also a multiple of $n$.

Then $n$ is either $27$ or $37$.


Proof
Let $m$ be a multiple of $n$ with $3$ digits.
Then we have:














\(\ds n \times c\)

\(=\)







\(\ds a_2 \times 10^2 + a_1 \times 10^1 + a_0\)










Let us now cyclically permute the digits of $m$ by multiplying by $10$.
Then we have:














\(\ds 10 \times n \times c\)

\(=\)







\(\ds 10 \times \paren {a_2 \times 10^2 + a_1 \times 10^1 + a_0}\)





multiply original number by $10$














\(\ds \)

\(=\)







\(\ds a_2 \times 10^3 + a_1 \times 10^2 + a_0 \times 10^1\)




















\(\ds \)

\(=\)







\(\ds a_1 \times 10^2 + a_0 \times 10^1 + a_2 \times 10^0\)





$10^3$ and $10^0 \equiv 1 \pmod {n}$




From the above, we see that:

$n$ is a divisor of a cyclic permutation of $m$
if and only if:

$n \divides \paren {10^3 - 1 }$

We now note that:

$10^3 - 1 = 37 \times 27 = 37 \times 3^3$
Upon inspection, we see that the only $2$-digit factors are $27$ and $37$.
$\blacksquare$


Also see
Cyclic Permutations of 5-Digit Multiples of 41


Sources
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $27$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $27$




