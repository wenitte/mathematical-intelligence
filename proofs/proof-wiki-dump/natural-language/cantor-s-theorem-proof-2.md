# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem/Proof_2

Theorem
There is no surjection from a set $S$ to its power set for any set $S$.
That is, $S$ is strictly smaller than its power set.


Proof
Let $S$ be a set.
Let $\powerset {S}$ be the power set of $S$.
Let $f: S \to \powerset {S}$ be a mapping.
Let $T = \left\{{x \in S: \neg \left({x \in \map f x}\right)}\right\}$.
Then $T \subseteq S$, so $T \in \powerset {S}$ by the definition of power set.
We will show that $T$ is not in the image of $f$ and therefore $f$ is not surjective.
Aiming for a contradiction, suppose:

$\exists a \in S: T = \map f a$
Suppose that:

$a \in \map f a$
Then by the definition of $T$:

$\neg \left({a \in T}\right)$
Thus since $T = f \left({a}\right)$:

$\neg \left({a \in \map f a }\right)$
By Rule of Implication:

$(1) \quad a \in \map f a \implies \neg \left({ a \in \map f a }\right)$

Suppose instead that:

$\neg \left({a \in \map f a}\right)$
Then by the definition of $T$:

$a \in T$
Thus since $T = f \left({a}\right)$:

$a \in \map f a$
By Rule of Implication:

$(2) \quad \neg \left({ a \in \map f a }\right) \implies a \in \map f a$
By Non-Equivalence of Proposition and Negation, applied to $(1)$ and $(2)$, this is a contradiction.
As the specific choice of $a$ did not matter, we derive a contradiction by Existential Instantiation.
Thus by Proof by Contradiction, the supposition that $\exists a \in S: T = \map f a$ must be false.
It follows that $f$ is not a surjection.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $2.10$
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Cantor's Theorem




