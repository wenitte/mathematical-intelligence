# 

Source: https://proofwiki.org/wiki/Membership_is_Left_Compatible_with_Ordinal_Multiplication



Theorem
Let $x$, $y$, and $z$ be ordinals.
Then:

$\paren {x < y \land z > 0} \iff \paren {z \cdot x} < \paren {z \cdot y}$


Proof
Sufficient Condition
The proof of the sufficient condition shall proceed by Transfinite Induction on $y$.
$\Box$


Basis for the Induction
Both $x < 0$ and $\paren {x \cdot z} < \paren {0 \cdot z}$ are contradictory, so the if and only if statement holds for the condition that $y = 0$.
This proves the basis for the induction.
$\Box$


Induction Step
Suppose the biconditional statement holds for $y$.  Then:














\(\ds x < y^+\)

\(\leadsto\)







\(\ds x < y \lor x = y\)





Definition of Successor Set














\(\ds x < y \land z > 0\)

\(\leadsto\)







\(\ds \paren {z \cdot x} < \paren {z \cdot y}\)





Inductive Hypothesis














\(\ds x = y\)

\(\leadsto\)







\(\ds \paren {z \cdot x} = \paren {z \cdot y}\)





Leibniz's law














\(\ds z > 0\)

\(\leadsto\)







\(\ds \paren {z \cdot y} < \paren {\paren {z \cdot y} + z}\)





Membership is Left Compatible with Ordinal Addition














\(\ds \)

\(\leadsto\)







\(\ds \paren {z \cdot y} < \paren {z \cdot y^+}\)





Definition of Ordinal Multiplication














\(\ds \)

\(\leadsto\)







\(\ds \paren {z \cdot x} < \paren {z \cdot y^+}\)





Transitivity of $<$ and Leibniz's law



In either case:

$\paren {z \cdot x} < \paren {z \cdot y^+}$
This proves the induction step.
$\Box$


Limit Case
Suppose $y$ is a limit ordinal:














\(\ds \)

\(\)







\(\ds \forall w \in y: \paren {\paren {x < w \land z > 0} \iff \paren {z \cdot x} < \paren {z \cdot w} }\)





by hypothesis














\(\ds \)

\(\leadsto\)







\(\ds \paren {\exists w \in y: \paren {x < w \land z > 0} \iff \exists w \in y: \paren {z \cdot x} < \paren {z \cdot w} }\)





Predicate Logic Manipulation














\(\ds \)

\(\leadsto\)







\(\ds \paren {\paren {x < \bigcup y \land z > 0} \iff \paren {z \cdot x} < \bigcup_{w \mathop \in y} \paren {z \cdot w} }\)





Definition of Set Union














\(\ds \)

\(\leadsto\)







\(\ds \paren {\paren {x < y \land z > 0} \iff \paren {z \cdot x} < \bigcup_{w \mathop \in y} \paren {z \cdot w} }\)





Limit Ordinal Equals its Union














\(\ds \)

\(\leadsto\)







\(\ds \paren {\paren {x < y \land z > 0} \iff \paren {z \cdot x} < \paren {z \cdot y} }\)





Definition of Ordinal Multiplication



This proves the limit case.
$\Box$


Necessary Condition
Conversely, suppose $\paren {z \cdot x} < \paren {z \cdot y^+}$.
Then $z \ne 0$ because if it were equal, both sides of the inequality would be $0$.
So $z > 0$.
Furthermore:

$y < x \implies \paren {z \cdot y} < \paren {z \cdot x}$
$y = x \implies \paren {z \cdot y} = \paren {z \cdot x}$
So if $\paren {z \cdot x} < \paren {z \cdot y}$, then $y \ne x$ and $y \not < x$, so $x < y$ by Ordinal Membership is Trichotomy.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.19$




