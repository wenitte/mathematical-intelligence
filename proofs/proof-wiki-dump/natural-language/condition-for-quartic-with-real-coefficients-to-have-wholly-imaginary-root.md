# 

Source: https://proofwiki.org/wiki/Condition_for_Quartic_with_Real_Coefficients_to_have_Wholly_Imaginary_Root



Theorem
Let $Q$ be the quartic equation:

$(1): \quad z^4 + a_1 z^3 + a_2 z^2 + a_3 z + a_4 = 0$
such that all of $a_1, a_2, a_3, a_4$ are real numbers.

Then $Q$ has a root which is wholly imaginary if and only if:

$\text {(a)}: \quad a_3^2 + a_1^2 a_4 = a_1 a_2 a_3$
$\text {(b)}: \quad a_1 a_3 > 0$


Proof
Necessary Condition
We have:














\(\ds a_3^2 + a_1^2 a_4\)

\(=\)







\(\ds a_1 a_2 a_3\)














\(\ds \leadsto \ \ \)





\(\ds a_4\)

\(=\)







\(\ds \frac {a_3} {a_1} \paren {a_2 - \frac {a_3} {a_1} }\)









This leads to the factorisation of $(1)$:














\(\ds z^4 + a_1 z^3 + a_2 z^2 + a_3 z + a_4\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds \paren {z^2 + \frac {a_3} {a_1} } \paren {z^2 + a_1 z + \paren {a_2 - \frac {a_3} {a_1} } }\)

\(=\)







\(\ds 0\)










Two solutions to this are found from:














\(\ds z^2 + \frac {a_3} {a_1}\)

\(=\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds z^2\)

\(=\)







\(\ds -\frac {a_3} {a_1}\)










\(\text {(2)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds \pm \sqrt {-\frac {a_3} {a_1} }\)










The other two solutions are found by solving:














\(\ds z^2 + a_1 z + \paren {a_2 - \frac {a_3} {a_1} }\)

\(=\)







\(\ds 0\)










\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds z\)

\(=\)







\(\ds -\frac {a_1} 2 \pm \frac {\sqrt {a_1^2 - 4 \paren {a_2 - a_3 / a_1} } } 2\)





Quadratic Formula



As $a_1 \ne 0$ it follows that $(3)$ always has a real part.
So only the $(2)$ can produce roots which are wholly imaginary, and that can happen only when:

$a_3 / a_1 > 0$
that is:

$a_1 a_3 > 0$
Thus, if $a_3^2 + a_1^2 a_4 = a_1 a_2 a_3$ and $a_1 a_3 > 0$, $Q$ has wholly imaginary roots.


Sufficient Condition
Let $z^4 + a_1 z^3 + a_2 z^2 + a_3 z + a_4 = 0$ have wholly imaginary roots.
Then it can be written:

$\paren {z^2 + b^2} \paren {z^2 + m z + n} = 0$
By long division of $Q$ by $z^2 + b^2$:

$\paren {z^2 + b^2} \paren {z^2 + a_1 z + \paren {a_2 + b^2} } + \paren {a_3 - a_1 b^2} z + a_4 - \paren {a_2 - b^2} b^2 = 0$
For this to be in the above format, it is necessary that:

$\paren {a_3 - a_1 b^2} z + a_4 - \paren {a_2 - b^2} b^2 \equiv 0$
That is:




\(\text {(4)}: \quad\)









\(\ds a_3 - a_1 b^2\)

\(=\)







\(\ds 0\)










\(\text {(5)}: \quad\)









\(\ds a_4 - \paren {a_2 - b^2} b^2\)

\(=\)







\(\ds 0\)










Hence:














\(\ds b^4 - a_2 b^2 + a^4\)

\(=\)







\(\ds 0\)





from $(4)$








\(\ds \leadsto \ \ \)





\(\ds b^2\)

\(=\)







\(\ds \frac {a_2 \pm \sqrt {a_2^2 - 4 a^4} } 2\)





Quadratic Formula




\(\text {(6)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \paren {2 b^2 - a_2}^2\)

\(=\)







\(\ds a_2^2 - 4 a^4\)





rearranging and squaring both sides














\(\ds b^2\)

\(=\)







\(\ds \frac {a_3} {a_1}\)





from $(5)$








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac {2 a_3} {a_1} - a_2}^2\)

\(=\)







\(\ds a_2^2 - 4 a^4\)





substituting for $b^2$ into $(6)$, rearranging and squaring both sides








\(\ds \leadsto \ \ \)





\(\ds \paren {\frac {2 a_3} {a_1} - a_2}^2\)

\(=\)







\(\ds a_2^2 - 4 a^4\)





substituting for $b^2$ into $(6)$, rearranging and squaring both sides








\(\ds \leadsto \ \ \)





\(\ds 4 \frac {a_3^2} {a_1^2} + a_2^2 - \frac {4 a_2 a_3} {a_1}\)

\(=\)







\(\ds a_2^2 - 4 a_4\)














\(\ds \leadsto \ \ \)





\(\ds a_3^2 + a_1^2 a_4\)

\(=\)







\(\ds a_1 a_2 a_3\)










Hence if $z^4 + a_1 z^3 + a_2 z^2 + a_3 z + a_4 = 0$ has wholly imaginary roots, then:

$a_3^2 + a_1^2 a_4 = a_1 a_2 a_3$

We also see that the roots themselves are $\pm b$, where:

$b = \sqrt {-\dfrac {a_3} {a_1}}$
Thus we have also shown that $a_3 a_1 > 0$ in order for those roots to indeed be wholly imaginary as required.
$\blacksquare$


Sources
1981: Murray R. Spiegel: Theory and Problems of Complex Variables (SI ed.) ... (previous) ... (next): $1$: Complex Numbers: Supplementary Problems: Miscellaneous Problems: $129$
(although see Condition for Quartic with Real Coefficients to have Wholly Imaginary Root/Mistake for analysis of an error in that work)




