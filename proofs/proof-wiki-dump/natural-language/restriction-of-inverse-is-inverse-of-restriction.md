# 

Source: https://proofwiki.org/wiki/Restriction_of_Inverse_is_Inverse_of_Restriction

Theorem
Let $S_1$ and $S_2$ be sets.
Let $f: S_1 \to S_2$ be a bijection.
Let $S \subseteq S_1$ be a subset of $S_1$.
Let $f^{-1}$ be the inverse of $f$.
Let $f {\restriction_{S \times f \left[{S}\right]}}$ be the restriction of $f$ to $S \times f\left[{S}\right]$.
Let $f^{-1} {\restriction_{f \left[{S}\right] \times S}}$ be the restriction of $f^{-1}$ to $f \left[{S}\right] \times S$.

Then:

$f {\restriction_{S \times f \left[{S}\right]}}$ is a bijection
and:

${\left({f {\restriction_{S \times f \left[{S}\right]}} }\right)}^{-1} = f^{-1} {\restriction_{f \left[{S}\right] \times S}}$


Proof
Let $y \in f \left[{S}\right]$.
By the definition of image:

$\exists z \in S : f \left({z}\right) = y$
Since $f$ is a bijection, $f^{-1}$ is a mapping.

Let $x = f^{-1} \left({y}\right)$.
Suppose that $x \notin S$.
Suppose that $x = z$.
Then $x \in S$.
Thus $x \ne z$.
By the definition of inverse mapping:

$f\left({x}\right) = y$
By Equality is Transitive:

$f \left({x}\right) = f \left({z}\right)$
Thus, $f$ is not an injection.
Thus, $f$ is not a bijection.
This contradicts the assumption.
Therefore, $x \in S$.

By the definition of restriction of mapping:

$f {\restriction_{S \times f \left[{S}\right]}} \left({x}\right) = f\left({x}\right)$
By Equality is Transitive:

$f {\restriction_{S \times f \left[{S}\right]}} \left({x}\right) = y$
Suppose that there exists a $w \in S$ such that $w \ne x$ and $f {\restriction_{S \times f \left[{S}\right]}} \left({w}\right) = y$.
By the definition of restriction of mapping:

$f {\restriction_{S \times f \left[{S}\right]}} \left({w}\right) = f\left({w}\right)$
By Equality is Transitive:

$f \left({w}\right) = y$
By Equality is Transitive:

$f \left({w}\right) = f\left({x}\right)$
Thus, $f$ is not an injection.
Thus, $f$ is not a bijection.
This contradicts the assumption.
Therefore, there exists a unique $x \in S$ such that:

$f {\restriction_{S \times f\left[{S}\right]}} \left({x}\right) = y$
Since $y \in f\left[{S}\right]$ was arbitrary, $f {\restriction_{S \times f \left[{S}\right]}}$ is a bijection.

Thus, ${\left(f {\restriction_{S \times f \left[{S}\right]}}\right)}^{-1}$ is a mapping.
Let $x' = {\left(f {\restriction_{S \times f \left[{S}\right]}}\right)}^{-1}\left({y}\right)$.
By the definition of inverse mapping:

$f {\restriction_{S \times f \left[{S}\right]}} \left({x'}\right) = y$
By the definition of restriction of mapping, we have $f \left({x'}\right) = y$.
Suppose that $x' \ne x$.
By Equality is Transitive:

$f\left({x'}\right) = f\left({x}\right)$
Thus, $f$ is not an injection.
Thus, $f$ is not a bijection.
This contradicts the assumption.
Therefore, $x' = x$.
By Equality is Transitive:

$f^{-1}\left({y}\right) = (f {\restriction_{S \times f \left[{S}\right]}})^{-1} \left({y}\right)$
By the definition of restriction of mapping:

$f^{-1} {\restriction_{f \left[{S}\right] \times S}} \left({y}\right) = f^{-1} \left({y}\right)$
By Equality is Transitive:

${\left(f {\restriction_{S \times f \left[{S}\right]}}\right)}^{-1} \left({y}\right) = f^{-1} {\restriction_{f\left[{S}\right] \times S}} \left({y}\right)$
Since $y \in f\left[{S}\right]$ was arbitrary:

${\left(f {\restriction_{S \times f \left[{S}\right]}}\right)}^{-1} = f^{-1} {\restriction_{f \left[{S}\right] \times S}}$
$\blacksquare$





