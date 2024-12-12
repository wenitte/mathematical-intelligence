# 

Source: https://proofwiki.org/wiki/Gelfand-Naimark-Segal_Construction



Theorem
Let $\struct {A, \ast, \norm {\, \cdot \,} }$ be a unital $\text C^\ast$-algebra.
Let $f : A \to \C$ be a positive linear functional.

Then there exists a cyclic representation $\tuple {\pi_f, \struct {\HH_f, \innerprod \cdot \cdot_f} }$ with cyclic vector $e_f$ such that:

$\map f a = \innerprod {\map {\pi_f} a e_f} {e_f}_f$ for each $a \in A$.


Proof
From Positive Linear Functional on C*-Algebra is Bounded, $f$ is bounded.
Define:

$\LL_f = \set {x \in A : \map f {x^\ast x} = 0}$
From Positive Linear Functional on C*-Algebra induces Semi-Inner Product, $\LL_f$ is a vector subspace of $A$.
Construct the quotient vector space $A/\LL_f$.
Define $\widetilde {\innerprod \cdot \cdot_f} : A^2 \to \C$ by:

$\widetilde {\innerprod x y_{f, 0} } = \map f {y^\ast x}$
for each $x, y \in A$.
From Positive Linear Functional on C*-Algebra induces Semi-Inner Product, $\innerprod \cdot \cdot_f^\ast$ is a semi-inner product on $A$.
Note that:

$\LL_f = \set {x \in A : \widetilde {\innerprod x x_{f, 0} } = 0}$
Hence by Semi-Inner Product induces Inner Product on Quotient, we can define $\innerprod \cdot \cdot_{f, 0} : \paren {A/\LL_f}^2 \to \C$ by:

$\innerprod {x + \LL_f} {y + \LL_f}_{f, 0} = \map f {y^\ast x}$
to obtain an inner product on $A/\LL_f$.
By Completion Theorem (Inner Product Space), there exists a Hilbert space $\struct {\HH_f, \innerprod \cdot \cdot_f}$ and a linear isometry $\phi : A/\LL_f \to \HH_f$ such that $\phi \sqbrk {A/\LL_f}$ is everywhere dense in $\HH_f$ and:

$\innerprod {\map \phi {x + \LL_f} } {\map \phi {y + \LL_f} }_f = \innerprod {x + \LL_f} {y + \LL_f}_{f, 0}$
for each $x, y \in A$.

We show that $\LL_f$ is a left ideal.
Let $a \in A$ and $x \in \LL_f$.
We then have:














\(\ds \cmod {\map f {\paren {a x}^\ast \paren {a x} } }^2\)

\(=\)







\(\ds \cmod {\map f {x^\ast \paren {a^\ast a x} } }^2\)




















\(\ds \)

\(\le\)







\(\ds \map f {x^\ast x} \map f {\paren {a^\ast a x}^\ast \paren {a^\ast a x} }\)





Positive Linear Functional on C*-Algebra induces Semi-Inner Product: Corollary














\(\ds \)

\(=\)







\(\ds 0\)









Hence:

$\map f {\paren {a x}^\ast \paren {a x} } = 0$
giving $a x \in \LL_f$.
Hence, if $x - y \in \LL_f$ for $x, y \in A$ we have:

$a x - a y \in \LL_f$
and so $a x + \LL_f = a y + \LL_f$.
We can therefore define, for $a \in A$, $\map {\widetilde {\pi_{f, 0} } } a : A/\LL_f \to A/\LL_f$ by:

$\map {\paren {\map {\widetilde {\pi_{f, 0} } } a} } {x + \LL_f} = a x + \LL_f$
for each $x \in A$. 
For $x, y \in A$ and $\lambda \in \C$ we have:














\(\ds \map {\paren {\map {\widetilde {\pi_{f, 0} } } a} } {\paren {x + \LL_f} + \lambda \paren {y + \LL_f} }\)

\(=\)







\(\ds \map {\widetilde {\pi_{f, 0} } } {\paren {x + \lambda y} + \LL_f}\)




















\(\ds \)

\(=\)







\(\ds a \paren {x + \lambda y} + \LL_f\)




















\(\ds \)

\(=\)







\(\ds \paren {a x + \lambda a y} + \LL_f\)




















\(\ds \)

\(=\)







\(\ds \paren {a x + \LL_f} + \lambda \paren {a y + \LL_f}\)




















\(\ds \)

\(=\)







\(\ds \map {\paren {\map {\widetilde {\pi_{f, 0} } } a} } {x + \LL_f} + \lambda \map {\paren {\map {\widetilde {\pi_{f, 0} } } a} } {y + \LL_f}\)









Hence $\map {\widetilde {\pi_{f, 0} } } a$ is linear. 
We show that $\map {\widetilde {\pi_{f, 0} } } a$ is bounded for each $a \in A$.
From Bounds on Hermitian Element of Unital C*-Algebra in terms of Bounds on Spectrum, we have:

