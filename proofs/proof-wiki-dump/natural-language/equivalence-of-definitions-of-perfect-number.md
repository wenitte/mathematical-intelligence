# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Perfect_Number



Theorem
The following definitions of the concept of Perfect Number are equivalent:

Definition 1
A perfect number is a (strictly) positive integer equal to its aliquot sum.

Definition 2
A perfect number $n$ is a (strictly) positive integer such that:

$\map {\sigma_1} n= 2 n$
where $\sigma_1: \Z_{>0} \to \Z_{>0}$ is the divisor sum function.

Definition 3
Let $\map A n$ denote the abundance of $n$.
$n$ is perfect if and only if $\map A n = 0$.

Definition 4
A perfect number $n$ is a (strictly) positive integer such that:

$\dfrac {\map {\sigma_1} n} n = 2$
where $\sigma_1: \Z_{>0} \to \Z_{>0}$ is the divisor sum function.


Proof
Consider a strictly positive integer $n$.
By Definition 1, $n$ is a perfect number if and only if $n$ equals the sum of its aliquot parts.
By definition of divisor sum function, $\map {\sigma_1} n$ equals the sum of all the divisors of $n$.
Thus $\map {\sigma_1} n - n$ equals the aliquot sum of $n$.
So by Definition 2, $n$ is a perfect number if and only if $\map {\sigma_1} n - n = n$.
Hence the definitions are equivalent.

The equivalence of definition 4 to definition 2 follows directly.

The equivalence of definition 3 to definition 2 follows from the definition of abundance.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.2$: More about Numbers: Irrationals, Perfect Numbers and Mersenne Primes




