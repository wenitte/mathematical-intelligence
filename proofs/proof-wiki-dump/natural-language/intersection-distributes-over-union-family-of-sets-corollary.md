# 

Source: https://proofwiki.org/wiki/Intersection_Distributes_over_Union/Family_of_Sets/Corollary

Theorem
Let $I$ and $J$ be indexing sets.
Let $\family {A_\alpha}_{\alpha \mathop \in I}$ and $\family {B_\beta}_{\beta \mathop \in J}$ be indexed families of subsets of a set $S$.

Then:

$\ds \bigcup_{\tuple {\alpha, \beta} \mathop \in I \times J} \paren {A_\alpha \cap B_\beta} = \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcup_{\beta \mathop \in J} B_\beta}$
where $\ds \bigcup_{\alpha \mathop \in I} A_\alpha$ denotes the union of $\family {A_\alpha}_{\alpha \mathop \in I}$.


Proof













\(\ds \bigcup_{\alpha \mathop \in I} \paren {A_\alpha \cap B}\)

\(=\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap B\)





Intersection Distributes over Union of Family








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{\alpha \mathop \in I} \paren {A_\alpha \cap \paren {\bigcup_{\beta \mathop \in J} B_\beta} }\)

\(=\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcup_{\beta \mathop \in J} B_\beta}\)





setting $\ds B = \paren {\bigcup_{\beta \mathop \in J} B_\beta}$








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{\alpha \mathop \in I} \paren {\bigcup_{\beta \mathop \in J} \paren {A_\alpha \cap B_\beta} }\)

\(=\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcup_{\beta \mathop \in J} B_\beta}\)





Intersection Distributes over Union of Family








\(\ds \leadsto \ \ \)





\(\ds \bigcup_{\paren {\alpha, \beta} \mathop \in I \times J} \paren {A_\alpha \cap B_\beta}\)

\(=\)







\(\ds \paren {\bigcup_{\alpha \mathop \in I} A_\alpha} \cap \paren {\bigcup_{\beta \mathop \in J} B_\beta}\)









$\blacksquare$


Sources
1960: Paul R. Halmos: Naive Set Theory ... (previous) ... (next): $\S 9$: Families




