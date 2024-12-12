# 

Source: https://proofwiki.org/wiki/Condition_for_Commensurability_of_Roots_of_Quadratic_Equation



Theorem
Consider the quadratic equation:

$(1): \quad a x - x^2 = \dfrac {b^2} 4$

Then $x$ and $a - x$ are commensurable if and only if $\sqrt{a^2 - b^2}$ and $a$ are commensurable.

In the words of Euclid:

If there be two unequal straight lines, and to the greater there be applied a parallelogram equal to the fourth part of the square on the less and deficient by a square figure, and if it divide it into parts which are commensurable in length, then the square on the greater will be greater than the square on the less by the square on a straight line commensurable with the greater.And, if the square on the greater be greater than the square on the less by the square on a straight line commensurable with the greater, and if there be applied to the greater a parallelogram equal to the fourth part of the square on the less and deficient by a square figure, it will divide it into parts which are commensurable in length.
(The Elements: Book $\text{X}$: Proposition $17$)


Lemma
In the words of Euclid:

If to any straight line there be applied a parallelogram deficient by a square figure, the applied parallelogram is equal to the rectangle contained by the segments of the straight line resulting from the application.
(The Elements: Book $\text{X}$: Proposition $17$ : Lemma)


Proof
We have that:














\(\ds x \paren {a - x} + \paren {\frac a 2 - x}^2\)

\(=\)







\(\ds a x - x^2 + \frac {a^2} 4 - 2 \frac a 2 x + x^2\)




















\(\ds \)

\(=\)







\(\ds \frac {a^2} 4\)





simplifying








\(\ds \leadsto \ \ \)





\(\ds 4 x \paren {a - x} + 4 \paren {\frac a 2 - x}^2\)

\(=\)







\(\ds a^2\)














\(\ds \leadsto \ \ \)





\(\ds b^2 + \paren {a - 2 x}^2\)

\(=\)







\(\ds a^2\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds a^2 - b^2\)

\(=\)







\(\ds \paren {a - 2 x}^2\)














\(\ds \leadsto \ \ \)





\(\ds \sqrt {a^2 - b^2}\)

\(=\)







\(\ds a - 2 x\)










Let $a \frown b$ denote that $a$ is commensurable with $b$.


Necessary Condition
Let $\paren {a - x} \frown x$.
From Commensurability of Sum of Commensurable Magnitudes:

$a \frown x$
From Magnitudes with Rational Ratio are Commensurable:

$x \frown 2 x$
So:














\(\ds a\)

\(\frown\)







\(\ds 2 x\)





Commensurability is Transitive Relation














\(\ds \)

\(\frown\)







\(\ds \paren {a - 2 x}\)





Commensurability of Sum of Commensurable Magnitudes














\(\ds \)

\(\frown\)







\(\ds \sqrt {a^2 - b^2}\)









$\Box$


Sufficient Condition
Let $a \frown \sqrt {a^2 - b^2}$.
Then:














\(\ds a\)

\(\frown\)







\(\ds \sqrt {a^2 - b^2}\)




















\(\ds \)

\(\frown\)







\(\ds \paren {a - 2 x}\)




















\(\ds \)

\(\frown\)







\(\ds 2 x\)





Commensurability of Sum of Commensurable Magnitudes




From Magnitudes with Rational Ratio are Commensurable:

$x \frown 2 x$
From Commensurability is Transitive Relation:

$a \frown x$
From Commensurability of Sum of Commensurable Magnitudes:

$\paren {a - x} \frown x$
$\blacksquare$


Historical Note
This proof is Proposition $17$ of Book $\text{X}$ of Euclid's The Elements.


Sources
1926: Sir Thomas L. Heath: Euclid: The Thirteen Books of The Elements: Volume 3 (2nd ed.) ... (previous) ... (next): Book $\text X$. Propositions




