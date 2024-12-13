# 

Source: https://proofwiki.org/wiki/Limit_of_Composite_Function



Theorem
Let $f$ and $g$ be real functions.
Let:














\(\ds \ds \lim_{y \mathop \to \eta} \map f y\)

\(=\)







\(\ds l\)




















\(\ds \ds \lim_{x \mathop \to \xi} \map g x\)

\(=\)







\(\ds \eta\)










Then, if either:

Hypothesis 1: $f$ is continuous at $\eta$ (that is $l = \map f \eta$)
or:

Hypothesis 2: for some open interval $I$ containing $\xi$, it is true that $\map g x \ne \eta$ for any $x \in I$ except possibly $x = \xi$
then:

$\ds \lim_{x \mathop \to \xi} \map f {\map g x} = \lim_{y \mathop \to \eta} \map f y$


Corollary
Let $I$ and $J$ be real intervals.
Let:

$(1): \quad g: I \to J$ be a real function which is continuous on $I$
$(2): \quad f: J \to \R$ be a real function which is continuous on $J$.
Then the composite function $f \circ g$ is continuous on $I$.


Proof
Let $\epsilon > 0$.
Since $\ds \lim_{y \mathop \to \eta} \map f y = l$, we can find $\Delta > 0$ such that:

$\size {\map f y - l} < \epsilon$ provided $0 < \size {y - \eta} < \Delta$
Let $y = \map g x$.
Then, provided that $0 < \size {\map g x - \eta} < \Delta$, we have:

$\size {\map f {\map g x} - l} < \epsilon$
But $\ds \lim_{x \mathop \to \xi} \map g x = \eta$ and $\Delta > 0$.
Hence:

$\exists \delta > 0: \size {\map g x - \eta} < \Delta$ provided that $0 < \size {x - \xi} < \delta$

We now need to establish the reason for the conditions under which $0 < \size {x - \xi} < \delta \implies \size {\map f {\map g x} - l} < \epsilon$.


Counterexample
As it stands, this is not generally the case, as follows.

Let $f$ and $g$ be the real functions defined as:














\(\ds \map g x\)

\(=\)







\(\ds \eta\)




















\(\ds \map f y\)

\(=\)







\(\ds \begin {cases} y_1 & : y = \eta \\ y_2 & : y \ne \eta \end{cases}\)









for $\eta, y_1, y_2 \in \R$.

Then:

$\ds \lim_{y \mathop \to \eta} \map f y = y_2$
and:

$\ds \lim_{x \mathop \to \xi} \map g x = \eta$

But we have:

$\forall x \in \R: \map f {\map g x} = y_1$
and so:

$\ds \lim_{x \mathop \to \xi} \map f {\map g x} = y_1$

Hence it is not true that:

$\ds \lim_{x \mathop \to \xi} \map f {\map g x} = \lim_{y \mathop \to \eta} \map f y$

Now, if Hypothesis 1: $f$ is continuous at $\eta$, then $l = \map f \eta$ and so $\size {\map f y - l} < \epsilon$ even when $y = \eta$.
So we can write: provided that $\size {\map g x - \eta} < \Delta$, we have:

$\size {\map f {\map g x} - l} < \epsilon$
and the argument holds.

Otherwise, let us assume Hypothesis 2: For some open interval $I$ containing $\xi$, it is true that $\map g x \ne \eta$ for any $x \in I$ except possibly $x = \xi$.
Then we can be sure that $\map g x \ne \eta$ provided that $0 < \size {x - \xi} < \delta$ for sufficiently small $\delta > 0$.
So we can write: $0 < \size {\map g x - \eta} < \Delta$ provided that $0 < \size {x - \xi} < \delta$, and the argument holds.
$\blacksquare$


Sources
1977: K.G. Binmore: Mathematical Analysis: A Straightforward Approach ... (previous) ... (next): $\S 8.17$




