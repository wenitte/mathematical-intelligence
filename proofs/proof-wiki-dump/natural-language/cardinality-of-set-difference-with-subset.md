# 

Source: https://proofwiki.org/wiki/Cardinality_of_Set_Difference_with_Subset

Theorem
Let $S$ and $T$ be sets such that $T$ is finite.
Let $T \subseteq S$.
Then:

$\card {S \setminus T} = \card S - \card T$
where $\card S$ denotes the cardinality of $S$.


Proof
From Set Difference with Superset is Empty Set:

$T \subseteq S \iff T \setminus S = \O$
From Set Difference and Intersection form Partition:

$S = \paren {S \setminus T} \cup T$
Thus from Cardinality of Set Union:

$\card S = \card T + \card {S \setminus T} - \card {T \cap \paren {S \setminus T} }$
But from Set Difference Intersection with Second Set is Empty Set:

$T \cap \paren {S \setminus T} = 0$
Hence the result.
$\blacksquare$


Sources
1965: J.A. Green: Sets and Groups ... (previous) ... (next): $\S 1.6$. Difference and complement: Example $20$




