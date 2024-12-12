# 

Source: https://proofwiki.org/wiki/Field_Operations_of_P-adic_Numbers

Theorem
Let $p$ be a prime number.
Let $\norm {\,\cdot\,}_p$ be the p-adic norm on the rationals $\Q$.

Let $\struct {\Q_p, \norm {\,\cdot\,}_p}$ be the $p$-adic numbers.
That is, $\Q_p$ is the quotient ring $\CC \, \big / \NN$ where:

$\CC$ denotes the commutative ring of Cauchy sequences over $\struct {\Q, \norm {\,\cdot\,}_p}$
$\NN$ denotes the set of null sequences in $\struct {\Q, \norm {\,\cdot\,}_p}$.

Then $\Q_p$ is a field and the field operations are defined by:

$+ : \quad \forall \sequence {x_n} + \NN, \sequence {y_n} + \NN \in \CC \, \big / \NN$:
$\quad \paren {\sequence {x_n} + \NN} + \paren {\sequence {y_n} + \NN} = \sequence {x_n + y_n} + \NN$
$\circ : \quad \forall \sequence {x_n} + \NN, \sequence {y_n} + \NN \in \CC \, \big / \NN$:
$\quad \paren {\sequence {x_n} + \NN} \paren {\sequence {y_n} + \NN} = \sequence {x_n y_n} + \NN$


Proof
By Corollary to Cauchy Sequences form Ring with Unity, $\CC$ is a commutative ring of Cauchy sequences with the ring operations defined by:

$+ : \quad \forall \sequence {x_n}, \sequence {y_n} \in \CC$:
$\quad \sequence {x_n} + \sequence {y_n} = \sequence {x_n + y_n}$
$\circ : \quad \forall \sequence {x_n}, \sequence {y_n} \in \CC$:
$\quad \sequence {x_n} \circ \sequence {y_n} = \sequence {x_n y_n}$

By Corollary to Null Sequences form Maximal Left and Right Ideal, $\NN$ is a maximal ideal of $\CC$. 
By Corollary to Quotient Ring of Cauchy Sequences is Division Ring, the quotient ring $\Q_p = \CC \big / \NN$ is a field with field operations defined by:

$+ :\quad \forall \sequence {x_n} + \NN, \sequence {y_n} + \NN \in \CC \, \big / \NN$:
$\quad \paren {\sequence {x_n} + \NN} + \paren {\sequence {y_n} + \NN} = \paren {\sequence {x_n} + \sequence {y_n} } + \NN$
$\circ :\quad \forall \sequence {x_n} + \NN, \sequence {y_n} + \NN \in \CC \, \big / \NN$:
$\quad \paren {\sequence {x_n} + \NN} \paren {\sequence {y_n} + \NN} = \paren {\sequence {x_n} \circ \sequence {y_n} } + \NN$

Putting the operations on $\CC$ with those on $\CC \, \big / \NN$ gives:

$+ :\quad \forall \sequence {x_n} + \NN, \sequence{y_n} + \NN \in \CC \, \big / \NN$:
$\quad \paren {\sequence {x_n} + \NN} + \paren {\sequence {y_n} + \NN} = \sequence {x_n + y_n} + \NN$
$\circ :\quad \forall \sequence {x_n} + \NN, \sequence {y_n} + \NN \in \CC \, \big / \NN$:
$\quad \paren {\sequence {x_n} + \NN} \paren {\sequence {y_n} + \NN} = \sequence {x_n y_n} + \NN$
$\blacksquare$





