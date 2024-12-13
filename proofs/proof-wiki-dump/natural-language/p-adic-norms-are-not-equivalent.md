# 

Source: https://proofwiki.org/wiki/P-adic_Norms_are_Not_Equivalent

Theorem
Let $p_1$ and $p_2$ be prime numbers such that $p_1 \ne p_2$.
Let $\norm {\,\cdot\,}_{p_1}$ and $\norm {\,\cdot\,}_{p_2}$ be the $p$-adic norms on the rationals $\Q$.

Then $\norm {\,\cdot\,}_{p_1}$ and $\norm {\,\cdot\,}_{p_2}$ are not equivalent norms.
That is, the topology induced by $\norm {\,\cdot\,}_{p_1}$ does not equal the topology induced by $\norm {\,\cdot\,}_{p_2}$.


Proof
Consider $p_1/p_2 \in \Q$. 

With $\norm {\,\cdot\,}_{p_1}$:














\(\ds \norm {p_1/p_2}_{p_1}\)

\(=\)







\(\ds \norm {p_1}_{p_1} \norm {1/p_2}_{p_1}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds \norm {p_1}_{p_1} \times 1\)





$p_1$ does not divide $p_2$














\(\ds \)

\(=\)







\(\ds 1 / {p_1}\)




















\(\ds \)

\(\lt\)







\(\ds 1\)










On the other hand, with $\norm {\,\cdot\,}_{p_2}$:














\(\ds \norm {p_1/p_2}_{p_2}\)

\(=\)







\(\ds \norm {p_1}_{p_2} \norm {1/p_2}_{p_2}\)





Non-Archimedean Norm Axiom $\text N 2$: Multiplicativity














\(\ds \)

\(=\)







\(\ds 1 \times \norm {1/p_2}_{p_2}\)





$p_2$ does not divide $p_1$














\(\ds \)

\(=\)







\(\ds p_2\)




















\(\ds \)

\(>\)







\(\ds 1\)










By open unit ball equivalence, $\norm {\,\cdot\,}_{p_1}$ and $\norm {\,\cdot\,}_{p_2}$ are not equivalent norms.

By Equivalence of Definitions of Equivalent Division Ring Norms and topological equivalence then the topology induced by $\norm {\,\cdot\,}_{p_1}$ does not equal the topology induced by $\norm {\,\cdot\,}_{p_2}$.
$\blacksquare$


Sources
1997: Fernando Q. Gouvea: p-adic Numbers: An Introduction: $\S 3.1.2$ Absolute Values on $\Q$, Problem $68$
2007: Svetlana Katok: p-adic Analysis Compared with Real ... (previous) ... (next): $\S 1.4$ The field of $p$-adic numbers $\Q_p$: Remark $1.28$




