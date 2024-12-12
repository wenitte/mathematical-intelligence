# 

Source: https://proofwiki.org/wiki/Algebraically_Closed_Field_is_Infinite

Theorem
Let $F$ be an algebraically closed field.

Then $F$ is infinite.


Proof
We prove the contrapositive: that a Galois field cannot be algebraically closed.
Let $F$ be Galois.
Define the polynomial:

$\ds \map f x = 1 + \prod_{a \mathop \in F} \paren {x - a}$
By definition, a field is a ring.
Thus by Ring Product with Zero:

$\ds \forall x \in F: \prod_{a \mathop \in F} \paren {x - a} = 0$
But:

$\forall a \in F: \map f a = 1 + 0 \ne 0$
Therefore $\map f x$ cannot have a root in $F$.
Thus $F$ is not algebraically closed.
The result follows by the Rule of Transposition.
$\blacksquare$





