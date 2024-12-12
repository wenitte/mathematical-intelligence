# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Euclidean_Domain/Proof_2

Theorem
Let $\struct {\Z \sqbrk i, +, \times}$ be the integral domain of Gaussian Integers.
Let $\nu: \Z \sqbrk i \to \R$ be the real-valued function defined as: 

$\forall a \in \Z \sqbrk i: \map \nu a = \cmod a^2$
where $\cmod a$ is the (complex) modulus of $a$.

Then $\nu$ is a Euclidean valuation on $\Z \sqbrk i$.
Hence $\struct {\Z \sqbrk i, +, \times}$ with $\nu: \Z \sqbrk i \to \Z$ forms a Euclidean domain.


Proof
We have by definition that $\Z \sqbrk i \subseteq \C$.
Let $a, b \in \Z \sqbrk i$.
We have from Modulus of Product that:

$\cmod a \cdot \cmod b = \cmod {a b}$
From Complex Modulus is Norm we have that:

$\forall a \in \C: \cmod a \ge 0$
$\cmod a = 0 \iff a = 0$

Suppose $a = x + i y \in \Z \sqbrk i$ and $a \ne 0$.
Then either $x \ne 0$ or $y \ne 0$, so either $x^2 \ge 1$ or $y^2 \ge 1$.
So $\cmod a^2 \ge 1$.
If also $b \in \Z \sqbrk i, b \ne 0$, then:

$\map \nu {a b} = \cmod {a b}^2 \ge \cmod a^2 = \map \nu a$

Now, consider $x, y \in Z \sqbrk i$ with $y \ne 0$.
We want to find $q, r \in Z \sqbrk i$ such that $x = q y + r$ and $\map \nu r < \map \nu y$.
Note that this means we want $r = y \paren {\dfrac x y - q}$ where $\dfrac x y$ is complex but not necessarily Gaussian.
Consider the complex number $p = \dfrac x y = p_r + i p_i$.
We extend $\nu$ to the complex numbers and define $\nu: \C \to \C$ as:

$\forall z \in \C: \map \nu z = \cmod z^2$

Let $q = q_r + i q_i$ be the Gaussian integer such that:

$\map \nu {p - q} = \cmod {p - q}^2 = \paren {p_r - q_r}^2 + \paren {p_i - q_i}^2$
is minimal.
That is, $q_r$ is the nearest integer to $p_r$ and $q_i$ is the nearest integer to $p_i$.
A given real number can be at a distance at most $1/2$ from an integer, so it follows that:

$(1): \quad \map \nu {p - q} \le \paren {\dfrac 1 2}^2 + \paren {\dfrac 1 2}^2 = \dfrac 1 2$

Now by Complex Modulus is Norm, for any two complex numbers $z_1, z_2$ we have:

$\map \nu {z_1 z_2} = \map \nu {z_1} \, \map \nu {z_2}$
Thus we obtain:














\(\ds \map \nu {y \paren {p - q} }\)

\(=\)







\(\ds \map \nu y \, \map \nu {p - q}\)




















\(\ds \)

\(\le\)







\(\ds \dfrac {\map \nu y} 2\)





by $(1)$














\(\ds \)

\(<\)







\(\ds \map \nu y\)





since $\map \nu y \ne 0$



On the other hand:














\(\ds \map \nu {y \paren {p - q} }\)

\(=\)







\(\ds \map \nu {y \paren {\frac x y - q} }\)




















\(\ds \)

\(=\)







\(\ds \map \nu {x - y q}\)









So letting $r = x - y q$ we have $\map \nu r < \map \nu y$.
Moreover we trivially have $x = q y + r$.
Thus $\Z \sqbrk i$ is a Euclidean domain.
$\blacksquare$





