# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Abundant_Number



Theorem
The following definitions of a abundant number are equivalent:

Definition 1
Let $\map A n$ denote the abundance of $n$.
$n$ is abundant if and only if $\map A n > 0$.

Definition 2
Let $\map {\sigma_1} n$ be the divisor sum function of $n$.
$n$ is abundant if and only if $\dfrac {\map {\sigma_1} n} n > 2$.

Definition 3
$n$ is abundant if and only if it is smaller than its aliquot sum.


Proof
By definition of abundance:

$\map A n = \map {\sigma_1} n - 2 n$
By definition of divisor sum function:

$\map {\sigma_1} n$ is the sum of all the divisors of $n$.
Thus $\map {\sigma_1} n - n$ is the aliquot sum of $n$.
The result follows.
$\blacksquare$





