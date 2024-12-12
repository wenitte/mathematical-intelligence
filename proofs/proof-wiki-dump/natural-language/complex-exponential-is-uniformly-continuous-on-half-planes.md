# 

Source: https://proofwiki.org/wiki/Complex_Exponential_is_Uniformly_Continuous_on_Half-Planes

Theorem
Let $a \in \R$.
Then $\exp$ is uniformly continuous on the half-plane $\set {z \in \C : \map \Re z \le a}$.


Corollary
Let $X$ be a set.
Let $\family {g_n}$ be a family of mappings $g_n : X \to \C$.
Let $g_n$ converge uniformly to $g: X \to \C$.
Let there be a constant $a \in \R$ such that $\map \Re {\map g x} \le a$ for all $x \in X$.

Then $\exp g_n$ converges uniformly to $\exp g$.


Proof
Let $\epsilon > 0$.
For $x, y \in \C$ with $\map \Re x, \map \Re y \le a$:














\(\ds \cmod {e^x - e^y}\)

\(=\)







\(\ds \cmod {e^y} \cdot \cmod {e^{x - y} - 1}\)




















\(\ds \)

\(=\)







\(\ds e^{\map \Re y} \cdot \cmod {e^{x - y} - 1}\)





Modulus of Exponential is Exponential of Real Part














\(\ds \)

\(\le\)







\(\ds e^a \cdot \cmod {e^{x - y} - 1}\)





Exponential is Strictly Increasing



Because Exponential Function is Continuous, there exists $\delta > 0$ such that $\cmod {e^z - 1} < \epsilon$ for $\cmod z < \delta$.
Thus if $\cmod {x - y} < \delta$, $\cmod {e^x - e^y} < e^a \epsilon$.
Thus $\exp$ is uniformly continuous.
$\blacksquare$





