# 

Source: https://proofwiki.org/wiki/Difference_of_Unions_is_Subset_of_Union_of_Differences

Theorem
Let $I$ be an indexing set.
Let $S_\alpha, T_\alpha$ be sets, for all $\alpha \in I$.

Then:

$\ds \paren {\bigcup_{\alpha \mathop \in I} S_\alpha} \setminus \paren {\bigcup_{\alpha \mathop \in I} T_\alpha} \subseteq \bigcup_{\alpha \mathop \in I} \paren {S_\alpha \setminus T_\alpha}$
where $S_\alpha \setminus T_\alpha$ denotes set difference.


Proof
Let $\ds x \in \paren {\bigcup_{\alpha \mathop \in I} S_\alpha} \setminus \paren {\bigcup_{\alpha \mathop \in I} T_\alpha}$.
Then by definition of set difference:














\(\ds x\)

\(\in\)







\(\ds \bigcup_{\alpha \mathop \in I} S_\alpha\)




















\(\ds x\)

\(\notin\)







\(\ds \bigcup_{\alpha \mathop \in I} T_\alpha\)










By definition of set union, it follows that:










\(\ds \exists \beta \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds S_\beta\)
















\(\ds \neg \exists \beta \in I: \, \)



\(\ds x\)

\(\in\)







\(\ds T_\beta\)














\(\ds \leadsto \ \ \)

\(\ds \forall \beta \in I: \, \)



\(\ds x\)

\(\notin\)







\(\ds T_\beta\)





De Morgan's Laws (Predicate Logic)



and so:

$\exists \beta \in I: x \in S_\beta \setminus T_\beta$

Hence:

$\ds x \in \bigcup_{\alpha \mathop \in I} \paren {S_\alpha \setminus T_\alpha}$
by definition of set union.
The result follows by definition of subset.
$\blacksquare$


Sources
1968: A.N. Kolmogorov and S.V. Fomin: Introductory Real Analysis ... (previous) ... (next): $\S 1$: Sets and Functions: Problem $5$




