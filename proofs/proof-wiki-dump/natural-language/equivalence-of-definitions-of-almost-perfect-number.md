# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Almost_Perfect_Number



Theorem
The following definitions of the concept of Almost Perfect Number are equivalent:

Definition 1
Let $A \left({n}\right)$ denote the abundance of $n$.
$n$ is almost perfect if and only if $A \left({n}\right) = -1$.

Definition 2
$n$ is almost perfect if and only if:

$\map {\sigma_1} n = 2 n - 1$
where $\map {\sigma_1} n$ denotes the divisor sum function of $n$.

Definition 3
$n$ is almost perfect if and only if it is exactly one greater than the sum of its aliquot parts.


Proof
By definition of abundance:

$\map A n = \map {\sigma_1} n - 2 n$
By definition of divisor sum function:

$\map {\sigma_1} n$ is the sum of all the divisors of $n$.
Thus $\map {\sigma_1}  - n$ is the sum of the aliquot parts of $n$.
Hence the result.
$\blacksquare$





