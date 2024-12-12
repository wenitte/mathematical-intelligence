# 

Source: https://proofwiki.org/wiki/Expectation_of_Function_of_Discrete_Random_Variable

Theorem
Let $X$ be a discrete random variable.
Let $\expect X$ be the expectation of $X$.
Let $g: \R \to \R$ be a real function.

Then:

$\ds \expect {g \sqbrk X} = \sum_{x \mathop \in \Omega_X} \map g x \, \map \Pr {X = x}$
whenever the sum is absolutely convergent.


Proof
Let $\Omega_X = \Img X = I$.
Let $Y = g \sqbrk X$.
Thus:

$\Omega_Y = \Img Y = g \sqbrk I$
So:














\(\ds \expect Y\)

\(=\)







\(\ds \sum_{y \mathop \in g \sqbrk I} y \, \map \Pr {Y = y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{y \mathop \in g \sqbrk I} y \sum_{ {x \mathop \in I} \atop {\map g x \mathop = y} } \map \Pr {X = x}\)





Probability Mass Function of Function of Discrete Random Variable














\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in I} \map g x \, \map \Pr {X = x}\)









From the definition of expectation, this last sum applies only when the last sum is absolutely convergent.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 2.4$: Expectation: Theorem $2 \ \text{B}$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): expectation (expected value)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): expectation (expected value)




