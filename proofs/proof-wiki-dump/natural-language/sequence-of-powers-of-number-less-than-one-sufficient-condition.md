# 

Source: https://proofwiki.org/wiki/Sequence_of_Powers_of_Number_less_than_One/Sufficient_Condition


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $x \in \R$.
Let $\sequence {x_n}$ be the sequence in $\R$ defined as $x_n = x^n$.
Let $\sequence {x_n}$ be a null sequence.

Then $\size x < 1$.


Proof
By Reciprocal of Null Sequence:

$\sequence {x_n}$ converges to $0$ if and only if $\sequence {\dfrac 1 {x_n} }$ diverges to $\infty$.
By the definition of divergence to $\infty$:

$\exists N \in \N: \forall n \ge N: \size {\dfrac 1 {x_n} } > 1$
In particular:

$\size {\dfrac 1 {x_N} } > 1$
By Ordering of Reciprocals:

$\size {x_N} < 1$
That is:

$\size {x_N} = \size {x^N} = \size x^N < 1$

Aiming for a contradiction, suppose $\size x \ge 1$.
By Inequality of Product of Unequal Numbers:

$\size x^N \ge 1^N = 1$
This is a contradiction.

So $\size x < 1$ as required.
$\blacksquare$





