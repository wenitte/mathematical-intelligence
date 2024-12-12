# 

Source: https://proofwiki.org/wiki/Gaussian_Integers_form_Euclidean_Domain/Proof_1

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


Sources
1969: C.R.J. Clapham: Introduction to Abstract Algebra ... (previous) ... (next): Chapter $6$: Polynomials and Euclidean Rings: $\S 27$. Euclidean Rings: Example $52$




