# 

Source: https://proofwiki.org/wiki/Norm_satisfying_Parallelogram_Law_induced_by_Inner_Product/Complex_Case



Theorem
Let $V$ be a vector space over $\R$.
Let $\norm \cdot : V \to \R$ be a norm on $V$ such that: 

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$
for each $x, y \in V$.

Then the function $\innerprod \cdot \cdot : V \times V \to \C$ defined by: 

$\ds \innerprod x y = \frac 1 4 \sum_{k \mathop = 0}^3 i^k \norm {x + i^k y}^2$
for each $x, y \in V$, is an inner product on $V$.
Further, $\norm {\, \cdot \,}$ is the inner product norm of $\struct {V, \innerprod \cdot \cdot}$.


Proof
We write out:

$\innerprod x y = \dfrac 1 4 \paren {\norm {x + y}^2 + i \norm {x + i y}^2 - \norm {x - y}^2 - i \norm {x - i y}^2}$
We show that $\innerprod \cdot \cdot$ is an inner product. 


Proof of conjugate symmetry
For each $x, y \in V$, we have:














\(\ds \overline {\innerprod x y}\)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x + y}^2 - i \norm {x + i y}^2 - \norm {x - y}^2 + i \norm {x - i y}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x + y}^2 - i \cmod i^2 \norm {-i x + y}^2 - \norm {x - y}^2 + i \cmod {-i}^2 \norm {i x + y}^2}\)





Norm Axiom $\text N 1$: Positive Definiteness














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\norm {y + x}^2 - i \norm {y - ix}^2 - \norm {x - iy}^2 + i \norm {i x + y}^2}\)




















\(\ds \)

\(=\)







\(\ds \innerprod y x\)









$\Box$


Proof of linearity in first argument
First, for each $x, y \in V$, we have:














\(\ds \innerprod {i x} y\)

\(=\)







\(\ds \frac 1 4 \paren {\norm {i x + y}^2 + i \norm {i x + i y}^2 - \norm {i x - y}^2 - i \norm {i x - i y}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\cmod i^2 \norm {x - i y}^2 + i \cmod i^2 \norm {x + y}^2 - \cmod i^2 \norm {x + i y}^2 - i \cmod i^2 \norm {x - y}^2}\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds \frac 1 4 \paren {\norm {x - i y}^2 + i \norm {x + y}^2 - \norm {x + i y}^2 - i \norm {x - y}^2}\)




















\(\ds \)

\(=\)







\(\ds \frac i 4 \paren {-i \norm {x - i y}^2 + \norm {x + y}^2 + i \norm {x + i y}^2 - \norm {x - y}^2}\)




















\(\ds \)

\(=\)







\(\ds i \innerprod x y\)









We also have:

$\ds \map \Re {\innerprod x y} = \frac 1 4 \paren {\norm {x + y}^2 - \norm {x - y}^2}$
Let $V_\R$ be the realification of $V$.
Define $\innerprod \cdot \cdot_\R : V \times V \to \R$ by:

$\innerprod x y_\R = \map \Re {\innerprod x y}$
Note that by hypothesis:

$\norm {x + y}^2 + \norm {x - y}^2 = 2 \paren {\norm x^2 + \norm y^2}$ for each $x, y \in V$.
By Norm satisfying Parallelogram Law induced by Inner Product: Real Case, we have that $\innerprod \cdot \cdot_\R$ is an inner product on $V_\R$.
We therefore have:

$\innerprod {x + y} z_\R = \innerprod x z_\R + \innerprod y z_\R$
for each $x, y, z \in V$.
That is:

$\map \Re {\innerprod {x + y} z} = \map \Re {\innerprod x z} + \map \Re {\innerprod y z}$
for each $x, y, z \in V$.
In particular:

$\map \Re {\innerprod {i x + i y} z} = \map \Re {\innerprod {i x} z} + \map \Re {\innerprod {i y} z}$
for each $x, y \in V$, so that:

$\map \Re {i \innerprod {x + y} z} = \map \Re {i \innerprod x z} + \map \Re {i \innerprod y z}$
From Imaginary Part of Complex Product, we have:

