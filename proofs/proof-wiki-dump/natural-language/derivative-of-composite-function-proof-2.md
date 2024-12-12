# 

Source: https://proofwiki.org/wiki/Derivative_of_Composite_Function/Proof_2



Theorem
Let $I, J$ be open real intervals.
Let $g : I \to J$ and $f : J \to \R$ be real functions.

Let $h : I \to \R$ be the real function defined as:

$\forall x \in I: \map h x = \map {f \circ g} x = \map f {\map g x}$

Then, for each $x_0 \in I$ such that:

$g$ is differentiable at $x_0$
$f$ is differentiable at $\map g {x_0}$
it holds that $h$ is differentiable at $x_0$ and:

$\map {h'} {x_0} = \map {f'} {\map g {x_0}} \map {g'} {x_0}$
where $h'$ denotes the derivative of $h$.

Using the $D_x$ notation:

$\map {D_x} {\map f {\map g x} } = \map {D_{\map g x} } {\map f {\map g x} } \map {D_x} {\map g x}$


Proof
Let $\map g x = y$, and let:














\(\ds \map g {x + \delta x}\)

\(=\)







\(\ds y + \delta y\)














\(\ds \leadsto \ \ \)





\(\ds \delta y\)

\(=\)







\(\ds \map g {x + \delta x} - \map g x\)










Thus:

$\delta y \to 0$ as $\delta x \to 0$
and:

$(1): \quad \dfrac {\delta y} {\delta x} \to \map {g'} x$

There are two cases to consider:


Case 1
Suppose $\map {g'} x \ne 0$ and that $\delta x$ is small but non-zero.
Then $\delta y \ne 0$ from $(1)$ above, and:














\(\ds \lim_{\delta x \mathop \to 0} \frac {\map h {x + \delta x} - \map h x} {\delta x}\)

\(=\)







\(\ds \lim_{\delta x \mathop \to 0} \frac {\map f {\map g {x + \delta x} } - \map f {\map g x} } {\map g {x + \delta x} - \map g x} \frac {\map g {x + \delta x} - \map g x} {\delta x}\)




















\(\ds \)

\(=\)







\(\ds \lim_{\delta x \mathop \to 0} \frac {\map f {y + \delta y} - \map f y} {\delta y} \frac {\delta y} {\delta x}\)




















\(\ds \)

\(=\)







\(\ds \map {f'} y \map {g'} x\)









hence the result.
$\Box$


Case 2
Now suppose $\map {g'} x = 0$ and that $\delta x$ is small but non-zero.
Again, there are two possibilities:


Case 2a
If $\delta y = 0$, then $\dfrac {\map h {x + \delta x} - \map h x} {\delta x} = 0$.
Hence the result.
$\Box$


Case 2b
If $\delta y \ne 0$, then:

$\dfrac {\map h {x + \delta x} - \map h x} {\delta x} = \dfrac {\map f {y + \delta y} - \map f y} {\delta y} \dfrac {\delta y} {\delta x}$

As $\delta y \to 0$:

$(1): \quad \dfrac {\map f {y + \delta y} - \map f y} {\delta y} \to \map {f'} y$
$(2): \quad \dfrac {\delta y} {\delta x} \to 0$

Thus:

$\ds \lim_{\delta x \mathop \to 0} \frac {\map h {x + \delta x} - \map h x} {\delta x} \to 0 = \map {f'} y \map {g'} x$
Again, hence the result.
$\Box$

All cases have been covered, so by Proof by Cases, the result is complete.
$\blacksquare$


Also presented as
The Derivative of Composite Function is also often seen presented using Leibniz's notation for derivatives: 

$\dfrac {\d y} {\d x} = \dfrac {\d y} {\d u} \cdot \dfrac {\d u} {\d x}$
or:

$\dfrac \d {\d x} \map u v = \dfrac {\d u} {\d v} \cdot \dfrac {\d v} {\d x}$
where $\dfrac {\d y} {\d x}$ denotes the derivative of $y$ with respect to $x$.

Some sources go so far as to mix their notation and present something like this:

$y' = \dfrac {\d f} {\d g} \map {g'} x$

Also to be mentioned is:

$D_x^1 w = D_u^1 w \, D_x^1 u$
or:

${D_x}^1 w = {D_u}^1 w \, {D_x}^1 u$
where ${D_x}^k u$ denotes the $k$th derivative of $u$ with respect to $x$.





