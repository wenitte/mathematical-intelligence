# 

Source: https://proofwiki.org/wiki/Absolutely_Convergent_Series_is_Convergent



Theorem
Let $V$ be a Banach space with norm $\norm {\, \cdot \,}$.
Let $\ds \sum_{n \mathop = 1}^\infty a_n$ be an absolutely convergent series in $V$.

Then $\ds \sum_{n \mathop = 1}^\infty a_n$ is convergent.


Proof
That $\ds \sum_{n \mathop = 1}^\infty a_n$ is absolutely convergent means that $\ds \sum_{n \mathop = 1}^\infty \norm {a_n}$ converges in $\R$.
Hence the sequence of partial sums is a Cauchy sequence by Convergent Sequence is Cauchy Sequence.

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
As $V$ is a Banach space, this implies that $\ds \sum_{n \mathop = 1}^\infty a_n$ converges.
$\blacksquare$


Proof for Real Numbers
By the definition of absolute convergence, we have that $\ds \sum_{n \mathop = 1}^\infty \size {a_n}$ is convergent.
From the Comparison Test we have that $\ds \sum_{n \mathop = 1}^\infty a_n$ converges if and only if:

$\forall n \in \N_{>0}: \size {a_n} \le b_n$
where $\ds \sum_{n \mathop = 1}^\infty b_n$ is convergent.

So substituting $\size {a_n}$ for $b_n$ in the above, the result follows.
$\blacksquare$


Proof for Complex Numbers
Let $z_n = u_n + i v_n$.
We have that:














\(\ds \cmod {z_n}\)

\(=\)







\(\ds \sqrt { {u_n}^2 + {v_n}^2}\)




















\(\ds \)

\(>\)







\(\ds \sqrt { {u_n}^2}\)




















\(\ds \)

\(>\)







\(\ds \size {u_n}\)









and similarly:

$\cmod {z_n} > \size {v_n}$
From the Comparison Test, the series $\ds \sum_{n \mathop = 1}^\infty u_n$ and $\ds \sum_{n \mathop = 1}^\infty v_n$ are absolutely convergent.
From Absolutely Convergent Real Series is Convergent, $\ds \sum_{n \mathop = 1}^\infty u_n$ and $\ds \sum_{n \mathop = 1}^\infty v_n$ are convergent.
By Convergence of Series of Complex Numbers by Real and Imaginary Part, it follows that $\ds \sum_{n \mathop = 1}^\infty z_n$ is convergent.
$\blacksquare$


Also see
Absolutely Convergent Generalized Sum Converges


Sources
2017: Amol Sasane: A Friendly Approach to Functional Analysis: Chapter $1$: Normed and Banach spaces




