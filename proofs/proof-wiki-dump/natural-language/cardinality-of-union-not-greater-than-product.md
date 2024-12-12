# 

Source: https://proofwiki.org/wiki/Cardinality_of_Union_not_greater_than_Product

Theorem
Let $\FF$ be a set of sets.
Let:

$\size \FF \le \mathbf m$
where 

$\size \FF$ denotes the cardinality of $\FF$
$\mathbf m$ is cardinal number (possibly infinite).
Let:

$\forall A \in \FF: \size A \le \mathbf n$
where

$\mathbf n$ is cardinal number (possibly infinite).
Then:

$\ds \size {\bigcup \FF} \le \size {\mathbf m \times \mathbf n} = \mathbf m \mathbf n$


Proof
$\FF = \O$ or $\FF = \set \O$ or $\O \ne \FF \ne \set \O$.
In case when $\FF = \O$ or $\FF = \set \O$:














\(\ds \size {\bigcup \FF}\)

\(=\)







\(\ds \size \O\)





Union of Empty Set, Union of Singleton














\(\ds \)

\(\le\)







\(\ds \size {\mathbf m \times \mathbf n}\)





Subset implies Cardinal Inequality because Empty Set is Subset of All Sets



In case when $\O \ne \FF \ne \{\O\}$:

by Surjection iff Cardinal Inequality there exists a surjection $f: \mathbf m \to \FF$ as $\size {\mathbf m} = \mathbf m$ by Cardinal of Cardinal Equal to Cardinal.
$\FF$ contains non empty set $A_0$.

$\size {A_0} > \mathbf 0$.
By assumption:

$\size {A_0} \le \mathbf n$.
Then:

$\mathbf 0 < \mathbf n$.
Hence:

$\size {\set 0} = \mathbf 1 \le \mathbf n$.
Define a family $\family {B_A}_{A \mathop \in \FF}$:

$B_A = \begin{cases} A & A \ne \O \\ \set 0 & A = \O \end {cases}$
By Surjection iff Cardinal Inequality define a family
$\family {g_A}_{A \mathop \in \FF}$ of surjections:

$\forall A \in \FF: g_A: \mathbf n \to B_A$ is a surjection.
Define a mapping $h:\mathbf m \times \mathbf n \to \ds \bigcup_{A \mathop \in \FF} B_A$:

$\forall \alpha \in \mathbf m: \forall \beta \in \mathbf n: \map h {\alpha, \beta} = \map {g_{\map f \alpha} } \beta$
We will show by definition that $h$ is a surjection.
Let $x \in \ds \bigcup_{A \mathop \in \FF} B_A$.
Then by definition of union:

$\exists A \in \FF: x \in B_A$.
By definition of surjection:

$\exists \alpha \in \mathbf m: \map f \alpha = A$.
By definition of surjection:

$\exists \beta \in \mathbf n: \map {g_A} \beta = x$
So:

$\map h {\alpha, \beta} = \map {g_{\map f \alpha} } \beta = x$
This ends the proof of surjection.
Hence by Surjection iff Cardinal Inequality:

$\ds \size {\bigcup_{A \mathop \in \FF} B_A} \le \size {\mathbf m \times \mathbf n}$
By definition of subset:

$\forall A \in \FF: A \subseteq B_A$.
Then by Set Union Preserves Subsets:

$\ds \bigcup \FF \subseteq \bigcup_{A \mathop \in \FF} B_A$.
Hence by Subset implies Cardinal Inequality:

$\ds \size {\bigcup \FF} \le \ds \size {\bigcup_{A \mathop \in \FF} B_A}$
Thus the result:

$\size {\bigcup \FF} \le \size {\mathbf m \times \mathbf n}$
Thus by definition of product of cardinals:

$\size {\mathbf m \times \mathbf n} = \mathbf m \mathbf n$
$\blacksquare$


Sources
Mizar article CARD_2:87




