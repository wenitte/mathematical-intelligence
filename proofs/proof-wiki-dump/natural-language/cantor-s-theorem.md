# 

Source: https://proofwiki.org/wiki/Cantor%27s_Theorem

  This article was Featured Proof .




Theorem
There is no surjection from a set $S$ to its power set for any set $S$.
That is, $S$ is strictly smaller than its power set.


Proof 1
Aiming for a contradiction, suppose $S$ is a set with a surjection $f: S \to \powerset S$.
Then:










\(\ds \forall x \in S: \, \)



\(\ds \map f x\)

\(\in\)







\(\ds \powerset S\)





by hypothesis








\(\ds \leadsto \ \ \)

\(\ds \forall x \in S: \, \)



\(\ds \map f x\)

\(\subseteq\)







\(\ds S\)





Definition of Power Set




Now by Law of Excluded Middle, there are two choices for every $x \in S$:

$x \in \map f x$
$x \notin \map f x$
Let $T = \set {x \in S: x \notin \map f x}$.
As $f$ is supposed to be a surjection, $\exists a \in S: T = \map f a$.
Thus:

$a \in \map f a \implies a \notin \map f a$
$a \notin \map f a \implies a \in \map f a$

This is a contradiction, so the initial supposition that there is such a surjection must be false.
$\blacksquare$


Law of the Excluded Middle
This proof depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this proof from an intuitionistic perspective.


Proof 2
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


Proof 3
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


Also see
Compare this with Russell's Paradox.


Source of Name
This entry was named for Georg Cantor.


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text {III}$: The Natural Numbers: $\S 17$: Finite Sets: Exercise $17.14$
1971: Gaisi Takeuti and Wilson M. Zaring: Introduction to Axiomatic Set Theory: $\S 10.4$ $\S 10.5$
1972: A.G. Howson: A Handbook of Terms used in Algebra and Analysis ... (previous) ... (next): $\S 4$: Number systems $\text{I}$: A set-theoretic approach
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $4$: Mappings: Exercise $11$
1998: David Nelson: The Penguin Dictionary of Mathematics (2nd ed.) ... (previous) ... (next): Cantor's theorem
2008: David Nelson: The Penguin Dictionary of Mathematics (4th ed.) ... (previous) ... (next): Cantor's theorem
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $1$: General Background: $\S 4$ Larger and smaller: Theorem $4.1$ (Cantor's theorem)




