# 

Source: https://proofwiki.org/wiki/Numbers_whose_Fourth_Root_equals_Number_of_Divisors

Theorem
There are $4$ positive integers whose $4$th root equals the number of its divisors:














\(\ds 1\)

\(=\)







\(\ds 1^4\)




















\(\ds 625\)

\(=\)







\(\ds 5^4\)




















\(\ds 6561\)

\(=\)







\(\ds 9^4\)




















\(\ds 4 \, 100 \, 625\)

\(=\)







\(\ds 45^4\)









This sequence is A143026 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof













\(\ds \map {\sigma_0} 1\)

\(=\)







\(\ds 1\)





$\sigma_0$ of $1$














\(\ds \map {\sigma_0} {625}\)

\(=\)







\(\ds 5\)





$\sigma_0$ of $625$














\(\ds \map {\sigma_0} {6561}\)

\(=\)







\(\ds 9\)





$\sigma_0$ of $6561$














\(\ds \map {\sigma_0} {4 \, 100 \, 625}\)

\(=\)







\(\ds 45\)





$\sigma_0$ of $4 \, 100 \, 625$




Suppose $N = \map {\sigma_0} {N^4}$.
By Divisor Count Function is Odd Iff Argument is Square, $N$ must be odd.
The case $N = 1$ is trivial.

Suppose $N$ is a prime power.
Write $N = p^n$.
By Divisor Count Function of Power of Prime:

$N = \map {\sigma_0} {p^{4 n} } = 4 n + 1$
By Bernoulli's Inequality:

$N = p^n \ge 1 + n \paren {p - 1}$
This gives us the inequality:

$4 n + 1 \ge 1 + n \paren {p - 1}$
which can be simplified to:

$4 \ge p - 1$
The only odd primes satisfying the inequality are $3$ and $5$.
We have:

$\map {\sigma_0} {3^4} = 5 > 3^1$
$\map {\sigma_0} {3^8} = 9 = 3^2$
$\map {\sigma_0} {3^{4 n} } = 4 n + 1 < 3^n$ for $n > 2$
$\map {\sigma_0} {5^4} = 5 = 5^1$
$\map {\sigma_0} {5^{4 n} } = 4 n + 1 < 5^n$ for $n > 1$
$\map {\sigma_0} {p^{4 n} } = 4 n + 1 < p^n$ for any $p > 5$

Hence $625$ and $6561$ are the only prime powers satisfying the property.

Note that Divisor Count Function is Multiplicative.
To form an integer $N$ with our property, we must choose and multiply prime powers from the list above.
The product $625 \times 6561 = 4 \, 100 \, 625$ gives equality.

If we chose any $\tuple {p, n}$ with $\map {\sigma_0} {p^{4 n} } < p^n$, we must choose $3^4$ in order for equality to possibly hold.
Then $\map {\sigma_0} {3^4} = 5 \divides N$, so a tuple $\tuple {5, n}$ must be chosen.
If $\tuple {5, 1}$ was chosen, $5^2 \nmid N$.
But $\map {\sigma_0} {3^4 \times 5^4} = 25 \divides N$, which is a contradiction.
Suppose $\tuple {5, n}$ with $n \ge 2$ was chosen.
Then $\map {\sigma_0} {3^4 \times 5^{4 n} } = 20 n + 1 < 3 \times 5^n$, a contradiction.

Thus we have exhausted all cases.
$\blacksquare$


Sources
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $4,100,625$




