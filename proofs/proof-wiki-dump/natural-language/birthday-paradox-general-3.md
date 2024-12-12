# 

Source: https://proofwiki.org/wiki/Birthday_Paradox/General/3

Theorem
Let $n$ be a set of people.
Let the probability that at least $3$ of them have the same birthday be greater than $50 \%$.

Then $n \ge 88$.


Proof
Let $\map F {r, n}$ be the number of ways to distribute $r$ objects into $n$ cells such that there are no more than $2$ objects in each cell.
Let there be $d$ cells which are each occupied by $2$ objects.
These can be chosen in $\dbinom n d$ ways.
There remain $s = r - 2 d$ objects which can then be distributed among $n - d$ cells in $\dbinom {n - d} s$ ways.
In each such arrangement, the $r$ objects may be permuted in:

$\dbinom r 2 \dbinom {r - 2} 2 \cdots \dbinom {r - 2 d + 2} 2 \paren {r - 2 d}! = \dfrac {r!} {2^d}$
different ways.
Hence:

$\map F {r, n} = \dbinom n d \dbinom {n - d} s \dfrac {r!} {2^d}$

So the probability of exactly $d$ pairs and $s$ singletons, where $d - s \le n$, is given by:

$\dfrac {\map F {r, n} } {n^r}$
If we assume a $365$-day year, we have that the probability that at least $3$ of them have the same birthday is given by:

$\map \Pr r = 1 - \ds \sum_{d \mathop = 0}^{\floor {r / 2} } \dfrac {n! \, r!} {n^r 2^d d! \paren {r - 2 d}! \paren {n + d - r}!}$
where $n = 365$.
We require the smallest $r$ for which $\map \Pr r > \dfrac 1 2$.
The result yields to calculation.
$\blacksquare$


Sources
Oct. 1986: Graham Hoare: Problem Corner (Math. Gaz. Vol. 70: pp. 227 – 229)  www.jstor.org/stable/3615690
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $23$




