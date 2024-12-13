# 

Source: https://proofwiki.org/wiki/Numbers_with_Square-Free_Binomial_Coefficients



Theorem
For every $n$ greater than $23$, there exists a binomial coefficient $\dbinom n k$ that is not square-free.

More specifically, the list of numbers $n$ such that $\dbinom n k$ are square-free for all $k = 0, \dots, n$ is given by:

$1, 2, 3, 5, 7, 11, 23$
This sequence is A048278 in the On-Line Encyclopedia of Integer Sequences (N. J. A. Sloane (Ed.), 2008).


Proof
Lemma
Let $n$ be a (strictly) positive integer. 
Let $p$ be a prime number.
By Basis Representation Theorem, there is a unique sequence $\sequence {a_j}_{0 \mathop \le j \mathop \le r}$ such that:

$(1): \quad \ds n = \sum_{k \mathop = 0}^r a_k p^k$
$(2): \quad \ds \forall k \in \closedint 0 r: a_k \in \N_b$
$(3): \quad r_t \ne 0$
Suppose $r \ge 2$ and $p^2 \nmid \dbinom n m$ for all $0 \le m \le n$. 
Then:

$p^{r - 1} \divides \paren {n + 1}$
that is:

$p^{r - 1}$ divides $\paren {n + 1}$.
$\Box$


Case 1: $n \ge 25$
Consider the case $n \ge 25$. 

Aiming for a contradiction, suppose for all $0 \le m \le n$, $\dbinom n m$ is square-free.
Then for any prime $p$:

$p^2 \nmid \dbinom n m$
for all $0 \le m \le n$.
In particular we have:

$2^2 \nmid \dbinom n m$
and:

$5^2 \nmid \dbinom n m$

There exists an integer $r$ where $2^r \le n < 2^{r + 1}$.
There also exists an integer $s$ where $5^s \le n < 5^{s + 1}$.
We have $r \ge 4$ and $s \ge 2$ from $n \ge 25 = 5^2 \ge 16 = 2^4$.

By the Lemma, we have:

$2^{r - 1} \divides \paren {n + 1}$
and:

$5^{s - 1} \divides \paren {n + 1}$

Because $2^{r - 1}$ and $5^{s - 1}$ are coprime, we have by Product of Coprime Factors:

$2^{r - 1} 5^{s - 1} \divides \paren {n + 1}$
Thus:














\(\ds n + 1\)

\(\ge\)







\(\ds 2^{r - 1} 5^{s - 1}\)





Absolute Value of Integer is not less than Divisors














\(\ds \)

\(\ge\)







\(\ds 2^{r - 1} 5\)





$s - 1 \ge 1$














\(\ds \)

\(=\)







\(\ds \dfrac {2^{r + 1} } 4 \times 5\)




















\(\ds \)

\(>\)







\(\ds \dfrac n 4 \times 5\)





from $2^{r + 1} > n$














\(\ds \)

\(=\)







\(\ds n + \dfrac n 4\)




















\(\ds \)

\(\ge\)







\(\ds n + \dfrac {25} 4\)





from $n \ge 25$



which is a contradiction.

Therefore $\dbinom n m$ is not square-free for any $0 \le m \le n$.
$\Box$


Case 2: $9 \le n \le 24$
Consider the case $9 \le n \le 24$.

Suppose for all $0 \le m \le n$, $\dbinom n m$ is square-free.
Then for any prime $p$:

$p^2 \nmid \dbinom n m$
for all $0 \le m \le n$.
In particular we have:

$2^2 \nmid \dbinom n m$
and:

$3^2 \nmid \dbinom n m$

There exists an integer $r$ where $2^r \le n < 2^{r + 1}$.
There also exists an integer $s$ where $3^s \le n < 3^{s + 1}$.
From:

$n \ge 9 = 3^2 \ge 8 = 2^3$
we have $r \ge 3$ and $s \ge 2$

By the Lemma, we have:

$2^{r - 1} \divides \paren {n + 1}$
and:

$3^{s - 1} \divides \paren {n + 1}$
So we have:

$2^2 \divides \paren {n + 1}$
and:

$3^1 \divides \paren {n + 1}$
Since $4$ and $3$ are coprime, we have by Product of Coprime Factors:

$12 \divides \paren {n + 1}$

In the range $9 \le n \le 24$, only $11$ and $23$ satisfy this condition.
$\Box$


Case 3: $4 \le n \le 8$
Consider the case $4 \le n \le 8$.

Suppose for all $0 \le m \le n$, $\dbinom n m$ is square-free.
Then for any prime $p$:

$p^2 \nmid \dbinom n m$
for all $0 \le m \le n$.
In particular we have:

$2^2 \nmid \dbinom n m$

There exists an integer $r$ where $2^r \le n < 2^{r + 1}$.
From $n \ge 4 = 2^2$:

$r \ge 2$

By the Lemma, we have:

$2^{r - 1} \divides \paren {n + 1}$
So we have:

$2^1 \divides \paren {n + 1}$

In the range $4 \le n \le 8$, only $5$ and $7$ satisfy this condition.
$\Box$


Manual Checking
We have narrowed our list of possible candidates to:

$1, 2, 3, 5, 7, 11, 23$
Manually checking each $n$ in the list shows that $\dbinom n m$ is square-free for each $0 \le m \le n$.
$\blacksquare$


Sources
1996: Andrew Granville and Olivier Ramaré: Explicit bounds on exponential sums and the scarcity of squarefree binomial coefficients (Mathematika Vol. 43: pp. 73 – 107)
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $23$




