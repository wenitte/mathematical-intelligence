# 

Source: https://proofwiki.org/wiki/Hero%27s_Method/Lemma_1



Lemma for Hero's Method
Let $a \in \R$ be a real number such that $a > 0$.
Let $x_1 \in \R$ be a real number such that $x_1 > 0$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined recursively by:

$\forall n \in \N_{>0}: x_{n + 1} = \dfrac {x_n + \dfrac a {x_n} } 2$

Then:

$\forall n \in \N_{>0}: x_n > 0$


Proof
The proof proceeds by induction.
For all $n \in \Z_{>0}$, let $\map P n$ be the proposition:

$x_n > 0$


Basis for the Induction
$\map P 1$ is the case:

$x_1 > 0$
which is assumed.
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$x_k > 0$

from which it is to be shown that:

$x_{k + 1} > 0$


Induction Step
This is the induction step:

We have that:

$x_{k + 1} = \dfrac {x_k + \dfrac a {x_k} } 2$
But as $x_k > 0$ and $a > 0$, it follows that:

$\dfrac a {x_k} > 0$
Then as $x_k > 0$ and $\dfrac a {x_k} > 0$, it follows that:

$\dfrac 1 2 \paren {x_k + \dfrac a {x_k} } > 0$

So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \N_{>0}: x_n > 0$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.5$: Example




