# 

Source: https://proofwiki.org/wiki/Parity_of_Pell_Numbers



Theorem
Consider the Pell numbers $P_0, P_1, P_2, \ldots$

$0, 1, 2, 5, 12, 29, \ldots$
$P_n$ has the same parity as $n$.

That is:

if $n$ is odd then $P_n$ is odd
if $n$ is even then $P_n$ is even.


Proof
The proof proceeds by strong induction.
For all $n \in \Z_{\ge 0}$, let $\map P n$ be the proposition:

$P_n$ has the same parity as $n$.


Basis for the Induction
$\map P 0$ is the case:

$P_0 = 0$
which is even.

$\map P 1$ is the case:

$P_1 = 1$
which is odd.
Thus $\map P n$ holds for $n = 0$ and $n = 1$.

These comprise the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $\map P j$ is true for all $j \le k$, then it logically follows that $\map P {k + 1}$ is true.

So this is the induction hypothesis:

$\forall j \le k: P_j$ has the same parity as $j$

from which it is to be shown that:

$P_{k + 1}$ has the same parity as $k + 1$.


Induction Step
This is the induction step:
By definition of Pell numbers:

$P_{k + 1} = 2 P_k + P_{k - 1}$
$2 P_k$ is even by definition.
By Sum of Even Integers is Even, if $P_{k - 1}$ is even then so is $P_{k + 1}$.
Similarly, if $P_{k - 1}$ is odd then so is $P_{k + 1}$.
Thus the parity of $P_{k + 1}$ matches the parity of $P_{k - 1}$.
But by the induction hypothesis, the parity of $P_{k - 1}$ matches $k - 1$.
We have that:

$k + 1 = 2 + k - 1$
and so the parity of $k + 1$ matches the parity of $k - 1$.
Thus the parity of $P_{k + 1}$ matches $k + 1$.
So $\map P k \implies \map P {k + 1}$ and the result follows by the Principle of Strong Induction.
Therefore:

$\forall n \in \Z_{\ge 0}: P_n$ has the same parity as $n$.
$\blacksquare$





