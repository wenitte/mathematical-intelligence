# 

Source: https://proofwiki.org/wiki/Conjugate_of_Polynomial_is_Polynomial_of_Conjugate

Theorem
Let $\map f z = a_n z^n + a_{n - 1} z^{n - 1} + \cdots + a_1 z + a_0$ be a polynomial over complex numbers where $a_0, \ldots, a_n$ are real numbers.
Let $\alpha \in \C$ be a complex number.

Then:

$\overline {\map f \alpha} = \map f {\overline \alpha}$
where $\overline \alpha$ denotes the complex conjugate of $\alpha$.


Proof
By Power of Complex Conjugate is Complex Conjugate of Power:

$\overline {\alpha^k} = \paren {\overline \alpha}^k$
for all $k$ between $0$ and $n$.
Then from Product of Complex Conjugates:

$\overline {a_k \alpha^k} = \overline {a_k} \cdot \overline {\alpha^k}$
But $a_k$ is real.
So by Complex Number equals Conjugate iff Wholly Real:

$\overline {a_k} = a_k$.
From Sum of Complex Conjugates, it follows that:

$\overline {\map f \alpha} = a_n \paren {\overline \alpha}^n + a_{n - 1} \paren {\overline \alpha}^{n - 1} + \cdots + a_1 \overline \alpha + a_0$
Hence the result.
$\blacksquare$


Sources
1960: Walter Ledermann: Complex Numbers ... (previous) ... (next): $\S 1.2$. The Algebraic Theory: $(1.17)$




