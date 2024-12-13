# 

Source: https://proofwiki.org/wiki/Ordinal_Power_of_Power



Theorem
Let $x$, $y$, and $z$ be ordinals.

Then:

$\paren {x^y}^z = x^{y \mathop \times z}$


Proof
The proof shall proceed by Transfinite Induction on $z$.


Basis for the Induction













\(\ds \paren {x^y}^0\)

\(=\)







\(\ds 1\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^0\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{y \times 0}\)





Definition of Ordinal Multiplication



This proves the basis for the induction.
$\Box$

Induction Step
Suppose $\paren {x^y}^z = x^{y \times z}$.

Then:














\(\ds \paren {x^y}^{z^+}\)

\(=\)







\(\ds \paren {x^y}^z \times x^y\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{y \times z} \times x^y\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds x^{\paren {y \times z} + y}\)





Ordinal Sum of Powers














\(\ds \)

\(=\)







\(\ds x^{y \times z^+}\)





Definition of Ordinal Multiplication



This proves the induction step.
$\Box$

Limit Case
Suppose $\paren {x^y}^w = x^{y \times w}$ for all $w \in z$ where $z$ is a limit ordinal.

Then:










\(\ds \forall w \in z: \, \)



\(\ds \left({x^y}\right)^w\)

\(=\)







\(\ds x^{y \mathop \times w}\)





Inductive Hypothesis








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{w \mathop \in z} \paren {x^y}^w\)

\(=\)







\(\ds \bigcup_{w \mathop \in z} x^{y \times w}\)





Indexed Union Equality








\(\ds \leadsto \ \ \)





\(\ds \paren {x^y}^z\)

\(=\)







\(\ds \bigcup_{w \mathop \in z} x^{y \times w}\)





Definition of Ordinal Exponentiation




To prove the statement, it is necessary and sufficient to prove that:

$\ds \bigcup_{w \mathop \in z} x^{y \times w} = x^{y \times z}$
The proof of this shall proceed by cases:


Case 1
If $y = 0$, it follows that:














\(\ds \paren {x^y}^z\)

\(=\)







\(\ds 1^z\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds 1\)





Exponent Base of One














\(\ds \)

\(=\)







\(\ds x^0\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{y \times z}\)





Ordinal Multiplication by Zero





Case 2
If $y \ne 0$:














\(\ds w\)

\(\in\)







\(\ds z\)














\(\ds \leadsto \ \ \)





\(\ds y \times w\)

\(\le\)







\(\ds y \times z\)





Membership is Left Compatible with Ordinal Multiplication and Ordinal Multiplication by Zero








\(\ds \leadsto \ \ \)





\(\ds x^{y \times w}\)

\(\le\)







\(\ds x^{y \times z}\)





Membership is Left Compatible with Ordinal Exponentiation and definition of ordinal exponentiation




Therefore, by Supremum Inequality for Ordinals, it follows that:

$\ds \bigcup_{w \mathop \in z} x^{y \times w} \le x^{y \times z}$

Conversely:














\(\ds v\)

\(\in\)







\(\ds y \times z\)














\(\ds \leadsto \ \ \)

\(\ds \exists w \in z: \, \)



\(\ds v\)

\(\in\)







\(\ds y \times w\)





Ordinal is Less than Ordinal times Limit








\(\ds \leadsto \ \ \)





\(\ds x^v\)

\(\le\)







\(\ds x^{y \times w}\)





Membership is Left Compatible with Ordinal Exponentiation



By Supremum Inequality for Ordinals, it follows that:

$\ds \bigcup_{v \mathop \in y \times z} x^v \le \bigcup_{w \mathop \in z} x^{y \times w}$

Therefore, by definition of ordinal exponentiation:














\(\ds x^{y \times z}\)

\(=\)







\(\ds \bigcup_{w \mathop \in z} x^{y \times w}\)




















\(\ds \)

\(=\)







\(\ds \paren {x^y}^z\)









This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.42$




