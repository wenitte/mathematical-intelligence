# 

Source: https://proofwiki.org/wiki/Congruence_Modulo_Equivalence_for_Integers_in_P-adic_Integers/Lemma_1



Theorem
Let $\Z_p$ be the $p$-adic integers for some prime $p$.
Let $k \in \N_{>0}$.

Then:

$\forall a \in \Z: \dfrac a {p^k} \in \Z_p \iff \dfrac a {p^k} \in \Z$


Proof
Necessary Condition
Let $a \in \Z$.
We have:














\(\ds \dfrac a {p^k}\)

\(\in\)







\(\ds \Z_p\)














\(\ds \leadsto \ \ \)





\(\ds \dfrac a {p^k}\)

\(\in\)







\(\ds \Z_p \cap \Q\)














\(\ds \leadsto \ \ \)

\(\ds \exists c, d \in \Z : p \nmid d: \, \)



\(\ds \dfrac a {p^k}\)

\(=\)







\(\ds \dfrac c d\)





Characterization of Rational P-adic Integer








\(\ds \leadsto \ \ \)





\(\ds ad\)

\(=\)







\(\ds cp^k\)





Multiply both sides by $dp^k$








\(\ds \leadsto \ \ \)





\(\ds p^k\)

\(\divides\)







\(\ds ad\)





Definition of Divisor








\(\ds \leadsto \ \ \)





\(\ds p^k\)

\(\divides\)







\(\ds a\)





Euclid's Lemma and $p \nmid d$








\(\ds \leadsto \ \ \)





\(\ds \dfrac a {p^k}\)

\(\in\)







\(\ds \Z\)





Definition of Divisor



$\Box$

Sufficient Condition
From Integers are Dense in P-adic Integers:

$\Z \subseteq \Z_p$
The result follows.
$\blacksquare$





