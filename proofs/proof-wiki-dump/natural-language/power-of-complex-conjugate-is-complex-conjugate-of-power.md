# 

Source: https://proofwiki.org/wiki/Power_of_Complex_Conjugate_is_Complex_Conjugate_of_Power



Theorem
Let $z \in \C$ be a complex number.
Let $\overline z$ denote the complex conjugate of $z$.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$\overline {z^n} = \left({\overline z}\right)^n$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $P \left({n}\right)$ be the proposition:

$\overline {z^n} = \left({\overline z}\right)^n$

$P \left({0}\right)$ is the case:














\(\ds \overline {z^0}\)

\(=\)







\(\ds \overline 1\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \left({\overline z}\right)^0\)









Thus $P \left({0}\right)$ is seen to hold.


Basis for the Induction
$P \left({1}\right)$ is the case:















\(\ds \overline {z^1}\)

\(=\)







\(\ds \overline z\)




















\(\ds \)

\(=\)







\(\ds \left({\overline z}\right)^1\)










Thus $P \left({1}\right)$ is seen to hold.

This is the basis for the induction.


Basis for the Induction
$P \left({2}\right)$ is the case:

$\overline {z^2} = \left({\overline z}\right)^2$
which is demonstrated in Square of Complex Conjugate is Complex Conjugate of Square.

Thus $P \left({2}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({k}\right)$ is true, where $k \ge 1$, then it logically follows that $P \left({k + 1}\right)$ is true.

So this is the induction hypothesis:

$\overline {z^k} = \left({\overline z}\right)^k$

from which it is to be shown that:

$\overline {z^{k + 1} } = \left({\overline z}\right)^{k + 1}$


Induction Step
This is the induction step:














\(\ds \overline {z^{k + 1} }\)

\(=\)







\(\ds \overline {z^k \cdot z}\)




















\(\ds \)

\(=\)







\(\ds \overline {z^k} \cdot \overline z\)





Product of Complex Conjugates














\(\ds \)

\(=\)







\(\ds \left({\overline z}\right)^k \cdot \overline z\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \left({\overline z}\right)^{k + 1}\)









So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \ Z_{\ge 0}: \overline {z^n} = \left({\overline z}\right)^n$
$\blacksquare$





