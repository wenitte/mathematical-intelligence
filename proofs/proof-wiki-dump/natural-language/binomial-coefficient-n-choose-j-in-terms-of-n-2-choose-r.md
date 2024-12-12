# 

Source: https://proofwiki.org/wiki/Binomial_Coefficient_n_Choose_j_in_terms_of_n-2_Choose_r

Theorem
Let $n \in \Z$ such that $n \ge 4$.
Let $\dbinom n k$ denote a binomial coefficient for $k \in \Z$.

Then:

$\dbinom n k = \dbinom {n - 2} {k - 2} + 2 \dbinom {n - 2} {k - 1} + \dbinom {n - 2} k$
for $2 \le k \le n - 2$.


Proof













\(\ds \dbinom n k\)

\(=\)







\(\ds \dbinom {n - 1} k + \dbinom {n - 1} {k - 1}\)





Pascal's Rule














\(\ds \)

\(=\)







\(\ds \paren {\dbinom {n - 2} {k - 1} + \dbinom {n - 2} k} + \paren {\dbinom {n - 2} {k - 2} + \dbinom {n - 2} {k - 1} }\)





Pascal's Rule (twice)














\(\ds \)

\(=\)







\(\ds \dbinom {n - 2} {k - 2} + 2 \dbinom {n - 2} {k - 1} + \dbinom {n - 2} k\)





simplifying




In the expression $\dbinom {n - 2} {k - 2} + 2 \dbinom {n - 2} {k - 1} + \dbinom {n - 2} k$ we note that:

if $k < 2$ then $\dbinom {n - 2} {k - 2}$ has a negative coefficient on the bottom
if $k > n - 2$ then $\dbinom {n - 2} k$ has a coefficient on the bottom that is greater than $n$.
Hence the usual comfortable range of $k$ is exceeded and so it cannot be guaranteed that the conditions are satisfied for the equation to be true.

If $n \le 3$ then $2 \le k \le n - 2$ cannot be fulfilled.

Hence the bounds on both $k$ and $n$.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $1$: Some Preliminary Considerations: $1.2$ The Binomial Theorem: Problems $1.2$: $2$




