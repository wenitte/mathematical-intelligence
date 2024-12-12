# 

Source: https://proofwiki.org/wiki/Existential_Quantifier_Distributes_over_Disjunction



Theorem
Let $\map \phi x, \map \psi x$ be WFFs of the free variable $x$.
Then:

$\exists x: \paren {\map \phi x \lor \map \psi x} \dashv \vdash \paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x}$


Proof
Forward Implication
By the tableau method of natural deduction:


$\exists x: \paren {\map \phi x \lor \map \psi x} \vdash \paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\exists x: \paren {\map \phi x \lor \map \psi x}$

Premise






2


2

$\map \phi {x \gets x_0} \lor \map \psi {x \gets x_0}$

Assumption






3


3

$\map \phi {x \gets x_0}$

Assumption






4


3

$\exists x: \map \phi x$

Existential Generalisation

3




5


3

$\paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x}$

Rule of Addition

4




6


6

$\map \psi {x \gets x_0}$

Assumption






7


6

$\exists x: \map \psi x$

Existential Generalisation

6




8


6

$\paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x}$

Rule of Addition

7




9


2

$\paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x}$

Proof by Cases

2, 3-5, 6-8




10


1

$\paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x}$

Existential Instantiation

1, 2-9


$\Box$


Reverse Implication
By the tableau method of natural deduction:


$\paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x} \vdash \exists x: \paren {\map \phi x \lor \map \psi x} $


Line


Pool

Formula

Rule

Depends upon

Notes


1


1

$\paren {\exists x: \map \phi x} \lor \paren {\exists x: \map \psi x}$

Premise






2


2

$\exists x: \map \phi x$

Assumption






3


3

$\map \phi {x \gets x_0}$

Assumption






4


3

$\map \phi {x \gets x_0} \lor \map \psi {x \gets x_0}$

Rule of Addition

3




5


3

$\exists x: \paren {\map \phi x \lor \map \psi x}$

Existential Generalisation

4




6


2

$\exists x: \paren {\map \phi x \lor \map \psi x}$

Existential Instantiation

2, 3-5




7


7

$\exists x: \map \psi x$

Assumption






8


8

$\map \psi {x \gets x_0}$

Assumption






9


8

$\map \phi {x \gets x_0} \lor \map \psi {x \gets x_0}$

Rule of Addition

8




10


8

$\exists x: \paren {\map \phi x \lor \map \psi x}$

Existential Generalisation

9




11


7

$\exists x: \paren {\map \phi x \lor \map \psi x}$

Existential Instantiation

7, 8-10




12


1

$\exists x: \paren {\map \phi x \lor \map \psi x}$

Proof by Cases

1, 2-6, 7-11


$\blacksquare$




