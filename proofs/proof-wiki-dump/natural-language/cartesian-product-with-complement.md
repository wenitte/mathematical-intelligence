# 

Source: https://proofwiki.org/wiki/Cartesian_Product_with_Complement

Theorem
Let $S$ and $T$ be sets.
Let $A \subseteq S$ and $B \subseteq T$ be subsets of $S$ and $T$, respectively.
Let $\relcomp S A$ denote the relative complement of $A$ in $S$.

Then:














\(\ds \relcomp S A \times T\)

\(=\)







\(\ds \relcomp {S \times T} {A \times T}\)




















\(\ds S \times \relcomp T B\)

\(=\)







\(\ds \relcomp {S \times T} {S \times B}\)











Proof
By definition of relative complement we have:

$\relcomp S A = S \setminus A$
where $S \setminus A$ denotes set difference.
By Cartesian Product Distributes over Set Difference, we have:

$\paren {S \setminus A} \times T = \paren {S \times T} \setminus \paren {A \times T}$
and the latter equals $\relcomp {S \times T} {A \times T}$.
In conclusion, we obtain:

$\relcomp S A \times T = \relcomp {S \times T} {A \times T}$
as desired.

Mutatis mutandis, the other statement follows from this argument as well.
$\blacksquare$





