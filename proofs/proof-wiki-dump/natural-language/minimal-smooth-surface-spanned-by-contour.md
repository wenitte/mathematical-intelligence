# 

Source: https://proofwiki.org/wiki/Minimal_Smooth_Surface_Spanned_by_Contour

Theorem
Let $\map z {x, y}: \R^2 \to \R$ be a real-valued function.
Let $\Gamma$ be a closed contour in $3$-dimensional Euclidean space.
Then the smooth surface of least area spanned by the contour $\Gamma$ has to satisfy the following Euler's equation:

$r \paren {1 + q^2} - 2 s p q + t \paren {1 + p^2} = 0$
where:














\(\ds p\)

\(=\)







\(\ds z_x\)




















\(\ds q\)

\(=\)







\(\ds z_y\)




















\(\ds r\)

\(=\)







\(\ds z_{xx}\)




















\(\ds s\)

\(=\)







\(\ds z_{xy}\)




















\(\ds t\)

\(=\)







\(\ds z_{yy}\)









with subscript denoting respective partial derivatives.
In other words, its mean curvature has to vanish.


Proof
The surface area for a smooth surface embedded in $3$-dimensional Euclidean space is given by:

$\ds A \sqbrk z = \iint_\Gamma \sqrt {1 + z_x^2 + z_y^2} \rd x \rd y$

This article needs to be linked to other articles.In particular: We need a link to the aboveYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
It follows that:














\(\ds \dfrac \d {\d x} \frac \partial {\partial z_x} \sqrt {1 + z_x^2 + z_y^2}\)

\(=\)







\(\ds \dfrac \d {\d x} \frac {z_x} {\sqrt {1 + z_x^2 + z_y^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {z_{xx} + z_y^2 z_{xx} - z_x z_y z_{xy} } {\paren {1 + z_x^2 + z_y^2}^{\frac 3 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {r \paren {1 + q^2} - p q s } {\paren {1 + p^2 + q^2}^{\frac 3 2} }\)






















\(\ds \dfrac \d {\d y} \frac \partial {\partial z_y} \sqrt {1 + z_x^2 + z_y^2}\)

\(=\)







\(\ds \dfrac \d {\d y} \frac {z_y} {\sqrt {1 + z_x^2 + z_y^2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {z_{yy} + z_x^2 z_{yy} - z_x z_y z_{xy} } {\paren {1 + z_x^2 + z_y^2}^{\frac 3 2} }\)




















\(\ds \)

\(=\)







\(\ds \frac {t \paren {1 + p^2} - p q s } {\paren {1 + p^2 + q^2}^{\frac 3 2} }\)









By Euler's equation:

$\dfrac {r \paren {1 + q^2} - 2 s p q + t \paren {1 + p^2} } {\paren {1 + p^2 + q^2}^{\frac 3 2} } = 0$
Due to the smoothness of the surface, $1 + p^2 + q^2$ is bounded.
Hence, the following equation is sufficient:

$r \paren {1 + q^2} - 2 s p q + t \paren {1 + p^2} = 0$
Introduce the following change of variables:














\(\ds E\)

\(=\)







\(\ds 1 + p^2\)




















\(\ds F\)

\(=\)







\(\ds p q\)




















\(\ds G\)

\(=\)







\(\ds 1 + q^2\)




















\(\ds e\)

\(=\)







\(\ds \dfrac r {\sqrt {1 + p^2 + q ^2} }\)




















\(\ds f\)

\(=\)







\(\ds \dfrac s {\sqrt {1 + p^2 + q^2} }\)




















\(\ds g\)

\(=\)







\(\ds \dfrac t {\sqrt {1 + p^2 + q^2} }\)









Then Euler's equation can be rewritten as:

$\dfrac {E g - 2 F f + G e} {2 \paren {E G - F^2} } = 0$
By definition, mean curvature is:

$M = \dfrac {E g - 2 F f + G e} {2 \paren {E G - F^2} }$
Hence:

$M = 0$
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 1.5$: The Case of Several Variables




