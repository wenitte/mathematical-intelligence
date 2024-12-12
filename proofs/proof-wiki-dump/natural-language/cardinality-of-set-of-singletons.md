# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_of_Singletons

Theorem
Let $S$ be a set.
Let $T = \left\{ {\left\{{x}\right\}: x \in S}\right\}$ be the set of all singletons of elements of $S$.
Then:

$\left\vert T \right\vert = \left\vert S \right\vert$
where $\left\vert S \right\vert$ denotes the cardinality of $S$.


Proof
Define a mapping $f: S \to T$:

$\forall x \in S: f \left({x}\right) = \left\{ {x}\right\}$
By Singleton Equality:

$\forall x, y \in S: f \left({x}\right) = f \left({y}\right) \implies x = y$
Then, by definition, $f$ is an injection.
By the definition of set $T$:

$\forall y \in T: \exists x \in S: y = f \left({x}\right)$
Then, by definition, $f$ is a surjection.
Hence, by definition, $f: S \to T$ is a bijection.
Thus, by definition, $S$ and $T$ are equivalent:

$S \sim T$
Thus by definition of cardinality:

$\left\vert T \right\vert = \left\vert S \right\vert$
$\blacksquare$


Sources
Mizar article TOPGEN_2:12
Mizar article BSPACE:41




