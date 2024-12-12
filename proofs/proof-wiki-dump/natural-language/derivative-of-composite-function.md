# 

Source: https://proofwiki.org/wiki/Derivative_of_Composite_Function

  This article was Featured Proof between 1 December 2008 and 14 December 2008.




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


Corollary
$\dfrac {\d y} {\d x} = \dfrac {\paren {\dfrac {\d y} {\d u} } } {\paren {\dfrac {\d x} {\d u} } }$
for $\dfrac {\d x} {\d u} \ne 0$.


Second Derivative
${D_x}^2 w = {D_u}^2 w \paren { {D_x}^1 u}^2 + {D_u}^1 w {D_x}^2 u$


Third Derivative
${D_x}^3 w = {D_u}^3 w \paren { {D_x}^1 u}^3 + 3 {D_u}^2 w {D_x}^2 u {D_x}^1 u + {D_u}^1 w {D_x}^3 u$


$3$ Functions
Let $f, g, h$ be continuous real functions such that:














\(\ds y\)

\(=\)







\(\ds \map f u\)




















\(\ds u\)

\(=\)







\(\ds \map g v\)




















\(\ds h\)

\(=\)







\(\ds \map h x\)









Then:

$\dfrac {\d y} {\d x} = \dfrac {\d y} {\d u} \cdot \dfrac {\d u} {\d v} \cdot \dfrac {\d v} {\d x}$


Jacobians
Let $U$ be an open subset of $\R^n$.
Let $\mathbf f = \paren {f_1, f_2, \ldots, f_m}^\intercal: U \to \R^m$ be a vector valued function, differentiable at $\mathbf x = \paren {x_1, x_2, \ldots, x_n}^\intercal \in U$.
Let $\mathbf g = \paren {g_1, g_2, \ldots, g_k}^\intercal: U \to \R^k$ be a vector valued function, differentiable at $\map {\mathbf f} {\mathbf x} = \paren {\map {f_1} {\mathbf x}, \map {f_2} {\mathbf x}, \ldots, \map {f_m} {\mathbf x} }^\intercal \in U$.

The Jacobian matrix of a composite function $\mathbf g \circ \mathbf f$ is obtained by multiplying the Jacobian matrices of $\mathbf f$ and $\mathbf g$:

$\map {\mathbf J_{\mathbf g \circ \mathbf f} } {\mathbf x} = \map {\mathbf J_{\mathbf g} } {\map {\mathbf f} {\mathbf x} } \map {\mathbf J_{\mathbf f} } {\mathbf x}$


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


Also known as
The rule to calculate the Derivative of Composite Function is often informally referred to as:

the Chain Rule for Derivatives
the Chain Rule for Differentiation.
Some sources refer to it as just the Chain Rule, but the latter term has a number of applications.


Proof 1
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


Proof 2
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


Informal Proof
Some sources, introducing the Derivative of Composite Function at elementary level, provide the following non-rigorous argument:

If $z$ is a function of $y$ where $y$ itself is some function of $x$,
it is obvious that:
$\dfrac {\delta z} {\delta x} = \dfrac {\delta z} {\delta y} \cdot \dfrac {\delta y} {\delta x}$
since these quantities being finite can be cancelled as in Arithmetic.
If we now let the quantities concerned tend to zero, taking the limit, we get
$\dfrac {\d z} {\d x} = \dfrac {\d z} {\d y} \cdot \dfrac {\d y} {\d x}$
However, this informal argument is insufficiently rigorous for $\mathsf{Pr} \infty \mathsf{fWiki}$.

Hence, this must not be interpreted to mean that derivatives can be treated as fractions.
It simply is a convenient notation.


Examples
Example: $\paren {3 x + 1}^2$
$\map {\dfrac \d {\d x} } {\paren {3 x + 1}^2} = 6 \paren {3 x + 1}$


Example: $\map \sin {x^2}$
$\map {\dfrac \d {\d x} } {\map \sin {x^2} } = 2 x \map \cos {x^2}$


Example: $\sqrt {1 + x}$
$\map {\dfrac \d {\d x} } {\sqrt {1 + x} } = \dfrac 1 {2 \sqrt {1 + x} }$


Example: $\sqrt {\sin x}$
$\map {\dfrac \d {\d x} } {\sqrt {\sin x} } = \dfrac {\cos x} {2 \sqrt {\sin x} }$


Also see
Chain Rule for Real-Valued Functions
Faà di Bruno's Formula


Sources
1961: David V. Widder: Advanced Calculus (2nd ed.) ... (previous) ... (next): $1$ Partial Differentiation: $\S 3$. Functions of Several Variables
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): composite function (function of a function)
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): composite function (function of a function)
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): chain rule
2014: Christopher Clapham and James Nicholson: The Concise Oxford Dictionary of Mathematics (5th ed.) ... (previous) ... (next): differentiation (vi)

This page may be the result of a refactoring operation.As such, the following source works, along with any process flow, will need to be reviewed.When this has been completed, the citation of that source work (if it is appropriate that it stay on this page) is to be placed above this message, into the usual chronological ordering.In particular: Implement the proofs given hereIf you have access to any of these works, then you are invited to review this list, and make any necessary corrections.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{SourceReview}} from the code.
1957: Tom M. Apostol: Mathematical Analysis ... (previous): Chapter $5$: Differentiation of Functions of One Real Variable: $\text {5-4}$ The chain rule
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 10.13$




