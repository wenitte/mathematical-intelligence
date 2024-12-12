# 

Source: https://proofwiki.org/wiki/Equivalence_Class_of_Fixed_Element/Corollary

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\sigma \in S_n$.
Let $\RR_\sigma$ denote the equivalence defined in Permutation Induces Equivalence Relation.
Let $i \in \N^*_{\le n}$.

Then:

$i \notin \Fix \sigma$ if and only if $\eqclass i {\RR_\sigma}$ contains more than one element
where:

$\eqclass i {\RR_\sigma}$ denotes the equivalence class of $i$ under $\RR_\sigma$
$\Fix \sigma$ denotes the set of fixed elements of $\sigma$.


Proof
From Equivalence Class of Fixed Element and Biconditional Equivalent to Biconditional of Negations:

$i \notin \Fix \sigma \iff \set i \ne \eqclass i {\RR_\sigma}$

Because the Biconditional is Transitive, it suffices to show that:

$\set i \ne \eqclass i {\RR_\sigma}$
if and only if:

$\eqclass i {\RR_\sigma}$ contains more than one element.

Suppose that $\set i \ne \eqclass i {\RR_\sigma}$.
From the definition of an equivalence relation it is seen that:

$\set i \subseteq \eqclass i {\RR_\sigma}$

And from the hypothesis:

$\set i \subset \eqclass i {\RR_\sigma}$

Therefore $\eqclass i {\RR_\sigma}$ contains more than one element.
$\Box$

Conversely, if $\eqclass i {\RR_\sigma}$ contains more than one element, then it is seen that:

$\set i \ne \eqclass i {\RR_\sigma}$
$\blacksquare$





