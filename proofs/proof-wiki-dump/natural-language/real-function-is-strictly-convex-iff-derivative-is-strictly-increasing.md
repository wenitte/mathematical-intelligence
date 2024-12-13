# 

Source: https://proofwiki.org/wiki/Real_Function_is_Strictly_Convex_iff_Derivative_is_Strictly_Increasing


This article has been identified as a candidate for Featured Proof status.If you do not believe that this proof is worthy of being a Featured Proof, please state your reasons on the talk page.To discuss this page in more detail, feel free to use the talk page.


Theorem
Let $f$ be a real function which is differentiable on the open interval $\openint a b$.

Then $f$ is strictly convex on $\openint a b$ if and only if its derivative $f'$ is strictly increasing on $\openint a b$.


Proof
Necessary Condition
Let $f$ be strictly convex on $\openint a b$.
Let $r, s \in \openint a b$ be arbitrarily selected such that $r < s$.
We are to show that:

$\map {f'} r < \map {f'} s$

Let $x_1, x_2, x_3 \in \openint a b$ be chosen such that:

$r < x_1 < x_2 < x_3 < s$
By the definition of strictly convex:

$(1): \quad \dfrac {\map f {x_1} - \map f r} {x_1 - r} < \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} < \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2} < \dfrac {\map f s - \map f {x_3} } {s - x_3}$
and:

$(2): \quad \dfrac {\map f {x_2} - \map f r} {x_2 - r} < \dfrac {\map f s - \map f {x_2} } {s - x_2}$

Let $x_1 \to r^+$.
Then:














\(\ds \dfrac {\map f {x_1} - \map f r} {x_1 - r}\)

\(<\)







\(\ds \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)














\(\ds \leadsto \ \ \)





\(\ds \lim_{x_1 \mathop \to r^+} \dfrac {\map f {x_1} - \map f r} {x_1 - r}\)

\(\le\)







\(\ds \lim_{x_1 \mathop \to r^+} \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1}\)





Limits Preserve Inequalities




\(\text {(3)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \map {f'} r\)

\(\le\)







\(\ds \dfrac {\map f {x_2} - \map f r} {x_2 - r}\)





Definition of Derivative of Real Function at Point




Similarly, let $x_3 \to s^-$.
We have:














\(\ds \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)

\(<\)







\(\ds \dfrac {\map f s - \map f {x_3} } {s - x_3}\)





from $(1)$








\(\ds \leadsto \ \ \)





\(\ds \lim_{x_3 \mathop \to s^-} \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}\)

\(\le\)







\(\ds \lim_{x_3 \mathop \to s^-} \dfrac {\map f s - \map f {x_3} } {s - x_3}\)





Limits Preserve Inequalities




\(\text {(4)}: \quad\)



\(\ds \leadsto \ \ \)





\(\ds \dfrac {\map f s - \map f {x_2} } {s - x_2}\)

\(\le\)







\(\ds \map {f'} s\)





Definition of Derivative of Real Function at Point




Thus we have:














\(\ds \map {f'} r\)

\(\le\)







\(\ds \dfrac {\map f {x_2} - \map f r} {x_2 - r}\)





from $(3)$














\(\ds \)

\(<\)







\(\ds \dfrac {\map f s - \map f {x_2} } {s - x_2}\)





from $(2)$














\(\ds \)

\(\le\)







\(\ds \map {f'} s\)





from $(4)$




Thus:

$\map {f'} r < \map {f'} s$
Hence $f'$ is strictly decreasing on $\openint a b$.


This article needs proofreading.Please check it for mathematical errors.If you believe there are none, please remove {{Proofread}} from the code.To discuss this page in more detail, feel free to use the talk page.When this work has been completed, you may remove this instance of {{Proofread}} from the code.

$\Box$


Sufficient Condition
Let $f'$ be strictly increasing on $\openint a b$.
Let $x_1, x_2, x_3 \in \openint a b: x_1 < x_2 < x_3$.
By the Mean Value Theorem:

$\exists \xi: \dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} = \map {f'} \xi$
$\exists \eta: \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2} = \map {f'} \eta$
where $x_1 < \xi < x_2 < \eta < x_3$.
Since $f'$ is strictly increasing:

$\map {f'} \xi < \map {f'} \eta$
Thus:

$\dfrac {\map f {x_2} - \map f {x_1} } {x_2 - x_1} < \dfrac {\map f {x_3} - \map f {x_2} } {x_3 - x_2}$
Hence $f$ is strictly convex by definition.
$\blacksquare$


Also see
Real Function is Convex iff Derivative is Increasing
Real Function is Concave iff Derivative is Decreasing
Real Function is Strictly Concave iff Derivative is Strictly Decreasing




