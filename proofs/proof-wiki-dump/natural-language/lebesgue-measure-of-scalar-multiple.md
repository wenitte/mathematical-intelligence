# 

Source: https://proofwiki.org/wiki/Lebesgue_Measure_of_Scalar_Multiple

Theorem
Let $\lambda^n$ be the $n$-dimensional Lebesgue measure on $\R^n$ equipped with the Borel $\sigma$-algebra $\map \BB {\R^n}$.
Let $B \in \BB$.
Let $t \in \R_{>0}$.

Then:

$\map {\lambda^n} {t \cdot B} = t^n \map {\lambda^n} B$
where $t \cdot B$ is the set $\set {t \mathbf b: \mathbf b \in B}$.


Proof
It follows from Rescaling is Linear Transformation that the mapping $\mathbf x \mapsto t \mathbf x$ is a linear transformation.
Denote $t \, \mathbf I_n$ for the matrix associated to this linear transformation by Linear Transformation as Matrix Product.
From Determinant of Rescaling Matrix:

$\map \det {t \, \mathbf I_n} = t^n$

From Inverse of Rescaling Matrix, $t \, \mathbf I_n$ is the inverse of $t^{-1} \mathbf I_n$.
Thus, it follows that:














\(\ds \map {\lambda^n} {t \cdot B}\)

\(=\)







\(\ds \map {\lambda^n} {\map {\paren {t \, \mathbf I_n} } B}\)




















\(\ds \)

\(=\)







\(\ds \map {\lambda^n} {\map {\paren {t^{-1} \, \mathbf I_n}^{-1} } B}\)





Inverse of Group Inverse














\(\ds \)

\(=\)







\(\ds \map {\paren {\paren {t^{-1} \, \mathbf I_n}_* \lambda^n} } B\)





Definition of Pushforward Measure














\(\ds \)

\(=\)







\(\ds \size {\map \det {\paren {t^{-1} \, \mathbf I_n}^{-1} } } \cdot \map {\lambda^n} B\)





Pushforward of Lebesgue Measure under General Linear Group




This article, or a section of it, needs explaining.In particular: For Inverse of Group Inverse to be used, it has to be established that it is indeed a group.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by explaining it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Explain}} from the code.
Now recall $\map \det {\paren {t^{-1} \, \mathbf I_n}^{-1} } = \map \det {t \, \mathbf I_n} = t^n$.
Since $t > 0$, $\size {t^n} = t^n$, and the result follows.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 5$: Problem $8$
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 7$: Problem $7$




