# 

Source: https://proofwiki.org/wiki/Number_of_Integer_Partitions_into_Sum_of_Consecutive_Primes

Theorem
Let $n$ be a natural number.
Let $\map f n$ denote the number of integer partitions of $n$ where the parts are consecutive prime numbers.
For example:

$\map f {41} = 3$
because:

$41 = 11 + 13 + 17 = 2 + 3 + 5 + 7 + 11 + 13$
Then:

$\ds \lim_{x \mathop \to \infty} \dfrac 1 x \sum_{n \mathop = 1}^x \map f n = \ln 2$


Proof
Let $\mathbb P$ denote the set of prime numbers.

Every set of consecutive primes whose sum is less than $x$ will contribute $1$ to the sum:

$\map f 1 + \map f 2 + \dotsb + \map f x$
The number of such sets of $r$ primes is clearly at most:

$\map \pi {x / r}$
and at least:

$\map \pi {x / r} - r$
where $\pi$ is the prime-counting function.
Hence:

$\ds \sum_{r \mathop = 1}^k \paren {\map \pi {x / r} - r} \le \map f 1 + \map f 2 + \dotsb + \map f x \le \sum_{r \mathop = 1}^k \map \pi {x / r}$
where $k$ is determined by:

$(1): \quad p_1 + p_2 + \dotsb + p_k < x < p_1 + p_2 + . . . + p_{k + 1}$
From $(1)$ and the well known $p_r \asymp r \ln r$ we find:

$(2): \quad k \asymp \sqrt {\dfrac x {\ln x} }$
Here $f \asymp g$ denotes that $\dfrac f g$ is bounded above and below by positive numbers for large arguments.

This implies:

$\ds \sum_{r \mathop = 1}^k r = \map o x$
where $\map o x$ denotes little-$\oo$ notation.
Hence, if we can show that:

$\ds \sum_{r \mathop = 1}^k \map \pi {x / r} \approx \ln 2$
it will follow that:

$\map f 1 + \map f 2 + \dotsb + \map f x \approx x \ln 2$
Using $(2)$ and the Prime Number Theorem, the following estimates are justified:














\(\ds \sum_{r \mathop = 1}^k \map \pi {x / r}\)

\(\approx\)







\(\ds \sum_{r \mathop = 1}^k \dfrac x {r \, \map \ln {x / r} }\)




















\(\ds \)

\(\approx\)







\(\ds \int_1^k \dfrac {x \rd r} {r \, \map \ln {x / r} }\)




















\(\ds \)

\(=\)







\(\ds \bigintlimits {-x \map \ln {\map \ln {x / r} } } 1 k\)




















\(\ds \)

\(=\)







\(\ds x \paren {\ln \ln x - \map {\ln \ln} {x / k} }\)




















\(\ds \)

\(\approx\)







\(\ds x \paren {\ln \ln x - \ln \ln \sqrt {x \ln x} }\)




















\(\ds \)

\(\approx\)







\(\ds \ln 2\)









$\blacksquare$


Sources
1963: Leo Moser: Notes on number theory III. On the sum of consecutive primes (Canadian Math. Bull. Vol. 6: pp. 159 – 161)
1983: François Le Lionnais and Jean Brette: Les Nombres Remarquables ... (previous) ... (next): $0,69314 7805 \ldots$




