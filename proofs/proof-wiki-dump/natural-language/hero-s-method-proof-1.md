# 

Source: https://proofwiki.org/wiki/Hero%27s_Method/Proof_1



Theorem
Let $a \in \R$ be a real number such that $a > 0$.
Let $x_1 \in \R$ be a real number such that $x_1 > 0$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined recursively by:

$\forall n \in \N_{>0}: x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$

Then $x_n \to \sqrt a$ as $n \to \infty$.


Proof
First we have the following lemmata:

Lemma 1
$\forall n \in \N_{>0}: x_n > 0$
$\Box$


Lemma 2
$\forall n \ge 2: x_n \ge \sqrt a$
$\Box$

Consider $x_n - x_{n + 1}$.














\(\ds x_n - x_{n + 1}\)

\(=\)







\(\ds x_n - \frac {x_n + \dfrac a {x_n} } 2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {2 x_n} \paren {x_n^2 - a}\)




















\(\ds \)

\(\ge\)







\(\ds 0\)





for $n \ge 2$

\(\quad\) Lemma 2

So, providing we ignore the first term (about which we can state nothing), the sequence $\sequence {x_n}$ is decreasing and bounded below by $\sqrt a$.

Thus by the Monotone Convergence Theorem (Real Analysis), $x_n \to l$ as $n \to \infty$, where $l \ge \sqrt a$.

Now we want to find exactly what that value of $l$ actually is.

By Limit of Subsequence equals Limit of Real Sequence we also have $x_{n + 1} \to l$ as $n \to \infty$.
But $x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$.
Because $l \ge \sqrt a$ it follows that $l \ne 0$.
So by the Combination Theorem for Sequences:

$x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2 \to \dfrac {l + \dfrac a l} 2$ as $n \to \infty$
Since a Convergent Real Sequence has Unique Limit, that means:

$l = \dfrac {l + \dfrac a l} 2$
and so (after some straightforward algebra):

$l^2 = a$
Thus:

$l = \pm \sqrt a$
and as $l \ge +\sqrt a$ it follows that:

$l = +\sqrt a$

Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.5$: Example




