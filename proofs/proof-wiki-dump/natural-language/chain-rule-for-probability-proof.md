# 

Source: https://proofwiki.org/wiki/Chain_Rule_for_Probability/Proof

Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ be events of $\EE$ such that $\map \Pr B > 0$.
The conditional probability of $A$ given $B$ is:

$\condprob A B = \dfrac {\map \Pr {A \cap B} } {\map \Pr B}$


Proof

The validity of the material on this page is questionable.In particular: This is not a mathematical proof. There is no rigor at all, isn't it? Kind of a justification of the definition $\condprob A B = \dfrac {\map \Pr {A \cap B} } {\map \Pr B}$ comparing to the real world. But maybe an ancient mathematics, surely not the modern mathematics.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by resolving the issues.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Questionable}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Suppose it is given that $B$ has occurred.
Then the probability of $A$ having occurred may not be $\map \Pr A$ after all.
In fact, we can say that $A$ has occurred if and only if $A \cap B$ has occurred.

So, if we know that $B$ has occurred, the conditional probability of $A$ given $B$ is $\map \Pr {A \cap B}$.
It follows then, that:

if we don't actually know whether $B$ has occurred or not
but we know its probability $\map \Pr B$
we can say that:

The probability that $A$ and $B$ have both occurred is the conditional probability of $A$ given $B$ multiplied by the probability that $B$ has occurred.

Hence:

$\condprob A B = \dfrac {\map \Pr {A \cap B} } {\map \Pr B}$
$\blacksquare$





