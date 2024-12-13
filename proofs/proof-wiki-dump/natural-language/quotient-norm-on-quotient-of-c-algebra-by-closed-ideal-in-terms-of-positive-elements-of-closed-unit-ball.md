# 

Source: https://proofwiki.org/wiki/Quotient_Norm_on_Quotient_of_C*-Algebra_by_Closed_Ideal_in_terms_of_Positive_Elements_of_Closed_Unit_Ball

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $I$ be a closed ideal of $A$.
Let $\struct {A/I, \norm {\, \cdot \,}_{A/I} }$ be the quotient normed algebra of $A$ modulo $I$.
Let $\pi : A \to A/I$ be the quotient mapping.
Let $B_I$ be the closed unit ball of $I$.
Let $B_I^+ \subseteq B_I$ be the set of positive elements of $A$ contained in $B_I$.

Then:

$\norm {\map \pi a}_{A/I} = \inf \set {\norm {a - a x} : x \in B_I^+}$
for each $a \in A$.


Proof
Let $a \in A$ and:

$\alpha = \inf \set {\norm {a - a x} : x \in B_I^+}$
Since $I$ is an ideal, we have $a x \in I$ for each $x \in B_I^+$.
Hence we have:

$\ds \alpha \ge \inf \set {\norm {a - i} : i \in I}$
From the definition of the quotient norm, we have:

$\norm {\map \pi a}_{A/I} \le \alpha$

We now want to show that $\norm {\map \pi a}_{A/I} \ge \alpha$.
Let $y \in I$. 
We show that $\norm {a + y} \ge \epsilon$.
From Closed Ideal of C*-Algebra is Self-Adjoint, $I$ is a closed $\ast$-subalgebra of $A$.
Hence from Closed *-Subalgebra of C*-Algebra is C*-Algebra, $I$ is a $\text C^\ast$-algebra.
From Existence of Approximate Identity of C*-Algebra arising from Dense Ideal, there exists a directed set $\struct {\Lambda, \preceq}$ and approximate identity $\family {e_\lambda}_{\lambda \mathop \in \Lambda}$ for $I$.
Let $\le_A$ be the canonical preordering of $A$.
From the definition of an approximate identity we have:

$\map {\sigma_A} {e_\lambda} \subseteq \closedint 0 1$ for each $\lambda \in \Lambda$.
Hence from Spectral Radius of Normal Element of C*-Algebra Equal to Norm, we have $\norm {e_\lambda} \le 1$ and hence $e_\lambda \in B_I^+$ for each $\lambda \in \Lambda$. 
From the Spectral Mapping Theorem for Polynomials, we have:

$\map {\sigma_A} { {\mathbf 1}_A - e_\lambda} \subseteq \closedint 0 1$ for each $\lambda \in \Lambda$.
From Spectral Radius of Normal Element of C*-Algebra Equal to Norm, we have:

$\norm { {\mathbf 1}_A - e_\lambda} \le 1$ for each $\lambda \in \Lambda$.
We then have:

$\norm {\paren {a + y} \paren { {\mathbf 1}_A - e_\lambda} } \le \norm {a + y} \norm { {\mathbf 1}_A - e_\lambda} \le \norm {a + y}$
from the definition of an algebra norm.
Hence we have:














\(\ds \norm {a + y}\)

\(\ge\)







\(\ds \norm {\paren {a + y} \paren { {\mathbf 1}_A - e_\lambda} }\)




















\(\ds \)

\(=\)







\(\ds \norm {a + y - a e_\lambda - y e_\lambda}\)




















\(\ds \)

\(=\)







\(\ds \norm {\paren {a - a e_\lambda} + \paren {y - y e_\lambda} }\)




















\(\ds \)

\(\ge\)







\(\ds \norm {a - a e_\lambda} - \norm {y - y e_\lambda}\)





Reverse Triangle Inequality: Normed Vector Space














\(\ds \)

\(\ge\)







\(\ds \alpha - \norm {y - y e_\lambda}\)





since $e_\lambda \in B_I^+$



Let $\epsilon > 0$. 
Since $\family {y e_\lambda}_{\lambda \mathop \in \Lambda}$ converges to $y$, there exists $\lambda \in \Lambda$ such that:

$\norm {y - y e_\lambda} < \epsilon$
Then we have:

$\norm {a + y} \ge \alpha - \norm {y - y e_\lambda} \ge \alpha - \epsilon$
for each $\epsilon > 0$.
Hence we have:

$\norm {a + y} \ge \alpha$
Hence:

$\norm {\map \pi a}_{A/I} = \sup \set {\norm {a + y} : y \in I} \ge \alpha$

We conclude $\norm {\map \pi a}_{A/I} = \alpha$.
$\blacksquare$


Sources
2000: John B. Conway: A Course in Operator Theory ... (previous) ... (next): Lemma $5.5$




