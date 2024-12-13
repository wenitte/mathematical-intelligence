# 

Source: https://proofwiki.org/wiki/Quadrature_of_Parabola



Theorem
Let $T$ be a parabola.
Consider the parabolic segment bounded by an arbitrary chord $AB$.
Let $C$ be the point on $T$ where the tangent to $T$ is parallel to $AB$.
Then the area $S$ of the parabolic segment $ABC$ of $T$ is given by:

$S = \dfrac 4 3 \triangle ABC$


Proof 1
Without loss of generality, consider the parabola $y = a x^2$.
Let $A, B, C$ be the points:














\(\ds A\)

\(=\)







\(\ds \tuple {x_0, a {x_0}^2}\)




















\(\ds B\)

\(=\)







\(\ds \tuple {x_2, a {x_2}^2}\)




















\(\ds C\)

\(=\)







\(\ds \tuple {x_1, a {x_1}^2}\)













The slope of the tangent at $C$ is given by using:

$\dfrac {\d y} {\d x} 2 a x_1$
which is parallel to $AB$.
Thus:

$2 a x_1 = \dfrac {a {x_0}^2 - a {x_2}^2} {x_0 - x_2}$
which leads to:

$x_1 = \dfrac {x_0 + x_2} 2$
So the vertical line through $C$ is a bisector of $AB$, at point $P$.
Complete the parallelogram $CPBQ$.
Also, find $E$ which is the point where the tangent to $T$ is parallel to $BC$.
By the same reasoning, the vertical line through $E$ is a bisector of $BC$, and so it also bisects $BP$ at $H$.
Next:














\(\ds EF\)

\(=\)







\(\ds a \paren {\frac {x_1 + x_2} 2}^2 - \paren {a x_1^2 + 2 a x_1 \frac {x_2 - x_1} 2}\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \paren {\paren {x_1 + x_2}^2 - 4 {x_1}^2 + 4 x_1 \paren {x_2 - x_1} }\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \paren { {x_1}^2 - 2 x_1 x_2 + {x_2}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac a 4 \paren {x_2 - x_1}^2\)









At the same time:














\(\ds QB\)

\(=\)







\(\ds a {x_2}^2 - \paren {a {x_1}^2 + 2 a x_1 \paren {x_2 - x_2} }\)




















\(\ds \)

\(=\)







\(\ds a \paren { {x_1}^2 - 2 x_1 x_2 + {x_2}^2}\)




















\(\ds \)

\(=\)







\(\ds a \paren {x_2 - x_1}^2\)









So:

$QB = 4 FE = FH$
and because $CB$ is the diagonal of a parallelogram:

$2 FE = 2 EG = FG$
This implies that:

$2 \triangle BEG = \triangle BGH$
and:

$2 \triangle CEG = \triangle BGH$
So:

$\triangle BCE = \triangle BGH$
and so as $\triangle BCP = 4 \triangle BGH$ we have that:

$BCE = \dfrac {\triangle BCP} 4$

A similar relation holds for $\triangle APC$:




so it can be seen that:

$\triangle ABC = 4 \paren {\triangle ADC + \triangle CEB}$
Similarly, we can create four more triangles underneath $\triangle ADC$ and $\triangle CEB$ which are $\dfrac 1 4$ the area of those combined, or $\dfrac 1 {4^2} \triangle ABC$.
This process can continue indefinitely.
So the area $S$ is given as:

$S = \triangle ABC \paren {1 + \dfrac 1 4 + \dfrac 1 {4^2} + \cdots}$
But from Sum of Geometric Sequence it follows that:

$S = \triangle ABC \paren {\dfrac 1 {1 - \dfrac 1 4} } = \dfrac 4 3 \triangle ABC$
$\blacksquare$


Proof 2
Let $T$ be the parabola which is the locus of points $\tuple {x, y}$ satisfying $y = x^2$.
By Area of Triangle Inscribed in Parabola:

the point $C$ where the tangent to $T$ at $C$ is parallel to $AB$ has $x$-coordinate $\dfrac 1 2 \paren {x_0 + x_2}$.
Let $d$ be the horizontal distance between $A$ and $B$.
By Area of Triangle Inscribed in Parabola:

$\map \AA {\triangle ABC} = \dfrac 1 8 d^3$
Now construct two triangles.  
One is $BC$ bisected with point $E$ on the parabola, forming:

$\triangle EBC$
The other is $AC$ bisected with point $D$ on the parabola, forming:

$\triangle DAC$
For each triangle, the length along the $x$-coordinate $\Delta x$ is equal to $\dfrac d 2$.
The area of each triangle is then:

$\AA = \dfrac 1 8 \paren {\dfrac d 2}^3 = \dfrac 1 8 \cdot \dfrac 1 8 d^3$
From above:

$\map \AA {\triangle ABC} = \dfrac 1 8 d^3$
Thus

$\map \AA {\triangle EBC} = \map \AA {\triangle DAC} = \dfrac 1 8 \map \AA {ABC}$
For two triangles, the area together is: 

$\map \AA {\triangle DAC} + \map \AA {\triangle EBC}  = \dfrac 1 4 \map \AA {ABC}$
By a variant of the method of exhaustion, the total area over the parabola and under $AB$ is:

$\map \AA {ABC} \cdot \paren {1 + \dfrac 1 4 + \dfrac 1 {4^2} + \dots}$

This article, or a section of it, needs explaining.In particular: If we are going to reference a method of construction, it is mandatory according to the site philosophy to link directly to it. So this "variant" needs its own page in order to make this proof tight.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
By Sum of Infinite Geometric Sequence:

$1 + \dfrac 1 4 + \dfrac 1 {4^2} + \dots = \dfrac 4 3$
Hence the total area is:

$S = \map \AA {ABC} \cdot \dfrac 4 3$
$\blacksquare$


Historical Note
The quadrature of a parabola was first given by Archimedes in his book On the Quadrature of the Parabola.  It is also discussed in The Method.
Two proofs are given.  His purely geometric proof was the same as the one documented here, except that he used a different technique to prove:

$\triangle ADC + \triangle CEB = \dfrac {\triangle ABC} 4$


Sources
1968: Murray R. Spiegel: Mathematical Handbook of Formulas and Tables ... (previous) ... (next): $\S 4$: Geometric Formulas: $4.24$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {B}.3$: Archimedes' Quadrature of the Parabola




