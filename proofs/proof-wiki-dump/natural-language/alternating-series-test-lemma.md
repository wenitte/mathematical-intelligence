# 

Source: https://proofwiki.org/wiki/Alternating_Series_Test/Lemma



Lemma
Let $\sequence {a_n}_{N \mathop \ge 0}$ be a decreasing sequence of positive terms in $\R$.
That is, let $\forall n \in \N: a_n \ge 0, a_{n + 1} \le a_n$.

Then for all natural numbers $n, m$ with $n > m$ we have: 

$\ds \sum_{k \mathop = m + 1}^n \paren {-1}^k a_k \le a_{m + 1}$


Proof
We will show this using the Second Principle of Mathematical Induction.

For all $n \in \N_{>0}$, let $\map P n$ be the proposition:

$0 \le a_{m + 1} - a_{m + 2} + a_{m + 3} - \dotsb \pm a_n \le a_{m + 1}$


Basis for the Induction
$\map P 1$ holds, as $a_{m + 1} \ge 0$ by definition and $a_{m + 1} \le a_{m + 1}$.
$\map P 2$ also holds, as $a_{m + 2} \le a_{m + 1}$ and so:

$0 \le a_{m + 1} - a_{m + 2} \le a_{m + 1}$
This is the basis for the induction.


Induction Hypothesis
In order to simplify the algebra, let:

$b_k := a_{m + 1} - a_{m + 2} + a_{m + 3} - \dotsb \pm a_k$

The $\pm$ signifies the fact that $a_k$ is positive for $k$ odd and negative for $k$ even.

Suppose that $\forall j \le k: \map P j$ holds:

$0 \le b_j \le a_{m + 1}$
This is the induction hypothesis.

We now show that $\forall k: \map P k \implies \map P {k + 1}$.


Induction Step
This is the induction step:

Suppose $k$ is odd.
By the induction hypothesis:

$0 \le b_k \le a_{m + 1}$
Because $\map P k$ holds:

$0 \le b_{k - 1} + a_k \le a_{m + 1}$
But as $a_k \ge a_{k + 1}$:

$a_k - a_{k + 1} \ge 0$
and so:

$0 \le b_{k - 1} + \paren {a_k - a_{k + 1} } = b_{k + 1}$
But as $b_k \le a_{m + 1}$:

$b_k - a_{k + 1} = b_{k + 1} \le a_{m + 1}$
So:

$0 \le b_{k + 1} \le a_{m + 1}$
or:

$0 \le a_{m + 1} - a_{m + 2} + a_{m + 3} - \dotsb - a_{k + 1} \le a_{m + 1}$
Thus for odd $k$ it follows that $\map P k \implies \map P {k + 1}$.

Now suppose $k$ is even.
By the induction hypothesis:

$0 \le b_k \le a_{m + 1}$
Then:

$0 \le b_k + a_{k + 1} = b_{k + 1}$
Because $\map P k$ holds:

$0 \le b_{k - 1} - a_k \le a_{m + 1}$
But as $a_k \ge a_{k + 1}$:

$a_k - a_{k + 1} \ge 0$
and so:

$b_{k + 1} = b_{k - 1} - a_k + a_{k + 1} =  b_{k - 1} - \paren {a_k - a_{k + 1} } = b_{k + 1} \le a_{m + 1}$
So:

$0 \le b_{k + 1} \le a_{m + 1}$
or:

$0 \le a_{m + 1} - a_{m + 2} + a_{m + 3} - \cdots + a_{k + 1} \le a_{m + 1}$
Thus for even $k$ it follows that $\map P k \implies \map P {k + 1}$.

So for both even and odd $k$ it follows that $\map P k \implies \map P {k + 1}$ and the result follows by the Second Principle of Mathematical Induction.
$\blacksquare$





