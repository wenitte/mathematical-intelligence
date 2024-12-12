# 

Source: https://proofwiki.org/wiki/Cauchy%27s_Convergence_Criterion/Real_Numbers/Sufficient_Condition



Theorem
Let $\sequence {x_n}$ be a sequence in $\R$.
Let $\sequence {x_n}$ be a Cauchy sequence.

Then $\sequence {x_n}$ is convergent.


Proof 1
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
We have the result Real Number Line is Metric Space.
Hence by Convergent Subsequence of Cauchy Sequence, it is sufficient to show that $\sequence {a_n}$ has a convergent subsequence.
Since $\sequence {a_n}$ is Cauchy, by Real Cauchy Sequence is Bounded, it is also bounded.
By the Bolzano-Weierstrass Theorem, $\sequence {a_n}$ has a convergent subsequence.
Hence the result.
$\blacksquare$


Proof 2
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
By Real Cauchy Sequence is Bounded, $\sequence {a_n}$ is bounded.
By the Bolzano-Weierstrass Theorem, $\sequence {a_n}$ has a convergent subsequence $\sequence {a_{n_r} }$.
Let $a_{n_r} \to l$ as $r \to \infty$.
It is to be shown that $a_n \to l$ as $n \to \infty$.

Let $\epsilon \in \R_{>0}$ be a (strictly) positive real number.
Then $\dfrac \epsilon 2 > 0$.
Hence:

$(1): \quad \exists R \in \R: \forall r > R: \size {a_{n_r} - l} < \dfrac \epsilon 2$

We have that $\sequence {a_n}$ is a Cauchy sequence.
Hence:

$(2): \quad \exists N \in \R: \forall m > N, n > N: \size {x_m - x_n} \le \dfrac \epsilon 2$
Let $n > N$.
Let $r \in \N$ be sufficiently large that:

$n_r > N$
and:

$r > R$
Then $(1)$ is satisfied, and $(2)$ is satisfied with $m = n_r$.
So:










\(\ds \forall n > N: \, \)



\(\ds \size {a_n - l}\)

\(=\)







\(\ds \size {a_n - a_{n_r} + a_{n_r} - l}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_n - a_{n_r} } + \size{a_{n_r} - l}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(<\)







\(\ds \dfrac \epsilon 2 + \dfrac \epsilon 2\)




















\(\ds \)

\(=\)







\(\ds \epsilon\)









So, given $\epsilon > 0$, we have found $n \in \R$ such that:

$\forall n > N: \size {a_n - l} < \epsilon$
Thus:

$x_n \to l$ as $n \to \infty$.
$\blacksquare$


Proof 3
The aim is to define two sequences whose elements are respectively upper and lower bounds to subsequences of the sequence $\sequence {a_n}$.
It is then shown that these two sequences converge to the same limit.
This is used to prove that $\sequence {a_n}$ converges.

A sequence $\sequence {\epsilon_i}$ is introduced that can be considered a sequence of values or levels that a positive, real variable $\epsilon$ ($ \ge 1$) passes through on its way towards $0$.
At each level an upper bound and a lower bound for a subsequence of $\sequence {a_n}$ are defined.
All such upper bounds form a sequence of upper bounds and the lower bounds a sequence of lower bounds.
These two sequences are the ones that are used to show that $\sequence {a_n}$ converges.

Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
Since $\sequence {a_n}$ is Cauchy, for every $\epsilon \in \R_{>0}$ a natural number $N$ exists such that:

$\size {a_n - a_m} < \epsilon$ for every $m, n \ge N$
We aim to show that $\sequence {a_n}$ converges.
That is, that a real number $a$ exists and for every $\epsilon \in \R_{>0}$ a natural number $N'$ exists such that:

$\size {a_n - a} < \epsilon$ for every $n > N'$

Let $\sequence {\epsilon_i}_{i \mathop \in \N}$ be a sequence of strictly positive real numbers that satisfies:

$\epsilon_0 = 1$
$\epsilon_{i + 1} < \epsilon_i$ for every $i \in \N$
$\ds \lim_{i \mathop \to \infty} \epsilon_i = 0$


$a_n$ is between and arbitrarily close to elements of two sequences
Since $\sequence {a_n}$ is Cauchy, for each $\epsilon_i$ a natural number $N_i$ exists such that:

$\size {a_n - a_m} < \epsilon_i$ for every $m, n \ge N_i$
Therefore, we have for every $i \in \N$:














\(\ds \size {a_n - a_m}\)

\(<\)







