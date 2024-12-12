# 

Source: https://proofwiki.org/wiki/Existential_Quantification_of_Provable_Arithmetic_Formula_is_Provable

Theorem
Let $\map \phi x$ be a WFF in the language of arithmetic with $1$ free variable.
Let $\sqbrk a$ denote the unary representation of $a$.
Suppose that, for every $n \in \N$ such that $\N \models \map \phi {x \gets \sqbrk n}$:

$\map \phi {x \gets \sqbrk n}$
is a theorem of minimal arithmetic.
Suppose also that:

$\N \models \exists x: \map \phi x$
Then:

$\exists x: \map \phi x$
is a theorem of minimal arithmetic.


Proof
By definition of value of formula:

$\exists x \in \N: \map \phi x$
Choose $x_0 \in \N$ that satisfies $\map \phi {x \gets x_0}$.
By Unary Representation of Natural Number:

$x_0 = \sqbrk {x_0}$
Thus, by Substitution Property of Equality:

$\map \phi {x \gets \sqbrk {x_0} }$
But then, by hypothesis:

$\map \phi {x \gets \sqbrk {x_0} }$
is a theorem of minimal arithmetic.
The result follows from Existential Generalisation.
$\blacksquare$





