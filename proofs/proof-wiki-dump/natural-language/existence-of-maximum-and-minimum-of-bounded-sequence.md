# 

Source: https://proofwiki.org/wiki/Existence_of_Maximum_and_Minimum_of_Bounded_Sequence



Theorem
Let $\sequence {x_n}$ be a bounded sequence in $\R$ (which may or may not be convergent).
Let $L$ be the set of all real numbers which are the limit of some subsequence of $\sequence {x_n}$.

Then $L$ has both a maximum and a minimum.


Proof
From the Bolzano-Weierstrass Theorem:

$L \ne \O$
From Lower and Upper Bounds for Sequences, $L$ is a bounded subset of $\R$.
Thus $L$ does have a supremum and infimum in $\R$.
The object of this proof is to confirm that:

$\overline l := \map \sup L \in L$
and:

$\underline l := \map \inf L \in L$
that is, that these points do actually belong to $L$.

First we show that $\overline l \in L$.
To do this, we show that:

$\exists \sequence {x_{n_r} }: x_{n_r} \to \overline l$ as $n \to \infty$
where $\sequence {x_{n_r} }$ is a subsequence of $\sequence {x_n}$.

Let $\epsilon > 0$.
Then $\dfrac \epsilon 2 > 0$.
Since $\overline l = \map \sup L$, and therefore by definition the smallest upper bound of $L$, $\overline l - \dfrac \epsilon 2$ is not an upper bound of $L$.
Hence:

$\exists l \in L: \overline l \ge l > \overline l - \dfrac \epsilon 2$
Therefore:

$\sequence {l - \overline l} < \dfrac \epsilon 2$
Now because $l \in L$, we can find $\sequence {x_{m_r} }$, a subsequence of $\sequence {x_n}$, such that $x_{m_r} \to l$ as $n \to \infty$.
So:

$\exists R: \forall r > R: \size {x_{m_r} - \overline l} < \dfrac \epsilon 2$

So, for any $r > R$:














\(\ds \size {x_{m_r} - \overline l}\)

\(=\)







\(\ds \size {x_{m_r} - l + l - \overline l}\)




















\(\ds \)

\(\le\)







\(\ds \size {x_{m_r} - l} + \size {l - \overline l}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds \frac \epsilon 2 + \frac \epsilon 2 = \epsilon\)









Thus we have shown that:

$\forall r > R: \size {x_{m_r} - \overline l} < \epsilon$

So far, what has been shown is that, given any $\epsilon > 0$, there exists an infinite set of terms of $\sequence {x_n}$ which satisfy $\size {x_n - \overline l} < \epsilon$.

Next it is shown how to construct a subsequence:

$\sequence {x_{n_r} }$ such that $x_{n_r} \to \overline l$
as $n \to \infty$.

Take $\epsilon = 1$ in the above.
Then:

$\exists n_1: \size {x_{n_1} - \overline l} < 1$
Now take $\epsilon = \dfrac 1 2$ in the above.
Then:

$\exists n_2 > n_1: \size {x_{n_2} - \overline l} < \dfrac 1 2$
In this way a subsequence is contructed:

$\sequence {x_{n_r} }$ satisfying $\size {x_{n_r} - \overline l} < \dfrac 1 r$
But $\dfrac 1 r \to 0$ as $r \to \infty$ from the Sequence of Reciprocals is Null Sequence.
From the Squeeze Theorem for Real Sequences, it follows that:

$\size {x_{n_r} - \overline l} \to 0$ as $r \to \infty$

Thus $\overline l \in L$ as required.
$\Box$

A similar argument shows that the infimum $\underline l$ of $L$ is also in $L$.
$\blacksquare$


Note
From Limit of Subsequence equals Limit of Real Sequence we know that if $\sequence {x_n}$ is convergent then $L$ has exactly one element.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Lim sup and lim inf: $\S 5.13$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.4$: Subsequences




