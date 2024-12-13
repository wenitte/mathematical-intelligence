# 

Source: https://proofwiki.org/wiki/Limit_Ordinals_Closed_under_Ordinal_Exponentiation

Theorem
Let $x$ and $y$ be ordinals.
Let $y$ be a limit ordinal.
Let $x^y$ denote ordinal exponentiation.

Then:

If $x > 1$, then $x^y$ is a limit ordinal.
If $x \ne \O$, then $y^x$ is a limit ordinal.


Proof
Suppose $x > 1$.
Suppose also that $x^y$ is the successor of some ordinal $w$.
By definition of ordinal multiplication:

$\ds x^y = \bigcup_{z \mathop \in y} x^z$
Then:














\(\ds w\)

\(\in\)







\(\ds x^y\)





Ordinal is Less Than Successor










\(\ds \exists z \in y: \, \)



\(\ds w\)

\(\in\)







\(\ds x^z\)





Definition of Ordinal Exponentiation














\(\ds w^+\)

\(\subseteq\)







\(\ds x^z\)





Successor of Element of Ordinal is Subset














\(\ds \)

\(\in\)







\(\ds x^{z^+}\)





Membership is Left Compatible with Ordinal Exponentiation




But $z^+ \in y$ by Successor of Ordinal Smaller than Limit Ordinal is also Smaller.
So $w^+ \in x^y$ and $w^+ \in w^+$.
This creates a membership loop and thus is a contradiction by No Membership Loops.
$\Box$

For the second part, since $x$ is not the empty set it follows that $x = z^+$ for some $z$ or that $x$ is a limit ordinal.
If $x$ is a limit ordinal, then $y^x$ is a limit ordinal by the first part.

If $x$ is the successor of $z$, then:

$y^x = y^w × y$ by the definition of ordinal exponentiation.
Then, $y^x$ is a limit ordinal by Limit Ordinals Preserved Under Ordinal Multiplication.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.39$




