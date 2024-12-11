# 

Source: https://proofwiki.org/wiki/1_plus_Power_of_2_is_not_Perfect_Power_except_9

Theorem
The only solution to:

$1 + 2^n = a^b$
is:

$\tuple {n, a, b} = \tuple {3, 3, 2}$
for positive integers $n, a, b$ with $b > 1$.


Proof
It suffices to prove the result for prime values of $b$.

For $n = 0$, it is clear that $1 + 2^0 = 2$ is not a perfect power.
For $n > 0$, $1 + 2^n$ is odd.
Hence for the equation to hold $a$ must be odd as well.
Writing $a = 2 m + 1$ we have:














\(\ds 1 + 2^n\)

\(=\)







\(\ds \paren {2 m + 1}^b\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^b \binom b i \paren {2 m}^i \paren 1^{b - i}\)





Binomial Theorem














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^b \binom b i \paren {2 m}^i\)




















\(\ds \)

\(=\)







\(\ds 1 + \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^i\)





Binomial Coefficient with Zero














\(\ds 2^n\)

\(=\)







\(\ds \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^i\)




















\(\ds \)

\(=\)







\(\ds 2 m \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^{i - 1}\)





$m \ne 0$



Since all factors of $2^n$ are powers of $2$:

$\ds \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^{i - 1}$ is a power of $2$.
But since each summand is non-negative:

$\ds \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^{i - 1} \ge 2$
we must have $\ds \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^{i - 1}$ is even.

We have:














\(\ds \sum_{i \mathop = 1}^b \binom b i \paren {2 m}^{i - 1}\)

\(=\)







\(\ds \binom b 1 + \sum_{i \mathop = 2}^b \binom b i \paren {2 m}^{i - 1}\)




















\(\ds \)

\(=\)







\(\ds b + 2 m \sum_{i \mathop = 2}^b \binom b i \paren {2 m}^{i - 2}\)




















\(\ds \)

\(\equiv\)







\(\ds b\)

\(\ds \pmod 2\)







Therefore we must have $b = 2$, the only even prime.

In that case:














\(\ds 2^n\)

\(=\)







\(\ds \paren {2 m + 1}^2 - 1\)




















\(\ds \)

\(=\)







\(\ds 4 m^2 + 4 m + 1 - 1\)




















\(\ds \)

\(=\)







\(\ds 4 m \paren {m + 1}\)









So $m$ and $m + 1$ are powers of $2$.

The only $m$ satisfying this is $1$, giving the solution:














\(\ds a\)

\(=\)







\(\ds 2 m + 1\)




















\(\ds \)

\(=\)







\(\ds 3\)




















\(\ds 2^n\)

\(=\)







\(\ds 3^2 - 1\)




















\(\ds \)

\(=\)







\(\ds 8\)














\(\ds \leadsto \ \ \)





\(\ds n\)

\(=\)







\(\ds 3\)









$\blacksquare$


Also see
Catalan's Conjecture, of which this is a special case.




