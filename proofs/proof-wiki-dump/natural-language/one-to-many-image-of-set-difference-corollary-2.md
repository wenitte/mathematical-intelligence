# 

Source: https://proofwiki.org/wiki/One-to-Many_Image_of_Set_Difference/Corollary_2

Theorem
Let $\RR \subseteq S \times T$ be a relation which is one-to-many.
Let $A$ be a subset of $S$.

Then:

$\relcomp {\Img \RR} {\RR \sqbrk A} = \RR \sqbrk {\relcomp S A}$
where $\complement$ (in this context) denotes relative complement.

In the language of direct image mappings this can be presented as:

$\forall A \in \powerset S: \map {\paren {\complement_{\Img \RR} \circ \RR^\to} } A = \map {\paren {\RR^\to \circ \complement_S} } A$


Proof
By definition of the image of $\RR$:

$\Img \RR = \RR \sqbrk S$

So, when $B = S$ in One-to-Many Image of Set Difference: Corollary 1:

$\relcomp {\Img \RR} {\RR \sqbrk A} = \relcomp {\RR \sqbrk S} {\RR \sqbrk A}$

Hence:

$\relcomp {\Img \RR} {\RR \sqbrk A} = \RR \sqbrk {\relcomp S A}$
means exactly the same thing as:

$\relcomp {\RR \sqbrk S} {\RR \sqbrk A} = \RR \sqbrk {\relcomp S A}$
that is:

$\RR \sqbrk S \setminus \RR \sqbrk A = \RR \sqbrk {S \setminus A}$

Hence the result from One-to-Many Image of Set Difference.
$\blacksquare$





