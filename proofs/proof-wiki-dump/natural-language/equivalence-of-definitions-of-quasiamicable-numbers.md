# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Quasiamicable_Numbers



Theorem
Let $m \in \Z_{>0}$ and $n \in \Z_{>0}$ be (strictly) positive integers.

The following definitions of the concept of Quasiamicable Numbers are equivalent:

Definition 1
$m$ and $n$ are quasiamicable numbers if and only if:

the sum of the proper divisors of $m$ is equal to $n$
and:

the sum of the proper divisors of $n$ is equal to $m$.
Definition 2
$m$ and $n$ are quasiamicable numbers if and only if:

$\map {\sigma_1} m = \map {\sigma_1} n = m + n + 1$
where $\sigma_1$ denotes the divisor sum function.


Proof
Let $\map s n$ denote the sum of the proper divisors of (strictly) positive integer $n$.
The sum of all the divisors of a (strictly) positive integer $n$ is $\map {\sigma_1} n$, where $\sigma_1$ is the divisor sum function.
The proper divisors of $n$ are the divisors $n$ with $1$ and $n$ excluded.
Thus:

$\map s n = \map {\sigma_1} n - n - 1$

Suppose:

$\map s n = m$
and:

$\map s m = n$

Then:














\(\ds \map {\sigma_1} n - n - 1\)

\(=\)







\(\ds m\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} n\)

\(=\)







\(\ds m + n + 1\)










Similarly:














\(\ds \map {\sigma_1} m - m - 1\)

\(=\)







\(\ds n\)





Definition of Proper Divisor of Integer








\(\ds \leadsto \ \ \)





\(\ds \map {\sigma_1} m\)

\(=\)







\(\ds m + n + 1\)









Thus:

$\map s n = \map s m = m + n + 1$

The argument reverses.
$\blacksquare$





