# 

Source: https://proofwiki.org/wiki/Condition_for_Independence_of_Discrete_Random_Variables



Theorem
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$.

Then $X$ and $Y$ are independent if and only if there exist functions $f, g: \R \to \R$ such that the joint mass function of $X$ and $Y$ satisfies:

$\forall x, y \in \R: \map {p_{X, Y} } {x, y} = \map f x \map g y$


Proof
We have by definition of joint mass function that:

$x \notin \Omega_X \implies \map {p_{X, Y} } {x, y} = 0$
$y \notin \Omega_Y \implies \map {p_{X, Y} } {x, y} = 0$
Hence we only need to worry about values of $x$ and $y$ in their appropriate $\Omega$ spaces.


Necessary Condition
Suppose there exist functions $f, g: \R \to \R$ such that:

$\forall x, y \in \R: \map {p_{X, Y} } {x, y} = \map f x \map g y$
Then by definition of marginal probability mass function:

$\ds \map {p_X} x = \map f x \sum_y \map g y$
$\ds \map {p_Y} y = \map g y \sum_x \map f x$
Hence:














\(\ds 1\)

\(=\)







\(\ds \sum_{x, y} \map {p_{X, Y} } {x, y}\)





Definition of Joint Probability Mass Function














\(\ds \)

\(=\)







\(\ds \sum_{x, y} \map f x \map g y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \sum_x \map f x \sum_y \map g y\)










So it follows that:














\(\ds \map {p_{X, Y} } {x, y}\)

\(=\)







\(\ds \map f x \map g y\)





by hypothesis














\(\ds \)

\(=\)







\(\ds \map f x \map g y \sum_x \map f x \sum_y \map g y\)





from above














\(\ds \)

\(=\)







\(\ds \paren {\map f x \sum_y \map g y} \paren {\map g y \sum_x \map f x}\)




















\(\ds \)

\(=\)







\(\ds \map {p_X} x \map {p_Y} y\)





from above



Hence the result from the definition of independent random variables.
$\blacksquare$


Sufficient Condition
Suppose that $X$ and $Y$ are independent.
Then we can take the variables:

$\map f x = \map {p_X} x$
$\map g y = \map {p_Y} y$
and the result follows by definition of independence.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 3.3$: Independence of discrete random variables: Theorem $3 \ \text{B}$




