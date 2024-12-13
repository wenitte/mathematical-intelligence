# 

Source: https://proofwiki.org/wiki/Intersection_Distributes_over_Union/General_Result



Theorem
Set intersection is distributive over set union:

Let $S$ and $T$ be sets.
Let $\powerset T$ be the power set of $T$.
Let $\mathbb T$ be a subset of $\powerset T$.

Then:

$\ds S \cap \bigcup \mathbb T = \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$


Proof
Intersection Subset of Union
Let $\ds x \in S \cap \bigcup \mathbb T$.
We need to show that $\ds x \in \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$ and then by definition of subset we will have shown that $\ds S \cap \bigcup \mathbb T \subseteq \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$.

So, we have that $\ds x \in S \cap \bigcup \mathbb T$.
By definition of set intersection, $x \in S$ and $\ds x \in \bigcup \mathbb T$.
From $\ds x \in \bigcup \mathbb T$ we know that:

$\exists X \in \mathbb T: x \in X$
and so:

$\ds \exists X \in \mathbb T: x \in S \cap X$
So by definition of set union:

$\ds x \in \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$

So:

$\ds S \cap \bigcup \mathbb T \subseteq \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$
$\Box$


Union Subset of Intersection
Let $\ds x \in \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$.
We need to show that $\ds x \in S \cap \bigcup \mathbb T$ and then by definition of subset we will have shown that $\ds \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X} \subseteq S \cap \bigcup \mathbb T$.

So, we have that $\ds x \in \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$.
By definition of set union:

$\exists X \in \mathbb T: x \in S \cap X$

By definition of set intersection, we have that $x \in S$ and $x \in X$.
By definition of set union:

$\ds x \in \bigcup \mathbb T$
So by definition of set intersection, we have that:

$\ds x \in S \cap \bigcup \mathbb T$

So:

$\ds \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X} \subseteq S \cap \bigcup \mathbb T$
$\Box$

So we have that:

$\ds S \cap \bigcup \mathbb T \subseteq \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$
and:

$\ds \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X} \subseteq S \cap \bigcup \mathbb T$
and so by definition of set equality:

$\ds S \cap \bigcup \mathbb T = \bigcup_{X \mathop \in \mathbb T} \paren {S \cap X}$
$\blacksquare$


Also see
Union Distributes over Intersection/General Result


Sources
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.6 \ \text{(a)}$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Unions and Intersections: Theorem $2 \ \text{(i)}$




