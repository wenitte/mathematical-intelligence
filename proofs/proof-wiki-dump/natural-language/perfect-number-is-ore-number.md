# 

Source: https://proofwiki.org/wiki/Perfect_Number_is_Ore_Number

Theorem
Let $n \in \Z_{>0}$ be a perfect number.
Then $n$ is an Ore number.


Proof
From Harmonic Mean of Divisors in terms of Divisor Count and Divisor Sum, the harmonic mean of the divisors of $n$ is given by:

$\map H n = \dfrac {n \map {\sigma_0} n} {\map {\sigma_1} n}$
where:

$\map {\sigma_0} n$ denotes the divisor count function: the number of divisors of $n$
$\map {\sigma_1} n$ denotes the divisor sum function: the sum of the divisors of $n$.

Let $n$ be a perfect number.
By definition of perfect number:

$\dfrac {\map {\sigma_1} n} n = 2$
From Divisor Count Function is Odd Iff Argument is Square:

$\map {\sigma_0} n = 2 k$
for some $k \in \Z$.
Hence:

$\map H n = \dfrac {2 k} 2 = k$
Hence the result.
$\blacksquare$


Sources
1948: Øystein Ore: On the averages of the divisors of a number (Amer. Math. Monthly Vol. 55, no. 10: pp. 615 – 619)  www.jstor.org/stable/2305616
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $140$