$a^\ast a \le_A \norm {a^\ast a} {\mathbf 1}_A = \norm a^2 {\mathbf 1}_A$
where $\le_A$ be the canonical preordering.
Hence from Conjugation in C*-Algebra preserves Positivity: Corollary, we have:

$x^\ast a^\ast a x \le_A \norm a^2 x^\ast x$
So from Positive Linear Functional on C*-Algebra is Increasing on Hermitian Elements,w e have:

$\map f {x^\ast a^\ast a x} \le \norm a^2 \map f {x^\ast x}$
Let $\norm {\, \cdot \,}_{f, 0}$ be the inner product norm induced by $\innerprod \cdot \cdot_{f, 0}$. 
Then we have:














\(\ds \norm {a x + \LL_f}_{f, 0}^2\)

\(=\)







\(\ds \map f {\paren {a x}^\ast \paren {a x} }\)




















\(\ds \)

\(=\)







\(\ds \map f {x^\ast a^\ast a x}\)




















\(\ds \)

\(\le\)







\(\ds \norm a^2 \map f {x^\ast x}\)




















\(\ds \)

\(=\)







\(\ds \norm a^2 \norm {x + \LL_f}_{f, 0}\)









and so $\widetilde {\pi_{f, 0} } a$ is bounded with:

$\norm {\map {\widetilde {\pi_{f, 0} } } a}_{\map B {A/\LL_f} } \le \norm a$
where $\norm {\, \cdot \,}_{\map B {A/\LL_f} }$ is the norm of a bounded linear operator on $A/\LL_f$.
From Inverse of Linear Isometry is Linear Isometry, $\phi^{-1} : \phi \sqbrk {A/\LL_f} \to A/\LL_f$.
Then set $\map {\pi_{f, 0} } a = \phi \circ \map {\widetilde {\pi_{f, 0} } } a \circ \phi^{-1} : \phi \sqbrk {A/\LL_f} \to \HH_f$.
Since $\phi$ is a linear isometry, $\map {\pi_{f, 0} } a$ is a bounded linear operator with:

$\norm {\map {\pi_{f, 0} } a}_{\map B {\phi \sqbrk {A/\LL_f} } } \le \norm a$
From Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain, there exists a unique extension $\map {\pi_f} a : \HH_f \to \HH_f$ such that:

$\norm {\map {\pi_f} a}_{\map B {\HH_f} } \le \norm a$
We now consider $\pi_f$ as a function $A \to \map B {\HH_f}$.

We show that $\tuple {\pi_f, \HH_f}$ is a representation. 
First, we show that $\pi_f$ is linear. 
That is:

$\map {\pi_f} {a + \lambda b} = \map {\pi_f} a + \lambda \map {\pi_f} b$
for $a, b \in A$ and $\lambda \in \C$. 
From Continuous Mappings into Hausdorff Space coinciding on Everywhere Dense Set coincide, it suffices to show that we have:

$\map {\pi_f} {a + \lambda b} x = \map {\pi_f} a x + \lambda \map {\pi_f} b x$
for $x \in \phi \sqbrk {A/\LL_f}$.
That is, for $u \in A/\LL_f$, we want to verify that:

$\map {\pi_f} {a + \lambda b} \map \phi u = \map {\pi_f} a \map \phi u + \lambda \map {\pi_f} b \map \phi u$
We have:














\(\ds \map {\pi_f} a \map \phi u\)

\(=\)







\(\ds \map \phi {\map {\paren {\map {\widetilde {\pi_{f, 0} } } a} } {\map {\phi^{-1} } {\map \phi u} } }\)




















\(\ds \)

\(=\)







\(\ds \map \phi { {\paren {\map {\widetilde {\pi_{f, 0} } } a} } u}\)









and likewise for $\map {\pi_f} {a + \lambda b} \map \phi u$ and $\map {\pi_f} b \map \phi u$. 
Hence, since $\phi^{-1}$ is a linear isometry, it suffices to show that:

$\paren {\map {\widetilde {\pi_{f, 0} } } a} u + \lambda \paren {\map {\widetilde {\pi_{f, 0} } } b} u = \paren {\map {\widetilde {\pi_{f, 0} } } {a + \lambda b} } u$
for each $u \in A/\LL_f$. 
This is equivalent to:

$\paren {a u + \LL_f} + \lambda \paren {b u + \LL_f} = \paren {a + \lambda b} u + \LL_f$
which follows from the definition of $A/\LL_f$. 
Hence we have that $\pi_f$ is linear. 
We now show that $\pi_f$ is an algebra homomorphism. 
That is, for each $a, b \in A$:

$\map {\pi_f} a \map {\pi_f} b = \map {\pi_f} {a b}$
Again, from Continuous Mappings into Hausdorff Space coinciding on Everywhere Dense Set coincide it is enough to verify that:

$\map {\widetilde {\pi_{f, 0} } } a \map {\widetilde {\pi_{f, 0} } } b u = \map {\widetilde {\pi_{f, 0} } } {a b} u$
for each $u \in A/\LL_f$. 
We have:

