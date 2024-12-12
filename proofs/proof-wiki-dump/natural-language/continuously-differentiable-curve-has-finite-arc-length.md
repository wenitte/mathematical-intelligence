# 

Source: https://proofwiki.org/wiki/Continuously_Differentiable_Curve_has_Finite_Arc_Length


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.
Theorem
Let $y = \map f x$ be a real function which is continuous on the closed interval $\closedint a b$ and continuously differentiable on the open interval $\openint a b$.
The definite integral: 

$s = \ds \int_{x \mathop = a}^{x \mathop = b} \sqrt {1 + \paren {\frac {\d y} {\d x} }^2} \rd x$
exists, and is called the arc length of $f$ between $a$ and $b$.


Proof
It intuitively makes sense to define the length of a line segment to be the distance between the two end points, as given by the Distance Formula:

$\sqrt {\paren {x_1 - x_2}^2 + \paren {y_1 - y_2}^2}$
Similarly, it is reasonable to assume that the actual length of the curve would be approximately equal to the sum of the lengths of each of the line segments, as shown:



This article contains statements that are justified by handwavery.In particular: The intuitive arguments need to be replaced with something more rigorous, which would probably happen on another page and be linked.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
To calculate the sum of the length of these line segments, divide $\closedint a b$ into any number of closed subintervals of the form $\closedint {x_{i - 1} } {x_i}$ where:

$a = x_0 < x_1 < \dotsb < x_{k - 1} < x_k = b$
Define:

$\Delta x_i = x_i - x_{i - 1}$
$\Delta y_i = y_i - y_{i - 1}$
As the length of the $i$th line segment is $\sqrt {\paren {\Delta x_i}^2 + \paren {\Delta y_i}^2}$, the sum of all these line segments is given by:

$\ds \sum_{i \mathop = 1}^k \ \sqrt {\paren {\Delta x_i}^2 + \paren {\Delta y_i}^2}$













\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \ \sqrt {\paren {\Delta x_i}^2 + \paren {\frac {\Delta y_i} {\Delta x_i} {\Delta x_i} }^2}\)





multiply the second term in the radicand by $1 = \dfrac {\Delta x_i} {\Delta x_i}$














\(\ds \)

\(=\)







\(\ds \sum_{i \mathop = 1}^k \ \sqrt {1 + \paren {\frac {\Delta y_i} {\Delta x_i} }^2} \Delta x_i\)





factor $\Delta x_i$ out of the radicand



Thus the approximate arc length is given by the sum:

$\ds s \approx \sum_{i \mathop = 1}^k \sqrt {1 + \paren {\frac {\Delta y_i} {\Delta x_i} }^2}\Delta x_i$
Recall that by hypothesis:

$f$ is continuous on $\closedint a b$
$f$ is differentiable on $\openint a b$.
Thus the Mean Value Theorem can be applied.
In every open interval $\openint {x_i} {x_{i - 1} }$ there exists some $c_i$ such that:

$D_x \, \map f {c_i} = \dfrac {\Delta y_i} {\Delta x_i}$
Plugging this into the above sum we have:

$\ds s \approx \sum_{i \mathop = 1}^k \ \sqrt {1 + \paren {\frac {\d y} {\d x} }^2} \Delta x_i$
By hypothesis, $D_x f$ is continuous.
As Square of Real Number is Non-Negative the radicand is always positive.
From Continuity of Root Function and Limit of Composite Function, $\sqrt {1 + \paren {\dfrac {\d y} {\d x} }^2}$ is continuous as well.
Because Continuous Real Function is Darboux Integrable, there exists a definite integral that confirms the intuitive notion that there is a value that represents the exact length of the curve as the limit of the above Riemann sum.
This definite integral is:

$\ds s = \int_{x \mathop = a}^{x \mathop = b} \sqrt {1 + \paren {\frac {\d y} {\d x} }^2} \rd x$
$\blacksquare$


Sources
2005: Roland E. Larson, Robert P. Hostetler and Bruce H. Edwards: Calculus (8th ed.) $\S 7.4$




