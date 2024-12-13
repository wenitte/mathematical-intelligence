# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_is_Left_Distributive



Theorem
Let $x$, $y$, and $z$ be ordinals.
Let $\times$ denote ordinal multiplication.
Let $+$ denote ordinal addition.

Then:

$x \times \paren {y + z} = \paren {x \times y} + \paren {x \times z}$


Proof
The proof shall proceed by Transfinite Induction, as follows:


Basis for the Induction
Let $0$ denote the ordinal zero.














\(\ds x \times \paren {y + 0}\)

\(=\)







\(\ds x \times y\)





Definition of Ordinal Addition














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + 0\)





Definition of Ordinal Addition














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times 0}\)





Definition of Ordinal Multiplication



This proves the basis for the induction.


Induction Step













\(\ds x \times \paren {y + z}\)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times z}\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds x \times \paren {y + z^+}\)

\(=\)







\(\ds x \times \paren {y + z}^+\)





Definition of Ordinal Addition














\(\ds \)

\(=\)







\(\ds \paren {x \times \paren {y + z} } + x\)





Definition of Ordinal Multiplication














\(\ds \)

\(=\)







\(\ds \paren {\paren {x \times y} + \paren {x \times z} } + x\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {\paren {x \times z} + x}\)





Ordinal Addition is Associative














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times z^+}\)





Definition of Ordinal Multiplication



This proves the induction step.


Limit Case
The inductive hypothesis for the limit case states that:

$x \times \paren {y + w} = \paren {x \times y} + \paren {x \times w}$ for all $w \in z$ and $z$ is a limit ordinal.

The proof shall proceed by cases:


Case 1
Suppose $x = 0$.














\(\ds x \times \paren {y + z}\)

\(=\)







\(\ds 0\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds 0 + 0\)





Definition of Ordinal Addition














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times z}\)





Ordinal Multiplication by Zero





Case 2
Suppose that $x \ne 0$.
Since $w$ is a limit ordinal, $y + w$ and $x \times w$ are limit ordinals by Limit Ordinals Preserved Under Ordinal Addition and Limit Ordinals Preserved Under Ordinal Multiplication.














\(\ds x \times \paren {y + z}\)

\(=\)







\(\ds \bigcup_{w \mathop \in \paren {y + z} } \paren {x \times w}\)





Definition of Ordinal Multiplication














\(\ds \paren {x \times y} + \paren {x \times z}\)

\(=\)







\(\ds \bigcup_{v \mathop \in \paren {x \times z} } \paren {x \times y} + v\)





Definition of Ordinal Addition




Take any $w \in y + z$.
It follows that $w \in y \lor \paren {y \subseteq w \land w \in y + z}$ by Relation between Two Ordinals and Transitive Set is Proper Subset of Ordinal iff Element of Ordinal.
Thus, $w \in y \lor w = y + u$ for some $u \in z$ by Ordinal Subtraction when Possible is Unique.

If $w < y$, then:














\(\ds x \times w\)

\(\in\)







\(\ds x \times y\)





Membership is Left Compatible with Ordinal Multiplication














\(\ds \)

\(\subseteq\)







\(\ds \paren {x \times y} + v\)





Ordinal is Less than Sum




If $w = y + u$, then:














\(\ds x \times w\)

\(=\)







\(\ds x \times \paren {y + u}\)





Definition of $w$














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times u}\)





Inductive Hypothesis














\(\ds x \times u\)

\(\in\)







\(\ds x \times z\)





Membership is Left Compatible with Ordinal Multiplication














\(\ds \)

\(=\)







\(\ds \paren {x \times y} + v\)





setting $v$ to $x \times u$



By Supremum Inequality for Ordinals:

$x \times \paren {y + z} \subseteq \paren {x \times y} + \paren {x \times z}$

Conversely, if $v \in x \times z$, then:










\(\ds \exists w \in z: \, \)



\(\ds v\)

\(\in\)







\(\ds x \times w\)





Ordinal is Less than Ordinal times Limit








\(\ds \leadsto \ \ \)





\(\ds \paren {x \times y} + v\)

\(=\)







\(\ds \paren {x \times y} + \paren {x \times w}\)





Substitutivity of Class Equality














\(\ds \)

\(=\)







\(\ds x \times \paren {y + w}\)





Inductive Hypothesis



By Supremum Inequality for Ordinals:

$\paren {x \times y} + \paren {x \times z} \subseteq x \times \paren {y + z}$

By definition of set equality:

$x \times \paren {y + z} = \paren {x \times y} + \paren {x \times z}$
This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.25$




