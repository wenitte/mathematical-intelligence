# 

Source: https://proofwiki.org/wiki/Derivative_of_Product_of_Operator-Valued_Functions

Theorem

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Let $\struct {X, \norm \cdot_X}$, $\struct {Y, \norm \cdot_Y}$, and $\struct {Z, \norm \cdot_Z}$ normed vector spaces.
Let $\map B {X, Y}$, $\map B {Y, Z}$ and $\map B {X, Z} $ denote the space of bounded linear transformations between $X$ and $Y$, between $Y$ and $Z$, and between $X$ and $Z$, respectively.
Let $A : I \to \map B {X, Y}$ and $B : I \to \map B {Y, Z}$ be differentiable mappings defined on an interval $I$ whose images are bounded linear transformations.

The product $A B: I \to \map B {X, Z}: x \mapsto \map A x \map B x$ is differentiable and its derivative at any $x \in \R$ is given by $\map {A'} x \map B x + \map A x \map {B'} x$.


Proof
Given arbitrary $x, h \in I$ such that $h \ne 0$, $x+h\in I$ we compute:

$\norm {\dfrac {\map {\paren {A B} } {x + h} - \map {\paren {A B} } x} h - \map {A'} x \map B x - \map A x \map {B'} x}_{\map B {X, Z} }$
to be:














\(\ds \)

\(\)







\(\ds \norm {\dfrac {\map A {x + h}\map B {x + h} - \map A x \map B x} h-\map {A'} x \map B x - \map A x \map {B'} x}_{\map B {X, Z} }\)





Definition of $AB$














\(\ds \)

\(=\)







\(\ds \norm {\dfrac {\map A {x + h}\map B {x + h} - \map A x \map B {x + h} + \map A x \map B {x + h} - \map A x \map B x} h-\map {A'} x \map B {x + h} + \map {A'} x \map B {x + h} - \map {A'} x \map B x - \map A x \map {B'} x}_{\map B {X, Z} }\)





expanding














\(\ds \)

\(\le\)







\(\ds \norm {\dfrac {\map A {x + h} \map B {x + h} - \map A x \map B {x + h} } h-\map {A'} x \map B {x + h} }_{\map B {X, Z} } + \norm {\map {A'} x \map B {x + h} - \map {A'} x \map B x }_{\map B {X, Z} } + \norm {\dfrac {\map A x \map B {x + h} - \map A x \map B x} h - \map A x \map {B'} x}_{\map B {X, Z} }\)





Norm Axiom $\text N 3$: Triangle Inequality














\(\ds \)

\(=\)







\(\ds \norm {\paren {\dfrac {\map A {x + h} - \map A x } h - \map {A'} x} \map B {x + h} }_{\map B {X, Z} } + \norm {\map {A'} x \paren {\map B {x + h} - \map B x} }_{\map B {X, Z} } + \norm {\map A x \paren {\dfrac {\map B {x + h} - \map B x} h - \map {B'} x} }_{\map B {X, Z} }\)





factoring














\(\ds \)

\(\le\)







\(\ds \norm {\dfrac {\map A {x + h} - \map A x} h - \map {A'} x}_{\map B {X, Y} } \norm {\map B {x + h} }_{\map B {Y, Z} } + \norm {\map {A'} x}_{\map B {X, Y} } \norm {\map B {x + h} - \map B x}_{\map B {Y, Z} } + \norm {\map A x}_{\map B {X, Y} } \norm {\dfrac {\map B {x + h} - \map B x} h - \map {B'} x}_{\map B {Y, Z} }\)





Norm on Bounded Linear Transformation is Submultiplicative




$\norm {\dfrac {\map A {x + h} - \map A x} h - \map {A'} x}_{\map B {X, Y} }$ vanishes as $h \to 0$ because $\map {A'} x$ is the derivative of $A$ at $x$ which exists by assumption.
$\norm {\dfrac {\map B {x + h} - \map B x} h - \map {B'} x}_{\map B {Y, Z} }$ vanishes as $h \to 0$ because $\map {B'} x$ is the derivative of $B$ at $x$ which exists by assumption.

$\norm {\map B {x + h} - \map B x  }_{\map B {Y, Z} }$ vanishes as $h \to 0$ by Differentiable Operator-Valued Function is Continuous.
By the Reverse Triangle Inequality:

$\size {\norm {\map B {x + h} }_{\map B {Y, Z} } - \norm {\map B x}_{\map B {Y, Z} } } \le \norm {\map B {x + h} - \map B x}_{\map B {Y, Z} } \to 0$
as $h \to 0$.

Together this shows:

$\ds \lim_{h \mathop \to 0} \norm {\frac {\map {\paren {A B} } {x + h} - \map {\paren {A B} } x} h - \map {A'} x \map B x - \map A x \map {B'} x}_{\map B {X, Z} } = 0$
Therefore the derivative of $A B$ at $x$ is:

$\map {A'} x \map B x + \map A x \map {B'} x$
$\blacksquare$


Sources
1996: E. Hille and R.S. Phillips: Functional Analysis and Semi-Groups (Revised ed.): Chapter $\text {IV}$: Banach Algebras: $4.6$. Functions on scalars to the algebra. Equation $(4.6.1)$




