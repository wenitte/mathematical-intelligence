# 

Source: https://proofwiki.org/wiki/Class_of_All_Ordinals_is_Minimally_Superinductive_over_Successor_Mapping

Theorem
The class of all ordinals $\On$ is the unique class which is minimally superinductive under the successor mapping.


Proof
We need to show that:

$\On$ is a superinductive class under the successor mapping
and:

no proper subclass of $\On$ is superinductive class under the successor mapping.

We recall immediately that Successor Mapping is Progressing.
This validates the definition of superinductive class under the successor mapping.

By definition of ordinal:

$S \in \On$
if and only if:

$S$ is an element of every superinductive class under the successor mapping.
Hence $\On$ is a subclass of every superinductive class under the successor mapping.

Let $\cap S$ denote the  intersection of every superinductive class under the successor mapping.
Thus by definition of class intersection:

$\On$ is a subclass of $\cap S$.

Let $M$ be an arbitrary superinductive class under the successor mapping.
We have by definition of superinductive class:

$\O \in M$
Thus as $M$ is arbitrary:

$\O \in \cap S$
Thus $\O$ is an element of every superinductive class.
Hence:

$\O \in \On$
$\Box$

Now let $\alpha \in \On$.
Then by definition of ordinal:

$\alpha$ is an element of every superinductive class under the successor mapping.
Hence by definition of superinductive class:

$\alpha^+$ is an element of every superinductive class under the successor mapping
where $\alpha^+$ denotes the successor set of $\alpha$.
Hence by definition:

$\alpha^+ \in \On$
Thus $\On$ is closed under the successor mapping.
$\Box$

Let $C$ be a chain in $\On$.
Then $C$ is a chain in every superinductive class under the successor mapping.
By definition of superinductive class:

$\cup C$ is an element of every superinductive class under the successor mapping
where $\cup C$ denotes the union of $C$.
That is:

$\cup C \in \On$
demonstrating that $\On$ is closed under chain unions.
$\Box$

Thus $\On$ is a superinductive class.
$\Box$

Aiming for a contradiction, suppose $A$ is a superinductive class which is a proper subclass of $\On$.
Then:

$\exists x \in \On: x \notin A$
Hence $\On \not \subseteq A$
But this contradicts the statement that $\On$ is a subclass of every superinductive class.
Hence by Proof by Contradiction no proper subclass of $\On$ is superinductive class under the successor mapping.
Hence by definition $\On$ is a minimally superinductive under the successor mapping.
$\Box$

It remains to prove uniqueness.
Suppose $\On'$ is another minimally superinductive class under the successor mapping.
Then we have:

$\On' \subseteq \On$
but also we have:

$\On \subseteq \On'$
and so:

$\On' = \On$
Thus $\On$ is the unique minimally superinductive class under the successor mapping.
$\blacksquare$


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $5$: Ordinal Numbers: $\S 1$ Ordinal numbers




