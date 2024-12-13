# 

Source: https://proofwiki.org/wiki/Limit_of_Root_of_Positive_Real_Number/Proof_2

Theorem
Let $x \in \R: x > 0$ be a real number.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as:

$x_n = x^{1 / n}$
Then $x_n \to 1$ as $n \to \infty$.


Proof
We consider the case where $x \ge 1$; when $0 < x < 1$ the proof can be completed as for proof 1.

From Root of Number Greater than One‎:

$x^{1/n} \ge 1$
Hence $\sequence {x^{1/n} }$ is bounded below by $1$.
Now consider $x^{1/n} / x^{1 / \paren {n + 1} }$:














\(\ds \frac {x^{1/n} } {x^{\frac 1 {n + 1} } }\)

\(=\)







\(\ds x^{\frac 1 n - \frac 1 {n + 1} }\)




















\(\ds \)

\(=\)







\(\ds x^{\frac {n + 1 - n} {n \paren {n + 1} } }\)




















\(\ds \)

\(=\)







\(\ds x^{\frac 1 {n \paren {n + 1} } }\)




















\(\ds \)

\(>\)







\(\ds 1\)





Root of Number Greater than One‎



So:

$x^{1/n} > x^{\frac 1 {n + 1} }$
and so $\sequence {x^{1 / n} }$ is strictly decreasing.
Hence from the Monotone Convergence Theorem (Real Analysis), it follows that $\sequence {x^{1 / n} }$ converges to a limit $l$ and that $l \ge 1$.

Now, since we know that $\sequence {x^{1 / n} }$ is convergent, we can apply Limit of Subsequence equals Limit of Real Sequence.
That is, any subsequence of $\sequence {x^{1 / n} }$ must also converge to $l$.
So we take the subsequence:

$\sequence {x^{1 / {2 n} } }$
From what has just been shown:

$x^{1 / {2 n} } \to l$ as $n \to \infty$
Using the Combination Theorem for Sequences, we have:

$x^{1 / n} = x^{1 / {2 n} } \cdot x^{1 / {2 n} } \to l \cdot l = l^2$ as $n \to \infty$
But a Convergent Real Sequence has Unique Limit, so $l^2 = l$ and so $l = 0$ or $l = 1$.
But $l \ge 1$ and so $l = 1$.
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.4$ Example




