# 

Source: https://proofwiki.org/wiki/Expectation_of_Discrete_Random_Variable_from_PGF



Theorem
Let $X$ be a discrete random variable whose probability generating function is $\map {\Pi_X} s$.

Then the expectation of $X$ is the value of the first derivative of $\map {\Pi_X} s$ with respect to $s$ at $s = 1$.
That is:

$\expect X = \map {\Pi'_X} 1$


Proof
For ease of notation, write $\map p x$ for $\map \Pr {X = x}$.

From the definition of the probability generating function:

$\ds \map {\Pi_X} s = \sum_{x \mathop \ge 0} \map p x s^x = \map p 0 + \map p 1 s + \map p 2 s^2 + \map p 3 s^3 + \cdots$
Differentiate this with respect to $s$:














\(\ds \map {\Pi'_X} s\)

\(=\)







\(\ds \frac \d {\d s} \sum_{k \mathop = 0}^\infty \map \Pr {X = k} s^k\)




















\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty \frac \d {\d s} \map \Pr {X = k} s^k\)





Abel's Theorem














\(\ds \)

\(=\)







\(\ds \sum_{k \mathop = 0}^\infty k \map \Pr {X = k} s^{k - 1}\)





Power Rule for Derivatives




Plugging in $s = 1$ gives:

$\ds \map {\Pi'_X} 1 = \sum_{k \mathop = 0}^\infty k \map \Pr {X = k} 1^{k - 1} = \map p 1 + 2 \map p 2 + 3 \map p 3 + \cdots$
But:

$\ds \sum_{k \mathop = 0}^\infty k \map \Pr {X = k} 1^{k - 1} = \sum_{k \mathop = 0}^\infty k \map \Pr {X = k}$
is precisely the definition of the expectation.
$\blacksquare$


Comment
So, in order to find the expectation of a discrete random variable, then there is no need to go through the tedious process of what might be a complicated and fiddly summation.
All you need to do is differentiate the PGF and plug in $1$.
Assuming, of course, you know what the PGF is.


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 4.3$: Moments: $(17)$




