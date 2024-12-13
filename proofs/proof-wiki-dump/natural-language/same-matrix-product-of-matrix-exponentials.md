# 

Source: https://proofwiki.org/wiki/Same-Matrix_Product_of_Matrix_Exponentials

Theorem
Let $\mathbf A$ be a square matrix.
Let $s, t \in \R$ be real numbers.
Let $e^{\mathbf A t}$ denote the matrix exponential of $\mathbf A$.
Then:

$e^{\mathbf A t} e^{\mathbf A s} = e^{\mathbf A \paren {t + s} }$


Proof
Let

$\map \Phi t = e^{\mathbf A t} e^{\mathbf A s} - e^{\mathbf A \paren {t + s} }$
for some fixed $s \in \R$.
From Derivative of Matrix Exponential:














\(\ds \map {\Phi'} t\)

\(=\)







\(\ds \mathbf A e^{\mathbf A t} e^{\mathbf A s} - \mathbf A e^{\mathbf A \paren {t + s} }\)




















\(\ds \)

\(=\)







\(\ds \mathbf A \paren {e^{\mathbf A t} e^{\mathbf A s} - e^{\mathbf A \paren {t + s} } }\)




















\(\ds \)

\(=\)







\(\ds \mathbf A \map \Phi t\)










Since $\map \Phi 0 = e^{\mathbf A s} - e^{\mathbf A s} = 0$, it follows that:

$\map \Phi t = e^{\mathbf A t} \map \Phi 0 = 0$
independent of $s$.
Hence the result.
$\blacksquare$





