# 

Source: https://proofwiki.org/wiki/Reflexive_Closure_is_Idempotent

Theorem
Let $S$ be a set.
Let $R$ denote the set of all endorelations on $S$.
Then the reflexive closure operator is an idempotent mapping on $R$.
That is:

$\forall \RR \in R: \RR^= = \paren {\RR^=}^=$
where $\RR^=$ denotes the reflexive closure of $\RR$.


Proof
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
$\blacksquare$





