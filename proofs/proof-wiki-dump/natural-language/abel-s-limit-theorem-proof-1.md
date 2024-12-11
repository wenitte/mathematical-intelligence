# 

Source: https://proofwiki.org/wiki/Abel%27s_Limit_Theorem/Proof_1



Theorem
Let $\ds \sum_{k \mathop = 0}^\infty a_k$ be a convergent series in $\R$.

Then:

$\ds \lim_{x \mathop \to 1^-} \paren {\sum_{k \mathop = 0}^\infty a_k x^k} = \sum_{k \mathop = 0}^\infty a_k$
where $\ds \lim_{x \mathop \to 1^-}$ denotes the limit from the left.


Proof
Let $\epsilon > 0$.
Let $\ds \sum_{k \mathop = 0}^\infty a_k$ converge to $s$.
Then its sequence of partial sums $\sequence {s_N}$, where $\ds s_N = \sum_{n \mathop = 1}^N a_n$, is a Cauchy sequence.
So:

$\ds \exists N: \forall k, m: k \ge m \ge N: \size {\sum_{l \mathop = m}^k a_l} < \frac \epsilon 3$
From Abel's Lemma: Formulation 2, we have:

$\ds \sum_{k \mathop = m}^n u_k v_k = \sum_{k \mathop = m}^{n - 1} \paren {\paren {\sum_{l \mathop = m}^k u_l} \paren {v_k - v_{k + 1} } } + v_n \sum_{k \mathop = m}^n u_k$

We apply this, with $u_k = a_k$ and $v_k = x^k$:

$\ds \sum_{k \mathop = m}^n a_k x^k = \sum_{k \mathop = m}^{n - 1} \paren {\paren {\sum_{l \mathop = m}^k a_l} \paren {x^k - x^{k + 1} } } + x^n \sum_{k \mathop = m}^n a_k$

So it follows that $\forall n \ge m \ge N$ and $\forall 0 < x < 1$, we have:














\(\ds \size {\sum_{k \mathop = m}^n a_k x^k}\)

\(<\)







\(\ds \paren {1 - x} \sum_{k \mathop = m}^{n-1} \frac \epsilon 3 x^k + \frac \epsilon 3 x^n\)





replacing instances of $\ds \sum_{l \mathop = m}^k a_l$ with $\dfrac \epsilon 3$














\(\ds \)

\(<\)







\(\ds \frac \epsilon 3 \paren {1 - x} \frac {1 - x^n} {1 - x} + \frac \epsilon 3 x^n\)





Sum of Geometric Progression














\(\ds \)

\(=\)







\(\ds \frac \epsilon 3\)










So we conclude that:

$\ds \size {\sum_{k \mathop = N}^\infty a_k x^k} \le \frac \epsilon 3$

Next, note that from the above, we have $\forall x: 0 < x < 1$:

$\ds \size {\sum_{k \mathop = 0}^\infty a_k x^k - \sum_{k \mathop = 0}^\infty a_k} \le \sum_{k \mathop = 0}^{N - 1} \size {a_n} \paren {1 - x^n} + \frac \epsilon 3 + \frac \epsilon 3$

But for finite $n$, we have that $1 - x^n \to 0$ as $x \to 1^-$.
Thus:

$\ds \sum_{k \mathop = 0}^{N-1} \size {a_n} \paren {1 - x^n} \to 0$ as $x \to 1^-$
So:

$\ds \exists \delta > 0: \forall x: 1 - \delta < x < 1: \sum_{k \mathop = 0}^{N - 1} \size {a_n} \paren {1 - x^n} < \frac \epsilon 3$
So, for any given $\epsilon > 0$, we can find a $\delta > 0$ such that, for any $x$ such that $1 - \delta < x < 1$, it follows that:

$\ds \size {\sum_{k \mathop = 0}^\infty a_k x^k - \sum_{k \mathop = 0}^\infty a_k} < \epsilon$
That coincides with the definition for the limit from the left.
The result follows.
$\blacksquare$


Also known as
Abel's Limit Theorem is also known just as Abel's Theorem.
However, the latter name has more than one theorem attached to it, so the full name is preferred.
Again, Abel's Limit Theorem can also be found as Abel's Lemma.
However, the latter name is also found attached to a completely different result, so again, it is preferred that it not be used in this context.


Also see
Definition:Abel Summation Method
Definition:Cesàro Summation


Source of Name
This entry was named for Niels Henrik Abel.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous): Appendix: $\S 18.9$: Continuity and differentiation of power series




