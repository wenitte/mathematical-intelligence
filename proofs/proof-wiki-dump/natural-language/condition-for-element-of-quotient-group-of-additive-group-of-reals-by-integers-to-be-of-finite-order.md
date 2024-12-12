# 

Source: https://proofwiki.org/wiki/Condition_for_Element_of_Quotient_Group_of_Additive_Group_of_Reals_by_Integers_to_be_of_Finite_Order

Theorem
Let $\struct {\R, +}$ be the additive group of real numbers.
Let $\struct {\Z, +}$ be the additive group of integers.
Let $\R / \Z$ denote the quotient group of $\struct {\R, +}$ by $\struct {\Z, +}$.
Let $x + \Z$ denote the coset of $\Z$ by $x \in \R$.

Then $x + \Z$ is of finite order if and only if $x$ is rational.


Proof
From Additive Group of Integers is Normal Subgroup of Reals, we have that $\struct {\Z, +}$ is a normal subgroup of $\struct {\R, +}$.
Hence $\R / \Z$ is indeed a quotient group.

By definition of rational number, what is to be proved is:

$x + \Z$ is of finite order if and only if:
$x = \dfrac m n$
for some $m \in \Z, n \in \Z_{> 0}$.

Let $x + \Z$ be of finite order in $\R / \Z$.
Then:










\(\ds \exists n \in \Z_{\ge 0}: \, \)



\(\ds \paren {x + \Z}^n\)

\(=\)







\(\ds \Z\)





Definition of Quotient Group: Group Axiom $\text G 2$: Existence of Identity Element








\(\ds \leadstoandfrom \ \ \)





\(\ds n x\)

\(\in\)







\(\ds \Z\)





Condition for Power of Element of Quotient Group to be Identity








\(\ds \leadstoandfrom \ \ \)





\(\ds n x\)

\(=\)







\(\ds m\)





for some $m \in \Z$








\(\ds \leadstoandfrom \ \ \)





\(\ds x\)

\(=\)







\(\ds \dfrac m n\)









$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): Chapter $6$: Cosets: Exercise $14$




