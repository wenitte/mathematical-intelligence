# 

Source: https://proofwiki.org/wiki/Limit_of_Function_by_Convergent_Sequences/Corollary



Theorem
Let $\openint a b$ be an open real interval.
Let $f: \openint a b \to \R$ be a real function.
Let $l \in \R$.

Then:

$(1): \quad \ds \lim_{x \mathop \to a^+} \map f x = l \iff \forall \sequence {x_n} \subseteq \openint a b: \lim_{n \mathop \to \infty} x_n = a \implies \lim_{n \mathop \to \infty} \map f {x_n} = l$
$(2): \quad \ds \lim_{x \mathop \to b^-} \map f x = l \iff \forall \sequence {x_n} \subseteq \openint a b: \lim_{n \mathop \to \infty} x_n = b \implies \lim_{n \mathop \to \infty} \map f {x_n} = l$
where:

$\ds \lim_{x \mathop \to a^+} \map f x$ denotes the limit of $f$ from the right
$\ds \lim_{x \mathop \to b^-} \map f x$ denotes the limit of $f$ from the left.


Proof
We have that $\struct {\R, d}$ is a metric space, where $d$ is the Euclidean metric on $\R$.
Thus the theorem follows immediately from Limit of Real Function by Convergent Sequences.
$\blacksquare$


Axiom of Countable Choice
This theorem depends on the Axiom of Countable Choice, by way of Limit of Real Function by Convergent Sequences.
Although not as strong as the Axiom of Choice, the Axiom of Countable Choice is similarly independent of the Zermelo-Fraenkel axioms.
As such, mathematicians are generally convinced of its truth and believe that it should be generally accepted.


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.9$




