# 

Source: https://proofwiki.org/wiki/Constant_to_Power_of_Number_of_Distinct_Prime_Divisors_is_Multiplicative_Function



Theorem
Let $c \in \R$ be a constant.
Let $f: \N \to \R$ denotes the mapping defined as:

$\forall n \in \N: \map f n = c^k$
where $k$ is number of distinct primes that divide $n$.

Then $f$ is multiplicative.


Proof
Let $r, s \in \Z$ such that $r \perp s$.
Let $r$ be composed of $p$ distinct primes:

$r_1, r_2, \ldots r_p$
Thus:

$\map f r = c^p$
Let $s$ be composed of $q$ distinct primes:

$s_1, s_2, \ldots s_q$
Thus:

$\map f s = c^q$
As $r \perp s$, all the $r_k$ and $s_k$ are distinct.
Thus $r s$ is composed of:

the $p$ distinct primes $r_1, r_2, \ldots r_p$
and:

the $q$ distinct primes $s_1, s_2, \ldots s_q$
which is a total of $p + q$ distinct primes.
Thus:














\(\ds \map f {r s}\)

\(=\)







\(\ds c^{p + q}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds c^p c^q\)





Product of Powers














\(\ds \)

\(=\)







\(\ds \map f r \map f s\)





from above



Hence the result.
$\blacksquare$


Also see
Möbius Function is Multiplicative, a similar result.


Sources
1997: Donald E. Knuth: The Art of Computer Programming: Volume 1: Fundamental Algorithms (3rd ed.) ... (previous) ... (next): $\S 1.2.4$: Integer Functions and Elementary Number Theory: Exercise $29 \ \text{(c)}$




