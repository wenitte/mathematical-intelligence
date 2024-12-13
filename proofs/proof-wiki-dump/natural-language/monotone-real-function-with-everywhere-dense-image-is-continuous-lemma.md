# 

Source: https://proofwiki.org/wiki/Monotone_Real_Function_with_Everywhere_Dense_Image_is_Continuous/Lemma



Theorem
Let $I$ and $J$ be real intervals.
Let $f: I \to J$ be a monotone  real function.
Let $f \sqbrk I$ denote the image of $I$ under $f$.
Let $f \sqbrk I$ be everywhere dense in $J$.
Let $c \in I$.

Then:

$\ds \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x} \cap f \sqbrk I \subseteq \set {\map f c}$


Proof
From Discontinuity of Monotonic Function is Jump Discontinuity, $\ds \lim_{x \mathop \to c^-} \map f x$ and $\ds \lim_{x \mathop \to c^+} \map f x$ are finite.
Since $f$ is increasing:

$\ds \lim_{x \mathop \to c^-} \map f x < \lim_{x \mathop \to c^+} \map f x$
Suppose $z \in \ds \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x} \cap f \sqbrk I$.
Then:

$\ds \exists t \in I : \map f t \in \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x}$


Case 1 : $t < c$
Suppose that $t < c$.














\(\ds t\)

\(<\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(\le\)







\(\ds \lim_{x \mathop \to c^-} \map f x\)





Definition of Increasing Real Function








\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(\notin\)







\(\ds \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x}\)





Definition of Open Real Interval



So we may discard this case.
$\Box$


Case 2 : $t = c$
Suppose that $t = c$.














\(\ds t\)

\(=\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(=\)







\(\ds \map f c\)





Definition of Mapping








\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(\in\)







\(\ds \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x}\)





Definition of Open Real Interval



So the proposition holds in this case.
$\Box$


Case 3 : $c < t$
Suppose that $t > c$.














\(\ds t\)

\(>\)







\(\ds c\)














\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(\ge\)







\(\ds \lim_{x \mathop \to c^+} \map f x\)





Definition of Increasing Real Function








\(\ds \leadsto \ \ \)





\(\ds \map f t\)

\(\notin\)







\(\ds \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x}\)





Definition of Open Real Interval



So we may discard this case.
$\Box$

So $\map f t = c$, by Proof by Cases.

Thus:














\(\ds z\)

\(=\)







\(\ds \map f t\)





Definition of $t$














\(\ds \)

\(=\)







\(\ds c\)





from above








\(\ds \leadsto \ \ \)





\(\ds z\)

\(\in\)







\(\ds \set {\map f c}\)










Thus:

$\ds z \in \openint {\lim_{x \mathop \to c^-} \map f x} {\lim_{x \mathop \to c^+} \map f x} \cap f \sqbrk I \implies z \in \set {\map f c}$

Hence the result, by definition of subset.
$\blacksquare$





