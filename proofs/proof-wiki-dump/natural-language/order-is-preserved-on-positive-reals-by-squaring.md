# 

Source: https://proofwiki.org/wiki/Order_is_Preserved_on_Positive_Reals_by_Squaring



Theorem
Let $x, y \in \R: x > 0, y >0$.

Then:

$x < y \iff x^2 < y^2$



This page has been identified as a candidate for refactoring of basic complexity.In particular: Extract "necessary condition" and "sufficient condition" instances in Proofs 1 and 4 so as to remove duplicationUntil this has been finished, please leave {{Refactor}} in the code.
New contributors: Refactoring is a task which is expected to be undertaken by experienced editors only.

Because of the underlying complexity of the work needed, it is recommended that you do not embark on a refactoring task until you have become familiar with the structural nature of pages of $\mathsf{Pr} \infty \mathsf{fWiki}$.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Refactor}} from the code.
Proof 1
Necessary Condition
Assume $x < y$.
Then:














\(\ds x < y\)

\(\implies\)







\(\ds x \times x < x \times y\)





Real Number Ordering is Compatible with Multiplication














\(\ds x < y\)

\(\implies\)







\(\ds x \times y < y \times y\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(\leadsto\)







\(\ds x^2 < y^2\)





Transitive Law



So:

$x < y \implies x^2 < y^2$
$\Box$


Sufficient Condition
Assume $x^2 < y^2$.
Then:














\(\ds x^2\)

\(<\)







\(\ds y^2\)














\(\ds \leadsto \ \ \)





\(\ds 0\)

\(<\)







\(\ds y^2 - x^2\)





Real Number Ordering is Compatible with Addition








\(\ds \leadsto \ \ \)





\(\ds \paren {y - x} \paren {y + x}\)

\(>\)







\(\ds 0\)





Difference of Two Squares








\(\ds \leadsto \ \ \)





\(\ds \paren {y - x} \paren {y + x} \paren {y + x}^{-1}\)

\(>\)







\(\ds 0 \times \paren {y + x}^{-1}\)





as $x + y > 0$








\(\ds \leadsto \ \ \)





\(\ds y - x\)

\(>\)







\(\ds 0\)














\(\ds \leadsto \ \ \)





\(\ds x\)

\(<\)







\(\ds y\)









So:

$x^2 < y^2 \implies x < y$
$\blacksquare$


Proof 2
From Real Numbers form Totally Ordered Field, the real numbers form an ordered field.
The result follows from Order of Squares in Ordered Field.
$\blacksquare$


Proof 3
From Real Numbers form Totally Ordered Field, the real numbers form a totally ordered field.
By definition, a totally ordered field is a totally ordered ring without proper zero divisors.
The result follows from Order of Squares in Totally Ordered Ring without Proper Zero Divisors.
$\blacksquare$


Proof 4
Necessary Condition
Let $x < y$.
Then:














\(\ds x < y\)

\(\implies\)







\(\ds x \times x < x \times y\)





Real Number Ordering is Compatible with Multiplication














\(\ds x < y\)

\(\implies\)







\(\ds x \times y < y \times y\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(\leadsto\)







\(\ds x^2 < y^2\)





Transitive Law



So:

$x < y \implies x^2 < y^2$
$\Box$


Sufficient Condition
Let $x^2 < y^2$.
Aiming for a contradiction, suppose $x \ge y$.
Then:














\(\ds x \ge y\)

\(\implies\)







\(\ds x \times x \ge x \times y\)





Real Number Ordering is Compatible with Multiplication














\(\ds x \ge y\)

\(\implies\)







\(\ds x \times y \ge y \times y\)





Real Number Ordering is Compatible with Multiplication














\(\ds \)

\(\leadsto\)







\(\ds x^2 \ge y^2\)





Transitive Law



But this contradicts our assertion that $x^2 < y^2$.
Hence by Proof by Contradiction it follows that:

$x < y$
$\blacksquare$





