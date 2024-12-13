# 

Source: https://proofwiki.org/wiki/One-to-Many_Image_of_Set_Difference/Corollary_1

Theorem
Let $\RR \subseteq S \times T$ be a relation which is one-to-many.
Let $A \subseteq B \subseteq S$.

Then:

$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} = \RR \sqbrk {\relcomp B A}$
where $\complement$ (in this context) denotes relative complement.


Proof
We have that $A \subseteq B$.
Then by definition of relative complement:

$\relcomp B A = B \setminus A$
$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} = \RR \sqbrk B \setminus \RR \sqbrk A$

Hence, when $A \subseteq B$:

$\relcomp {\RR \sqbrk B} {\RR \sqbrk A} = \RR \sqbrk {\relcomp B A}$
means exactly the same thing as:

$\RR \sqbrk B \setminus \RR \sqbrk A = \RR \sqbrk {B \setminus A}$

Hence the result from One-to-Many Image of Set Difference.
$\blacksquare$





