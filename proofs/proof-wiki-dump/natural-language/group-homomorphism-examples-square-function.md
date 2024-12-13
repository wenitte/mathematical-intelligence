# 

Source: https://proofwiki.org/wiki/Group_Homomorphism/Examples/Square_Function

Example of Group Homomorphism
Let $\struct {\R_{\ne 0}, \times}$ be the group formed from the non-zero real numbers under multiplication.
Let $\struct {\R_{>0}, \times}$ be the group formed from the (strictly) positive real numbers under multiplication.

Let $f: \R_{\ne 0} \to \R_{>0}$ be the mapping defined as:

$\forall x \in \R_{\ge 0}: \map f x = x^2$
Then $f$ is a group homomorphism.


Proof
First we note that:

from Non-Zero Real Numbers under Multiplication form Group, $\struct {\R_{\ne 0}, \times}$ is a group
from Strictly Positive Real Numbers under Multiplication form Uncountable Abelian Group, $\struct {\R_{>0}, \times}$ is a group

Then we note that:

$\forall x \in \R_{\ge 0}: x^2 \in \R_{>0}$
demonstrating that $f$ is defined for all $x \in \R_{\ge 0}$.

Finally we check the morphism property:










\(\ds \forall a, b \in \R_{\ge 0}: \, \)



\(\ds \map f {a \times b}\)

\(=\)







\(\ds \paren {a \times b}^2\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds a^2 \times b^2\)





Real Multiplication is Commutative and Real Multiplication is Associative














\(\ds \)

\(=\)







\(\ds \map f a \times \map f b\)





Real Multiplication is Commutative and Real Multiplication is Associative



Hence the result.
$\blacksquare$


Sources
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): homomorphism
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): homomorphism




