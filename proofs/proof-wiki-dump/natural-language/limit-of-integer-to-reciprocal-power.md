# 

Source: https://proofwiki.org/wiki/Limit_of_Integer_to_Reciprocal_Power



Theorem
Let $\sequence {x_n}$ be the real sequence defined as $x_n = n^{1/n}$, using exponentiation.
Then $\sequence {x_n}$ converges with a limit of $1$.


Proof 1
From Number to Reciprocal Power is Decreasing we have that the real sequence $\sequence {n^{1/n} }$ is decreasing for $n \ge 3$.
Now, as $n^{1 / n} > 0$ for all positive $n$, it follows that $\sequence {n^{1 / n} }$ is bounded below (by $0$, for a start).
Thus the subsequence of $\sequence {n^{1 / n} }$ consisting of all the terms of $\sequence {n^{1 / n} }$ where $n \ge 3$ is convergent by the Monotone Convergence Theorem (Real Analysis).
Now we need to demonstrate that this limit is in fact $1$.
Let $n^{1 / n} \to l$ as $n \to \infty$.

Having established this, we can investigate the subsequence $\sequence {\paren {2 n}^{1 / {2 n} } }$.
By Limit of Subsequence equals Limit of Real Sequence, this will converge to $l$ also.
From Limit of Root of Positive Real Number, we have that $2^{1 / {2 n} } \to 1$ as $n \to \infty$.
So $n^{1 / {2 n} } \to l$ as $n \to \infty$ by the Combination Theorem for Sequences.
Thus:

$n^{1 / n} = n^{1 / {2 n} } \cdot n^{1 / {2 n} } \to l \cdot l = l^2$
as $n \to \infty$.
So $l^2 = l$, and as $l \ge 1$ the result follows.
$\blacksquare$


Proof 2
We have the definition of the power to a real number:

$\ds n^{1/n} = \map \exp {\frac 1 n \ln n}$
From Powers Drown Logarithms, we have that:

$\ds \lim_{n \mathop \to \infty} \frac 1 n \ln n = 0$
Hence:

$\ds \lim_{n \mathop \to \infty} n^{1/n} = \exp 0 = 1$
and the result.
$\blacksquare$


Proof 3
Let $n^{1/n} = 1 + a_n$.
The strategy is to:

$(1): \quad$ prove that $a_n > 0$ for $n > 1$
$(2): \quad$ deduce that $n - 1 \ge \dfrac {n \paren {n - 1} } {2!} a_n^2$ for $n > 1$
and hence:

$(3): \quad$ deduce that $0 \le a_n^2 \le \dfrac 2 n$

Let $n > 1$.
Then:














\(\ds n\)

\(=\)







\(\ds \paren {1 + a_n}^n\)




















\(\ds \)

\(=\)







\(\ds 1 + n a_n + \dfrac {n \paren {n - 1} } {2!} a_n^2\)










This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.




