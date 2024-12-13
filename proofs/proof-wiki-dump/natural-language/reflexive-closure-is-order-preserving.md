# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_is_Order_Preserving

Theorem
Let $S$ be a set.
Let $R$ denote the set of all endorelations on $S$.
Then the reflexive closure operator is an order preserving mapping on $R$.
That is:

$\forall \RR, \SS \in R: \RR \subseteq \SS \implies \RR^= \subseteq \SS^=$
where $\RR^=$ and $\SS^=$ denote the reflexive closure of $\RR$ and $\SS$ respectively.


Proof
Let $\RR, \SS \in R$.
Suppose:

$\RR \subseteq \SS$
Their respective reflexive closures $\RR^=$ and $\SS^=$ are defined as:

$\RR^= := \RR \cup \Delta_S$
$\SS^= := \SS \cup \Delta_S$
Hence by Corollary to Set Union Preserves Subsets:

$\RR^= \subseteq \SS^=$
$\blacksquare$





