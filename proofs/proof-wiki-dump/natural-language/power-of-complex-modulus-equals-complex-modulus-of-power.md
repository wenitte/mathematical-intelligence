# 

Source: https://proofwiki.org/wiki/Power_of_Complex_Modulus_equals_Complex_Modulus_of_Power



Theorem
Let $z \in \C$ be a complex number.
Let $\left\vert{z}\right\vert$ be the modulus of $z$.
Let $n \in \Z_{\ge 0}$ be a positive integer.

Then:

$\left\vert{z^n}\right\vert = \left\vert{z}\right\vert^n$


Proof
The proof proceeds by induction.
For all $n \in \Z_{\ge 0}$, let $P \left({n}\right)$ be the proposition:

$\left\vert{z^n}\right\vert = \left\vert{z}\right\vert^n$

$P \left({0}\right)$ is the case:














\(\ds \left\vert{z^0}\right\vert\)

\(=\)







\(\ds \left\vert{1}\right\vert\)




















\(\ds \)

\(=\)







\(\ds 1\)




















\(\ds \)

\(=\)







\(\ds \left\vert{z}\right\vert^0\)









Thus $P \left({0}\right)$ is seen to hold.


Basis for the Induction
$P \left({1}\right)$ is the case:















\(\ds \left\vert{z^1}\right\vert\)

\(=\)







\(\ds \left\vert{z}\right\vert\)




















\(\ds \)

\(=\)







\(\ds \left\vert{z}\right\vert^1\)










Thus $P \left({1}\right)$ is seen to hold.

This is the basis for the induction.


Basis for the Induction
$P \left({2}\right)$ is the case:

$\left\vert{z^2}\right\vert = \left\vert{z}\right\vert^2$
which is demonstrated in Square of Complex Modulus equals Complex Modulus of Square.

Thus $P \left({2}\right)$ is seen to hold.

This is the basis for the induction.


Induction Hypothesis
Now it needs to be shown that, if $P \left({k}\right)$ is true, where $k \ge 1$, then it logically follows that $P \left({k + 1}\right)$ is true.

So this is the induction hypothesis:

$\left\vert{z^k}\right\vert = \left\vert{z}\right\vert^k$

from which it is to be shown that:

$\left\vert{z^{k + 1} }\right\vert = \left\vert{z}\right\vert^{k + 1}$


Induction Step
This is the induction step:














\(\ds \left\vert{z^{k + 1} }\right\vert\)

\(=\)







\(\ds \left\vert{z^k \cdot z}\right\vert\)




















\(\ds \)

\(=\)







\(\ds \left\vert{z^k}\right\vert \cdot \left\vert{z}\right\vert\)





Complex Modulus of Product of Complex Numbers














\(\ds \)

\(=\)







\(\ds \left\vert{z}\right\vert^k \cdot \left\vert{z}\right\vert\)





Induction Hypothesis














\(\ds \)

\(=\)







\(\ds \left\vert{z}\right\vert^{k + 1}\)









So $P \left({k}\right) \implies P \left({k + 1}\right)$ and the result follows by the Principle of Mathematical Induction.

Therefore:

$\forall n \in \ Z_{\ge 0}: \left\vert{z^n}\right\vert = \left\vert{z}\right\vert^n$
$\blacksquare$


Examples
Complex Modulus of $\paren {1 + i}^4$
$\left\vert{\left({1 + i}\right)^4}\right\rvert = 4$


Complex Modulus of $\paren {2 - i}^6$
$\cmod {\paren {2 - i}^6} = 125$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 1.2$. The Algebraic Theory




