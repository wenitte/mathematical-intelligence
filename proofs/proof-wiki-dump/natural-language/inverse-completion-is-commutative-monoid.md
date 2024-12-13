# 

Source: https://proofwiki.org/wiki/Inverse_Completion_is_Commutative_Monoid

Theorem
Let $\left({S, \circ}\right)$ be a commutative semigroup.
Let $\left ({C, \circ}\right) \subseteq \left({S, \circ}\right)$ be the subsemigroup of cancellable elements of $\left({S, \circ}\right)$.
Let $\left({T, \circ'}\right)$ be an inverse completion of $\left({S, \circ}\right)$.

Then $\left({T, \circ'}\right)$ is a commutative monoid.


Proof
From Inverse Completion is Commutative Semigroup:

$\left({T, \circ'}\right)$ is a commutative semigroup.
By definition of inverse completion:

$\forall x \in C: \exists x^{-1} \in C: x \circ x^{-1} \in T$
Thus by definition of inverse element:

$e := x \circ x^{-1}$ is an identity element of $T$.
By Identity is Unique, $e$ is the only such element of $T$.
Thus $\left({T, \circ'}\right)$ is a semigroup with an identity element.
So, by definition, $\left({T, \circ'}\right)$ is a commutative monoid.
$\blacksquare$





