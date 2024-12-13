# 

Source: https://proofwiki.org/wiki/Newton%27s_Method



Proof Technique
Newton's Method is a method of solving an equation expressed as a real function for which there may be no convenient closed form solution.
The derivative of the function has to be known in order to use Newton's Method.
Let the equation to be solved be of the form:

$y = \map f x$
Let the value of $x$ be required for a given $y$.
Let $x_1$ be an initial guess.
Then an iterative improvement on $x_1$ is of the form:

$x_2 = x_1 - \dfrac {\map f {x_1} - y} {\map {f'} {x_1} }$
where $\map {f'} {x_1}$ is the derivative of $f$ with respect to $x$ evaluated at $x_1$.


Proof
The function $\map f x$ can be expanded about $x_1$ using Taylor's Theorem:

$\map f x = \map f {x_1} + \map {f'} {x_1} \paren {x - x_1} + \dfrac 1 2 \map {f} {x_1} \paren {x - x_1}^2 + \dotsb$

This series can be rewritten with an error term as follows:

$\map f x = \map f {x_1} + \map {f'} {x_1} \paren {x - x_1} + \epsilon$

This gives:














\(\ds \map f {x_1} + \map {f'} {x_1} \paren {x - x_1} + \epsilon\)

\(=\)







\(\ds y\)














\(\ds \leadsto \ \ \)





\(\ds \map {f'} {x_1} \paren {x - x_1}\)

\(=\)







\(\ds y - \map f {x_1} - \epsilon\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds x_1 + \dfrac {y - \map f {x_1} - \epsilon} {\map {f'} {x_1} }\)




















\(\ds \)

\(=\)







\(\ds x_1 - \dfrac {\map f {x_1} - y + \epsilon} {\map {f'} {x_1} }\)










For $\epsilon$ small enough the final term can be neglected:

$x_2 = x_1 - \dfrac {\map f {x_1} - y} {\map {f'} {x_1} }$
$\blacksquare$


Graphical Illustration
Newton's method is generally used to find the zeros of a polynomial.
The main idea is to draw a tangent line to a function at a given value (e.g. $x_1$) and the subsequent value (e.g. $x_2$) is where the tangent line intersects the $x$-axis.





Example
Newton's Method: $x^3 - 2 x - 5 = 0$
The real root of the cubic:

$x^3 - 2 x - 5 = 0$
can be found by using Newton's Method.
Its approximate value is:

$2 \cdotp 09455 \, 1$


Also see
Sequence of Approximations Converges Quadratically


Source of Name
This entry was named for Isaac Newton.


Sources

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Expressed in the below in a slightly different form. Need to check whether it is equivalent to the one given here.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): Newton's method




