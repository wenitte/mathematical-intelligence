# 

Source: https://proofwiki.org/wiki/Derivative_of_Complex_Composite_Function



Theorem
Let $f: D \to \C$ be a complex-differentiable function, where $D \subseteq \C$ is an open set.
Let $g: \Img f \to \C$ be a complex-differentiable function, where $\Img f$ denotes the image of $f$.

Define $h = f \circ g: D \to C$ as the composite of $f$ and $g$.

Then $h$ is complex-differentiable, and its derivative is defined as:

$\forall z \in D: \map {h'} z =  \map {f'} {\map g z} \map {g'} z$


Proof

This article needs to be linked to other articles.In particular: among general reference to results, maybe also some links to details on this "method of variations" approachYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Put $y = \map g z$.
Let $\delta z \in \C \setminus \set 0$.
Put $\delta y = \map g {z + \delta z} - y$, so:

$\map g {z + \delta z} = y + \delta y$

As $\delta z \to 0$, we have:

$(1): \quad \delta y \to 0$ by definition of continuity, as $g$ is continuous.
$(2): \quad \dfrac {\delta y} {\delta z} \to \map {g'} z$ by definition of complex-differentiability.

There are two cases to consider:


Case 1
Suppose $\map {g'} z \ne 0$.
When $\delta z \to 0$, we have $\delta y \ne 0$ from $(2)$, if $\cmod {\delta z}$ is sufficiently small.
Then:














\(\ds \lim_{\delta z \mathop \to 0} \frac {\map h {z + \delta z} - \map h z} {\delta z}\)

\(=\)







\(\ds \lim_{\delta z \mathop \to 0} \frac {\map f {\map g {z + \delta z} } - \map f {\map g z} } {\map g {z + \delta z} - \map g z} \frac {\map g {z + \delta z} - \map g z} {\delta z}\)




















\(\ds \)

\(=\)







\(\ds \lim_{\delta z \mathop \to 0} \frac {\map f {y + \delta y} - \map f y} {\delta y} \frac {\delta y} {\delta z}\)




















\(\ds \)

\(=\)







\(\ds \map {f'} y \map {g'} z\)





As $\delta y \to 0$, then $\dfrac {\map f {y + \delta y} - \map f y} {\delta y} \to \map {f'} y$



hence the result.
$\Box$


Case 2
Now suppose $\map {g'} z = 0$.
When $\delta z \to 0$, there are two possibilities:


Case 2a
If $\delta y = 0$, then:

$\dfrac {\map h {z + \delta z} - \map h z} {\delta z} = 0 = \map {f'} y \map {g'} z$
Hence the result.
$\Box$


Case 2b
If $\delta y \ne 0$, then:

$\dfrac {\map h {z + \delta z} - \map h z} {\delta z} = \dfrac {\map f {y + \delta y} - \map f y} {\delta y} \dfrac {\delta y} {\delta z}$

As $\delta y \to 0$:

$(1): \quad \dfrac {\map f {y + \delta y} - \map f y} {\delta y} \to \map {f'} y$
$(2): \quad \dfrac {\delta y} {\delta z} \to 0$

Thus:

$\ds \lim_{\delta z \mathop \to 0} \frac {\map h {z + \delta z} - \map h z} {\delta z} \to 0 = \map {f'} y \map {g'} z$
Again, hence the result.
$\Box$

All cases have been covered, so by Proof by Cases, the result is complete.
$\blacksquare$


Also known as
This is often informally referred to as the chain rule (for differentiation).


Also see
Derivative of Composite Function.


Sources
2001: Christian Berg: Kompleks funktionsteori: $\S 1.1$




