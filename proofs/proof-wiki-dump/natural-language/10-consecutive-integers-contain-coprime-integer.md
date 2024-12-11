# 

Source: https://proofwiki.org/wiki/10_Consecutive_Integers_contain_Coprime_Integer



Theorem
Let $n \in \Z$ be an integer.
Let $S := \set {n, n + 1, n + 2, \ldots, n + 9}$ be the set of $10$ consecutive integers starting from $n$.

Then at least one element of $S$ is coprime to every other element of $S$.


Proof
Consider $2$ elements $a, b$ of $S$ which share a common divisor $d$.
Then $d \divides \size {a - b}$ and so $d < 10$.
Now from the Fundamental Theorem of Arithmetic, $d$ must have a prime factor which is strictly less than $10$.
So for $a$ and $b$ to have a common divisor, at least one such common divisor is in $\set {2, 3, 5, 7}$.

There are exactly $5$ elements of $S$ which have a common divisor of $2$.

There are either $3$ or $4$ elements of $S$ common divisor of $3$.
The case where there are $4$ happens when $n = 3 k$ and $n + 9 = 3 \paren {k + 3}$.
Of these $3$ or $4$, no more than $2$ are odd and so have not been accounted for.

There are exactly $2$ elements of $S$ which have $5$ as a common divisor.
One of those is even and so has been counted already.

There are at most $2$ elements of $S$ which have $7$ as a common divisor.
One of those is even and so has been counted already.

Thus we have a count of how many elements of $S$ which can possibly share a common divisor with another element of $S$:

$5$ are divisible by $2$
$2$ or fewer are divisible by $3$ and not $2$
$1$ at the most is divisible by $5$ and not by $2$ or $3$
$1$ at the most is divisible by $7$ and not by $2$, $3$ or $5$.
That makes a total of $9$ elements of $S$ which are divisible by $2$, $3$, $5$ or $7$.
Thus there exists (at least) $1$ element of $S$ which is not divisible by $2$, $3$, $5$ or $7$ and so cannot share a common divisor with another element of $S$.
Hence the result.
$\blacksquare$


Historical Note
Since this result appeared in $1975$, it has reappeared in a number of places, including examinations and quizzes.
In Discrete Mathematics Volume $149$, pages $313$ to $317$, B.G. Eke refines this result, by going on to demonstrate that any block of $n$ consecutive integers for $2 \le n \le 16$ contains at least one integer which is coprime to the others.


Sources
1975: B.G. Eke: Problem $7.6$ (Mathematical Spectrum Vol. 7: p. 67)
1986: David Wells: Curious and Interesting Numbers ... (previous) ... (next): $10$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $10$




