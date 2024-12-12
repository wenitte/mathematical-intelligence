# 

Source: https://proofwiki.org/wiki/Condition_for_Continuity_on_Interval

Theorem
Let $f$ be a real function defined on an interval $\mathbb I$.

Then $f$ is continuous on $\mathbb I$ if and only if:

$\forall x \in \mathbb I: \forall \epsilon > 0: \exists \delta > 0: y \in \mathbb I \land \size {x - y} < \delta \implies \size {\map f x - \map f y} < \epsilon$


Proof
Let $x \in \mathbb I$ such that $x$ is not an end point.
Then the condition $y \in \mathbb I \land \size {x - y} < \delta$ is the same as $\size {x - y} < \delta$ provided $\delta$ is small enough.
The criterion given therefore becomes the same as the statement $\ds \lim_{y \mathop \to x} \map f y = \map f x$, that is, that $f$ is continuous at $x$.

Now suppose $x \in \mathbb I$ and $x$ is a left hand end point of $\mathbb I$.
Then the condition $y \in \mathbb I \land \size {x - y} < \delta$ reduces to $x \le y < x + \delta$ provided $\delta$ is small enough.
The criterion given therefore becomes the same as the statement $\ds \lim_{y \mathop \to x^+} \map f y = \map f x$, that is, that $f$ is continuous on the right at $x$.
Similarly, if $x \in \mathbb I$ and $x$ is a right hand end point of $\mathbb I$, then the criterion reduces to the statement that $f$ is continuous on the left at $x$.

Thus the assertions are equivalent to the statement that $f$ is continuous at all points in $\mathbb I$, that is, that $f$ is continuous on $\mathbb I$.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 9.3$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.7$: Continuity




