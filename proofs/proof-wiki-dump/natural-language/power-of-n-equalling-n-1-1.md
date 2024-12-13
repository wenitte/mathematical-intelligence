# 

Source: https://proofwiki.org/wiki/Power_of_n_equalling_(n_-_1)!_%2B_1



Theorem
There is exactly one solution to the equation in the integers:

$\paren {n - 1}! + 1 = n^k$
for $k > 1$, and that is:

$n = 5$
$k = 2$


Theorem
We have that:














\(\ds \paren {1 - 1}! + 1\)

\(=\)







\(\ds 0! + 1\)




















\(\ds \)

\(=\)







\(\ds 1 + 1\)





Factorial of Zero














\(\ds \)

\(=\)







\(\ds 2\)





not a power of $1$














\(\ds \paren {2 - 1}! + 1\)

\(=\)







\(\ds 1! + 1\)




















\(\ds \)

\(=\)







\(\ds 1 + 1\)





Examples of Factorials














\(\ds \)

\(=\)







\(\ds 2\)




















\(\ds \)

\(=\)







\(\ds 2^1\)





$k = 1$














\(\ds \paren {3 - 1}! + 1\)

\(=\)







\(\ds 2! + 1\)




















\(\ds \)

\(=\)







\(\ds 2 + 1\)





Examples of Factorials














\(\ds \)

\(=\)







\(\ds 3\)




















\(\ds \)

\(=\)







\(\ds 3^1\)





$k = 1$














\(\ds \paren {4 - 1}! + 1\)

\(=\)







\(\ds 3! + 1\)




















\(\ds \)

\(=\)







\(\ds 6 + 1\)





Examples of Factorials














\(\ds \)

\(=\)







\(\ds 7\)





not a power of $4$














\(\ds \paren {5 - 1}! + 1\)

\(=\)







\(\ds 4! + 1\)




















\(\ds \)

\(=\)







\(\ds 24 + 1\)





Examples of Factorials














\(\ds \)

\(=\)







\(\ds 25\)




















\(\ds \)

\(=\)







\(\ds 5^2\)










Let $n > 5$.
Suppose $n$ is composite.
By Divisibility of n-1 Factorial by Composite n:

$n \divides \paren {n - 1}!$
and thus:

$n \nmid \paren {n - 1}! + 1$
showing that $\paren {n - 1}! + 1$ is not a power of $n$.

Suppose $n$ is prime.
Further suppose:

$\exists k \in \N: \paren {n - 1}! + 1 = n^k$
Then:














\(\ds \paren {n - 1}!\)

\(=\)







\(\ds n^k - 1\)




















\(\ds \)

\(=\)







\(\ds \paren {n - 1} \sum_{i \mathop = 0}^{k - 1} n^i\)





Sum of Geometric Sequence








\(\ds \leadsto \ \ \)





\(\ds \paren {n - 2}!\)

\(=\)







\(\ds \sum_{i \mathop = 0}^{k - 1} n^i\)




















\(\ds \)

\(\equiv\)







\(\ds \sum_{i \mathop = 0}^{k - 1} 1^i\)

\(\ds \pmod {n - 1}\)



Congruence of Powers














\(\ds \)

\(\equiv\)







\(\ds k\)

\(\ds \pmod {n - 1}\)







By Divisibility of n-1 Factorial by Composite n, since $n - 1 \ne 4$ and is composite:

$n - 1 \divides \paren {n - 2}!$
thus $k$ must be a multiple of $n - 1$.

However:














\(\ds n^{n - 1}\)

\(>\)







\(\ds n \paren {n - 1} \paren {n - 2} \cdots \paren 2\)




















\(\ds \)

\(=\)







\(\ds n!\)




















\(\ds \)

\(>\)







\(\ds 2 \paren {n - 1}!\)




















\(\ds \)

\(>\)







\(\ds \paren {n - 1}! + 1\)




















\(\ds \)

\(>\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds n^0\)









which shows that no multiple of $n - 1$ can satisfy our equation.
Hence there is no solution for $n > 5$.
$\blacksquare$


Historical Note
The fact that $25 = 4! + 1$ is the only solution to $\left({n - 1}\right)! + 1 = n^k$ was apparently proved by Joseph Liouville, but this requires corroboration.


Sources
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $113$
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $25$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $25$




