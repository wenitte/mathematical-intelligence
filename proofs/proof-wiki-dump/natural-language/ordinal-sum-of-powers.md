# 

Source: https://proofwiki.org/wiki/Ordinal_Sum_of_Powers



Theorem
Let $x$, $y$, and $z$ be ordinals.

Then:

$x^y \times x^z = x^{y + z}$


Proof
The proof shall proceed by Transfinite Induction on $z$.


Basis for the Induction
$x^0 = 1$ for all $x$













\(\ds x^y \times x^z\)

\(=\)







\(\ds x^y\)





Ordinal Multiplication by Zero














\(\ds \)

\(=\)







\(\ds x^{y + z}\)





Ordinal Addition by Zero



This proves the basis for the induction.
$\Box$


Induction Step
Suppose that $x^y \times x^z = x^{y + z}$.

Then:














\(\ds x^y \times x^{z^+}\)

\(=\)







\(\ds x^y \times \paren {x^z \times x}\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds \paren {x^y \times x^z} \times x\)





Ordinal Multiplication is Associative














\(\ds \)

\(=\)







\(\ds x^{y + z} \times x\)





Inductive Hypothesis














\(\ds \)

\(=\)







\(\ds x^{\paren {y + z}^+}\)





Definition of Ordinal Exponentiation














\(\ds \)

\(=\)







\(\ds x^{y + z^+}\)





Definition of Ordinal Addition



This proves the induction step.
$\Box$


Limit Case
Suppose that $\forall w \in z: x^y \times x^w = x^{y + w}$ for limit ordinal $z$.










\(\ds \forall w \in z: \, \)



\(\ds x^y \times x^w\)

\(\le\)







\(\ds x^y \times x^z\)





Membership is Left Compatible with Ordinal Multiplication








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{w \mathop \in z} \paren {x^y \times x^w}\)

\(\le\)







\(\ds x^y \times x^z\)





Indexed Union Subset




Conversely:














\(\ds w\)

\(\in\)







\(\ds x^y \times x^z\)














\(\ds \leadsto \ \ \)

\(\ds \exists u \in x^z: \, \)



\(\ds w\)

\(\in\)







\(\ds x^y \times u\)





Ordinal is Less than Ordinal times Limit








\(\ds \leadsto \ \ \)

\(\ds \exists v \in z: \exists u \in x^v: \, \)



\(\ds w\)

\(\in\)







\(\ds x^y \times u\)





Ordinal is Less than Ordinal to Limit Power



But this means that $u$ is bounded above by $x^v$ for some $v \in z$.

Thus there exists a $v \in z$ such that:

$w \le x^y \times x^v$

By Supremum Inequality for Ordinals, it follows that:

$\ds x^y \times x^z \le \bigcup_{w \mathop \in z} \paren {x^y \times x^w}$















\(\ds x^y \times x^z\)

\(=\)







\(\ds \bigcup_{w \mathop \in z} \paren {x^y \times x^w}\)





Definition 2 of Set Equality














\(\ds \)

\(=\)







\(\ds \bigcup_{w \mathop \in z} x^{y + w}\)





Inductive Hypothesis for the Limit Case



$\Box$










\(\ds \forall w \in z: \, \)



\(\ds y + w\)

\(\le\)







\(\ds y + z\)





Membership is Left Compatible with Ordinal Addition










\(\ds \forall w \in z: \, \)



\(\ds x^{y + w}\)

\(\le\)







\(\ds x^{y + z}\)





Membership is Left Compatible with Ordinal Exponentiation








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{w \mathop \in z} x^{y + w}\)

\(\le\)







\(\ds x^{y + z}\)





by Indexed Union Subset




Conversely:














\(\ds w\)

\(\in\)







\(\ds x^{y + z}\)














\(\ds \leadsto \ \ \)

\(\ds \exists u \in y + z: \, \)



\(\ds w\)

\(\in\)







\(\ds x^u\)





Definition of Ordinal Exponentiation








\(\ds \leadsto \ \ \)

\(\ds \exists v \in z: \exists u \in y + v: \, \)



\(\ds w\)

\(\in\)







\(\ds x^u\)





Definition of Ordinal Addition



Thus, $u$ is bounded above by $y + v$ for some $v \in z$.
Therefore:

$x^u \le x^{y + v}$

By Supremum Inequality for Ordinals, it follows that:

$\ds x^{y + z} \le \bigcup_{w \mathop \in z} x^{y + w}$

Thus, by definition of set equality:

$\ds x^{y + z} = \bigcup_{w \mathop \in z} x^{y + w}$
$\Box$

Combining the results of the first and second lemmas for the limit case:

$x^{y + z} = x^y \times x^z$
This proves the limit case.
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.41$




