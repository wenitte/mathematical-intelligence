# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Mandelbrot_Set



Theorem
The following definitions of the concept of Mandelbrot Set are equivalent:

Definition $1$
The Mandelbrot set $M$ is the subset of the complex plane defined as follows:

Let $c \in \C$ be a complex number.
Let $T_c: \C \to \C$ be the complex function defined as:

$\forall z \in \C: \map {T_c} z = z^2 + c$

Then $c \in M$ if and only if the sequence:

$\tuple {0, \map {T_c} 0, \map { {T_c}^2} 0, \ldots}$
is bounded.

Definition $2$
The Mandelbrot set $M$ is the subset of the complex plane defined as follows:

Let $c \in \C$ be a complex number.
Let $T_c: \C \to \C$ be the complex function defined as:

$\forall z \in \C: \map {T_c} z = z^2 + c$

Then $M$ is the set of points $c \in \C$ for which the Julia set of $T_c$ is connected in the extended complex plane $\overline \C$.


Proof
By definition of the Julia set:
The Julia set of $f$ is the boundary of the set of those points in $\overline \C$ whose orbits under $f$ are bounded.


Definition $(1)$ implies Definition $(2)$
Let $M$ be the Mandelbrot set by definition $1$.
Let $c \in M$.


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $M$ is the Mandelbrot set by definition $2$.
$\Box$


Definition $(2)$ implies Definition $(1)$
Let $M$ be the Mandelbrot set by definition $2$.


This needs considerable tedious hard slog to complete it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Thus $M$ is the Mandelbrot set by definition $1$.
$\blacksquare$





