# 

Source: https://proofwiki.org/wiki/Positive_Linear_Functional_on_C*-Algebra_induces_Semi-Inner_Product



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $f : A \to \C$ be a positive linear functional. 
Define $\innerprod \cdot \cdot : A^2 \to A$ by:

$\innerprod x y = \map f {y^\ast x}$
for each $x, y \in A$. 

Then $\innerprod \cdot \cdot$ is a semi-inner product on $A$. 


Corollary
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a $\text C^\ast$-algebra.
Let $f : A \to \C$ be a positive linear functional. 
Let $x, y \in A$.

Then:

$\cmod {\map f {y^\ast x} }^2 \le \map f {y^\ast y} \map f {x^\ast x}$


Proof
Proof of Conjugate Symmetry
Let $x, y \in A$ we have:














\(\ds \overline {\innerprod x y}\)

\(=\)







\(\ds \overline {\map f {y^\ast x} }\)




















\(\ds \)

\(=\)







\(\ds \map f {\paren {y^\ast x}^\ast}\)





Positive Linear Functional on C*-Algebra preserves Star














\(\ds \)

\(=\)







\(\ds \map f {x^\ast y}\)





$(\text C^\ast 4)$ and $(\text C^\ast 1)$ in Definition of Involution on Algebra














\(\ds \)

\(=\)







\(\ds \innerprod y x\)









$\Box$


Proof of linearity
Let $x, y, z \in A$ and $\alpha \in \C$.
Then we have:














\(\ds \innerprod {x + \alpha y} z\)

\(=\)







\(\ds \map f {z^\ast \paren {x + \alpha y} }\)




















\(\ds \)

\(=\)







\(\ds \map f {z^\ast x + \alpha z^\ast y}\)




















\(\ds \)

\(=\)







\(\ds \map f {z^\ast x} + \alpha \map f {z^\ast y}\)





from the linearity of $f$














\(\ds \)

\(=\)







\(\ds \innerprod x z + \alpha \innerprod y z\)









$\Box$


Proof of non-negative definiteness
Let $x \in A$.
Then we have:

$\innerprod x x = \map f {x^\ast x}$
From Product of Element of C*-Algebra with its Star is Positive, $x^\ast x$ is positive.
So $\map f {x^\ast x} \in \R_{\ge 0}$.
Hence $\innerprod x x \in \R_{\ge 0}$. 
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {VIII}.5.11$




