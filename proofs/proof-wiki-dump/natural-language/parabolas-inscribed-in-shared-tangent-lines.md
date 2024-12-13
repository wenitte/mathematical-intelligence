# 

Source: https://proofwiki.org/wiki/Parabolas_Inscribed_in_Shared_Tangent_Lines


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

This article needs to be linked to other articles.In particular: throughoutYou can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let the function $\map f x = A x^2 + B x + C_1$ be a curve embedded in the Euclidean Plane.
Let $\map {y_1} x$ be the equation of the tangent line at $\tuple {Q, \map f Q}$ on $f$.
Let $\map {y_2} x$ be the equation of the tangent line at $\tuple {-Q, \map f {-Q} }$ on $f$.

Then there exists another function $\map g x$ also embedded in the Euclidean Plane defined as:

$\map g x = -A x^2 + B x + C_2$.
with:

tangent lines $\map {y_3} x$ being the equation of the tangent line at $\tuple {Q, \map g Q}$ on $g$
and:

$\map {y_4} x$ being the equation of the tangent line at $\tuple {-Q, \map g {-Q} }$ on $g$.
so that the tangent lines $y_3$ and $y_4$ inscribe $\map f x$ and the tangent lines $y_1$ and $y_2$ inscribe $\map g x$.


Proof
The tangent line at $\tuple {Q, \map f \Q}$ on $f$ is defined as:

$\map {y_1} x = \paren {2 A Q + B} x + b_1$
where $2 A Q + B$ is the slope of the tangent line on the point $\tuple {Q, \map g Q}$ on $f$.
Substitute in the coordinates of the point $\tuple {Q, \map g Q}$ to $y_1$ and solve for $b_1$.
This will reveal the $y$-intercept of $y_1$:














\(\ds A Q^2 + B Q + C_1\)

\(=\)







\(\ds \paren {2 A Q + B} Q + b_1\)





The value of $y_1 = \map f Q$














\(\ds A Q^2 + B Q + C_1 -2 A Q^2 - B Q\)

\(=\)







\(\ds b_1\)




















\(\ds -A Q^2 + C_1\)

\(=\)







\(\ds b_1\)









    
Continue by following the same steps for $y_2$ which is defined:

$\map {y_2} x = \paren {-2 A Q + B} x + b_2$
where $-2 A Q + B$ is the slope of the tangent line at the point $\tuple {-Q, \map f {-Q} }$ on $f$.
Substitute in the coordinates of the point $\paren {-Q, \map f {-Q} }$ to $y_2$.
Use these values to solve for $b_2$, and this will reveal the $y$-intercept of $y_2$:














\(\ds A \paren {-Q}^2 + B \paren {-Q} + C_1\)

\(=\)







\(\ds \paren {-2 A Q + B} \paren {-Q} + b_2\)





the value of $y_2 = \map f {-Q}$














\(\ds A Q^2 - B Q + C_1 -2 A Q^2 + B Q\)

\(=\)







\(\ds b_2\)




















\(\ds -A Q^2 + C_1\)

\(=\)







\(\ds b_2\)









The $y$-intercepts of both $y_1$ and $y_2$ have been shown to be equivalent.
$\Box$

Since $b_1 = b_2$ redefine this value as $b$.
The distance between $b$ and $C_1$ is $\size {C_1 - b}$.
Let $\map g x = -A x^2 + B x + C_2$.
Then the tangent line at the point $\tuple {Q, \map g Q}$ on $g$ is defined as:

$\map {y_3} x = \paren {-2 A Q + B} x + b_3$
where $-2 A Q + B$ is the slope of the tangent line at $\tuple {Q, \map g Q}$ on $g$.
Solve for $b_3$ using the same methods used for $y_1$ and $y_2$.
This will reveal the $y$-intercept of $y_3$:

$b_3 = A Q^2 + C_2$
The result also follows for the tangent line $\tuple {-Q, \map g {-Q} }$ on $g$ which is defined:

$y_4 = \paren {-2 A Q + B} x + b_4$
Solving for $b_4$ yields the result:

$b_4 = A Q^2 + C_2$
The $y$-intercepts of both $y_3$ and $y_4$ have been shown to be equivalent.
$\Box$

Notice that the derivatives of $f$ and $g$ satisfy:














\(\ds \map {g'} Q\)

\(=\)







\(\ds \map {f'} {-Q}\)




















\(\ds \map {g'} {-Q}\)

\(=\)







\(\ds \map {f'} Q\)









Then it must be true that:

$y_1 = y_4$ and $y_2 = y_3$
and the functions $y_1$, $y_2$, $y_3$, and $y_4$ share the same $y$-intercept.
$\Box$

Redefine this the $y$-intercepts of the tangent lines as $b$.
Solve for $C_2$ to determine the vertical translation of $\map g x$:














\(\ds C_2\)

\(=\)







\(\ds \paren {-A Q^2 + C_1} - A Q^2\)




















\(\ds C_2\)

\(=\)







\(\ds -2 A Q^2 + C_1\)









Therefore the function:

$\map g x = -A x^2 + B x - \paren {2 A Q^2 + C_1}$
will have tangent lines equivalent to the tangent lines on $\map f x$ at the points $\tuple {Q, \map f Q}$, and $\tuple {-Q, \map f {-Q} }$.
$\blacksquare$





