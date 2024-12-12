# 

Source: https://proofwiki.org/wiki/Divisor_Sum_Function_is_Multiplicative

  This article was Featured Proof between 10 April 2009 and 17 April 2009.


Theorem
The divisor sum function:

$\ds {\sigma_1}: \Z_{>0} \to \Z_{>0}: \map {\sigma_1} n = \sum_{d \mathop \divides n} d$
is multiplicative.


Proof 1
Let $I_{\Z_{>0}}: \Z_{>0} \to \Z_{>0}$ be the identity function:

$\forall n \in \Z_{>0}: \map {I_{\Z_{>0} } } n = n$
Thus we have:

$\ds \map {\sigma_1} n = \sum_{d \mathop \divides n} d = \sum_{d \mathop \divides n} \map {I_{\Z_{>0} } } d$

But from Identity Function is Completely Multiplicative, $I_{\Z_{>0} }$ is multiplicative.
The result follows from Sum Over Divisors of Multiplicative Function.
$\blacksquare$


Proof 2
Let $a, b$ be coprime integers.
Because $a$ and $b$ have no common divisor, the divisors of $a b$ are integers of the form $a_i b_j$, where $a_i$ is a divisor of $a$ and $b_j$ is a divisor of $b$.
That is, any divisor $d$ of $a b$ is in the form:

$d = a_i b_j$
in a unique way, where $a_i \divides a$ and $b_j \divides b$.
We can list the divisors of $a$ and $b$ as 

$1, a_1, a_2, \ldots, a$
and:

$1, b_1, b_2, \ldots, b$
and so their divisor sums are:

$\ds \map {\sigma_1} a = \sum_{i \mathop = 1}^r a_i$
$\ds \map {\sigma_1} b = \sum_{j \mathop = 1}^s b_j$

Consider all divisors of $a b$ with the same $a_i$.
Their sum is:














\(\ds \sum_{j \mathop = 1}^s a_i b_j\)

\(=\)







\(\ds a_i \sum_{j \mathop = 1}^s b_j\)




















\(\ds \)

\(=\)







\(\ds a_i \map {\sigma_1} b\)










Summing for all $a_i$:














\(\ds \map {\sigma_1} {a b}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^r \paren {a_i \map {\sigma_1} b}\)




















\(\ds \)

\(=\)







\(\ds \paren {\sum_{i \mathop = 1}^r a_i} \map {\sigma_1} b\)




















\(\ds \)

\(=\)







\(\ds \map {\sigma_1} a \map {\sigma_1} b\)









$\blacksquare$





