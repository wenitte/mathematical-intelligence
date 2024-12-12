# 

Source: https://proofwiki.org/wiki/Area_between_Radii_and_Curve_in_Polar_Coordinates

Theorem
Let $C$ be a curve expressed in polar coordinates $\polar {r, \theta}$ as:

$r = \map g \theta$
where $g$ is a real function.

Let $\theta = \theta_a$ and $\theta = \theta_b$ be the two rays from the pole at angles $\theta_a$ and $\theta_b$ to the polar axis respectively.

Then the area $\AA$ between $\theta_a$, $\theta_b$ and $C$ is given by:

$\ds \AA = \int \limits_{\theta \mathop = \theta_a}^{\theta \mathop = \theta_b} \frac {\paren {\map g \theta}^2 \rd \theta} 2$
as long as $\paren {\map g \theta}^2$ is integrable.


Proof


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.In particular: In particular the terms are to be defined.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.

Although this article appears correct, it's inelegant. There has to be a better way of doing it.In particular: We haven't covered NSA on $\mathsf{Pr} \infty \mathsf{fWiki}$, and for a result as trivial as this one it seems like overkill.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Consider the area of the brown triangle.
This would be:

$a_\triangle = \dfrac 1 2 r^2 \map \sin {\delta \theta}$
We will be using nonstandard analysis, so let $\delta \theta = \varepsilon > 0$, an infinitesimal. 
Thus:

$a_\triangle = \dfrac 1 2 r^2 \sin \varepsilon$
Using the Power Series Expansion for Sine Function: 














\(\ds A_\triangle\)

\(=\)







\(\ds \frac 1 2 r^2 \paren {\varepsilon - \frac {\varepsilon^3} {3!} + \frac {\varepsilon^5} {5!} - \map \OO {\varepsilon^7} }\)





Power Series Expansion for Sine Function














\(\ds \)

\(=\)







\(\ds \frac 1 2 r^2 \varepsilon\)





$\varepsilon ^2 = 0$














\(\ds \AA\)

\(=\)







\(\ds \int_{\theta_a}^{\theta_b} \frac {\paren {\map g \theta}^2} 2 \rd \theta\)





Summing all areas of the triangles



$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 13.16$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): area
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): area




