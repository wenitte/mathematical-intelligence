# 

Source: https://proofwiki.org/wiki/Midy%27s_Theorem



Theorem
Let $p$ be a prime.
Let $a \in \set {1, 2, \ldots, p - 1}$ and $b > 1$ be integers.
Let $N$ be the recurring part of the expansion of $\dfrac a p$ in base $b$.
Let $\alpha$ be the period of recurrence of $N$.
Let $\alpha = c k$ for (strictly) positive integers $c > 1$ and $k$.
Then $N$ is divisible by $b^k - 1$.

Moreover, let $N = \ds \sum_{i \mathop = 1}^c N_i \paren {b^k}^i$ for $N_i \in \set {0, 1, \ldots b^k - 1}$.
Then:

$\ds \sum_{i \mathop = 1}^c N_i = r \paren {b^k - 1}$ for some $r \in \set {1, 2, \ldots, c - 1}$


Proof
$N$ is divisible by $b^k - 1$
By definition of recurrence, we have:

$\dfrac a p b^\alpha = N + \dfrac a p$
Moreover, by definition of period of recurrence, $\alpha$ is the smallest positive integer for which this is true.
Rearranging, we obtain:

$\dfrac a p \paren {b^\alpha - 1} = N$
In particular, $a \paren {b^\alpha - 1}$ is divisible by $p$.
As $p$ is prime:

$p \divides a$ or $p \divides \paren {b^\alpha - 1}$
The former is false because $0 < a < p$. 
Therefore, we must have $p \divides \paren {b^\alpha - 1}$.
If $\alpha = c k$ with $c > 1$, then $b^\alpha - 1 = \paren {b^k - 1} m$ for some integer $m$.
As $p$ is prime:

$p \divides b^k - 1$ or $p \divides m$
The former is false because $0 < k < \alpha$ and $\alpha$ is the smallest positive integer for which this is true. 
Therefore, we must have $p \divides m$.
This implies that $a \dfrac m p$ is an integer.
We then have:

$a \dfrac m p \paren {b^k - 1} = N$
By definition, $N$ is divisible by $b^k - 1$.
$\Box$


The Sum of the $N_i$ is divisible by $b^k - 1$
Calculating modulo $b^k - 1$, we have:














\(\ds 0\)

\(=\)







\(\ds N\)





a priori














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^c N_i b^{ki}\)





by definition














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^c N_i \paren {\paren {b^k - 1} + 1}^i\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^c N_i \paren {0 + 1}^i\)





reducing modulo $b^k - 1$














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 1}^c N_i\)









Therefore, we have:

$\ds \sum_{k \mathop = 1}^c N_i = r \paren {b^k - 1}$
Notice further that:

$\ds 0 < \sum_{k \mathop = 1}^c N_i < \sum_{k \mathop = 1}^c \paren {b^k - 1}$
The latter strict inequality follows because otherwise, we would have $N_i = b^k - 1$, meaning $\alpha = 1$.
Therefore, we must have $1 < r < c-1$.
$\blacksquare$


Examples
Example: $7$
Let $p = 7$.
We have for $a = 1$ and $b = 10$ the decimal expansion:

$\dfrac 1 7 = 0 \cdotp \dot 14285 \dot 7$
Hence:

$N = 142857$
This means that:

$\alpha = 6 = 2 \times 3$
Midy's Theorem states that $N$ is divisible by $10^2 - 1$ and $10^3 - 1$.
Moreover, we can partition $N$ into blocks of digits of equal length:

$N = 14 \times 100^2 + 28 \times 100 + 57$
$N = 142 \times 1000 + 857$
Summing these blocks together, we obtain:

$14 + 28 + 57 = 99 = 10^2 - 1$
and:

$142 + 857 = 999 = 10^3 - 1$


Also see
Definition:Repdigit Number
Number times Recurring Part of Reciprocal gives 9-Repdigit


Source of Name
This entry was named for Étienne Midy.





