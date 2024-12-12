# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem/Proof_3

Theorem
There is no surjection from a set $S$ to its power set for any set $S$.
That is, $S$ is strictly smaller than its power set.


Proof
Let $S$ be a set.
Let $\powerset S$ be the power set of $S$.
Let $f: S \to \powerset S$ be a mapping.
Let $T = \set {x \in S: \neg \paren {x \in \map f x} }$.
The set $T$ exists by the Axiom of Specification.
Then:

$T \subseteq S$
so $T \in \powerset S$ by the definition of power set.
We will show that $T$ is not in the image of $f$ and therefore $f$ is not surjective.
Aiming for a contradiction, suppose:

$\exists a \in S: T = \map f a$
This means that $f$ maps $a$ to $T$.
We claim that $a \notin T$.
Aiming for a contradiction, suppose:

$a \in T$
By definition of $T$:

$a \notin \map f a$
This is a contradiction, since $T = \map f a$.
Thus by Proof by Contradiction, we conclude that:

$(1): \quad a \notin T$
Since $T = \map f a$, we get:

$a \notin \map f a$
By definition of $T$:

$(2): \quad a \in T$
By Principle of Non-Contradiction, $(1)$ and $(2)$ cannot both be true.
We have reached a contradiction.
Thus by Proof by Contradiction, the supposition that $\exists a \in S: T = \map f a$ must be false.
It follows that $f$ is not a surjection.
$\blacksquare$





