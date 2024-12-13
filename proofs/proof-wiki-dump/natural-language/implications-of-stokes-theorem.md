# 

Source: https://proofwiki.org/wiki/Implications_of_Stokes%27_Theorem


This page has been identified as a candidate for refactoring of advanced complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.


Theorem
Stokes' Theorem implies all of the following results:

Classical Stokes' Theorem
Green's Theorem
Gauss's Theorem
Fundamental Theorem of Calculus
Cauchy's Residue Theorem


Proof
Classical Stokes' Theorem
We note that given $f_1, f_2, f_3: \R^3 \to \R$, $f_1 \rd x + f_2 \rd y + f_3 \rd z$ is a $1$-form defined on a surface.
Since we are integrating over the boundary of a surface, which is a $1$-manifold, we may use the general Stokes' theorem:














\(\ds \oint_{\partial S} f_1 \rd x + f_2 \rd y + f_3 \rd z\)

\(=\)







\(\ds \iint_S \map \rd {f_1 \rd x + f_2 \rd y + f_3 \rd z}\)




















\(\ds \)

\(=\)







\(\ds \iint_S \frac {\partial f_1} {\partial x} \rd x \wedge \d x + \frac {\partial f_1} {\partial y} \rd y \wedge \d x + \frac {\partial f_1} {\partial z} \rd z \wedge \d x\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\partial f_2} {\partial x} \rd x \wedge \d y + \frac {\partial f_2} {\partial y} \rd y \wedge \d y + \frac {\partial f_2} {\partial z} \rd z \wedge \d y\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds \frac {\partial f_3} {\partial x} \rd x \wedge \d z + \frac {\partial f_3} {\partial y} \rd z \wedge \d y + \frac {\partial f_3} {\partial z} \rd z \wedge \d z\)




















\(\ds \)

\(=\)







\(\ds \iint \paren {\frac {\partial f_2} {\partial x} - \frac {\partial f_1} {\partial y} } \rd x \wedge \d y + \paren {\frac {\partial f_3} {\partial y} - \frac {\partial f_2} {\partial z} } \rd y \wedge \d z + \paren {\frac {\partial f_1} {\partial z} - \frac{\partial f_3}{\partial x} } \rd z \wedge \d x\)










If we define $\mathbf F: \R^3 \to \R^3$ as:

$\mathbf F = f_1 \mathbf e_1 + f_2 \mathbf e_2 + \mathbf e_3$
we recognize this expression as:

$\nabla \times \mathbf F$
with:

$\d y \wedge \d z$ replacing $\mathbf e_1$
$\d z \wedge \d x$ replacing $\mathbf e_2$
and:

$\d x \wedge \d y$ replacing $\mathbf e_3$.

This article is incomplete.In particular: It must be shown that the wedges give area on the surface.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Green's Theorem
We note that given $A, B: \R^2 \to \R$, $A \rd x + B \rd y$ is a $1$-form defined on some open set $U \subset \R^2$.
Since we are integrating a $1$-form on $\partial U$, a $1$-manifold, we may use the general Stokes' theorem: 














\(\ds \oint_{\partial U} \paren {A \rd x + B \rd y}\)

\(=\)







\(\ds \iint_U \map \rd {A \rd x + B \rd y}\)




















\(\ds \)

\(=\)







\(\ds \iint_U \paren {\frac {\partial A} {\partial x} \rd x \wedge \d x + \frac {\partial A} {\partial y} \rd y \wedge \d x + \frac {\partial B} {\partial x} \rd x \wedge \d y + \frac {\partial B} {\partial y} \rd y \wedge \d y}\)




















\(\ds \)

\(=\)







\(\ds \iint_U \paren {0 - \frac {\partial A} {\partial y} \rd y \wedge \d x + \frac {\partial B} {\partial x} \rd x \wedge \d y + 0}\)




















\(\ds \)

\(=\)







\(\ds \iint_U \paren {\frac {\partial B} {\partial x} - \frac{ \partial A} {\partial y} } \rd x \rd y\)









$\Box$


Divergence Theorem
We note that the expression $\mathbf F \cdot \mathbf n \rd S$ is a $2$-form, since it takes two vectors ($F$ and $n$) and outputs a scalar.
Less formally:

$\mathbf F \cdot \mathbf n \rd S = $ (scalar)(area $2$-form) $=$ $2$-form
Since we are integrating this expression over the boundary of a region in three space, which is a $2$-manifold, we may use the general Stokes' theorem:














\(\ds \iint_{\partial U} \mathbf F \cdot \mathbf n \rd S\)

\(=\)







\(\ds \iiint_U \map \rd {\mathbf F \cdot \mathbf n \rd S}\)




















\(\ds \)

\(=\)







\(\ds \iiint_U \map \rd {\mathbf F \cdot \mathbf n} \rd S + \mathbf F \cdot \mathbf n \rd^2 S\)




















\(\ds \)

\(=\)







\(\ds \iiint_U \map \rd {\mathbf F \cdot \mathbf n} \rd S\)










This article is incomplete.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by expanding it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Stub}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Fundamental Theorem of Calculus
Given a function $f: \R \to \R$, integrable on some open set $I$, we can recognize such a function a $0$-form -- that is, defined at a point and taking no vectors as inputs.
Hence the exterior derivative is just the ordinary differential:

$\map {f'} x \rd x$
Since the ordinary differential is a $1$-form, and we are integrating on a $1$-manifold, we may use the general Stokes' theorem:

$\ds \int_I \map f x \rd x = \int_{\partial I} \map f x$
By Induced Orientations on Boundaries, $\partial I = \set {x_0', x_1}$ for some points $x_0, x_1$ where $y'$ indicates a point with "negative" orientation.
We then have

$\ds \int_{\partial I} \map f x = -\map f {x_0} + \map f {x_1} = \map f {x_1} - \map f {x_0}$
$\Box$


Cauchy's Residue Theorem
Let $z = x + iy$ and $\map f z = \map u {x, y} + i \map v {x, y}$ for two real functions $u, v$.
Let $D$ be a disk and its boundary $\partial D = C$ a circle.
Then by Stokes' Theorem:

$\ds \int_C \map f z \rd z = \int_C \map u z \rd x + \map v z \rd y = \int_D \frac {\partial u} {\partial y} - \frac {\partial v} {\partial x}$
which is zero if $f$ satisfies the Cauchy-Riemman conditions.
$\blacksquare$





