# 

Source: https://proofwiki.org/wiki/Injection_has_Surjective_Left_Inverse_Mapping



Theorem
Let $S$ and $T$ be sets such that $S \ne \O$.
Let $f: S \to T$ be a injection.

Then there exists a surjection $g: T \to S$ such that:

$g \circ f = I_S$


Proof 1
Since $S$ is non-empty, we can choose an element $x \in S$.
Since $f$ is an injection, for each $t \in \Img f$ there exists a unique $s \in S$ such that:

$\map f s = t$
Thus by Law of Excluded Middle there exists a well-defined mapping $T \to S$ given by:

$\map g t = \begin {cases} s & : \paren {t \in \Img f} \land \paren {\map f s = t} \\ x & : t \notin \Img f \end {cases}$
By construction, for any given $s \in S$, the element $\map f s$ maps to $s$ under $g$.
Therefore $g: T \to S$ is a surjection.
$\blacksquare$


Proof 2
By Injection iff Left Inverse, $f$ has a left inverse $g: T \to S$.
By Left Inverse Mapping is Surjection, $g$ is a surjection.
$\blacksquare$


Law of the Excluded Middle
This theorem depends on the Law of the Excluded Middle.
This is one of the logical axioms that was determined by Aristotle, and forms part of the backbone of classical (Aristotelian) logic.
However, the intuitionist school rejects the Law of the Excluded Middle as a valid logical axiom.
This in turn invalidates this theorem from an intuitionistic perspective.





