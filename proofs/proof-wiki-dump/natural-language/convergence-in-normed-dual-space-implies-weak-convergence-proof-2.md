# 

Source: https://proofwiki.org/wiki/Convergence_in_Normed_Dual_Space_implies_Weak-*_Convergence/Proof_2

Theorem
Let $\struct {X, \norm {\, \cdot \,}_X}$ be a normed vector space.
Let $\struct {X^\ast, \norm {\, \cdot \,}_{X^\ast} }$ be the normed dual space of $\struct {X, \norm {\, \cdot \,}_X}$.
Let $\sequence {f_n}_{n \mathop \in \N}$ be a convergent sequence in $X^\ast$.

Then $\sequence {f_n}_{n \mathop \in \N}$ converges weakly-$\ast$.


Proof
Let $f \in X^\ast$ be the limit of $\sequence {f_n}_{n \mathop \in \N}$, i.e.:

$\norm {f_n - f}_{X^\ast} \stackrel{n \to \infty}{\longrightarrow} 0$

Thus, for each $x \in X$:














\(\ds \size {\map {f_n} x - \map f x}\)

\(=\)







\(\ds \size {\map {\paren {f_n - f} } x}\)





Definition of Vector Space of Bounded Linear Functionals














\(\ds \)

\(\le\)







\(\ds \norm {f_n - f}_{X^\ast} \norm x_X\)





Fundamental Property of Norm on Bounded Linear Functional














\(\ds \)

\(\)







\(\ds \stackrel{n \to \infty}{\longrightarrow} 0\)









$\blacksquare$





