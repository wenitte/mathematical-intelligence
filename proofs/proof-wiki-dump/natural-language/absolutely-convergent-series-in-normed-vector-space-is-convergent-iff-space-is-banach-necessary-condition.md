# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Series_in_Normed_Vector_Space_is_Convergent_iff_Space_is_Banach/Necessary_Condition



Theorem
Let $\struct {X, \norm {\, \cdot \,} }$ be a normed vector space.
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be an absolutely convergent series in $X$.
Suppose $X$ is a Banach space.

Then $\ds \sum_{n \mathop = 1}^\infty a_n$ is convergent.


Proof
That $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent means that $\ds \sum_{n \mathop = 1}^\infty \norm {a_n}$ converges in $\R$.
Hence by Convergent Sequence in Normed Vector Space is Cauchy Sequence:

the sequence of partial sums is a Cauchy sequence.

Now let $\epsilon > 0$.
Let $N \in \N$ such that for all $m, n \in \N$, $m \ge n \ge N$ implies that:

$\ds \sum_{k \mathop = n + 1}^m \norm {a_k} = \size {\sum_{k \mathop = 1}^m \norm {a_k} - \sum_{k \mathop = 1}^n \norm {a_k} } < \epsilon$
This $N$ exists because the sequence is Cauchy.

Now observe that, for $m \ge n \ge N$, one also has:














\(\ds \norm {\sum_{k \mathop = 1}^m a_k - \sum_{k \mathop = 1}^n a_k}\)

\(=\)







\(\ds \norm {\sum_{k \mathop = n + 1}^m a_k}\)




















\(\ds \)

\(\le\)







\(\ds \sum_{k \mathop = n + 1}^m \norm {a_k}\)





Triangle inequality for $\norm {\, \cdot \,}$














\(\ds \)

\(<\)







\(\ds \epsilon\)









It follows that the sequence of partial sums of $\ds \sum_{n \mathop = 1}^\infty a_n$ is Cauchy.
As $X$ is a Banach space, this implies that $\ds \sum_{n \mathop = 1}^\infty a_n$ converges.
$\blacksquare$


Also see
Absolutely Convergent Generalized Sum Converges


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




