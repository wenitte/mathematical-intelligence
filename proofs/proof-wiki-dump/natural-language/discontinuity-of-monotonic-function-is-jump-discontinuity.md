# 

Source: https://proofwiki.org/wiki/Discontinuity_of_Monotonic_Function_is_Jump_Discontinuity

Theorem
Let $X$ be an open set of $\R$.
Let $f: X \to Y$ be a monotone real function.

Then $f$ is discontinuous at a point $c \in X$ if and only if $c$ is a jump discontinuity of $f$.


Proof
The backwards implication follows directly from definition of a jump discontinuity.
$\Box$

For the forwards implication, we prove the contrapositive.
Without loss of generality suppose $f$ is increasing.
If $f$ is decreasing, note that $-f$ is increasing and we can simply replace $f$ by $-f$ in the following analysis.

Suppose that $c \in X$ is not a jump discontinuity of $f$.
By definition of jump discontinuity, it is not the case that:

$\ds \map f {c^-} = \lim_{x \mathop \to c^-} \map f x$ and $\ds \map f {c^+} = \lim_{x \mathop \to c^+} \map f x$ exist and are not equal.
By definition of an open set:

there exists $\epsilon \in \R_{>0}$ such that $\openint {c - \epsilon} {c + \epsilon} \subseteq X$.
By Limit of Monotone Real Function/Increasing/Corollary, since $c \in \openint {c - \epsilon} {c + \epsilon}$:

$\map f {c^-}$ and $\map f {c^+}$ both exist;
$\map f {c^-} \le \map f c \le \map f {c^+}$
Hence by Modus Ponendo Tollens:

$\map f {c^-} = \map f {c^+}$
Therefore we have:

$\map f {c^-} = \map f c = \map f {c^+}$
By Limit iff Limits from Left and Right:

$\map f x \to \map f c$ as $x \to c$
Hence $f$ is continuous at $c$ by definition.
Thus we have shown the contrapositive of the forwards implication.
$\blacksquare$





