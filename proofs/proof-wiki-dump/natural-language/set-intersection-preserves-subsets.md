# 

Source: https://proofwiki.org/wiki/Set_Intersection_Preserves_Subsets



Theorem
Let $A, B, S, T$ be sets.
Then:

$A \subseteq B, \ S \subseteq T \implies A \cap S \subseteq B \cap T$


Corollary
Let $A, B, S$ be sets.
Then:

$A \subseteq B \implies A \cap S \subseteq B \cap S$


Families of Sets
Let $I$ be an indexing set.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\alpha}_{\alpha \mathop \in I}$ be indexed families of subsets of a set $S$.
Let:

$\forall \beta \in I: A_\beta \subseteq B_\beta$

Then:

$\ds \bigcap_{\alpha \mathop \in I} A_\alpha \subseteq \bigcap_{\alpha \mathop \in I} B_\alpha$


Proof
Let $A \subseteq B$ and $S \subseteq T$.
Then:














\(\ds x \in A\)

\(\implies\)







\(\ds x \in B\)





Definition of Subset














\(\ds x \in S\)

\(\implies\)







\(\ds x \in T\)





Definition of Subset




Now we invoke the Praeclarum Theorema of propositional logic:

$\paren {p \implies q} \land \paren {r \implies s} \vdash \paren {p \land r} \implies \paren {q \land s}$
applying it as:

$\paren {x \in A \implies x \in B, \ x \in S \implies x \in T} \leadsto \paren {x \in A \land x \in S \implies x \in B \land x \in T}$
The result follows directly from the definition of set intersection:

$\paren {x \in A \implies x \in B, \ x \in S \implies x \in T} \leadsto \paren {x \in A \cap S \implies x \in B \cap T}$
and from the definition of subset:

$A \subseteq B, \ S \subseteq T \implies A \cap S \subseteq B \cap T$
$\blacksquare$





