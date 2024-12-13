# 

Source: https://proofwiki.org/wiki/N_Choose_Negative_Number_is_Zero

Theorem
Let $n \in \Z$ be an integer.
Let $k \in \Z_{<0}$ be a (strictly) negative integer.
Then:

$\dbinom n k = 0$


Proof
From Pascal's Rule we have:

$\forall n, k \in \Z: \dbinom n {k - 1} = \dbinom {n + 1} k - \dbinom n k$
Thus it is sufficient to prove that:

$\forall n \in \Z: \dbinom n {-1} = 0$

So:














\(\ds \dbinom n {-1}\)

\(=\)







\(\ds \dbinom {n + 1} 0 - \dbinom n 0\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds 1 - 1\)





Binomial Coefficient with Zero














\(\ds \)

\(=\)







\(\ds 0\)









Hence the result.
$\blacksquare$





