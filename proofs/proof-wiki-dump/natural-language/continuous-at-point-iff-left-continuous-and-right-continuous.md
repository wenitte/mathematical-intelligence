# 

Source: https://proofwiki.org/wiki/Continuous_at_Point_iff_Left-Continuous_and_Right-Continuous



Theorem
Let $A \subseteq \R$ be an open set of real numbers.
Let $f : A \to \R$ be a real function.
Let $x_0 \in A$.

Then:

$f$ is continuous at $x_0$
if and only if:

$f$ is both left-continuous and right-continuous at $x_0$


Proof
Necessary Condition
Suppose $f$ is continuous at $x_0$.
Then, by definition:

$\ds \lim_{x \mathop \to x_0} \map f x = \map f {x_0}$
By Limit iff Limits from Left and Right:

$\ds \lim_{x \mathop \to x_0^-} \map f x = \map f {x_0}$
$\ds \lim_{x \mathop \to x_0^+} \map f x = \map f {x_0}$
Therefore, by definition, $f$ is both left-continuous and right-continuous at $x_0$.
$\Box$


Sufficient Condition
Suppose $f$ is both left-continuous and right-continuous at $x_0$.
Then, by the respective definitions:

$\ds \lim_{x \mathop \to x_0^-} \map f x = \map f {x_0}$
$\ds \lim_{x \mathop \to x_0^+} \map f x = \map f {x_0}$
By Limit iff Limits from Left and Right:

$\ds \lim_{x \mathop \to x_0} \map f x = \map f {x_0}$
Therefore, by definition, $f$ is continuous at $x_0$.
$\blacksquare$





