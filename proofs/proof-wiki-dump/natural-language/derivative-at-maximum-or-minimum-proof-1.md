# 

Source: https://proofwiki.org/wiki/Derivative_at_Maximum_or_Minimum/Proof_1

Theorem
Let $f$ be a real function which is differentiable on the open interval $\openint a b$.
Let $f$ have a local minimum or local maximum at $\xi \in \openint a b$.

Then:

$\map {f'} \xi = 0$


Proof
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


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 11.2$




