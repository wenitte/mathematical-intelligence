# 

Source: https://proofwiki.org/wiki/Equivalence_of_Definitions_of_Strictly_Progressing_Mappings



Theorem
Let $g$ be a mapping.
The following definitions of the concept of Strictly Progressing Mapping are equivalent:

Definition 1
$g$ is a strictly progressing mapping if and only if:

$\forall x \in \Dom g: x \subsetneqq \map g x$
Definition 2
$g$ is a strictly progressing mapping if and only if:

$g$ is a progressing mapping which has no fixed point.


Proof
$(1)$ implies $(2)$
Let $g$ be a strictly progressing mapping by definition $1$.
Then by definition:

$\forall x \in \Dom g: x \subsetneqq \map g x$
Hence a fortiori:

$\forall x \in \Dom g: x \subseteq \map g x$
and so $g$ is a progressing mapping.
Also a fortiori:

$\forall x \in \Dom g: x \ne \map g x$
and so $g$ has no fixed points.
Thus $g$ is a strictly progressing mapping by definition $2$.
$\Box$


$(2)$ implies $(1)$
Let $g$ be a strictly progressing mapping by definition $2$.
Then by definition:

$\forall x \in \Dom g: x \subseteq \map g x$
and also:

$\forall x \in \Dom g: x \ne \map g x$
That is:

$\forall x \in \Dom g: x \subsetneqq \map g x$
Thus $g$ is a strictly progressing mapping by definition $1$.
$\blacksquare$





