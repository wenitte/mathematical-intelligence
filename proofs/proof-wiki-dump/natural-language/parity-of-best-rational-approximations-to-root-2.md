# 

Source: https://proofwiki.org/wiki/Parity_of_Best_Rational_Approximations_to_Root_2

Theorem
Consider the Sequence of Best Rational Approximations to Square Root of 2:

$\sequence S := \dfrac 1 1, \dfrac 3 2, \dfrac 7 5, \dfrac {17} {12}, \dfrac {41} {29}, \dfrac {99} {70}, \dfrac {239} {169}, \dfrac {577} {408}, \ldots$
where $S_1 := \dfrac 1 1$.
The numerators of the terms of $\sequence S$ are all odd.
For all $n$, the parity of the denominator of term $S_n$ is the same as the parity of $n$.


Proof
First the parity of the numerators of the terms of $\sequence S$ is established.
Let $\dfrac {p_n} {q_n}$ be a general term of $\sequence S$.

By Relation between Adjacent Best Rational Approximations to Root 2:

$p_{n + 1} = p_n + 2 q_n$
Thus if $p_n$ is odd then so is $p_{n + 1}$.
But $p_1 = 1$ is odd.
So $p_n$ is odd for all $n$, by Principle of Mathematical Induction.

The denominators are the Pell numbers.
The result follows from Parity of Pell Numbers.
$\blacksquare$