\(\ds \epsilon_i\)





for every $m, n \ge N_i$








\(\ds \leadsto \ \ \)





\(\ds \size {a_n - a_{N_i} }\)

\(<\)







\(\ds \epsilon_i\)





for every $n \ge N_i$








\(\ds \leadsto \ \ \)





\(\ds a_{N_i} - \epsilon_i\)

\(<\)







\(\ds a_n < a_{N_i} + \epsilon_i\)





for every $n \ge N_i$ by Negative of Absolute Value: Corollary $1$




Let us study the sequence $\sequence {N_i}_{i \mathop \in \N}$.
Consider the relation between $N_{i + 1}$ and $N_i$.
We have, for every $i \in \N$:

$\size {a_n - a_m} < \epsilon_i$ for every $m, n \ge N_i$
and:

$\size {a_n - a_m} < \epsilon_{i + 1}$ for every $m, n \ge N_{i + 1}$
We have that $\epsilon_{i + 1} < \epsilon_i$ for every $i \in \N$.
Accordingly, $N_{i + 1}$ should be at least as great as $N_i$.
Therefore, we choose the value of $N_{i + 1}$ so that:

$N_{i + 1} \ge N_i$ for every $i \in \N$
$\Box$

Define a real sequence $\sequence {u_i}_{i \mathop \in \N}$ by:

$u_0 = a_{N_0} + \epsilon_0$
$u_{i + 1} = \min \set {u_i, a_{N_{i + 1} } + \epsilon_{i + 1} }$ for every $i \in \N$
We observe that $u_{i + 1}$ is the minimum of two numbers, one of which is $u_i$.
Therefore $\sequence {u_i}$ is decreasing.


$u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$
We prove this by using the Principle of Mathematical Induction.

We have that $a_n < a_{N_0} + \epsilon_0$ whenever $n \ge N_0$.
Therefore, $a_{N_0} + \epsilon_0$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_0}$.
Furthermore, $u_0$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_0}$ since $u_0 = a_{N_0} + \epsilon_0$.
This concludes the first induction step.

We need to prove that $u_{i + 1}$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_{i + 1} }$ if $u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$.

Assume that $u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$.

$u_{i + 1}$ equals either $u_i$ or $a_{N_{i + 1} } + \epsilon_{i + 1}$.

First, assume that $u_{i + 1} = u_i$.
We have that $u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$ by presupposition.
Therefore, $u_{i + 1}$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$ as $u_{i + 1} = u_i$.
We have that $\sequence {a_n}_{n \mathop \ge N_{i + 1} }$ is a subsequence of $\sequence {a_n}_{n \mathop \ge N_i}$ because $N_{i + 1} \ge N_i$.
Therefore, an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$ is also an upper bound for $\sequence {a_n}_{n \mathop \ge N_{i + 1} }$.
Therefore, $u_{i + 1}$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_{i + 1} }$ because $u_{i + 1}$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$.
This concludes the first part of the second induction step.

Now, assume that $u_{i + 1} = a_{N_{i + 1} } + \epsilon_{i + 1}$.
We have that $a_n < a_{N_{i + 1} } + \epsilon_{i + 1}$ whenever $n \ge N_{i + 1}$.
In other words, $a_{N_{i + 1} } + \epsilon_{i + 1}$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_{i + 1} }$.
Therefore, $u_{i + 1}$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_{i + 1} }$ as $u_{i + 1} = a_{N_{i + 1} } + \epsilon_{i + 1}$.

This concludes the proof that $u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$ for every $i \in \N$.
$\Box$


$\sequence {u_i}$ converges
$\sequence {a_n}$ is bounded by Real Cauchy Sequence is Bounded.
Therefore, $\sequence {a_n}$ has a lower bound $b$.
$\sequence {a_n}_{n \mathop \ge N_i}$ is a subsequence of $\sequence {a_n}$ for every $i \in \N$.
Therefore, $b$ is also a lower bound for $\sequence {a_n}_{n \mathop \ge N_i}$.
We have that $u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$.
Therefore, $b$ is less than or equal to $u_i$ for every $i$.
So, $\sequence {u_i}$ is bounded below.

Since $\sequence {u_i}$ is decreasing, its first element is an upper bound for $\sequence {u_i}$.

Since $\sequence {u_i}$ is bounded below and above, it is bounded.

We have that$ \sequence {u_i}$ is bounded and decreasing.
Therefore $\sequence {u_i}$ converges by the Monotone Convergence Theorem.
$\Box$

