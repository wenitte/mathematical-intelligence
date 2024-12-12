# 

Source: https://proofwiki.org/wiki/Composition_of_Computable_Real-Valued_Functions_is_Computable

Theorem
Let $D \subseteq \R^n$ and $E \subseteq \R^m$ be subsets of real cartesian space.
Let $f : D \to \R$ be computable.
Let $g_1, g_2, \dotsc, g_n : E \to \R$ be computable.
Suppose that, for every $\bsx \in E$:

$\tuple {\map {g_1} \bsx, \map {g_2} \bsx, \dotsc, \map {g_n} \bsx} \in D$

Then $h : E \to \R$ defined as:

$\map h {x_1, \dotsc, x_m} = \map f {\map {g_1} {x_1, \dotsc, x_m}, \dotsc, \map {g_n} {x_1, \dotsc, x_m}}$
is computable.


Proof
Follows immediately from:

Composition of Sequentially Computable Real-Valued Functions is Sequentially Computable
Composition of Computably Uniformly Continuous Real-Valued Functions is Computably Uniformly Continuous
$\blacksquare$





