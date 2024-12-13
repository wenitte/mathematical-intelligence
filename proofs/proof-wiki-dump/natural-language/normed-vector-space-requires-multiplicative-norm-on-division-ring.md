# 

Source: https://proofwiki.org/wiki/Normed_Vector_Space_Requires_Multiplicative_Norm_on_Division_Ring

Theorem
Let $R$ be a normed division ring with a submultiplicative norm $\norm {\, \cdot \,}_R$.
Let $V$ be a vector space that is not a trivial vector space.
Let $\norm {\, \cdot \,}: V \to \R_{\ge 0}$ be a mapping from $V$ to the positive real numbers satisfying the vector space norm axioms.
Then $\norm {\, \cdot \,}_R$ is a multiplicative norm.

That is:

$\forall r, s \in R: \norm {r s}_R = \norm r_R \norm s_R$


Proof
Since $V$ is not a trivial vector space:

$\exists \mathbf v \in V: \mathbf v \ne 0$
By Norm Axiom $\text N 1$: Positive Definiteness:

$\norm {\mathbf v} > 0$

Let $r, s \in R$:














\(\ds \norm {r s}_R \norm {\mathbf v}\)

\(=\)







\(\ds \norm {\paren {r s} \mathbf v}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \norm {r \paren {s \mathbf v} }\)





Vector Space Axiom $(\text V 7)$: Associativity with Scalar Multiplication














\(\ds \)

\(=\)







\(\ds \norm r_R \norm {s \mathbf v}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \norm r_R \norm s_R \norm {\mathbf v}\)





Norm Axiom $\text N 2$: Positive Homogeneity




By dividing both sides of the equation by $\norm {\mathbf v}$ then:

$\norm {r s}_R = \norm r_R \norm s_R$

The result follows.
$\blacksquare$





