# 

Source: https://proofwiki.org/wiki/Cantor-Bernstein-Schr%C3%B6der_Theorem/Proof_5

Theorem
Let $S$ and $T$ be sets.
Let $f: S \to T$ and $g: T \to S$ be injections.

Then there exists a bijection $\phi: S \to T$.


Proof
By Injection to Image is Bijection:

$g: T \to g \sqbrk T$ is a bijection.
Thus $T$ is equivalent to $g \sqbrk T$.
By Composite of Injections is Injection $g \circ f: S \to g \sqbrk T \subset S$ is also an injection (to a subset of the domain of $g \circ f$).
Then by Cantor-Bernstein-Schröder Theorem: Lemma:

There exists a bijection $h: S \to g \sqbrk T$.
Thus $S$ is equivalent to $g \sqbrk T$.
We already know that $T$ is equivalent to $g \sqbrk T$.
Thus by Set Equivalence behaves like Equivalence Relation, $S$ is equivalent to $T$.
By the definition of set equivalence:

There is a bijection $\phi: S \to T$.
$\blacksquare$





