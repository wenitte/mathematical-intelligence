# 

Source: https://proofwiki.org/wiki/Quotient_Group_is_Abelian_iff_All_Commutators_in_Divisor/Proof_1



Theorem
Let $G$ be a group.
Let $N$ be a normal subgroup of $G$.
Let $G / N$ be the quotient group of $G$ by $N$.

Then the quotient group $G / N$ is abelian if and only if:

$\forall x, y \in G: \sqbrk {x, y} \in N$
where $\sqbrk {x, y}$ denotes the commutator of $x$ and $y$.
That is, if and only if $x y x^{-1} y^{-1} \in N$ for all $x, y \in G$.


Proof
Let $x, y \in G$.
First we establish the following:














\(\ds \paren {x N} \paren {y N}\)

\(=\)







\(\ds \paren {y N} \paren {x N}\)














\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x N} \paren {y N}\)

\(=\)







\(\ds \paren {y N} \paren {x N} N\)





Quotient Group is Group: $N$ is the identity of $G / N$








\(\ds \leadstoandfrom \ \ \)





\(\ds \paren {x N}^{-1} \paren {y N}^{-1} \paren {x N} \paren {y N}\)

\(=\)







\(\ds N\)





applying $\paren {x N}^{-1} \paren {y N}^{-1}$ to both sides








\(\ds \leadstoandfrom \ \ \)





\(\ds \sqbrk {x N, y N}\)

\(=\)







\(\ds N\)





Definition of Commutator of Group Elements








\(\ds \leadstoandfrom \ \ \)





\(\ds \sqbrk {x, y} N\)

\(=\)







\(\ds N\)





Commutator of Quotient Group Elements




\(\text {(1)}: \quad\)



\(\ds \leadstoandfrom \ \ \)





\(\ds \sqbrk {x, y}\)

\(\in\)







\(\ds N\)





Commutator of Quotient Group Elements



$\Box$


Sufficient Condition
Let $G / N$ be abelian.
Then by definition:

$\forall x, y \in G: \paren {x N} \paren {y N} = \paren {y N} \paren {x N}$
and it follows from $(1)$ that:

$\forall x, y \in G: \sqbrk {x, y} \in N$
$\Box$


Necessary Condition
Conversely, let:

$\forall x, y \in G: \sqbrk {x, y} \in N$
Again it follows from $(1)$ that:

$\forall x, y \in G: \paren {x N} \paren {y N} = \paren {y N} \paren {x N}$
That is, that $G / N$ is abelian.
$\blacksquare$





