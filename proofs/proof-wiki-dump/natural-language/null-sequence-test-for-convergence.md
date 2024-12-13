# 

Source: https://proofwiki.org/wiki/Null_Sequence_Test_for_Convergence


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $\struct {R, \norm{\,\cdot\,}}$ be a normed division ring.
Let $\sequence{x_n}$ be a convergent sequence in $\struct {R, \norm{\,\cdot\,}}$ with limit $l$.
Let $\sequence{y_n}$ be a sequence.

Then:

$\sequence{y_n}$ converges to the limit $l$ if and only if the sequence $\sequence{y_n - x_n}$ is a null sequence
Proof
Necessary Condition
Let $\sequence{y_n}$ converge to the limit $l$.
From Difference Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} y_n - x_n = l - l = 0$
Hence $\sequence{y_n - x_n}$ is a null sequence by definition.
$\Box$

Sufficient Condition
Let $\sequence{y_n - x_n}$ be a null sequence.
By definition of a null sequence:

$\ds \lim_{n \mathop \to \infty} y_n - x_n = 0$
From Sum Rule for Sequences in Normed Division Ring:

$\ds \lim_{n \mathop \to \infty} x_n + \paren{y_n - x_n} = l + 0 = l$
For all $n \in \N$:

$x_n + \paren{y_n - x_n} = y_n$
Hence:

$\ds \lim_{n \mathop \to \infty} y_n = l$
It follows that $\sequence{y_n}$ converges to the limit $l$ by definition.
$\blacksquare$





