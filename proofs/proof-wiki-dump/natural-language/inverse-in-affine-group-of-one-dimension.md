# 

Source: https://proofwiki.org/wiki/Inverse_in_Affine_Group_of_One_Dimension

Theorem
Let $\map {\operatorname {Af}_1} \R$ denote the $1$-dimensional affine group on $\R$.
Let $f_{a b} \in \map {\operatorname {Af}_1} \R$.
Let $c = \dfrac 1 a$ and $d = \dfrac {-b} a$.

Then $f_{c d} \in \map {\operatorname {Af}_1} \R$ is the inverse of $f_{a b}$.


Proof













\(\ds y\)

\(=\)







\(\ds a x + b\)














\(\ds \leadsto \ \ \)





\(\ds y - b\)

\(=\)







\(\ds a x\)














\(\ds \leadsto \ \ \)





\(\ds \frac {y - b} a\)

\(=\)







\(\ds x\)














\(\ds \leadsto \ \ \)





\(\ds \frac y a + \frac {- b} a\)

\(=\)







\(\ds x\)









As $a \in \R_{\ne 0}$ by definition of $\map {\operatorname {Af}_1} \R$ it follows that $\dfrac 1 a \in \R_{\ne 0}$ and $\dfrac {-b} a \in \R$.

So let $c = \dfrac 1 a$ and $d = \dfrac {-b} a$.
Then:














\(\ds \map {f_{a b} \circ f_{c d} } x\)

\(=\)







\(\ds a \paren {\frac 1 a x + \frac {-b} a} + b\)




















\(\ds \)

\(=\)







\(\ds \frac a a x + \frac {-a b} a + b\)




















\(\ds \)

\(=\)







\(\ds 1 x + 0\)




















\(\ds \)

\(=\)







\(\ds \map {f_{1, 0} } x\)










Similarly:














\(\ds \map {f_{c d} \circ f_{a b} } x\)

\(=\)







\(\ds \frac 1 a \paren {a x + b} + \frac {-b} a\)




















\(\ds \)

\(=\)







\(\ds \frac a a x + \frac b a + \frac {-b} a\)




















\(\ds \)

\(=\)







\(\ds 1 x + 0\)




















\(\ds \)

\(=\)







\(\ds \map {f_{1, 0} } x\)









Hence the result.
$\blacksquare$


Sources
1982: P.M. Cohn: Algebra Volume 1 (2nd ed.) ... (previous) ... (next): $\S 3.2$: Groups; the axioms: Exercise $(2)$




