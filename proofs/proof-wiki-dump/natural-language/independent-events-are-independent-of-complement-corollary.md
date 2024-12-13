# 

Source: https://proofwiki.org/wiki/Independent_Events_are_Independent_of_Complement/Corollary

Corollary to Independent Events are Independent of Complement
Let $A$ and $B$ be events in a probability space $\struct {\Omega, \Sigma, \Pr}$.

$A$ and $B$ are independent if and only if $\Omega \setminus A$ and $\Omega \setminus B$ are independent.


Proof
Let $A$ and $B$ be independent.
Then from Independent Events are Independent of Complement, $A$ and $\Omega \setminus B$ are independent.
Setting $A' = \Omega \setminus B$ and $B' = A$, we see clearly that $A'$ and $B'$ are independent.
So from the main result, $A'$ and $\Omega \setminus B'$ are independent.
That is, $\Omega \setminus B$ and $\Omega \setminus A$ are independent.

The "only if" part of the result follows directly from Relative Complement of Relative Complement and another application of this result.
$\blacksquare$





