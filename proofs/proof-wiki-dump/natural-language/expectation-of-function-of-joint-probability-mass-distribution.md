# 

Source: https://proofwiki.org/wiki/Expectation_of_Function_of_Joint_Probability_Mass_Distribution

Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.
Let $\expect X$ be the expectation of $X$.
Let $g: \R^2 \to \R$ be a real-valued function
Let $p_{X, Y}$ be the joint probability mass function of $X$ and $Y$.


$\ds \expect {\map g {X, Y} } = \sum_{x \mathop \in \Omega_X} \sum_{y \mathop \in \Omega_Y} \map g {x, y} \map {p_{X, Y} } {x, y}$
whenever the sum is absolutely convergent.


Proof
Let $\Omega_X = \Img X = I_X$ and $\Omega_Y = \Img Y = I_Y$.
Let $Z = \map g {X, Y}$.
Thus $\Omega_Z = \Img Z = g \sqbrk {I_X, I_Y}$.
So:














\(\ds \expect Z\)

\(=\)







\(\ds \sum_{z \mathop \in g \sqbrk {I_X, I_Y} } z \map \Pr {Z = z}\)




















\(\ds \)

\(=\)







\(\ds \sum_{z \mathop \in g \sqbrk {I_X, I_Y} } z \sum_{ {x \mathop \in I_X, y \mathop \in I_Y} \atop {\map g {x, y} \mathop = z} } \map \Pr {X = x, Y = y}\)





Probability Mass Function of Function of Discrete Random Variable














\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in I_X} \sum_{y \mathop \in I_Y} \map g {x, y} \map \Pr {X = x, Y = y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{x \mathop \in I_X} \sum_{y \mathop \in I_Y} \map g {x, y} \map {p_{X, Y} } {x, y}\)









From the definition of expectation, this last sum applies only when the last sum is absolutely convergent.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 3.2$: Expectation in the multivariate case: Theorem $3 \ \text{A}$




