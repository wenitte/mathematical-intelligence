# 

Source: https://proofwiki.org/wiki/Norm_of_Positive_Linear_Functional_on_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra with identity element ${\mathbf 1}_A$. 
Let $f : A \to \C$ be a positive linear functional.
Let $\norm {\, \cdot \,}_{A^\ast}$ be the norm of a bounded linear functional.

Then $f$ is bounded and:

$\norm f_{A^\ast} = \map f { {\mathbf 1}_A}$


Proof
From Positive Linear Functional on C*-Algebra is Bounded, $f$ is bounded.
We show that:

$\cmod {\map f x} \le \map f { {\mathbf 1}_A}$
for each $x \in A$ with $\norm x \le 1$. 
Since equality is attained for $x = {\mathbf 1}_A$, we will then have $\norm f_{A^\ast} = \map f { {\mathbf 1}_A}$.
We have, for all $u \in A$:














\(\ds \map \Re {\map f u}\)

\(=\)







\(\ds \frac 1 2 \paren {\map f u + \overline {\map f u} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 2 \paren {\map f u + \map f {u^\ast} }\)





Positive Linear Functional on C*-Algebra preserves Star














\(\ds \)

\(=\)







\(\ds \map f {\frac 1 2 \paren {u + u^\ast} }\)





$f$ is linear














\(\ds \)

\(=\)







\(\ds \map f {\map \Re u}\)





Definition of Real Part of Element of *-Algebra



Let $x \in A$ have $\norm x \le 1$.
Take $\theta \in \R$ such that:

$\cmod {\map \phi x} = e^{i \theta} \map \phi x$
Then we have:














\(\ds \cmod {\map f x}\)

\(=\)







\(\ds \map \Re {\cmod {\map f x} }\)




















\(\ds \)

\(=\)







\(\ds \map \Re {\map f {e^{i \theta} x} }\)





Definition of Linear Functional














\(\ds \)

\(=\)







\(\ds \map f {\map \Re {e^{i \theta} x} }\)









From Element of *-Algebra Uniquely Decomposes into Hermitian Elements, $\map \Re {e^{i \theta} x}$ is Hermitian.
From Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we have:

$\map \Re {e^{i \theta} x} \le_A \norm {e^{i \theta} x} {\mathbf 1}_A$
where $\le_A$ is the canonical preordering of $A$.
From Norm Axiom $\text N 1$: Positive Definiteness, we have:

$\map \Re {e^{i \theta} x} \le_A \norm x {\mathbf 1}_A = {\mathbf 1}_A$
From Positive Linear Functional on C*-Algebra is Increasing on Hermitian Elements, we have:

$\map f {\map \Re {e^{i \theta} x} } \le \map f { {\mathbf 1}_A}$
Hence:

$\cmod {\map f x} \le \map f { {\mathbf 1}_A}$
$\blacksquare$





