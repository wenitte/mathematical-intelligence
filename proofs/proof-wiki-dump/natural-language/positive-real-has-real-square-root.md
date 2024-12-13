# 

Source: https://proofwiki.org/wiki/Positive_Real_has_Real_Square_Root

Theorem
Let $x \in \R_{>0}$ be a (strictly) positive real number.
Then:

$\exists y \in \R: x = y^2$


Proof
Let $f: \R \to \R$ be defined as:

$\forall x \in \R: \map f x = x^2$
We have that $f$ is the pointwise product of the identity mapping with itself.
By Product Rule for Continuous Real Functions and Identity Mapping is Continuous, $f$ is continuous.
By Power Function is Unbounded Above:

$\exists q \in \R: \map f q > x$
Then:

$0^2 = 0 \le x$
By the Intermediate Value Theorem:

$\exists y \in \R: 0 < y < q: y^2 = x$
$\blacksquare$





