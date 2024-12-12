# 

Source: https://proofwiki.org/wiki/Derivative_of_Composite_Function/Proof_1

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
Let $f, g, x_0$ satisfy the conditions of the theorem.
Define $g^* : I \to \R$ as:

$\map {g^*} x = \begin{cases} \dfrac {\map g x - \map g {x_0}} {x - x_0} & : x \ne x_0 \\ \map {g'} {x_0} & : x = x_0 \end{cases}$
Then, for every $x \in I$:

$\paren 1: \quad \map g x - \map g {x_0} = \paren {x - x_0} \map {g^*} x$
for when $x = x_0$, both sides are equal to $0$.
Furthermore, by the definition of derivative, it follows that $g^*$ is continuous at $x_0$.

Define $y_0 := \map g {x_0}$
In the same way, define $f^* : J \to \R$ as:

$\map {f^*} y = \begin{cases} \dfrac {\map f y - \map f {y_0}} {y - y_0} & : y \ne y_0 \\ \map {f'} {y_0} & : y = y_0 \end{cases}$
Likewise, for every $y \in J$:

$\paren 2: \quad \map f y - \map f {y_0} = \paren {y - y_0} \map {f^*} y$
and $f^*$ is continuous at $y_0$.

Now, for every $x \in I$, we have:














\(\ds \map f {\map g x} - \map f {\map g {x_0} }\)

\(=\)







\(\ds \map f {\map g x} - \map f {y_0}\)





Definition of $y_0$














\(\ds \)

\(=\)







\(\ds \paren {\map g x - y_0} \map {f^*} {\map g x}\)





By $\paren 2$














\(\ds \)

\(=\)







\(\ds \paren {\map g x - \map g {x_0} } \map {f^*} {\map g x}\)





Definition of $y_0$




\(\text {(3)}: \quad\)









\(\ds \)

\(=\)







\(\ds \paren {x - x_0} \map {g^*} x \map {f^*} {\map g x}\)





By $\paren 1$



Therefore, we have:














\(\ds \lim_{x \mathop \to x_0} \frac {\map h x - \map h {x_0} } {x - x_0}\)

\(=\)







\(\ds \lim_{x \mathop \to x_0} \frac {\map f {\map g x} - \map f {\map g {x_0} } } {x - x_0}\)





Definition of $h$














\(\ds \)

\(=\)







\(\ds \lim_{x \mathop \to x_0} \map {g^*} x \map {f^*} {\map g x}\)





By $\paren 3$














\(\ds \)

\(=\)







\(\ds \paren {\lim_{x \mathop \to x_0} \map {g^*} x} \paren {\lim_{x \mathop \to x_0} \map {f^*} {\map g x} }\)





Product Rule for Limits of Real Functions














\(\ds \)

\(=\)







\(\ds \paren {\lim_{x \mathop \to x_0} \map {g^*} x} \map {f^*} {\lim_{x \mathop \to x_0} \map g x}\)





Limit of Composite Function: Hypothesis 1














\(\ds \)

\(=\)







\(\ds \map {g^*} {x_0} \map {f^*} {\map g {x_0} }\)





Differentiable Function is Continuous, Definition of Continuous Real Function at Point














\(\ds \)

\(=\)







\(\ds \map {g'} {x_0} \map {f'} {\map g {x_0} }\)





Definitions of $g^*$ and $f^*$



Therefore, by definition of derivative:

$\map {h'} {x_0} = \map {f'} {\map g {x_0}} \map {g'} {x_0}$
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





