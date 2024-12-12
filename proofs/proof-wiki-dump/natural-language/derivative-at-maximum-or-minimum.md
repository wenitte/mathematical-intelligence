# 

Source: https://proofwiki.org/wiki/Derivative_at_Maximum_or_Minimum



Theorem
Let $f$ be a real function which is differentiable on the open interval $\openint a b$.
Let $f$ have a local minimum or local maximum at $\xi \in \openint a b$.

Then:

$\map {f'} \xi = 0$


Proof 1
By definition of derivative at a point:

$\dfrac {\map f x - \map f \xi} {x - \xi} \to \map {f'} \xi$ as $x \to \xi$

Suppose $\map {f'} \xi > 0$.
Then from Behaviour of Function Near Limit‎ it follows that:

$\exists I = \openint {\xi - h} {\xi + h}: \dfrac {\map f x - \map f \xi} {x - \xi} > 0$
provided that $x \in I$ and $x \ne \xi$.

Now let $x_1$ be any number in the open interval $\openint {\xi - h} \xi$.
Then:

$x_1 - \xi < 0$
and hence from:

$\dfrac {\map f {x_1} - \map f \xi} {x_1 - \xi} > 0$
it follows that:

$\map f {x_1} < \map f \xi$
Thus $f$ can not have a local minimum at $\xi$.

Now let $x_2$ be any number in the open interval $\openint \xi {\xi + h}$.
Then:

$x_2 - \xi > 0$
and hence from:

$\dfrac {\map f {x_2} - \map f \xi} {x_2 - \xi} > 0$
it follows that:

$\map f {x_2} > \map f \xi$
Thus $f$ can not have a local maximum at $\xi$ either.

A similar argument can be applied to $-f$ to handle the case where $\map {f'} \xi < 0$.
The only other possibility is that $\map {f'} \xi = 0$, hence the result.
$\blacksquare$


Proof 2
By definition of local maximum:

$(1): \quad \map f {\xi + \epsilon} - \map f \xi < 0$
for sufficiently small $\epsilon \in \R_{>0}$.
Similarly, definition of local minimum:

$(2): \quad \map f {\xi + \epsilon} - \map f \xi > 0$
for sufficiently small $\epsilon \in \R_{>0}$.
Let it be assumed that $\map f {\xi + \epsilon}$ can be expanded, using Taylor's Theorem, in positive integer powers of $\epsilon$
Then:

$(3): \quad \map f {\xi + \epsilon} - \map f \xi = \epsilon \map {f'} \xi + \dfrac {\epsilon^2 \map {f' '} \xi} 2 + \map \OO {\epsilon^3}$
where $\map \OO {\epsilon^3}$ denotes big-$\OO$ notation.
That is, the quantity $\dfrac {\map \OO {\epsilon^3} } {\epsilon^3}$ is bounded.
From $(1)$ and $(2)$, at a local maximum or local minimum, the sign of $\map f {\xi + \epsilon} - \map f \xi$ is independent the sign of $\epsilon$ itself.
So from $(3)$ it follows that $\map {f'} \xi = 0$.
$\blacksquare$


Historical Note
The Derivative at Maximum or Minimum was first arrived at by Pierre de Fermat, anticipating the more formal techniques used in differential calculus.
This result was given by Gottfried Wilhelm von Leibniz in his $1684$ article Nova Methodus pro Maximis et Minimis, published in Acta Eruditorum.


Sources
1953: L. Harwood Clarke: A Note Book in Pure Mathematics ... (previous) ... (next): $\text {II}$. Calculus: Differentiation: Maximum, Minimum and Point of Inflection
1964: Milton Abramowitz and Irene A. Stegun: Handbook of Mathematical Functions ... (previous) ... (next): $3$: Elementary Analytic Methods: $3.4$ Limits, Maxima and Minima: $3.4.2 \ (1)$
1992: George F. Simmons: Calculus Gems ... (previous) ... (next): Chapter $\text {A}.13$: Fermat ($\text {1601}$ – $\text {1665}$)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): maximum (plural maxima)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): minimum (plural minima)
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): turning point
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): maximum (plural maxima)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): minimum (plural minima)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): turning point




