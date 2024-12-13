# 

Source: https://proofwiki.org/wiki/Integrability_Theorem_for_Functions_Continuous_on_Open_Intervals


It has been suggested that this page be renamed.In particular: Function Continuous on Open Interval and with One-Sided Limits is Darboux IntegrableTo discuss this page in more detail, feel free to use the talk page.
Theorem
Let $f$ be a real function defined on a closed interval $\closedint a b$ such that $a < b$.
Let $f$ be continuous on $\openint a b$.
Let the one-sided limits $\ds \lim_{x \mathop \to a^+} \map f x$ and $\ds \lim_{x \mathop \to b^-} \map f x$ exist.

Then $f$ is Darboux integrable on $\closedint a b$.


Proof
We start by showing that $f$ is bounded.

A real function $g$ defined on $\closedint a b$ exists by Extendability Theorem for Function Continuous on Open Interval such that:

$g$ equals $f$ on $\openint a b$
$g$ is continuous on $\closedint a b$
Therefore:

$g$ is bounded on $\closedint a b$ by Continuous Function on Compact Subspace of Euclidean Space is Bounded and Closed Real Interval is Compact in Metric Space
Accordingly, $g$ is bounded on $\openint a b$ as $\openint a b$ is a subset of $\closedint a b$.
Therefore, $f$ is bounded on $\openint a b$ as $f = g$ on $\openint a b$.
Also, $f$ is bounded on the set $\set {a, b}$ by the maximum $\map \max {\size {\map f a}, \size {\map f b} }$.
Therefore:

$f$ is bounded on $\closedint a b$

We have:

$f$ is bounded on $\closedint a b$
$f$ is continuous on $\openint a b$
Therefore:

$f$ is Darboux integrable on $\closedint a b$ by Bounded Function Continuous on Open Interval is Darboux Integrable.
$\blacksquare$





