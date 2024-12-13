# 

Source: https://proofwiki.org/wiki/Image_of_Element_is_Subset

Theorem
Let $S$ and $T$ be sets.
Let $\RR \subseteq S \times T$ be a relation.
Let $A \subseteq S$.

Then:

$s \in A \implies \map \RR s \subseteq \RR \sqbrk A$


Proof
From Image of Singleton under Relation:

$\map \RR s = \RR \sqbrk {\set s}$
From Singleton of Element is Subset:

$s \in A \implies \set s \subseteq A$
The result follows from Image of Subset is Subset of Image.
$\blacksquare$





