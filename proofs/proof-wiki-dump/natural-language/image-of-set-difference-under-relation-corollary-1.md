# 

Source: https://proofwiki.org/wiki/Image_of_Set_Difference_under_Relation/Corollary_1

Corollary to Image of Set Difference under Relation
Let $\RR \subseteq S \times T$ be a relation.
Let $A \subseteq B \subseteq S$.

Then:

$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} \subseteq \RR \sqbrk {\relcomp B A}$
where:

$\RR \sqbrk B$ denotes the image of $B$ under $\RR$
$\complement$ (in this context) denotes relative complement.


Proof
We have that $A \subseteq B$.
Then by definition of relative complement:

$\relcomp B A = B \setminus A$
$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} = \RR \sqbrk B \setminus \RR \sqbrk A$

Hence, when $A \subseteq B$:

$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} \subseteq \RR \sqbrk {\relcomp B A}$
means exactly the same thing as:

$\RR \sqbrk B \setminus \RR \sqbrk A \subseteq \RR \sqbrk {B \setminus A}$
$\blacksquare$





