# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_is_Closure_Operator/Proof_2



Theorem
Let $S$ be a set.
Let $R$ be the set of all endorelations on $S$.

Then the reflexive closure operator on $R$ is a closure operator.


Proof
Reflexive Closure is Inflationary
Let $\RR \in R$.
The reflexive closure $\RR^=$ of $\RR$ is defined as:

$\RR^= := \RR \cup \Delta_S$
From Set is Subset of Union:

$\RR \subseteq \RR^=$
Hence the reflexive closure operator is an inflationary mapping.
$\Box$


Reflexive Closure is Order Preserving
Let $\RR, \SS \in R$.
Suppose:

$\RR \subseteq \SS$
Their respective reflexive closures $\RR^=$ and $\SS^=$ are defined as:

$\RR^= := \RR \cup \Delta_S$
$\SS^= := \SS \cup \Delta_S$
Hence by Corollary to Set Union Preserves Subsets:

$\RR^= \subseteq \SS^=$
$\Box$


Reflexive Closure is Idempotent
Let $\RR \in R$.
By the definition of reflexive closure:

$\RR^= = \RR \cup \Delta_S$
$\paren {\RR^=}^= = \paren {\RR \cup \Delta_S} \cup \Delta_S$
By Union is Associative:

$\paren {\RR^=}^= = \RR \cup \paren {\Delta_S \cup \Delta_S}$
By Set Union is Idempotent:

$\paren {\RR^=}^= = \RR \cup \Delta_S$
Hence:

$\forall \RR \in R: \RR^= = \paren {\RR^=}^=$
$\Box$

Thus by the definition of closure operator, reflexive closure is a closure operator.
$\blacksquare$





