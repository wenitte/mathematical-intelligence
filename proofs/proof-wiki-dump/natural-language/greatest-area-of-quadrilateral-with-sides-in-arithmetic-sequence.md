# 

Source: https://proofwiki.org/wiki/Greatest_Area_of_Quadrilateral_with_Sides_in_Arithmetic_Sequence

Theorem
Let $Q$ be a quadrilateral whose sides $a$, $b$, $c$ and $d$ are in arithmetic sequence.
Let $\AA$ be the area of $Q$.
Let $Q$ be such that $\AA$ is the greatest area possible for one with sides $a$, $b$, $c$ and $d$.
Then:

$\AA = \sqrt {a b c d}$


Proof
We are given that $\AA$ is the greatest possible for a quadrilateral whose sides are $a$, $b$, $c$ and $d$.
From Area of Quadrilateral with Given Sides is Greatest when Quadrilateral is Cyclic, $Q$ is cyclic.
Hence $\AA$ can be found using Brahmagupta's Formula.

Let $s$ denote the semiperimeter of $Q$:

$s = \dfrac {a + b + c + d} 2$

We are given that $a$, $b$, $c$ and $d$ are in arithmetic sequence.
Without loss of generality, that means there exists $k$ such that:














\(\ds b\)

\(=\)







\(\ds a + k\)




















\(\ds c\)

\(=\)







\(\ds a + 2 k\)




















\(\ds d\)

\(=\)







\(\ds a + 3 k\)









where $k$ is the common difference.

Then:














\(\ds s\)

\(=\)







\(\ds \dfrac {a + b + c + d} 2\)





Definition of Semiperimeter














\(\ds \)

\(=\)







\(\ds \dfrac {a + \paren {a + k} + \paren {a + 2 k} + \paren {a + 3 k} } 2\)




















\(\ds \)

\(=\)







\(\ds \dfrac {4 a + 6 k} 2\)










\(\text {(1)}: \quad\)









\(\ds \)

\(=\)







\(\ds 2 a + 3 k\)










and so:














\(\ds \AA\)

\(=\)







\(\ds \sqrt {\paren {s - a} \paren {s - b} \paren {s - c} \paren {s - d} }\)





Brahmagupta's Formula














\(\ds \)

\(=\)







\(\ds \sqrt {\paren {a + 3 k} \times \paren {a + 2 k} \times \paren {a + k} \times a}\)





substituting $s = 2 a + 3 k$ from $(1)$ and simplifying














\(\ds \)

\(=\)







\(\ds \sqrt {a b c d}\)





from above



$\blacksquare$





