# 

Source: https://proofwiki.org/wiki/Bernoulli_Numbers_are_Rational



Theorem
The Bernoulli numbers are rational.


Proof
By the recurrence relation for the Bernoulli numbers:

$B_n = \begin{cases} 1 & : n = 0 \\
\ds - \sum_{k \mathop = 0}^{n-1} \binom n k \frac {B_k} {n - k + 1} & : n > 0
\end{cases}$


$B_0$ is rational.
$B_n$ is a finite sum of the products of a binomial coefficient with a Bernoulli number earlier in the sequence divided by an integer.

The proof proceeds by induction.
For all $n \in \N$, let $\map P n$ be the proposition:

$B_n$ is rational.


Basis for the Induction
$\map P 0$ is the case:

$B_0$ is rational.
This is true, as $B_0 = 1$ which is rational.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true, where $0 \le j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\forall j \in \N: 0 \le j \le k: B_j$ is rational
from which it is to be shown that:

$B_{k + 1}$ is rational.


Induction Step
This is the induction step:
By the recurrence relation for the Bernoulli numbers:

$\ds B_{k + 1} = - \sum_{j \mathop = 0}^k \binom {k + 1} j \frac {B_j} {k - j + 2}$
We have that:

From Binomial Coefficient is Integer, $\dbinom {k + 1} j$ is an integer throughout.
From the Induction Hypothesis, $\forall j \in \N: 0 \le j \le k: B_j$ is rational.
$k - j + 2$ is an integer.
Thus as $B_{k + 1}$ is the sum of a finite number of rational numbers, it follows that $B_{k + 1}$ it itself rational.

The result follows by the Second Principle of Mathematical Induction.

Therefore:

$\forall n \in \N: B_n$ is rational.
$\blacksquare$


Sources
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.20$: The Bernoulli Numbers and some Wonderful Discoveries of Euler




