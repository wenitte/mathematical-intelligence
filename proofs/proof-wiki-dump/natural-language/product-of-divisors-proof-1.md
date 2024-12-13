# 

Source: https://proofwiki.org/wiki/Product_of_Divisors/Proof_1

Theorem
Let $n$ be an integer such that $n \ge 1$.
Let $\map D n$ denote the product of the divisors of $n$.
Then:

$\map D n = n^{\map {\sigma_0} n / 2}$
where $\map {\sigma_0} n$ denotes the divisor count function of $n$.


Proof
We have by definition that:

$\map D n = \ds \prod_{d \mathop \divides n} d$
Also by definition, $\map {\sigma_0} n$ is the number of divisors of $n$.

Suppose $n$ is not a square number.
Let $p \divides n$, where $\divides$ denotes divisibility.
Then:

$\exists q \divides n : p q = n$
Thus the divisors of $n$ come in pairs whose product is $n$.
From Divisor Count Function is Odd Iff Argument is Square, $\map {\sigma_0} n$ is even.
Thus $\dfrac {\map {\sigma_0} n} 2$ is an integer.
Thus there are exactly $\dfrac {\map {\sigma_0} n} 2$ pairs of divisors of $n$ whose product is $n$.
Thus the product of the divisors of $n$ is:

$\ds \prod_{d \mathop \divides n} d = n^{\map {\sigma_0} n / 2}$

Now suppose $n$ is square such that $n = r^2$.
Then from Divisor Count Function is Odd Iff Argument is Square, $\map {\sigma_0} n$ is odd.
Hence the number of divisors of $n$ not including $r$ is $\map {\sigma_0} n - 1$.
As before, these exist in pairs whose product is $n$.
Thus:














\(\ds \prod_{d \mathop \divides n} d\)

\(=\)







\(\ds r \times n^{\paren {\map {\sigma_0} n - 1} / 2}\)




















\(\ds \)

\(=\)







\(\ds r \times n^{\map {\sigma_0} n / 2 - 1 / 2}\)




















\(\ds \)

\(=\)







\(\ds n^{\map {\sigma_0} n / 2 - 1 / 2 + 1 / 2}\)





as $r = n^{1/2}$














\(\ds \)

\(=\)







\(\ds n^{\map {\sigma_0} n / 2}\)









Hence the result.
$\blacksquare$





