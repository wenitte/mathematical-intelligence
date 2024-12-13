# 

Source: https://proofwiki.org/wiki/Quotient_Group_is_Abelian_iff_All_Commutators_in_Divisor/Proof_2

Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $G / N$ be the quotient group of $G$ by $N$.

Then the quotient group $G / N$ is abelian if and only if:

$\forall x, y \in G: \sqbrk {x, y} \in N$
where $\sqbrk {x, y}$ denotes the commutator of $x$ and $y$.
That is, if and only if $x y x^{-1} y^{-1} \in N$ for all $x, y \in G$.


Proof
Let $G / N$ be abelian.
Then:










\(\ds \forall a N, b N \in G / N: \, \)



\(\ds a N b N\)

\(=\)







\(\ds b N a N\)














\(\ds \leadsto \ \ \)





\(\ds a b N\)

\(=\)







\(\ds b a N\)














\(\ds \leadsto \ \ \)





\(\ds a b \paren {b a}^{-1}\)

\(\in\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds a b a^{-1} b^{-1}\)

\(\in\)







\(\ds N\)










The argument reverses.
Suppose that $\forall a, b \in G: a b a^{-1} b^{-1} \in N$.











\(\ds \forall a, b \in G: \, \)



\(\ds a b a^{-1} b^{-1}\)

\(\in\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds a b \paren {b a}^{-1}\)

\(\in\)







\(\ds N\)














\(\ds \leadsto \ \ \)





\(\ds a b N\)

\(=\)







\(\ds b a N\)














\(\ds \leadsto \ \ \)





\(\ds a N b N\)

\(=\)







\(\ds b N a N\)









$\blacksquare$





