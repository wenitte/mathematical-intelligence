# 

Source: https://proofwiki.org/wiki/Anning%27s_Theorem



Theorem
In any base greater than $1$, the fraction:

$\dfrac {101 \, 010 \, 101} {110 \, 010 \, 011}$
has the property that if the two $1$'s in the center of the numerator and the denominator are replaced by the same odd number of $1$'s, the value of the fraction remains the same.
For example:

$\dfrac {101 \, 010 \, 101} {110 \, 010 \, 011} = \dfrac {1 \, 010 \, 111 \, 110 \, 101} {1 \, 100 \, 111 \, 110 \, 011} = \dfrac {9091} {9901}$ (in base $10$).


Proof
Let $b$ be the base in question.
Let $F = \dfrac {101 \, 010 \, 101} {110 \, 010 \, 011}$.
Then:

$F = \dfrac {1 + b^2 + b^4 + b^6 + b^8} {1 + b + b^4 + b^7 + b^8}$
It is necessary to prove that for all $k \in \Z_{>0}$:

$F = \dfrac {1 + b^2 + b^4 + b^5 + \cdots + b^{2 k + 2} + b^{2 k + 4} + b^{2 k + 6} } {1 + b + b^4 + b^5 + \cdots + b^{2 k + 2} + b^{2 k + 5} + b^{2 k + 6} }$
This is done by:

multiplying the numerator of one by the denominator of the other
and then:

multiplying the denominator of one by the numerator of the other
and checking that they are equal.

Thus we proceed:














\(\ds \)

\(\)







\(\ds 1 + b^2 + b^4 + b^6 + b^8\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 1 + b + b^4 + b^5 + \cdots + b^{2 k + 2} + b^{2 k + 5} + b^{2 k + 6}\)




















\(\ds \)

\(=\)







\(\ds 1 + b + b^4 + b^5 + \cdots + b^{2 k + 2} + b^{2 k + 5} + b^{2 k + 6}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^2 + b^3 + b^6 + b^7 + \cdots + b^{2 k + 4} + b^{2 k + 7} + b^{2 k + 8}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^4 + b^5 + b^8 + b^9 + \cdots + b^{2 k + 6} + b^{2 k + 9} + b^{2 k + 10}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^6 + b^7 + b^{10} + b^{11} + \cdots + b^{2 k + 8} + b^{2 k + 11} + b^{2 k + 12}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^8 + b^9 + b^{12} + b^{13} + \cdots + b^{2 k + 10} + b^{2 k + 13} + b^{2 k + 14}\)










and:














\(\ds \)

\(\)







\(\ds 1 + b + b^4 + b^7 + b^8\)




















\(\ds \)

\(\)





\(\, \ds \times \, \)

\(\ds 1 + b^2 + b^4 + b^5 + \cdots + b^{2 k + 2} + b^{2 k + 4} + b^{2 k + 6}\)




















\(\ds \)

\(=\)







\(\ds 1 + b^2 + b^4 + b^5 + \cdots + b^{2 k + 2} + b^{2 k + 4} + b^{2 k + 6}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b + b^3 + b^5 + b^6 + \cdots + b^{2 k + 3} + b^{2 k + 5} + b^{2 k + 7}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^4 + b^6 + b^8 + b^9 + \cdots + b^{2 k + 6} + b^{2 k + 8} + b^{2 k + 10}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^7 + b^9 + b^{11} + b^{12} + \cdots + b^{2 k + 9} + b^{2 k + 11} + b^{2 k + 13}\)




















\(\ds \)

\(\)





\(\, \ds + \, \)

\(\ds b^8 + b^{10} + b^{12} + b^{13} + \cdots + b^{2 k + 10} + b^{2 k + 12} + b^{2 k + 14}\)









Equality can be demonstrated.
$\blacksquare$


Source of Name
This entry was named for Norman Herbert Anning.


Historical Note
Anning's Theorem appears as a problem in The $1970$ publication 250 Problems in Elementary Number Theory by Wacław Sierpiński, who cites N. Anning as its source.
Confusingly, later he refers to P. Anning in the context of the same result.  It can be assumed that this is a mistake.

The name Anning's Theorem has been coined by $\mathsf{Pr} \infty \mathsf{fWiki}$ as a convenient way to refer to this result, whose description would otherwise be too unwieldy for convenience.


Sources
1956: N. Anning: Curiosa 444 (Scripta Mathematica Vol. 22: p. 227)
1970: Wacław Sierpiński: 250 Problems in Elementary Number Theory: No. $208$
1997: David Wells: Curious and Interesting Numbers (2nd ed.) ... (previous) ... (next): $101,010,101 / 110,010,011$




