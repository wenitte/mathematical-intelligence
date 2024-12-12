# 

Source: https://proofwiki.org/wiki/Cyclic_Group_of_Order_8_is_not_isomorphic_to_Group_of_Units_of_Integers_Modulo_n


It has been suggested that this page be renamed.In particular: usualTo discuss this page in more detail, feel free to use the talk page.


Theorem
Let $n \in \Z_{\ge 0}$ be an integer.
Let $\struct {\Z / n \Z, +, \cdot}$ be the ring of integers modulo $n$.
Let $U = \struct {\paren {\Z / n \Z}^\times, \cdot}$ denote the group of units of $\struct {\Z / n \Z, +, \cdot}$.
Let $C_8$ denote the cyclic group of order $8$

Then:

$U$ and $C_8$ are not isomorphic.


Proof 1
Lemma
There are only $5$ numbers $n$ with the property that $\map \phi n = 8$, and they are $15$, $16$, $20$, $24$ and $30$.
$\Box$

Aiming for a contradiction, suppose $U$ and $C_8$ are isomorphic.

$\order U = \order {C_8} = 8$
From Order of Group of Units of Integers Modulo n we have that

$8 = \order U = \map \phi n$
where $\phi$ denotes the Euler $\phi$-function.

From the Lemma:

there are $5$ numbers $n$ with the property that $\map \phi n = 8$, and they are $15$, $16$, $20$, $24$ and $30$.

Hence:














\(\ds \paren {\Z / 15 \Z}^\times\)

\(\simeq\)







\(\ds \paren {\Z / 3 \Z}^\times \times \paren {\Z / 5 \Z}^\times\)





Chinese Remainder Theorem: Corollary




\(\text {(1)}: \quad\)









\(\ds \)

\(\simeq\)







\(\ds C_2 \times C_4\)





Cyclicity Condition for Units of Ring of Integers Modulo $n$ and $\map \varphi 3 = 2, \map \varphi 5 = 4$


















\(\ds \paren {\Z / 16 \Z}^\times\)

\(\simeq\)







\(\ds \paren {\Z / 2^4 \Z}^\times\)




















\(\ds \)

\(\simeq\)







\(\ds C_2 \times C_4\)





Isomorphism between Group of Units Ring of Integers Modulo $2^n$ and $C_2 \times C_{2^{n - 2} }$


















\(\ds \paren {\Z / 20 \Z}^\times\)

\(\simeq\)







\(\ds \paren {\Z / 2^2 \Z}^\times \times \paren {\Z / 5 \Z}^\times\)





Chinese Remainder Theorem: Corollary














\(\ds \)

\(\simeq\)







\(\ds C_2 \times \paren {\Z / 5 \Z}^\times\)





Isomorphism between Group of Units Ring of Integers Modulo $2^n$ and $C_2 \times C_{2^{n - 2} }$














\(\ds \)

\(\simeq\)







\(\ds C_2 \times C_4\)





Cyclicity Condition for Units of Ring of Integers Modulo $n$ and $\phi$ of $5$ $\map \varphi 5 = 4$


















\(\ds \paren {\Z / 24 \Z}^\times\)

\(\simeq\)







\(\ds \paren {\Z / 2^3 \Z}^\times \times \paren {\Z / 3 \Z}^\times\)





Chinese Remainder Theorem: Corollary














\(\ds \)

\(\simeq\)







\(\ds C_2 \times C_2 \times \paren {\Z / 3 \Z}^\times\)





Isomorphism between Group of Units Ring of Integers Modulo $2^n$ and $C_2 \times C_{2^{n - 2} }$














\(\ds \)

\(\simeq\)







\(\ds C_2 \times C_2 \times C_2\)





Cyclicity Condition for Units of Ring of Integers Modulo $n$ and $\phi$ of $3$: $\map \varphi 3 = 2$


















\(\ds \paren {\Z / 30 \Z}^\times\)

\(\simeq\)







\(\ds \paren {\Z / 2 \Z}^\times \times \paren {\Z / 15 \Z}^\times\)





Chinese Remainder Theorem: Corollary














\(\ds \)

\(\simeq\)







\(\ds \set 1 \times \paren {\Z / 15 \Z}^\times\)





$\phi$ of $2$: $\map \phi 2 = 1$














\(\ds \)

\(\simeq\)







\(\ds C_2 \times C_4\)





from $(1)$




Therefore, no multiplicative group of integers mod $n$ is isomorphic to $C_8$.
$\blacksquare$


Proof 2
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





