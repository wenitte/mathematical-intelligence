# 

Source: https://proofwiki.org/wiki/Characteristic_of_Field_by_Annihilator/Prime_Characteristic

Theorem
Let $\struct {F, +, \times}$ be a field.
Suppose that:

$\exists n \in \map {\mathrm {Ann} } F: n \ne 0$
That is, there exists (at least one) non-zero integer in the annihilator of $F$.

If this is the case, then the characteristic of $F$ is non-zero:

$\Char F = p \ne 0$
and the annihilator of $F$ consists of the set of integer multiples of $p$:

$\map {\mathrm {Ann} } F = p \Z$
where $p$ is a prime number.


Proof
Let $A := \map {\mathrm {Ann} } F$.
We are told that:

$\exists n \in A: n \ne 0$
Consider the set $A^+ \set {n \in A: n > 0}$.
From Non-Trivial Annihilator Contains Positive Integer we have that $A^+ \ne \O$.
As $A^+ \subseteq \N$ it follows from the well-ordering principle that $A^+$ has a least value $p$, say.

Aiming for a contradiction, suppose $p$ is not a prime number.
Then $p$ can be expressed as $p = a b$ where $1 < a, b < p$.














\(\ds 0_R\)

\(=\)







\(\ds p \cdot 1_F\)





Definition of Annihilator of Ring














\(\ds \)

\(=\)







\(\ds \paren {a b} \cdot 1_F\)




















\(\ds \)

\(=\)







\(\ds \paren {a \cdot 1_F} \times \paren {b \cdot 1_F}\)





Product of Integral Multiples














\(\ds \)

\(=\)







\(\ds \paren {a \cdot 1_F} = 0_F \lor \paren {b \cdot 1_F} = 0_F\)





Field has no Proper Zero Divisors



But then either $a \in A$ or $b \in A$, and so $p$ is not the minimal positive element of $A$ after all.
So from this contradiction it follows that $p$ is necessarily prime.

Next let $n \in \Z$.
Then:














\(\ds \paren {n p} \cdot 1_F\)

\(=\)







\(\ds n \cdot \paren {p \cdot 1_F}\)





Integral Multiple of Integral Multiple














\(\ds \)

\(=\)







\(\ds n \cdot 0_F\)





as $p$ is in the annihilator of $F$














\(\ds \)

\(=\)







\(\ds 0_F\)





Definition of Integral Multiple



So all multiples of $p$ are in $A$.

Finally, suppose $k \in A$.
By the Division Theorem $k = q p + r$ where $0 \le r < p$.
Then:














\(\ds 0_F\)

\(=\)







\(\ds k \cdot 0_F\)





Definition of Integral Multiple














\(\ds \)

\(=\)







\(\ds \paren {q p + r} \cdot 1_F\)




















\(\ds \)

\(=\)







\(\ds \paren {q p} \cdot 1_F + r \cdot 1_F\)





Integral Multiple Distributes over Ring Addition














\(\ds \)

\(=\)







\(\ds 0_F + r \cdot 1_F\)





from above: $q p$ is a multiple of $p$














\(\ds \)

\(=\)







\(\ds r \cdot 1_F\)





Definition of Field Zero



So $r \in A$ contradicting the stipulation that $p$ is the smallest positive element of $A$.
Hence all and only multiples of $p$ are in $A$.
$\blacksquare$


Sources
1964: Iain T. Adamson: Introduction to Field Theory ... (previous) ... (next): Chapter $\text {I}$: Elementary Definitions: $\S 2$. Elementary Properties




