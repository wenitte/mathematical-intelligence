# 

Source: https://proofwiki.org/wiki/Bertrand-Chebyshev_Theorem/Proof_1



Theorem
For all $n \in \N_{>0}$, there exists a prime number $p$ with $n < p \le 2 n$.


Proof
We will first prove the theorem for the case $n \le 2047$. 
Consider the following sequence of prime numbers:

$2, 3, 5, 7, 13, 23, 43, 83, 163, 317, 631, 1259, 2503$
Each of these prime number is smaller than twice the previous one.
Hence every interval $\set {x: n < x \le 2 n}$, with $n \le 2047$, contains one of these prime numbers.


Lemma $1$
For all $n \in \N$:

$\dbinom {2 n} n \ge \dfrac {2^{2 n}} {2 n + 1}$
where $\dbinom {2 n} n$ denotes a binomial coefficient.
$\Box$


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

From Lemma $3$:

if $p > \sqrt {2 n}$, then $p$ appears at most once in $\dbinom {2 n} n$.
For $n \ge 3$, there is no prime factor $p$ with $\dfrac {2 n} 3 < p \le n$, because such a prime number divides $n!$ exactly once and $\paren {2 n}!$ exactly twice.
Therefore, by Lemma $1$:

$\ds \frac {2^{2 n} } {2 n + 1} \le \dbinom {2 n} n \le \prod_{p \mathop \le \sqrt {2 n} } 2 n \prod_{\sqrt {2 n} \mathop < p \mathop \le \frac {2 n} 3} p \prod_{n \mathop < p \mathop \le 2 n} p$
for $n \ge 3$.

Aiming for a contradiction, suppose there is no prime number $p$ with $n < p \le 2 n$. 
Then we have:














\(\ds \frac {2^{2 n} } {2 n + 1}\)

\(\le\)







\(\ds \prod_{p \mathop \le \sqrt {2 n} } 2 n \prod_{\sqrt {2 n} \mathop < p \mathop \le \frac {2 n} 3} p\)




















\(\ds \)

\(\le\)







\(\ds \paren {2 n}^{\sqrt {2 n} } \prod_{p \mathop \le \frac {2 n} 3} p\)




















\(\ds \)

\(\le\)







\(\ds \paren {2 n}^{\sqrt {2 n} } 2^{\frac {4 n} 3}\)





Lemma $2$



This is a contradiction for sufficiently large $n$.
Indeed, we have:

$2^{2 n / 3} \le \paren {2 n + 1} \paren {2 n}^{\sqrt {2 n} }$
Now:

$2 n + 1 \le \paren {2 n}^2 \le \paren {2 n}^{\sqrt {2 n} / 3}$
for $n \ge 18$.
So:

$2^{2 n} \le \paren {2 n}^{4 \sqrt {2 n} }$
Put $r = \sqrt {2 n}$.
Then:

$2^{r^2} \le r^{8 r}$
or equivalently:

$2^r \le r^8$
This fails when $r = 2^6 = 64$.
It fails thereafter, since $2^r$ increases faster than $r^8$.
So our proof works if:

$n \ge 2^{11} = 2048$
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