Now, define a real sequence $\sequence {l_i}_{i \mathop \in \N}$ by:

$l_0 = a_{N_0} - \epsilon_0$
$l_{i + 1} = \max \set {l_i, a_{N_{i + 1} } - \epsilon_{i + 1} }$ for every $i \in \N$


$l_i$ is a lower bound for $\sequence {a_n}_{n \mathop \ge N_i}$, and $\sequence {l_i}$ converges
An analysis of $\sequence {l_i}$ is similar to the one above of $\sequence {u_i}$.
Therefore, it is not given here.
It produces the following results:

$\sequence {l_i}$ is increasing
$l_i$ is a lower bound for $\sequence {a_n}_{n \mathop \ge N_i}$ for every $i \in \N$
$\sequence {l_i}$ converges
$\Box$


The limits of $\sequence {u_i} $ and $\sequence {l_i}$ as $i \to \infty$ are equal
We have that $u_i$ and $l_i$ are, respectively, upper and lower bounds for $\sequence {a_n}_{n \mathop \ge N_i}$ for every $i \in \N$.
This means that, for every $n \ge N_i$ for every $i \in \N$:














\(\ds l_i\)

\(\le\)







\(\ds a_n \le u_i\)














\(\ds \leadsto \ \ \)





\(\ds l_i\)

\(\le\)







\(\ds u_i\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(\le\)







\(\ds u_i - l_i\)









Therefore, we have for every $i \in \N$:














\(\ds 0\)

\(\le\)







\(\ds u_{i + 1} - l_{i + 1}\)




















\(\ds \)

\(=\)







\(\ds \min \set {u_i, a_{N_{i + 1} } + \epsilon_{i + 1} } - \max \set {l_i, a_{N_{i + 1} } - \epsilon_{i + 1} }\)





Definitions of $u_{i + 1}$ and $l_{i + 1}$














\(\ds \)

\(\le\)







\(\ds a_{N_{i + 1} } + \epsilon_{i + 1} - \max \set {l_i, a_{N_{i + 1} } - \epsilon_{i + 1} }\)





because $\min \set {u_i, a_{N_{i + 1} } + \epsilon_{i + 1} } \le a_{N_{i + 1} } + \epsilon_{i + 1}$














\(\ds \)

\(\le\)







\(\ds a_{N_{i + 1} } + \epsilon_{i + 1} - \paren {a_{N_{i + 1} } - \epsilon_{i + 1} }\)





because $\max \set {l_i, a_{N_{i + 1} } - \epsilon_{i + 1} } \ge a_{N_{i + 1} } - \epsilon_{i + 1}$














\(\ds \)

\(=\)







\(\ds 2 \epsilon_{i + 1}\)









This shows that $u_i - l_i \to 0$ as $i \to \infty$ since $\ds \lim_{i \mathop \to \infty} \epsilon_i = 0$.

We have:














\(\ds \lim_{i \mathop \to \infty} u_i - \lim_{i \mathop \to \infty} l_i\)

\(=\)







\(\ds \lim_{i \mathop \to \infty} (u_i - l_i)\)





Combined Sum Rule for Real Sequences as $\sequence {u_i}$ and $\sequence {l_i}$ converge








\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{i \mathop \to \infty} u_i - \lim_{i \mathop \to \infty} l_i\)

\(=\)







\(\ds 0\)





as $\ds \lim_{i \mathop \to \infty} (u_i - l_i) = 0$








\(\ds \leadstoandfrom \ \ \)





\(\ds \lim_{i \mathop \to \infty} u_i\)

\(=\)







\(\ds \lim_{i \mathop \to \infty} l_i\)









$\Box$


$\sequence {a_n}$  converges
Let $\ds a = \lim_{i \mathop \to \infty} u_i = \lim_{i \mathop \to \infty} l_i$.

We have for every $i \in \N$:














\(\ds l_i\)

\(\le\)







\(\ds a \le u_i\)





as $\sequence {l_i}$ is increasing and $\sequence {u_i}$ is decreasing








\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(\le\)







\(\ds a - l_i \le u_i - l_i\)














\(\ds \leadsto \ \ \)





\(\ds \size {a - l_i}\)

\(\le\)







\(\ds \size {u_i - l_i}\)










Also, we have for every $n \ge N_i$ for every $i \in \N$:














\(\ds l_i\)

\(\le\)







\(\ds a_n \le u_i\)





as $l_i$ is a lower bound for $\sequence {a_n}_{n \ge N_i}$ and $u_i$ is an upper bound for $\sequence {a_n}_{n \mathop \ge N_i}$








