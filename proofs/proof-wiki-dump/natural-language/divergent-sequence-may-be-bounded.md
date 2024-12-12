# 

Source: https://proofwiki.org/wiki/Divergent_Sequence_may_be_Bounded



Theorem
While every Convergent Sequence is Bounded, it does not follow that every bounded sequence is convergent.

That is, there exist bounded sequences which are divergent.


Proof 1
Let $\sequence {x_n}$ be the sequence in $\R$ which forms the basis of Grandi's series, defined as:

$x_n = \paren {-1}^n$
It is clear that $\sequence {x_n}$ is bounded: above by $1$ and below by $-1$.

Aiming for a contradiction, suppose $x_n \to l$ as $n \to \infty$.
Let $\epsilon > 0$.
Then $\exists N \in \R: \forall n > N: \size {\paren {-1}^n - l} < \epsilon$.
But there are values of $n > N$ for which $\paren {-1}^n = \pm 1$.
It follows that $\size {1 - l} < \epsilon$ and $\size {-1 - l} < \epsilon$.

From the Triangle Inequality for Real Numbers, we have:














\(\ds 2\)

\(=\)







\(\ds \size {1 - \paren {-1} }\)




















\(\ds \)

\(\le\)







\(\ds \size {1 - l} + \size {l - \paren {-1} }\)




















\(\ds \)

\(<\)







\(\ds 2 \epsilon\)









This is a contradiction whenever $\epsilon < 1$.
Thus $\sequence {x_n}$ has no limit and, while definitely bounded, is unmistakably divergent.
$\blacksquare$


Proof 2
Let $\sequence {x_n}$ be the sequence in $\R$ which forms the basis of Grandi's series,  defined as:

$x_n = \paren {-1}^n$
It is clear that $\sequence {x_n}$ is bounded: above by $1$ and below by $-1$.

Note the following subsequences of $\sequence {x_n}$:

$(1): \quad \sequence {x_{n_r} }$ where $\sequence {n_r}$ is the integer sequence defined as $n_r = 2 r$
$(2): \quad \sequence  {x_{n_s} }$ where $\sequence {n_s}$ is the integer sequence defined as $n_s = 2 s + 1$.

We have that:

$\sequence {x_{n_r} }$ is the sequence $1, 1, 1, 1, \ldots$
$\sequence {x_{n_s} }$ is the sequence $-1, -1, -1, -1, \ldots$

So $\sequence {x_n}$ has two subsequences with different limits.
From Limit of Subsequence equals Limit of Real Sequence, that means $\sequence {x_n}$ can not be convergent.
$\blacksquare$


Also see
Definition:Grandi's Series
Definition:Oscillating Series


Sources
1992: Larry C. Andrews: Special Functions of Mathematics for Engineers (2nd ed.) ... (previous) ... (next): $\S 1.2$: Infinite Series of Constants




