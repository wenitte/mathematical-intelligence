# 

Source: https://proofwiki.org/wiki/Quadratic_Irrational_is_Root_of_Quadratic_Equation

Theorem
Let $x$ be a quadratic irrational.
Then $x$ is a solution to a quadratic equation with rational coefficients.


Proof
Let $x = r + s \sqrt n$.
From Solution to Quadratic Equation, the solutions of $a x^2 + b x + c$ are:

$x = \dfrac {-b \pm \sqrt {b^2 - 4 a c}} {2 a}$
given the appropriate condition on the discriminant.

So if $x = r + s \sqrt n$ is a solution, then so is $x = r - s \sqrt n$.

Hence we have:














\(\ds \left({x - r + s \sqrt n}\right) \left({x - r - s \sqrt n}\right)\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \left({x-r}\right)^2 - \left({s \sqrt n}\right)^2\)

\(=\)







\(\ds 0\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds x^2 - 2 r x + r^2 - s^2 n\)

\(=\)







\(\ds 0\)










As $r$ and $s$ are rational and $n$ is an integer, it follows that $-2 r$ and $r^2 - s^2 n$ are also rational from Rational Numbers form Field.
Hence the result.
$\blacksquare$





