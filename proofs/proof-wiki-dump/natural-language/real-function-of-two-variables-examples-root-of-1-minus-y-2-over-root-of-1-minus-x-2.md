# 

Source: https://proofwiki.org/wiki/Real_Function_of_Two_Variables/Examples/Root_of_1_minus_y%5E2_over_Root_of_1_minus_x%5E2

Examples of Real Functions of Two Variables
Let $z$ denote the function defined as:

$z = \dfrac {\sqrt {1 - y^2} } {\sqrt {1 - x^2} }$
The domain of $z$ is:

$\Dom z = \openint {-1} 1 \times \closedint {-1} 1$


Proof
The domain of $z$ is given implicitly and conventionally.
What is meant is:

$z: S \to \R$ is the function defined on the largest possible subset $S$ of $\R^2$ such that:
$\forall \tuple {x, y} \in S: \map z {x, y} = \dfrac {\sqrt {1 - y^2} } {\sqrt {1 - x^2} }$

From Domain of Real Square Root Function, in order for the real square root function to be defined, its argument must be non-negative.
Hence for $z$ to be defined, it is necessary for:














\(\ds 1 - y^2\)

\(\ge\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds y^2\)

\(\le\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \size y\)

\(\le\)







\(\ds 1\)









Similarly:

$\size x \le 1$
But because $\sqrt {1 - x^2}$ is the denominator of the right hand side, it cannot be zero.

So it follows that for $z$ to be defined, it must be the case that:

$-1 \le y \le 1$
and:

$-1 < x < 1$
Hence the result.
$\blacksquare$


Sources
1963: Morris Tenenbaum and Harry Pollard: Ordinary Differential Equations ... (previous) ... (next): Chapter $1$: Basic Concepts: Lesson $2 \text C$: Function of Two Independent Variables: Example $2.62: 1$




