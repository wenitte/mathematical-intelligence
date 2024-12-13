# 

Source: https://proofwiki.org/wiki/Legendre%27s_Condition


This page has been identified as a candidate for refactoring of medium complexity.In particular: Work out how to handle the lemmasUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.


Theorem
Let $y =\map y x$ be a real function, such that:

$\map y a = A,\quad \map y b = B$
Let $J \sqbrk y$ be a functional, such that:

$\ds J \sqbrk y = \int_a^b \map F {x, y, y'} \rd x$
where

$F \in C^2 \closedint a b$
with respect to all its variables, and $C$ stands for differentiability class.

Then a necessary condition for $J \sqbrk y$ to have a minimum at $y = \hat y$ is:

$\bigintlimits {F_{y'y'} } {y \mathop = \hat y} {} \ge 0 \quad \forall x \in \closedint a b$


Proof
Lemma 1
Let $y = \map y x$ be a real function, such that:

$\map y a = A, \quad \map y b = B$
Let $J \sqbrk y$ be a functional, such that:

$\ds J \sqbrk y = \int_a^b \map F {x, y, y'} \rd x$
where:

$F \in C^2 \closedint a b$
with respect to all its variables.

Then:

$\ds \delta^2 J \sqbrk {y; h} = \int_a^b \paren {\map P {x, \map y x } h'^2 + \map Q {x, \map y x} h^2} \rd x$
where:

$\map P {x, \map y x} = \dfrac 1 2 F_{y' y'}, \quad \map Q {x, \map y x} = \dfrac 1 2 \paren {F_{yy} - \dfrac \d {\d x} F_{yy'} }$


Lemma 2
Let $h$ be a real function such that:

$h \in C^1 \openint a b, \quad \map h a = 0, \quad \map h b = 0$
Let:

$\ds \delta^2 J \sqbrk {y; h} = \int_a^b \paren {\map P {x, \map y x} h'^2 + \map Q {x, \map y x} h^2} \rd x$
where $P \in C^0 \closedint a b$. 

Then a necessary condition for:

$\delta^2 J \sqbrk {y; h} \ge 0$
is:

$\map P {x, \map y x} \ge 0 \quad \forall x \in \closedint a b$
$\blacksquare$


Source of Name
This entry was named for Adrien-Marie Legendre.


Sources
1963: I.M. Gelfand and S.V. Fomin: Calculus of Variations ... (previous) ... (next): $\S 5.25$: The Formula for the Second Variation. Legendre's Condition




