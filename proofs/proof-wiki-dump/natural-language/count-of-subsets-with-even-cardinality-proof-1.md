# 

Source: https://proofwiki.org/wiki/Count_of_Subsets_with_Even_Cardinality/Proof_1

Theorem
Let $S$ be a set whose cardinality is $n$.

Then the number of subsets of $S$ whose cardinality is even is $2^{n-1}$.


Proof
Let $E$ be the total number of subsets of $S$ whose cardinality is even.
From Cardinality of Set of Subsets, the number of subsets of $S$ with $m$ elements is $\dbinom n m$:

$\dbinom n m = \dfrac {n!} {m! \paren {n - m} }$
where $\dbinom n m$ is a binomial coefficient.

Thus the total number of subsets of $S$ whose cardinality is even is given by:

$\ds E = \dbinom n 0 + \dbinom n 2 + \dbinom n 4 + \cdots = \sum_{j \mathop \in \Z} \dbinom n {2 j}$
Note the loose limits of the summation sign: the expression truly ranges over all $\Z$.
This is because, when $2 j < 0$ and $2 j > n$, $\dbinom n {2 j} = 0$ by definition of binomial coefficient.
The result then follows from Sum of Even Index Binomial Coefficients:

$\ds \sum_{j \mathop \ge 0} \dbinom n {2 j} = 2^{n - 1}$
$\blacksquare$