\(\ds \leadstoandfrom \ \ \)





\(\ds 0\)

\(\le\)







\(\ds a_n - l_i \le u_i - l_i\)














\(\ds \leadsto \ \ \)





\(\ds \size {a_n - l_i}\)

\(\le\)







\(\ds \size {u_i - l_i}\)










Let $\epsilon \in \R_{>0}$.
A natural number $j$ exists such that, for every $i \ge j$:














\(\ds \size {u_i - l_i}\)

\(<\)







\(\ds \dfrac \epsilon 2\)





as $\ds \lim_{k \mathop \to \infty} (u_k - l_k) = 0$




Putting all this together, we find for every $n \ge N_j$:














\(\ds \size {a_n - a}\)

\(=\)







\(\ds \size {a_n - l_j + l_j - a}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_n - l_j} + \size {l_j - a}\)





Triangle Inequality for Real Numbers














\(\ds \)

\(\le\)







\(\ds \size {u_j - l_j} + \size {l_j - a}\)





as $\size {a_n - l_j} \le \size {u_j - l_j}$














\(\ds \)

\(\le\)







\(\ds \size {u_j - l_j} + \size {u_j - l_j}\)





as $\size {a - l_j} \le \size {u_j - l_j}$














\(\ds \)

\(=\)







\(\ds 2 \size {u_j - l_j}\)




















\(\ds \)

\(<\)







\(\ds \epsilon\)





as $\ds \size {u_j - l_j} < \frac \epsilon 2$



This finishes the proof that $\sequence {a_n}$ is convergent.
$\blacksquare$


Proof 4
Let $\sequence {a_n}$ be a Cauchy sequence in $\R$.
By Real Cauchy Sequence is Bounded, $\sequence {a_n}$ is bounded.
Thus $\sequence {a_n}$ is both bounded above and bounded below.

Let us create a monotone subsequence $\sequence {b_n}$ of $\sequence {a_n}$ using the following construction:
For each $m \in \N$, let $S_m$ denote the set of elements of $\sequence {a_n}$ from $m$ onwards:

$S_m = \set {a_n: n \ge m}$
From Real Cauchy Sequence is Bounded, we have that $S_m$ is also bounded.
Hence, by the Continuum Property, $\sup S_m$ exists.
Let $b_m := \sup S_m$.

Because $S_{m + 1} \subseteq S_m$, it follows from Supremum of Set of Real Numbers is at least Supremum of Subset that:

$\sup S_{m + 1} \le \sup S_m$
Thus $\sequence {b_m}$ is decreasing.
By definition of $b_m$, we also have that:

$b_m \ge a_m$
So, as $\sequence {a_n}$ is bounded below, so is $\sequence {b_m}$.
So, by the Monotone Convergence Theorem (Real Analysis), $\sequence {b_m}$ is convergent.

Let $\sequence {b_m}$ converge to $l$.
Let $\epsilon \in \R_{>0}$ be arbitrary.
We have that $\sequence {a_n}$ is a Cauchy sequence in $\R$.
We also have from Subsequence of Real Cauchy Sequence is Cauchy that $\sequence {b_n}$ is also a Cauchy sequence in $\R$.
Then there exists:

$N_1 \in \N$ such that $\size {a_m - a_n} < \epsilon$ for $m, n \ge N_1$
$N_2 \in \N$ such that $\size {l - b_n} < \epsilon$ for $m \ge N_2$
Let $N = \max \set {N_1, N_2}$.
By definition of $b_N$, we have that $b_N - \epsilon$ is not an upper bound of $S_N = \set {a_n: n \ge N}$.
Thus there exists $M \ge N$ such that $a_M > b_N - \epsilon$.
We note also that $a_M \le b_N$ because $b_N$ is an upper bound for $S_N$.

Now let $n \ge N$.
We have that:














\(\ds \size {a_n - l}\)

\(=\)







\(\ds \size {a_n - a_M + a_M - b_N + b_N - l}\)




















\(\ds \)

\(\le\)







\(\ds \size {a_n - a_M} + \size {a_M - b_N} + \size {b_N - l}\)





Triangle Inequality














\(\ds \)

\(<\)







\(\ds 3 \epsilon\)









Hence by Convergence by Multiple of Error Term we have that $\sequence {a_n}$ converges to $l$.
$\blacksquare$


Also known as
Cauchy's Convergence Criterion is also known as the Cauchy Convergence Condition.





