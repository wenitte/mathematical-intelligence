# 

Source: https://proofwiki.org/wiki/Induction_of_Finite_Set



Theorem Scheme
Let $A$ be finite set.
Let $\map P -$ be a predicate.
Let $\map P \O$.
Let

$\forall B \subseteq A, x \in A: \paren {\map P B \implies \map P {B \cup \set x} }$

Then:

$\map P A$


Proof
We will prove the result by induction on cardinality of argument.


Base Case
$\forall X \subseteq A: \paren {\size X = 0 \implies \map P X}$
Let $X \subseteq A$ such that:

$\size X = 0$
By Cardinality of Empty Set:

$X = \O$
Thus by assumption:

$\map P X$


Induction Hypothesis
$\forall X \subseteq A: \paren {\size X = n \implies \map P X}$


Induction Step
$\forall X \subseteq A: \paren {\size X = n + 1 \implies \map P X}$
Let $X \subseteq A$ such that:

$\size X = n + 1$
By definition of cardinality:

$X = \set {x_1, \dots, x_n, x_{n + 1} }$
By Union of Unordered Tuples:

$X = \set {x_1, \dots, x_n} \cup \set {x_{n + 1} }$
By definition of cardinality:

$\size {\set {x_1, \dots, x_n} } = n$
By Set is Subset of Union:

$\set {x_1, \dots, x_n} \subseteq X \subseteq A$
Then by Induction Hypothesis:

$\map P {\set {x_1, \dots, x_n} }$
By definition of subset:

$x_{n + 1} \in A$
Thus by assumption:

$\map P X$
$\Box$

By the Principle of Mathematical Induction:

$\forall X \subseteq A: \paren {\size X = \size A \implies \map P X}$
Hence:

$\map P A$
$\blacksquare$


Sources
Mizar article FINSET_1:sch 2




