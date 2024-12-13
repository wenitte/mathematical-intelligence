# 

Source: https://proofwiki.org/wiki/Polarization_Identity/Complex_Vector_Space

Theorem
Let $\struct {V, \innerprod \cdot \cdot}$ be an inner product space over $\C$. 
Let $\norm \cdot$ be the inner product norm on $V$. 

Then, we have: 

$4 \innerprod x y = \norm {x + y}^2 - \norm {x - y}^2 + i \norm {x + i y}^2 - i \norm {x - iy}^2$
for each $x, y \in V$.


Proof
We write: 














\(\ds \norm {x + y}^2 - \norm {x - y}^2 + i \norm {x + i y}^2 - i \norm {x - iy}^2\)

\(=\)







\(\ds \sum_{n \mathop = 0}^3 i^n \norm {x + i^n y}^2\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^3 i^n \innerprod {x + i^n y} {x + i^n y}\)





Definition of Inner Product Norm



We then compute: 














\(\ds i^n \innerprod {x + i^n y} {x + i^n y}\)

\(=\)







\(\ds i^n \paren {\innerprod x {x + i^n y} + i^n \innerprod y {x + i^n y} }\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds i^n \innerprod x {x + i^n y} + i^{2 n} \innerprod y {x + i^n y}\)




















\(\ds \)

\(=\)







\(\ds i^n \paren {\innerprod x x + \overline {i^n} \innerprod x y} + i^{2 n} \paren {\innerprod y x + \overline {i^n} \innerprod y y}\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds i^n \innerprod x x + i^n \paren {-i}^n \innerprod x y + i^{2 n} \innerprod y x + i^{2 n} \paren {-i}^n \innerprod y y\)





Power of Complex Conjugate is Complex Conjugate of Power














\(\ds \)

\(=\)







\(\ds i^n \innerprod x x + \innerprod x y + \paren {-1}^n \innerprod y x + i^n \innerprod y y\)









We then have: 














\(\ds \sum_{n \mathop = 0}^3 i^n\)

\(=\)







\(\ds 1 + i + i^2 + i^3\)




















\(\ds \)

\(=\)







\(\ds 1 + i - 1 - i\)




















\(\ds \)

\(=\)







\(\ds 0\)









and:














\(\ds \sum_{n \mathop = 0}^3 \paren {-1}^n\)

\(=\)







\(\ds \paren {-1}^0 + \paren {-1}^1 + \paren {-1}^2 + \paren {-1}^3\)




















\(\ds \)

\(=\)







\(\ds 1 - 1 + 1 - 1\)




















\(\ds \)

\(=\)







\(\ds 0\)









Then we have: 














\(\ds \sum_{n \mathop = 0}^3 i^n \norm {x + i^n y}^2\)

\(=\)







\(\ds \sum_{n \mathop = 0}^3 \paren {i^n \innerprod x x + \innerprod x y + \paren {-1}^n \innerprod y x + i^n \innerprod y y}\)




















\(\ds \)

\(=\)







\(\ds \sum_{n \mathop = 0}^3 \innerprod x y + \paren {\innerprod x x + \innerprod y y} \sum_{n \mathop = 0}^3 i^n + \innerprod y x \sum_{n \mathop = 0}^3 \paren {-1}^n\)




















\(\ds \)

\(=\)







\(\ds 4 \innerprod x y\)









$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $8.3$: Properties of the Induced Norms




