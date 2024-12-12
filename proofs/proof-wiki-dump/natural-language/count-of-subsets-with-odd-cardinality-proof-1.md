# 

Source: https://proofwiki.org/wiki/Count_of_Subsets_with_Odd_Cardinality/Proof_1

Theorem
Let $S$ be a set whose cardinality is $n$.

Then the number of subsets of $S$ whose cardinality is odd is $2^{n-1}$.


Proof
Let $F$ be the total number of subsets of $S$ whose cardinality is odd.
From Cardinality of Set of Subsets, the number of subsets of $S$ with $m$ elements is $\dbinom n m$:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m} }$
where $\dbinom n m$ is a binomial coefficient.

Thus the total number of subsets of $S$ whose cardinality is Odd is given by:

$\ds E = \dbinom n 1 + \dbinom n 3 + \dbinom n 5 + \cdots = \sum_{j \mathop \in \Z} \dbinom n {2 j + 1}$
Note the loose limits of the summation sign: the expression truly ranges over all $\Z$.
This is because, when $2 j + 1 < 0$ and $2 j + 1 > n$, $\dbinom n {2 j + 1} = 0$ by definition of binomial coefficient.
The result then follows from Sum of Odd Index Binomial Coefficients:

$\ds \sum_{j \mathop \ge 0} \binom n {2 j + 1} = 2^{n - 1}$
$\blacksquare$





