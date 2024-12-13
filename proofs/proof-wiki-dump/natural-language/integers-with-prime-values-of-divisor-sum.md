# 

Source: https://proofwiki.org/wiki/Integers_with_Prime_Values_of_Divisor_Sum

Theorem
The sequence of integer whose divisor sum is prime begins:














\(\ds \map {\sigma_1} 2\)

\(=\)







\(\ds 3\)




















\(\ds \map {\sigma_1} 4\)

\(=\)







\(\ds 7\)




















\(\ds \map {\sigma_1} 6\)

\(=\)







\(\ds 13\)




















\(\ds \map {\sigma_1} {16}\)

\(=\)







\(\ds 31\)




















\(\ds \map {\sigma_1} {25}\)

\(=\)







\(\ds 31\)




















\(\ds \map {\sigma_1} {64}\)

\(=\)







\(\ds 127\)




















\(\ds \map {\sigma_1} {289}\)

\(=\)







\(\ds 307\)









This sequence is A023194 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Apart from $2$, all primes are odd.
From Divisor Sum is Odd iff Argument is Square or Twice Square, for $\map {\sigma_1} n$ to be odd it needs to be of the form $m^2$ or $2 m^2$.
Suppose $n$ has two coprime divisors $p$ and $q$, each to power $k_p$ and $k_q$ respectively.
Then $\map {\sigma_1} n$ will have $\map {\sigma_1} {p^{k_p} }$ and $\map {\sigma_1} {q^{k_q} }$ as divisors.
Hence $\map {\sigma_1} n$ will not be prime.
So for $\map {\sigma_1} n$ to be prime, $n$ can have only one prime factor.

This gives possible values for $n$ as:

powers of $2$, either odd or even
or:

even powers of a prime number.

These can be investigated in turn, using Divisor Sum of Power of Prime:

$\map {\sigma_1} {p^k} = \dfrac {p^{k + 1} - 1} {p - 1}$
Note that as $\map {\sigma_1} {2^k} = \dfrac {2^{k + 1} - 1} {2 - 1} = 2^{k + 1} - 1$ it is necessary for powers of $2$ merely to report the appropriate Mersenne prime.
Hence when $k + 1$ is not prime, $\map {\sigma_1} {2^k}$ will not be prime and there is no need to test it.

Thus we test all $n$ such that:

$n = p^{2 k}$ for prime $p$
$n = 2^k$ where $k + 1$ is prime
and so:














\(\ds \map {\sigma_1} 2\)

\(=\)







\(\ds 2^2 - 1\)




















\(\ds \)

\(=\)







\(\ds 3\)





which is a Mersenne prime
















\(\ds \map {\sigma_1} 4\)

\(=\)







\(\ds \map {\sigma_1} {2^2}\)




















\(\ds \)

\(=\)







\(\ds 2^3 - 1\)




















\(\ds \)

\(=\)







\(\ds 7\)





which is a Mersenne prime
















\(\ds \map {\sigma_1} 9\)

\(=\)







\(\ds \map {\sigma_1} {3^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {3^3 - 1} {3 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {26} 2\)




















\(\ds \)

\(=\)







\(\ds 13\)





which is prime
















\(\ds \map {\sigma_1} {16}\)

\(=\)







\(\ds \map {\sigma_1} {2^4}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2^5 - 1} {2 - 1}\)




















\(\ds \)

\(=\)







\(\ds 31\)





which is prime
















\(\ds \map {\sigma_1} {25}\)

\(=\)







\(\ds \map {\sigma_1} {5^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {5^3 - 1} {5 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {124} 4\)




















\(\ds \)

\(=\)







\(\ds 31\)





which is prime
















\(\ds \map {\sigma_1} {49}\)

\(=\)







\(\ds \map {\sigma_1} {7^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {7^3 - 1} {7 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {342} 6\)




















\(\ds \)

\(=\)







\(\ds 57 = 3 \times 19\)





which is not prime
















\(\ds \map {\sigma_1} {64}\)

\(=\)







\(\ds \map {\sigma_1} {2^6}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2^7 - 1} {2 - 1}\)




















\(\ds \)

\(=\)







\(\ds 127\)





which is a Mersenne prime
















\(\ds \map {\sigma_1} {121}\)

\(=\)







\(\ds \map {\sigma_1} {11^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {11^3 - 1} {11 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {1330} {10}\)




















\(\ds \)

\(=\)







\(\ds 133 = 7 \times 19\)





which is not prime
















\(\ds \map {\sigma_1} {169}\)

\(=\)







\(\ds \map {\sigma_1} {13^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {13^3 - 1} {11 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {2196} {12}\)




















\(\ds \)

\(=\)







\(\ds 183 = 3 \times 61\)





which is not prime
















\(\ds \map {\sigma_1} {289}\)

\(=\)







\(\ds \map {\sigma_1} {17^2}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {17^3 - 1} {17 - 1}\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4912} {16}\)




















\(\ds \)

\(=\)







\(\ds 307\)





which is prime



Hence the sequence as given.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $16$
but beware a mistake in this sequence.




