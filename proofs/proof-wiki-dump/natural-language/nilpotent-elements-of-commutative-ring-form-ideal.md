# 

Source: https://proofwiki.org/wiki/Nilpotent_Elements_of_Commutative_Ring_form_Ideal



Theorem
Let $\struct {R, +, \circ}$ be a commutative ring whose zero is $0_R$ and whose unity is $1_R$.

The subset of nilpotent elements of $R$ form an ideal of $R$.


Proof
Let $N$ be the subset of nilpotent elements.
Because $0_R$ is nilpotent, $0_R \in N$ and so $N$ is non-empty.

Let $x \in N$ and $a \in R$.
We have:










\(\ds \exists n \in \Z_{>0}: \, \)



\(\ds x^n\)

\(=\)







\(\ds 0_R\)





Definition of Nilpotent Ring Element








\(\ds \leadsto \ \ \)





\(\ds a^n \circ x^n\)

\(=\)







\(\ds 0_R\)





Definition of Ring Zero








\(\ds \leadsto \ \ \)





\(\ds \paren {a \circ x}^n\)

\(=\)







\(\ds 0_R\)





Power of Product of Commutative Elements in Semigroup








\(\ds \leadsto \ \ \)





\(\ds a x\)

\(\in\)







\(\ds N\)





Definition of $N$




Let $x, y \in N$.
Let $x^n = 0$ and $y^m = 0$.
By the Binomial Theorem, $\paren {x - y}^p = 0$ for $p \ge n + m - 1$.
Thus $x - y \in N$.

Thus from Test for Ideal, $N$ is an ideal.
$\blacksquare$


Also see
Definition:Nilradical of Ring


Sources
1969: M.F. Atiyah and I.G. MacDonald: Introduction to Commutative Algebra: Chapter $1$: Rings and Ideals: $\S$ Nilradical and Jacobson Radical
1978: Thomas A. Whitelaw: An Introduction to Abstract Algebra ... (previous) ... (next): Chapter $9$: Rings: Exercise $11 \ \text {(ii)}$




