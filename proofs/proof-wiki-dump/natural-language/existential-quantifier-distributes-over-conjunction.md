# 

Source: https://proofwiki.org/wiki/Existential_Quantifier_Distributes_over_Conjunction

Theorem
Let $\map \phi x, \map \psi x$ be WFFs of the free variable $x$.
Then:

$\exists x: \paren {\map \phi x \land \map \psi x} \vdash \paren {\exists x: \map \phi x} \land \paren {\exists x: \map \psi x}$


Proof
By the tableau method of natural deduction:


$\exists x: \paren {\map \phi x \land \map \psi x} \vdash \paren {\exists x: \map \phi x} \land \paren {\exists x: \map \psi x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\exists x: \paren {\map \phi x \land \map \psi x}$

Premise






2


2

$\map \phi {x \gets x_0} \land \map \psi {x \gets x_0}$

Assumption



$x_0$ is arbitrary


3


2

$\map \phi {x \gets x_0}$

Rule of Simplification

2




4


2

$\exists x: \map \phi x$

Existential Generalisation

3




5


2

$\map \psi {x \gets x_0}$

Rule of Simplification

2




6


2

$\exists x: \map \psi x$

Existential Generalisation

5




7


2

$\paren {\exists x: \map \phi x} \land \paren {\exists x: \map \psi x}$

Rule of Conjunction

4, 6




8


1

$\paren {\exists x: \map \phi x} \land \paren {\exists x: \map \psi x}$

Existential Instantiation

1, 2-7


$\blacksquare$




