# 

Source: https://proofwiki.org/wiki/Convergence_of_Limsup_and_Liminf



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let the limit superior of $\sequence {x_n}$ be $\overline l$.
Let the limit inferior of $\sequence {x_n}$ be $\underline l$.

Then $\sequence {x_n}$ converges to a limit $l$ if and only if $\overline l = \underline l = l$.

Hence a bounded real sequence converges if and only if all its convergent subsequences have the same limit.


Proof
Sufficient Condition
First, suppose that $\overline l = \underline l = l$.
Let $\epsilon > 0$.
By Terms of Bounded Sequence Within Bounds:

$\exists N_1: \forall n > N_1: x_n < l + \epsilon$
Similarly:

$\exists N_2: \forall n > N_2: x_n > l - \epsilon$
So take $N = \max \set {N_1, N_2}$.
If $n > N$, both the above inequalities hold at the same time.
So $l - \epsilon < x_n < l + \epsilon$ and so by Negative of Absolute Value:

$\size {x_n - l} < \epsilon$
Thus $x_n \to l$ as $n \to \infty$.
$\Box$


Necessary Condition
Now suppose that $\sequence {x_n}$ converges to a limit $l$.
Then by Limit of Subsequence equals Limit of Real Sequence, all subsequences have a limit of $l$ and the result follows.
$\blacksquare$


Sources
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $2$: Metric Spaces: $\S 5$: Limits: Exercise $5$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Exercise $\S 5.15 \ (5)$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 8$




