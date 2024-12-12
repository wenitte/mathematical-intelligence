# 

Source: https://proofwiki.org/wiki/Element_of_Ordinal_is_Ordinal/Proof_1

Theorem
Let $n$ be an ordinal.
Let $m \in n$.

Then $m$ is also an ordinal.

That is, the class of all ordinals $\On$ is a transitive class.


Proof
Let $\On$ denote the class of all ordinals.
From Class of All Ordinals is Minimally Superinductive over Successor Mapping, $\On$ is superinductive.

By Zero is Smallest Ordinal, $0$ is the smallest element of $\On$.
We identify the natural number $0$ via the von Neumann construction of the natural numbers as:

$0 := \O$
Vacuously, every element of $\O$ is an ordinal.
$\Box$

Let $\alpha \in \On$ be an ordinal.
Let us assume that every element of $\alpha$ is an ordinal.
Let $\alpha^+$ denote the successor to $\alpha$.
Because $\On$ is superinductive:

$\alpha \in \On \implies \alpha^+ \in \On$
By definition of successor mapping:

$\alpha^+ = \alpha \cup \set \alpha$
Then every element of $\alpha^+$ is either an element of $\alpha$ or $\alpha$ itself.
We have by hypothesis that:

$\alpha$ is an ordinal
every element of $\alpha$ is an ordinal.
That is, $\alpha^+$ is an ordinal.
$\Box$

Let $C$ be a chain of ordinals such that:

each element $\alpha$ of $C$ has the property that each element of $\alpha$ is itself an ordinal.
Let $\beta \in \bigcup C$.
Then $\beta \in \alpha$ for some $\alpha \in C$.
Hence, by definition of $C$, $\beta$ is an ordinal which has the property that each element of $\beta$ is itself an ordinal.
It follows by the Principle of Superinduction that every element of an ordinal is an ordinal.
$\Box$

Let $\alpha \in \On$ be an arbitrary ordinal.
Let $\beta \subseteq \alpha$.
From Class of All Ordinals is Well-Ordered by Subset Relation, $\beta$ is an ordinal
Hence from the above:

$\beta \in \alpha$
As $\alpha$ is arbitrary:

$\forall \alpha \in \On: \beta \subseteq \alpha \implies \beta \in \alpha$
proving that $\On$ is transitive.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 1$ Ordinal numbers: Theorem $1.6$




