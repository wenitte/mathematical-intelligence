# 

Source: https://proofwiki.org/wiki/Gelfand-Naimark_Theorem/General_Case

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.

Then there exists a representation $\struct {\pi, \HH}$ of $A$ such that $\pi$ is an isometry.
In other words, there exists a Hilbert space over $\C$ such that $A$ is isometrically $\ast$-algebra isomorphic to a $\text C^\ast$-subalgebra of $\map B \HH$, the space of bounded linear transformations on $\HH$.
Further if $A$ is separable, $\HH$ can be chosen to be separable.


Proof
First take $A$ to be unital.
Let $S_A$ be the state space of $A$.
Let $F \subseteq S_A$ be everywhere dense in the weak-$\ast$ topology.
By the Gelfand-Naimark-Segal Construction:

for each positive linear functional $f : A \to \C$ there exists a cyclic representation $\tuple {\pi_f, \struct {\HH_f, \innerprod \cdot \cdot_f} }$ of $A$ with cyclic vector $e_f$ such that:
$\map f a = \innerprod {\map {\pi_f} a e_f} {e_f}_f$ for each $a \in A$.
Let:

$\ds \HH = \bigoplus_{f \in F} \HH_f$
be the direct sum of $\family {\HH_f}_{f \mathop \in F}$.
Also let:

$\ds \pi = \bigoplus_{f \in F} \pi_f$
be the direct sum of $\family {\pi_f}_{f \mathop \in F}$.
From Direct Sum of Representations of C*-Algebra is Representation, $\tuple {\pi, \HH}$ is a representation of $A$.
We now want to establish that $\pi$ is an isometry.
From *-Algebra Homomorphism between C*-Algebras is Norm-Decreasing, we have:

$\norm {\map \pi a}_{\map B \HH} \le \norm a$
for each $a \in A$.
From Bounded Linear Operator on Hilbert Space Direct Sum, we have:

$\ds \norm {\map \pi a}_{\map B \HH} = \sup_{f \mathop \in F} \norm {\map {\pi_f} a}_{\map B {\HH_f} }$
We firstly have:














\(\ds \norm {e_f}_f^2\)

\(=\)







\(\ds \innerprod {e_f} {e_f}_f\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\map {\pi_f} { {\mathbf 1}_A} e_f} {e_f}_f\)





$\pi_f$ is unital














\(\ds \)

\(=\)







\(\ds \map f { {\mathbf 1}_A}\)




















\(\ds \)

\(=\)







\(\ds 1\)









Hence:














\(\ds \norm {\map {\pi_f} a}_{\map B {\HH_f} }^2\)

\(\ge\)







\(\ds \norm {\map {\pi_f} a e_f}_f^2\)





Fundamental Property of Norm on Bounded Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {\map {\pi_f} a e_f} {\map {\pi_f} a e_f}_f\)





Definition of Inner Product Norm














\(\ds \)

\(=\)







\(\ds \innerprod {\paren {\map {\pi_f} a}^\ast \map {\pi_f} a e_f} {e_f}_f\)





Definition of Adjoint Linear Transformation














\(\ds \)

\(=\)







\(\ds \innerprod {\map {\pi_f} {a^\ast} \map {\pi_f} a e_f} {e_f}_f\)





$\pi_f$ is a $\ast$-algebra homomorphism














\(\ds \)

\(=\)







\(\ds \innerprod {\map {\pi_f} {a^\ast a} e_f} {e_f}_f\)





$\pi_f$ is an algebra homomorphism














\(\ds \)

\(=\)







\(\ds \map f {a^\ast a}\)









We can therefore conclude that:

$\ds \sup_{f \mathop \in F} \map f {a^\ast a} \le \norm {\map \pi a}_{\map B \HH}^2 \le \norm a^2$
From Evaluation Linear Transformation on Normed Vector Space is Linear Isometry and Supremum of Continuous Bounded Real-Valued Function on Everywhere Dense Subset, we have:

