# 

Source: https://proofwiki.org/wiki/Ordinal_Multiplication_is_Associative



Theorem
Let $x, y, z$ be ordinals.
Let $\times$ denote ordinal multiplication.

Then:

$x \times \paren {y \times z} = \paren {x \times y} \times z$


Proof
The proof shall proceed by Transfinite Induction on $z$:


Basis for the Induction
Let $0$ denote the zero ordinal.














\(\ds x \times \paren {y \times 0}\)

\(=\)







\(\ds x \times 0\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds 0\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times 0\)





Ordinal Multiplication by Zero



This proves the basis for the induction.


Induction Step













\(\ds x \times \paren {y \times z}\)

\(=\)







\(\ds \paren {x \times y} \times z\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds x \times \paren {y \times z^+}\)

\(=\)







\(\ds x \times \paren {\paren {y \times z} + y}\)





Definition of Ordinal Multiplication














\(\ds \)

\(=\)







\(\ds x \times \paren {y \times z} + \paren {x \times y}\)





Ordinal Multiplication is Left Distributive














\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times z + \paren {x \times y}\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times z^+\)





Definition of Ordinal Multiplication



This proves the induction step.


Limit Case
The inductive hypothesis for the limit case states that:

$\forall w \in Z: x \times \paren {y \times w} = \paren {x \times y} \times w$
where $z$ is a limit ordinal.

The proof shall proceed by cases:


Case 1
If $y = 0$, then:














\(\ds x \times \paren {y \times z}\)

\(=\)







\(\ds x \times 0\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds 0\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds 0 \times z\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times z\)





Ordinal Multiplication by Zero





Case 2
If $y \ne 0$, then $y \times z$ is a limit ordinal by Limit Ordinals Preserved Under Ordinal Multiplication.

It follows that:














\(\ds x \times \paren {y \times z}\)

\(=\)







\(\ds \bigcup_{u \mathop < \paren {y \times z} } x \times u\)





Definition of Ordinal Multiplication














\(\ds \paren {x \times y} \times z\)

\(=\)







\(\ds \bigcup_{w \mathop < z} \paren {x \times y} \times w\)





Definition of Ordinal Multiplication




If $u < \paren {y \times z}$, then $u < \paren {y \times w}$ for some $w \in z$ by Ordinal is Less than Ordinal times Limit.














\(\ds x \times u\)

\(\le\)







\(\ds x \times \paren {y \times w}\)





Membership is Left Compatible with Ordinal Multiplication














\(\ds \)

\(=\)







\(\ds \paren {x \times y} \times w\)





Inductive Hypothesis














\(\ds \)

\(\le\)







\(\ds \paren {x \times y} \times z\)





Subset is Right Compatible with Ordinal Multiplication




Generalizing, the result follows for all $u \in \paren {y \times z}$.
Therefore by Supremum Inequality for Ordinals:

$x \times \paren {y \times z} \le \paren {x \times y} \times z$

Conversely, take any $w < z$.














\(\ds \paren {x \times y} \times w\)

\(=\)







\(\ds x \times \paren {y \times w}\)





Inductive Hypothesis














\(\ds \)

\(\le\)







\(\ds x \times \paren {y \times z}\)





Membership is Left Compatible with Ordinal Multiplication




It follows by Supremum Inequality for Ordinals that:

$\paren {x \times y} \times z \le x \times \paren {y \times z}$

By definition of set equality:

$x \times \paren {y \times z} = \paren {x \times y} \times z$

This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.26$




