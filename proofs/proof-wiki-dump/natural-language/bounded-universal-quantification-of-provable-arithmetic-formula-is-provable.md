# 

Source: https://proofwiki.org/wiki/Bounded_Universal_Quantification_of_Provable_Arithmetic_Formula_is_Provable

Theorem
Let $\map \phi x$ be a WFF in the language of arithmetic with $1$ free variable.
Let $\tau$ be a term in the language of arithmetic with no variables.
Let $\sqbrk a$ denote the unary representation of $a$.
Suppose that, for every $n \in \N$ such that $\N \models \map \phi {x \gets \sqbrk n}$:

$\map \phi {x \gets \sqbrk n}$
is a theorem of minimal arithmetic.
Suppose also that:

$\N \models \forall x < \tau: \map \phi x$
Then:

$\forall x < \tau: \map \phi x$
is a theorem of minimal arithmetic.


Proof
Let $t = \map {\operatorname{val}_\N} \tau$ be the value of $\tau$ under the natural numbers.
By definition of value of formula:

$\N \models \map \phi {x \gets x_0}$
for every $x_0 < t$.
Therefore, by hypothesis:

$\map \phi {x \gets \sqbrk {x_0} }$
is a theorem, for every $x_0 < t$.
Additionally, by Lower Section of Natural Number is Provable:

$\forall x: x = 0 \lor x = \map s 0 \lor \dotso \lor x = \sqbrk {t - 1} \lor \neg {x < \sqbrk t}$
is a theorem.
The result follows from False Statement implies Every Statement and Proof by Cases.
$\blacksquare$





