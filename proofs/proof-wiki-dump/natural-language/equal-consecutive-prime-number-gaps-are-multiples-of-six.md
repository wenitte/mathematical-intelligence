# 

Source: https://proofwiki.org/wiki/Equal_Consecutive_Prime_Number_Gaps_are_Multiples_of_Six

Theorem
If you list the gaps between consecutive primes greater than $5$:

$2, 4, 2, 4, 2, 4, 6, 2, 6, 4, 2, 4, \ldots$
you will notice that consecutive gaps that are equal are of the form $6 x$.
This is always the case.
This sequence is A001223 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Suppose there were two consecutive gaps between $3$ consecutive prime numbers that were equal, but not divisible by $6$.
Then the difference is $2 k$ where $k$ is not divisible by $3$.
Therefore the (supposed) prime numbers will be:

$p, p + 2 k, p + 4 k$
But then $p + 4 k$ is congruent modulo $3$ to $p + k$.
That makes the three numbers congruent modulo $3$ to $p, p + k, p + 2k$.
One of those is divisible by $3$ and so cannot be prime.
So two consecutive gaps must be divisible by $3$ and therefore (as they have to be even) by $6$.
$\blacksquare$





