# 

Source: https://proofwiki.org/wiki/Graph_of_Quadratic_describes_Parabola/Corollary_2

Theorem
The locus of the equation of the square root function on the non-negative reals:

$\forall x \in \R_{\ge 0}: \map f x = \sqrt x$
describes half of a parabola.


Proof
From Graph of Quadratic describes Parabola: Corollary 1, where:

$y = x^2$
is the equation of a parabola.
Let $f: \R \to \R$ be the real function defined as:

$\map f x = x^2$
From Square of Real Number is Non-Negative, the image of $f$ is $\R_{\ge 0}$.
Also we have from Positive Real Number has Two Square Roots:

$\forall x \in \R: \paren {-x}^2 = x^2$
Thus it is necessary to apply a bijective restriction upon $f$.
Let $g: \R_{\ge 0} \to \R_{\ge 0}$ be the bijective restriction of $f$ to $\R_{\ge 0} \times \R_{\ge 0}$:

$\forall x \in \R_{\ge 0}: \map g x = x^2$
From Inverse of Bijection is Bijection, $g^{-1}: \R_{\ge 0} \to \R_{\ge 0}$ is also a bijection.
By definition:

$\forall x \in \R_{\ge 0}: \map {g^{-1} } x = +\sqrt x$

Then from Graph of Inverse Mapping, the graph of $g^{-1}$ is the same as the graph of $g$, reflected in the line $x = y$.
As the graph of $f$ is a parabola, the graph of $g$ is also a parabola, but because of the restriction to $\R_{\ge 0}$, just half of it.
Thus the graph of $g^{-1}$ is also half a parabola.
$\blacksquare$


Sources
2008: Ian Stewart: Taming the Infinite ... (previous) ... (next): Chapter $6$: Curves and Coordinates: Functions




