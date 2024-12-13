# 

Source: https://proofwiki.org/wiki/Number_of_Boolean_Interpretations_for_Finite_Set_of_Variables

Theorem
Let $\PP_0$ be the vocabulary of language of propositional logic.
Let $S \subseteq \PP_0$ be a finite set of $n$ letters from $\PP_0$.

Then there are $2^n$ different partial boolean interpretations for $S$.


Proof
A partial boolean interpretation for $S$ is a mapping from $S$ to the set of truth values $\set {T, F}$.
By Cardinality of Set of All Mappings, the total number of mappings from $S$ to $T$ is:

$\card {T^S} = \card T^{\card S}$
The result follows directly.
$\blacksquare$


Sources
1996: H. Jerome Keisler and Joel Robbin: Mathematical Logic and Computability ... (previous) ... (next): $\S 1.5$: Semantics of Propositional Logic




