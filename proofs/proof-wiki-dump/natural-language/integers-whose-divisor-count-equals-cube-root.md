# 

Source: https://proofwiki.org/wiki/Integers_whose_Divisor_Count_equals_Cube_Root

Theorem
There are $3$ positive integers whose divisor count function equals its cube root:














\(\ds 1 = 1^3\)

\(:\)







\(\ds \map {\sigma_0} 1 = 1\)





$\sigma_0$ of $1$














\(\ds 21 \, 952 = 28^3\)

\(:\)







\(\ds \map {\sigma_0} {21 \, 952} = 28\)





$\sigma_0$ of $21 \, 952$














\(\ds 64 \, 000 = 40^3\)

\(:\)







\(\ds \map {\sigma_0} {64 \, 000} = 40\)





$\sigma_0$ of $64 \, 000$



This sequence is A066693 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Suppose $N = \map {\sigma_0} {N^3}$.
The case $N = 1$ is trivial.

Suppose $N$ is a prime power.
Write $N = p^n$.
By Divisor Count Function of Power of Prime:

$N = \map {\sigma_0} {p^{3 n} } = 3 n + 1$
By Bernoulli's Inequality:

$N = p^n \ge 1 + n \paren {p - 1}$
This gives us the inequality:

$3 n + 1 \ge 1 + n \paren {p - 1}$
which can be simplified to:

$3 \ge p - 1$
The only primes satisfying the inequality are $2$ and $3$.

We have:














\(\ds \map {\sigma_0} {2^3}\)

\(=\)







\(\ds 4\)

\(\ds > 2^1\)


















\(\ds \map {\sigma_0} {2^6}\)

\(=\)







\(\ds 7\)

\(\ds > 2^2\)


















\(\ds \map {\sigma_0} {2^9}\)

\(=\)







\(\ds 10\)

\(\ds > 2^3\)


















\(\ds \map {\sigma_0} {2^{3 n} }\)

\(=\)







\(\ds 3 n + 1\)

\(\ds < 2^n\)



for $n > 3$














\(\ds \map {\sigma_0} {3^3}\)

\(=\)







\(\ds 4\)

\(\ds > 3^1\)


















\(\ds \map {\sigma_0} {3^{3 n} }\)

\(=\)







\(\ds 3 n + 1\)

\(\ds < 3^n\)



for $n > 1$














\(\ds \map {\sigma_0} {p^{3 n} }\)

\(=\)







\(\ds 3 n + 1\)

\(\ds < p^n\)



for all $p > 3$



Hence no prime powers satisfy the property.

Note that Divisor Count Function is Multiplicative.
To form an integer $N$ with our property, we must choose and multiply prime powers from the list above.

If we chose any $\tuple {p, n}$ with $\map {\sigma_0} {p^{4 n} } < p^n$, we must choose $2^m$ or $3^1$ in order for equality to possibly hold.
If $\tuple {2, 1}$ was chosen, $2^2 \nmid N$.
But $\map {\sigma_0} {2^3} = 4 \divides N$, which is a contradiction.

Suppose $\tuple {2, 2}$ was chosen.
Then $\map {\sigma_0} {2^6} = 7 \divides N$.
Then we must choose some $\tuple {7, n}$.
For $n = 1$, $\map {\sigma_0} {7^3} = 4$.

$\map {\sigma_0} {2^6 \times 7^3} = 4 \times 7 = 28 = 2^2 \times 3$
$\map {\sigma_0} {2^6 \times 7^3 \times p^{3 m} } = 28 \paren {3 m + 1} < 28 \times p^m$ for all $p \ne 2, 7$
For $n > 1$, $\map {\sigma_0} {2^6 \times 7^{3 n} } = 7 \paren {3 n + 1} < 4 \times 7^n$, a contradiction.

Suppose $\tuple {2, 3}$ was chosen.
Then:

$\map {\sigma_0} {2^9} = 10 \divides N$
Then we must choose some $\tuple {5, n}$.
For $n = 1$, $\map {\sigma_0} {5^3} = 4$.

$\map {\sigma_0} {2^9 \times 5^3} = 10 \times 4 = 40 = 2^3 \times 5$
$\map {\sigma_0} {2^9 \times 5^3 \times p^{3 m} } = 40 \paren {3 m + 1} < 40 \times p^m$ for all $p \ne 2, 5$
For $n > 1$, $\map {\sigma_0} {2^9 \times 5^{3 n} } = 10 \paren {3 n + 1} < 2^3 \times 5^n$, a contradiction.

Suppose $\tuple {3, 1}$ was chosen.
Then $\map {\sigma_0} {3^3} = 4 \divides N$.
Then this case coincides the cases above.

Thus we have exhausted all cases.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $21,952$




