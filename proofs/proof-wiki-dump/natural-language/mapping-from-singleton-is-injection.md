# 

Source: https://proofwiki.org/wiki/Mapping_from_Singleton_is_Injection

Theorem
Let $f: S \to T$ be a mapping.
Let $S$ be a singleton.
Then $f$ is an injection.


Proof
Let $S = \set s$.
For $f$ to be an injection, all we need to do is show:

$\forall x_1, x_2 \in S: \map f {x_1} = \map f {x_2} \implies x_1 = x_2$
But as $S$ is a singleton, it follows that:

$x_1 = x_2 = s$
Hence the result.
$\blacksquare$





