# 

Source: https://proofwiki.org/wiki/Extendability_Theorem_for_Function_Continuous_on_Open_Interval



Theorem
Let $f$ be a continuous real function that is defined on an open interval $\openint a b$.
Let $g$ be a real function that satisfies:

$g$ is defined on $\closedint a b$
$g$ is continuous on $\closedint a b$
$g = f$ on $\openint a b$.

Then $g$ exists if and only if $\ds \lim_{x \mathop \to a^+} \map f x$ and $\ds \lim_{x \mathop \to b^-} \map f x$ exist.


Proof
Necessary Condition
Assume that $g$ exists.
We need to prove that the limits $\ds \lim_{x \mathop \to a^+} \map f x$ and $\ds \lim_{x \mathop \to b^-} \map f x$ exist.

$g$ is continuous at the end points $a$ and $b$ of its domain as $g$ is continuous on $\closedint a b$.
$g$ is right-continuous at $a$ and left-continuous at $b$.
This means that $\map g a = \ds \lim_{x \mathop \to a^+} \map g x$ and $\map g b = \ds \lim_{x \mathop \to b^-} \map g x$.
In turn, this means that the expressions $\ds \lim_{x \mathop \to a^+} \map g x$ and $\ds \lim_{x \mathop \to b^-} \map g x$ exist.
The two $x$ parameters as being part of the two limiting processes in these expressions can be considered confined to $\openint a b$.
Therefore, $g$ in these two expressions can be replaced by $f$ as $g = f$ on $\openint a b$.
We conclude that $\ds \lim_{x \mathop \to a^+} \map f x$ and $\ds \lim_{x \mathop \to b^-} \map f x$ exist.
$\Box$


Sufficient Condition
Let $\ds \lim_{x \mathop \to a^+} \map f x$ and $\ds \lim_{x \mathop \to b^-} \map f x$ exist.
We need to prove that a function $g$ with the properties listed in the theorem exists.

Define $g = f$ on $\openint a b$.
Define:

$\map g a = \ds \lim_{x \mathop \to a^+} \map f x$
$\map g b = \ds \lim_{x \mathop \to b^-} \map f x$
$g$ is defined at $a$ and $b$ as ensured by the existence of the limits on the right hand sides of these two equations.
We know that $f$ is continuous on $\openint a b$.
Therefore, $g$ too is continuous on $\openint a b$ as $g = f$ there.

It remains to show that $g$ is continuous at $a$ and $b$.

$\map g a = \ds \lim_{x \mathop \to a^+} \map f x$ per definition.
$x$ can be considered as being an element of $\openint a b$ as the limiting process at $a$ requires $x$ to approach $a$ from above.
$\map g b = \ds \lim_{x \mathop \to b^-} \map f x$ per definition.
$x$ can be considered as being an element of $\openint a b$ as the limiting process at $b$ requires $x$ to approach $b$ from below.
Therefore, the two equations above can be written:

$\map g a = \ds \lim_{x \mathop \to a^+} \map g x$
$\map g b = \ds \lim_{x \mathop \to b^-} \map g x$
as $g = f$ on $\openint a b$.
We conclude that $g$ is continuous at $a$ and $b$ as these two equations are exactly the definitions of continuity for $g$ at respectively $a$ and $b$.
$\blacksquare$


Also see
Extendability Theorem for Derivatives Continuous on Open Intervals




