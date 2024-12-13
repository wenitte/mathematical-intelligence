# 

Source: https://proofwiki.org/wiki/Index_of_Subsequence_not_Less_than_its_Index



Theorem
Let $\sequence {x_n}_{n \mathop \ge 1}$ be a sequence in a set $S$.
Let $\sequence {x_{n_r} }$ be a subsequence of $\sequence {x_n}$.

Then:

$\forall n \in \N_{>0}: n_r \ge r$


Proof
The proof proceeds by induction.
For all $r \in \Z_{\ge 1}$, let $\map P r$ be the proposition:

$n_r \ge r$


Basis for the Induction
The first term of $\sequence {x_{n_r} }$ by definition cannot be less than $1$.
That is:

$n_1 \ge 1$
Thus $\map P 1$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that if $\map P k$ is true, where $k \ge 1$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$n_k \ge k$

from which it is to be shown that:

$n_{k + 1} \ge {k + 1}$


Induction Step
This is the induction step:














\(\ds n_{k + 1}\)

\(>\)







\(\ds n_k\)





Definition of Strictly Increasing Sequence














\(\ds \)

\(>\)







\(\ds k\)





Induction Hypothesis














\(\ds \)

\(\ge\)







\(\ds k + 1\)





as $k$ is an integer




So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall r \in \Z_{\ge 1}: n_r \ge r$
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: $\S 5.1$: Subsequences




