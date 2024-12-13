# 

Source: https://proofwiki.org/wiki/Membership_is_Left_Compatible_with_Ordinal_Exponentiation



Theorem
Let $x$, $y$, and $z$ be ordinals.
Suppose $1 < z$.

Then:

$x < y \iff z^x < z^y$


Proof
Sufficient Condition
The proof shall proceed by Transfinite Induction on $y$.


Basis for the Induction
It is a contradiction that $x < 0$ by the definition of empty set.
This proves the basis for the induction.


Induction Step
The inductive step states that $x < y \implies z^x < z^y$.
Then, if $x < y^+$, then $x = y \lor x < y$.


Lemma
$z^y < z^y \times y$ by Membership is Left Compatible with Ordinal Multiplication.
So $z^y < z^{y^+}$ by the definition of ordinal exponentiation.

$\Box$

Suppose $x = y$.  Then $z^x < z^{y^+}$.
Suppose $x < y$.  Then:














\(\ds z^x\)

\(<\)







\(\ds z^y\)





Inductive Hypothesis














\(\ds \)

\(<\)







\(\ds z^{y^+}\)





Lemma above




In either case, the inductive step holds.
This proves the induction step.


Limit Case
The inductive hypothesis states that:

$\forall w \in y: z^x < z^w$ for $x < w$

Take any $x < y$.
By Limit Ordinal Equals its Union, it follows that $x < w$ for some $w \in y$.

By the inductive hypothesis, $z^x < z^w$.
Since $w \in y$, it follows that:














\(\ds z^x\)

\(<\)







\(\ds z^w\)





above














\(\ds \)

\(\le\)







\(\ds \bigcup_{w \in y} z^w\)




















\(\ds \)

\(=\)







\(\ds z^y\)





Definition of Ordinal Exponentiation



This proves the limit case.
$\Box$


Necessary Condition
Note that the last part proves that:

$x \in y \implies z^x \in z^y$
Moreover:

$x = y \implies z^x = z^y$
Therefore, by the fact that $\in$ is a strong ordering:

$x \notin y \implies z^x \notin z^y$
By the Rule of Transposition:

$z^x < z^y \implies x < y$
$\blacksquare$


Sources
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 8.33$, $\S 8.34$




