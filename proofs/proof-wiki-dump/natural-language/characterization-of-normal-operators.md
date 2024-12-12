# 

Source: https://proofwiki.org/wiki/Characterization_of_Normal_Operators



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\HH$ be a Hilbert space over $\GF$.
Let $A$ be a bounded linear operator on $\HH$.

Then the following are equivalent:

$(1): \quad A A^* = A^* A$, that is, $A$ is normal
$(2): \quad \forall h \in H: \norm {A h}_\HH = \norm {A^*h}_\HH$
where:

$A^*$ denotes the adjoint of $A$
$\norm {\, \cdot\,}_\HH$ denotes the inner product norm of $\HH$

If $\GF = \C$, these are also equivalent to:

$(3): \quad \map \Re A \map \Im A = \map \Im A \map \Re A$, that is, the real and imaginary parts of $A$ commute.


Proof
$(3)$ equivalent to $(1)$
Suppose $\GF = \C$. 
We have: 














\(\ds \map \Re A \map \Im A\)

\(=\)







\(\ds \paren {\frac 1 2 \paren {A + A^\ast} } \paren {\frac 1 {2 i} \paren {A - A^\ast} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4 i} \paren {A + A^\ast} \paren {A - A^\ast}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4 i} \paren {A^2 + A^\ast A - A A^\ast - \paren {A^\ast}^2}\)









and:














\(\ds \map \Im A \map \Re A\)

\(=\)







\(\ds \paren {\frac 1 {2 i} \paren {A - A^\ast} } \paren {\frac 1 2 \paren {A + A^\ast} }\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4 i} \paren {A - A^\ast} \paren {A + A^\ast}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 {4 i} \paren {A^2 - A^\ast A + A A^\ast - \paren {A^\ast}^2}\)









So $\map \Re A \map \Im A = \map \Im A \map \Re A$ if and only if

$A^\ast A - A A^\ast = -A^\ast A + A A^\ast$
This is equivalent to: 

$A^\ast A = A A^\ast$
$\Box$ 

$(1)$ implies $(2)$
We have: 














\(\ds \norm {A h}_\HH\)

\(=\)







\(\ds \sqrt {\innerprod {A h} {A h}_\HH}\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \sqrt {\innerprod h {A^\ast A h}_\HH}\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \sqrt {\innerprod h {A A^\ast h}_\HH}\)




















\(\ds \)

\(=\)







\(\ds \sqrt {\innerprod {A^\ast h} {A^\ast h}_\HH}\)





Adjoint is Involutive














\(\ds \)

\(=\)







\(\ds \norm {A^\ast h}_\HH\)









$\Box$

$(2)$ implies $(1)$
As above, we have: 

$\norm {A h}_\HH = \sqrt {\innerprod h {A^\ast A h}_\HH}$
So from Adjoint is Involutive, we have: 

$\norm {A h}_\HH = \sqrt {\innerprod h {A A^\ast h}_\HH}$
So from Inner Product is Sesquilinear, we have: 

$\innerprod h {\paren {A^\ast A - A A^\ast} h}_\HH = 0$
We have: 














\(\ds \paren {A^\ast A - A A^\ast}^\ast\)

\(=\)







\(\ds \paren {A^\ast A}^\ast - \paren {A A^\ast}^\ast\)





Adjoining is Linear














\(\ds \)

\(=\)







\(\ds A^\ast \paren {A^\ast}^\ast - \paren {A^\ast}^\ast A^\ast\)





Adjoint of Composition of Linear Transformations is Composition of Adjoints














\(\ds \)

\(=\)







\(\ds A^\ast A - A A^\ast\)





Adjoint is Involutive



So $A^\ast A - A A^\ast$ is Hermitian and: 

$\innerprod {\paren {A^\ast A - A A^\ast} h} h_\HH = 0$
for each $h \in \HH$.
So by Norm of Hermitian Operator: Corollary, we have: 

$A^\ast A = A A^\ast$
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $II.2.16$




