# 

Source: https://proofwiki.org/wiki/Equation_of_Straight_Line_in_Plane/Normal_Form



Theorem
Let $\LL$ be a straight line such that:

the perpendicular distance from $\LL$ to the origin is $p$
the angle made between that perpendicular and the $x$-axis is $\alpha$.

Then $\LL$ can be defined by the equation:

$x \cos \alpha + y \sin \alpha = p$


Polar Form
Let $\LL$ be defined in normal form:

$x \cos \alpha + y \sin \alpha = p$
Then $\LL$ can be presented in polar coordinates as:

$r \map \cos {\theta - \alpha} = p$


Proof 1


Let $A$ be the $x$-intercept of $\LL$.
Let $B$ be the $y$-intercept of $\LL$.

Let $A = \tuple {a, 0}$ and $B = \tuple {0, b}$.
From the Equation of Straight Line in Plane: Two-Intercept Form, $\LL$ can be expressed in the form:

$(1): \quad \dfrac x a + \dfrac y a = 1$

Then:














\(\ds p\)

\(=\)







\(\ds a \cos \alpha\)





Definition of Cosine of Angle








\(\ds \leadsto \ \ \)





\(\ds a\)

\(=\)







\(\ds \dfrac p {\cos \alpha}\)






















\(\ds p\)

\(=\)







\(\ds b \sin \alpha\)





Definition of Sine of Angle








\(\ds \leadsto \ \ \)





\(\ds b\)

\(=\)







\(\ds \dfrac p {\sin \alpha}\)










Substituting for $a$ and $b$ in $(1)$:














\(\ds \dfrac x a + \dfrac y a\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac {x \cos \alpha} p + \dfrac {y \sin \alpha} p\)

\(=\)







\(\ds 1\)














\(\ds \leadsto \ \ \)





\(\ds x \cos \alpha + y \sin \alpha\)

\(=\)







\(\ds p\)









$\blacksquare$


Proof 2

Let $P = \tuple {x, y}$ be an arbitrary point on $\LL$.
Let $O$ be the origin of the Cartesian plane in which $\LL$ is embedded.
Let $PQ$ be the perpendicular dropped from $P$ to the $x$-axis.
Let $QS$ be the perpendicular dropped from $Q$ to the line $ON$.
Let $PR$ be the perpendicular dropped from $P$ to the line $QS$.
By definition of cosine:

$OS = OQ \cos \alpha$
By definition of sine:

$PR = PQ \sin \alpha$
Then:














\(\ds p\)

\(=\)







\(\ds ON\)




















\(\ds \)

\(=\)







\(\ds OS + SN\)




















\(\ds \)

\(=\)







\(\ds OS + PR\)




















\(\ds \)

\(=\)







\(\ds OQ \cos \alpha + PQ \sin \alpha\)




















\(\ds \)

\(=\)







\(\ds x \cos \alpha + y \sin \alpha\)









$\blacksquare$


Also known as
The normal form of a straight line in the plane is also known as the canonical form.
Some sources refer to it as the $\tuple {p, \alpha}$ form, after the symbols conventionally used to define it.


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 10$: Formulas from Plane Analytic Geometry: $10.6$: Normal Form for Equation of Line

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.If you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1933: D.M.Y. Sommerville: Analytical Conics (3rd ed.) ... (previous) ... (next): Chapter $\text {II}$. The Straight Line: $4$. Special forms of the equation of a straight line: $(5)$ Normal or canonical form




