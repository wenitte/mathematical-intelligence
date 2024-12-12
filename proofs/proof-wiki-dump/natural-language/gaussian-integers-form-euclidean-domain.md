# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Euclidean_Domain

Theorem
Let $\struct {\Z \sqbrk i, +, \times}$ be the integral domain of Gaussian Integers.
Let $\nu: \Z \sqbrk i \to \R$ be the real-valued function defined as: 

$\forall a \in \Z \sqbrk i: \map \nu a = \cmod a^2$
where $\cmod a$ is the (complex) modulus of $a$.

Then $\nu$ is a Euclidean valuation on $\Z \sqbrk i$.
Hence $\struct {\Z \sqbrk i, +, \times}$ with $\nu: \Z \sqbrk i \to \Z$ forms a Euclidean domain.


Proof 1
We have by definition that $\Z \sqbrk i \subseteq \C$.
Let $a, b \in \Z \sqbrk i$.
We have from Modulus of Product that $\cmod a \cdot \cmod b = \cmod {a b}$.
From Complex Modulus is Non-Negative:

$\forall a \in \C: \cmod a \ge 0$
and:

$\cmod a = 0 \iff a = 0$

Let $a = x + i y$.
Suppose $a \in \Z \sqbrk i \ne 0$.
Then $x \ne 0$ or $y \ne 0$ and $x^2 \ge 1$ or $y^2 \ge 1$.
So:

$\cmod a \ge 1$

Similarly, $b \in \Z \sqbrk i, b \ne 0 \implies \cmod b \ge 1$.
Thus it follows that $\cmod {a b} \ge \cmod a$ and so $\nu$ is a Euclidean valuation on $\Z \left[{i}\right]$.


This needs considerable tedious hard slog to complete it.In particular: definition of Euclidean valuation requires codomain $\N$, consider modulus squared insteadTo discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Finish}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.
Now, consider $x, y \in \Z \sqbrk i$.
We want to find $q, r \in \Z \sqbrk i$ such that $x = q y + r$.
Note that this means we want $r = y \paren {\dfrac x y - q}$ where $\dfrac x y$ is complex but not necessarily Gaussian.
We extend $\nu$ to the complex numbers and define $\nu: \C \to \C$ as:

$\forall z \in \C: \map \nu z = \cmod z$
Then we have:

$\map \nu r = \map \nu y \cdot \map \nu {\dfrac x y - q}$
Thus if $\map \nu {\dfrac x y - q} < 1$ we have:

$\map \nu r < \map \nu y$

Consider the point $P = \dfrac x y$ as a point on the complex plane.
Let $Q$ lie at a point representing the Gaussian integer $q$ which lies closest to $P$.
The distance $P Q$ is at most half the length of a diagonal of a unit square in the complex plane.
Thus:

$\map \nu {\dfrac x y - q} = \cmod {\dfrac x y - q} \le \dfrac {\sqrt 2} 2 = \dfrac 1 {\sqrt 2} < 1$
This element $q$ and the element $r$, where $\map \nu r < \map \nu y$, are the required values.
Thus $\Z \sqbrk i$ is a Euclidean domain.
$\blacksquare$


Although this article appears correct, it's inelegant. There has to be a better way of doing it.You can help $\mathsf{Pr} \infty \mathsf{fWiki}$ by redesigning it.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Improve}} from the code.If you would welcome a second opinion as to whether your work is correct, add a call to {{Proofread}} the page.


Proof 2
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





