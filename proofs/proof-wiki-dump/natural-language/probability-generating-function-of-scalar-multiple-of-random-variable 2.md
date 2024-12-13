# 

Source: https://proofwiki.org/wiki/Probability_Generating_Function_of_Scalar_Multiple_of_Random_Variable

Theorem
Let $X$ be a discrete random variable whose probability generating function is $\map {\Pi_X} s$.
Let $k \in \Z_{\ge 0}$ be a positive integer.
Let $Y$ be a discrete random variable such that $Y = m X$.

Then

$\map {\Pi_Y} s = \map {\Pi_X} {s^m}$
where $\map {\Pi_Y} s$ is the probability generating function of $Y$.


Proof
From the definition of p.g.f:

$\ds \map {\Pi_X} s = \sum_{k \mathop \ge 0} \map \Pr {X = k} s^k$
We have by hypothesis:

$\map \Pr {Y = m k} = \map \Pr {X = k}$
Thus:

$\ds \map {\Pi_Y} s = \sum_{m k \mathop \ge 0} \map \Pr {X = k} s^{m k}$

From the definition of a probability generating function:

$\map {\Pi_Y} s = \map {\Pi_X} {s^m}$
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.2$: Integer-valued random variables: Exercise $3$




