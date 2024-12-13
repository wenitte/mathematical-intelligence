# 

Source: https://proofwiki.org/wiki/Peak_Point_Lemma/Proof_1

Theorem
Let $\sequence {x_n}$ be a sequence in $\R$ which is infinite.

Then $\sequence {x_n}$ has an infinite subsequence which is monotone.


Proof
There are $2$ cases to consider.

First, suppose that every set $\set {x_n: n > N}$ has a maximum.
If this is the case, we can find a sequence $n_r \in \N$ such that:

$\ds x_{n_1} = \max \set {x_n: n > 1}$
$\ds x_{n_2} = \max \set {x_n: n > n_1}$
$\ds x_{n_3} = \max \set {x_n: n > n_2}$
and so on.

From the method of construction, $n_1 < n_2 < n_3 < \cdots$, so at each stage we are taking the maximum of a subset of the previous set.
At each stage, the previous maximum has already been taken as the previous term in the sequence.
Thus, $\sequence {x_{n_r} }$ is a decreasing subsequence of $\sequence {x_n}$.
$\Box$

Second, suppose it is not true that every set $\set {x_n: n > N}$ has a maximum.
Then there will exist some $N_1$ such that $\set {x_n: n > N_1}$ has no maximum.
So it follows that, given some $x_m$ with $m > N_1$, we can find an $x_n$ following that $x_m$ such that $x_n > x_m$.
(Otherwise, the biggest of $x_{N_1 + 1}, \ldots, x_m$ would be a maximum for $\set {x_n: n > N_1}$.)

So, we define $x_{n_1} = x_{N_1 + 1}$.
Then $x_{n_2}$ can be the first term after $x_{n_1}$ such that $x_{n_2} > x_{n_1}$.
Then $x_{n_3}$ can be the first term after $x_{n_2}$ such that $x_{n_3} > x_{n_2}$.
And so on.
Thus we get an increasing subsequence of $\sequence {x_n}$.
$\Box$

There exist only these two possibilities.
From each one we get a subsequence that is monotone:

one is decreasing
one is increasing.

We can of course choose instead to investigate whether every set $\set {x_n: n > N}$ has a minimum.
The same conclusion will be reached.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 5$: Subsequences: Bolzano-Weierstrass Theorem: $\S 5.9$
2017: Amol Sasane: A Friendly Approach to Functional Analysis ... (previous) ... (next): $\S 1.4$: Normed and Banach spaces. Sequences in a normed space; Banach spaces




