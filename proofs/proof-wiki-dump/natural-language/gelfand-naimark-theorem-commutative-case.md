# 

Source: https://proofwiki.org/wiki/Gelfand-Naimark_Theorem/Commutative_Case

Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a commutative $\text C^\ast$-algebra.
Let $\Phi_A$ be the spectrum of $A$.
Let $\struct {\map {\CC_0} {\Phi_A}, \overline \cdot, \norm {\, \cdot \,} }$ be the $\text C^\ast$-algebra of continuous complex-valued functions vanishing at infinity.
Define $G : A \to \map {\CC_0} {\Phi_A}$ by:

$\map G a = \hat a$
where $\hat a$ is the Gelfand transform of $a$.

Then $G$ is a isometric $\ast$-algebra isomorphism.
That is, the commutative $\text C^\ast$-algebras are precisely $\struct {\map {\CC_0} X, \overline \cdot, \norm {\, \cdot \,} }$ for locally compact Hausdorff spaces $X$, up to isometric $\ast$-algebra isomorphism. 


Unital
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a commutative unital $\text C^\ast$-algebra.
Let $\Phi_A$ be the spectrum of $A$.
Let $\struct {\map \CC {\Phi_A}, \overline \cdot, \norm {\, \cdot \,} }$ be the $\text C^\ast$-algebra of continuous complex-valued functions vanishing at infinity.
Define $G : A \to \map \CC {\Phi_A}$ by:

$\map G a = \hat a$
where $\hat a$ is the Gelfand transform of $a$.

Then $G$ is a isometric unital $\ast$-algebra isomorphism.
That is, the commutative unital  $\text C^\ast$-algebras are precisely $\struct {\map \CC K, \overline \cdot, \norm {\, \cdot \,} }$ for compact Hausdorff spaces $K$, up to isometric $\ast$-algebra isomorphism. 


Proof
First, from Spectrum of Commutative C*-Algebra is Non-Empty, we have $\Phi_A \ne \O$ and hence the Gelfand transform is indeed defined.
From Spectrum of Banach Algebra is Weak-* Locally Compact Hausdorff Space, $\Phi_A$ is a locally compact Hausdorff space, so we can understand $\map {\CC_0} {\Phi_A}$.
From the Gelfand Representation Theorem, $G$ is an algebra homomorphism with:

$\norm {\map G a}_\infty = \map {r_A} a$
for each $a \in A$.
Since $A$ is commutative, we have:

$a a^\ast = a^\ast a$
for each $a \in A$.
Hence every $a \in A$ is normal.
From Spectral Radius of Normal Element of C*-Algebra Equal to Norm, we have $\map {r_A} a = \norm a$.
Hence: 

$\norm {\map G a}_\infty = \norm a$
and $G$ is a linear isometry.
It remains to show that $G$ is a $\ast$-algebra homomorphism and a surjection.
For each $\phi \in \Phi_A$, we have:














\(\ds \map {\overline {\hat a} } \phi\)

\(=\)







\(\ds \overline {\map {\hat a} \phi}\)




















\(\ds \)

\(=\)







\(\ds \overline {\map \phi a}\)




















\(\ds \)

\(=\)







\(\ds \map \phi {a^\ast}\)





Character on C*-Algebra is *-Algebra Homomorphism














\(\ds \)

\(=\)







\(\ds \map {\hat {\paren {a^\ast} } } \phi\)









Hence we have:

$\overline {\map G a} = \map G {a^\ast}$
So $G$ is a $\ast$-algebra homomorphism.
From Image of Closed Set under Linear Isometry from Banach Space to Normed Vector Space is Closed, $G \sqbrk A$ is closed in $\map {\CC_0} {\Phi_A}$.
Hence from Image of *-Algebra under *-Algebra Homomorphism is *-Subalgebra, $G \sqbrk A$ is a $\ast$-subalgebra of $\map {\CC_0} {\Phi_A}$.
We look to apply Stone-Weierstrass Theorem: Locally Compact Hausdorff Space: Complex-Valued.
We need to show that:

$(1) \quad$ for each $\phi, \psi \in \Phi_A$ with $\phi \ne \psi$ there exists $a \in A$ such that $\map {\hat a} \phi \ne \map {\hat a} \psi$.
$(2) \quad$ for each $\phi \in \Phi_A$ there exists $a \in A$ such that $\map {\hat a} \phi \ne 0$.
Both conditions are almost immediate.
To show $(1)$, note that if $\phi \ne \psi$ there exists $a \in A$ such that $\map \phi a \ne \map \psi a$, so $\map {\hat a} \phi \ne \map {\hat a} \psi$. 
Note that $(2)$ follows from the definition of a character: we have $\phi \ne {\mathbf 0}_{A^\ast}$ hence there exists $a \in A$ with $\map \phi a = \map {\hat a} \phi \ne 0$.
Hence by Stone-Weierstrass Theorem: Locally Compact Hausdorff Space: Complex-Valued, we have:

$G \sqbrk A^- = \map {\CC_0} {\Phi_A}$
Since $G \sqbrk A$ is closed, we have:

$G \sqbrk A^- = G \sqbrk A$
from Set is Closed iff Equals Topological Closure.
So:

$G \sqbrk A = \map {\CC_0} {\Phi_A}$
and $G$ is surjection.
Hence $G$ is a isometric $\ast$-algebra isomorphism.
So every commutative $\text C^\ast$-algebra is isometrically $\ast$-algebra isomorphic to $\struct {\map {\CC_0} X, \overline \cdot, \norm {\, \cdot \,} }$ for some locally compact Hausdorff spaces $X$. 
Conversely, from Space of Complex-Valued Continuous Functions Vanishing at Infinity is C*-Algebra, $\struct {\map {\CC_0} X, \overline \cdot, \norm {\, \cdot \,} }$ is a commutative $\text C^\ast$-algebra for each locally compact Hausdorff space $X$. 
Each such $\text C^\ast$-algebra is commutative since $\C$ is a field from Complex Numbers form Field.
$\blacksquare$





