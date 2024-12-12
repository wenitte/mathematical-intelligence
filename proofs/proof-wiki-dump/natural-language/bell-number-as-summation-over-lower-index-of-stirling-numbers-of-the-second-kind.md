# 

Source: https://proofwiki.org/wiki/Bell_Number_as_Summation_over_Lower_Index_of_Stirling_Numbers_of_the_Second_Kind

Theorem
Let $B_n$ be the Bell number for $n \in \Z_{\ge 0}$.
Then:

$B_n = \ds \sum_{k \mathop = 0}^n {n \brace k}$
where $\ds {n \brace k}$ denotes a Stirling number of the second kind.


Corollary
When $n > 0$, the slightly simpler form can be used:

$B_n = \ds \sum_{k \mathop = 1}^n {n \brace k}$


Proof
By definition of Bell numbers:

$B_n$ is the number of partitions of a (finite) set whose cardinality is $n$.

First consider the case where $n > 0$.
From Number of Set Partitions by Number of Components, the number of partitions of $S$ into $k$ components is $\ds {n \brace k}$.
Thus the total number of all partitions of $S$ is the sum of $\ds {n \brace k}$ where $k$ runs from $1$ to $n$.
Hence:

$B_n = \ds \sum_{k \mathop = 1}^n {n \brace k}$
But $\ds {n \brace 0} = 0$ for all $n \in \Z_{> 0}$, and so:

$B_n = \ds \sum_{k \mathop = 0}^n {n \brace k}$

Now consider the edge case where $n = 0$, that is, $S = \O = \set{}$.
There is by conventional definition one partition of $\O$, that is: $\set \O$
In this case, we have:

$\ds {0 \brace 0} = 1$
and so:

$B_0 = \ds \sum_{k \mathop = 0}^0 {n \brace k} = {0 \brace 0} = 1$
$\blacksquare$





