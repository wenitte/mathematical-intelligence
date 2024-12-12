# 

Source: https://proofwiki.org/wiki/Existence_and_Uniqueness_of_Adjoint_of_Densely-Defined_Linear_Operator

Theorem
Let $\Bbb F \in \set {\R, \C}$. 
Let $\struct {\HH, \innerprod \cdot \cdot}$ be a Hilbert space over $\Bbb F$.
Let $\struct {\map D T, T}$ be a densely defined linear operator on $\HH$.
For each $y \in \HH$, define the linear functional $f_x : \map D T \to \Bbb F$ by:

$\map {f_y} x = \innerprod {T x} y$ for each $x \in \map D T$.
Define:

$\map D {T^\ast} = \set {y \in H : f_y \text { is a bounded linear functional}}$

Then there exists a unique linear transformation $T^\ast : \map D {T^\ast} \to \HH$ with:

$\innerprod {T x} y = \innerprod x {T^\ast y}$ for all $x \in \map D T$ and $y \in \map D {T^\ast}$.


Proof
We first check that $\map D {T^\ast}$ is a linear subspace of $\HH$, so that the question whether $T^\ast$ be a linear transformation is well-posed.
Let $u, v \in \map D {T^\ast}$ and $\alpha \in \Bbb F$. 
Then there exists real numbers $M_1, M_2 > 0$ such that: 

$\cmod {\map {f_u} x} \le M_1 \norm x$
and:

$\cmod {\map {f_v} x} \le M_2 \norm x$
for each $x \in \map D T$.
Then, we have:














\(\ds \cmod {\map {f_{\alpha u + v} } x}\)

\(=\)







\(\ds \cmod {\innerprod {T x} {\alpha u + v} }\)




















\(\ds \)

\(=\)







\(\ds \cmod {\overline \alpha \innerprod {T x} u + \innerprod {T x} v}\)




















\(\ds \)

\(\le\)







\(\ds \cmod {\overline \alpha} \cmod {\innerprod {T x} u} + \cmod {\innerprod {T x} v}\)





Triangle Inequality














\(\ds \)

\(=\)







\(\ds \cmod \alpha \cmod {\innerprod {T x} u} + \cmod {\innerprod {T x} v}\)





Complex Modulus equals Complex Modulus of Conjugate














\(\ds \)

\(\le\)







\(\ds \paren {M_1 \cmod \alpha + M_2} \norm x\)









for each $x \in \map D T$.
So, $f_{\alpha u + v}$ is a bounded linear functional.
So $\alpha u + v \in \map D {T^\ast}$.
So from One-Step Vector Subspace Test, we have that $\map D {T^\ast}$ is a linear subspace of $\HH$.

Now let $y \in \map D {T^\ast}$.
Then:

$\map {f_y} x = \innerprod {T x} y$ defines a bounded linear functional $\map D T \to \Bbb F$
So, from Bounded Linear Transformation to Banach Space has Unique Extension to Closure of Domain, there exists a bounded linear functional $F_y : \HH \to \Bbb F$ such that: 

$\map {F_y} x = \innerprod {T x} y$ for all $x \in \map D T$.
Then from the Riesz representation theorem there exists a unique $z_y \in \HH$ such that: 

$\map {F_y} x = \innerprod x {z_y}$ for all $x \in \map D T$.
For each $y \in \map D {T^\ast}$, let: 

$T^\ast y = z_y$
Then: 

$\innerprod {T x} y = \innerprod x {T^\ast y}$ for all $x \in \map D T$ and $y \in \map D {T^\ast}$.
It remains to verify that $T^\ast$ is linear and that it is unique. 
Note that uniqueness is not immediate, since $z_y$ is the unique element of $\HH$ such that $\innerprod {T x} y = \innerprod x z$ for all $x \in \HH$, there may exist other $z$ for which this only holds for $\map D T$, and we need to verify that this is not the case.
Let $u, v \in \map D {T^\ast}$ and $\alpha \in \Bbb F$. 
Then for all $x \in \map D T$ we have: 














\(\ds \innerprod x {\map {T^\ast} {\alpha u + v} }\)

\(=\)







\(\ds \innerprod {T x} {\alpha u + v}\)




















\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod {T x} u + \innerprod {T x} v\)





Inner Product is Sesquilinear














\(\ds \)

\(=\)







\(\ds \overline \alpha \innerprod x {T^\ast u} + \innerprod x {T^\ast v}\)




















\(\ds \)

\(=\)







\(\ds \innerprod x {\alpha T^\ast u + T^\ast v}\)





Inner Product is Sesquilinear



Since $\map D T$ is dense in $\HH$, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map D T$ converging to $\alpha T^\ast u + T^\ast v - \map {T^\ast} {\alpha u + v}$.
We have: 

$\innerprod {x_n} {\alpha T^\ast u + T^\ast v - \map {T^\ast} {\alpha u + v} } = 0$ for each $n \in \N$.
So, from Inner Product is Continuous, we have: 

$\innerprod {\alpha T^\ast u + T^\ast v - \map {T^\ast} {\alpha u + v} } {\alpha T^\ast u + T^\ast v - \map {T^\ast} {\alpha u + v} } = 0$
So, from the definition of the inner product, we have: 

$\map {T^\ast} {\alpha u + v} = \alpha T^\ast u + T^\ast v$

Now, we look to uniqueness.
Suppose for some $y \in \map D {T^\ast}$ that $z_y^{(1)}, z_y^{(2)}$ are such that: 

$\innerprod {T x} y = \innerprod x {z_y^{(1)} } = \innerprod x {z_y^{(2)} }$ for $y \in \map D {T^\ast}$ and all $x \in \map D T$.
Then, we would have: 

$\innerprod x {z_y^{(1)} - z_y^{(2)} } = 0$ for each $x \in \map D T$.
Since $\map D T$ is dense, there exists a sequence $\sequence {x_n}_{n \mathop \in \N}$ in $\map D T$ converging to $z_y^{(1)} - z_y^{(2)}$. 
Then: 

$\innerprod {x_n} {z_y^{(1)} - z_y^{(2)} } = 0$ for each $n \in \N$.
Then, taking $n \to \infty$, we have: 

$\innerprod {z_y^{(1)} - z_y^{(2)} } {z_y^{(1)} - z_y^{(2)} } = 0$
from Inner Product is Continuous.
So, from the definition of the inner product, we have: 

$z_y^{(1)} = z_y^{(2)}$
justifying that $T^\ast$ is unique.
$\blacksquare$


Sources
2020: James C. Robinson: Introduction to Functional Analysis ... (previous) ... (next) $25.1$: Adjoints of Unbounded Operators




