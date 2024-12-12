# 

Source: https://proofwiki.org/wiki/Covariance_of_Sums_of_Random_Variables/Lemma



Theorem
Let $n$ be a strictly positive integer.
Let $\sequence {X_i}_{1 \mathop \le i \mathop \le n}$ be a sequence of random variables.
Let $Y$ be a random variable.

Then: 

$\ds \cov {\sum_{i \mathop = 1}^n X_i, Y} = \sum_{i \mathop = 1}^n \cov {X_i, Y}$


Proof
Proof by induction:
For all $n \in \N$, let $\map P n$ be the proposition: 

$\ds \cov {\sum_{i \mathop = 1}^n X_i, Y} = \sum_{i \mathop = 1}^n \cov {X_i, Y}$


Basis for the Induction
We have that: 

$\ds \cov {\sum_{i \mathop = 1}^1 X_i, Y} = \cov {X_1, Y} = \sum_{i \mathop = 1}^1 \cov {X_i, Y}$
We therefore have that $\map P 1$ is true. 
This is our basis for the induction.


Induction Hypothesis
Suppose that $\map P n$ is true for some fixed $n \in \N$. 
That is: 

$\ds \cov {\sum_{i \mathop = 1}^n X_i, Y} = \sum_{i \mathop = 1}^n \cov {X_i, Y}$
We aim to show that it logically follows that $\map P {n + 1}$ is true. 
That is: 

$\ds \cov {\sum_{i \mathop = 1}^{n + 1} X_i, Y} = \sum_{i \mathop = 1}^{n + 1} \cov {X_i, Y}$


Induction Step
This is our induction step:
We have: 














\(\ds \cov {\sum_{i \mathop = 1}^{n + 1} X_i, Y}\)

\(=\)







\(\ds \cov {\sum_{i \mathop = 1}^n X_i + X_{n + 1}, Y}\)





splitting up the sum














\(\ds \)

\(=\)







\(\ds \cov {\sum_{i \mathop = 1}^n X_i, Y} + \cov {X_{n + 1}, Y}\)





Covariance of Linear Combination of Random Variables with Another














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^n \cov {X_i, Y} + \cov {X_{n + 1}, Y}\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^{n + 1} \cov {X_i, Y}\)









Hence the result by induction.
$\blacksquare$





