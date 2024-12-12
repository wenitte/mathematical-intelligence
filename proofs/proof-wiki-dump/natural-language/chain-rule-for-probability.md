# 

Source: https://proofwiki.org/wiki/Chain_Rule_for_Probability



Theorem
Let $\EE$ be an experiment with probability space $\struct {\Omega, \Sigma, \Pr}$.
Let $A, B \in \Sigma$ be events of $\EE$ such that $\map \Pr B > 0$.
The conditional probability of $A$ given $B$ is:

$\condprob A B = \dfrac {\map \Pr {A \cap B} } {\map \Pr B}$


Proof
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


Also presented as
The Chain Rule for Probability can also be presented in the form:

$\condprob A B \cdot \map \Pr B = \map \Pr {A \cap B}$


Also known as
The Chain Rule for Probability is also known as the Multiplication Rule of Probability.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 1.6$: Conditional probabilities: $(19)$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): probability
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): probability
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): conditional probability




