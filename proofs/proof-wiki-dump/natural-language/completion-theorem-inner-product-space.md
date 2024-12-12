# 

Source: https://proofwiki.org/wiki/Completion_Theorem_(Inner_Product_Space)



Theorem
Let $\GF \in \set {\R, \C}$.
Let $\struct {V, \innerprod \cdot \cdot_V}$ be an inner product space over a subfield $\GF$.
Let $\norm {\, \cdot \,}_V$ be the inner product norm induced by $\innerprod \cdot \cdot_V$.
Let $\struct {H, \norm {\, \cdot \,}_H}$ be a completion of $V$ with respect to $\norm {\, \cdot \,}$ given by Completion Theorem (Normed Vector Space).

Then $\innerprod \cdot \cdot_V$ can be extended to an inner product $\innerprod \cdot \cdot_H$ on $H$.

By definition, $H$ will be a Hilbert space.
Therefore, the theorem can alternatively be stated as:

any inner product space may be completed to a Hilbert space.


Proof
We first show that $\norm {\, \cdot \,}_H$ is induced by an inner product by using Norm satisfying Parallelogram Law induced by Inner Product.
From Completion Theorem (Normed Vector Space), there exists a linear isometry $\phi : V \to H$ such that $\phi \sqbrk V$ is dense in $H$. 
From Parallelogram Law (Inner Product Space), we have:

$\norm {u + v}_V^2 + \norm {u - v}_V^2 = 2 \paren {\norm u_V^2 + \norm v_V^2}$
for each $u, v \in V$. 
Since $\phi$ is a linear isometry, we have:

$\norm {u + v}_V = \norm {\map \phi {u + v} }_H = \norm {\map \phi u + \map \phi v}_H$
$\norm {u - v}_V = \norm {\map \phi {u - v} }_H = \norm {\map \phi u - \map \phi v}_H$
$\norm u_V = \norm {\map \phi u}_H$
$\norm v_V = \norm {\map \phi v}_H$
So we have:

$\norm {\map \phi u + \map \phi v}_H^2 + \norm {\map \phi u - \map \phi v}_H^2 = 2 \paren {\norm {\map \phi u}_H^2 + \norm {\map \phi v}_H^2}$
for each $u, v \in V$.
In other words, we have:

$\norm {x + y}_H^2 + \norm {x - y}_H^2 = 2 \paren {\norm x^2_H + \norm y^2_H}$
for each $x, y \in \phi \sqbrk V$. 
Now let $x, y \in H$.
Since $\phi \sqbrk V$ is dense in $H$, there exists sequences $\sequence {x_n}_{n \mathop \in \N}$, $\sequence {y_n}_{n \mathop \in \N}$ in $\phi \sqbrk V$ such that:

$x_n \to x$
and:

$y_n \to x$
in $\struct {H, \norm {\, \cdot \,}_H}$, by Point in Closure of Subset of Metric Space iff Limit of Sequence.
For each $n \in \N$, we have:

$\norm {x_n + y_n}_H^2 + \norm {x_n - y_n}_H^2 = 2 \paren {\norm {x_n}^2_H + \norm {y_n}^2_H}$
By using Norm is Continuous, we have:

$\norm {x + y}_H^2 + \norm {x - y}^2_H = 2 \paren {\norm x^2_H + \norm y^2_H}$
by taking $n \to \infty$.


Case 1: $\GF = \R$
Define:

$\ds \innerprod x y_H = \frac {\norm {x + y}^2_H - \norm {x - y}^2_H} 4$
for each $x, y \in H$.
By Norm satisfying Parallelogram Law induced by Inner Product: Real Case, we have that $\norm {\, \cdot \,}_H$ is induced by $\norm {\, \cdot \,}_H$. 
Now take $x, y \in \phi \sqbrk V$. 
Then there exists $u, v \in V$ with $x = \map \phi u$, $y = \map \phi v$ so that:














\(\ds \innerprod {\map \phi u} {\map \phi v}_H\)

\(=\)







\(\ds \frac {\norm {\map \phi u + \map \phi v}^2_H - \norm {\map \phi u - \map \phi v}^2_H} 4\)




















\(\ds \)

\(=\)







\(\ds \frac {\norm {\map \phi {u + v} }_H^2 - \norm {\map \phi {u - v} }_H^2} 4\)





Definition of Linear Isometry














\(\ds \)

\(=\)







\(\ds \frac {\norm {u + v}^2_V - \norm {u - v}^2_V} 4\)




















\(\ds \)

\(=\)







\(\ds \innerprod u v_V\)





Parallelogram Law (Inner Product Space)



Hence $\innerprod \cdot \cdot_H$ extends $\innerprod \cdot \cdot_V$ up to identifying $V$ and $\phi \sqbrk V$.
$\Box$


Case 2: $\GF = \C$
Define:

$\ds \innerprod x y_H = \frac 1 4 \sum_{k \mathop = 0}^3 i^k \norm {x + i^k y}_H^2$
for each $x, y \in H$. 
By Norm satisfying Parallelogram Law induced by Inner Product: Complex Case, we have that $\norm {\, \cdot \,}_H$ is induced by $\norm {\, \cdot \,}_H$.
Now take $x, y \in \phi \sqbrk V$. 
Then there exists $u, v \in V$ with $x = \map \phi u$, $y = \map \phi v$ so that:














\(\ds \innerprod {\map \phi u} {\map \phi v}_H\)

\(=\)







\(\ds \frac 1 4 \sum_{k \mathop = 0}^3 i^k \norm {\map \phi u + i^k \map \phi v}_H^2\)




















\(\ds \)

\(=\)







\(\ds \frac 1 4 \sum_{k \mathop = 0}^3 i^k \norm {\map \phi {u + i^k v} }_H^2\)





Definition of Linear Isometry














\(\ds \)

\(=\)







\(\ds \frac 1 4 \sum_{k \mathop = 0}^3 i^k \norm {u + i^k v}_V^2\)




















\(\ds \)

\(=\)







\(\ds \innerprod u v_V\)





Polarization Identity: Complex Vector Space



Hence $\innerprod \cdot \cdot_H$ extends $\innerprod \cdot \cdot_V$ up to identifying $V$ and $\phi \sqbrk V$.
$\blacksquare$


Sources
1990: John B. Conway: A Course in Functional Analysis (2nd ed.) ... (previous) ... (next): $\text{I}$ Hilbert Spaces: $\S 1.$ Elementary Properties and Examples: Proposition $1.9$




