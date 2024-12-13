# 

Source: https://proofwiki.org/wiki/Residue_of_Gamma_Function

Theorem
Let $\Gamma$ be the Definition:Gamma Function. 
Let $n$ be a non-negative integer.
Then: 

$\Res \Gamma {-n} = \dfrac {\paren {-1}^n} {n!}$


Proof
By Poles of Gamma Function, $\Gamma$ has simple poles at the non-positive integers, so $-n$ is a simple pole of $\Gamma$. 
Then:














\(\ds \Res \Gamma {-n}\)

\(=\)







\(\ds \lim_{z \mathop \to -n} \paren {z - \paren {-n} } \map \Gamma z\)





Residue at Simple Pole














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to -n} \paren {z + n} \paren {\frac {z \paren {z + 1} \ldots \paren {z + n} } {z \paren {z + 1} \ldots \paren {z + n} } } \map \Gamma z\)





multiplying by $1$














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to -n} \paren {z + n} \frac {\map \Gamma {z + n + 1} } {z \paren {z + 1} \ldots \paren {z + n} }\)





Gamma Difference Equation














\(\ds \)

\(=\)







\(\ds \lim_{z \mathop \to -n} \frac {\map \Gamma {z + n + 1} } {z \paren {z + 1} \ldots \paren {z + n - 1} }\)





cancelling $z + n$














\(\ds \)

\(=\)







\(\ds \frac {\map \Gamma 1} {-n \paren {-n + 1} \ldots \paren {-1} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {-1}^n \paren {n \paren {n - 1} \ldots \paren 1} }\)





$\map \Gamma 1 = 1$














\(\ds \)

\(=\)







\(\ds \frac 1 {\paren {-1}^n n!}\)





Definition of Factorial














\(\ds \)

\(=\)







\(\ds \frac {\paren {-1}^n} {n!}\)









$\blacksquare$





