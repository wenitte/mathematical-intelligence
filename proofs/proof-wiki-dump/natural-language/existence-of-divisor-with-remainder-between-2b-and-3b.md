# 

Source: https://proofwiki.org/wiki/Existence_of_Divisor_with_Remainder_between_2b_and_3b

Theorem
For every pair of integers $a, b$ where $b > 0$, there exist unique integers $q$ and $r$ where $2 b \le r < 3 b$ such that:

$a = q b + r$


Proof
From the Division Theorem, we have that:

$\forall a, b \in \Z, b > 0: \exists! q, r \in \Z: a = q b + r, 0 \le r < b$

So, with a view to where this is going, let $q$ and $r$ be renamed such that $a = q' b + r'$ with $0 \le r' < b$.
Then let $q' = q + 2$.

We have:














\(\ds a\)

\(=\)







\(\ds q' b + r'\)




















\(\ds \)

\(=\)







\(\ds \paren {q + 2} b + r'\)




















\(\ds \)

\(=\)







\(\ds q b + 2 b + r'\)









Setting $r = 2 b + r'$, it follows that:

$2 b \le r < 3 b$
and the result follows.
$\blacksquare$


Sources
1980: David M. Burton: Elementary Number Theory (revised ed.) ... (previous) ... (next): Chapter $2$: Divisibility Theory in the Integers: $2.1$ The Division Algorithm: Problems $2.1$: $1$




