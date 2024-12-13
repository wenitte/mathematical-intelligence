# 

Source: https://proofwiki.org/wiki/Point_of_Perpendicular_Intersection_on_Real_Line_from_Points_in_Complex_Plane



Theorem
Let $a, b \in \C$ be complex numbers represented by the points $A$ and $B$ respectively in the complex plane.
Let $x \in \R$ be a real number represented by the point $X$ on the real axis such that $AXB$ is a right triangle with $X$ as the right angle.
Then:

$x = \dfrac {a_x - b_x \pm \sqrt {a_x^2 + b_x^2 + 2 a_x b_x - 4 a_y b_y} } 2$
where:

$a = a_x + a_y i, b = b_x + b_y i$

There is believed to be a mistake here, possibly a typo.In particular: What rubbish. Working on it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by reviewing it, and either correcting it or adding some explanatory material as to why you believe it is actually correct after all.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Mistake}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Proof
From Geometrical Interpretation of Complex Subtraction, the lines $XA$ and $XB$ can be represented by the complex numbers $a - x$ and $b - x$.




From Multiplication by Imaginary Unit is Equivalent to Rotation through Right Angle $a - x$ and $b - x$ are perpendicular if and only if either:

$a - x = r i \paren {b - x}$
for some real numbers $r \in \R$.
That is, if and only if $\dfrac {a - x} {b - x}$ are purely imaginary.

Thus:














\(\ds \dfrac {a - x} {b - x}\)

\(=\)







\(\ds r i\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {\paren {a - x} \paren {\overline b - x} } {\paren {b - x} \paren {\overline b - x} }\)

\(=\)







\(\ds r i\)














\(\ds \leadsto \ \ \)





\(\ds \paren {a_x + a_y i - x} \paren {b_x - b_y i - x}\)

\(=\)







\(\ds r' i\)





for some $r' \in \R$: denominator is real








\(\ds \leadsto \ \ \)





\(\ds a_x b_x - a_x b_y i - a_x x + a_y b_x i + a_y b_y - a_y x i - x b_x - x b_y i + x^2\)

\(=\)







\(\ds r' i\)














\(\ds \leadsto \ \ \)





\(\ds a_x b_x - a_x x + a_y b_y - x b_x + x^2\)

\(=\)







\(\ds 0\)





equating real parts








\(\ds \leadsto \ \ \)





\(\ds x^2 - \paren {a_x + b_x} x + a_x b_x + a_y b_y\)

\(=\)







\(\ds 0\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac {a_x + b_x \pm \sqrt {\paren {a_x + b_x}^2 - 4 \paren {a_x b_x + a_y b_y} } } 2\)





Quadratic Formula














\(\ds \)

\(=\)







\(\ds \dfrac {a_x + b_x \pm \sqrt {a_x^2 + b_x^2 + 2 a_x b_x - 4 a_x b_x - 4 a_y b_y} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {a_x + b_x \pm \sqrt {a_x^2 + b_x^2 - 2 a_x b_x - 4 a_y b_y} } 2\)









$\blacksquare$


This article needs proofreading.In particular: This did not work out as neatly as I expected. I may have made a mistake somewhere. The original example which inspired this page was a specific case where the numbers worked out neatly.If you believe all issues are dealt with, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Examples
Example: $a = 1 - 3 i, b = -3 + 4 i$
Let $a = 1 - 3 i, b = -3 + 4 i$.
The point $X$ on the positive half of the real axis is at:

$x = 3$