$\map \Re {i z} = -\map \Im z$
for each $z \in \C$.
We therefore have:

$-\map \Im {\innerprod {x + y} z} = -\map \Im {\innerprod x z} - \map \Im {\innerprod y z}$
and hence:

$\map \Im {\innerprod {x + y} z} = \map \Im {\innerprod x z} + \map \Im {\innerprod y z}$
for each $x, y, z \in V$.
We can conclude that:














\(\ds \innerprod {x + y} z\)

\(=\)







\(\ds \map \Re {\innerprod {x + y} z} + i \map \Im {\innerprod {x + y} z}\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \Re {\innerprod x z} + \map \Re {\innerprod y z} } + i \paren {\map \Im {\innerprod x z} + \map \Im {\innerprod y z} }\)




















\(\ds \)

\(=\)







\(\ds \paren {\map \Re {\innerprod x z} + i \map \Im {\innerprod x z} } + \paren {\map \Re {\innerprod y z} + i \map \Im {\innerprod y z} }\)




















\(\ds \)

\(=\)







\(\ds \innerprod x z + \innerprod y z\)









for each $x, y, z \in V$.
Finally, let $\alpha, \beta \in \R$ and $x, y \in V$.
We then have, for $\lambda = \alpha + i \beta$:














\(\ds \innerprod {\lambda x} y\)

\(=\)







\(\ds \innerprod {\paren {\alpha + i \beta} x} y\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\alpha x + i \beta x} y\)




















\(\ds \)

\(=\)







\(\ds \innerprod {\alpha x} y + \innerprod {i \beta x} y\)





we have just shown that $\innerprod {u + v} w = \innerprod u w + \innerprod v w$ for each $u, v, w \in V$














\(\ds \)

\(=\)







\(\ds \alpha \innerprod x y + \beta \innerprod {i x} y\)





using the linearity of $\innerprod \cdot \cdot_\R$














\(\ds \)

\(=\)







\(\ds \alpha \innerprod x y + i \beta \innerprod x y\)





we have shown that $\innerprod {i u} v = i \innerprod u v$ for each $u, v \in V$














\(\ds \)

\(=\)







\(\ds \paren {\alpha + i \beta} \innerprod x y\)




















\(\ds \)

\(=\)







\(\ds \lambda \innerprod x y\)









Hence $\innerprod \cdot \cdot$ is linear in its first argument.
$\Box$


Proof of non-negative definiteness
For each $x \in V$, we have:














\(\ds \map \Im {\innerprod x x}\)

\(=\)







\(\ds \norm {x + i x}^2 - \norm {x - i x}^2\)




















\(\ds \)

\(=\)







\(\ds \cmod {1 + i}^2 \norm x^2 - \cmod {1 - i}^2 \norm x^2\)





Norm Axiom $\text N 2$: Positive Homogeneity














\(\ds \)

\(=\)







\(\ds 2 \norm x^2 - 2 \norm x^2\)




















\(\ds \)

\(=\)







\(\ds 0\)









We also have:

$\map \Re {\innerprod x x} = \frac 1 4 \paren {\norm {2 x}^2 - \norm { {\mathbf 0}_V}^2} = \norm x^2 \ge 0$
by Norm Axiom $\text N 1$: Positive Definiteness and Norm Axiom $\text N 2$: Positive Homogeneity. 
Hence we have:

$\innerprod x x \in \R_{\ge 0}$ for each $x \in V$.
$\Box$


Proof of positiveness
We have:

$\innerprod x x = \norm x^2$
for each $x \in V$.
Hence from Norm Axiom $\text N 2$: Positive Homogeneity, we have $\innerprod x x = 0$ if and only if $x = {\mathbf 0}_V$. 
$\Box$


Proof that $\innerprod \cdot \cdot$ induces $\norm {\, \cdot \,}$
As above we have:

$\innerprod x x = \norm x^2$
for each $x \in V$.
Hence we have:

$\norm x = \sqrt {\innerprod x x}$ for each $x \in V$.
From the definition of the inner product norm, $\innerprod \cdot \cdot$ induces $\norm {\, \cdot \,}$.
$\blacksquare$





