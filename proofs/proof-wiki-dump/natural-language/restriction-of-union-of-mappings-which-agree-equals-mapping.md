# 

Source: https://proofwiki.org/wiki/Restriction_of_Union_of_Mappings_which_Agree_Equals_Mapping



Theorem
Let $Y$ be a set.
Let $\family {A_i}_{i \mathop \in I}$ be a family of sets indexed by $I$.
Let $\family {f_i: A_i \to Y}$ be a family of mappings indexed by $I$.

Let $X = \ds \bigcup_{i \mathop \in I} A_i$.
Let $f = \ds \bigcup_{i \mathop \in I} f_i : X \to Y$ where $\ds \bigcup_{i \mathop \in I} f_i$ is the union of relations.

Let for all $i, j \in I$, $f_i$ and $f_j$ agree on $A_i \cap A_j$.

Let $f \restriction_{A_i} : A_i \to Y$ denote the restriction of $f$ to $A_i$.

Then:

$\forall i \in I: f \restriction_{A_i} = f_i: A_i \to Y$.


Proof
From Union of Family of Mappings which Agree is Mapping:

$f$ is a mapping from $X$ to $Y$.

Let $i \in I$ be an arbitrary index of $I$.
Consider the restriction of $f$ to $A_i$:














\(\ds f \restriction _ { A_i }\)

\(=\)







\(\ds f \cap \paren {A_i \times Y}\)





Definition of Restriction of Mapping














\(\ds \)

\(=\)







\(\ds \paren{\bigcup_{j \in I} f_j} \cap \paren{A_i \times Y}\)





Definition of $f$














\(\ds \)

\(=\)







\(\ds \bigcup_{j \in I} \paren{ f_j \cap \paren{A_i \times Y} }\)





Intersection Distributes over Union




Let $j$ be an arbitrary index of $I$.

Case 1 : $i \ne j$
Let $j \ne i$.
Let $\tuple {x, y} \in f_j \cap \paren{A_i \times Y}$.
Then:

$x \in f_j \cap f_i$
We have:

$f_i$ and $f_j$ agree on $A_i \cap A_j$
By definition of agreement of mappings:

$y = \map {f_j} x = \map {f_i} x$
Hence:

$\tuple {x, y} \in f_i$
By definition of subset:

$f_j \cap \paren{A_i \times Y} \subseteq f_i$
$\Box$

Case 2 : $j = i$
Let $j = i$.
By definition of mapping:

$f_i \subseteq A_i \times Y$
From Intersection with Subset is Subset:

$f_i = f_i \cap \paren{A_i \times Y}$
$\Box$

In either case:

$f_j \cap \paren{A_i \times Y} \subseteq f_i$
Since $j \in I$ was arbitrary:

$\forall j \in I : f_j \cap \paren{A_i \times Y} \subseteq f_i$
From Union of Family of Subsets is Subset:

$\bigcup_{j \in I} \paren{f_j \cap \paren{A_i \times Y} } \subseteq f_i$
From Set is Subset of Union of Family:

$f_i = f_i \cap \paren{A_i \times Y} \subseteq \bigcup_{j \in I} \paren{f_j \cap \paren{A_i \times Y} }$
By definition of set equality:

$f_i = \bigcup_{j \in I} \paren{f_j \cap \paren{A_i \times Y} }$
Hence:

$f \restriction _ { A_i } = f_i$

Since $i \in I$ was arbitrary:

$\forall i \in I: f \restriction_{A_i} = f_i: A_i \to Y$.
$\blacksquare$





