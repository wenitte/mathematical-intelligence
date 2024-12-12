# 

Source: https://proofwiki.org/wiki/Complex_Roots_of_Polynomial_with_Real_Coefficients_occur_in_Conjugate_Pairs/Proof_1

Theorem
Let $\map f z = a_n z^n + a_{n - 1} z^{n - 1} + \cdots + a_1 z + a_0$ be a polynomial over complex numbers where $a_0, \ldots, a_n$ are real numbers.
Let $\alpha \in \C$ be a root of $f$.

Then $\overline \alpha$ is also a root of $f$, where $\overline \alpha$ denotes the complex conjugate of $\alpha$.

That is, all complex roots of $f$ appear as conjugate pairs.


Proof
Let $\alpha \in \C$ be a root of $f$.
Then $\map f \alpha = 0$ by definition.

Suppose $\alpha$ is wholly real.
Then by Complex Number equals Conjugate iff Wholly Real:

$\alpha = \overline \alpha$
and so $\overline \alpha$ is a root of $f$.

Now let $\alpha \in \C$ not be wholly real.
By definition of complex conjugate, we have that:

$\overline 0 = 0$
and so:

$\map f \alpha = \overline {\map f \alpha}$
From Conjugate of Polynomial is Polynomial of Conjugate:

$\overline {\map f \alpha} = \map f {\overline \alpha}$
from which it follows that:

$\map f {\overline \alpha} = 0$
That is, $\overline \alpha$ is also a root of $f$.
$\blacksquare$





