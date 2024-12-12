# 

Source: https://proofwiki.org/wiki/All_Bases_of_Matroid_have_same_Cardinality/Corollary


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.
Theorem
Let $M = \struct {S, \mathscr I}$ be a matroid.
Let $B \subseteq S$ be a base of $M$.
Let $X \subseteq S$ be any independent subset of $M$.

Then:

$\card X \le \card B$


Proof
From Independent Subset is Contained in Maximal Independent Subset :

$\exists B' \subseteq S : X \subseteq B'$ and $B'$ is a maximal independent subset of $S$
By definition of a base:

$B'$ is a base of $M$
From Cardinality of Subset of Finite Set:

$\card X \le \card {B'}$
From All Bases of Matroid have same Cardinality:

$\card{B'} = \card B$
Hence:

$\card X \le \card B$
$\blacksquare$





