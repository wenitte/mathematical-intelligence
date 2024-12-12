# 

Source: https://proofwiki.org/wiki/Condition_for_Independence_from_Product_of_Expectations/Corollary/Converse

Converse of Corollary to Condition for Independence from Product of Expectations
Let $\struct {\Omega, \Sigma, \Pr}$ be a probability space.
Let $X$ and $Y$ be discrete random variables on $\struct {\Omega, \Sigma, \Pr}$ such that:

$\expect {X Y} = \expect X \expect Y$

Then it is not necessarily the case that $X$ and $Y$ are independent.


Proof
Proof by Counterexample:
Let $X$ be a discrete random variable whose distribution is defined as:

$\map {p_X} {-1} = \map {p_X} 0 = \map {p_X} 1 = \dfrac 1 3$
Let $Y$ be the discrete random variable defined as:

$Y = \begin{cases}
0 & : X = 0 \\
1 & : X \ne 0
\end{cases}$

We have:














\(\ds \map {p_{X, Y} } {0, 1}\)

\(=\)







\(\ds 0\)




















\(\ds \map {p_X} 0 \map {p_Y} 1\)

\(=\)







\(\ds \frac 1 3 \cdot \frac 2 3 = \frac 2 9\)









So $X$ and $Y$ are dependent.

But:














\(\ds \expect {X, Y}\)

\(=\)







\(\ds \sum_{x, y} x y \map {p_{X,Y} } {x, y}\)




















\(\ds \)

\(=\)







\(\ds \paren {-1} \frac 1 3 + 0 \cdot \frac 1 3 + 1 \cdot \frac 1 3\)




















\(\ds \)

\(=\)







\(\ds 0\)




















\(\ds \expect X \expect Y\)

\(=\)







\(\ds 0 \cdot \frac 2 3\)




















\(\ds \)

\(=\)







\(\ds 0\)










So $\expect {X, Y} = \expect X \expect Y$ but $X$ and $Y$ are not independent.
$\blacksquare$


Sources
1986: Geoffrey Grimmett and Dominic Welsh: Probability: An Introduction ... (previous) ... (next): $\S 3.3$: Independence of discrete random variables: Example $13$




