# 

Source: https://proofwiki.org/wiki/Rank_of_Matroid_Circuit_is_One_Less_Than_Cardinality


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.


Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $C \subseteq S$ be a circuit of $M$.
Let $\rho: \powerset S \to \Z$ denote the rank function of $M$.

Then:

$\map \rho C = \card C -1$
Proof
By definition of a circuit:

$C$ is dependent
By matroid axiom $(\text I 1)$:

$C \ne \O$

Let $x \in C$.


Lemma
$C \setminus \set x$ is a maximal independent subset of $C$

We have:














\(\ds \map \rho C\)

\(=\)







\(\ds \card{C \setminus \set x}\)





Cardinality of Maximal Independent Subset Equals Rank of Set














\(\ds \)

\(=\)







\(\ds \card C - \card{\set x}\)





Cardinality of Set Difference with Subset














\(\ds \)

\(=\)







\(\ds \card C - 1\)





Cardinality of Singleton



$\blacksquare$

Sources
1976: Dominic Welsh: Matroid Theory ... (next) Chapter $1.$ $\S 9.$ Circuits




