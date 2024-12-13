# 

Source: https://proofwiki.org/wiki/Intersection_of_Empty_Set/Class_Theory



Theorem
Let $V$ be a basic universe.
Let $\O$ denote the empty class.

Then the intersection of $\O$ is $V$:

$\bigcap \O = V$


Proof
By definition of $V$ we have that $\bigcap \O \subseteq V$.

By definition of empty class, there exists no set $x \in V$ which is an element of $\O$.
Hence it is vacuously true that every element of $V$ is an element of every element of $\O$.
Therefore every $x \in V$ is an element of $\bigcap \O$.
Therefore $V \subseteq \bigcap \O$.

It follows by definition of class equality that $\bigcap \O = V$.
$\blacksquare$


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


Sources
2010: Raymond M. Smullyan and Melvin Fitting: Set Theory and the Continuum Problem (revised ed.) ... (previous) ... (next): Chapter $2$: Some Basics of Class-Set Theory: $\S 5$ The union axiom: Theorem $5.1 \ (2)$




