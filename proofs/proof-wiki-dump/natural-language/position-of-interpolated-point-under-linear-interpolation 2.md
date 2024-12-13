# 

Source: https://proofwiki.org/wiki/Position_of_Interpolated_Point_under_Linear_Interpolation

Theorem
Let $f$ be a real function.
Let $y_1, y_2, \ldots, y_n$ be known values of $f$ corresponding to $x_1, x_2, \ldots, x_n$ respectively.
Let $x'$ be in the domain of $f$ such that $x_i < x' < x_{i + 1}$.
Let $y' = \map f {x'}$ be determined according to linear interpolation.
Then:

$y' = y_i + \dfrac {\paren {x' - x_i} \paren {y_{i + 1} - x_i} } {x_{i + 1} - x_i}$


Proof
By definition of linear interpolation, the three points $\tuple {x_i, y_i}$, $\tuple {x', y'}$ and $\tuple {x_{i + 1}, y_{i + 1} }$ are all collinear.
Then:














\(\ds \dfrac {y' - y_i} {x' - x_i}\)

\(=\)







\(\ds \dfrac {y_{i + 1} - y_i} {x_{i + 1} - x_i}\)





Two-Point Form of Equation of Straight Line in Plane








\(\ds \leadsto \ \ \)





\(\ds y' - y_i\)

\(=\)







\(\ds \dfrac {\paren {x' - x_i} \paren {y_{i + 1} - y_i} } {x_{i + 1} - x_i}\)





multiplying both sides by $x' - x_i$








\(\ds \leadsto \ \ \)





\(\ds y'\)

\(=\)







\(\ds y_i + \dfrac {\paren {x' - x_i} \paren {y_{i + 1} - y_i} } {x_{i + 1} - x_i}\)





rearranging



$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): interpolation
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): interpolation




