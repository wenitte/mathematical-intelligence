# 

Source: https://proofwiki.org/wiki/Divided_by_Positive_Element_of_Field_of_Quotients

Theorem
Let $\struct {K, +, \circ}$ be the field of quotients of a totally ordered integral domain $\struct {D, +, \circ, \le}$.

Then:

$\forall z \in K: \exists x, y \in D: z = \dfrac x y, y \in D_{>0}$


Proof
By definition of field of quotients:

$\forall z \in K: \exists x, y \in D: z = \dfrac x y, y \in D_{\ne 0}$

Suppose $z = x' / y'$ such that $y' \notin D_{>0}$.
Then $y' < 0$ as $D$ is totally ordered.

Then:














\(\ds x' / y'\)

\(=\)







\(\ds x' \circ \paren {y'}^{-1}\)





Definition of Division over Field














\(\ds \)

\(=\)







\(\ds \paren {-x'} \circ \paren {-\paren {y'}^{-1} }\)





Product of Ring Negatives














\(\ds \)

\(=\)







\(\ds \paren {-x'} \circ \paren {-y'}^{-1}\)





Negative of Product Inverse














\(\ds \)

\(=\)







\(\ds \paren {-x'} / \paren {-y'}\)





Definition of Division over Field




If $y' < 0$, then $\paren {-y'} > 0$ from Properties of Ordered Ring $(4)$.
So all we need to do is set $x = -x', y = -y'$ and the result follows.
$\blacksquare$





