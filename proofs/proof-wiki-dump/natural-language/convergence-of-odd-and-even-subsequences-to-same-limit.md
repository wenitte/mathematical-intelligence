# 

Source: https://proofwiki.org/wiki/Convergence_of_Odd_and_Even_Subsequences_to_Same_Limit

Theorem
Let $\sequence {s_n}$ be a real sequence.
Let the subsequences $\sequence {s_{2 n} }$ and $\sequence {s_{2 n + 1} }$ both converge to the same limit $l$.

Then $\sequence {s_n}$ also converges to the same limit $l$.


Proof
Suppose that $\sequence {s_n}$ converge to a limit.
Then from Limit of Subsequence equals Limit of Real Sequence, $\sequence {s_{2 n} }$ and $\sequence {s_{2 n + 1} }$ both converge to the same limit.
They do so converge, and that limit is $l$.
So, if $\sequence {s_n}$ converges, it converges to the limit $l$.

Aiming for a contradiction, suppose $\sequence {s_n}$ does not actually converge to a limit.
Then it is not the case that:

$\forall \epsilon \in \R_{>0}: \exists N \in \R_{>0}: k > N \implies \size {s_k - l} < \epsilon$
That is:

$\exists \epsilon \in \R_{>0}: \forall N \in \R_{>0}: \exists k > N: \size {s_k - l} > \epsilon$
Either:

$k = 2 n$ for some $n \in \N$
or:

$k = 2 n + 1$ for some $n \in \N$
In the first case that means $\sequence {s_{2 n} }$ does not converge to $l$.
In the second case that means $\sequence {s_{2 n + 1} }$ does not converge to $l$.
Both cases contradict the supposition that $\sequence {s_{2 n} }$ and $\sequence {s_{2 n + 1} }$ both converge to $l$.
Hence by Proof by Contradiction it must be the case that $\sequence {s_n}$ converges to a limit.
That limit has been shown to be $l$.
$\blacksquare$


Sources
1975: W.A. Sutherland: Introduction to Metric and Topological Spaces ... (previous) ... (next): $1$: Review of some real analysis: Exercise $1.5: 12$




