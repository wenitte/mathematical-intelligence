# 

Source: https://proofwiki.org/wiki/Intersection_of_Empty_Set



Theorem
Consider the set of sets $\mathbb S$ such that $\mathbb S$ is the empty set $\O$.

Then the intersection of $\mathbb S$ is $\mathbb U$:

$\mathbb S = \O \implies \bigcap \mathbb S = \mathbb U$
where $\mathbb U$ is the universal set.

A paradoxical result.


Intersection of Empty Class
In the context of class theory the result is in the same form:
Let $V$ be a basic universe.
Let $\O$ denote the empty class.

Then the intersection of $\O$ is $V$:

$\bigcap \O = V$


Proof
Let $\mathbb S = \O$.
Then from the definition:

$ \bigcap \mathbb S = \set {x: \forall X \in \mathbb S: x \in X}$
Consider any $x \in \mathbb U$.
Then as $\mathbb S = \O$, it follows that:

$\forall X \in \mathbb S: x \in X$
from the definition of vacuous truth.
It follows directly that:

$\bigcap \mathbb S = \set {x: x \in \mathbb U}$
That is:

$\bigcap \mathbb S = \mathbb U$
$\blacksquare$


Also presented as
Using the terminology of indexed families, this can also be written as:

$\ds \bigcap_{i \mathop \in \O} S_i = \set {x: \forall i \in \O: x \in S_i} = \mathbb U$
where it is important to specify the nature of $\mathbb U$.


Paradoxical Implications
Although it appears counter-intuitive, the reasoning is sound.
This result is therefore classed as a veridical paradox.

Paul R. Halmos declares, in Section $5$ of his Naive Set Theory of $1960$ that:

There is no profound problem here; it is merely a nuisance to be forced always to be making qualifications and exceptions just because some set somewhere along some construction might turn out to be empty. There is nothing to be done about this; it is just a fact of life.
However, later in that same work (in Section $9$, in the context of indexed families of sets) he says that:

... an empty intersection does not make sense.
a sentiment which is repeated in the $2008$ collaboration with Steven Givant, Introduction to Boolean Algebras, p. $457$.

In 2000: James R. Munkres: Topology (2nd ed.), the author recognizes the result, but does not adopt it:

If one has a given large set $X$ that is specified at the outset of the discussion to be one's "universe of discourse," and one considers only subsets of $X$ throughout, it is reasonable to let $\ds \bigcap_{A \mathop \in \AA} A = X$ when $\AA$ is empty. Not all mathematicians follow this convention, however. To avoid difficulty, we shall not define the intersection when $\AA$ is empty.

1967: George McCarty: Topology: An Introduction with Application to Topological Groups accepts this result, but cautiously:

A natural mnemonic for these extreme cases is that $\bigcap \SS$ "grows larger" as $\SS$ "grows smaller", and $\bigcup \SS$ grows smaller as $\SS$ grows smaller. No other convention is possible, but the case $\SS = \O$ will often be treated redundantly by itself in definitions and proofs, as a reminder of the null case.

1999: András Hajnal and Peter Hamburger: Set Theory dismiss it casually:

As usual, we adopt the convention that in case $A = \O$ the expression $\bigcap A$ is defined only in case we work with the subsets of an underlying set $X$. In this case we put $\bigcap A = X$.

and 1965: Claude Berge and A. Ghouila-Houri: Programming, Games and Transportation Networks do not even acknowledge that there may be a problem in the first place:

In the case where $I = \O$, we have
$\ds \bigcap_{i \mathop \in I} A_i = X$;
this moreover is the only case where $X$ plays a role; in fact, if $I$ is not empty, clearly we have:
$\ds \bigcap_{i \mathop \in I} A_i = \set {x \mid x \in A_i \text { for every } i \in I}$.


Also see
Union of Empty Set


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 5$: Complements and Powers
1965: Claude Berge and A. Ghouila-Houri: Programming, Games and Transportation Networks ... (previous) ... (next): $1$. Preliminary ideas; sets, vector spaces: $1.1$. Sets
1965: Seth Warner: Modern Algebra ... (previous) ... (next): Chapter $\text I$: Algebraic Structures: $\S 3$: Unions and Intersections of Sets: Exercise $3.7$
1967: George McCarty: Topology: An Introduction with Application to Topological Groups ... (previous) ... (next): Chapter $\text{I}$: Sets and Functions: Unions and Intersections
1975: Bert Mendelson: Introduction to Topology (3rd ed.) ... (previous) ... (next): Chapter $1$: Theory of Sets: $\S 4$: Indexed Families of Sets
1993: Keith Devlin: The Joy of Sets: Fundamentals of Contemporary Set Theory (2nd ed.) ... (previous) ... (next): $\S 1$: Naive Set Theory: $\S 1.4$: Sets of Sets: Exercise $1.4.2: \ \text{(ii)}$
1999: András Hajnal and Peter Hamburger: Set Theory ... (previous) ... (next): $1$. Notation, Conventions: $12$
2000: James R. Munkres: Topology (2nd ed.) ... (previous) ... (next): $1$: Set Theory and Logic: $\S 1$: Fundamental Concepts
2008: Paul Halmos and Steven Givant: Introduction to Boolean Algebras ... (previous) ... (next): Appendix $\text{A}$: Set Theory: Families




