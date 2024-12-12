# 

Source: https://proofwiki.org/wiki/Disjoint_Union_Preserves_Domination

Theorem
Let $I$ be an indexing set.
For all $i \in I$, let $A_i$ and $B_i$ be sets such that $A_i \preccurlyeq B_i$.
Here, $\preccurlyeq$ denotes domination.

Then:

$\ds \bigsqcup_{i \mathop \in I} A_i \preccurlyeq \bigsqcup_{i \mathop \in I} B_i$
where $\bigsqcup$ denotes disjoint union.


Proof
By definition of domination, for all $i \in I$, there exists an injection $\iota_i: A_i \to B_i$.
Thus the mapping $\ds \iota : \bigsqcup_{i \mathop \in I} A_i \to \bigsqcup_{i \mathop \in I} B_i$ defined by:

$\map \iota {x, i} = \tuple {\map {\iota_i} x, i}$
is an injection.


This article contains statements that are justified by handwavery.In particular: That statement needs proof. Probably best in a separate page.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by adding precise reasons why such statements hold.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Handwaving}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
$\blacksquare$





