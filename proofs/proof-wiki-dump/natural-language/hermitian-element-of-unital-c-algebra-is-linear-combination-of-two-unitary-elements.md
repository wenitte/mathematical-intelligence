# 

Source: https://proofwiki.org/wiki/Hermitian_Element_of_Unital_C*-Algebra_is_Linear_Combination_of_Two_Unitary_Elements

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $x \in A$ be Hermitian. 

Then there exists unitary elements $u, v \in A$ and $\alpha \ge 0$ such that:

$x = \alpha \paren {u + v}$


Proof
If $x = {\mathbf 0}_A$, then we can take $\alpha = 0$ and $u = v = {\mathbf 1}_A$.
Take $x \ne {\mathbf 0}_A$.
First take $\norm x \le 1$. 
From Spectral Radius of Normal Element of C*-Algebra Equal to Norm, we have:

$\norm x = \sup \set {\cmod \lambda : \lambda \in \map {\sigma_A} x} \le 1$
where $\map {\sigma_A} x$ denotes the spectrum of $x$ in $A$.
From Spectrum of Hermitian Element in Unital C*-Algebra is Real we have $\map {\sigma_A} x \subseteq \R$.
We therefore have:

$\map {\sigma_A} x \subseteq \closedint {-1} 1$
Hence $1 - t^2 \ge 0$ for each $t \in \map {\sigma_A} x$. 
Hence by the Spectral Mapping Theorem for Polynomials, we obtain:

$\map {\sigma_A} { {\mathbf 1}_A - x^2} = \set {1 - t^2 : t \in \map {\sigma_A} x} \subseteq \hointr 0 \infty$
From Star of Product of Elements in *-Algebra and Identity Element in Unital *-Algebra is Hermitian, we have that ${\mathbf 1}_A - x^2$ is Hermitian.
So ${\mathbf 1}_A - x^2$ is positive. 
From Existence and Uniqueness of Positive Nth Root of Positive Element of C*-Algebra, there exists a positive $s \in A$ with $s^2 = {\mathbf 1}_A - x^2$.
Take $u = x + i s$ and $v = x - i s$.
We have:














\(\ds u u^\ast\)

\(=\)







\(\ds \paren {x + i s} \paren {x - i s}\)




















\(\ds \)

\(=\)







\(\ds x^2 + s^2\)




















\(\ds \)

\(=\)







\(\ds x^2 + \paren { {\mathbf 1}_A - x^2}\)




















\(\ds \)

\(=\)







\(\ds {\mathbf 1}_A\)









We also have:

$u^\ast u = \paren {x - is} \paren {x + i s} = x^2 + s^2 = {\mathbf 1}_A$
Hence $u$ is unitary.
Since $v = u^\ast$, we obtain that $v$ is unitary also. 
We clearly have:














\(\ds \frac 1 2 \paren {u + v}\)

\(=\)







\(\ds \frac 1 2 \paren {x + is + \paren {x - is} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {2 x}\)




















\(\ds \)

\(=\)







\(\ds x\)









Hence we have the result for $\norm x \le 1$.

Now take $\norm x > 1$.
We have that:

$\ds \norm {\frac x {\norm x} } \le 1$
from Norm Axiom $\text N 2$: Positive Homogeneity.
Hence there exists unitary elements $u, v \in A$ such that:

$\ds \frac x {\norm x} = \frac 1 2 \paren {u + v}$
so that:

$\ds x = \frac {\norm x} 2 \paren {u + v}$
Hence we are done with $\alpha = \dfrac {\norm x} 2$. 
$\blacksquare$


Sources
1990: Gerard J. Murphy: C*-Algebras and Operator Theory ... (previous) ... (next): $2.2$: Positive Elements of $C^\ast$-Algebras




