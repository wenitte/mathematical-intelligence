# 

Source: https://proofwiki.org/wiki/Set_Difference_and_Intersection_form_Partition/Corollary_2

Corollary to Set Difference and Intersection form Partition
Let $\O \subsetneqq T \subsetneqq S$.

Then:

$\set {T, \relcomp S T}$
is a partition of $S$.


Proof
First we note that:














\(\ds \O \subsetneqq T\)

\(\implies\)







\(\ds T \ne \O\)




















\(\ds T \subsetneqq S\)

\(\implies\)







\(\ds T \ne S\)










From the definition of relative complement, we have:

$\relcomp S T = S \setminus T$.
It follows from Set Difference with Self is Empty Set that:

$T \ne S \iff \relcomp S T \ne \O$

From Intersection with Relative Complement is Empty:

$T \cap \relcomp S T = \O$
That is, $T$ and $\relcomp S T$ are disjoint.

From Union with Relative Complement:

$T \cup \relcomp S T = S$
That is, the union of $T$ and $\relcomp S T$ forms the whole set $S$.

Thus all the conditions for a partition are satisfied.
$\blacksquare$


Sources
1975: T.S. Blyth: Set Theory and Abstract Algebra ... (previous) ... (next): $\S 6$. Indexed families; partitions; equivalence relations: Example $6.4$




