# 

Source: https://proofwiki.org/wiki/Number_of_Representations_as_Sum_of_Two_Primes

Theorem
The number of ways an integer $n$ can be represented as the sum of two primes is no greater than the number of primes in the interval $\closedint {\dfrac n 2} {n - 2}$.


Proof
Let $n = p + q$ where $p \le q$ and both $p$ and $q$ are primes.
There can be no more different representations of $n$ as $p + q$ than there are the number of possible options for $q$.
As $q \ge p$, it follows that $q \ge \dfrac n 2$.
Note that as $p \ge 2$, it follows that $q \le n - 2$.
The number of possible values of $q$ is therefore equal to the number of primes between $\dfrac n 2$ and $n - 2$ inclusive.
That is, the number of primes in the interval $\closedint {\dfrac n 2} {n - 2}$.
Hence the result.
$\blacksquare$


Sources
July 1993: Jean-Marc Deshouillers, Andrew Granville, Wladyslaw Narkiewicz and Carl Pomerance: An Upper Bound in Goldbach's Problem (Math. Comp. Vol. 61, no. 203: pp. 209 – 213)  www.jstor.org/stable/2152947
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $210$




