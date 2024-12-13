# 

Source: https://proofwiki.org/wiki/Image_of_Set_Difference_under_Relation



Theorem
Let $\RR \subseteq S \times T$ be a relation.
Let $A$ and $B$ be subsets of $S$.

Then:

$\RR \sqbrk A \setminus \RR \sqbrk B \subseteq \RR \sqbrk {A \setminus B}$
where:

$\setminus$ denotes set difference
$\RR \sqbrk A$ denotes image of $A$ under $\RR$.


Corollary 1
Let $\RR \subseteq S \times T$ be a relation.
Let $A \subseteq B \subseteq S$.

Then:

$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} \subseteq \RR \sqbrk {\relcomp B A}$
where:

$\RR \sqbrk B$ denotes the image of $B$ under $\RR$
$\complement$ (in this context) denotes relative complement.


Corollary 2
Let $\RR \subseteq S \times T$ be a relation.
Let $A$ be a subset of $S$.

Then:

$\relcomp {\Img \RR} {\RR \sqbrk A} \subseteq \RR \sqbrk {\relcomp S A}$
where:

$\Img \RR$ denotes the image of $\RR$
$\RR \sqbrk A$ denotes the image of $A$ under $\RR$.


Proof













\(\ds y\)

\(\in\)







\(\ds \RR \sqbrk A \setminus \RR \sqbrk B\)














\(\ds \leadsto \ \ \)

\(\ds \exists x \in A: x \notin B: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Image of Subset under Relation








\(\ds \leadsto \ \ \)

\(\ds \exists x \in A \setminus B: \, \)



\(\ds \tuple {x, y}\)

\(\in\)







\(\ds \RR\)





Definition of Set Difference








\(\ds \leadsto \ \ \)





\(\ds y\)

\(\in\)







\(\ds \RR \sqbrk {A \setminus B}\)





Definition of Image of Subset under Relation



$\blacksquare$


Also see
Note that equality does not hold in general.
See Difference of Images under Mapping not necessarily equal to Image of Difference for an example of a mapping (which is of course a relation) for which it does not.





