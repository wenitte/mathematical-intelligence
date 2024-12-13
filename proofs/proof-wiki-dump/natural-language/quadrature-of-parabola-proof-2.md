# 

Source: https://proofwiki.org/wiki/Quadrature_of_Parabola/Proof_2

Theorem
Let $T$ be a parabola.
Consider the parabolic segment bounded by an arbitrary chord $AB$.
Let $C$ be the point on $T$ where the tangent to $T$ is parallel to $AB$.
Then the area $S$ of the parabolic segment $ABC$ of $T$ is given by:

$S = \dfrac 4 3 \triangle ABC$


Proof
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