$\map {\widetilde {\pi_{f, 0} } } a \map {\widetilde {\pi_{f, 0} } } b u = \map {\paren {\map {\widetilde {\pi_{f, 0} } } a} } {b u + \LL_f} = \paren {a b + \LL_f} = \map {\widetilde {\pi_{f, 0} } } {a b} u$
Hence $\pi_f$ is an algebar homomorphism.

We now want to verify that:

$\paren {\map {\pi_f} a}^\ast = \map {\pi_f} {a^\ast}$
From Everywhere Dense Set determines Adjoint Linear Transformation, it is enough to show:

$\innerprod {\map {\pi_f} a \map \phi {u + \LL_f} } {\map \phi {v + \LL_f} }_f = \innerprod {\map \phi {u + \LL_f} } {\map {\pi_f} {a^\ast} \map \phi {v + \LL_f} }_f$
for each $u + \LL_f, v + \LL_f \in A/\LL_f$. 
We have:














\(\ds \innerprod {\map \phi {\map {\widetilde {\pi_{f, 0} } } a \paren {u + \LL_f} } } {\map \phi {v + \LL_f} }_f\)

\(=\)







\(\ds \innerprod {\map {\widetilde {\pi_{f, 0} } } a \paren {u + \LL_f} } {v + \LL_f}_{f, 0}\)





by the construction of $\innerprod \cdot \cdot_f$














\(\ds \)

\(=\)







\(\ds \innerprod {a u + \LL_f} {v + \LL_f}_{f, 0}\)




















\(\ds \)

\(=\)







\(\ds \map f {v^\ast \paren {a u} }\)





definition of $\innerprod \cdot \cdot_{f, 0}$














\(\ds \)

\(=\)







\(\ds \map f {\paren {a^\ast v}^\ast u}\)





$(\text C^\ast 2)$ in Definition of Involution on Algebra














\(\ds \)

\(=\)







\(\ds \innerprod {u + \LL_f} {a^\ast v + \LL_f}_{f, 0}\)





definition of $\innerprod \cdot \cdot_{f, 0}$














\(\ds \)

\(=\)







\(\ds \innerprod {\map \phi {u + \LL_f} } {\map \phi {\map {\widetilde {\pi_{f, 0} } } {a^\ast} \paren {v + \LL_f} } }_f\)









Hence by Everywhere Dense Set determines Adjoint Linear Transformation, we have:

$\paren {\map {\pi_f} a}^\ast = \map {\pi_f} {a^\ast}$

Finally, we show that $\pi_f$ is unital. 
We have:

$\paren {\map {\widetilde {\pi_{f, 0} } } { {\mathbf 1}_A} } {u + \LL_f} = u + \LL_f$
for each $a \in A$.
Hence we have:

$\map {\pi_f} { {\mathbf 1}_A} u = u$
for all $u \in \phi \sqbrk {A/\LL_f}$. 
From Continuous Mappings into Hausdorff Space coinciding on Everywhere Dense Set coincide, we therefore have:

$\map {\pi_f} { {\mathbf 1}_A} = I$
Hence $\pi_f$ be a unital $\ast$-algebra homomorphism. 
Further, we have for $a \in A$:














\(\ds \innerprod {\map {\pi_f} a e} e_f\)

\(=\)







\(\ds \innerprod {\map \phi {\map {\widetilde {\pi_{f, 0} } } a {\mathbf 1}_A} } {\map \phi { {\mathbf 1}_A + \LL_f} }_f\)




















\(\ds \)

\(=\)







\(\ds \innerprod {a + \LL_f} { {\mathbf 1}_A + \LL_f}_{f, 0}\)




















\(\ds \)

\(=\)







\(\ds \map f { {\mathbf 1}_A^\ast a}\)




















\(\ds \)

\(=\)







\(\ds \map f a\)










We finally show that $\tuple {\pi_f, \struct {\HH_f, \innerprod \cdot \cdot}_f}$ is a cyclic representation with cyclic vector $e_f = \map \pi { {\mathbf 1}_A + \LL_f}$.
For $a \in A$ we have:

$\map {\pi_f} a e_f = \map \phi {\map {\widetilde {\pi_{f, 0} } } a \paren { {\mathbf 1}_A + \LL_f} } = \map \phi {a + \LL_f}$
Hence:

$\map {\pi_f} A e_f = \phi \sqbrk {A/\LL_f}$
By construction, $\phi \sqbrk {A/\LL_f}$ is everywhere dense in $\HH_f$.
That is:

$\map \cl {\map {\pi_f} A e_f} = \HH_f$
so $\tuple {\pi_f, \struct {\HH_f, \innerprod \cdot \cdot}_f}$ is a cyclic representation with cyclic vector $e_f = \map \pi { {\mathbf 1}_A + \LL_f}$.
$\blacksquare$


Source of Name
This entry was named for Israel Moiseevich Gelfand, Mark Aronovich Naimark and Irving Ezra Segal.


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next) $\text {VIII}.5.14$




