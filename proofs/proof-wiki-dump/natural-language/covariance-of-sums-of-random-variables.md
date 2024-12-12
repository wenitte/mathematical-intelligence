# 

Source: https://proofwiki.org/wiki/Covariance_of_Sums_of_Random_Variables

Theorem
Let $n$ be a strictly positive integer.
Let $\sequence {X_i}_{1 \mathop \le i \mathop \le n}$, $\sequence {Y_j}_{1 \mathop \le j \mathop \le n}$ be sequences of random variables.

Then: 

$\ds \cov {\sum_{i \mathop = 1}^n X_i, \sum_{j \mathop = 1}^n Y_j} = \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n \cov {X_i, Y_j}$


Proof













\(\ds \sum_{i \mathop = 1}^n \sum_{j \mathop = 1}^n \cov {X_i, Y_j}\)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \paren {\sum_{j \mathop = 1}^n \cov {Y_j, X_i} }\)





Covariance is Symmetric














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \cov {\sum_{j \mathop = 1}^n Y_j, X_i}\)





Covariance of Sums of Random Variables: Lemma














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \cov {X_i, \sum_{j \mathop = 1}^n Y_j}\)





Covariance is Symmetric














\(\ds \)

\(=\)







\(\ds \cov {\sum_{i \mathop = 1}^n X_i, \sum_{j \mathop = 1}^n Y_j}\)





Covariance of Sums of Random Variables: Lemma



$\blacksquare$





