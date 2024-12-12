# 

Source: https://proofwiki.org/wiki/Factors_of_Sums_of_Powers_of_100,000/General_Result



Theorem
All integers $n$ of the form:

$n = \ds \sum_{k \mathop = 0}^m 10^{r k}$ for $m \in \Z_{> 0}$
are composite for $r \ge 2$.
The only exceptions are:

$r = 2^k, m = 1$ for some $k \in \N$
$r = m + 1 =$ some odd prime
in which cases $n$ may be prime.


Proof
Case $1$: $m + 1$ is Composite
Suppose $m + 1$ is composite.
Then:

$\exists p, q > 1: m + 1 = p q$
By Division Theorem, for each $k$ with $0 \le z \le m$:

$\exists i, j \in \N: 0 \le i \le q - 1, \, 0 \le j \le p - 1: k = i + q j$
Thus:














\(\ds n\)

\(=\)







\(\ds \sum_{k \mathop = 0}^m 10^{r k}\)




















\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 0}^{q - 1} \sum_{j \mathop = 0}^{p - 1} 10^{r \paren {i + q j} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 0}^{q - 1} 10^{r i} } \paren {\sum_{j \mathop = 0}^{p - 1} 10^{r q j} }\)









Both sums are greater than $1$, so $n$ is composite.
$\Box$


Case $2$: $m + 1$ is an Odd Prime and $r \ne m + 1$
Notice that: 

$\ds \sum_{k \mathop = 0}^m 10^{r k} \times R_r = R_{r \paren {m + 1} }$
where $R_i$ is the $i$th repunit.

Suppose $m + 1$ and $r$ are coprime.
By Condition for Repunits to be Coprime, $R_{m + 1}$ and $R_r$ are coprime.
By Euclid's Lemma:

$R_{m + 1} \divides \dfrac {R_{r \paren {m + 1} } } {R_r} = n$

Suppose $r^2 \divides m + 1$.
By Divisors of Repunit with Composite Index:

$R_r \divides R_{r^2}$
and:

$R_{r^2} \divides R_{r \paren {m + 1} }$
So we have:

$\dfrac {R_{r^2}} {R_r} \divides \dfrac {R_{r \paren {m + 1} } } {R_r} = n$
$\Box$


Case $3$: $m = 1$, $r$ is not a Power of $2$
We write $n = 1 + 10^r$.
Since $r$ is not a power of $2$, $r$ has an odd factor greater than $1$.
Write $r = x \paren {2 y + 1}$. 
Then:














\(\ds n\)

\(=\)







\(\ds 1 + 10^r\)




















\(\ds \)

\(=\)







\(\ds 1 + 10^{x \paren {2 y + 1} }\)




















\(\ds \)

\(=\)







\(\ds 1^{2 y + 1} + \paren {10^x}^{2 y + 1}\)









By Sum of Two Odd Powers:

$1 + 10^x$ is a factor of $1^{2 y + 1} + \paren {10^x}^{2 y + 1} = n$.

Thus all cases are covered.
$\blacksquare$





