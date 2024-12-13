# 

Source: https://proofwiki.org/wiki/Lower_Section_with_no_Greatest_Element_is_Open_in_GO-Space

Theorem
Let $\struct {S, \preceq, \tau}$ be a generalized ordered space.
Let $L$ be a lower section in $S$ with no greatest element.

Then $L$ is open in $\struct {S, \preceq, \tau}$.


Proof
By Maximal Element in Toset is Unique and Greatest, $L$ has no maximal element.
By Lower Section with no Maximal Element:

$\ds L = \bigcup \set {l^\prec: l \in L}$
where $l^\prec$ is the strict lower closure of $l$.
By Open Ray is Open in GO-Space and the fact that a union of open sets is open, $L$ is open.
$\blacksquare$


Also see
Upper Section with no Smallest Element is Open in GO-Space




