# 

Source: https://proofwiki.org/wiki/Central_Field_is_Field_of_Functional


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\mathbf y$ be an $N$-dimensional vector.
Let $J$ be a functional, such that:

$\ds J \sqbrk {\mathbf y} = \int_a^b \map F {x, \mathbf y, \mathbf y'} \rd x$
Let the following be a central field:

$\map {\mathbf y'} x = \map {\boldsymbol \psi} {x, \mathbf y}$

Then this central field is a field of functional $J$.


Proof
Suppose:

$\ds \map g {x, \mathbf y} = \int_c^{\paren {x, \mathbf y} } \map F {x, \hat {\mathbf y}, \hat {\mathbf y}'} \rd x$
where $\hat {\mathbf y}$ is an extremal of $J$ connecting points $c$ and $\tuple {x, \mathbf y}$.


This article, or a section of it, needs explaining.In particular: Extremum or extremal? Can this be made consistent?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Define a field of directions in $R$ by the following:

$\map {\mathbf p} {x, \mathbf y, \mathbf y'} = \map {g_{\mathbf y} } {x, \mathbf y}$
where $\mathbf p$ stands for momentum.
Note, that it does not depend on the path defined by $\hat {\mathbf y}$, only on its endpoint at $\tuple {x, \mathbf y}$.
By definition, $ \map g {x, \mathbf y}$ is a geodetic distance $S$.
Hence, $g_\mathbf y$ does not explicitly depend on $\mathbf y'$.
Then:

$\map {g_{\mathbf y} } {x, \mathbf y} = \map {\mathbf p} {x, \mathbf y, \mathbf z}$
where $\mathbf z = \map {\mathbf z} {x, \mathbf y}$ denotes slope of the curve joining $c$ and $\tuple {x, \mathbf y}$ at the point $\tuple {x, \mathbf y}$.
Furthermore, since $g$ is a geodetic distance, it satisfies Hamilton-Jacobi equation:

$\ds \frac {\partial \map g {x, \mathbf y} } {\partial x} + \map H {x, \mathbf y, \map {g_{\mathbf y} } {x, \mathbf y} } = 0$
which together with the previous relation results in a system of equations:
$\quad \begin {cases}
\dfrac {\partial \map g {x, \mathbf y} } {\partial x} + \map H {x, \mathbf y, \map {\mathbf p} {x, \mathbf y, \mathbf z} } = 0 \\
\map {\mathbf z} {x, \mathbf y} = \map{\mathbf y'} x 
\end {cases}$
Differentiation with respect to $\mathbf y$ yields:
$\quad \begin {cases}
\dfrac {\partial \mathbf p} {\partial x} = -\dfrac {\partial H} {\partial \mathbf y} \\
\map {\mathbf z} {x,\mathbf y} = \map{\mathbf y'} x 
\end {cases}$
These are Euler's equations in canonical coordinates with a constraint on derivative.


This article, or a section of it, needs explaining.In particular: the last part is not exactly clear; where is the second Euler equation?You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Hence, the previously defined field of directions coincides with the field of functional.
$\blacksquare$


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 6.32$: The Field of a Functional




