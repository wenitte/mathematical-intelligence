# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_is_Integer

Theorem
Let $\dbinom n k$ be a binomial coefficient.
Then $\dbinom n k$ is an integer.


Proof 1
If it is not the case that $0 \le k \le n$, then the result holds trivially.
So let $0 \le k \le n$.
By the definition of binomial coefficients:














\(\ds \binom n k\)

\(=\)







\(\ds \frac {n!} {k! \paren {n - k}!}\)




















\(\ds \)

\(=\)







\(\ds \frac {n \paren {n - 1} \paren {n - 2} \cdots \paren {n - k + 1} } {k!}\)









The numerator is a product of $k$ successive integers.
From Factorial Divides Product of Successive Numbers, $k!$ divides it.
$\blacksquare$


Proof 2
The result follows by Pascal's Rule and Integer Addition is Closed.
$\blacksquare$





