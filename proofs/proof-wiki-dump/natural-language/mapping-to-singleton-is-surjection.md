# 

Source: https://proofwiki.org/wiki/Mapping_to_Singleton_is_Surjection

Theorem
Let $S$ be a non-empty set.
Let $f: S \to T$ be a mapping.
Let $T$ be a singleton.

Then $f$ is a surjection.


Proof
Let $T = \set t$.
For $f$ to be a surjection, all we need to do is show:

$\forall y \in T: \exists x \in S: \map f x = y$.

As $S \ne \O$, $\exists s \in S$.
As $f: S \to T$ is a mapping, it follows that $\map f s \in T$.
So as $\map f s \in T$ it follows that $t = \map f s$.
As $T = \set t$, it follows that $\forall y \in T: \exists x \in S: y = \map f x$.
Hence the result.
$\blacksquare$





