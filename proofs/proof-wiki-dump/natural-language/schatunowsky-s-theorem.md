# 

Source: https://proofwiki.org/wiki/Schatunowsky%27s_Theorem



Theorem
Let $n \in \Z_{>0}$ be a strictly positive integer.
Let $\map w n$ denote the number of primes strictly less than $n$ which are not divisors of $n$.
Let $\map \phi n$ denote the Euler $\phi$ function of $n$.

Then $30$ is the largest integer $n$ such that:

$\map w n = \map \phi n - 1$


Proof
The above equation is equivalent to the property that all numbers greater than $1$ that are coprime to it but less are prime.
For an integer to have this property:
If it is greater than $p^2$ for some prime $p$, then it must be divisible by $p$.
If not, it will be coprime to $p^2$, a composite number.

Let $p_n$ denote the $n$th prime.
Suppose $N$ has this property.
By the argument above, if $p_{n + 1}^2 \ge N > p_n^2$, we must have $p_1 p_2 \cdots p_n \divides N$.
By Absolute Value of Integer is not less than Divisors, we have $p_1 p_2 \cdots p_n \le N$.

Bertrand-Chebyshev Theorem asserts that there is a prime between $p_n$ and $2 p_n$.
Thus we have $2 p_n > p_{n + 1}$.

Hence for $n \ge 5$:














\(\ds N\)

\(\ge\)







\(\ds p_1 p_2 \cdots p_n\)




















\(\ds \)

\(=\)







\(\ds 2 \times 3 \times 5 p_4 \cdots p_n\)




















\(\ds \)

\(>\)







\(\ds 8 p_{n - 1} p_n\)




















\(\ds \)

\(>\)







\(\ds 4 p_n^2\)





Bertrand-Chebyshev Theorem














\(\ds \)

\(>\)







\(\ds p_{n + 1}^2\)





Bertrand-Chebyshev Theorem














\(\ds \)

\(\ge\)







\(\ds N\)





From assumption



This is a contradiction. 

Hence we must have $N \le p_5^2 = 121$.
From the argument above we also have:

$2 \divides N$ for $4 < N \le 9$
$2, 3 \divides N$ for $9 < N \le 25$
$2, 3, 5 \divides N$ for $25 < N \le 49$
$2, 3, 5, 7 \divides N$ for $49 < N \le 121$
So we end up with the list $N = 1, 2, 3, 4, 6, 8, 12, 18, 24, 30$.
This list is verified in Integers such that all Coprime and Less are Prime.
$\blacksquare$


Also see
Integers such that all Coprime and Less are Prime
Odd Integers whose Smaller Odd Coprimes are Prime


Source of Name
This entry was named for Samuil Osipovich Shatunovsky.


Sources
1971: George E. Andrews: Number Theory ... (previous) ... (next): $\text {4-2}$ Residue Systems: Exercise $4$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $30$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $30$
May 2015: Victor Pambuccian: Schatunowsky's theorem, Bonse's inequality, and Chebyshev's theorem in weak fragments of Peano arithmetic (Math. Log. Quart Vol. 61, no. 3: pp. 230 – 235)




