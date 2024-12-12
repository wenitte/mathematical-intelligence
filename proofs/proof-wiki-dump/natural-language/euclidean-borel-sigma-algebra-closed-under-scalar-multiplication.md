# 

Source: https://proofwiki.org/wiki/Euclidean_Borel_Sigma-Algebra_Closed_under_Scalar_Multiplication

Theorem
Let $\map \BB {\R^n}$ be the Borel $\sigma$-algebra on $\R^n$.
Let $B \in \BB$, and let $t \in \R_{>0}$.

Then also $t \cdot B := \set {t \mathbf b: \mathbf b \in B} \in \BB$.


Proof
Define $f: \R^n \to \R^n$ by $\map f {\mathbf x} := \dfrac 1 t \mathbf x$.
Then for all $\mathbf x \in \R^n$, $\map {f^{-1} } {\mathbf x} = \set {t \mathbf x}$, where $f^{-1}$ denotes the preimage of $f$.
Thus $\ds t \cdot B = \bigcup_{\mathbf b \mathop \in B} \map {f^{-1} } {\mathbf b} = \map {f^{-1} } B$, where the last equality holds by definition of preimage.

It follows that the statement of the theorem comes down to showing that $f$ is $\BB \, / \, \BB$-measurable.
By Characterization of Euclidean Borel Sigma-Algebra the half-open $n$-rectangles $\JJ_{ho}^n$ generate $\BB$.
Applying Mapping Measurable iff Measurable on Generator, it suffices to demonstrate:

$\forall J \in \JJ_{ho}^n: \map {f^{-1} } J \in \BB$
Now for a half-open $n$-rectangle $J = \horectr {\mathbf a} {\mathbf b}$, it follows from the consideration on $f^{-1}$ above, that:

$\map {f^{-1} } J = \horectr {t \mathbf a} {t \mathbf b}$
which is again in $\JJ_{ho}^n$ and so, in particular, in $\BB$.

Thus $f$ is $\BB \, / \, \BB$-measurable, that is:

$\forall B \in \BB: t \cdot B = \map {f^{-1} } B \in \BB$
which was to be demonstrated.
$\blacksquare$


Sources
2005: René L. Schilling: Measures, Integrals and Martingales ... (previous) ... (next): $\S 5$: Problem $8$




