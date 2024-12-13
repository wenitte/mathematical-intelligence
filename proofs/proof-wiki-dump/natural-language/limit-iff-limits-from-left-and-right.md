# 

Source: https://proofwiki.org/wiki/Limit_iff_Limits_from_Left_and_Right



Theorem
Let $f$ be a real function defined on an open interval $\openint a b$ except possibly at a point $c \in \openint a b$.

Then:

$\map f x \to l$ as $x \to c$
if and only if:

$\map f x \to l$ as $x \to c^-$
and

$\map f x \to l$ as $x \to c^+$


Proof
Necessary Condition
Let $\map f x \to l$ as $x \to c$.
Then from the definition of the limit of a function:

$\forall \epsilon > 0: \exists \delta > 0: 0 < \size {x - c} < \delta \implies \size {\map f x - l} < \epsilon$
So for any given $\epsilon$, there exists a $\delta$ such that:

$0 < \size {x - c} < \delta$
implies that:

$l - \epsilon < \map f x < l + \epsilon$
Now:














\(\ds \)

\(\)







\(\ds 0 < \size {x - c} < \delta\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds - \delta < -\paren {x - c} < 0\)




















\(\ds \lor\)

\(\)







\(\ds 0 < \paren {x - c} < \delta\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds c - \delta < x < c\)




















\(\ds \lor\)

\(\)







\(\ds c < x < c + \delta\)










That is: $\forall \epsilon > 0: \exists \delta > 0$:

$(1): \quad c - \delta < x < c \implies \norm {\map f x - l} < \epsilon$
$(2): \quad c < x < c + \delta \implies \norm {\map f x - l} < \epsilon$

So given that particular value of $\epsilon$, we can find a value of $\delta$ such that the conditions for both:

$(1): \quad f$ tending to the limit $l$ as $x$ tends to $c$ from the left
and :

$(2): \quad f$ tending to the limit $l$ as $x$ tends to $c$ from the right.

Thus:

$\ds \lim_{x \mathop \to c} \map f x = l$
implies that:

$\ds \lim_{x \mathop \to c^-} \map f x = l$
and:

$\ds \lim_{x \mathop \to c^+} \map f x = l$
$\Box$


Sufficient Condition
Let $\map f x \to l$ as $x \to c^-$ and $\map f x \to l$ as $x \to c^+$.
This means that:

$(1): \quad \forall \epsilon > 0: \exists \delta > 0: c - \delta < x < c \implies \size {\map f x - l} < \epsilon$
and :

$(2): \quad \forall \epsilon > 0: \exists \delta > 0: c < x < c + \delta \implies \size {\map f x - l} < \epsilon$
In the same manner as above, the conditions on $\delta$ give us that:














\(\ds \)

\(\)







\(\ds c - \delta < x < c\)




















\(\ds \land\)

\(\)







\(\ds c < x < c + \delta\)














\(\ds \leadsto \ \ \)





\(\ds \)

\(\)







\(\ds 0 < \size {x - c} < \delta\)










So:

$\forall \epsilon > 0: \exists \delta > 0: 0 < \size {x - c} < \delta \implies \size {\map f x - l} < \epsilon$

Thus:

$\ds \lim_{x \mathop \to c^-} \map f x = l$
and:

$\ds \lim_{x \mathop \to c^+} \map f x = l$
together imply that:

$\ds \lim_{x \mathop \to c} \map f x = l$
Hence the result.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.4$
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): Appendix: $\S 18.6$: Limits of functions




