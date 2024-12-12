# 

Source: https://proofwiki.org/wiki/Equivalence_Class_of_Fixed_Element

Theorem
Let $S_n$ denote the symmetric group on $n$ letters.
Let $\sigma \in S_n$.
Let $\RR_\sigma$ denote the equivalence defined in Permutation Induces Equivalence Relation.
Let $i \in \N^*_{\le n}$.

Then:

$i \in \Fix \sigma$ if and only if $\eqclass i {\RR_\sigma} = \set i$
where:

$\eqclass i {\RR_\sigma}$ denotes the equivalence class of $i$ under $\RR_\sigma$
$\Fix \sigma$ denotes the set of fixed elements of $\sigma$.


Corollary
$i \notin \Fix \sigma$ if and only if $\eqclass i {\RR_\sigma}$ contains more than one element


Proof
By the definition of an equivalence relation it is easily seen that $\set i \subseteq \eqclass i {\RR_\sigma}$.

Suppose that $i \in \Fix \sigma$.
Let $j \in \eqclass i {\RR_\sigma}$.

Then by Condition for Membership of Equivalence Class and Permutation Induces Equivalence Relation:

$j \in \eqclass i {\RR_\sigma} \iff i \mathrel {\RR_\sigma} j \implies \exists m \in \Z: \sigma^m \paren i = j$

And by Fixed Point of Permutation is Fixed Point of Power:

$\sigma^m \paren i = i \implies i = j$

Therefore:

$\eqclass i {\RR_\sigma} \subseteq \set i$
and so:

$\eqclass i {\RR_\sigma} = \set i$
$\Box$

For the converse, suppose that:

$\eqclass i {\RR_\sigma} = \set i$.

It is seen that:

$i \mathrel {\RR_\sigma} \map \sigma i \iff \map \sigma i \in \eqclass i {\RR_\sigma}$
Therefore:

$\map \sigma i = i \implies i \in \Fix \sigma$

Hence the result.
$\blacksquare$





