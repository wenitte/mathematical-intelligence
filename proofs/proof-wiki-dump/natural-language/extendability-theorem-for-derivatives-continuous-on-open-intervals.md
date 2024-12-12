# 

Source: https://proofwiki.org/wiki/Extendability_Theorem_for_Derivatives_Continuous_on_Open_Intervals



Theorem
Let $f$ be a continuous real function defined on an interval $\closedint a b$ where $a < b$.

Then $f$ is continuously differentiable on $\closedint a b$ if and only if:

$f$ is continuously differentiable on $\openint a b$
and:

$\ds \lim_{x \mathop \to a^+} \map {f'} x$ and $\ds \lim_{x \mathop \to b^-} \map {f'} x$ exist.


Proof
Necessary Condition
Suppose that $f$ is continuously differentiable on $\closedint a b$.
We need to show that:

$f$ is continuously differentiable on $\openint a b$
and:

$\ds \lim_{x \mathop \to a^+} \map {f'} x$ and $\ds \lim_{x \mathop \to b^-} \map {f'} x$ exist.

$f$ is continuously differentiable on $\openint a b$ because:

$f$ is continuously differentiable on $\closedint a b$
$\openint a b$ is a subset of $\closedint a b$.
What remains to show is that $\ds \lim_{x \mathop \to a^+} \map {f'} x$ and $\ds \lim_{x \mathop \to b^-} \map {f'} x$ exist.
We shall only make a proof of the existence of $\ds \lim_{x \mathop \to a^+} \map {f'} x$ as the proof of the existence of $\ds \lim_{x \mathop \to b^-} \map {f'} x$ is similar.

Since $f$ is differentiable at $a$, $\map {f'} a$ exists.
Since $f'$ is continuous at $a$, the following equation is true:

$\ds \map {f'} a = \lim_{x \mathop \to a^+} \map {f'} x$
Therefore the right hand side of this equation exists.
$\Box$


Sufficient Condition
Suppose that:

$f$ is continuously differentiable on $\openint a b$
and:

$\ds \lim_{x \mathop \to a^+} \map {f'} x$ and $\ds \lim_{x \mathop \to b^-} \map {f'} x$ exist.

We need to show that $f$ is continuously differentiable on $\closedint a b$.
We know that $f$ is continuously differentiable on $\openint a b$ so what remains to show is the following:

$\map {f'} a$ exists
$f'$ is continuous at $a$
$\map {f'} b$ exists
$f'$ is continuous at $b$.
We shall limit ourselves to constructing a proof of the first two of these statements as the proof of the last two statements is similar.

Since $a$ is the left-most end point of the domain of $f$, $\map {f'} a$ is the right-hand derivative of $f$ at $a$, denoted by $\map {f'_+} a$.
We have per definition:

$\ds \map {f'_+} a = \lim_{\delta \mathop \to 0^+} \frac {\map f {a + \delta} - \map f a} \delta$
Since $f$ is continuous on $\closedint a b$ and differentiable on $\openint a b$, the Mean Value Theorem gives that a point $c$ in $\openint a  {a + \delta}$ exists such that

$\map f {a + \delta} - \map f a = \map {f'} c \delta$
We use this equation in the expression for $\map {f'_+} a$:














\(\ds \map {f'_+} a\)

\(=\)







\(\ds \lim_{\delta \mathop \to 0^+} \frac {\map f {a + \delta} - \map f a} \delta\)




















\(\ds \)

\(=\)







\(\ds \lim_{\delta \mathop \to 0^+} \frac {\map {f'} c \, \delta} \delta\)




















\(\ds \)

\(=\)







\(\ds \lim_{\delta \mathop \to 0^+} \map {f'} c\)









Since $c$ is in $\openint a {a + \delta}$, we have $\size {c - a} < \delta$.
Therefore, $c$ approaches $a$ when $\delta$ approaches 0.
Moreover, since $c > a$, $c$ approaches $a$ from above.
Since $\ds \lim_{x \mathop \to a^+} \map {f'} x$ exists, so does $\ds \lim_{\delta \mathop \to 0^+} \map {f'} c$ because $c \to a^+$ when $\delta \to 0^+$.
Furthermore, they are equal.
Hence, since we proved above that $\ds \lim_{\delta \mathop \to 0^+} \map {f'} c$ equals $\map {f'_+} a$

$\ds \map {f'_+} a = \lim_{x \mathop \to a^+} \map {f'} x$
Since $\ds \lim_{x \mathop \to a^+} \map {f'} x$ exists per presupposition, we conclude that $\map {f'_+} a$ exists, and that their values are equal.
Hence $\map {f'} a$ exists and equals $\ds \lim_{x \mathop \to a^+} \map {f'} x$.
Thus, the first of the two statements we needed to prove is proven.

Now we shall prove that $f'$ is continuous at $a$.
Since $a$ is the left-most end point of the domain of $f$, $f'$ being continuous at $a$ means that $\ds \map {f'} a = \lim_{x \mathop \to a^+} \map {f'} x$.
Since we just proved this, we conclude that $f'$ is continuous at $a$.
$\blacksquare$


Also see
Right-Hand Derivative not Limit of Derivative from Right
Extendability Theorem for Function Continuous on Open Interval




