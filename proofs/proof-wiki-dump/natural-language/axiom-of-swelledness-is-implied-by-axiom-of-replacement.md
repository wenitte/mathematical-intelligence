# 

Source: https://proofwiki.org/wiki/Axiom_of_Swelledness_is_implied_by_Axiom_of_Replacement

Theorem
Let the Axiom of Replacement (in the context of class theory) be accepted.
Then the Axiom of Swelledness holds.


Proof
Recall the Axiom of Replacement:
For every mapping $f$ and set $x$ in the domain of $f$, the image $f \sqbrk x$ is a set.

Symbolically:

$\forall Y: \map {\text{Fnc}} Y \implies \forall x: \exists y: \forall u: u \in y \iff \exists v: \tuple {v, u} \in Y \land v \in x$
where:

$\map {\text{Fnc}} X := \forall x, y, z: \tuple {x, y} \in X \land \tuple {x, z} \in X \implies y = z$
and the notation $\tuple {\cdot, \cdot}$ is understood to represent Kuratowski's formalization of ordered pairs.

Recall the Axiom of Swelledness:

$V$ is a swelled class.
That is:

Every subclass of a set is a set.

Let $x$ be a set.
Let $A$ be a class such that $A \subseteq x$.

Suppose $A$ is the empty class.
Then by the Axiom of the Empty Set, $A$ is a set.

Suppose $A$ is a non-empty class.
Let $c \in A$ be arbitrary.
Let $f$ be:

the class of all ordered pairs $\tuple {a, a}$ for $a \in A$
along with:

all ordered pairs $\tuple {y, c}$ where $y \in x \setminus A$.
Thus:

$f$ is a mapping whose domain is $x$
and:

$\forall y \in x: \map f y = \begin {cases} y & : y \in A \\ c & : y \notin A \end {cases}$
Thus:

$\forall y \in x: \map f y \in A$
and in fact:

$f \sqbrk x = A$
We have by hypothesis that $x$ is a set.
Then by the Axiom of Replacement:

$A$ is therefore also a set.
Hence the result.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $6$: Order Isomorphism and Transfinite Recursion: $\S 3$ The axiom of substitution




