# 

Source: https://proofwiki.org/wiki/Power_Function_on_Base_between_Zero_and_One_is_Strictly_Decreasing/Integer

Theorem
Let $a \in \R$ be a real number such that $0 < a < 1$.
Let $f: \Z \to \R$ be the real-valued function defined as:

$\map f k = a^k$
where $a^k$ denotes $a$ to the power of $k$.

Then $f$ is strictly decreasing.


Proof
Let $0 < a < 1$.
By Power Function on Base between Zero and One is Strictly Decreasing: Positive Integer, the theorem is already proven for positive integers.
It remains to be proven over the negative integers.

Let $i, j$ be integers such that $i < j < 0$.

From Order of Real Numbers is Dual of Order of their Negatives:

$0 < -j < -i$
So:














\(\ds a^{-j}\)

\(>\)







\(\ds a^{-i}\)





Power Function on Base between Zero and One is Strictly Decreasing: Positive Integer








\(\ds \leadsto \ \ \)





\(\ds \frac 1 {a^j}\)

\(>\)







\(\ds \frac 1 {a^i}\)





Real Number to Negative Power: Positive Integer








\(\ds \leadsto \ \ \)





\(\ds a^i\)

\(>\)







\(\ds a^j\)





Ordering of Reciprocals



Hence the result.
$\blacksquare$





