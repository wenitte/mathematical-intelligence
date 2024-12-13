# 

Source: https://proofwiki.org/wiki/Mapping/Examples/x%5E3_%2B_y%5E4_%3D_1

Example of Relation which is not a Mapping
Let $R_4$ be the relation defined on the Cartesian plane $\R \times \R$ as:

$R_4 = \set {\tuple {x, y} \in \R \times \R: x^3 + y^4 = 1}$
Then $R_4$ is not a mapping.


Proof
  Graph of $x^3 + y^4 = 1$
$R_4$ fails to be a mapping for the following reasons:

$(1): \quad$ For $x > 1$, there exists no $y \in \R$ such that $x^3 + y^4 = 1$.
Thus $R_4$ fails to be left-total.

$(2): \quad$ For $x < 1$, there exist exactly two $y \in \R$ such that $x^3 + y^4 = 1$, for example:














\(\ds 0^3 + 1^4\)

\(=\)







\(\ds 1\)




















\(\ds 0^3 + \paren {-1}^4\)

\(=\)







\(\ds 1\)









So both $\tuple {0, 1}$ and $\tuple {0, -1}$ are elements of $R_4$.
Thus $R_4$ fails to be many-to-one.
$\blacksquare$


Sources
1971: Allan Clark: Elements of Abstract Algebra ... (previous) ... (next): Chapter $1$: Mappings: $\S 10 \alpha$