$\ds \sup_{f \mathop \in F} \map f {a^\ast a} = \sup_{f \in S_A} \map f {a^\ast a}$
From Product of Element of C*-Algebra with its Star is Positive, $a^\ast a$ is positive.
Hence from Norm of Positive Element of Unital C*-Algebra in terms of State Space we have:

$\ds \sup_{f \in S_A} \map f {a^\ast a} = \norm {a^\ast a} = \norm a^2$
from $(\text C^\ast 5)$ in the definition of a $\text C^\ast$-algebra.
So we have:

$\ds \norm a^2 \le \norm {\map \pi a}_{\map B \HH}^2 \le \norm a^2$
Hence we obtain:

$\norm {\map \pi a}_{\map B \HH} = \norm a$
So we are done in the unital case.

Now take $A$ not unital.
Let $\struct {A_+, \ast, \norm {\, \cdot \,}_\ast}$ be the unitization of $A$.
From the unital case, there exists a representation $\struct {\widetilde \pi, \HH}$ of $A_+$ such that $\widetilde \pi$ is an isometry.
Define:

$\map \pi a = \map {\widetilde \pi} {a, 0}$ for each $a \in A$.
From Composition of *-Algebra Homomorphisms is *-Algebra Homomorphism, $\pi$ is a $\ast$-algebra homomorphism. 
Further, since $\norm {\tuple {a, 0} }_\ast = \norm a = \norm {\map {\widetilde \pi} {a, 0} }_{\map B \HH} = \norm {\map \pi a}_{\map B \HH}$ for each $a \in A$:

$\pi$ is an isometry.
So we have the result for general $A$.

Now suppose that $A$ is separable.
From Closed Unit Ball in Normed Dual Space of Separable Normed Vector Space is Weak-* Metrizable, we have that $\struct {B_{A^\ast}, w^\ast}$ is metrizable.
From the Banach-Alaoglu Theorem, $\struct {B_{A^\ast}, w^\ast}$ is compact.
From Compact Metric Space is Separable, $\struct {B_{A^\ast}, w^\ast}$ is separable.
From Subspace of Separable Metric Space is Separable, $\struct {S_A, w^\ast}$ is separable.
Hence there exists a countable set $F \subseteq S_A$ that is everywhere dense in the weak-$\ast$ topology.
Construct $\tuple {\pi_f, \HH_f}$ for each $f \in F$ and $\tuple {\pi, \HH}$ as before.
By what we have already shown, $\tuple {\pi, \HH}$ is a representation of $A$.
We first show that $\HH_f$ is separable.
By the definition of a cyclic vector:

$\set {\map \pi a e_f : a \in A}$ is everywhere dense in $\HH_f$.
Let $\sequence {a_n}_{n \mathop \in \N}$ be everywhere dense in $A$ and $v \in \HH_f$. 
We show that:

$\set {\map \pi {a_n} e_f : n \in \N}$ is everywhere dense in $\HH_f$.
We have that $\set {\map \pi {a_n} e_f : n \in \N}$ is countable, so this is sufficient.
Take $\epsilon > 0$ and $n \in \N$ such that $\norm {a - a_n} < \epsilon$.
Then we have:














\(\ds \norm {\map \pi {a_n} e_f - \map \pi a e_f}\)

\(\le\)







\(\ds \norm {\map \pi {a_n} - \map \pi a}_{\map B \HH}\)





Fundamental Property of Norm on Bounded Linear Transformation














\(\ds \)

\(=\)







\(\ds \norm {a_n - a}\)





$\pi$ is an isometry














\(\ds \)

\(<\)







\(\ds \epsilon\)









Since $\epsilon$ is arbitrary, we have that:

$\set {\map \pi {a_n} e_f : n \in \N}$ is everywhere dense in $\HH_f$.
Hence $\HH_f$ is separable. 
From Hilbert Space Direct Sum of Countably Many Separable Hilbert Spaces is Separable, $\HH$ is also separable.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {VIII}.5.17$




