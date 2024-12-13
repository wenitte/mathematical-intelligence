# 

Source: https://proofwiki.org/wiki/Quotient_Group_of_Abelian_Group_is_Abelian

Theorem
Let $G$ be an abelian group.
Let $N \le G$.

Then the quotient group $G / N$ is abelian.


Proof
First we note that because $G$ is abelian, from Subgroup of Abelian Group is Normal we have $N \lhd G$.
Thus $G / N$ exists for all subgroups of $G$.

Let $X = x N, Y = y N$ where $x, y \in G$.
From the definition of coset product:














\(\ds X Y\)

\(=\)







\(\ds \paren {x N} \paren {y N}\)




















\(\ds \)

\(=\)







\(\ds \paren {x y N}\)




















\(\ds \)

\(=\)







\(\ds \paren {y x N}\)




















\(\ds \)

\(=\)







\(\ds \paren {y N} \paren {x N}\)




















\(\ds \)

\(=\)







\(\ds Y X\)










Thus $G / N$ is abelian.
$\blacksquare$





