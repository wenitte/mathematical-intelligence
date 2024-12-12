# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_Equivalence_for_Integers_in_P-adic_Integers

Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
For any $a, b \in \Z_p$ and $n \in \N$, let $x \equiv y \pmod{p^n \Z_p}$ denote congruence modulo the principal ideal $p^n\Z_p$.
For any integers $a, b \in \Z$ and $n \in \N$, let $x \equiv y \pmod{p^n}$ denote congruence modulo integer $p^n$.

Let $x, y \in \Z$ be integers.
Let $k \in \N_{>0}$.

The following statements are equivalent:

$(1)\quad x \equiv y \pmod{p^k \Z_p}$
$(2)\quad x \equiv y \pmod{p^k}$
$(3)\quad p^k \divides \paren{x - y}$


Proof
Lemma
$\forall a \in \Z: \dfrac a {p^k} \in \Z_p \iff \dfrac a {p^k} \in \Z$
$\Box$

We have:














\(\ds x\)

\(\equiv\)







\(\ds y \pmod{p^k\Z_p}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds x - y\)

\(\in\)







\(\ds p^k\Z_p\)





Definition of Congruence Modulo an Ideal








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists z \in \Z_p: \, \)



\(\ds x - y\)

\(=\)







\(\ds p^kz\)





Definition of Principal Ideal








\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {x - y} {p^k}\)

\(\in\)







\(\ds \Z_p\)





Divide both sides by $p^k$








\(\ds \leadstoandfrom \ \ \)





\(\ds \dfrac {x - y} {p^k}\)

\(\in\)







\(\ds \Z\)





Lemma








\(\ds \leadstoandfrom \ \ \)

\(\ds \exists a \in \Z: \, \)



\(\ds \dfrac {x - y} {p^k}\)

\(=\)







\(\ds a\)














\(\ds \leadstoandfrom \ \ \)

\(\ds \exists a \in \Z: \, \)



\(\ds x - y\)

\(=\)







\(\ds p^ka\)





Multiply both sides by $p^k$








\(\ds \leadstoandfrom \ \ \)





\(\ds p^k\)

\(\divides\)







\(\ds \paren{x - y}\)





Definition of Divisor of Integer








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(\equiv\)







\(\ds y \pmod{p^k}\)





Definition of Congruence Modulo Integer



$\blacksquare$





