# 

Source: https://proofwiki.org/wiki/Orthogonality_of_Solutions_to_the_Sturm-Liouville_Equation_with_Distinct_Eigenvalues


This page has been identified as a candidate for refactoring of advanced complexity.Until this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.

This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.
Theorem
Let $\map f x$ and $\map g x$ be solutions of the Sturm-Liouville equation:

$(1): \quad -\map {\dfrac \d {\d x} } {\map p x \dfrac {\d y} {\d x} } + \map q x y = \lambda \map w x y$
where $y$ is a function of the free variable $x$.

The functions $\map p x$, $\map q x$ and $\map w x$ are specified.
In the simplest cases they are continuous on the closed interval $\closedint a b$.

In addition:

$(1a): \quad \map p x > 0$ has a continuous derivative
$(1b): \quad \map w x > 0$
$(1c): \quad y$ is typically required to satisfy some boundary conditions at $a$ and $b$.

Assume that the Sturm-Liouville problem is regular, that is, $\map p x^{-1} > 0$, $\map q x$, and $\map w x > 0$ are real-valued integrable functions over the closed interval $\closedint a b$, with separated boundary conditions of the form: 

$(2): \quad \map y a \cos \alpha - \map p a \map {y'} a \sin \alpha = 0$
$(3): \quad \map y b \cos \beta - \map p b \map {y'} b \sin \beta = 0$
where $\alpha, \beta \in \hointr 0 \pi$.

Then:

$\ds \innerprod f g = \int_a^b \overline {\map f x} \map q x \map w x \rd x = 0$
where $\map f x$ and $\map g x$ are solutions to the Sturm-Liouville equation corresponding to distinct eigenvalues and $\map w x$ is the "weight" or "density" function.


Proof
Multiply the equation for $\map g x$ by $\overline {\map f x}$ (the complex conjugate of $\map f x$) to get:

$-\overline {\map f x} \dfrac {\map \d {\map p x \map {\dfrac {\d g} {\d x} } x} } {\d x} + \overline {\map f x} \map q x \map g x = \mu \overline {\map f x} \map w x \map g x$
Only $\map f x$, $\map g x$, $\lambda$ and $\mu $ may be complex.
All other quantities are real.
Complex conjugate this equation, exchange $\map f x$ and $\map g x$, and subtract the new equation from the original:














\(\ds -\overline {\map f x} \frac {\map \d {\map p x \map {\frac {\d g} {\d x} } x} } {\d x} + \map g x \frac {\map \d {\map p x \map {\frac {\d \bar f} {\d x} } x} } {\d x}\)

\(=\)







\(\ds \frac {\map \d {\map p x \paren {\map g x \map {\frac {\d \bar f} {\d x} } x - \overline {\map f x} \map {\frac {\d g} {\d x} } x} } } {\d x}\)




















\(\ds \)

\(=\)







\(\ds \paren {\mu - \bar \lambda} \overline {\map f x} \map g x \map w x\)









Integrate this between the limits $x = a$ and $x = b$:


$\ds \paren {\mu - \bar \lambda} \int_a^b \overline {\map f x} \map g x \map w x \rd x = \map p b \paren {\map g b \map {\frac {\d \bar f} {\d x} } b - \overline {\map f b} \map {\frac {\d g} {\d x} } b} - \map p a \paren {\map g a \map {\frac {\d \bar f} {\d x} } a - \overline {\map f a} \map {\frac {\d g} {\d x} } a}$

The right side of this equation vanishes because of the boundary conditions, which are either:

periodic boundary conditions, that is, that $\map f x$, $\map g x$, and their first derivatives (as well as $\map p x$) have the same values at $x = b$ as at $x = a$
or:

that independently at $x = a$ and at $x = b$ either:
the condition cited in equation $(2)$ or $(3)$ holds
or:
$\map p x = 0$.

So:

$\ds \paren {\mu - \bar \lambda} \int_a^b \overline {\map f x} \map g x \map w x \rd x = 0$
If we set $f = g$, so that the integral surely is non-zero, then it follows that $\bar \lambda = \lambda$.
That is, the eigenvalues are real, making the differential operator in the Sturm-Liouville equation self-adjoint (hermitian).
So:

$\ds \paren {\mu - \lambda} \int_a^b \overline {\map f x} \map g x \map w x \rd x = 0$
It follows that, if $f$ and $g$ have distinct eigenvalues, then they are orthogonal.
$\blacksquare$





