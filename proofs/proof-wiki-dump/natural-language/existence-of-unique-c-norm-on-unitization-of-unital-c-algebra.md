# 

Source: https://proofwiki.org/wiki/Existence_of_Unique_C*_Norm_on_Unitization_of_Unital_C*-Algebra

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $\struct {A_+, \norm {\, \cdot \,}_+}$ be the unitization of $A$ as a normed algebra.
Define:

$\tuple {a, \lambda}^\dagger = \tuple {a^\ast, \overline \lambda}$
for each $\tuple {a, \lambda} \in A_+$. 

Then there exists a unique algebra norm $\norm {\, \cdot \,}_\ast$ such that $\struct {A_+, \dagger, \norm {\, \cdot \,}_\ast}$ is a $\text C^\ast$-algebra and:

$\norm {\tuple {a, 0} }_\ast = \norm a$
for each $a \in A$. 


Proof
From Unitization of *-Algebra is *-Algebra, we have that $\tuple {A_+, \dagger}$ is a $\ast$-algebra.
Let $A \times \C$ be the direct product of $A$ and $\C$.
Note that while $A_+$ and $A \times \C$ share the same underlying set, their multiplication differs.
For clarity, we will specify $\circ_{A_+}$ and $\circ_{A \times \C}$, where:

$\tuple {a, \lambda} \circ_{A_+} \tuple {b, \mu} = \tuple {a b + \lambda b + \mu a, \lambda \mu}$
and:

$\tuple {a, \lambda} \circ_{A \times \C} \tuple {b, \mu} = \tuple {a b, \lambda \mu}$
for each $\tuple {a, \lambda}, \tuple {b, \mu} \in A \times \C$. 
Let $\norm {\, \cdot \,}_{A \times \C}$ be the direct product norm on $A \times \C$. 
From Direct Product of C*-Algebras is C*-Algebra and Complex Numbers form Unital C*-Algebra, $\tuple {A \times \C, \dagger, \norm {\, \cdot \,}_{A \times \C} }$ is a $\text C^\ast$-algebra. 
Further, $\tuple { {\mathbf 1}_A, 1}$ is the identity element for $A \times \C$.
Define $\phi : A_+ \to A \times \C$ by:

$\map \phi {a, \lambda} = \tuple {a + \lambda {\mathbf 1}_A, \lambda}$
for each $\tuple {a, \lambda} \in A_+$. 
We show that $\phi$ is an $\ast$-algebra isomorphism.

First, $\phi$ is surjective, since we have:

$\map \phi {a - \lambda {\mathbf 1}_A, \lambda} = \tuple {a, \lambda}$
for each $\tuple {a, \lambda} \in A_+$.
Let $\tuple {a, \lambda}, \tuple {b, \mu} \in A_+$ and $t \in \C$.
Then we have:














\(\ds \map \phi {\tuple {a, \lambda} + t \tuple {b, \mu} }\)

\(=\)







\(\ds \map \phi {a + t b, \lambda + t \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a + t b + \paren {\lambda + t \mu} {\mathbf 1}_A, \lambda + t \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a + \lambda {\mathbf 1}_A} + t \paren {b + \mu {\mathbf 1}_A}, \lambda + t \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a + \lambda {\mathbf 1}_A, \lambda} +  \tuple {b + \mu {\mathbf 1}_A, \mu}\)




















\(\ds \)

\(=\)







\(\ds \map \phi a + t \map \phi b\)









Hence $\phi$ is linear.
We also have:














\(\ds \map \phi { \tuple {a, \lambda} \tuple {b, \mu} }\)

\(=\)







\(\ds \map \phi {a b + \lambda b + \mu a, \lambda \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a b + \lambda b + \mu a + \lambda \mu {\mathbf 1}_A, \lambda \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {\paren {a + \lambda {\mathbf 1}_A} \paren {b + \mu {\mathbf 1}_A}, \lambda \mu}\)




















\(\ds \)

\(=\)







\(\ds \tuple {a + \lambda {\mathbf 1}_A, \lambda} \tuple {b + \mu {\mathbf 1}_A, \mu}\)




















\(\ds \)

\(=\)







\(\ds \map \phi a \map \phi b\)









So $\phi$ is an algebra homomorphism.
We have:














\(\ds \map \phi {a, \lambda}^\dagger\)

\(=\)







\(\ds \tuple {a + \lambda {\mathbf 1}_A, \lambda}^\dagger\)




















\(\ds \)

\(=\)







\(\ds \tuple {a^\ast + \overline \lambda {\mathbf 1}_A, \overline \lambda}\)





$(\text C^\ast 2)$ and $(\text C^\ast 4)$ in Definition of Involution on Algebra














\(\ds \)

\(=\)







\(\ds \map \phi {\tuple {a^\ast, \overline \lambda} }\)




















\(\ds \)

\(=\)







\(\ds \map \phi {\tuple {a, \lambda}^\dagger}\)









So $\phi$ is a $\ast$-algebra homomorphism.
Hence $\phi$ is a $\ast$-algebra isomorphism.

Define $\norm {\, \cdot \,}_\ast : A_+ \to \hointr 0 \infty$ by:

$\norm {\tuple {a, \lambda} }_\ast = \norm {\map \phi {a, \lambda} }_{A_+}$
for each $\tuple {a, \lambda} \in A_+$. 
From Direct Product of C*-Algebras is C*-Algebra, $\struct {A_+, \dagger, \norm {\, \cdot \,}_\ast}$ is a $\text C^\ast$-algebra. 
Further from Norm on C*-Algebra is Unique, $\norm {\, \cdot \,}_\ast$ is unique.
Finally, we have:














\(\ds \norm {\tuple {a, 0} }_\ast\)

\(=\)







\(\ds \norm {\map \phi {a, 0} }_+\)




















\(\ds \)

\(=\)







\(\ds \norm {\tuple {a, 0} }_+\)




















\(\ds \)

\(=\)







\(\ds \max \set {\norm a, 0}\)




















\(\ds \)

\(=\)







\(\ds \norm a\)









for each $a \in A$, hence we are done.
$\blacksquare$





