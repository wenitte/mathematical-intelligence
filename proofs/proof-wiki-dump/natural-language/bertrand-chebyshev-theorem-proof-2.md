# 

Source: https://proofwiki.org/wiki/Bertrand-Chebyshev_Theorem/Proof_2



Theorem
For all $n \in \N_{>0}$, there exists a prime number $p$ with $n < p \le 2 n$.


Proof
We will first prove the theorem for the case $n \le 426$. 
Consider the following sequence of prime numbers:

$2, 3, 5, 7, 13, 23, 43, 83, 163, 317, 631$
Each of these prime number is smaller than twice the previous one.
Hence every interval $\set {x: n < x \le 2 n}$, with $n \le 426$, contains one of these prime numbers.


Lemma $2$
For all $m \in \N$:

$\ds \prod_{p \mathop \le m} p \le 2^{2 m}$
where the continued product is taken over all prime numbers $p \le m$.
$\Box$


Lemma $3$
Let $p$ be a prime number.
Let $p^k \divides \dbinom {2 n} n$.
Then $p^k \le 2 n$.
$\Box$


Lemma $4$
For all $n \ge 1$:

$\dbinom {2 n} n \ge \dfrac {2^{2 n}} {2 n}$
where $\dbinom {2 n} n$ denotes a binomial coefficient.
$\Box$

From Lemma $3$:

if $p > \sqrt {2 n}$, then $p$ appears at most once in $\dbinom {2 n} n$.
For $n \ge 3$, there is no prime factor $p$ with $\dfrac 2 3 n < p \le n$, because such a prime number divides $n!$ exactly once and $\paren {2 n}!$ exactly twice.
For $n \ge 5$:

$ \sqrt {2 n} < \dfrac {2 n} 3$
Therefore, by Lemma $4$:

$\ds \frac {2^{2 n} } {2 n} \le \dbinom {2 n} n \le \paren{\prod_{p \mathop \le \sqrt {2 n} } 2 n} \paren{\prod_{\sqrt {2 n} \mathop < p \mathop \le \frac 2 3 n} p} \paren{\prod_{n \mathop < p \mathop \le 2 n} p}$
for $n \ge 3$.
Let $\map \pi n$ denote the prime-counting function.
Then:

$\forall n \ge 1: \map \pi n \le n - 1$
as $1$ is neither prime nor composite.

Aiming for a contradiction, suppose there is no prime number $p$ such that $n < p \le 2 n$.
Then we have:














\(\ds \frac {2^{2 n} } {2 n}\)

\(\le\)







\(\ds \paren {\prod_{p \mathop \le \sqrt {2 n} } 2 n} \paren {\prod_{\sqrt {2 n} \mathop < p \mathop \le \frac {2 n} 3} p}\)




















\(\ds \)

\(\le\)







\(\ds \paren {\prod_{p \mathop \le \sqrt {2 n} } 2 n} \paren {\prod_{p \mathop \le \frac {2 n} 3} p}\)




















\(\ds \)

\(\le\)







\(\ds \paren {2 n}^{\sqrt {2 n} - 1} 2^{4 n / 3}\)





Lemma $2$



This is a contradiction for sufficiently large $n$.
Indeed, we have:

$2^{2 n / 3} \le \paren {2 n}^{\sqrt {2 n} }$
So:

$2^{2 n} \le \paren {2 n}^{3 \sqrt {2 n} }$
Let $r = \sqrt {2 n}$.
Then:

$2^{r^2} \le r^{6 r}$
or equivalently:

$2^r \le r^6$
This fails when $r = 30$.
It fails thereafter, since $2^r$ increases faster than $r^6$.
So our proof works if:

$n \ge 427$
and the examples show it is true for smaller $n$.
$\blacksquare$


Also known as
The Bertrand-Chebyshev Theorem is also known as Bertrand's Postulate or Bertrand's Conjecture.
Some sources give this as Chebyshev's theorem (in number theory) to distinguish it from a theorem in statistics.


Source of Name
This entry was named for Joseph Louis François Bertrand and Pafnuty Lvovich Chebyshev.


Historical Note
The Bertrand-Chebyshev Theorem was first postulated by Bertrand in $1845$. He verified it for $n < 3 \, 000 \, 000$.
It became known as Bertrand's Postulate.
The first proof was given by Chebyshev in $1850$ as a by-product of his work attempting to prove the Prime Number Theorem.
After this point, it no longer being a postulate, Bertrand's Postulate was referred to as the Bertrand-Chebyshev Theorem.

In $1919$, Srinivasa Ramanujan gave a simpler proof based on the Gamma function.

In $1932$, Paul Erdős gave an even simpler proof based on basic properties of binomial coefficients.  That proof is the one which is presented here.





