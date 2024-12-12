# 

Source: https://proofwiki.org/wiki/Cyclic_Group_of_Order_8_is_not_isomorphic_to_Group_of_Units_of_Integers_Modulo_n/Proof_2


This article needs to be linked to other articles.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding these links.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{MissingLinks}} from the code.

This article needs to be tidied.Please fix formatting and $\LaTeX$ errors and inconsistencies. It may also need to be brought up to our standard house style.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Tidy}} from the code.
Theorem
Let $n \in \Z_{\ge 0}$ be an integer.
Let $\struct {\Z / n \Z, +, \cdot}$ be the ring of integers modulo $n$.
Let $U = \struct {\paren {\Z / n \Z}^\times, \cdot}$ denote the group of units of $\struct {\Z / n \Z, +, \cdot}$.
Let $C_8$ denote the cyclic group of order $8$

Then:

$U$ and $C_8$ are not isomorphic.


Proof
Aiming for a contradiction, suppose $U$ and $C_8$ are isomorphic.

$\order U = \order {C_8} = 8$
From Order of Group of Units of Integers Modulo n we have that

$8 = \order U = \map \phi n$
where $\phi$ denotes the Euler $\phi$-function.
$\map \phi 1 = \map \phi 2 = 1$, so $n > 2$.
By Cyclicity Condition for Units of Ring of Integers Modulo n, either:

$n = p^\alpha$
or:

$n = 2 p^\alpha$
where $p \ge 3$ is prime and $\alpha \ge 1$.
In either case, we get

$8 = \map \phi n = p^{\alpha - 1} \paren{p - 1}$
so $p - 1 \divides 8$, but $p \ge 3$, so $p \in \set {3,5}$.
If $p = 3$, we get:

$8 = 3^{\alpha - 1}\times 2$
contradiction.
If $p = 5$, we get:

$8 = 5^{\alpha - 1}\times 4$
contradiction.
$\blacksquare$





