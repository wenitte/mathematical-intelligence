# 

Source: https://proofwiki.org/wiki/Set_Difference_and_Intersection_form_Partition



Theorem
Let $S$ and $T$ be sets such that:

$S \setminus T \ne \O$
$S \cap T \ne \O$
where $S \setminus T$ denotes set difference and $S \cap T$ denotes set intersection.

Then $S \setminus T$ and $S \cap T$ form a partition of $S$.


Corollary 1
Let $S$ and $T$ be sets such that:

$S \setminus T \ne \O$
$T \setminus S \ne \O$
$S \cap T \ne \O$
Then $S \setminus T$, $T \setminus S$ and $S \cap T$ form a partition of $S \cup T$, the union of $S$ and $T$.


Corollary 2
Let $\O \subsetneqq T \subsetneqq S$.

Then:

$\set {T, \relcomp S T}$
is a partition of $S$.


Proof
From Set Difference and Intersection are Disjoint:

$S \setminus T$ and $S \cap T$ are disjoint.

Next from Set Difference Union Intersection:

$S = \paren {S \setminus T} \cup \paren {S \cap T}$

Thus by definition $S \setminus T$ and $S \cap T$ form a partition of $S$.
$\blacksquare$





