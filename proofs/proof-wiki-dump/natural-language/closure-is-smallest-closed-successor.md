# 

Source: https://proofwiki.org/wiki/Closure_is_Smallest_Closed_Successor

Theorem
Let $\struct {S, \preceq}$ be an ordered set.
Let $f: S \to S$ be a closure operator on $S$.
Let $x \in S$.

Then $\map f x$ is the smallest closed element that succeeds $x$.


Proof
By the definition of closure operator, $f$ is inflationary.
Thus $x \preceq \map f x$.
By definition, $\map f x$ is closed.
So $\map f x$ is a closed element that succeeds $x$.
We will now show that it is the smallest such.
Let $k$ be a closed element of $S$ such that $x \preceq k$.
Since $f$ is a closure operator, it is increasing.
Therefore $\map f x \preceq \map f k$.
Since $k$ is closed, $\map f k = k$.
Thus $\map f x \preceq k$.
$\blacksquare$





